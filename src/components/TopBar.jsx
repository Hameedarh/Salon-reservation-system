import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function TopBar() {
  return (
    <div className="bg-[#1d2434] text-[#eeeeee] h-auto py-2">
      <div className="w-[90%] md:w-[80%] m-auto">
        {/* Flex container with responsive direction and wrap */}
        <div className="flex flex-col md:flex-row justify-between gap-2">
          
          {/* first flex group */}
          <div className="flex flex-col sm:flex-row justify-center items-center text-center gap-2 sm:gap-0">
            {/* Opening hours */}
            <div className="flex flex-col justify-center items-center border-x-2 border-solid border-[#ffffff26] p-1.5 w-full sm:w-auto">
              <h2 className="text-base font-semibold">8:00 - 9:00</h2>
              <p className="text-xs">Opening Hour Mon-Fri</p>
            </div>

            {/* Phone / Appointment */}
            <div className="flex flex-col justify-center items-center border-r-2 border-solid border-[#ffffff26] p-1.5 w-full sm:w-auto">
              <h2 className="text-base font-semibold">
                <a href='https://wa.me/9028245178'>+234 902 824 5178</a>
              </h2>
              <p className="text-xs">Call Us for Appointment</p>
            </div>
          </div>

          {/* second flex group (social icons) */}
          <div className="hidden md:flex justify-center items-center">
            <div className="flex flex-col justify-center items-center border-x-2 border-solid border-[#ffffff26] p-4">
              <a href='https://twitter.com/'><FaTwitter size={20} /></a>
            </div>
            <div className="flex flex-col justify-center items-center border-r-2 border-solid border-[#ffffff26] p-4">
              <a href='https://www.facebook.com/'><FaFacebookF size={20} /></a>
            </div>
            <div className="flex flex-col justify-center items-center border-r-2 border-solid border-[#ffffff26] p-4">
              <a href='https://www.linkedin.com/'><FaLinkedinIn size={20} /></a>
            </div>
            <div className="flex flex-col justify-center items-center border-r-2 border-solid border-[#ffffff26] p-4">
              <a href='#'><FaInstagram size={20} /></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TopBar;
