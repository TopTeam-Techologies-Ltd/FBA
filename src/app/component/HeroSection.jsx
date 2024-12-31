import React from "react";
import { Button } from "@mui/material";

const HeroSection = () => {
  return (
    <>
      {/* <!-- parallax section starts --> */}
      <section
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
              <h2 className="text-5xl font-extrabold text-white drop-shadow-lg mb-3">
                Fatima Bolanle Abioye Foundation (FBA Foundation)
              </h2>
              <br />
              <br />
              <span className="text-base text-white drop-shadow-md mb-3">
                Empowering Through Education, Inspiring Through Compasion
              </span>
              <br />
              <br />
              <br />
              <Button
                sx={{
                  backgroundColor: "#027839",
                  color: "#fff",
                  paddingY:'.7rem',
                  paddingX:'4rem',
                  border: "1px solid #FFB40A",
                }}
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- parallax section ends --> */}
    </>
  );
};

export default HeroSection;
