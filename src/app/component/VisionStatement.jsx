import Image from "next/image";
const VisionStatement = () => {
  return (
    <div id="our-values" className="my-20 flex flex-col gap-6">
      <div>
        <h1 className="text-4xl font-meduim text-center text-[#272727]">
          Vision Statement
        </h1>
      </div>
      <div className="mb-4">
        <p className="w-[60%] mx-auto text-center text-sm">
          To create a Nigeria where every youth has access to quality education
          and where socioeconomic barriers no longer determine one's future
          potential.
        </p>
      </div>
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-3 p-2 border-r border-b border-[#027839]">
            <div className="flex flex-col gap-6 p-4">
              <h1 className="text-2xl">Mission Statement</h1>
              <div>
                <Image
                  src={"/arrow.png"}
                  alt="arrow pointing right"
                  width={200}
                  height={40}
                />
              </div>
            </div>
          </div>
          <div className="col-span-3 p-2 border-r border-b border-[#027839] flex justify-center items-center bg-[#FFB50A] text-center">
            Providing educational opportunities and resources to underprivileged
            youth in Nigeria
          </div>
          <div className="col-span-3 p-2 border-r border-b border-[#027839] flex justify-center items-center text-center">
            Supporting vulnerable communities through targeted aid programs
          </div>
          <div className="col-span-3 p-2 border-b border-[#027839] flex justify-center items-center text-center">
            Creating sustainable pathways out of poverty through knowledge and
            skill development
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-3 p-2 border-r  border-[#027839]">
            <div className="flex flex-col gap-6 p-4">
              <h1 className="text-2xl">Our Core Values</h1>
              <div>
                <Image
                  src={"/arrow.png"}
                  alt="arrow pointing right"
                  width={200}
                  height={40}
                />
              </div>
            </div>
          </div>
          <div className="col-span-3 p-2 border-r border-[#027839] flex justify-center items-center">
            <div className="flex flex-col gap-2">
              <h1 className="font-medium text-[#272727] text-center">
                Compassion:
              </h1>
              <p className="text-center">
                Following the example of our namesake, we lead with empathy and
                understanding
              </p>
            </div>
          </div>
          <div className="col-span-3 p-2 border-r border-[#027839]">
            <div className="flex flex-col gap-2">
              <h1 className="font-medium text-[#272727] text-center">
                Integrity:
              </h1>
              <p className="text-center">
                Maintaining transparency and accountability in all our
                operations
              </p>
            </div>
          </div>
          <div className="col-span-3 p-2">
            <div className="flex flex-col gap-2">
              <h1 className="font-medium text-[#272727] text-center">
                Excellence:
              </h1>
              <p className="text-center">
                Striving for the highest standards in our programs and service
                delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionStatement;
