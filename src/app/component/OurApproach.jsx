import Image from "next/image";

const OurApproach = () => {
  return (
    <div
      id="our-approach"
      className="px-4 py-8 sm:px-6 md:px-12 lg:px-20 xl:px-28 mb-9"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Text Section */}
        <div className="p-4 md:p-6 lg:p-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#272727] mb-6">
            Our Approach
          </h1>
          <p className="leading-relaxed text-base text-gray-700">
            The FBA Foundation employs a comprehensive approach to community
            development, recognizing that educational empowerment must go
            together with basic needs support. We work closely with local
            communities, educational institutions, and government agencies to
            ensure our programs create meaningful and lasting impact.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image
            src={"/approach.png"}
            alt="Our Approach"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
