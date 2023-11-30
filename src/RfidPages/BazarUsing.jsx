import React from "react";
import image from "../assets/images/rfid-sys.gif";

const BazarUsing = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className=" w-auto  text-justify tracking-tight p-4 "
    >
      <div data-aos="fade-left" data-aos-duration="1000">
        <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
          بازار استفاده از تگ‌های RFID کجاست؟
        </h1>
        <p className="py-2 leading-8 rounded-xl mt-2 mb-0 dark:text-white">
          بازار استفاده از تگ‌های RFID بسیار گسترده است. در واقع این تگ‌ها بازار
          محدود شده‌ای ندارند و در تمامی صنایع و بخش‌ها می‌توان از آن‌ها استفاده
          کرد. در واقع تگ‌های RFID در طیف وسیعی از بخش‌ها استفاده می‌شوند. برخی
          از مهم‌ترین این بخش‌ها عبارت‌اند از:
        </p>
        <div className="mt-8 dark:text-mauve7 text-sm md:text-base w-full grid grid-cols-1 gap-8 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <p className="py-2 md:py-4 leading-8 neomofisme-shadow dark:neomofisme-shadow-dark hover:scale-105 transition-transform p-4 rounded-xl ">
            <h3 className="text-pink-700 dark:text-white text-center text-base py-3 ">
              کنترل دسترسی و کلید دیجیتال:{" "}
            </h3>{" "}
            برچسب‌های RFID می‌توانند به عنوان کلیدهای الکترونیکی برای دسترسی به
            مناطق امن یا ردیابی حرکات کارکنان استفاده شوند. با این کار شما
            می‌توانید به راحتی متوجه شوید که کدام یک از کارکنان شما به بخش‌های
            مختلف سر زده است.
          </p>
          <p className="py-2 md:py-4 leading-8 neomofisme-shadow dark:neomofisme-shadow-dark hover:scale-105 transition-transform p-4 rounded-xl ">
            <h3 className="text-pink-700 dark:text-white text-center text-base py-3 ">
              مدیریت اموال و ردیابی دارایی:{" "}
            </h3>{" "}
            کمپانی‌های بزرگ دارای اموال‌های زیادی هستند. برخی از این اموال‌ها به
            بدون نظارت از اتاق و یا دفتری به دفتر دیگر برده می‌شود. در نتیجه از
            برچسب‌های RFID می‌توان برای ردیابی دارایی‌های ارزشمند مانند تجهیزات،
            وسایل نقلیه یا ابزارها برای جلوگیری از سرقت یا مفقود شدن استفاده
            کرد.
          </p>
          <p className="py-2 md:py-4 leading-8 neomofisme-shadow dark:neomofisme-shadow-dark hover:scale-105 transition-transform p-4 rounded-xl  ">
            <h3 className="text-pink-700 dark:text-white text-center text-base py-3 ">
              مدیریت موجودی انبارها:{" "}
            </h3>{" "}
            شرکت‌هایی که دارایی و انبارهای بزرگی دارند و معمولاً کالاهای متعددی
            را بین انبارهای خود جا به جا می‌کنند می‌توانند از این تگ‌ها استفاده
            کنند. برچسب‌های RFID را می‌توان به محصولات یا بسته‌بندی متصل کرد تا
            مکان و حرکت آن‌ها را در سراسر زنجیره تامین ردیابی کند.
          </p>

          <p className="py-2 md:py-4 leading-8 neomofisme-shadow dark:neomofisme-shadow-dark hover:scale-105 transition-transform p-4 rounded-xl ">
            <h3 className="text-pink-700 dark:text-white text-center text-base py-3 ">
              ردیابی حیوانات:{" "}
            </h3>{" "}
            از برچسب‌های RFID می‌توان برای ردیابی حیوانات برای اهداف تحقیقاتی،
            مدیریت حیات وحش یا کشاورزی استفاده کرد. استفاده از تگ‌ها در بازار
            اسب‌ها به شدت رواج دارد. همچنین تگ‌های شناسایی برای پارک‌های حیات
            وحش و اکوسیستم‌های حفاظت شده بسیار کاربردی است.
          </p>

          <p className="py-2 md:py-4 leading-8 neomofisme-shadow dark:neomofisme-shadow-dark hover:scale-105 transition-transform p-4 rounded-xl ">
            <h3 className="text-pink-700 dark:text-white text-center text-base py-3 ">
              سیستم‌های پرداخت:{" "}
            </h3>{" "}
            تگ RFID را می‌توان در سیستم‌های پرداخت بدون تماس، مانند کارت‌های
            پرداخت کرایه حمل‌ونقل یا جمع‌آوری الکترونیکی عوارض استفاده کرد.
          </p>

          <p className="py-2 md:py-4 leading-8 neomofisme-shadow dark:neomofisme-shadow-dark hover:scale-105 transition-transform p-4 rounded-xl ">
            <h3 className="text-pink-700 dark:text-white text-center text-base py-3 ">
              مراقبت‌های بهداشتی:{" "}
            </h3>{" "}
            از برچسب‌های RFID می‌توان برای ردیابی تجهیزات پزشکی، نظارت بر علائم
            حیاتی بیمار و اطمینان از تجویز صحیح دارو استفاده کرد.
          </p>
        </div>

        <div className="w-auto flex flex-col items-center lg:flex-row p-4  text-justify tracking-tight dark:text-white mt-8 bg-white dark:bg-bgDarkInner rounded-xl">
          <div data-aos="fade-left" data-aos-duration="1000" className="w-full">
            <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
              نکته مهم – فناوری RFID :
            </h1>
            <p className="py-2 md:py-4 leading-8">
              به طور کلی، فناوری RFID جمع آوری خودکار داده‌ها را امکان پذیر
              می‌کند و می‌تواند کارایی، دقت و امنیت را در صنایع و برنامه های
              مختلف بهبود بخشد. همین امر باعث شده است که در صنایع بزرگ و حتی
              نظامی از این تگ‌ها به دفعات استفاده شود. با این حال این نوع
              استفاده‌ها در کشور ایران همچنان نوپا و نوظهور است.
            </p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="flex items-center justify-center w-full mt-6 lg:mt-0"
          >
            <img
              src={image}
              alt="image"
              className="w-auto h-w-auto lg:max-w-3xl rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BazarUsing;
