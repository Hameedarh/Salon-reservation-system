import React from 'react'
import about from '../assets/img/about.jpg'

function HomeSecondSection() {
  return (
    <div>
        <div class="py-24">
            <div class="w-[90%] m-auto flex justify-between px-[75px]">
                <div class="basis-2/5">
                    <div class='relative'>
                        <div class="w-[385px] h-[466px] bg-[#1d2434]">
                        </div>
                        <div class="w-[385px] h-[466px] bg-[transparent] absolute top-9 left-9 border-solid border-[1px] border-[#ffffff] z-10 ">
                        </div>
                        <img src={about} alt='about-pic' class="w-[385px] h-[466px] absolute top-16 left-16"/>

                    </div>
                </div>
                <div class="basis-3/5 px-12">
                    <div class="flex justify-center items-center h-[100%]">
                        <div class=" h-[50%] w-[100%]">
                            <p class="font-thin text-xl text-[#797979]">Learn About Us</p>
                            <h2 class="font-bold text-5xl pt-3">3+ Years Experience</h2>
                            <div class='pt-8 text-[#797979]'>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur est sequi necessitatibus recusandae maiores, similique deserunt quos magni qui ut mollitia nam reprehenderit labore voluptates, fugiat beatae id error quam.</p>
                                <p class='pt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A molestiae officiis quasi aliquid et! Esse corporis sit eaque vitae possimus autem accusantium? Facere quaerat eveniet odit aliquid beatae corporis fuga.</p>                            
                            </div>
                            <div class='pt-8'>
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
  )
}

export default HomeSecondSection