import React from "react";
import standupImg from "../assets/images/standup-meeting-animate.svg";
const Section3 = () => {
  return (
    <div className="container w-[calc(100%-2rem)] mx-auto pt-16 pb-8  ">
      <div className="w-auto flex flex-col lg:flex-row-reverse p-4  text-justify mt-4 tracking-tight bg-white dark:bg-bgDarkInner dark:text-white rounded-xl">
        <div className="w-full">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="lg:max-w-lg dark:text-white tracking-tight"
          >
            <h1 className="font-semibold text-xl border-borderDark dark:border-borderDark border-b-4 w-fit p-4 ">
              ویژگی های منطبق با چارت سازمانی
            </h1>
            <p className="py-2 md:py-4 leading-8">
              سامانه Dina Help Desk به منظور دسترسی به تمامی موجودیت های سازمانی
              نظیر کاربران ، دارایی ها، و مدیریت رخدادها و وفرایند های وابسته به
              تمامی موارد مذکور در حوزه فناوری اطلاعات طراحی و پیاده سازی شده
              است از این رو یکی از قابلیتهای کاربردی سامانه اجرا و پیاده سازی آن
              روی بستر چارت سازمانی و تنظیم گزارشات و عملیات سیستم منطبق بر حوزه
              اختیارات کاربران در سطوح و طبقه بندی های مختلف نظیر منطقه ، شعبه ،
              نمایندگی و... می باشد که با توجه به این قابلیت با خیالی آسوده از
              انحصار اطلاعات سازمانی خود در طبقات متنوع سازمانی میتوانید آن را
              مورد استفاده قرار دهید .
            </p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex items-center justify-center w-full mt-6 lg:mt-0"
        >
          <img
            src={standupImg}
            alt="image"
            className="w-full h-full lg:max-w-3xl rounded-3xl"
          />
        </div>
      </div>
      <div
        className="mx-auto tracking-tight p-4 dark:text-white"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h1 className="font-semibold text-xl border-borderDark dark:border-borderDark border-b-4 w-fit p-4 ">
          اهمیت استفاده از نرم‌افزارهای هلپ دسک
        </h1>
        <p className="leading-8 text-justify mt-4">
          با توجه به رشد روز افزون تکنولوژی و نیاز مداوم به پاسخگویی سؤالات
          کاربران و مشتریان، متخصصین و مدیران انفورماتیک به نرم‌افزارهای مبتنی
          بر فرآیندهای IT که به سامانه‌های Help Desk معروف هستند روی آورده‌اند.
          اهمیت استفاده از این سامانه‌ها در سازگاری و انعطاف‌پذیری این سامانه‌ها
          با تمامی نیازمندی‌ها، عملیات اجرایی، گزارشات و درخواست‌های تمامی
          کاربران یک سازمان مرتبط با واحد فناوری اطلاعات است.
        </p>
        <ul className="p-2 flex flex-col gap-4 text-justify leading-6">
          <li>
            ۱-یک سامانه Help Desk می‌تواند کاتالوگی از خدمات، فرآیندها، گزارشات
            و اموال سازمانی در حوزه IT باشد. همچنین می‌تواند به‌عنوان یک ابزار
            کارآمد جهت ارائه راهکارهای تخصصی در مدیریت اموال، رخدادها و مشکلات
            کاربران در حوزه‌های مختلف IT عمل کند.
          </li>
          <li>
            ۲-اهمیت سامانه‌های Help Desk آن‌چنان گسترده است که پلتفرم‌های متنوعی
            توسط شرکت‌های بزرگ در دنیا برای آن طراحی و ارائه‌شده است. این
            پلتفرم‌ها روزبه‌روز در حال گسترش و بزرگ شدن هستند.
          </li>
          <li>
            ۳-همچنین در دنیای مدرن استفاده مداوم از نرم افزارها و سخت افزارهای
            جدید در سازمان‌ها، نیاز سازمان‌ها به استفاده از فرایندهای جدید در
            کنترل و مدیریت درخواست‌ها را گسترش داده است.
          </li>
          <li>
            ۴-رشد دانش کاربران و کارشناسان به‌موازات استفاده از تکنولوژی‌های
            جدید باعث شده که سؤالات آن‌ها تخصصی‌تر و نیازهای آن‌ها گسترده‌تر
            شود. در این صورت به یک سامانه واحد و درعین‌حال کارآمد، نیاز است تا
            بتوان به سؤالات و مشکلات کاربران و پرسنل به راحتی پاسخ داد.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section3;
