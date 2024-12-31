import Image from "next/image";

const FocusArea = () => {
  return (
    <div className="px-4 py-8 my-14 sm:px-6 md:px-12 lg:px-20 xl:px-28">
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
            <ul className="list-disc pl-5 space-y-4 text-gray-700 text-sm sm:text-base lg:text-lg">
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
            src={"/focus-areas.png"}
            alt="Focus Areas"
            height={400}
            width={400}
          />
        </div>
      </div>
    </div>
  );
};

export default FocusArea;
