import React from 'react'
import { FaAngleRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube} from "react-icons/fa"

function Footer() {
  return (
    <div class="bg-[#1d2434]">
        <div class="w-[90%] m-auto px-[75px] pt-[75px]">
            <div class="flex justify-between w-full">
                <div class="w-2/6">
                    <h3 class="text-[#D5B981] text-2xl font-bold pb-5">Salon address</h3>
                    <div class="text-[#797979]">
                        <div class="flex items-center gap-2 pb-3">
                            <FaMapMarkerAlt />
                            <p>Plot 225, Abuja, Nigeria</p>
                        </div>
                        <div class="flex items-center gap-2 pb-3">
                            <FaPhoneAlt />
                            <p>+234 9028245178</p>
                        </div>
                        <div class="flex items-center gap-2 pb-3">
                            <FaEnvelope />
                            <p>ajibadem252@gmail.com</p>
                        </div>
                    </div>
                    <div class="flex gap-4 align-center text-[#D5B981]">
                        <a href="https://twitter.com/">
                            <FaTwitter class="hover:text-[#797979]" size={20}/>
                        </a>
                        <a href="https://www.facebook.com/">
                            <FaFacebookF class="hover:text-[#797979]" size={20}/>
                        </a>
                        <a href="#">
                            <FaYoutube class="hover:text-[#797979]" size={20}/>
                        </a>
                        <a href="#">
                            <FaInstagram class="hover:text-[#797979]" size={20}/>
                        </a>
                        <a href="https://www.linkedin.com/">
                            <FaLinkedinIn class="hover:text-[#797979]" size={20}/>
                        </a>
                    </div>
                </div>
                <div class="w-2/6">
                    <h3 class="text-[#D5B981] text-2xl font-bold pb-5">Quick Links</h3>
                    <div class="text-[#797979]">
                        <div class="flex items-center gap-2 hover:text-[#D5B981] transition transform hover:-translate-y-1 pb-2">
                            <FaAngleRight />
                            <p>Terms of use</p>
                        </div>
                        <div class="flex items-center gap-2 hover:text-[#D5B981] transition transform hover:-translate-y-1 pb-2">
                            <FaAngleRight />
                            <p>Privacy Policy</p>
                        </div>
                        <div class="flex items-center gap-2 hover:text-[#D5B981] transition transform hover:-translate-y-1 pb-2">
                            <FaAngleRight />
                            <p>Cookies</p>
                        </div>
                        <div class="flex items-center gap-2 hover:text-[#D5B981] transition transform hover:-translate-y-1 pb-2">
                            <FaAngleRight />
                            <p>Help</p>
                        </div>
                        <div class="flex items-center gap-2 hover:text-[#D5B981] transition transform hover:-translate-y-1 pb-2">
                            <FaAngleRight />
                            <p>FAQs</p>
                        </div>
                    </div>

                </div>
                <div class="w-2/6">
                    <h3 class="text-[#D5B981] text-2xl font-bold pb-5">Newspaper</h3>
                        <p class="text-[#797979] pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ea quos, temporibus fugiat voluptatem in reiciendis nihil saepe ad voluptatibus doloremque eius, esse nemo autem ducimus nobis error?
                        </p>
                    <div class="bg-white p-1 flex justify-between items-center">
                        <input
                        type="email"
                        id="email"
                        placeholder="Email goes here"
                        name="email"
                        class="w- full bg-transparent outline-0 text-black"
                        />
                        <button class="px-[15px] py-[10px] border-2 border-solid border-[#1d2434] bg-[none] hover:bg-[#1d2434] hover:text-[#D5B981] ">Submit
                        </button>
                    </div>
                </div>
            </div>
            <div class="h-16 bg-white mt-7 flex items-center justify-center gap-1">
                <h2 class="text-center font-bold"> © <a href='#' class="hover:text-[#D5B981]">Muhammed Hasraf Ajibade,</a></h2>
                <h2>2025</h2>
            </div>
        </div>
    </div>
  )
}

export default Footer