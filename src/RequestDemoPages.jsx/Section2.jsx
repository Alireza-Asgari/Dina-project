import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/demoimages/demo-animate.svg";
const Section2 = () => {
  return (
    <div className="w-auto flex flex-col items-center lg:flex-row text-justify mt-4 tracking-tight dark:text-white">
      <div data-aos="fade-left" data-aos-duration="1000" className="w-full">
        <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
          مجموعه داده کاوان دینا
        </h1>
        <p className="py-2 leading-8 rounded-xl mt-2 mb-0 dark:text-white">
          <Link
            to="/"
            className="font-bold text-borderDark dark:text-indigo-500"
          >
            مجموعه داده کاوان دینا
          </Link>{" "}
          به عنوان یکی از بزرگترین فعالان در حوزه فناوری اطلاعات در کشور است که
          توانسته از همان ابتدا به واسطه سامانه های تخصصی خود، در قالب یک شرکت
          تخصصی در کشور معرفی شود. گستردگی مشتریان و طیف کاری آنها نمایانگر قدرت
          و توانایی این مجموعه در ارائه سیستم ها و سامانه های نرم افزاری اختصاصی
          قدرتمند است . با توجه به این موضوع و اهمیت ارائه اطلاعات دقیق از
          سامانه های نرم افزاری ،این مجموعه به ارائه دمو به مشتریان خود اقدام
          نموده است .
        </p>
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
  );
};

export default Section2;
