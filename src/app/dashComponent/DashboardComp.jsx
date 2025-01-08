"use client";
import { useState, useEffect } from "react";
import React from "react";
import { getEnrollment } from "../models/getEnrollment";
import { Box, Typography, IconButton, TextField } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { formatDate } from "../models/utils";
import SortedDownLoadMenu from "../component/SortedDownloadMenu";
import ViewApplicantsDetails from "../component/ViewApplicantsDetails";

const DashboardComp = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [filteredEnrollments, setFilteredEnrollments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [dateFilter, setDateFilter] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedEnrollment, setSelectedEnrollment] = useState(null); // New state for selected enrollment
  const handleOpen = (enrollment) => {
    setSelectedEnrollment(enrollment); // Set the selected enrollment
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedEnrollment(null); // Clear the selected enrollment
  };

  async function fetchData() {
    setIsLoading(true);
    const data = await getEnrollment();
    setEnrollments(data);
    setFilteredEnrollments(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleCategoryFilter = () => {
    setCategoryFilter(categoryFilter === "half fundde" ? null : "half fundde");
  };

  const handleDateFilter = () => {
    setDateFilter(dateFilter === "asc" ? "desc" : "asc");
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const applyFilters = () => {
    let filteredData = [...enrollments];
    // Filter by search query (Full Name)
    if (searchQuery) {
      filteredData = filteredData.filter((enrollment) =>
        enrollment.fullName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    // Filter by category
    if (categoryFilter) {
      filteredData = filteredData.filter(
        (enrollment) => enrollment.category === categoryFilter
      );
    }
    // Filter by registration date (ascending or descending)
    if (dateFilter === "asc") {
      filteredData = filteredData.sort(
        (a, b) => a.createdAt.seconds - b.createdAt.seconds
      );
    } else {
      filteredData = filteredData.sort(
        (a, b) => b.createdAt.seconds - a.createdAt.seconds
      );
    }

    setFilteredEnrollments(filteredData);
  };

  useEffect(() => {
    applyFilters();
  }, [categoryFilter, dateFilter, searchQuery]);

  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      <div className="flex justify-center items-center my-6">
        <div className="flex items-center gap-2">
          <p className="text-2xl font-medium">Applicants Enrollment List</p>
          <SortedDownLoadMenu enrollments={enrollments} />
        </div>
      </div>

      {/* Search Bar */}
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Search by Full Name"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </Box>

      {/* Header Row with Filter Icons */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr 2fr 2fr 1fr 2fr",
          padding: "10px",
          fontWeight: "bold",
          borderBottom: "1px solid #ccc",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>S/N</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>Full Name</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>Category</Typography>
          <IconButton onClick={handleCategoryFilter}>
            <FilterListIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>Course</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>State</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>Registration Date</Typography>
          <IconButton onClick={handleDateFilter}>
            <FilterListIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Loading Spinner */}
      {isLoading && <Typography>Loading...</Typography>}

      {/* Data Rows */}
      {!isLoading && filteredEnrollments.length === 0 ? (
        <Typography>No result found</Typography>
      ) : (
        filteredEnrollments.map((enrollment, index) => (
          <>
            <Box
              onClick={() => handleOpen(enrollment)}
              key={enrollment.id}
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr 2fr 2fr 1fr 2fr",
                padding: "15px",
                marginBottom: "10px",
                borderBottom: "1px solid #ccc",
                "&:hover": {
                  backgroundColor: "whitesmoke", // Light grey color on hover
                  cursor: "pointer", // Change cursor to pointer to indicate it's clickable
                  color: "black",
                },
              }}
            >
              <Typography>{index + 1})</Typography> {/* S/N (serial number) */}
              <Typography sx={{ textTransform: "capitalize", width: "100%" }}>
                {enrollment.fullName}
              </Typography>
              <Typography>
                {enrollment.category === "half fundde"
                  ? "half funded"
                  : enrollment.category}
              </Typography>
              <Typography sx={{ textTransform: "capitalize" }}>
                {enrollment.course}
              </Typography>
              <Typography>
                {enrollment.state === "Federal Capital Territory"
                  ? "FCT"
                  : enrollment.state}
              </Typography>
              <Typography>{formatDate(enrollment.createdAt)}</Typography>
            </Box>
            {/* Conditionally render the modal for the selected enrollment */}
            {selectedEnrollment && selectedEnrollment.id === enrollment.id && (
              <ViewApplicantsDetails
                open={open}
                handleClose={handleClose}
                enrollment={selectedEnrollment}
              />
            )}
          </>
        ))
      )}
    </Box>
  );
};

export default DashboardComp;
