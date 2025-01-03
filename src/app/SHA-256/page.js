"use client";
import * as React from "react";
import { Button } from "@mui/material";
import BasicTable from "../component/Table";
import { getEnrollment } from "../models/getEnrollment";
import { useState, useEffect } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import IconButton from "@mui/material/IconButton";
// Function to convert JSON to CSV
const convertToCSV = (data) => {
  const header = [
    "Full Name",
    "Email",
    "Phone Number",
    "Course",
    "Category",
    "State",
  ];

  const rows = data.map((item) => [
    item.fullName,
    item.email,
    item.phoneNumber,
    item.course,
    item.category,
    item.state,
  ]);

  const csv = [header.join(","), ...rows.map((row) => row.join(","))].join(
    "\n"
  );

  return csv;
};

// Function to trigger CSV download
const downloadCSV = (data) => {
  const csv = convertToCSV(data);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "enrollments.csv");
    link.click();
  }
};

const Page = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Define fetchData outside of useEffect so it can be reused
  async function fetchData() {
    setIsLoading(true);
    const data = await getEnrollment();
    setEnrollments(data);
    setIsLoading(false);
  }

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const getHighestApplications = (enrollments) => {
    const courseCount = {};
    const stateCount = {};
    // Count occurrences of each course and state
    enrollments.forEach(({ course, state }) => {
      courseCount[course] = (courseCount[course] || 0) + 1;
      stateCount[state] = (stateCount[state] || 0) + 1;
    });
    // Find the course with the highest applications
    const topCourse = Object.entries(courseCount).reduce(
      (max, [course, count]) => (count > max.count ? { course, count } : max),
      { course: null, count: 0 }
    );
    // Find the state with the highest applications
    const topState = Object.entries(stateCount).reduce(
      (max, [state, count]) => (count > max.count ? { state, count } : max),
      { state: null, count: 0 }
    );
    return { topCourse, topState };
  };
  const result = getHighestApplications(enrollments);

  // const uncategorized = enrollments.filter(
  //   (enrollment) =>
  //     enrollment.category?.trim().toLowerCase() !== "full funded" &&
  //     enrollment.category?.trim().toLowerCase() !== "half fundde"
  // );

  // console.log("Uncategorized Entries:", uncategorized);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col gap-4 w-full px-4">
        <div>
          <h1 className="text-center text-2xl text-gray-500 uppercase">
            Only us knows this route exist
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center">
          <h1 className="text-center text-sm text-gray-500">
            Use the refresh Icon to always refresh the page to get the most
            up-to-date record from the Database
          </h1>
          <IconButton color="primary" onClick={fetchData}>
            <RefreshIcon />
          </IconButton>
        </div>

        <div className="flex justify-center">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => downloadCSV(enrollments)}
          >
            Download List in CSV
          </Button>
        </div>
        {isLoading ? (
          <p className="flex justify-center">Loading....</p>
        ) : (
          <div className="w-[90%] mx-auto overflow-x-auto">
            <BasicTable enrollments={enrollments} result={result} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
