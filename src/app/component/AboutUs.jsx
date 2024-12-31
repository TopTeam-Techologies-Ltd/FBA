import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Left Section */}
      <div className="bg-[#027839] text-white p-8 md:p-16">
        <h1 className="text-2xl md:text-3xl font-medium mb-6 md:mb-9">
          About Us
        </h1>
        <p className="text-sm md:text-base leading-6 md:leading-7">
          The Fatimah Bolanle Abioye Foundation (FBA Foundation) is a non-profit
          organization dedicated to transforming lives through educational
          empowerment and humanitarian aid in Nigeria. Named after Alhaja
          Fatimah Bolanle Abioye, whose lifelong commitment to helping others
          despite limited resources has inspired this initiative, our foundation
          continues her legacy of compassion and generosity.
        </p>
      </div>

      {/* Right Section */}
      <div
        className="h-64 md:h-auto w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/aboutUs-img.png')",
        }}
      ></div>
    </div>
  );
};

export default AboutUs;
