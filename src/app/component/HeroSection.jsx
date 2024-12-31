import React from "react";
import { Button } from "@mui/material";
import SchorlashipModal from "./SchorlashipModal";

const HeroSection = () => {
  return (
    <>
      {/* <!-- parallax section starts --> */}
      <div
        className="h-[50rem] w-full relative bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg-image.png')",
          filter: "brightness(0.8)",
        }}
      >
        {/* Dark Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-60"
          aria-hidden="true"
        ></div>

        {/* Content */}
        <div className="h-full">
          <div className="flex flex-col justify-center items-center h-full">
            <div className="w-[60%] mx-auto text-center">
              <h1 className="text-5xl font-extrabold  text-[#FFD700] drop-shadow-lg mb-3">
                Fatima Bolanle Abioye Foundation
              </h1>
              <h1 className="text-2xl font-extrabold text-[#FFD700] drop-shadow-lg mb-3">
                (FBA Foundation)
              </h1>
              <br />
              <span className="text-base text-[#FFD700] drop-shadow-md mb-3">
                Empowering Through Education, Inspiring Through Compasion
              </span>
              <br />
              <br />
              <br />
              <SchorlashipModal />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- parallax section ends --> */}
    </>
  );
};

export default HeroSection;
