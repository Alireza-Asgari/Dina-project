import React from "react";
import image from "../assets/supermarket/software-code-testing-animate.svg";
const DinaVision = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className=" w-auto  text-justify tracking-tight p-4 "
    >
      <div data-aos="fade-left" data-aos-duration="1000">
        <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
          چشم انداز شرکت نرم افزاری داده کاوان دینا
        </h1>
        <p className="py-2 leading-8 rounded-xl mt-2 mb-0 dark:text-white">
          شم انداز شرکت نرم افزاری داده کاوان دینا نوآوری و ایجاد رشد پویا در
          حوزه فناوری اطلاعات در تمامی سازمان ها و نهاد های دولتی و خصوصی ایران
          و خارج از مرزهای کشور عزیزمان است .ایجاد مزیت های رقابتی موثر در تولید
          و ارائه محصولات و خدمات نرم افزاری مبتنی بر دانش به روز دنیا با تکیه
          بر تلاش جمعی از جوانان متخصص کشور و به کارگیری خلاقیت های فنی و فکری
          درسایه ی توکل خداوند متعال دستاورد هایی است که به داشتن آنها می بالیم.
        </p>
      </div>

      <div className="w-auto flex flex-col items-center lg:flex-row p-4  text-justify mt-4 tracking-tight dark:text-white">
        <div data-aos="fade-left" data-aos-duration="1000" className="w-full">
          <h1 className="font-semibold text-lg text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
            ماموریت دینا
          </h1>
          <div
            data-aos="zoom-out-left"
            data-aos-duration="1000"
            className=" p-4
          dark:text-white text-justify tracking-tight "
          >
            <ul
              data-aos="zoom-out-down"
              data-aos-duration="1000"
              className="max-w-2xl space-y-2 text-gray-500  list-inside dark:text-gray-200 list-disc"
            >
              <li>
                ارائه راهکارهای نرم افزاری و مکانیزه کردن فرآیند های کاری در
                سازمانها و نهادها.
              </li>
              <li>ارائه راهکارهای مبتنی بر فناوری اطلاعات.</li>
              <li>
                مشاوره ، طراحی و تولید سامانه های نرم افزاری مبتنی بر وب و
                اپلیکیشن.
              </li>
              <li>خدمات آموزش ، نصب و اجرا.</li>
              <li>خدمات مشاوره ، نظارت و مدیریت پروژه.</li>
              <li>خدمات پشتیبانی و توسعه نرم افزار.</li>
            </ul>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex items-center justify-center w-full"
        >
          <img
            src={image}
            alt="vision-image"
            className="w-auto h-auto rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DinaVision;
