import React from "react";
import image1 from "../assets/images/mainPageImages/support.svg";
import image2 from "../assets/images/mainPageImages/system.svg";
import image3 from "../assets/images/mainPageImages/security.svg";
const Section6 = () => {
  return (
    <div className="w-auto text-justify tracking-tight dark:text-white">
      <div
        className="w-full dark:text-white"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h3 className="font-semibold text-lg text-borderDark p-4 dark:text-purple-400">
          چرا دیـنا؟
        </h3>
        <div className="text-justify">
          <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
            دلایل شما برای انتخاب مجموعه دینا
          </h1>
        </div>
      </div>

      <div className="w-full mt-8 text-justify grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="rounded-xl bg-white dark:bg-bgDarkInner transition-all hover:scale-105 duration-200 cursor-pointer neomofisme-shadow dark:neomofisme-shadow-dark"
        >
          <div className="w-full flex justify-center">
            <img src={image1} alt="image" className=" w-full" />
          </div>
          <h3 className="text-borderDark dark:text-mauve5 text-center text-lg pb-2 font-semibold ">
            پشتیبانی اختصاصی
          </h3>
          <p className="px-4 text-base pb-2 leading-8 rounded-xl dark:text-white">
            تیم پشتیبانی ما در شرایط مختلف آموزش ، اجرا و نگهداری سامانه به صورت
            آنلاین و حضوری در کنار شما خواهد بود .
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="rounded-xl bg-white dark:bg-bgDarkInner transition-all hover:scale-105 duration-200 cursor-pointer neomofisme-shadow dark:neomofisme-shadow-dark"
        >
          <div className="w-full flex justify-center">
            <img src={image2} alt="image" className=" w-full" />
          </div>
          <h3 className="text-borderDark dark:text-mauve5 text-center text-lg pb-4 font-semibold ">
            ضمانت تحویل و استقرار سامانه
          </h3>
          <p className="px-4 pb-2 text-base leading-8 rounded-xl dark:text-white">
            گروه ما با داشتن تجربه ی چندین ساله در صنعت نرم افزار محصولات را در
            سریع ترین زمان ممکن در محل مشتری نصب و راه اندازی میکنند.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="rounded-xl bg-white dark:bg-bgDarkInner transition-all hover:scale-105 duration-200 cursor-pointer neomofisme-shadow dark:neomofisme-shadow-dark"
        >
          <div className="w-full flex justify-center">
            <img src={image3} alt="image" className=" w-full" />
          </div>
          <h3 className="text-borderDark dark:text-mauve5 text-center text-lg pb-4 font-semibold ">
            رعایت موارد امنیتی و پروتکلی شبکه
          </h3>
          <p className="px-4 pb-2 text-base leading-8 rounded-xl dark:text-white">
            مجموعه دینا با تسلط کامل بر ساز و کارها و زیر ساخت های فنی، سامانه
            جامع Help Desk دینا را برای بهبود امنیت و راهبری شبکه طراحی نموده
            است.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section6;
