"use client";
import { Button } from "@mui/material";
import BasicTable from "../component/Table";
import RefreshIcon from "@mui/icons-material/Refresh";
import IconButton from "@mui/material/IconButton";
import { getEnrollment } from "../models/getEnrollment";
import { useState, useEffect } from "react";

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

  console.log(enrollments);

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
        {isLoading ? (
          <p className="flex justify-center">loading....</p>
        ) : (
          <>
            <div className="w-[90%] mx-auto overflow-x-auto">
              <BasicTable enrollments={enrollments} />
            </div>
            <div className="flex justify-center">
              <Button variant="contained" color="secondary">
                Download List in CSV
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
