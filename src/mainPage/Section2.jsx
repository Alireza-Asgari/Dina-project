import React from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
const Section2 = () => {
  return (
    <div className="items-center lg:flex lg:items-center gap-8 py-8">
      <div
        className="w-full lg:w-1/2 dark:text-white"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <h3 className="font-semibold text-lg text-borderDark p-4 dark:text-purple-400">
          دینا، کیفیت و کارآیی
        </h3>
        <div className="text-justify">
          <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
            اموال سازمان خود را با محصولات دینا، آنلاین رصد کنید
          </h1>
          <p className="py-2 md:py-4 leading-8">
            شرکت نرم افزاری داده کاوان دینادر زمینه نرم افزار های مدیریتی فعالیت
            دارد.مدیریت دارایی ها و هزینه های تعمیرات و نگهداری اموال و دارایی
            های یک سازمان به عنوان ابزار کارکرد و سرمایه فیزیکی و هزینه ساز یک
            سازمان نقش بسیار مهمی در چگونگی شکل گیری فرایند ها و نحوه ی بازدهی
            کارکنان ایفا میکند نرم افزار Help Deskدینا با درنظر داشتن این اصل
            مهم و بهره مندی از تاکتیک های مدیریتی رایج در عرصه فناوری اطلاعات
            اقدام به تولید ماژول های ویژه ای در بخش مدیریت دارایی ها و هزینه های
            مرتبط با تعمیرات و نگهداری تجهیزات سازمان شما نموده است.
          </p>
          <ButtonComponent>
            <Link to="/سامانه-هلپ-دسک-دینا">اطلاعات بیشتر </Link>
          </ButtonComponent>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex items-center justify-center w-full lg:w-1/2 mt-4 "
      >
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 sm:gap-y-2">
          <div className="w-full p-8 grid-flow-row-dense h-fit flex flex-col items-center shadow-xl transition-shadow shadow-mauve6 dark:shadow-borderColorLight  hover:shadow-2xl rounded-xl bg-white dark:bg-bgDarkInner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-16 text-borderDark dark:text-purple-400 mx-auto mb-2"
            >
              <path d="M11.625 16.5a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z" />
              <path
                fillRule="evenodd"
                d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 001.06-1.06l-1.047-1.048A3.375 3.375 0 1011.625 18z"
                clipRule="evenodd"
              />
              <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
            </svg>
            <p className="sm:max-w-[11rem] text-base text-center text-mauve12 dark:text-mauve4 ">
              شناسایی سریع و آنلاین اطلاعات سخت افزاری
            </p>
          </div>

          <div className="w-full grid-flow-row-dense sm:mt-4  h-fit flex flex-col items-center p-8 shadow-xl transition-shadow shadow-mauve6 dark:shadow-borderColorLight hover:shadow-2xl  rounded-xl bg-white dark:bg-bgDarkInner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-16 text-borderDark dark:text-purple-400 mx-auto mb-2"
            >
              <path
                fillRule="evenodd"
                d="M17.303 5.197A7.5 7.5 0 006.697 15.803a.75.75 0 01-1.061 1.061A9 9 0 1121 10.5a.75.75 0 01-1.5 0c0-1.92-.732-3.839-2.197-5.303zm-2.121 2.121a4.5 4.5 0 00-6.364 6.364.75.75 0 11-1.06 1.06A6 6 0 1118 10.5a.75.75 0 01-1.5 0c0-1.153-.44-2.303-1.318-3.182zm-3.634 1.314a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68z"
                clipRule="evenodd"
              />
            </svg>

            <p className="sm:max-w-[11rem] text-base text-center text-mauve12 dark:text-mauve4 ">
              اتصال هوشمند به اکتیودایرکتوری
            </p>
          </div>

          <div className="w-full grid-flow-row-dense h-fit flex flex-col items-center  p-8 shadow-xl transition-shadow shadow-mauve6 dark:shadow-borderColorLight hover:shadow-2xl  rounded-xl bg-white dark:bg-bgDarkInner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-16 text-borderDark dark:text-purple-400 mx-auto mb-2"
            >
              <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
              <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
            </svg>

            <p className="sm:max-w-[11rem] text-base text-center text-mauve12 dark:text-mauve4 ">
              اتصال به سیستم پیام رسان
            </p>
          </div>

          <div className="w-full grid-flow-row-dense h-fit sm:mt-4 p-8 flex flex-col items-center shadow-xl transition-shadow shadow-mauve6 dark:shadow-borderColorLight hover:shadow-2xl  rounded-xl bg-white dark:bg-bgDarkInner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-16 text-borderDark dark:text-purple-400 mx-auto mb-2"
            >
              <path d="M5.507 4.048A3 3 0 017.785 3h8.43a3 3 0 012.278 1.048l1.722 2.008A4.533 4.533 0 0019.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008z" />
              <path
                fillRule="evenodd"
                d="M1.5 10.5a3 3 0 013-3h15a3 3 0 110 6h-15a3 3 0 01-3-3zm15 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25.75a.75.75 0 100-1.5.75.75 0 000 1.5zM4.5 15a3 3 0 100 6h15a3 3 0 100-6h-15zm11.25 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zM19.5 18a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                clipRule="evenodd"
              />
            </svg>

            <p className="sm:max-w-[11rem] text-base text-center text-mauve12 dark:text-mauve4 ">
              ارتباط هوشمند با سرور ایمیل و پست الکترونیک
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
