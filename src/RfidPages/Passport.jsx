import React from "react";
import passimage from "../assets/images/id-card-animate.svg";
const Passport = () => {
  return (
    <section className="w-auto  flex flex-col items-center lg:flex-row p-4  text-justify mt-4 tracking-tight dark:text-white h-fit">
      <div data-aos="fade-left" data-aos-duration="1000" className="w-full">
        <h1 className="font-semibold text-xl border-borderDark dark:border-borderDark border-b-4 w-fit p-4 ">
          نکته قابل توجه – استفاده از تگ RFID در پاسپورت های امریکا{" "}
        </h1>
        <p className="py-2 md:py-4 leading-8">
          <a
            href="https://www.us-passport-service-guide.com/e-passport.html"
            className="text-pink-700 dark:text-borderDark cursor-pointer"
          >
            امریکا روی پاسپورت‌های خود
          </a>{" "}
          برای خواندن اطلاعات دقیق از تگ‌های RFID ویژه‌ای استفاده می‌کند. از سال
          ۲۰۰۷ به بعد{" "}
          <a
            href="https://nationalpassportservice.com/rfid-chip/"
            className="text-pink-700 dark:text-borderDark cursor-pointer"
          >
            تمامی پاسپورت‌های آمریکایی دارای تگ RFID مخصوص هستند.
          </a>{" "}
          این تگ در پشت جلد پاسپورت قرار گرفته است. اطلاعات ذخیره شده روی تگ
          همان اطلاعاتی است که در صفحه داده گذرنامه نمایش داده می‌شود. این شامل
          نام کامل، تاریخ تولد، محل تولد، تاریخ صدور پاسپورت، تاریخ انقضا و غیره
          است.
        </p>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="flex items-center justify-center w-full mt-6 lg:mt-0"
      >
        <img
          src={passimage}
          alt="image"
          className="w-auto h-auto lg:max-w-3xl rounded-3xl"
        />
      </div>
    </section>
  );
};

export default Passport;
