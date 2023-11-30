import React from "react";
import image1 from "../assets/images/carosel/help-desk/help-desk-1.jpg";
import image2 from "../assets/images/carosel/help-desk/help-desk-2.jpg";
import image3 from "../assets/images/carosel/help-desk/help-desk-3.jpg";
import image4 from "../assets/images/carosel/help-desk/help-desk-4.jpg";
import Caroucell from "./Caroucell";
const DinaProducts = ({ rowValue }) => {
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      className={`w-full flex flex-col gap-4 items-center lg:gap-8 lg:flex-${rowValue} text-justify tracking-tight dark:text-white`}
    >
      <div className="w-full lg:w-1/2">
        <h1 className="font-semibold text-xl text-justify border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
          معرفی سامانه Help Desk
        </h1>
        <p className="pt-2 leading-8 rounded-xl mt-2 mb-0 dark:text-white">
          سامانه Dina Help Desk که با نام نرم افزار Help Desk نیز شناخته می‌شود
          یکی از بهترین و کامل ترین مجموعه های نرم افزاری برای دسترسی به تمامی
          موجودیت های سازمانی نظیر کاربران، دارایی ها و مدیریت رخدادها و
          فرآیندهای وابسته در شبکه های سازمانی و اداری است. استفاده ارگان ها و
          سازمان ها از این نرم افزار باعث می‌شود که فرایندهای پشتیبانی و مدیریتی
          شبکه های رایانه ای آسان تر و بهتر از قبل انجام شود.
        </p>
        <p className="pt-2 leading-8 rounded-xl dark:text-white">
          نرم افزار Help Desk دنیا با توجه به الگوی ساختاری ITIL امکانات و ماژول
          های کاربردی خود می تواند به خوبی مشکلات موجود در شبکه را شناسایی و
          پشتیبانی کارمندان، پرسنل و حتی نمایندگی ها و شعبات مختلف را آسانتر
          کند. این نرم افزار با دردست داشتن تکنیک ها و تئوری های سودمند و مبتنی
          بر دانش فناوری اطلاعات، قدم های موثر تری را جهت همراهی و ایجاد پشتوانه
          ی نرم افزاری برای کارشناسان و متخصصین کشورمان بر می دارد.
        </p>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2 neomofisme-shadow dark:neomofisme-shadow-dark">
        <Caroucell images={[image1, image2, image3, image4]} />
      </div>
    </div>
  );
};

export default DinaProducts;
