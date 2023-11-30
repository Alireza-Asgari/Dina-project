import React from "react";
import { Link } from "react-router-dom";
const Section1 = () => {
  return (
    <div
      className=" w-full text-center"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <h1 className="font-semibold text-xl dark:text-white p-2 border-b-4 border-borderDark w-fit mx-auto">
        چشم انداز و اهداف دینا – ۸ هدف ارزشمند دینا
      </h1>
      <div className="w-full dark:text-white mt-10">
        <div className=" text-justify">
          <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit">
            اهداف دینا
          </h1>
          <p className="pt-2 md:pt-4 leading-8">
            شرکت داده کاوان دینا بیش از یک دهه سابقه فعالیت در زمینه تولید
            محصولات نرم افزاری را دارا است. این مجموعه به عنوان تولید کننده
            نرم‌افزار و سامانه های مختلف شامل
            <Link
              className="font-bold text-borderDark dark:text-indigo-500"
              to="/سامانه-هلپ-دسک-دینا"
            >
              {" "}
              سامانه Help desk{" "}
            </Link>
            (جهت مدیریت اموال ، مدیریت درخواست ، فرایند های ITIL ، سامانه
            تیکتینگ) ،
            <Link
              className="font-bold text-borderDark dark:text-indigo-500"
              to="/نرم-افزار-مدیریت-چیدمان-فروشگاهی"
            >
              {" "}
              سامانه نرم‌افزار مدیریت چیدمان{" "}
            </Link>
            جهت استفاده از هوش مصنوعی برای مدیریت چیدمان فروشگاهی اموال و همچنین
            سامانه دینا تگ (فروش و پشتیبانی تگ RFID ، ماژول rfid ، rfid reader
            برد بلند ، نرم‌افزار و سامانه اختصاصی تگ RFID ) و دیگرنرم افزار های
            اختصاصی و اپلیکیشن ها در بازار IT کشور شناخته می شود.
          </p>
          <p className="pt-2 leading-8">
            همکاری با سازمان ها و نهاد های بزرگ شامل مجموعه گل گهر سیرجان ،
            مجموعه تولیدی رامک ، استانداری استان مرکزی ، آموزش و پرورش گیلان ،
            <a
              className="font-bold text-borderDark dark:text-indigo-500"
              href="https://www.razavi.ir/"
            >
              {" "}
              آستان قدس رضوی{" "}
            </a>
            ، سازمان بهداشت و درمان وزارت نفت و غیره از دستاورد های این مجموعه
            در طول فعالیت خود است.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
