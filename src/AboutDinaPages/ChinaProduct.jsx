import React from "react";
import image1 from "../assets/images/carosel/china/china-1.jpg";
import image2 from "../assets/images/carosel/china/china-2.jpg";
import image3 from "../assets/images/carosel/china/china-3.jpg";
import image4 from "../assets/images/carosel/china/china-4.jpg";
import image5 from "../assets/images/carosel/china/china-5.jpg";

import Caroucell from "./Caroucell";
const ChinaProduct = ({ rowValue }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className={`w-full flex flex-col gap-4 items-center lg:gap-8 lg:flex-${rowValue} text-justify tracking-tight dark:text-white`}
    >
      <div className="w-full lg:w-1/2">
        <h1 className="font-semibold text-xl text-justify border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
          معرفی نرم افزار چیدمان فروشگاهی – نرم افزار چینا
        </h1>
        <p className="pt-2 leading-8 rounded-xl mt-2 mb-0 dark:text-white">
          نرم افزار چیدمان فروشگاهی چینا که با نام نرم افزار Cheena نیز شناخته
          می‌شود برای اولین بار در مجموعه رامک و توسط ویزیتورها و بازاریاب‌های
          این مجموعه به صورت کشوری اجرا شد. این نرم افزار به غرفه دارها و
          مسئولین چیدمان محصولات در فروشگاه‌ها کمک می‌کند که محصولات را بهتر در
          قفسه‌ها قرار دهند تا برند رامک بهتر دیده شده و فروش محصولات افزایش
          پیدا کند.
        </p>
        <p className="pt-2 leading-8 rounded-xl dark:text-white">
          نرم افزار مدیریت چیدمان این قابلیت را دارد که برای تمامی محصولات
          فروشگاهی با برندهای مختلف استفاده شود. با این کار محصولات شما در
          فروشگاه‌های مختلف بهتر دیده شده و فروش شما افزایش پیدا می‌کند. همچنین
          باعث مدیریت چیدمان محصولات در قفسه‌های فروشگاه‌های مختلف می‌شود. این
          کار باعث می‌شود که مشتریان محصولات شما را در بین محصولات دیگر شرکت‌ها
          بهتر و سریع‌تر پیدا کرده و نسبت به خرید آن‌ها اقدام نمایند.
        </p>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <Caroucell images={[image1, image2, image3, image4, image5]} />
      </div>
    </div>
  );
};

export default ChinaProduct;
