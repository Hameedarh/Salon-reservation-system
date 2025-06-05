import React from 'react'
import service1 from '../assets/img/service-1.jpg'
import service2 from '../assets/img/service-2.jpg'
import service3 from '../assets/img/service-3.jpg'

function HomeThirdSection() {
  return (
    <div id='services'>
      <div class="py-10">
        <div class="w-[90%] m-auto px-4 md:px-[75px]">
          
          {/* Section Header */}
          <div class='text-center pb-12 md:pb-16'>
            <p class="font-thin text-base md:text-xl text-[#797979]">Our Salon Services</p>
            <h2 class="font-bold text-3xl md:text-5xl pt-2 md:pt-3">Best Salon and Barber</h2>
            <h2 class="font-bold text-3xl md:text-5xl pt-2 md:pt-3">Services for You</h2>
          </div>

          {/* Services Flex Container */}
          <div class='flex flex-col md:flex-row justify-between gap-10 md:gap-0'>
            
            {/* Service Card 1 */}
            <div class="flex justify-center">
              <div class="w-[90vw] sm:w-[300px] md:w-[350px] h-auto bg-[#1D24340A] relative pb-8 md:pb-6">
                <img src={service1} alt='service-pic' class="w-full h-auto object-cover"/>
                <div class='w-[95%] sm:w-[280px] h-[240px] md:w-[320px] md:h-[233px] bg-transparent absolute top-3 left-3 border border-[#ffffff] z-10'></div>
                <div class='text-center px-4'>
                  <p class='pt-5 font-semibold text-lg md:text-xl'>Hair Cut</p>
                  <p class='py-5 text-sm md:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, recusandae.</p>
                  <button class="text-sm md:text-base px-6 py-3 border-2 border-[#1d2434] hover:bg-[#1d2434] hover:text-[#D5B981] transition-all">
                    Learn more
                  </button>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div class="flex justify-center">
              <div class="w-[90vw] sm:w-[300px] md:w-[350px] h-auto bg-[#1D24340A] relative pb-8 md:pb-6">
                <img src={service2} alt='service-pic' class="w-full h-auto object-cover"/>
                <div class='w-[95%] sm:w-[280px] h-[240px] md:w-[320px] md:h-[233px] bg-transparent absolute top-3 left-3 border border-[#ffffff] z-10'></div>
                <div class='text-center px-4'>
                  <p class='pt-5 font-semibold text-lg md:text-xl'>Beard Style</p>
                  <p class='py-5 text-sm md:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, recusandae.</p>
                  <button class="text-sm md:text-base px-6 py-3 border-2 border-[#1d2434] hover:bg-[#1d2434] hover:text-[#D5B981] transition-all">
                    Learn more
                  </button>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div class="flex justify-center">
              <div class="w-[90vw] sm:w-[300px] md:w-[350px] h-auto bg-[#1D24340A] relative pb-8 md:pb-6">
                <img src={service3} alt='service-pic' class="w-full h-auto object-cover"/>
                <div class='w-[95%] sm:w-[280px] h-[240px] md:w-[320px] md:h-[233px] bg-transparent absolute top-3 left-3 border border-[#ffffff] z-10'></div>
                <div class='text-center px-4'>
                  <p class='pt-5 font-semibold text-lg md:text-xl'>Color & Wash</p>
                  <p class='py-5 text-sm md:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, recusandae.</p>
                  <button class="text-sm md:text-base px-6 py-3 border-2 border-[#1d2434] hover:bg-[#1d2434] hover:text-[#D5B981] transition-all">
                    Learn more
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeThirdSection
