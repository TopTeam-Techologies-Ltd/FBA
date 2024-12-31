import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import { IconButton } from "@mui/material";
import React from "react";

const GetInvolved = () => {
  return (
    <div className="px-4 py-8 sm:px-6 md:px-12 lg:px-20 xl:px-28 mb-9">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Heading */}
        <div className="md:col-span-6">
          <h1 className="text-xl lg:text-2xl font-semibold text-[#333030] mb-4 md:mb-6">
            Get involved with us
          </h1>
        </div>

        {/* Email Address */}
        <div className="md:col-span-3">
          <div className="flex flex-col gap-2 md:gap-4 text-[#333030]">
            <h2 className="font-medium text-base md:text-lg">Email Address</h2>
            <p className="text-sm">fbafound@gmail.com</p>
          </div>
        </div>

        {/* Contact Numbers and Social Media */}
        <div className="md:col-span-3">
          <div className="flex flex-col gap-2 md:gap-4 text-[#333030]">
            <h2 className="font-medium text-base md:text-lg">
              Number & Social Media
            </h2>
            <p className="text-sm ">08068699363</p>
            <p className="text-sm ">0901146414</p>
            <div className="flex items-center gap-3 mt-2">
              {/* Social Media Icons */}
              <IconButton aria-label="WhatsApp">
                <WhatsApp fontSize="small" />
              </IconButton>
              <IconButton aria-label="Instagram">
                <Instagram fontSize="small" />
              </IconButton>
              <IconButton aria-label="Facebook">
                <Facebook fontSize="small" />
              </IconButton>
              <IconButton aria-label="Other">
                <XIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
