import React from "react";
import { Link } from "react-router-dom";
const SupportDinaIntro = () => {
  return (
    <div className="items-center lg:flex ">
      <div
        className="w-full dark:text-white"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="text-justify">
          <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
            معرفی مجموعه داده کاوان دینا، پرکار و خلاق{" "}
          </h1>
          <p className="py-2 md:py-4 leading-8">
            <Link
              className="text-borderDark font-bold dark:text-indigo-500"
              to="/"
            >
              مجموعه نرم‌افزاری دینا
            </Link>{" "}
            به عنوان یک شرکت نرم‌افزاری فعالیت خود را از سال ۱۳۹۷ شروع کرده است.
            این شرکت با همکاری گروهی از فارغ‌التحصیلان گرایش های رشته کامپیوتر و
            نرم‌افزار در نظر دارد تا به صورت ویژه در زمینه تولید سامانه‌های Help
            Desk فعالیت نماید.{" "}
            <Link
              className="text-borderDark font-bold dark:text-indigo-500"
              to="/سامانه-هلپ-دسک-دینا"
            >
              سامانه Help Desk
            </Link>{" "}
            مرتبط با فعالیت‌ها و عملکردهای واحد فناوری اطلاعات در تمامی
            سازمان‌ها و ادارات دولتی، کارخانجات و تمامی مجموعه‌های خصوصی و دولتی
            است و به عنوان یک نرم‌افزار اختصاصی توسط مجموعه دینا ایجاد شده است.
          </p>
          <p className="pb-2 md:pb-4 leading-8 ">
            همچنین مجموعه دینا با توجه به سابقه چندین ساله خود در زمینه طراحی
            سایت، سئو بهینه‌سازی سایت، فعالیت‌های خود را در این زمینه نیز گسترش
            داده است. با گسترش فعالیت‌های این شرکت، سبد محصولات شرکت نرم‌افزاری
            داده کاوان دینا در سطح کشور و خارج از کشور وسیع‌تر شده است. این امر،
            مرهون تلاش و همفکری تیمی متشکل از بهترین مهندسان و تکنسین¬ها در
            بخش‌های مختلف طراحی، مهندسی، تحقیق و توسعه، تولید، کنترل کیفیت و
            غیره است. سامانه دینا تگ که در زمینه نصب ، راه‌اندازی و فروش تگ RFID
            و همچنین نرم افزار اختصاصی RFID جهت مدیریت اموال و دارایی ها فعالیت
            می کند نیز یکی از جدید ترین محصولات این مجموعه است.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportDinaIntro;
