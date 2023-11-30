import React from "react";
import officeImage from "../assets/supermarket/office-work-animate.svg";
import { Link } from "react-router-dom";
const Dinadescriptio = () => {
  return (
    <section
      className="items-center lg:flex lg:flex-row-reverse gap-6 bg-white dark:bg-bgDarkInner rounded-xl
  
  w-auto  p-4  text-justify mt-4 tracking-tight h-fit
  "
    >
      <div
        className="w-full lg:w-1/2 dark:text-white"
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
            <Link className="font-bold dark:text-mauve8" to="/about-us/">
              مجموعه دینا
            </Link>{" "}
            با توجه به سابقه چندین ساله خود در زمینه طراحی سایت،{" "}
            <a
              className="font-bold dark:text-mauve8"
              href="https://en.wikipedia.org/wiki/Search_engine_optimization"
            >
              سئو
            </a>{" "}
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
      >
        <img
          src={officeImage}
          alt="office-image"
          className="animated w-full h-full lg:max-w-3xl"
        />
      </div>
    </section>
  );
};

export default Dinadescriptio;
