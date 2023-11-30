import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";

// import required modules
import { EffectFade, Pagination, Navigation } from "swiper/modules";

export default function Caroucell({ images }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect={"fade"}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide > 
            {/* <div className="h-screen w-full"></div> */}
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
