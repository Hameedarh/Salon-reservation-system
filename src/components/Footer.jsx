import React from 'react'
import { FaAngleRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutubeSquare} from "react-icons/fa"

function Footer() {
  return (
    <div class="bg-[#1d2434]">
        <div class="w-[90%] m-auto p-[75px]">
            <div class="flex justify-between w-full">
                <div class="w-2/6">
                    <h3 class="text-[#D5B981] text-2xl font-bold pb-5">Salon address</h3>
                    <div class="text-[#797979]">
                        <div class="flex items-center gap-2 pb-2">
                            <FaMapMarkerAlt />
                            <p>Plot 225, Abuja, Nigeria</p>
                        </div>
                        <div class="flex items-center gap-2 pb-2">
                            <FaPhoneAlt />
                            <p>+234 9028245178</p>
                        </div>
                        <div class="flex items-center gap-2 pb-2">
                            <FaEnvelope />
                            <p>ajibadem252@gmail.com</p>
                        </div>
                        <div class="flex gap-2 align-center">
                            <FaTwitter/>
                            <FaFacebook/>
                            <FaYoutubeSquare/>
                            <FaInstagram/>
                            <FaLinkedin/>

                        </div>
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
                        <p class="text-[#797979]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ea quos, temporibus fugiat voluptatem in reiciendis nihil saepe ad voluptatibus doloremque eius, esse nemo autem ducimus nobis error?</p>

                </div>
            </div>
            <h1 class="text-[#797979]">Hello</h1>
        </div>
    </div>
  )
}

export default Footer