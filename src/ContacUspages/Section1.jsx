import React from "react";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div
      className=" w-full text-center"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <h1 className="font-semibold text-xl dark:text-white p-2 border-b-4 border-borderDark w-fit mx-auto">
        تماس با ما- تماس با دینا به ۴ روش مختلف
      </h1>
      <div className=" w-full text-center mt-8">
        <p className="py-2 md:py-4 leading-8 text-justify text-base dark:text-white">
          تماس با ما- تماس با دینا به راحتی امکان پذیر است. شما می توانید از
          طریق ایمیل ، سامانه تیکت ، تلفن ثابت و همچنین تلفن همراه با ما در تماس
          باشید. همچنین شما می توانید در صورت نیاز به صورت حضوری در دفتر اصلی
          دینا مراجعه کرده و از خدمات و پشتیبانی محصولات مجموعه داده کاوان دینا
          استفاده نمایید .
        </p>
        <h1 className="font-semibold text-xl dark:text-white p-2 border-b-4 border-borderDark w-fit mx-auto">
          تماس با ما – تماس با دینا
        </h1>
        <p className="py-2 md:py-4 leading-8 text-justify text-base dark:text-white">
          مجموعه نرم‌افزاری دینا به عنوان یک شرکت نرم‌افزاری فعالیت خود را از
          سال ۱۳۹۷ شروع کرده است. این شرکت با همکاری گروهی از فارغ‌التحصیلان
          گرایش های رشته کامپیوتر و نرم‌افزار در نظر دارد تا به صورت ویژه در
          زمینه تولید سامانه‌های جامع Help Desk فعالیت نماید. سامانه Help Desk
          مرتبط با فعالیت‌ها و عملکردهای واحد فناوری اطلاعات در تمامی سازمان‌ها
          و ادارات دولتی، کارخانجات و تمامی مجموعه‌های خصوصی و دولتی است و به
          عنوان یک نرم‌افزار اختصاصی توسط مجموعه دینا ایجاد شده است.
        </p>
        <p className="leading-8 text-justify text-base dark:text-white">
          شما می توانید با استفاده از روش های زیر به راحتی با مجموعه دینا در
          تماس باشید. همچنین شما می توانید از طریق ارسال ایمیل و یا پیام از طریق
          همین سایت با کارشناسان مجموعه دینا در ارتباط باشید. یکی از راه های
          اساسی برای در تماس با ما بودن ، استفاده از سیستم تیکتینگ دینا است. شما
          مشتریان گرامی می توانید با ارسال تیکت به راحتی با بخش پشتیبانی در تماس
          باشید.{" "}
          <Link
            className="font-bold text-borderDark dark:text-indigo-500"
            to="/ارتباط-با-واحد-پشتیبانی-دینا"
          >
            برای ارسال تیکت می توانید اینجا کلیک کنید .
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Section1;
