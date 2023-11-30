import React from "react";
import image from "../assets/images/tag.svg";
import barcodeImage from "../assets/images/barcode2-animate.svg";

const UsageRfid = () => {
  return (
    <>
      <section className="w-auto flex flex-col items-center lg:flex-row p-4  text-justify mt-4 tracking-tight dark:text-white h-fit">
        <div data-aos="fade-left" data-aos-duration="1000" className="w-full">
          <h1 className="font-semibold text-xl border-borderDark dark:border-borderDark border-b-4 w-fit p-4 ">
            ماژول RFID چیست و چه کارایی دارد؟
          </h1>
          <p className="py-2 md:py-4 leading-8">
            ماژول RFID به مجموعه ای اشاره می‌کند که می‌تواند به صورت همزمان
            فرایند خواندن و ارسال داده را انجام دهد. در واقع باید به این موضوع
            توجه داشت که در حالت کلی هر سیستم RFID از سه جزء تشکیل شده است: یک
            آنتن اسکن، یک فرستنده گیرنده و یک فرستنده.
          </p>
          <p className=" leading-8">
            هنگامی که آنتن اسکن و فرستنده گیرنده باهم ترکیب می‌شوند، به عنوان
            خواننده یا بازپرس RFID شناخته می‌شوند که به آن RFID Reader گفته
            می‌شود. در حالت کلی دو نوع RFID Reader وجود دارد:
          </p>
          <p className="pt-2 leading-8">
            <span className="text-pink-700 dark:text-borderDark">
              نوع اول با نام RFID Reader ثابت{" "}
            </span>{" "}
            ، از آن به عنوان دستگاه‌های رومیزی یاد می‌شود. برخی مدل‌های آن به
            عنوان دستگاه روی درب ورودی ساختمان‌ها نصب شده و تنها راه را برای
            ماشین‌هایی که دارای تگ RFID باشند باز می‌کند.
          </p>
          <p className="py-1 leading-8">
            <span className="text-pink-700 dark:text-borderDark">
              نوع دوم با نام RFID Reader های سیار{" "}
            </span>
            ، این دستگاه‌ها که از آن به عنوان Handheld نیز یاد می‌شود یک دستگاه
            سیار با توانایی بالا است.
          </p>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex items-center justify-center w-full mt-6 lg:mt-0"
          >
            <img
              src={image}
              alt="image-tag"
              className="w-auto h-auto lg:max-w-3xl rounded-3xl"
            />
          </div>
          <p className="py-2 md:py-4 leading-8">
            اساس کار هر دو دستگاه در حالت کلی به این صورت است که از امواج
            رادیویی برای ارسال سیگنال‌هایی استفاده می‌کند که برچسب را فعال کند.
            پس از فعال شدن، تگ موجی را به آنتن می‌فرستد و در آنجا به داده تبدیل
            می‌شود. در داخل تگ‌ها بخشی به عنوان ترانسپوندر وجود دارد که وظیفه
            دریافت امواج مغناطیسی از روی دستگاه RFID Reader و سپس ارسال سیگنال
            را بر عهده دارد. در واقع ترانسپوندر در خود تگ RFID قرار دارد.
          </p>
          <p className="py-2 md:py-4 leading-8">
            محدوده خواندن برای برچسب‌های RFID بر اساس عواملی از جمله نوع برچسب،
            نوع خواننده، فرکانس RFID و تداخل در محیط اطراف یا سایر تگ‌ها و
            خوانندگان RFID متفاوت است. تگ‌های RFID فعال به دلیل منبع تغذیه
            قوی‌تر، دامنه خواندن بیشتری نسبت به تگ‌های RFID غیرفعال دارند.
            برچسب‌هایی که منبع تغذیه قوی تری دارند، محدوده خواندن بیشتری نیز
            دارند.
          </p>
        </div>
        <div></div>
      </section>
      <section
        className="items-center lg:flex lg:flex-row-reverse gap-6 bg-white dark:bg-bgDarkInner rounded-xl
      
      w-auto  p-4  text-justify mt-4 tracking-tight h-fit
      "
      >
        <div
          className="w-full lg:w-1/2 dark:text-white"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="lg:max-w-lg text-justify">
            <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
              استفاده از تگ‌های RFID بجای بارکدها
            </h1>
            <p className="py-2 md:py-4 leading-8">
              استفاده از تگ RFID به عنوان جایگزینی برای بارکدها در دنیای تجاری
              امروزی به شدت در حال افزایش است. با اینکه فناوری‌های RFID و بارکد
              از روش‌های مشابهی برای ردیابی موجودی و کالاها استفاده می‌شوند، اما
              تفاوت‌های مهمی بین آن‌ها وجود دارد. برخی از این تفاوت‌ها شامل
              موارد زیر است:
            </p>
          </div>
          <div className=" dark:text-mauve7 text-sm md:text-base w-full flex flex-col gap-2">
            <p className="p-1 leading-8 border-t-2 border-mauve8  ">
              با استفاده از تگ‌های RFID می‌تواند اشیاء را بدون خط دید مستقیم
              شناسایی کند. خط دید مستقیم برای اسکن بارکد مورد نیاز است.
            </p>
            <p className="p-1 leading-8 border-t-2 border-mauve8  ">
              بسته به نوع برچسب RFID و دستگاه RFID Reader، می‌تواند تگ‌ها را از
              چند اینچ تا چند فوت دورتر اسکن کند. برای اسکن بارکد، باید بارکد
              کالا را به دستگاه کاملاً نزدیک کنید.
            </p>
            <p className="p-1 leading-8 border-t-2 border-mauve8   ">
              در تگ‌های RFID شما می‌توانید داده‌ها را در زمان‌های مورد نیاز بر
              اساس نیاز خود به راحتی بروز رسانی کنید. حتی نیاز به جدا کردن تگ
              نیز ندارید و فرایند بروز رسانی بدون هیچ گونه کار اضافه‌ای انجام
              می‌شود. بارکدها فقط خواندنی هستند و بروز رسانی نمی‌شوند.
            </p>

            <p className="p-1 leading-8 border-t-2 border-b-2 border-mauve8  ">
              زمان خواندن هر تگ با استفاده از دستگاه RFID Reader کمتر از ۱۰۰
              میلی‌ثانیه در هر تگ است. زمان خواندن هر بارکد به صورت متوسط نیم
              ثانیه یا بیشتر است.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
        >
          <img
            src={barcodeImage}
            alt="heroimage"
            id="freepik_stories-brand-construction"
            className="animated w-full h-full lg:max-w-3xl"
          />
        </div>
      </section>
    </>
  );
};

export default UsageRfid;
