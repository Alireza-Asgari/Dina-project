import React from "react";
import bacodeimg from "../assets/images/barcode-animate -soft.svg";
const RfidSoftware = () => {
  return (
    <>
      <section className="w-auto  flex flex-col items-center lg:flex-row p-4  text-justify mt-4 tracking-tight dark:text-white h-fit">
        <div data-aos="fade-left" data-aos-duration="1000" className="w-full">
          <h1 className="font-semibold text-xl border-borderDark dark:border-borderDark border-b-4 w-fit p-4 ">
            نرم افزار RFID چیست و چه امکاناتی دارد؟
          </h1>
          <p className="pt-2 md:pt-4 leading-8">
            نرم افزار RFID به شما اجازه می دهد تا بر اساس تکنولوژی RFID اطلاعاتی
            درباره اشیاء و اموال بدست آورید. این نرم افزار می تواند شامل مواردی
            مانند شناسایی، مدیریت، ذخیره و خواندن اطلاعات از تگ های RFID باشد.
            همچنین، با استفاده از این نرم افزار می توانید داده های تگ RFID را
            تحلیل کرده و از آن به عنوان یک ابزار مدیریتی استفاده کنید. برای
            استفاده از این نرم افزار، شما نیاز دارید تا دستگاه هایی مانند RFID
            Reader و RFID Tag را در اختیار داشته باشید.
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex items-center justify-center w-full mt-6 lg:mt-0"
        >
          <img
            src={bacodeimg}
            alt="image"
            className="w-auto h-auto lg:max-w-3xl rounded-3xl"
          />
        </div>
      </section>
      <section
        data-aos="zoom-out-left"
        data-aos-duration="1000"
        className=" bg-white dark:bg-bgDarkInner rounded-xl
       dark:text-white
       w-auto  p-4  text-justify mt-4 tracking-tight h-fit
      "
      >
        <h3 className="py-2 md:py-4 leading-8 text-lg">
          نرم افزار RFID برای مدیریت و کنترل و تحلیل داده های RFID استفاده می
          شود. این نرم افزار برای دستیابی به اهداف مختلفی مانند بهبود کیفیت،
          افزایش بهره وری، حفاظت از دارایی ها و محصولات، بهبود امنیت و مدیریت
          موجودی استفاده می شود. به صورت کلی، کاربرد های نرم افزار مدیریت تگ های
          RFID شامل موارد زیر می باشد:
        </h3>
        <ul
          data-aos="zoom-out-down"
          data-aos-duration="1000"
          className="max-w-2xl space-y-2 text-gray-500  list-inside dark:text-gray-200"
        >
          <li>
            ۱- تعیین موقعیت دقیق دستگاه ها و محصولات در فضاهای بالقوه پرتوان و
            مخاطره آمیز.
          </li>
          <li>
            ۲- کاهش خطاهای انسانی در فرایند تحویل کالا یا خدمات به مشتریان.
          </li>
          <li>۳- بهبود دسترسی به محصولات و کاهش زمان جستجو.</li>
          <li>۴- امکان مدیریت موجودی و ردیابی محصولات در زمان واقعی.</li>
          <li>۵- تحلیل و پیش بینی الگوهای مصرف محصولات در بازار.</li>
          <li>۶- افزایش سرعت فرآیندهای تولید و کاهش دوره های زمانی.</li>
          <li>
            ۷- افزایش دقت در جمع آوری اطلاعات مورد نیاز جهت تصمیم گیری های
            استراتژیک.
          </li>
          <li>
            ۸- بهبود امنیت و کنترل دسترسی به وسایل و رسانه های حساس در شرایط
            پیچیده و قابل رصد.
          </li>
          <li>
            ۹- افزایش شفافیت و ردیابی کامل از استفاده از منابع سازمانی و افزایش
            بهره وری آن ها در کل.
          </li>
        </ul>
        <p className="py-2 md:py-4 leading-8">
          نرم افزار RFID می تواند به طور گسترده ای در صنایع مختلف از جمله
          تولیدات بزرگ، خدمات به مشتریان، پزشکی، حمل و نقل، لجستیک، خودروسازی،
          فناوری اطلاعات و سایر صنایع استفاده شود.
        </p>
      </section>
    </>
  );
};

export default RfidSoftware;
