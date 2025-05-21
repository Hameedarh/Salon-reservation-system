import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

function TopBar() {
  return (
    <div class="bg-[#1d2434] text-[#eeeeee] h-[60px]">
      <div class="w-[80%] m-auto">
        <div class="flex justify-between">
          <div class="flex justify-center items-center">
            <div class="flex flex-col justify-center items-center text-center border-x-2 border-solid border-[#ffffff26] p-1.5">
              <h2 class="text-base font-semibold">8:00 - 9:00</h2>
              <p class="text-xs">Opening Hour Mon-Fri</p>
            </div>
            <div class="flex flex-col justify-center items-center  text-center border-r-2 border-solid border-[#ffffff26] p-1.5">
              <h2 class="text-base font-semibold"><a href='https://wa.me/9028245178'>+234 902 824 5178 </a></h2>
              <p class="text-xs">Call Us for Appointment</p>
            </div>
          </div>
          {/* the second flex part */}
          <div class="flex justify-center items-center">
            <div class="flex flex-col justify-center items-center border-x-2 border-solid border-[#ffffff26] p-4">
              <a href='https://twitter.com/'>
                <FaTwitter size={25}/>
              </a>
            </div>
            <div class="flex flex-col justify-center items-center border-r-2 border-solid border-[#ffffff26] p-4">
              <a href='https://www.facebook.com/'>
                <FaFacebookF size={25}/>
              </a>
            </div>
            <div class="flex flex-col justify-center items-center border-r-2 border-solid border-[#ffffff26] p-4">
              <a href='https://www.linkedin.com/'>
                <FaLinkedinIn size={25}/>
              </a>
            </div>
            <div class="flex flex-col justify-center items-center border-r-2 border-solid border-[#ffffff26] p-4">
              <a href='#'>
                <FaInstagram size={25}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar