import React from "react";
import image from "../assets/images/SupportImages/active-support-animate.svg";
const Section1Support = () => {
  return (
    <div className="items-center lg:flex ">
      <div
        className="w-full lg:w-1/2 dark:text-white"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="lg:max-w-lg text-justify">
          <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
            ارتباط با واحد پشتیبانی دینا
          </h1>
          <p className="py-2 md:py-4 leading-8">
            شما می توانید با استفاده از فرم زیر به راحتی با واحد پشتیبانی دینا
            را ارتباط برقرار کرده و سوالات و مشکلات خود را از این طریق مطرح
            کنید. کارشناسان دینا در کوتاه ترین زمان ممکن به مشکلات و سوالات شما
            پاسخ خواهند داد. شما قادر خواهید بود در شبانه روز جهت رفع مشکل از
            سامانه ارتباط با واحد پشتیبانی دینا استفاده کرده و این اطمینان را
            داشته باشید که کارشناسان ما در بخش پشتیبانی، در اسرع وقت به رفع مشکل
            شما خواهند پرداخت.
          </p>
          <p className="py-2 md:py-4 leading-8">
            پشتیبانی محصولات مختلف در کوتاه ترین زمان ممکن واحد پشتیبانی دینا با
            رویکرد بهبود مشتری مداری و جلب رضایت مشتری تشکیل شده است. این واحد
            درقالب گروه های جداگانه در حال سرویس رسانی به مشتریان گرامی می
            باشند.تمامی تیکت های دریافتی در این واحد توسط کارشناسان و مشاوران در
            کوتاهترین زمان پاسخ داده خواهد شد. شما می توانید به راحتی نسبت به
            محصولاتی از قبیل ، سامانه Help desk ، نرم افزار مدیریت چیدمان، بخش
            فروش و راه اندازی تگ RFID یا همان دینا تگ و دیگر محصولات اختصاصی
            دینا ، تیکت مد نظر خود را ارسال کنید .
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
      >
        <img
          src={image}
          alt="Support"
          className="animated w-full h-full lg:max-w-3xl"
        />
      </div>
    </div>
  );
};

export default Section1Support;
