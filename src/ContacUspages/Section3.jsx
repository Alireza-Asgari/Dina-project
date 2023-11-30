import React from "react";
import image from "../assets/images/contactusimge/contactUs.svg";
const Section3 = () => {
  return (
    <div className="w-auto flex flex-col items-center lg:flex-row text-justify mt-4 tracking-tight dark:text-white">
      <div data-aos="fade-left" data-aos-duration="1000" className="w-full">
        <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
          اهداف دینا
        </h1>
        <p className="py-2 leading-8 rounded-xl mt-2 mb-0 dark:text-white">
          شرکت داده کاوان دینا بیش از یک دهه سابقه فعالیت در زمینه تولید محصولات
          نرم افزاری را دارا است. این مجموعه به عنوان تولید کننده نرم افزار و
          سامانه های مختلف شامل سامانه Help Desk( جهت مدیریت اموال ، مدیریت
          درخواست ، فرایند های ITIL ، سامانه تیکتینگ ) ، سامانه نرم افزار مدیریت
          چیدمان جهت استفاده از هوش مصنوعی برای مدیریت چیدمان فروشگاهی اموال و
          همچنین سامانه دینا تگ (فروش و پشتیبانی تگ RFID ، ماژول rfid ، rfid
          reader برد بلند ، نرم افزار و سامانه اختصاصی تگ RFID ) و دیگرنرم افزار
          های اختصاصی و اپلیکیشن ها در بازار IT کشور شناخته می شود.
        </p>
        <p className="py-2 leading-8 rounded-xl mt-2 mb-0 dark:text-white">
          همکاری با سازمان ها و نهاد های بزرگ شامل مجموعه گل گهر سیرجان ، مجموعه
          تولیدی رامک ، استانداری استان مرکزی ، آموزش و پرورش گیلان ، آستان قدس
          رضوی ، سازمان بهداشت و درمان وزارت نفت و غیره از دستاورد های این
          مجموعه در طول فعالیت خود است.
        </p>
      </div>

      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="flex items-center justify-center w-full"
      >
        <img
          src={image}
          alt="contactus"
          className="w-auto h-auto rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Section3;
