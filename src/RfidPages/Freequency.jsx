import React from "react";
import image from "../assets/images/standup-meeting-animate.svg";
const Freequency = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className=" w-auto  text-justify tracking-tight p-4 "
    >
      <div data-aos="fade-left" data-aos-duration="1000">
        <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
          فرکانس‌های مختلف تگ‌های RFID
        </h1>
        <p className="py-2 leading-8 rounded-xl mt-2 mb-0 dark:text-white">
          تگ‌های غیرفعال RFID به چند دسته تقسیم می‌شوند. اساس این تقسیم بندی
          فرکانس کاری آن‌ها است. در نتیجه تگ‌هایی که فرکانس بالاتری دارند در
          برابر دستگاه‌های RFID Reader فرکانس بالاتر کارایی ندارند و مشکلی برای
          آن‌ها پیش نمی آید. این سه دسته بندی عبارت‌اند از:
        </p>
      </div>

      <div className="w-auto flex flex-col items-center lg:flex-row p-4  text-justify mt-4 tracking-tight dark:text-white">
        <div data-aos="fade-left" data-aos-duration="1000" className="w-full">
          <p className="py-2 md:py-4 leading-8">
            <span className="text-pink-700 dark:text-borderDark">
              فرکانس ۱۲۵ تا ۱۳۴ کیلوهرتز{" "}
            </span>{" "}
            ، به عنوان فرکانس پایین LF شناخته می‌شود. معمولاً تگ‌هایی که روی
            لباس‌ها و یا جاسوئیچی‌ها و حتی کارت‌های RFID قرار می‌گیرد از این نوع
            است. برای دریافت اطلاعات تگ‌ها در این بازه فرکانسی تگ باید کاملاً با
            دستگاه RFID Reader در تماس مستقیم باشد. فاصله حتی 5 سانت بیشتر هم
            باعث می‌شود که اطلاعات خوانده نشود.
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex items-center justify-center w-full mt-6 lg:mt-0"
        >
          <img
            src={image}
            alt="image"
            className="w-auto h-w-auto lg:max-w-3xl rounded-3xl"
          />
        </div>
      </div>

      <div className="w-auto bg-white dark:bg-bgDarkInner rounded-xl flex flex-col items-center lg:flex-row p-4  text-justify mt-4 tracking-tight dark:text-white">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex items-center justify-center w-full mt-6 lg:mt-0"
        >
          <img
            src={image}
            alt="image"
            className="w-auto h-w-auto lg:max-w-3xl rounded-3xl"
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" className="w-full">
          <p className="py-2 md:py-4 leading-8">
            <span className="text-pink-700 dark:text-borderDark">
              فرکانس ۱۳/۵۶ مگاهرتز{" "}
            </span>{" "}
            ، به عنوان فرکانس بالا (HF) و ارتباطات میدان نزدیک (NFC) شناخته
            می‌شود، این نوع فرکانس‌ها در کارت‌های شناسایی RFID مانند انواع
            کارت‌های مترو، کارت‌های پرسنلی و غیره استفاده می‌شوند. کاربرد NFC
            برای انتقال اطلاعات در کیف پول‌ها و موبایل‌ها به شدت رواج پیدا کرده
            است. برای ارسال اطلاعات از طریق NFC دستگاه ارسال کننده و گیرنده باید
            در فاصله نزدیک ۱۰ سانتی هم قرار گیرند. همین امر باعث می‌شود که امنیت
            داده‌ها در این ارسال‌ها به خوبی تامین شود.
          </p>
        </div>
      </div>

      <div className="w-auto flex flex-col items-center lg:flex-row p-4  text-justify mt-4 tracking-tight dark:text-white">
        <div data-aos="fade-left" data-aos-duration="1000" className="w-full">
          <p className="py-2 md:py-4 leading-8">
            <span className="text-pink-700 dark:text-borderDark">
              فرکانس ۸۶۵ تا ۹۶۰ مگاهرتز{" "}
            </span>{" "}
            ، به عنوان فرکانس فوق العاده بالا (UHF) شناخته می‌شود. این نوع
            فرکانس باعث می‌شود که تگ‌ها در یک محدوده و شعاع حرکتی برد بلند
            خوانده شوند. از این نوع تگ‌ها برای شناسایی اموال، انبارگردانی و
            هوشمند سازی به شدت استفاده می‌شود. برای خواندن اطلاعات تگ‌ها در این
            حالت از دستگاه‌های RFID Reader مخصوص با توانایی بالا استفاده می‌شود.
            حتی بهترین و قوی‌ترین دستگاه‌های RFID Reader برد HF نیز توانایی
            شناسایی تگ‌های UHF را ندارند.
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex items-center justify-center w-full mt-6 lg:mt-0"
        >
          <img
            src={image}
            alt="image"
            className="w-auto h-w-auto lg:max-w-3xl rounded-3xl"
          />
        </div>
      </div>

      <div className="w-auto bg-white dark:bg-bgDarkInner rounded-xl flex flex-col items-center lg:flex-row p-4  text-justify mt-4 tracking-tight dark:text-white">
        <h1 className="font-semibold text-lg whitespace-nowrap text-center border-borderDark dark:border-borderDark border-b-4 lg:border-b-0 lg:border-l-4  dark:text-white w-fit p-4">
          نکته مهم
        </h1>
        <p className="py-2 ps-4 leading-8 rounded-xl mt-2 mb-0 dark:text-white">
          در هنگام انتخاب و خرید تگ RFID باید به خوبی به این نکته دقت کنید که
          فرکانس استفاده شده بر محدوده تگ تأثیر می گذارد. بهتر است که قبل از
          خرید و یا برنامه‌ریزی حتی از کارشناسان حرفه‌ای در زمینه تگ RFID کمک
          بگیرید.
        </p>
      </div>
    </div>
  );
};

export default Freequency;
