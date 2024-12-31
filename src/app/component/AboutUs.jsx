import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6 bg-[#027839] text-white p-16">
        <h1 className="text-2xl font-medium mb-9">About Us</h1>

        <p className="w-[90%] text-sm">
          The Fatimah Bolanle Abioye Foundation (FBA Foundation) is a non-profit
          organization dedicated to transforming lives through educational
          empowerment and humanitarian aid in Nigeria. Named after Alhaja
          Fatimah Bolanle Abioye, whose lifelong commitment to helping others
          despite limited resources has inspired this initiative, our foundation
          continues her legacy of compassion and generosity.
        </p>
      </div>
      <div className="col-span-6">
        {" "}
        <section
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/aboutUs-img.png')",
          }}
        ></section>
      </div>
    </div>
  );
};

export default AboutUs;
