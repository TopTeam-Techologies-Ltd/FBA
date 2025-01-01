import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VerifiedIcon from "@mui/icons-material/Verified";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
const VisionStatement = () => {
  return (
    <div
      id="our-values"
      className="flex flex-col justify-center gap-6 bg-[#F5F5F5] md:h-[40rem]"
    >
      <div>
        <h1 className="mt-10 text-3xl font-meduim text-center text-[#272727] md:mt-0">
          Vision Statement
        </h1>
      </div>
      <div className="mb-4">
        <p className="w-[60%] mx-auto text-center text-sm">
          To create a Nigeria where every youth has access to quality education
          and where socioeconomic barriers no longer determine one's future
          potential.
        </p>
      </div>
      <div className="w-[90%] mx-auto">
        {/* first Grid */}
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-3 p-2 md:border-r md:border-b md:border-[#027839]">
            <div className="flex flex-col gap-6 p-4">
              <h1 className="text-2xl">Mission Statement</h1>
              <div>
                <Image
                  src={"/arrow.png"}
                  alt="arrow pointing right"
                  width={200}
                  height={40}
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 text-white text-start md:col-span-3 p-2 md:border-r md:border-b md:border-[#027839] flex justify-center items-center bg-[#FFB50A] md:text-center">
            <div>
              <div className="flex justify-center md:hidden">
                <SchoolIcon sx={{ fontSize: 40, marginBottom: "0.5rem" }} />
              </div>
              <p className="text-black">
                Providing educational opportunities and resources to
                underprivileged youth in Nigeria
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 p-2 md:border-r md:border-b md:border-[#027839] flex justify-center items-center md:text-center">
            <div>
              <div className="flex justify-center md:hidden">
                <GroupIcon
                  sx={{
                    fontSize: 40,
                    marginBottom: "0.5rem",
                    color: "#027839",
                  }}
                />
              </div>
              <p>
                Supporting vulnerable communities through targeted aid programs
              </p>
            </div>
          </div>
          <div className="col-span-12 text-white md:col-span-3 p-2 md:border-b md:border-[#027839] bg-[#FFB50A] flex justify-center items-center md:text-center">
            <div>
              <div className="flex justify-center md:hidden">
                <AutoGraphIcon sx={{ fontSize: 40, marginBottom: "0.5rem" }} />
              </div>
              <p className="text-black">
                Creating sustainable pathways out of poverty through knowledge
                and skill development
              </p>
            </div>
          </div>
        </div>
        {/* Second Grid */}
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-3 p-2 md:border-r  md:border-[#027839]">
            <div className="flex flex-col gap-6 p-4">
              <h1 className="text-2xl">Our Core Values</h1>
              <div>
                <Image
                  src={"/arrow.png"}
                  alt="arrow pointing right"
                  width={200}
                  height={40}
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 p-2 md:border-r md:border-[#027839] flex justify-center items-center">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center gap-2">
                <div className="block md:hidden">
                  <FavoriteIcon sx={{ fontSize: 40, color: "#027839" }} />
                </div>
                <h1 className="font-medium text-start md:text-[#272727] md:text-center">
                  Compassion
                </h1>
              </div>
              <p className="text-start md:text-center">
                Following the example of our namesake, we lead with empathy and
                understanding
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 p-2 md:border-r md:border-[#027839] bg-[#FFB50A]">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center gap-2">
                <div className="block md:hidden">
                  <VerifiedIcon sx={{ fontSize: 40, color: "#fff" }} />
                </div>
                <h1 className="font-medium text-white text-start md:text-[#272727] md:text-center">
                  Integrity
                </h1>
              </div>
              <p className="text-start md:text-center">
                Maintaining transparency and accountability in all our
                operations
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 p-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center gap-2">
                <div className="block md:hidden">
                  <StarIcon sx={{ fontSize: 40, color: "#FFD700" }} />
                </div>
                <h1 className="font-medium text-start md:text-[#272727] md:text-center">
                  Excellence:
                </h1>
              </div>
              <p className="text-start md:text-center">
                Striving for the highest standards in our programs and service
                delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionStatement;
