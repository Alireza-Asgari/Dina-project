import React from "react";

const Section4 = () => {
  return (
    <div className="w-auto flex flex-col items-center lg:flex-row-reverse text-justify mt-4 tracking-tight dark:text-white ">
      <div
        className="w-full dark:text-white"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="text-justify">
          <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
            در کنار شما هستیم.از آموزش تا پیاده‌سازی
          </h1>
          <p className="py-2 md:py-4 leading-8">
            گروه نرم افزاری دینا متشکل از جوانان متعهد و حرفه ای در صنعت نرم
            افزار و طراحی سیستم است که طی سالیان متوالی در امر تولید نرم افزار و
            اپلیکیشن ، طراحی و معماری سیستم های نرم افزاری و ارائه پشتیبانی های
            فنی به مشتریان خود فعالانه تلاش می کنند .
          </p>
        </div>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="flex items-center justify-center w-full m-4"
      >
        <iframe
          src="https://www.aparat.com/video/video/embed/videohash/Cd5Ab/vt/frame?titleShow=true"
          allow="autoplay; encrypted-media"
          type="text/html"
          width="100%"
          height="350"
          allowFullScreen
          title="video"
          className="rounded-lg shadow-xl dark:shadow-bgDarkInner"
        ></iframe>
      </div>
    </div>
  );
};

export default Section4;
