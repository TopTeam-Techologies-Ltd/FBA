"use client"
import * as React from "react";
import { Button } from "@mui/material";
import BasicTable from "../component/Table";
import { getEnrollment } from "../models/getEnrollment";
import { useState, useEffect } from "react";

// Function to convert JSON to CSV
const convertToCSV = (data) => {
  const header = [
    "ID",
    "Full Name",
    "Email",
    "Phone Number",
    "Course",
    "Category",
    "State",
    "Comment",
  ];

  const rows = data.map((item) => [
    item.id,
    item.fullName,
    item.email,
    item.phoneNumber,
    item.course,
    item.category,
    item.state,
    item.comment,
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

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const data = await getEnrollment();
      setEnrollments(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col gap-4 w-full px-4">
        <div>
          <h1 className="text-center text-2xl text-gray-500 uppercase">
            Only us knows this route exist
          </h1>
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
            <BasicTable enrollments={enrollments} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
