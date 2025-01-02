import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ enrollments }) {
  const totalRegisteredApplicants = enrollments.length;
  const fullyFundedApplicants = enrollments.filter(
    (enrollment) => enrollment.category === "full funded"
  ).length;
  const partiallyFundedApplicants = enrollments.filter(
    (enrollment) => enrollment.category === "half fundde"
  ).length;

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Headings</TableCell>
              <TableCell align="justify" sx={{ fontWeight: "bold" }}>
                Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Dummy Data */}
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>Total Number of Registered Applicants</TableCell>
              <TableCell>{totalRegisteredApplicants}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>Fully Funded Scholarship Applicants</TableCell>
              <TableCell>{fullyFundedApplicants}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>Partial Funded Scholarship Applicants</TableCell>
              <TableCell>{partiallyFundedApplicants}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
