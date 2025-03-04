import React from 'react'
import hero from "../assets/img/hero.png"

function HomeHeroSection() {
  return (
    <div class="bg-[#D5B981] h-screen">
      <section class="w-[90%] m-auto">
        <div class="w-full">
          <div  class="flex justify-between flex-1">
            {/* first flex */}
            <div class="flex flex-col justify-center items-center w-3/5 pl-[75px]">
              <div>
                <h1 class="text-[#1d2434] text-4xl font-bold pb-4">
                  Welcome to Jiggy Salon
                </h1>
                <p class="text-xl w-4/6 leading-normal">
                    Lorem ipsum dolor sit amet elit. Phasell nec pretum mi. Curabi ornare velit non. Aliqua metus tortor auctor quis sem.
                </p>
                <div class="mt-10">
                  <a href="#">
                    <button class="px-[30px] py-[15px] border-2 border-solid border-[#1d2434] bg-[none]">
                      Book an Appointment
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* second flex */}
            <div class="w-2/5">
              <img src={hero} alt='heropic' class="h-[550px] w-full"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeHeroSection