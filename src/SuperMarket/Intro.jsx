import React from "react";
import image from "../assets/supermarket/dropshipping-model-animate.svg";
const Intro = () => {
  return (
    <div
      className=" w-full text-center"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <h1 className="font-semibold text-xl dark:text-white p-2">
        نرم‌افزار فروشگاهی دینا سود
      </h1>
      <h3 className="font-normal text-lg max-sm:leading-9 dark:text-white p-2 border-borderDark dark:border-borderDark border-b-4 w-fit inline-block text-justify lg:max-w-[710px] leading-8">
        مدیریت فروش محصولات و ارسال مطمئن و سریع برای مشتریان مناسب استفاده در
        فروشگاه‌های زنجیره‌ای ، سوپر‌مارکت‌ها ، هایپر‌مارکت‌ها و تمامی
        فروشگاه‌های عرضه کالا
      </h3>
      <div className=" w-full text-center">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="flex items-center justify-center w-full mt-6 lg:mt-0"
        >
          <img
            src={image}
            alt="hero-image"
            className="w-auto h-auto lg:max-w-xl rounded-3xl"
          />
        </div>
        <p className="py-2 md:py-4 leading-8 text-justify  dark:text-white">
          نرم افزار سوپر مارکت آنلاین که با نام فروشگاه آنلاین دینا سود نیز
          شناخته می‌شود یکی از برترین نرم‌افزارهای مربوط به فروش آنلاین محصولات
          در سوپر مارکت ها است. این نرم افزار دارای نسخه وب و اپلیکیشن است.
        </p>
      </div>
    </div>
  );
};

export default Intro;
