import React from 'react'
import hero from "../assets/img/w5.jpg"
import { Link } from "react-router-dom"

function HomeHeroSection() {
  return (
    <div class="bg-[#D5B981] h-screen">
      <section class="w-[90%] m-auto">
        <div class="w-full">
          <div  class=" flex flex-col md:flex-row justify-between flex-1">
            {/* first flex */}
            <div class="flex flex-col justify-center items-center mt-20 md:items-start text-center md:text-left w-full md:w-3/5 pl-0 md:pl-[75px] mt-8 md:mt-0">
              <div>
                <h1 class=" pt-20 md:text-[#1d2434] text-3xl md:text-4xl font-bold pb-4">
                  Welcome to Jiggy Salon
                </h1>
                <p class="text-xl md:w-4/6 w-full leading-normal">
                    Experience top-notch grooming, style, and confidence. Book your appointment today and redefine your look.
                </p>
                <Link to='/contact'>
                  <div class="mt-10">
                    <button class="px-[30px] py-[15px] border-2 border-solid border-[#1d2434] bg-[none] hover:bg-[#1d2434] hover:text-[#D5B981]">
                      Book an Appointment
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            {/* second flex */}
            <div class="w-2/5 hidden md:block">
              <img src={hero} alt='heropic' class="h-[550px] w-full"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeHeroSection