import React from "react";
import image from "../assets/images/china-intro.svg";
const ChinaIntro = () => {
  return (
    <div
      className=" w-full text-center"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <h1 className="font-semibold text-xl dark:text-white p-4">چینا</h1>
      <h1 className="font-semibold text-lg sm:text-xl dark:text-white p-2 whitespace-nowrap mx-auto">
        جایگاه برند شما در دنیای هوش مصنوعی
      </h1>
      <h3 className="font-normal text-lg dark:text-white p-2 border-borderDark dark:border-borderDark border-b-4 w-fit inline-block">
        محصولی از شرکت داده کاوان دینا
      </h3>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="flex items-center justify-center w-full mt-6 lg:mt-0"
      >
        <img
          src={image}
          alt="hero-image"
          className="w-auto h-auto lg:max-w-3xl rounded-3xl"
        />
      </div>
      <p className="py-2 md:py-4 leading-8 text-justify dark:text-white">
        نرم افزار مدیریت چیدمان فروشگاهی که با نام نرم افزار چینا نیز شناخته
        می‌شود یک نرم افزار مبتنی بر هوش مصنوعی است. این نرم افزار به شرکت‌ها و
        ویزیتورها کمک می‌کند که فرایند چیدمان محصولات در فروشگاه‌ها را مدیریت
        کنند. هدف اصلی این نرم افزار کمک به بهتر دیده شدن برند محصولات است.
      </p>
    </div>
  );
};

export default ChinaIntro;
