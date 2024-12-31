import Image from "next/image";

const CommunityAid = () => {
  return (
    <div className="px-4 py-8 mt-14 mb-8 sm:px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image
            src={"/community.png"}
            alt="Community Aid"
            height={400}
            width={400}
          />
        </div>

        {/* Text Section */}
        <div className="p-4 md:p-6 lg:p-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#272727] mb-6">
            Community Aid
          </h1>
          <ul className="list-disc pl-5 space-y-4 text-gray-700 text-sm sm:text-base lg:text-lg">
            <li>Basic needs support for vulnerable families</li>
            <li>Healthcare assistance programs</li>
            <li>Emergency relief initiatives</li>
            <li>Women and youth empowerment programs</li>
            <li>Community development projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommunityAid;
