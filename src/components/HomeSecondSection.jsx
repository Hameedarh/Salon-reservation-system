import React from 'react'
import about from '../assets/img/w6.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";

function HomeSecondSection() {
  return (
    <div id='about'>
      <div class="py-12 md:py-24">
        <div class="w-[90%] m-auto flex flex-col md:flex-row justify-between px-4 md:px-[75px] gap-10 md:gap-0">
          
          {/* Image Section */}
          <div class="basis-full md:basis-2/5 flex justify-center md:justify-start">
            <div class='relative'>
              <div class="w-[280px] h-[340px] md:w-[385px] md:h-[466px] bg-[#1d2434]"></div>
              <div class="w-[280px] h-[340px] md:w-[385px] md:h-[466px] bg-transparent absolute top-6 left-6 md:top-9 md:left-9 border border-[#ffffff] z-10"></div>
              <img
                src={about}
                alt='about-pic'
                class="w-[280px] h-[340px] md:w-[385px] md:h-[466px] absolute top-12 left-12 md:top-16 md:left-16 object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div class="basis-full pt-6 md:basis-3/5 px-2 md:px-12">
            <div class="flex justify-center items-center h-full">
              <div class="w-full">
                <p class="font-thin text-base md:text-xl text-[#797979]">Learn About Us</p>
                <h2 class="font-bold text-3xl md:text-5xl pt-2 md:pt-3">3+ Years Experience</h2>
                <div class='pt-4 md:pt-8 text-[#797979] text-sm md:text-base'>
                  <p>
                    At Jiggy Salon, we combine modern trends with timeless grooming techniques to deliver the perfect look for every client. 
                  </p>
                  <p class='pt-3 md:pt-5'>
                   Whether it’s a classic haircut, a bold new style, or a relaxing grooming session, we’re here to serve you.
                  </p>
                </div>
                <div class='pt-6 md:pt-8'>
                  <AnchorLink href="#services">
                    <button class="px-6 py-3 text-sm md:text-base border-2 border-solid border-[#1d2434] bg-none hover:bg-[#1d2434] hover:text-[#D5B981] transition-all duration-300">
                      Learn more
                    </button>
                  </AnchorLink>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomeSecondSection
