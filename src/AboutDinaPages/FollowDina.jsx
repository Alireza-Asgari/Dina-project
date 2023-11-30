import React from "react";
import aboutImage from "../assets/images/aboutImages/about-us-page-animate.svg";
const FollowDina = () => {
  return (
    <>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="w-auto text-justify tracking-tight"
      >
        <div className="w-auto flex flex-col items-center  lg:flex-row gap-8  text-justify mt-4 tracking-tight dark:text-white">
          <div data-aos="fade-left" data-aos-duration="1000" className="w-full">
            <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
              مارا در شبکه های اجتماعی دنبال کنید
            </h1>
            <div
              className="
        dark:text-white text-justify tracking-tight "
            >
              <p className="py-2 leading-8 rounded-xl mt-2 mb-0 dark:text-white">
                پوشش هوشمند فرآیند های مبتنی بر فناوری اطلاعات
              </p>
              <p className="leading-8 rounded-xl dark:text-white">
                راهکاری حرفه ای برای مدیران ارشد ، مهندسین و متخصصین علاقمند به
                تحول های نوین
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="flex items-center justify-center w-full"
          >
            <iframe
              src="https://www.aparat.com/video/video/embed/videohash/dYmhk/vt/frame?titleShow=true"
              allow="autoplay; encrypted-media"
              type="text/html"
              width="100%"
              height="352"
              allowFullScreen
              title="video"
              className="rounded-lg shadow-xl dark:shadow-bgDarkInner"
            ></iframe>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="w-full bg-white dark:bg-bgDarkInner rounded-xl p-4 mt-4"
      >
        <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
          شرکت داده کاوان دینا
        </h1>
        <div className="dark:text-white text-justify tracking-tight ">
          <p className="py-2 leading-8 rounded-xl mt-2 mb-0 dark:text-white">
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
          <div className="w-full flex justify-center items-center">
            <img src={aboutImage} className="h-96" />
          </div>
          <p className="py-2 leading-8 rounded-xl mt-2 mb-0 dark:text-white">
            همکاری با سازمان ها و نهاد های بزرگ شامل مجموعه گل گهر سیرجان ،
            مجموعه تولیدی رامک ، استانداری استان مرکزی ، آموزش و پرورش گیلان ،
            آستان قدس رضوی ، سازمان بهداشت و درمان وزارت نفت و غیره از دستاورد
            های این مجموعه در طول فعالیت خود است.
          </p>
        </div>
      </div>
    </>
  );
};

export default FollowDina;
