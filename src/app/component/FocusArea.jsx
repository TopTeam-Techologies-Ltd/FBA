import Image from "next/image";

const FocusArea = () => {
  return (
    <div
      id="focus-areas"
      className="px-4 py-8 bg-cover bg-center sm:px-6 md:px-12 lg:px-20 xl:px-28"
      style={{
        backgroundImage: "url('/bg-spiral.png')",
      }}
    >
      {/* Education Aid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Text Section */}
        <div className="p-4 md:p-6 lg:p-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#000066] mb-6">
            Focus Areas
          </h1>
          <div className="space-y-8">
            <h2 className="text-xl sm:text-2xl font-medium text-[#272727]">
              Educational Empowerment
            </h2>
            <ul className="list-disc pl-5 space-y-4 text-gray-700 text-sm sm:text-base">
              <li>Scholarship programs for promising students</li>
              <li>Educational materials and resources provision</li>
              <li>
                Mentorship programs connecting students with professionals
              </li>
              <li>Skills development workshops and training</li>
              <li>Digital literacy programs</li>
              <li>School infrastructure support</li>
            </ul>
          </div>
        </div>
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image
            src={"/education-2.jpg"}
            alt="Focus Areas"
            height={400}
            width={400}
            className="w-full h-full rounded-md"
          />
        </div>
      </div>
      <br />
      <br />
      {/* Community Aid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="hidden md:flex justify-center items-center">
          <Image
            src={"/community-small.png"}
            alt="Focus Areas"
            height={300}
            width={300}
            className="w-full h-full rounded-md"
          />
        </div>
        {/* Text section */}
        <div className="space-y-8">
          <h2 className="text-xl sm:text-2xl font-medium text-[#272727]">
            Community Aid
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-gray-700 text-sm sm:text-base">
            <li>Basic needs support for vulnerable families</li>
            <li>Healthcare assistance programs</li>
            <li>Emergency relief initiatives</li>
            <li>Women and youth empowerment programs</li>
            <li>Community development projects</li>
            <li>Access to clean water and sanitation</li>
            <li>Education and vocational training for underprivileged youth</li>
            <li>Environmental sustainability initiatives</li>
            <li>Support for individuals with disabilities</li>
            <li>Job creation and skills development programs</li>
          </ul>
        </div>
        {/* Image Section */}
        <div className="flex justify-center items-center md:hidden">
          <Image
            src={"/community-small.png"}
            alt="Focus Areas"
            height={400}
            width={400}
            className="w-full h-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default FocusArea;
