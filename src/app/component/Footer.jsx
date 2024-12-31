import SchorlashipModal from "./SchorlashipModal";

const Footer = () => {
  return (
    <footer className="px-4 py-20 bg-[#027839] text-white">
      <div className="flex flex-col gap-6">
        {/* Text Section */}
        <div className="flex justify-center px-14">
          <h1 className="font-thin text-center text-base">
            Join us in continuing Fatima Bolanle Abioye's legacy of compassion
            and generosity. Together, we can build a brighter future for Kwara
            State's youth and create lasting positive change in our communities.
          </h1>
        </div>

        {/* Button Section */}
        <div className="flex justify-center">
          <SchorlashipModal />
        </div>

        {/* Copyright Section */}
        <p className="mb-3 flex items-center justify-center text-xs">
          &copy; {new Date().getFullYear()} FBA foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
