import React from 'react'
import service1 from '../assets/img/service-1.jpg'
import service2 from '../assets/img/service-2.jpg'
import service3 from '../assets/img/service-3.jpg'

function HomeThirdSection() {
  return (
    <div>
        <div class="py-10">
            <div class="w-[90%] m-auto px-[75px]">
                <div class='text-center pb-16'>
                    <p class="font-thin text-xl text-[#797979]">Our Salon Services</p>
                    <h2 class="font-bold text-5xl pt-3">Best Salon and Barber</h2>
                    <h2 class="font-bold text-5xl pt-3">Services for You</h2>
                </div>
                <div class='flex justify-between'>
                    <div class=''>
                        <div class="w-[350px] h-[504px] bg-[#1D24340A] relative">
                            <img src={service1} alt='service-pic' class=""/>
                            <div class='w-[320px] h-[233px] bg-[transparent] absolute top-4 left-4 border-solid border-[1px] border-[#ffffff] z-10'>

                            </div>
                            <div class='text-center'>
                                <div>
                                    <p class='pt-5 font-semibold text-xl'>Hair Cut</p>
                                    <p class='py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, recusandae.</p>
                                    <button class="px-[30px] py-[15px] border-2 border-solid border-[#1d2434] bg-[none] hover:bg-[#1d2434] hover:text-[#D5B981] ">
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=''>
                        <div class="w-[350px] h-[504px] bg-[#1D24340A] relative">
                            <img src={service2} alt='service-pic' class=""/>
                            <div class='w-[320px] h-[233px] bg-[transparent] absolute top-4 left-4 border-solid border-[1px] border-[#ffffff] z-10'>

                            </div>
                            <div class='text-center'>
                                <div>
                                    <p class='pt-5 font-semibold text-xl'>Beard Style</p>
                                    <p class='py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, recusandae.</p>
                                    <button class="px-[30px] py-[15px] border-2 border-solid border-[#1d2434] bg-[none] hover:bg-[#1d2434] hover:text-[#D5B981] ">
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=''>
                        <div class="w-[350px] h-[504px] bg-[#1D24340A] relative">
                            <img src={service3} alt='service-pic' class=""/>
                            <div class='w-[320px] h-[233px] bg-[transparent] absolute top-4 left-4 border-solid border-[1px] border-[#ffffff] z-10'>

                            </div>
                            <div class='text-center'>
                                <div>
                                    <p class='pt-5 font-semibold text-xl'>Color & Wash</p>
                                    <p class='py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, recusandae.</p>
                                    <button class="px-[30px] py-[15px] border-2 border-solid border-[#1d2434] bg-[none] hover:bg-[#1d2434] hover:text-[#D5B981] ">
                                        Learn more
                                    </button>
                                </div>
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