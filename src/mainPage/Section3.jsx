import React from "react";
import image from "../assets/images/mainPageImages/working-animate.svg";
const Section3 = () => {
  return (
    <div className="w-auto flex flex-col items-center lg:flex-row text-justify mt-4 tracking-tight dark:text-white">
      <div
        className="w-full dark:text-white"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h3 className="font-semibold text-lg text-borderDark p-4 dark:text-purple-400">
          درباره مجموعه دینا
        </h3>
        <div className="text-justify">
          <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
            ارزش‌های ما و آنچه در مسیرمان طی کرده‌ایم
          </h1>
          <p className="py-2 md:py-4 leading-8">
            مجموعه نرم افزاری داده کاوان دینا با داشتن سابقه ای طولانی در تولید
            و اجرای نرم افزاری های سفارشی و سامانه های فروشگاهی و نیز نرم
            افزارهای جامع فناوری اطلاعات و Desk Help درسازمانها و نهادهای دولتی
            و خصوصی همواره بر آن بوده است که ارتباط پایدار و نزدیک را بامشتریان
            خود حفظ نماید تا به واسطه آن قدمی نوین و محکم در راستای پیشرفت و
            توسعه ی کیفی محصولات خود بردارد. افتخار ما همراهی و کسب تجربه از
            فضای تخصصی مشتریانی است که با پیشنهادات تخصصی خود در پیشبرد چشم
            اندازهای فنی و معنوی این مجموعه همواره تاثیرگذار و هم پیمان ما بوده
            اند.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="flex items-center justify-center w-full"
      >
        <img src={image} alt="working in office" className="w-auto h-auto" />
      </div>
    </div>
  );
};

export default Section3;
