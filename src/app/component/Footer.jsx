import { Button } from "@mui/material";

const Footer = () => {
  return (
    <footer className="px-4 py-12 bg-[#027839] text-white">
      <div className="flex flex-col gap-6">
        {/* Text Section */}
        <div className="flex justify-center p-14">
          <h1 className="font-thin text-center sm:text-lg md:text-xl">
            Join us in continuing Fatimah Bolanle Abioye's legacy of compassion
            and generosity. Together, we can build a brighter future for Kwara
            State's youth and create lasting positive change in our communities.
          </h1>
        </div>

        {/* Button Section */}
        <div className="flex justify-center">
          <Button
            sx={{
              backgroundColor: "#027839",
              color: "#fff",
              paddingY: ".7rem",
              paddingX: "4rem",
              border: "1px solid #FFB40A",
            }}
          >
            Explore
          </Button>
        </div>

        {/* Copyright Section */}
        <p className="mb-3 flex items-center justify-center text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} FBA foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
