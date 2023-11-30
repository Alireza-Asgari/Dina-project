import React from "react";

const Section10 = () => {
  return (
    <div className="rounded-xl text-justify mt-4 tracking-tight h-fit">
      <div
        className="w-full dark:text-white"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4 mb-4">
          با ما در تماس باشید
        </h1>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13216.216354568847!2d49.7155032!3d34.0937548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xecbc02be6a1a96b1!2z2K_Yp9iv2Ycg2qnYp9mI2KfZhiDYr9uM2YbYpw!5e0!3m2!1sfa!2s!4v1657527227591!5m2!1sfa!2s"
        className="w-full min-h-[500px] h-auto mx-auto"
        // style="border: 0px; pointer-events: none;"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Section10;
