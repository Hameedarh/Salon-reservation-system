import React from 'react'
import TopBar from './TopBar'
import Navbar from './Navbar'
import hero from "../assets/img/hero.png"

function HomeHeroSection() {
  return (
    <div class="bg-[#D5B981] h-screen">
        <section>
            <TopBar/>
        </section>
        <section>
          <Navbar/>
        </section>
        <section class="w-[80%] m-auto">
          <div>
            <div  class="flex justify-between flex-1">
              {/* first flex */}
              <div class="flex flex-col justify-center items-center w-3/5">
                <div>
                  <h1 class="text-[#1d2434] text-4xl font-bold pb-4">
                    Welcome to Jazzy Salon
                  </h1>
                  <p class="text-xl w-4/6 leading-normal">
                      Lorem ipsum dolor sit amet elit. Phasell nec pretum mi. Curabi ornare velit non. Aliqua metus tortor auctor quis sem.
                  </p>
                </div>
              </div>
              {/* second flex */}
              <div class="w-2/5">
                <img src={hero} alt='heropic' class="h-[550px]"/>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default HomeHeroSection