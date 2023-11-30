import React from "react";
import image from "../assets/images/mainPageImages/main-1.svg";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div className="w-auto flex flex-col items-center lg:flex-row text-justify mt-4 tracking-tight dark:text-white">
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="w-full flex flex-col justify-center items-center gap-8 "
      >
        <h1 className="font-semibold text-2xl text-borderDark dark:text-white p-4">
          تجربه ، تخصص ، خلاقیت
        </h1>
        <h3 className="font-medium text-xl text-mauve12 dark:text-mauve4 p-4">
          حس خوب یک همکاری مثبت و پایدار را با ما تجربه کنید
        </h3>
        <Link
          to="/سامانه-هلپ-دسک-دینا"
          className="py-4 lg:py-4 px-6 lg:px-16 text-sm leading-4 text-white font-semibold rounded-lg bg-borderDark hover:shadow-md transition-all outline-none"
        >
          بیشتر بخوانید
        </Link>
        {/* <p className="py-2 leading-8 rounded-xl mt-2 mb-0 dark:text-white">
          به عنوان یکی از بزرگترین فعالان در حوزه فناوری اطلاعات در کشور است که
          توانسته از همان ابتدا به واسطه سامانه های تخصصی خود، در قالب یک شرکت
          تخصصی در کشور معرفی شود. گستردگی مشتریان و طیف کاری آنها نمایانگر قدرت
          و توانایی این مجموعه در ارائه سیستم ها و سامانه های نرم افزاری اختصاصی
          قدرتمند است . با توجه به این موضوع و اهمیت ارائه اطلاعات دقیق از
          سامانه های نرم افزاری ،این مجموعه به ارائه دمو به مشتریان خود اقدام
          نموده است .
        </p> */}
      </div>

      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="flex items-center justify-center w-full"
      >
        <img src={image} alt="vision-image" className="w-auto h-auto" />
      </div>
    </div>
  );
};

export default Section1;
