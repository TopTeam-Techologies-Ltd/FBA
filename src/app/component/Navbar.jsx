import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

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
            <p className="text-xs">The Fatima Bolanle Abioye Foundation</p>
          </div>
        </div>
        <div>
          <ul className="flex space-x-8">
            <li className="text-xs text-[#444444] font-medium">ABOUT US</li>
            <li className="text-xs text-[#444444] font-medium">OUR VALUES</li>
            <li className="text-xs text-[#444444] font-medium">
              FOCUS AREAS
            </li>
            <li className="text-xs text-[#444444] font-medium">
              OUR APPROACH
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-1">
          <FiberManualRecordIcon
            fontSize="small"
            sx={{
              color: "#027839",
            }}
          />
          <p className="text-xs text-[#505050] font-semibold tracking-wide">
            GET IN TOUCH
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
