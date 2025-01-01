import Image from "next/image";
import {
  CheckCircle,
  Lock,
  LaptopMac,
  BarChart,
  CloudUpload,
} from "@mui/icons-material";
import ScholarshipModal from "./ScholarshipModal";

const TechSkills = () => {
  return (
    <div
      id="scholarship"
      className="bg-[#027839] px-4 py-8 bg-cover bg-center sm:px-6 md:px-12 lg:px-20 xl:px-28"
    >
      {/* Text Section */}
      <h1 className="text-2xl text-center sm:text-3xl font-thin text-[#F5F5F5] mb-8">
        OUR ACTIVITIES
      </h1>
      <div className="">
        <div className="flex flex-col gap-10">
          {/* Digital Literacy Section */}
          <div className="p-4 flex flex-col text-white gap-8 md:flex-row md:p-6 lg:p-8">
            <Image
              src="/digital3.jpg" // Replace this with your chosen image
              alt="Digital Literacy Program"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-start text-[#F5F5F5]">
                Digital Literacy Program
              </h2>
              <p className="text-sm text-[#F5F5F5]">
                In partnership with{" "}
                <a
                  className="text-white hover:text-[#FFD700] font-semibold"
                  target="_blank"
                  href="https://www.topteamlimited.com/training"
                  rel="noopener noreferrer"
                >
                  TopTeamLtd
                </a>
                , we offer digital literacy scholarships worth over 10 million
                naira to Nigerians from various regions. The program is divided
                into:
              </p>

              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle fontSize="small" className="text-[#f5f5f5]" />{" "}
                  {/* Change to a suitable color */}
                  <p>
                    <strong>100% Scholarship:</strong> Limited spots available,
                    Interview required upon application.
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle fontSize="small" className="text-[#f5f5f5]" />{" "}
                  {/* Change to a suitable color */}
                  <p>
                    <strong>50% Scholarship:</strong> Course fee slashed by 50%,
                    limited availability, No Interview required.
                  </p>
                </li>
              </ul>
              <h3 className="text-lg font-semibold mt-4">Courses Offered:</h3>
              <ul className="text-sm space-y-2 mt-2">
                <li className="flex items-center gap-2">
                  <Lock className="text-[#f5f5f5] " />{" "}
                  {/* Icon for Cybersecurity */}
                  <p>Cybersecurity</p>
                </li>
                <li className="flex items-center gap-2">
                  <LaptopMac className="text-[#f5f5f5] " />{" "}
                  {/* Icon for Software Development */}
                  <p>Software Development</p>
                </li>
                <li className="flex items-center gap-2">
                  <BarChart className="text-[#f5f5f5] " />{" "}
                  {/* Icon for Data Analysis */}
                  <p>Data Analysis</p>
                </li>
                <li className="flex items-center gap-2">
                  <CloudUpload className="text-[#f5f5f5] " />{" "}
                  {/* Icon for Cloud Computing with AWS */}
                  <p>Cloud Computing with AWS</p>
                </li>
                <li className="flex items-center gap-2">
                  <CloudUpload className="text-[#f5f5f5] " />{" "}
                  {/* Icon for Cloud Computing with Azure */}
                  <p>Cloud Computing with Azure</p> and more.
                </li>
              </ul>
              <ScholarshipModal />
            </div>
          </div>
          {/* Feeding the Poor Section */}
          {/* <div className="p-4 flex flex-col text-white gap-8 md:flex-row md:p-6 lg:p-8">
            <Image
              src="/feeding2.jpg" // Replace this with your chosen image
              alt="Feeding the Poor Program"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Feeding the Poor</h2>
              <p className="text-sm text-center">
                Our partnership program focuses on providing essential support
                to vulnerable families in need by:
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="h-2 w-2 bg-white rounded-full mt-1"></span>
                  <p>Delivering food packages to families in crisis.</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-2 w-2 bg-white rounded-full mt-1"></span>
                  <p>
                    Ensuring nutritious meals for underprivileged communities.
                  </p>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TechSkills;
