"use client";
import { useState, useEffect } from "react";
import React from "react";
import { getEnrollment } from "../models/getEnrollment";
import { Box, Typography, IconButton, TextField } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { formatDate } from "../models/utils";

const DashboardComp = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [filteredEnrollments, setFilteredEnrollments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [dateFilter, setDateFilter] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");

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
          <Box
            key={enrollment.id}
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr 2fr 2fr 1fr 2fr",
              padding: "15px",
              marginBottom: "10px",
              borderBottom: "1px solid #ccc",
              "&:hover": {
                backgroundColor: "#f5f5f5", // Light grey color on hover
                cursor: "pointer", // Change cursor to pointer to indicate it's clickable
                color: "black",
              },
            }}
          >
            <Typography>{index + 1}</Typography> {/* S/N (serial number) */}
            <Typography sx={{ textTransform: "capitalize" }}>
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
        ))
      )}
    </Box>
  );
};

export default DashboardComp;
