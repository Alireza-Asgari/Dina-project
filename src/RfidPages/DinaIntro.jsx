import React from "react";
import dinaImage from "../assets/images/dinaintro-rfid.jpg";
const DinaIntro = () => {
  return (
    <div className="items-center lg:flex ">
      <div
        className="w-full lg:w-1/2 dark:text-white"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="lg:max-w-lg text-justify">
          <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
            معرفی مجموعه داده کاوان دینا
          </h1>
          <p className="py-2 md:py-4 leading-8">
            شرکت داده کاوان دینا بیش از یک دهه سابقه فعالیت در زمینه تولید
            محصولات نرم افزاری را دارا است. این مجموعه به عنوان تولید کننده نرم
            افزار و سامانه های مختلف شامل سامانه Help Desk( جهت مدیریت اموال ،
            مدیریت درخواست ، فرایند های ITIL ، سامانه تیکتینگ ) ، سامانه نرم
            افزار مدیریت چیدمان جهت استفاده از هوش مصنوعی برای مدیریت چیدمان
            فروشگاهی اموال و همچنین سامانه دینا تگ (فروش RFID ، فروش و پشتیبانی
            تگ RFID ، ماژول rfid ، rfid reader برد بلند ، نرم افزار و سامانه
            اختصاصی تگ RFID ) و دیگرنرم افزار های اختصاصی و اپلیکیشن ها در بازار
            IT کشور شناخته می شود.
          </p>
          <p className="pb-2 md:pb-4 leading-8 ">
            همکاری با سازمان ها و نهاد های بزرگ شامل مجموعه گل گهر سیرجان ،
            مجموعه تولیدی رامک ، استانداری استان مرکزی ، آموزش و پرورش گیلان ،
            آستان قدس رضوی ، سازمان بهداشت و درمان وزارت نفت و غیره از دستاورد
            های این مجموعه در طول فعالیت خود است.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
      >
        <img
          src={dinaImage}
          alt="heroimage"
          id="freepik_stories-brand-construction"
          className="animated w-full h-full lg:max-w-3xl"
        />
      </div>
    </div>
  );
};

export default DinaIntro;
