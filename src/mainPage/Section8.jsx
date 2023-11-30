import React from "react";
import { imageTexts } from "../data/data";

const Section8 = () => {
  return (
    <div className="w-auto text-justify tracking-tight dark:text-white">
      <div
        className="w-full dark:text-white"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h3 className="font-semibold text-lg text-borderDark p-4 dark:text-purple-400">
          لزوم استفاده از سامانه Help Desk دینا
        </h3>
        <div className="text-justify">
          <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
            آنچه برای مدیران ارشد و کارشناسان انفورماتیک ضروری است
          </h1>
        </div>
      </div>

      <div className="w-full mt-8 text-justify grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {imageTexts.map((imageText) => (
          <div
            key={imageText.id}
            data-aos="flip-up"
            data-aos-delay="100"
            className="rounded-xl bg-white dark:bg-bgDarkInner transition-all hover:scale-105 duration-800 cursor-pointer neomofisme-shadow dark:neomofisme-shadow-dark"
          >
            <div className="w-full absolute top-0 right-0 h-full bg-bgDarkInner rounded-xl opacity-0 z-10 hover:z-40 hover:opacity-80 transition-all duration-200 flex justify-center items-center">
              <h1 className="font-semibold text-xl text-center text-white w-fit ">
                {imageText.text}{" "}
              </h1>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <img
                src={imageText.image}
                className="rounded-xl"
                alt="brandig-image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section8;
