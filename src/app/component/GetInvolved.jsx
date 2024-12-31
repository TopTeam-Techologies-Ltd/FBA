import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import { PhoneAndroid } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const GetInvolved = () => {
  return (
    <div
      className="h-full w-full"
      style={{
        backgroundImage: "url('/get-in-touch.png')",
        objectFit: "cover",
        objectPosition: "center",
      }}
    >
      <div className="px-4 py-8 sm:px-6 md:px-12 lg:px-20 xl:px-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Heading */}
          <div className="md:col-span-6">
            <h1 className="text-xl lg:text-2xl font-semibold text-white mb-4 md:mb-6">
              Get involved with us
            </h1>
          </div>

          {/* Email Address */}
          <div className="md:col-span-3">
            <div className="flex flex-col gap-2 md:gap-4 text-white">
              <h2 className="font-medium text-base md:text-lg">
                Email Address
              </h2>
              <p className="text-sm">
                <a
                  href="mailto:info@fbafound.org"
                  className="hover:text-[#000066]"
                >
                  Info@fbafound.org
                </a>
              </p>
            </div>
          </div>

          {/* Contact Numbers and Social Media */}
          <div className="md:col-span-3">
            <div className="flex flex-col gap-2 md:gap-4 text-white">
              <h2 className="font-medium text-base md:text-lg">
                Number & Social Media
              </h2>
              <div className="flex items-center gap-2">
                <PhoneAndroid sx={{ color: "white" }} fontSize="small"/>
                <p className="text-sm ">08068699363</p>
              </div>
              <div className="flex items-center gap-2">
                <PhoneAndroid sx={{ color: "white" }} fontSize="small"/>
                <p className="text-sm ">0901146414</p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                {/* Social Media Icons */}
                <IconButton aria-label="WhatsApp">
                  <WhatsApp fontSize="small" sx={{ color: "white" }} />
                </IconButton>
                <IconButton aria-label="Instagram">
                  <Instagram fontSize="small" sx={{ color: "white" }} />
                </IconButton>
                {/* <IconButton aria-label="Facebook">
                <Facebook fontSize="small" />
              </IconButton> */}
                <IconButton aria-label="Other">
                  <XIcon fontSize="small" sx={{ color: "white" }} />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
