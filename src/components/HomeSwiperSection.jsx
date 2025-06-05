import React from 'react'
import Slider from "../components/HomeSwiper";

function HomeSwiperSection() {
  return (
    <div id='blog'>
        <div class="py-10">
            <div class="w-[90%] m-auto px-4 md:px-[75px]">
                <div class='text-center pb-12 md:pb-16'>
                    <p class="font-thin text-base md:text-xl text-[#797979]">Latest from the blog</p>
                    <h2 class="font-bold text-3xl md:text-5xl pt-2 md:pt-3">Learn More from Latest</h2>
                    <h2 class="font-bold text-3xl md:text-5xl pt-2 md:pt-3">Barber Blog</h2>
                </div>
                <section>
                    <Slider/>
                </section>
            </div>
        </div>
    </div>
  )
}

export default HomeSwiperSection