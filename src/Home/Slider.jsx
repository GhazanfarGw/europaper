import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div className='justify-center mx-auto pt-10 z-0 md:py-20 bg-white'>
      <Swiper
        pagination={{
        type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper object-cover overflow-hidden md:max-h-[50rem]"
            >
        <SwiperSlide><img src="1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="4.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}