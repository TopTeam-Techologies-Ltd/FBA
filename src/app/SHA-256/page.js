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
  // Sort data by createdAt field in ascending order
  const sortedData = data.sort((a, b) => {
    // Convert Timestamp to Date object for proper comparison
    const dateA = new Date(a.createdAt.seconds * 1000); // converting seconds to milliseconds
    const dateB = new Date(b.createdAt.seconds * 1000); // converting seconds to milliseconds

    return dateA - dateB;
  });

  const csv = convertToCSV(sortedData);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "enrollments.csv");
    link.click();
  }
};

// const arrayA = [
//   "ibrahimhosny360@gmail.com",
//   "johnmuhammed231@gmail.com",
//   "ifekunola@gmail.com",
//   "sulymanibraheem6@gmail.com",
//   "ajayimade1@gmail.com",
//   "olatunjifasasi@gmail.com",
//   "adebayobolarinwa29@gmail.com",
//   "johnmuhammed231@gmail.com",
//   "khaleelshot@gmail.com",
//   "bolakaleshehu@gmail.com",
//   "funmiadamsonjnr@gmail.com",
//   "sojcomtech@gmail.com",
//   "abdussalama142@gmail.com",
//   "ibrahimyahayaoloriegbe7@gmail.com",
//   "adamasani@gmail.com",
//   "koladesowunmi62@gmail.com",
//   "skddkdh@gmail.com",
//   "damilareswift@gmail.com",
//   "muhdabdullahi000@gmail.com",
//   "olamideibrahim511@gmail.com",
//   "mubarakawwal655@gmail.com",
//   "abdulqudusluqman@gmail.com",
//   "olawale16644@gmail.com",
//   "olawalemoshood19@gmail.com",
//   "thajudinfolawiyo@gmail.com",
//   "shehunazeef@gmail.com",
//   "temmythorpeh27@gmail.com",
//   "praiseolanipekun3@gmail.com",
//   "fatimamlawan25@gmail.com",
//   "aresekinatajike@gmail.com",
//   "musaabubakaridowu5@gmail.com",
//   "adenigbamayowa2004@gmail.com",
//   "funmheelahyo63@gmail.com",
//   "shadelawal37@gmail.com",
//   "abdulfatahomore@gmail.com",
//   "opeyemiomotosho289@gmail.com",
//   "biogeraabdullahi@gmail.com",
//   "joyceujuudeme@gmail.com",
//   "ismailolayinka88mubarak@gmail.com",
//   "ajayimade1@gmail.com",
//   "toyeebdurojaiye333@gmail.com",
//   "abdullateef.adegoke@gmail.com",
//   "fadoyinblessing@gmail.com",
//   "lawaladekola49@gmail.com",
//   "rajitoibatadebola@gmail.com",
//   "Abdulrahmansalihu09@gmail.com",
//   "abdullateef.adegoke@gmail.com",
//   "olamideibrahim511@gmail.com",
//   "toyeebayodimejy@gmail.com",
//   "ilawal667@gmail.com",
//   "hlatifat.hl@gmail.com",
//   "zinarexn@gmail.com",
//   "fadipe.john@gmail.com",
//   "Onaolapo643@yahoo.com",
//   "Abdulrahmanyahaya94@gmail.com",
//   "habeebullahib23@gmail.com",
//   "thajudinfolawiyo@gmail.com",
//   "flexiee.olo@gmail.com",
//   "Ameenuyereema15@gmail.com",
//   "abdullateef.adegoke@gmail.com",
//   "muhammadbellooloriegbe@gmail.com",
//   "sanusimoshoodabiola@gmail.com",
//   "e.damilare19@gmail.com",
//   "hikmahayinla@gmail.com",
//   "abdulraheemaishat395@gmail.com",
//   "idrisabdulganiyishola@gmail.com",
//   "thajudinfolawiyo@gmail.com",
//   "abdulaziyzjamiuopeyemi02@gmail.com",
//   "olawale16644@gmail.com",
//   "wisdomapeh12@gmaail.com",
//   "abdul2titilayo2@gmail.com",
//   "abdurrafiusalahudeen@gmail.com",
//   "abdullateef_jamiu@yahoo.com",
//   "kahmederubu@gmail.com",
//   "amookhadijat@yahoo.com",
//   "olumidesimeon92@gmail.com",
//   "flexiee.olo@gmail.com",
//   "gafarbigboy@gmail.com"
// ];

// const arrayB = [
//   "ibrahimhosny360@gmail.com",
//   "johnmuhammed231@gmail.com",
//   "ifekunola@gmail.com",
//   "sulymanibraheem6@gmail.com",
//   "ajayimade1@gmail.com",
//   "olatunjifasasi@gmail.com",
//   "adebayobolarinwa29@gmail.com",
//   "johnmuhammed231@gmail.com",
//   "khaleelshot@gmail.com",
//   "bolakaleshehu@gmail.com",
//   "abdussalama142@gmail.com",
//   "adamasani@gmail.com",
//   "koladesowunmi62@gmail.com",
//   "skddkdh@gmail.com",
//   "muhdabdullahi000@gmail.com",
//   "olamideibrahim511@gmail.com",
//   "mubarakawwal655@gmail.com",
//   "olawale16644@gmail.com",
//   "olawalemoshood19@gmail.com",
//   "thajudinfolawiyo@gmail.com",
//   "temmythorpeh27@gmail.com",
//   "praiseolanipekun3@gmail.com",
//   "fatimamlawan25@gmail.com",
//   "funmheelahyo63@gmail.com",
//   "shadelawal37@gmail.com",
//   "abdulfatahomore@gmail.com",
//   "opeyemiomotosho289@gmail.com",
//   "joyceujuudeme@gmail.com",
//   "ismailolayinka88mubarak@gmail.com",
//   "ajayimade1@gmail.com",
//   "toyeebdurojaiye333@gmail.com",
//   "abdullateef.adegoke@gmail.com",
//   "fadoyinblessing@gmail.com",
//   "lawaladekola49@gmail.com",
//   "Abdulrahmansalihu09@gmail.com",
//   "abdullateef.adegoke@gmail.com",
//   "olamideibrahim511@gmail.com",
//   "toyeebayodimejy@gmail.com",
//   "ilawal667@gmail.com",
//   "hlatifat.hl@gmail.com",
//   "zinarexn@gmail.com",
//   "Onaolapo643@yahoo.com",
//   "Abdulrahmanyahaya94@gmail.com",
//   "habeebullahib23@gmail.com",
//   "thajudinfolawiyo@gmail.com",
//   "Ameenuyereema15@gmail.com",
//   "abdullateef.adegoke@gmail.com",
//   "sanusimoshoodabiola@gmail.com",
//   "e.damilare19@gmail.com",
//   "hikmahayinla@gmail.com",
//   "abdulraheemaishat395@gmail.com",
//   "idrisabdulganiyishola@gmail.com",
//   "thajudinfolawiyo@gmail.com",
//   "olawale16644@gmail.com",
//   "wisdomapeh12@gmaail.com",
//   "abdurrafiusalahudeen@gmail.com",
//   "abdullateef_jamiu@yahoo.com",
//   "olumidesimeon92@gmail.com",
//   "gafarbigboy@gmail.com"
// ];

// const uniqueToA = arrayA.filter(email => !arrayB.includes(email));
// const uniqueToB = arrayB.filter(email => !arrayA.includes(email));

// // Combine the results to get emails not common to both
// const notCommonEmails = [...uniqueToA, ...uniqueToB];

// console.log("Emails not common to both arrays:", notCommonEmails);

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
