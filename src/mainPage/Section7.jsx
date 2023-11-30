import React from "react";
import { Link } from "react-router-dom";
const Section7 = () => {
  return (
    <div className=" bg-white dark:bg-bgDarkInner rounded-xl p-4  text-justify mt-4 tracking-tight h-fit">
      <div
        className="w-full dark:text-white"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="text-justify">
          <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
            دینا، پرکار و خلاق
          </h1>
          <p className="pt-2 md:pt-4 leading-8">
            مجموعه نرم‌افزاری دینا به عنوان یک شرکت نرم‌افزاری فعالیت خود را از
            سال ۱۳۹۷ شروع کرده است. این شرکت با همکاری گروهی از فارغ‌التحصیلان
            گرایش های رشته کامپیوتر و نرم‌افزار در نظر دارد تا به صورت ویژه در
            زمینه تولید سامانه‌های جامع Help Desk فعالیت نماید. سامانه Help Desk
            مرتبط با فعالیت‌ها و عملکردهای واحد فناوری اطلاعات در تمامی
            سازمان‌ها و ادارات دولتی، کارخانجات و تمامی مجموعه‌های خصوصی و دولتی
            است و به عنوان یک نرم‌افزار اختصاصی توسط مجموعه دینا ایجاد شده است.
          </p>
          <p className="leading-8">
            همچنین{" "}
            <Link
              className="text-borderDark font-bold dark:text-indigo-500"
              to="/about-us"
            >
              مجموعه دینا
            </Link>{" "}
            با توجه به سابقه چندین ساله خود در زمینه طراحی سایت، سئو بهینه‌سازی
            سایت، فعالیت‌های خود را در این زمینه نیز گسترش داده است. با گسترش
            فعالیت‌های این شرکت، سبد محصولات شرکت نرم‌افزاری داده کاوان دینا در
            سطح کشور و خارج از کشور وسیع‌تر شده است. این امر، مرهون تلاش و
            همفکری تیمی متشکل از بهترین مهندسان و تکنسین¬ها در بخش‌های مختلف
            طراحی، مهندسی، تحقیق و توسعه، تولید، کنترل کیفیت و غیره است.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section7;
