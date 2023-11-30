import React from "react";
import image from "../assets/images/carosel/dinasood/dinasood.jpg";
import Caroucell from "./Caroucell";
const DinaSood = ({ rowValue }) => {
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      className={`w-full flex flex-col gap-4 items-center lg:gap-8 lg:flex-${rowValue} text-justify tracking-tight dark:text-white`}
    >
      <div className="w-full lg:w-1/2">
        <h1 className="font-semibold text-xl text-justify border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
          معرفی نرم افزار فروشگاه آنلاین دینا سود
        </h1>
        <p className="pt-2 leading-8 rounded-xl mt-2 mb-0 dark:text-white">
          این محصول به صورت کامل توجه مجموعه داده‌کاوی دینا طراحی و پیاده‌سازی
          شده است. از نکات قابل‌توجه نرم افزار سوپرمارکت آنلاین امکان استفاده از
          اپلیکیشن های اندرویدی و iOS است. شما می‌توانید به راحتی با تهیه این
          سامانه از بخش وب‌سایت و اپلیکیشن ها به صورت کامل استفاده نمایید.
        </p>
        <p className="pt-2 leading-8 rounded-xl dark:text-white">
          نکته قابل‌توجه این است که این محصول به صورت سفارشی برای شما و کسب‌وکار
          شما شخصی‌سازی می‌شود. ممکن است در سال‌های اخیر با برنامه‌های مختلف
          سایت ساز و اپلیکیشن ساز کار کرده باشید و یا نام آن‌ها را شنیده باشید.
          این نوع خدمات به صورت اختصاصی ارائه نمی‌شوند برای همین کیفیت و کارایی
          بالایی ندارند. در نتیجه بهتر است که شما کسب‌وکار خودتان را روی یک
          سامانه اختصاصی و شخصی‌سازی شده خودتان شروع کنید. به همین دلیل ما به
          شما نرم افزار سوپر مارکت آنلاین که با نام فروشگاه آنلاین دینا سود نیز
          شناخته می‌شود را معرفی می‌کنیم.
        </p>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <Caroucell images={[image]} />
      </div>
    </div>
  );
};

export default DinaSood;
