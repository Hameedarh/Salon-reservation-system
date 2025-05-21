import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, EffectFade, Autoplay } from 'swiper/modules';
import { pictures } from "../data/pictures";
import { useEffect, useState } from "react";

function HomeSwiper() {

    const [view, setView] = useState(3);
    const [space, setSpace] = useState(30);

    useEffect(() => {
        //set the view
        if (window.innerWidth <= 600) {
          setView(2);
        } else if (window.innerWidth <= 900) {
          setView(3);
        }
    
        //set the space
        if (window.innerWidth < 480) {
          setSpace(20);
        } else if (window.innerWidth <= 900) {
          setSpace(35);
        }
      }, [space, view]);

  return (
    <div>
        <div>
            <section>
                <Swiper
                    spaceBetween={space}
                    // slidesPerView={4}
                    slidesPerView={view}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination, Navigation, EffectFade, Autoplay]}
                    speed={3000}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    {/* {pictures.map((slide, index) => (
                        <SwiperSlide key={index}>
                        <img src={slide?.thumbnail} alt={slide?.title} />
                        </SwiperSlide>
                    ))} */}
                    {pictures.map((slide, index) => (
                        <SwiperSlide key={index}>
                        <div class=''>
                            <div class="w-[350px] h-[504px] bg-[#1D24340A] relative">
                                <img src={slide?.thumbnail} alt={slide?.title} />
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    </div>
  )
}

export default HomeSwiper