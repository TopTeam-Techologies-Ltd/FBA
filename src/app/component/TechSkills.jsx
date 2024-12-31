import Image from "next/image";

const TechSkills = () => {
  return (
    <div className="px-4 py-12 bg-[#027839]">
      {/* Text Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6">
          <p className="text-2xl sm:text-3xl font-medium text-white">
            FBA got you covered to get those tech skills
          </p>
        </div>
        <div className="p-6">
          <p className="text-sm  text-white leading-6">
            Whether you are just starting out or looking to take your abilities
            to the next level, our mission is to provide you with the resources
            and support you need to succeed. We understand that the cost of
            education and training can be a barrier, and we are here to
            eliminate that roadblock.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
        <SkillCard
          src="/data.png"
          alt="Data Analytics"
          label="Data Analytics"
        />
        <SkillCard src="/cyber.png" alt="Cybersecurity" label="Cybersecurity" />
        <SkillCard
          src="/software.png"
          alt="Software Development"
          label="Software Development"
        />
        <SkillCard src="/design.png" alt="Design Field" label="Design Field" />
        <SkillCard
          src="/cloud.png"
          alt="Cloud Engineering"
          label="Cloud Engineering"
        />
      </div>
    </div>
  );
};

const SkillCard = ({ src, alt, label }) => (
  <div className="flex items-center justify-center gap-2 bg-[#02C27F] py-3 px-4 rounded-md">
    <Image src={src} alt={alt} height={30} width={30} />
    <h1 className="text-white text-sm">{label}</h1>
  </div>
);

export default TechSkills;
