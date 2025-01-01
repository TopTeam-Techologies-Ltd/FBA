import Image from "next/image";
import XIcon from "@mui/icons-material/X";
import { Facebook, Instagram, WhatsApp, LinkedIn } from "@mui/icons-material";
import { Divider, IconButton } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-10 pt-10 pb-5 bg-[#027839] text-white md:px-20 ">
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-4">
            <div className="flex flex-col gap-2">
              <div className="h-[100px] w-[150px] bg-[url('/fba-logo3.jpg')] bg-cover bg-center bg-no-repeat"></div>
              <div className="">
                <h1 className="font-thin text-justify text-base">
                  Join us in continuing Fatima Bolanle Abioye's legacy of
                  compassion and generosity. Together, we can build a brighter
                  future for Kwara State's youth and create lasting positive
                  change in our communities.
                </h1>
              </div>
              {/* social links */}
              <div className="flex items-center gap-3 mt-2">
                {/* Social Media Icons */}
                <a
                  href="https://x.com/fbafound"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton aria-label="WhatsApp">
                    <XIcon fontSize="small" sx={{ color: "white" }} />
                  </IconButton>
                </a>
                <a
                  href="https://www.instagram.com/fbafound"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton aria-label="Instagram">
                    <Instagram fontSize="small" sx={{ color: "white" }} />
                  </IconButton>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex justify-start md:justify-center md:col-span-4">
            <div className="flex flex-col gap-4">
              <div className="">
                <h1 className="font-medium text-base">Quick Links</h1>
              </div>
              <div>
                <ul className="list-none space-y-4 text-sm">
                  <li>
                    <Link href="#scholarship">
                      <span className="text-white hover:text-[#FFD700]">
                        Scholarship
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#focus-areas">
                      <span className="text-white hover:text-[#FFD700]">
                        Focus Areas
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#our-values">
                      <span className="text-white hover:text-[#FFD700]">
                        Our Values
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#our-values">
                      <span className="text-white hover:text-[#FFD700]">
                        Our Vision
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="flex flex-col gap-4">
              <div className="">
                <h1 className="font-medium text-base">Contact Information</h1>
              </div>
              <div>
                <ul className="list-none space-y-4 text-sm">
                  <li>
                    <span className="text-white">
                      <span className="font-medium">Office Address</span> : 51,
                      Okelele Street, Itadu, Ilorin Kwara State.
                    </span>
                  </li>
                  <li>
                    <span className="text-white">
                      <span className="font-medium">Tel</span>: +234 806 869
                      96363
                    </span>
                  </li>
                  <li>
                    <Link href="mailto:info@fbafound.org">
                      <span className="text-white hover:text-[#FFD700]">
                        <span className="font-medium">Email</span>:
                        info@fbafound.org
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Divider sx={{ backgroundColor: "#f5f5f5" }} />

        {/* Copyright Section */}
        <p className="mb-3 flex items-center justify-center text-xs">
          &copy; {new Date().getFullYear()} FBA foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
