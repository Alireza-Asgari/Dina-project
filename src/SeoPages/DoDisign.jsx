import React from "react";
import { Link } from "react-router-dom";

const DoDisign = () => {
  return (
    <div className="w-auto tracking-tight p-4">
      <div data-aos="fade-left" data-aos-duration="1000">
        <h1 className="font-semibold text-xl border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
          انجام سفارش های طراحی سایت به صورت حرفه ای
        </h1>
        <p className="pt-2 leading-8 text-justify rounded-xl mt-2 mb-0 dark:text-white">
          شما می‌توانید برای طراحی سایت حرفه‌ای به شرکت‌های متخصص در این زمینه
          مراجعه کنید. این شرکت‌ها به‌راحتی می‌توانند فرایند طراحی، اجرا و
          پیاده‌سازی یک سایت را برای شما انجام دهند. امروزه مدل‌های مختلفی از
          سایت‌ها در دنیای اینترنت وجود دارد. شما می‌توانید برای هر کسب‌وکاری
          اقدام به ایجاد یک سایت نمایید.{" "}
          <Link to="/" className="text-borderDark dark:text-indigo-400">
            شرکت داده کاوان دینا که با نام مختصر دینا نیز شناخته می شود یکی از
            این شرکت های متخصص در این زمینه است.
          </Link>{" "}
          این سایت ها تنها نمونه ای از طراحی های ما هستند. بیش از 10 ها سایت
          مختلف با سئو و رتبه عالی تنها بخشی از فعالیت های گسترده ما در زمینه
          طراحی وب سایت است .
        </p>
      </div>
    </div>
  );
};

export default DoDisign;
