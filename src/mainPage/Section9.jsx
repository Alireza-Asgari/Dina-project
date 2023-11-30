import React from "react";
import SwipeLogoes from "./Swiper";

const Section9 = () => {
  return (
    <div className="rounded-xl text-justify mt-4 tracking-tight h-fit">
      <div
        className="w-full dark:text-white"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
        آزموده را آزمودن...رواست!
        </h1>
      </div>
      <SwipeLogoes />
    </div>
  );
};

export default Section9;
