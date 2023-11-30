import React from "react";
import image from "../assets/images/data-extraction-cuate-animate.svg";
import { Link } from "react-router-dom";
const BuyHelpdesk = () => {
  return (
    <section className="container w-[calc(100%-2rem)] mx-auto pb-8  ">
      <div className="w-auto flex flex-col items-center lg:flex-row p-4 bg-white dark:bg-bgDarkInner rounded-xl text-justify mt-4 tracking-tight dark:text-white">
        <div data-aos="fade-down" data-aos-duration="1000" className="w-full">
          <h1 className="font-semibold text-xl border-borderDark dark:border-borderDark border-b-4 w-fit p-4 ">
            خرید نرم افزار هلپ دسک
          </h1>
          <p className="py-2 md:py-4 leading-8 text-justify">
            خرید نرم افزار هلپ دسک به راحتی و با استفاده از سایت دینا امکان‌پذیر
            است. در صورتی که می‌خواهید از نزدیک با این سامانه آشنا شده و
            قابلیت‌های آن را مورد بررسی قرار دهید می‌توانید نسخه دموی این سامانه
            را دریافت کنید. شما می‌توانید به راحتی و تنها با ارسال تیکت از
            کارشناسان و مشاوران دینا در زمینه نصب و راه‌اندازی این سامانه کمک
            دریافت کنید.
          </p>
          <p className="py-2 md:py-4 leading-8 text-justify">
            نکته مهمی که در خرید نرم افزار هلپ دسک دینا باید به آن توجه داشته
            باشید قیمت مناسب و کارایی بالای این سامانه است. این سامانه یکی از
            قدیمی‌ترین سامانه‌های موجود در ایران است. گستردگی و دامنه مشتریانی
            که از این سامانه استفاده کرده‌اند نشان دهد قدرت و کیفیت اجرایی بالای
            آن است.
            <Link
              className="text-borderDark font-bold dark:text-indigo-500"
              to="/"
            >
              {" "}
              مجموعه داده کاوان دینا به‌عنوان تولیدکننده و ارائه دهنده این
              سامانه{" "}
            </Link>
            با سال‌ها تلاش و تجربه در این زمینه توانسته است نرم افزاری جامع و
            کاربردی را به مشتریان خود ارائه دهد.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex items-center justify-center w-full mt-6 lg:mt-0"
        >
          <img
            src={image}
            alt="image"
            className="w-full h-full lg:max-w-3xl rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default BuyHelpdesk;
