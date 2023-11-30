import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import swip1 from "../assets/images/mainPageImages/swip1.png";
import swip2 from "../assets/images/mainPageImages/swip2.png";
import swip3 from "../assets/images/mainPageImages/swip3.png";
import swip4 from "../assets/images/mainPageImages/swip4.png";

import swip5 from "../assets/images/mainPageImages/swip5.png";
import swip6 from "../assets/images/mainPageImages/swip6.png";
import swip7 from "../assets/images/mainPageImages/swip7.png";
import swip8 from "../assets/images/mainPageImages/swip8.png";

import swip9 from "../assets/images/mainPageImages/swip9.png";
import swip10 from "../assets/images/mainPageImages/swip10.png";
import swip11 from "../assets/images/mainPageImages/swip11.png";
import swip12 from "../assets/images/mainPageImages/swip12.png";

import swip13 from "../assets/images/mainPageImages/swip13.png";
import swip14 from "../assets/images/mainPageImages/swip14.png";
import swip15 from "../assets/images/mainPageImages/swip15.png";
import swip16 from "../assets/images/mainPageImages/swip16.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const images2 = [
  { image: swip1, id: 1 },
  { image: swip2, id: 2 },
  { image: swip3, id: 3 },
  { image: swip4, id: 4 },
  { image: swip5, id: 5 },
  { image: swip6, id: 6 },
  { image: swip7, id: 7 },
  { image: swip8, id: 8 },
  { image: swip9, id: 9 },
  { image: swip10, id: 10 },
  { image: swip11, id: 11 },
  { image: swip12, id: 12 },
  { image: swip13, id: 13 },
  { image: swip14, id: 14 },
  { image: swip15, id: 15 },
  { image: swip16, id: 16 },
];
const SwipeLogoes = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    const second = Math.ceil(time / 1000);
    const number = () => {
      switch (second) {
        case 1:
          return "۱";
        case 2:
          return "۲";
        case 3:
          return "۳";
        case 4:
          return "۴";
        case 5:
          return "۵";
        case 6:
          return "۶";
      }
    };

    progressContent.current.textContent = `${number()}ثانیه`;
  };
  const sliding = () => {
    if (screenSize.width <= 640) return 1;
    else if (screenSize.width <= 768) return 2;
    else return 4;
  };
  return (
    <>
      <Swiper
        slidesPerView={sliding()}
        spaceBetween={10}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full h-full overflow-x-clip"
      >
        {images2.map((imgItem) => (
          <SwiperSlide key={imgItem.id} className="py-20 dark:bg-bgDarkInner">
            <div className="">
              <img
                src={imgItem.image}
                className="p-6 w-20 h-20 lg:p-8 lg:w-30 lg:h-30 rounded-3xl neomofisme-shadow dark:neomofisme-shadow-dark dark:bg-mauve10"
                alt="company-image"
              />
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress " slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span className="text-sm p-5 " ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};
export default SwipeLogoes;
