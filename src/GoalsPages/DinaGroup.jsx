import React from "react";
import image from "../assets/images/goals-image.svg";
const DinaGroup = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className="w-auto text-justify tracking-tight"
    >
      <div className="w-auto flex flex-col items-center lg:flex-row  text-justify mt-4 tracking-tight dark:text-white">
        <div data-aos="fade-left" data-aos-duration="1000" className="w-full">
          <h1 className="font-semibold text-lg text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
            گروه نرم افزاری دینا
          </h1>
          <div
            data-aos="zoom-out-left"
            data-aos-duration="1000"
            className=" p-4
          dark:text-white text-justify tracking-tight "
          >
            <p className="py-2 leading-8 rounded-xl mt-2 mb-0 dark:text-white">
              گروه نرم افزاری دینا متشکل از جوانان متعهد و حرفه ای در صنعت نرم
              افزار و طراحی سیستم است که طی سالیان متوالی در امر تولید نرم افزار
              و اپلیکیشن ، طراحی و معماری سیستم های نرم افزاری و ارائه پشتیبانی
              های فنی به مشتریان خود فعالانه تلاش می‌کنند .
            </p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex items-center justify-center w-full"
        >
          <img
            src={image}
            alt="goals-image"
            className="w-auto h-auto rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DinaGroup;
