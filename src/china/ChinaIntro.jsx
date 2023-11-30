import React from "react";

import image1 from "../assets/images/china/china-1.png";
import image2 from "../assets/images/china/china-2.png";
import image3 from "../assets/images/china/china-3.png";
import image4 from "../assets/images/china/china-4.jpeg";
import image5 from "../assets/images/china/china-5.png";
import image6 from "../assets/images/china/china-6.png";
import { Link } from "react-router-dom";

const ChinaIntro = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className=" w-auto  text-justify tracking-tight p-4 "
    >
      <div data-aos="fade-left" data-aos-duration="1000">
        <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
          معرفی نرم افزار مدیریت چیدمان فروشگاهی – نرم افزار چینا
        </h1>
        <p className="pt-2 leading-8 rounded-xl mt-2 mb-0 dark:text-white">
          <Link to="/نرم-افزار-مدیریت-چیدمان-فروشگاهی" className="font-bold">
            نرم افزار مدیریت چیدمان فروشگاهی چینا
          </Link>{" "}
          که با نام نرم افزار Cheena نیز شناخته می‌شود برای اولین بار در{" "}
          <a
            href="https://ramakdairy.com/"
            className="text-pink-700 dark:text-mauve8"
          >
            مجموعه رامک
          </a>{" "}
          و توسط ویزیتورها و بازاریاب‌های این مجموعه به صورت کشوری اجرا شد. این
          نرم افزار به غرفه دارها و مسئولین چیدمان محصولات در فروشگاه‌ها کمک
          می‌کند که محصولات را بهتر در قفسه‌ها قرار دهند تا برند رامک بهتر دیده
          شده و فروش محصولات افزایش پیدا کند.
        </p>
        <p className=" leading-8 dark:text-white">
          نرم افزار مدیریت چیدمان فروشگاهی این قابلیت را دارد که برای تمامی
          محصولات فروشگاهی با برندهای مختلف استفاده شود. با این کار محصولات شما
          در فروشگاه‌های مختلف بهتر دیده شده و فروش شما افزایش پیدا می‌کند.
          همچنین باعث مدیریت چیدمان محصولات در قفسه‌های فروشگاه‌های مختلف
          می‌شود. این کار باعث می‌شود که مشتریان محصولات شما را در بین محصولات
          دیگر شرکت‌ها بهتر و سریع‌تر پیدا کرده و نسبت به خرید آن‌ها اقدام
          نمایند.
        </p>
        <div className="mt-8 dark:text-mauve7 text-sm md:text-base w-full grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 select-none">
          <div
            className="flex max-[290px]:flex-col-reverse items-center gap-4 leading-8 neomofisme-shadow 
          dark:neomofisme-shadow-dark hover:scale-105 transition-transform
           p-3 rounded-xl "
          >
            <div className="flex items-center justify-center w-full">
              <img
                src={image1}
                alt="car-image"
                className="max-w-[140px] max-[290px]:w-full"
              />
            </div>
            <div>
              <h3 className="text-pink-700 dark:text-white text-center text-lg py-4 font-medium ">
                ثبت و مدیریت چیدمان محصولات
              </h3>
              <p>
                مکان عکس برداری از چیدمان صورت گرفته در دو زمان قبل و بعد از
                فعالیت ویزیتور ها
              </p>
            </div>
          </div>
          <div
            className="flex max-[290px]:flex-col-reverse items-center gap-4 leading-8 neomofisme-shadow 
          dark:neomofisme-shadow-dark hover:scale-105 transition-transform
           p-3 rounded-xl "
          >
            <div className="flex items-center justify-center w-full">
              <img
                src={image2}
                alt="car-image"
                className="max-w-[140px] max-[290px]:w-full"
              />
            </div>
            <div>
              <h3 className="text-pink-700 dark:text-white text-center text-lg py-4 font-medium ">
                تشخیص هوشمند برندینگ
              </h3>
              <p>
                بهره مندی از فناوری پردازش تصویر جهت شمارش هوشمند محصولات در
                فروشگاه ها
              </p>
            </div>
          </div>

          <div
            className="flex max-[290px]:flex-col-reverse items-center gap-4 leading-8 neomofisme-shadow 
          dark:neomofisme-shadow-dark hover:scale-105 transition-transform
           p-3 rounded-xl "
          >
            <div className="flex items-center justify-center w-full">
              <img
                src={image3}
                alt="car-image"
                className="max-w-[140px] max-[290px]:w-full"
              />
            </div>
            <div>
              <h3 className="text-pink-700 dark:text-white text-center text-lg py-4 font-medium ">
                رصد فعالیت ویزیتورها
              </h3>
              <p>اضافه شدن امتیازدهی جهت‌ فروشندگان‌ /‌ سرپرستان</p>
            </div>
          </div>
          <div
            className="flex max-[290px]:flex-col-reverse items-center gap-4 leading-8 neomofisme-shadow 
          dark:neomofisme-shadow-dark hover:scale-105 transition-transform
           p-3 rounded-xl "
          >
            <div className="flex items-center justify-center w-full">
              <img
                src={image4}
                alt="car-image"
                className="max-w-[140px] max-[290px]:w-full"
              />
            </div>
            <div>
              <h3 className="text-pink-700 dark:text-white text-center text-lg py-4 font-medium ">
                اعلام ویزیتورهای برتر
              </h3>
              <p>
                مکان امتیازدهی به فروشندگان و سرپرستان براساس میزان عکس های
                ارسالی چیدمان
              </p>
            </div>
          </div>

          <div
            className="flex max-[290px]:flex-col-reverse items-center gap-4 leading-8 neomofisme-shadow 
          dark:neomofisme-shadow-dark hover:scale-105 transition-transform
           p-3 rounded-xl "
          >
            <div className="flex max-[290px]:flex-col-reverse items-center justify-center w-full">
              <img
                src={image5}
                alt="car-image"
                className="max-w-[140px] max-[290px]:w-full"
              />
            </div>
            <div>
              <h3 className="text-pink-700 dark:text-white text-center text-lg py-4 font-medium ">
                دسترسی به اسامی عاملین فروشگاهی
              </h3>
              <p>
                بهره مندی از فناوری پردازش تصویر جهت شمارش هوشمند محصولات در
                فروشگاه ها
              </p>
            </div>
          </div>

          <div
            className="flex max-[290px]:flex-col-reverse items-center gap-4 leading-8 neomofisme-shadow 
          dark:neomofisme-shadow-dark hover:scale-105 transition-transform
           p-3 rounded-xl "
          >
            <div className="flex items-center justify-center w-full">
              <img
                src={image6}
                alt="car-image"
                className="max-w-[140px] max-[290px]:w-full"
              />
            </div>
            <div>
              <h3 className="text-pink-700 dark:text-white text-center text-lg py-4 font-medium ">
                شرکت در کمپین و جشنواره ها
              </h3>
              <p>
                بهره مندی از Box هوشمند جهت تعیین ارسال کالای خاص جهت ارسال عکس
                چیدمان در کمپین ها
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChinaIntro;
