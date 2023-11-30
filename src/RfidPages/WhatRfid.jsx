import React from "react";

const WhatRfid = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className=" w-auto  text-justify tracking-tight"
    >
      <div data-aos="fade-left" data-aos-duration="1000">
        <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
          تگ RFID چیست؟
        </h1>
        <p className="py-2 leading-8 rounded-xl mt-2 mb-0 dark:text-white">
          تگ RFID در واقع نوعی چیپ الکترونیکی است که به عنوان سیستم ردیابی عمل
          می‌کند. در این تگ‌ها یک چیپ الکترونیکی قرار داده شده است که بر اساس
          فرکانس رادیویی کارکرده و اطلاعات را دریافت و یا ارسال می‌کند. این
          اطلاعات می‌تواند شامل یک شماره سریال، یک کد فعال سازی و یا هر چیزی
          دیگری باشد. کلمه RFID در واقع مخفف عبارت radio frequency
          identification به معنی “شناسایی فرکانس رادیویی ” است.
        </p>
        <p className=" leading-8 rounded-xl  dark:text-white">
          برچسب‌های RFID از فناوری فرکانس رادیویی استفاده می‌کنند. این امواج
          رادیویی داده‌ها را از برچسب به یک دستگاه خواننده (RFID Reader) منتقل
          می‌کنند. این دستگاه می‌تواند در ابعاد بسیار کوچک و اندازه موبایل و یا
          در ابعاد بزرگ‌تر باشد. سپس این دستگاه خواننده اطلاعات را به یک برنامه
          کامپیوتری که برای خواندن اطلاعات RFID ساخته شده، منتقل می‌کند. در
          دنیای امروزی تگ RFID ممکن است تراشه RFID نیز نامیده شود.
        </p>
      </div>
      <div data-aos="fade-down-left" data-aos-duration="1000">
        <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
          انواع مختلف تگ‌های RFID
        </h1>
        <p className="py-2 leading-8 rounded-xl mt-2 mb-0 dark:text-white">
          <span className="text-pink-700 dark:text-borderDark">
            تگ فعال RFID چیست؟
          </span>{" "}
          تگ فعال RFID که با عنوان active RFID نیز شناخته می‌شود، تگ‌هایی هستند
          که با منبع تغذیه داخلی فعالیت می‌کنند. این منبع تغذیه می‌تواند یک
          باتری داخلی باشد. این نوع تگ‌ها دارای ابعاد بزرگ‌تری نسبت به مدل‌های
          دیگر هستند. باتری‌های مورد نیاز این تگ‌ها معمولاً اندازه‌ای در حد
          باتری ساعت مچی و یا باتری‌های سکه‌ای دارند.
        </p>
        <p className="leading-8 rounded-xl mt-2 mb-0 dark:text-white">
          <span className="text-pink-700 dark:text-borderDark">
            تگ غیرفعال RFID چیست؟{" "}
          </span>{" "}
          تگ غیرفعال که به آن تگ Passive RFID نیز گفته می‌شود عمده ترین نمونه
          های تگ در بازار هستند. این تگ‌ها در حالت عادی هیچ گونه منبع ولتاژی
          دارند. برای اینکه اطلاعات داخل این تگ‌ها نوشته و یا خوانده شود باید به
          یک دستگاه ارسال کننده و گیرنده فرکانس رادیویی نزدیک شوند. این دستگاه
          همان RFID Reader است که می‌تواند فرایند خواندن و نوشتن اطلاعات را در
          تگ‌ها انجام دهد.
        </p>
        <p className="py-2 leading-8 rounded-xl mt-2 mb-0 dark:text-white">
          اساس کار دستگاه RFID Reader به این صورت است که با استفاده از امواج
          رادیویی که ارسال می‌کند چیپ تگ را برای ارسال و دریافت داده تحریک یا به
          اصطلاح شارژ می‌کند. این فرایند شارژ شدن با استفاده از انرژی
          الکترومغناطیسی انجام می‌شود این انرژی خیلی کم (در حد چند صدم یک ولت)
          بوده و کاملاً بی‌خطر و بی‌ضرر است.
        </p>
      </div>
    </div>
  );
};

export default WhatRfid;
