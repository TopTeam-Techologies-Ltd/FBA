import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      {/* <!-- parallax section starts --> */}
      <div
        className="h-[40rem] w-full relative bg-fixed bg-cover bg-center"
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
              <h1 className="text-2xl font-extrabold  text-[#fff] drop-shadow-lg mb-3 md:text-5xl ">
                Fatima Bolanle Abioye Foundation
              </h1>
              <h1 className="text-lg md:text-2xl font-extrabold text-[#fff] drop-shadow-lg mb-3">
                (FBA Foundation)
              </h1>
              <br />
              <span className="text-sm md:text-base text-[#fff] drop-shadow-md mb-3">
                Empowering Through Education, Inspiring Through Compasion
              </span>
              <br />
              <br />
              <br />
              <div className="hidden md:block">
                <Link href="#scholarship">
                  <Button
                    size="small"
                    sx={{
                      backgroundColor: "#027839",
                      color: "#fff",
                      paddingY: ".7rem",
                      paddingX: "4rem",
                      border: "1px solid #FFD700",
                    }}
                  >
                    Apply for scholarship
                  </Button>
                </Link>
              </div>
              <div className="block md:hidden">
                <Link href="#scholarship">
                  <Button
                    size="small"
                    sx={{
                      backgroundColor: "#027839",
                      color: "#fff",
                      padding: ".4rem",
                      border: "1px solid #FFD700",
                    }}
                  >
                    Apply for scholarship
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- parallax section ends --> */}
    </>
  );
};

export default HeroSection;
