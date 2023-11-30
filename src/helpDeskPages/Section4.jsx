import React from "react";
import image from "../assets/images/data-extraction-cuate-animate.svg";
const section4 = () => {
  return (
    <>
      <div className="container w-[calc(100%-2rem)] mx-auto pb-8  ">
        <div className="w-auto flex flex-col items-center lg:flex-row-reverse p-4  text-justify mt-4 tracking-tight dark:text-white">
          <div data-aos="fade-left" data-aos-duration="1000" className="w-full">
            <h1 className="font-semibold text-xl border-borderDark dark:border-borderDark border-b-4 w-fit p-4 ">
              سازگار با تمامی مرورگرهای رایج و پلتفرم های سخت افزاری
            </h1>
            <p className="py-2 md:py-4 leading-8 text-justify">
              سامانه جامع Help Deskدینا با داشتن ظاهری جذاب و کاربر پسند همراه
              همیشگی شما در ارسال و بازبینی درخواست هایتان خواهد بود . با
              استفاده از این ابزار به راحتی در هر مکان و زمان قادر خواهیدبود
              درخواست های خود را ارسال ، بررسی و حتی ارجاع دهید که با توجه به
              سرعت عملکرد شما در رسیدگی به درخواست ها بسیار موثر خواهد بود
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="flex items-center justify-center w-full mt-6 lg:mt-0"
          >
            <img
              src={image}
              alt="image"
              className="w-full h-full lg:max-w-3xl rounded-3xl"
            />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className=" w-auto text-justify tracking-tight p-4 bg-white dark:bg-bgDarkInner rounded-xl"
        >
          <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
            چرا باید از نرم افزار تیکتینگ فارسی دینا استفاده کنیم؟
          </h1>
          <p className="py-2 md:py-4 leading-8 rounded-xl dark:text-white">
            نرم افزار Help Desk دینا که با نام نرم افزار تیکتینگ فارسی نیز
            شناخته می‌شود یک نرم افزار چندکاره و جامع است. این نرم افزار
            ویژگی‌های خاص خود را دارد و نسبت به نمونه‌های خارجی از کیفیت و
            کارایی بالاتری برخوردار است. همچنین باید به این نکته نیز توجه کرد که
            راه‌اندازی سامانه‌های خارجی در داخل ایران به صورت نسخه رسمی و تجاری
            با توجه به شرایط تحریم و … تقریباً غیرممکن است.
          </p>
          <p className="py-2 md:py-4 leading-8 rounded-xl  dark:text-white">
            علاوه بر این موارد حتی اگر بتوانیم به نسخه‌های خارجی خوب (Help desk
            software) نیز دسترسی داشته باشیم بازهم باید زمان و هزینه اضافی را
            برای ترجمه به زبان فارسی و ساده‌سازی جهت استفاده طیف کاربران سازمان
            تقبل کنید. به این موارد آموزش و تطابق کاربران و سناریوهای سازمانی با
            تحلیل‌های صورت گرفته را نیز اضافه کنید. این به معنی هزینه و زمان
            بیشتر برای استفاده از نرم افزار خواهد بود.
          </p>
          <p className="py-2 md:py-4 leading-8 rounded-xl  dark:text-white">
            در کنار این موارد می‌توان به مهم‌ترین فاکتور در خرید یک نرم افزار
            نیز اشاره کرد، پشتیبانی فنی و آنلاین در کوتاه‌ترین زمان ممکن! عدم
            دسترسی به پشتیبانی آنلاین و کارشناسان جهت ارائه راه‌حل و یا حل
            مشکلات احتمالی در زمان رخداد خطاها و پیام‌های مبتنی بر بستر شبکه و
            یا ساختار نرم افزار یکی از مهم‌ترین مواردی است که باعث می‌شود
            شرکت‌ها به سراغ نرم‌افزارهای مشابه خارجی نرود. در نتیجه می‌توان گفت
            که بهترین گزینه استفاده از نمونه‌های داخلی در سازمان‌ها و شرکت‌ها
            است. البته سامانه هلپ دسک دینا ویژگی‌ها و مزیت‌های بیشتری را نیز
            دارد که به آن‌ها اشاره می‌کنیم.
          </p>
        </div>
      </div>

      {/* <div className="container px-6 pt-16 pb-8 mx-auto ">
        <div className="items-center lg:flex gap-10">
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="lg:max-w-lg mt-4 tracking-tight  dark:bg-bgDark p-12 rounded-3xl shadow-2xl shadow-btnColorDark dark:shadow-borderDark dark:text-white">
              <h1 className="font-semibold tex-lg md:text-2xl  border-dinaColor dark:border-borderDark border-b-4 w-fit p-4 ">
                سازگار با تمامی مرورگرهای رایج و پلتفرم های سخت افزاری
              </h1>
              <p className="py-2 md:py-4 leading-8 text-justify">
                سامانه جامع Help Deskدینا با داشتن ظاهری جذاب و کاربر پسند همراه
                همیشگی شما در ارسال و بازبینی درخواست هایتان خواهد بود . با
                استفاده از این ابزار به راحتی در هر مکان و زمان قادر خواهیدبود
                درخواست های خود را ارسال ، بررسی و حتی ارجاع دهید که با توجه به
                سرعت عملکرد شما در رسیدگی به درخواست ها بسیار موثر خواهد بود
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
            >
              <img
                src={image}
                alt="introimage"
                className="w-full h-full lg:max-w-3xl"
              />
            </div>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="1000"
          data-aos-delay="100"
          className=" mt-12 tracking-tight dark:bg-bgDark dark:shadow-borderDark p-12 rounded-3xl shadow-inner shadow-btnColorDark dark:text-white"
        >
          <h1 className="font-semibold tex-lg md:text-xl dark:border-borderDark border-dinaColor border-b-4 w-fit p-4 ">
            چرا باید از نرم افزار تیکتینگ فارسی دینا استفاده کنیم؟
          </h1>
          <p className="py-2 md:py-4 leading-8 text-justify">
            نرم افزار Help Desk دینا که با نام نرم افزار تیکتینگ فارسی نیز
            شناخته می‌شود یک نرم افزار چندکاره و جامع است. این نرم افزار
            ویژگی‌های خاص خود را دارد و نسبت به نمونه‌های خارجی از کیفیت و
            کارایی بالاتری برخوردار است. همچنین باید به این نکته نیز توجه کرد که
            راه‌اندازی سامانه‌های خارجی در داخل ایران به صورت نسخه رسمی و تجاری
            با توجه به شرایط تحریم و … تقریباً غیرممکن است.
          </p>
          <p className="py-2 md:py-4 leading-8 text-justify">
            علاوه بر این موارد حتی اگر بتوانیم به نسخه‌های خارجی خوب (Help desk
            software) نیز دسترسی داشته باشیم بازهم باید زمان و هزینه اضافی را
            برای ترجمه به زبان فارسی و ساده‌سازی جهت استفاده طیف کاربران سازمان
            تقبل کنید. به این موارد آموزش و تطابق کاربران و سناریوهای سازمانی با
            تحلیل‌های صورت گرفته را نیز اضافه کنید. این به معنی هزینه و زمان
            بیشتر برای استفاده از نرم افزار خواهد بود.
          </p>
          <p className="py-2 md:py-4 leading-8 text-justify">
            در کنار این موارد می‌توان به مهم‌ترین فاکتور در خرید یک نرم افزار
            نیز اشاره کرد، پشتیبانی فنی و آنلاین در کوتاه‌ترین زمان ممکن! عدم
            دسترسی به پشتیبانی آنلاین و کارشناسان جهت ارائه راه‌حل و یا حل
            مشکلات احتمالی در زمان رخداد خطاها و پیام‌های مبتنی بر بستر شبکه و
            یا ساختار نرم افزار یکی از مهم‌ترین مواردی است که باعث می‌شود
            شرکت‌ها به سراغ نرم‌افزارهای مشابه خارجی نرود. در نتیجه می‌توان گفت
            که بهترین گزینه استفاده از نمونه‌های داخلی در سازمان‌ها و شرکت‌ها
            است. البته سامانه هلپ دسک دینا ویژگی‌ها و مزیت‌های بیشتری را نیز
            دارد که به آن‌ها اشاره می‌کنیم.
          </p>
        </div>
      </div> */}
    </>
  );
};

export default section4;
