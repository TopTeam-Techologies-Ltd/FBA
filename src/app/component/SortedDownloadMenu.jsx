import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const ITEM_HEIGHT = 48;

export default function SortedDownLoadMenu({ enrollments }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getApplicantsByState = (enrollments) => {
    const stateCounts = {};
    enrollments.forEach((enrollment) => {
      if (enrollment.state) {
        stateCounts[enrollment.state] =
          (stateCounts[enrollment.state] || 0) + 1;
      }
    });
    return stateCounts;
  };

  const getApplicantsByCourse = (enrollments) => {
    const courseCounts = {};
    enrollments.forEach((enrollment) => {
      if (enrollment.course) {
        courseCounts[enrollment.course] =
          (courseCounts[enrollment.course] || 0) + 1;
      }
    });
    return courseCounts;
  };

  const getApplicantsByFundingType = (enrollments) => {
    const fundingCounts = { "full funded": 0, "half fundde": 0 };
    enrollments.forEach((enrollment) => {
      if (enrollment.category === "full funded") {
        fundingCounts["full funded"] += 1;
      } else if (enrollment.category === "half fundde") {
        fundingCounts["half fundde"] += 1;
      }
    });
    return fundingCounts;
  };

  // Get counts for each category
  const stateCounts = getApplicantsByState(enrollments);
  const courseCounts = getApplicantsByCourse(enrollments);
  const fundingCounts = getApplicantsByFundingType(enrollments);

  // Function to get applicants based on the category and label
  const getApplicantsForCategory = (label, value) => {
    return enrollments.filter((enrollment) => {
      if (label === "state" && enrollment.state === value) return true;
      if (label === "course" && enrollment.course === value) return true;
      if (label === "funding" && enrollment.category === value) return true;
      return false;
    });
  };

  // Function to convert list of applicants to CSV format
  const convertToCSV = (data) => {
    let csvContent = "Name,State,Course,Category,Email,Phone Number\n"; // CSV Header
    data.forEach((applicant) => {
      csvContent += `${applicant.fullName},${applicant.state},${applicant.course},${applicant.category},${applicant.email},${applicant.phoneNumber}\n`;
    });
    return csvContent;
  };

  // Function to trigger download for a specific item
  const handleDownload = (category, value) => {
    const applicants = getApplicantsForCategory(category, value);
    const csvData = convertToCSV(applicants);
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${value.replace(" ", "_")}_applicants.csv`; // Use the value for the filename
    a.click();
    URL.revokeObjectURL(url); // Clean up after download
  };

  // Dynamically build options for the menu
  const options = [
    { label: "Applicants by States", counts: stateCounts, category: "state" },
    {
      label: "Applicants by Courses",
      counts: courseCounts,
      category: "course",
    },
    {
      label: "Applicants by Funding Types",
      counts: fundingCounts,
      category: "funding",
    },
  ];

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "40ch",
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.label}
            onClick={handleClose}
            sx={{ display: "block" }}
          >
            <div>
              {/* Label on top */}
              <strong>{option.label}</strong>

              {/* List of counts */}
              <ul
                style={{
                  paddingLeft: "20px",
                  listStyle: "initial",
                }}
              >
                {Object.entries(option.counts).map(([key, value]) => (
                  <li
                    key={key}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      listStyle: "initial",
                    }} // Ensure bullets are shown
                  >
                    {key}: {value}
                    {/* Download Button for each item */}
                    <IconButton
                      onClick={() => handleDownload(option.category, key)}
                      sx={{ marginLeft: "10px", color: "green" }}
                    >
                      <DownloadIcon />
                    </IconButton>
                  </li>
                ))}
              </ul>
            </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
