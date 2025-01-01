import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <div className="w-full bg-white fixed shadow-md flex justify-between items-center px-16 py-3 z-50">
        <div className="flex item-center gap-2">
          <Image
            src={"/logo.png"}
            alt="Foundation Building Africa Logo"
            width={80}
            height={50}
          />
          <div>
            <p className="font-bold text-[#000066] text-xl">FBA</p>
            <p className="font-semibold text-[#000066] text-sm">Foundation</p>
            <p className="text-xs font-medium">The Fatima Bolanle Abioye Foundation</p>
          </div>
        </div>
        {/* <div className="flex item-center gap-2">
          <Image
            src={"/logo.png"}
            alt="Foundation Building Africa Logo"
            width={80}
            height={50}
          />
          <div>
            <p className="font-bold text-[#000066] text-xl">FBA</p>
            <p className="font-semibold text-[#000066] text-sm">Foundation</p>
            <p className="text-xs font-medium">The Fatima Bolanle Abioye Foundation</p>
          </div>
        </div> */}
        {/* testing something here */}
        {/* <div className="h-[60px] w-[200px] bg-[url('/fba-logo3.jpg')] bg-cover bg-center bg-no-repeat"></div> */}
        {/* <div className="h-[60px] w-[200px] bg-[url('/fba-logo2.png')] bg-cover bg-center bg-no-repeat"></div> */}

        <div className="hidden lg:block">
          <ul className="flex space-x-10">
            <li>
              <Link href="#about-us">
                <span className="text-xs text-[#444444] font-medium hover:text-[#000066]">
                  ABOUT US
                </span>
              </Link>
            </li>
            <li>
              <Link href="#our-values">
                <span className="text-xs text-[#444444] font-medium hover:text-[#000066]">
                  OUR VALUES
                </span>
              </Link>
            </li>
            <li>
              <Link href="#focus-areas">
                <span className="text-xs text-[#444444] font-medium hover:text-[#000066]">
                  FOCUS AREAS
                </span>
              </Link>
            </li>
            <li>
              <Link href="#our-approach">
                <span className="text-xs text-[#444444] font-medium hover:text-[#000066]">
                  OUR APPROACH
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-1 border rounded-md border-[#027839] p-2 ">
          <FiberManualRecordIcon
            fontSize="small"
            sx={{
              color: "#027839",
            }}
          />
          <p className="text-sm text-[#505050] font-semibold tracking-wide">
            <a href="mailto:info@fbafound.org">Get in touch</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
