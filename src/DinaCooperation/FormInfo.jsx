import React from "react";

const FormInfo = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className=" w-auto  text-justify tracking-tight p-4 "
    >
      <div>
        <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit mx-auto p-4">
          فرم درخواست همکاری با دینا
        </h1>
        <p className="py-2 leading-8 rounded-xl dark:text-white">
          برای ارسال درخواست همکاری با دینا اصلا نیازی به موراد زیر نیست :
        </p>
      </div>

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
          <li>ما به پایان خدمت نیازی نداریم!</li>
          <li>ما به مدرک دانشگاهی شما کاری نداریم!</li>
          <li>تفاوتی بین نیروی مرد و زن نیست ! </li>
          <li>شما می توانید به صورت دورکاری نیز با ما در تماس باشید!</li>
        </ul>
      </div>
      <p className="py-2 leading-8 rounded-xl dark:text-white">
        شما می توانید به راحتی فرم درخواست همکاری با دینا را پر کنید، در اسرع
        وقت به درخواست شما پاسخ داده خواهد شد .
      </p>
    </div>
  );
};

export default FormInfo;
