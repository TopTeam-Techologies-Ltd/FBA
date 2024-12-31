import Image from "next/image";
const VisionStatement = () => {
  return (
    <div className="my-20 flex flex-col gap-6">
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
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 p-2">
            <div className="flex flex-col gap-2">
              <div>
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
              <div className="border-t-2 border-[#272727]">
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
          </div>
          <div className="col-span-3 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ad
            quibusdam rerum esse, ratione suscipit voluptatem nemo officiis
            sequi minima.
          </div>
          <div className="col-span-3 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ad
            quibusdam rerum esse, ratione suscipit voluptatem nemo officiis
            sequi minima.
          </div>
          <div className="col-span-3 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ad
            quibusdam rerum esse, ratione suscipit voluptatem nemo officiis
            sequi minima.
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionStatement;
