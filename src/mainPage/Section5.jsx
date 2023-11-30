import React from "react";
import image from "../assets/images/mainPageImages/in-the-office-animate.svg";
import ButtonComponent from "../components/ButtonComponent";
import { Link } from "react-router-dom";
const Section5 = () => (
  <div className="w-auto flex flex-col items-center lg:flex-row text-justify mt-4 tracking-tight dark:text-white">
    <div
      className="w-full dark:text-white"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      <h3 className="font-semibold text-lg text-borderDark p-4 dark:text-purple-400">
        درباره ما
      </h3>
      <div className="text-justify">
        <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
          آنچه باید از ما بدانید
        </h1>
        <p className="py-2 md:py-4 leading-8">
          ما به نیازهای جامعه فکر میکنیم ، برای آینده برنامه ریزی میکنیم و طرح
          خود را با پشتوانه علمی و فنی حفظ میکنیم . تجربیات ما وام دار حضور
          مشتریانی حرفه ای و پایدار است .
        </p>
        <ButtonComponent>
          <Link to="/درباره-ما-درباره-دینا">اطلاعات بیشتر</Link>
        </ButtonComponent>
      </div>
    </div>
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      className="flex items-center justify-center w-full"
    >
      <img src={image} alt="working in office" className="w-auto h-auto" />
    </div>
  </div>
);

export default Section5;
