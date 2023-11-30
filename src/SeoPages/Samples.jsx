import React from "react";
import Sample1 from "../assets/images/SeoImages/sample1.png";
import Sample2 from "../assets/images/SeoImages/sample2.png";
import Sample3 from "../assets/images/SeoImages/sample3.png";
import Sample4 from "../assets/images/SeoImages/sample4.png";
import Sample5 from "../assets/images/SeoImages/sample5.png";
import Sample6 from "../assets/images/SeoImages/sample6.png";
import Sample7 from "../assets/images/SeoImages/sample7.png";
const Samples = () => {
  return (
    <div className="w-auto tracking-tight p-4">
      <h1
        data-aos="fade-left"
        data-aos-duration="1000"
        className="font-semibold text-xl justify-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit mx-auto p-4"
      >
        برخی از نمونه کار های مجموعه داده کاوان دینا در زمینه طراحی سایت
      </h1>
      <div className="w-full mt-8 text-justify grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <a
          data-aos="flip-left"
          data-aos-delay="100"
          href="https://bamomarket.com/"
          className="bg-white pb-10 shadow-xl hover:shadow-2xl dark:bg-bgDarkInner hover:scale-[1.06] transition-all rounded-xl"
        >
          <img
            src={Sample1}
            alt="sample-Image"
            className="rounded-t-xl w-full h-full"
          />
          <p className="px-4 pt-2 border-t-2 dark:border-borderDark dark:text-white text-center w-full text-borderDark">
            مشاهده صفحه
          </p>
        </a>
        <a
          data-aos="flip-left"
          data-aos-delay="200"
          href="https://asanpakage.com/"
          className="bg-white pb-10 shadow-xl hover:shadow-2xl dark:bg-bgDarkInner hover:scale-[1.06] transition-all rounded-xl"
        >
          <img
            src={Sample2}
            alt="sample-Image"
            className="rounded-t-xl w-full h-full"
          />
          <p className="px-4 pt-2 border-t-2 dark:border-borderDark dark:text-white text-center w-full text-borderDark">
            مشاهده صفحه
          </p>
        </a>
        <a
          data-aos="flip-left"
          data-aos-delay="300"
          href="https://yarda.ir/"
          className="bg-white pb-10 shadow-xl hover:shadow-2xl dark:bg-bgDarkInner hover:scale-[1.06] transition-all rounded-xl"
        >
          <img
            src={Sample3}
            alt="sample-Image"
            className="rounded-t-xl w-full h-full"
          />
          <p className="px-4 pt-2 border-t-2 dark:border-borderDark dark:text-white text-center w-full text-borderDark">
            مشاهده صفحه
          </p>
        </a>
        <a
          data-aos="flip-left"
          data-aos-delay="400"
          href="https://ojeta.com/"
          className="bg-white pb-10 shadow-xl hover:shadow-2xl dark:bg-bgDarkInner hover:scale-[1.06] transition-all rounded-xl"
        >
          <img
            src={Sample4}
            alt="sample-Image"
            className="rounded-t-xl w-full h-full"
          />
          <p className="px-4 pt-2 border-t-2 dark:border-borderDark dark:text-white text-center w-full text-borderDark">
            مشاهده صفحه
          </p>
        </a>
      </div>

      <div className="w-full mt-8 text-justify grid grid-cols-1 sm:grid-cols-2 gap-8  lg:grid-cols-3">
        <a
          data-aos="flip-right"
          data-aos-delay="100"
          href="https://vestarack.ir/"
          className="bg-white pb-10 shadow-xl hover:shadow-2xl dark:bg-bgDarkInner hover:scale-[1.06] transition-all rounded-xl"
        >
          <img
            src={Sample5}
            alt="sample-Image"
            className="rounded-t-xl w-full h-full"
          />
          <p className="px-4 pt-2 border-t-2 dark:border-borderDark dark:text-white text-center w-full text-borderDark">
            مشاهده صفحه
          </p>
        </a>
        <a
          data-aos="flip-right"
          data-aos-delay="100"
          href="https://mahtayadak.ir/"
          className="bg-white pb-10 shadow-xl hover:shadow-2xl dark:bg-bgDarkInner hover:scale-[1.06] transition-all rounded-xl"
        >
          <img
            src={Sample6}
            alt="sample-Image"
            className="rounded-t-xl w-full h-full"
          />
          <p className="px-4 pt-2 border-t-2 dark:border-borderDark dark:text-white text-center w-full text-borderDark">
            مشاهده صفحه
          </p>
        </a>
        <a
          data-aos="flip-right"
          data-aos-delay="100"
          href="https://www.kieslect.ir/"
          className="bg-white pb-10 dark:bg-bgDarkInner sm:col-start-1 sm:col-end-3 lg:col-start-3 lg:col-end-4  shadow-xl hover:shadow-2xl hover:scale-[1.06] transition-all rounded-xl sm:w-[500px] mx-auto lg:w-auto"
        >
          <img
            src={Sample7}
            alt="sample-Image"
            className="rounded-xl w-full h-full "
          />
          <p className="px-4 pt-2 border-t-2 dark:border-borderDark dark:text-white text-center w-full text-borderDark">
            مشاهده صفحه
          </p>
        </a>
      </div>
    </div>
  );
};

export default Samples;
