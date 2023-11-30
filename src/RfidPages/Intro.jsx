import React from "react";
import introImage from "../assets/images/barcode-animate.svg";

const Intro = () => {
  return (
    <div>
      <div className="items-center lg:flex ">
        <div
          className="w-full lg:w-1/2 dark:text-white"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="lg:max-w-lg text-justify">
            <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
              معرفی تگ RFID – بررسی ۶ کاربرد اصلی برچسب RFID
            </h1>
            <p className="py-2 md:py-4 leading-8">
              تگ RFID نوعی سیستم ردیابی است که از فرکانس رادیویی برای جستجو،
              شناسایی، ردیابی و برقراری ارتباط با اقلام و افراد و موارد دیگر
              استفاده می‌کند. اساساً، تگ‌های RFID که به آن‌ها برچسب‌های RFID نیز
              گفته می‌شود، برچسب‌های هوشمندی هستند که می‌توانند طیف وسیعی از
              اطلاعات، از شماره سریال گرفته تا توضیحات کوتاه و حتی صفحات داده را
              ذخیره کنند. برخی از تگ‌های RFID دارای ویژگی‌های امنیتی رمزنگاری
              برای سطح‌های بالاتر بوده و نیازمند تأیید و احراز هویت هستند.
            </p>
            <p className="py-2 md:py-4 leading-8">
              امروزه برچسب‌های شناسایی فرکانس رادیویی (RFID) بخش مهمی از زندگی
              روزمره در کسب‌وکارها و سیستم‌های مدیریتی هستند. نکته قابل توجه این
              است که این فناوری مدام در حال پیشرفت بوده و استانداردهای استفاده
              از این فناوری همچنان در حال رشد است. برچسب‌های RFID طیف گسترده‌ای
              از خدمات را بر عهده می‌گیرند، برچسب روی محصولات فروشگاه را در نظر
              بگیرید که به منظور جلوگیری از سرقت است.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
        >
          <img
            src={introImage}
            alt="heroimage"
            id="freepik_stories-brand-construction"
            className="animated w-full h-full lg:max-w-3xl"
          />
        </div>
      </div>
      <p
        className="py-2 md:py-4 leading-8 dark:text-white text-justify"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        همچنین برچسب کوچک روی شیشه جلوی خودرو که امکان استفاده رایگان از عوارضی
        و پارکینگ‌ها و حتی ورودی به پارکینگ‌های طبقاتی را فراهم می‌کند. از آن‌ها
        می‌توان برای مدیریت اموال و دارایی‌ها استفاده کرد. همچنین برچسب‌ها
        قابلیت هوشمند سازی نیاز دارند. گستره استفاده از تگ‌های RFID روز به روز
        در حال افزایش است. نکته قابل توجه این است که در حالی که بیشتر تگ‌های
        RFID برای کالاها یا برای ردیابی بسته‌ها استفاده می‌شوند، می‌توان از
        آن‌ها برای ردیابی حیوانات خانگی یا بیماران در بیمارستان‌ها نیز استفاده
        کرد.
      </p>
    </div>
  );
};

export default Intro;
