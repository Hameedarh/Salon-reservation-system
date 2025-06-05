import React from 'react'
import { FaAngleRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa"

function Footer() {
  return (
    <div class="bg-[#1d2434]">
      <div class="w-[90%] m-auto px-4 md:px-[75px] pt-[50px] md:pt-[75px]">
        
        {/* Top Footer Section */}
        <div class="flex flex-col md:flex-row justify-between w-full gap-10 md:gap-0">
          
          {/* Address Section */}
          <div class="w-full md:w-2/6">
            <h3 class="text-[#D5B981] text-xl md:text-2xl font-bold pb-4">Salon address</h3>
            <div class="text-[#797979] text-sm md:text-base">
              <div class="flex items-center gap-2 pb-3">
                <FaMapMarkerAlt />
                <p>Plot 225, Abuja, Nigeria</p>
              </div>
              <div class="flex items-center gap-2 pb-3">
                <FaPhoneAlt />
                <a href='https://wa.me/9028245178'><p>+234 9028245178</p></a>
              </div>
              <div class="flex items-center gap-2 pb-3">
                <FaEnvelope />
                <p>ajibadem252@gmail.com</p>
              </div>
            </div>
            <div class="flex gap-4 items-center text-[#D5B981] mt-4">
              <a href="https://twitter.com/"><FaTwitter class="hover:text-[#797979]" size={18} /></a>
              <a href="https://www.facebook.com/"><FaFacebookF class="hover:text-[#797979]" size={18} /></a>
              <a href="#"><FaYoutube class="hover:text-[#797979]" size={18} /></a>
              <a href="#"><FaInstagram class="hover:text-[#797979]" size={18} /></a>
              <a href="https://www.linkedin.com/"><FaLinkedinIn class="hover:text-[#797979]" size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div class="w-full md:w-2/6">
            <h3 class="text-[#D5B981] text-xl md:text-2xl font-bold pb-4">Quick Links</h3>
            <div class="text-[#797979] text-sm md:text-base">
              {["Terms of use", "Privacy Policy", "Cookies", "Help", "FAQs"].map((item, idx) => (
                <div key={idx} class="flex items-center gap-2 hover:text-[#D5B981] transition transform hover:-translate-y-1 pb-2">
                  <FaAngleRight />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div class="w-full md:w-2/6">
            <h3 class="text-[#D5B981] text-xl md:text-2xl font-bold pb-4">Newsletter</h3>
            <p class="text-[#797979] text-sm md:text-base pb-4">
              Subscribe to our newsletter for exclusive updates, offers, and tips delivered straight to your inbox.
            </p>
            <div class="bg-white p-2 flex flex-row justify-between items-center gap-3">
              <input
                type="email"
                id="email"
                placeholder="Email goes here"
                name="email"
                class="w-full sm:w-auto flex-1 bg-transparent outline-0 text-black text-sm md:text-base px-2"
              />
              <button class="px-4 py-2 border-2 border-[#1d2434] bg-none hover:bg-[#1d2434] hover:text-[#D5B981] text-sm md:text-base transition-all">
                Submit
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div class="h-16 bg-white mt-7 flex flex-col sm:flex-row items-center justify-center gap-1 text-sm md:text-base">
          <h2 class="text-center font-bold">
            © <a href="#" class="hover:text-[#D5B981]">Muhammed Hasraf Ajibade</a>,
          </h2>
          <h2>2025</h2>
        </div>
      </div>
    </div>
  )
}

export default Footer
