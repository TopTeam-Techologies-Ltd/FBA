import Image from "next/image";
import {
  CheckCircle,
  Lock,
  LaptopMac,
  BarChart,
  CloudUpload,
} from "@mui/icons-material";
import ScholarshipModal from "./ScholarshipModal";
import ShiftingCountdown from "./Counter";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const FirstCohort = () => {
  return (
    <>
      <div className="px-4 py-8 sm:px-6 md:px-2 lg:px-20 xl:px-28">
        <div className="flex flex-col gap-10">
          {/* Digital Literacy Section */}
          <div className="p-4 flex flex-col text-white gap-8 md:flex-row md:p-6 lg:p-8">
            <Image
              src="/digital4.jpg"
              alt="Digital Literacy Program"
              width={400}
              height={400}
              className="rounded-lg shadow-lg mx-auto md:mx-0"
            />
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold text-start text-[#F5F5F5]">
                  Digital Literacy Program{" "}
                  <span className="font-bold text-2xl text-[#FFD700]">
                    Cohort 1
                  </span>
                </h2>
                <span className="bg-green-500 p-2 italic text-[#fff] font-medium">
                  classes are currently ongoing
                </span>
              </div>
              <p className="text-sm text-[#F5F5F5]">
                In partnership with{" "}
                <a
                  className="text-white hover:text-[#FFD700] font-semibold"
                  target="_blank"
                  href="https://www.topteamlimited.com/training"
                  rel="noopener noreferrer"
                >
                  Topteam Technologies Limited,
                </a>{" "}
                a UK-based tech giant, we offer digital literacy scholarships
                worth over 10 million naira to Nigerians from various regions.
                The program is divided into:
              </p>
              <ul className="text-sm space-y-4">
                <li className="flex items-start gap-2">
                  <CheckCircle fontSize="small" className="text-[#f5f5f5]" />
                  <p className="">
                    <strong>100% Scholarship:</strong> Limited spots available,
                    Interview required upon application.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle fontSize="small" className="text-[#f5f5f5]" />
                  <p>
                    <strong>65% Scholarship:</strong> Course fee slashed by 65%,
                    limited availability, No Interview required.
                  </p>
                </li>
              </ul>
              <h3 className="text-lg font-semibold mt-4">Courses Offered:</h3>
              <ul className="text-sm space-y-4 mt-2">
                <li className="flex items-start gap-2">
                  <Lock className="text-[#f5f5f5]" />
                  <p>Cybersecurity</p>
                </li>
                <li className="flex items-start gap-2">
                  <LaptopMac className="text-[#f5f5f5]" />
                  <p>Software Development</p>
                </li>
                <li className="flex items-start gap-2">
                  <BarChart className="text-[#f5f5f5]" />
                  <p>Data Analysis</p>
                </li>
                <li className="flex items-start gap-2">
                  <CloudUpload className="text-[#f5f5f5]" />
                  <p className="">Cloud Computing with AWS</p>
                </li>
                <li className="flex items-start gap-2">
                  <CloudUpload className="text-[#f5f5f5]" />
                  <p>Cloud Computing with Azure</p>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="flex items-center p-2 justify-center gap-2 rounded-md bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 md:p-4 shadow-lg">
            <PriorityHighIcon className="text-yellow-300 text-3xl animate-pulse" />
            <p className="text-white text-xs md:text-lg font-semibold tracking-wide">
              This program is currently in session. Stay tuned!
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FirstCohort;
