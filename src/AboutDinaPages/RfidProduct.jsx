import React from "react";
import image from "../assets/images/aboutImages/design-team-animate .svg";
import image2 from "../assets/images/aboutImages/about-us-page-animate.svg";
import Caroucell from "./Caroucell";
const RfidProduct = ({ rowValue }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className={`w-full flex flex-col gap-4 items-center lg:gap-8 lg:flex-${rowValue} text-justify tracking-tight dark:text-white`}
    >
      <div className="w-full lg:w-1/2">
        <h1 className="font-semibold text-xl text-justify border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
          فروش تگ RFID
        </h1>
        <p className="pt-2 leading-8 rounded-xl mt-2 mb-0 dark:text-white">
          یکی از فعالیت اصلی مجموعه داده کاوان دینا ، فعالیت در زمینه فروش RFID
          ، فروش و پشتیبانی تگ RFID ، ماژول rfid ، rfid reader برد بلند ، نرم
          افزار و سامانه اختصاصی تگ RFID در ایران است. مجموعه دینا به عنوان
          اولین شرکت در زمینه طراحی سامانه اختصاصی تگ RFID در ایران شناخته می
          شود. شما میتوانید از تگ RFID به راحتی در بخش های انبار داری و مدیریت
          اموال استفاده نمایید. امروزه مجموعه های بزرگی مانند مجموعه معندی گل
          گهر سیرجان از این سامانه برای مدیریت اموال گسترده خود استفاده می کنند
          .
        </p>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <Caroucell images={[image, image2]} />
      </div>
    </div>
  );
};

export default RfidProduct;
