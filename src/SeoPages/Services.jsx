import React from "react";
import image1 from "../assets/images/SeoImages/seo-analytics-team-animate.svg";
import image2 from "../assets/images/SeoImages/credit-assesment-animate.svg";
import image3 from "../assets/images/SeoImages/ui-ux-design-animate.svg";
import image4 from "../assets/images/SeoImages/design-team-animate.svg";
const Services = () => {
  return (
    <>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className=" w-auto text-justify tracking-tight p-4 bg-white dark:bg-bgDarkInner rounded-xl "
      >
        <div className="w-auto flex flex-col items-center lg:flex-row gap-8 p-4  text-justify mt-4 tracking-tight dark:text-white">
          <div data-aos="fade-left" data-aos-duration="1000" className="w-full">
            <h1 className="font-semibold text-lg text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
              انجام خدمات سئو حرفه ای توسط شرکت دینا
            </h1>
            <p className="py-2 leading-8 rounded-xl mt-2 mb-0 dark:text-white">
              تولید محتوا و خدمات سئو چیست؟ شاید جواب دادن به این سؤال نیازمند
              یک کتاب چند صد صفحه‌ای باشد؛ اما شما می‌توانید با مطالعه این مقاله
              به‌راحتی جواب این سؤال را پیدا کنید. ایجاد فرایندهای تولید محتوای
              سئو شده نیازمند دانش و تجربه بالایی است. در واقع ایجاد یک استراتژی
              برای تولید محتوای سئو شده می‌تواند اشکال مختلفی داشته باشد. در
              نگاه اول شاید ساده باشد اما در اصل این‌گونه نیست و نیاز به تخصص
              بالایی دارد. به همین دلیل است که متخصصان تولید محتوا بسیار
              موردتوجه کسب‌وکارها قرار گرفته‌اند. این افراد ماهر طرز فکر کاربران
              و مخاطبان را درک می‌کنند و می‌دانند چگونه محتوایی ایجاد کنند که
              باعث ایجاد تعامل شود.
            </p>
            <p className="py-2 leading-8 rounded-xl dark:text-white">
              سئوی سایت به‌منظور بهبود عملکرد سایت بر اساس استانداردهای روز دنیا
              انجام می‌شود. هدف از این بهینه سازی سایت جذب بازدیدکننده بیشتر از
              طریق موتورهای جست‌وجو می‌باشد. امروزه استفاده از سئو در سایت‌ها
              بسیار رواج پیداکرده است. به همین دلیل شما باید برای سایت خود به
              دنبال یک سئوکار حرفه ای باشید. نگران نباشید شرکت داده کاوان دینا
              در کنار شماست!
            </p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="flex items-center justify-center w-full"
          >
            <img
              src={image1}
              alt="seo-image"
              className="w-auto h-auto rounded-3xl"
            />
          </div>
        </div>
      </div>

      <div className="w-auto tracking-tight p-4">
        <div className="w-full mt-8 text-justify grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            data-aos="flip-up"
            data-aos-delay="100"
            className="rounded-xl bg-white dark:bg-bgDarkInner transition-all hover:scale-105 duration-200 cursor-pointer neomofisme-shadow dark:neomofisme-shadow-dark"
          >
            <div className="w-full flex justify-center">
              <img src={image2} alt="brandig-image" className="h-72" />
            </div>
            <h3 className="text-borderDark dark:text-mauve5 text-center text-lg pb-2 font-semibold ">
              هزینه مناسب
            </h3>
            <p className="px-4 text-base pb-2 leading-8 rounded-xl dark:text-white">
              شاید در نگاه اول هزینه طراحی سایت بالا باشد اما در حقیقت اینگونه
              نیست. قیمت طراحی سایت‌ها بر اساس امکانات آن‌ها و آپشن ها محاسبه
              می‌شود. به همین دلیل است که قیمت ثابت و واحدی برای طراحی سایت های
              مختلف وجود ندارد. شما باید به تجربه و دانش شرکت نیز توجه کنید.
              نکته قابل توجه برگشت سرمایه از طریق فروش آنلاین و جذب مشتری در مدت
              زمان کوتاه است .
            </p>
          </div>

          <div
            data-aos="flip-up"
            data-aos-delay="200"
            className="rounded-xl bg-white dark:bg-bgDarkInner transition-all hover:scale-105 duration-200 cursor-pointer neomofisme-shadow dark:neomofisme-shadow-dark"
          >
            <div className="w-full flex justify-center">
              <img src={image3} alt="brandig-image" className="h-72" />
            </div>
            <h3 className="text-borderDark dark:text-mauve5 text-center text-lg pb-4 font-semibold ">
              طراحی سایت وردپرسی
            </h3>
            <p className="px-4 pb-2 text-base leading-8 rounded-xl dark:text-white">
              اگر به دنبال کاهش هزینه های خود هستید بهترین گزینه برای شما
              استفاده از سایت های وردپرسی است. این سایت ها ظاهری زیبا داشته و در
              عین حال بسیار قدرتمند هستند. فرقی نمی‌کند کسب‌وکار شما چیست و در
              چه زمینه مشغول فعالیت هستید، یک تجربه کاربری خوب در سایت شما
              می‌تواند تعداد مشتریان شما را به راحتی چند برابر کند.
            </p>
          </div>

          <div
            data-aos="flip-up"
            data-aos-delay="100"
            className="rounded-xl bg-white dark:bg-bgDarkInner transition-all hover:scale-105 duration-200 cursor-pointer neomofisme-shadow dark:neomofisme-shadow-dark"
          >
            <div className="w-full flex justify-center">
              <img src={image4} alt="brandig-image" className="h-72" />
            </div>
            <h3 className="text-borderDark dark:text-mauve5 text-center text-lg pb-4 font-semibold ">
              طراحی سایت اختصاصی
            </h3>
            <p className="px-4 pb-2 text-base leading-8 rounded-xl dark:text-white">
              برخی کسب و کارها می خواهند سایت اختصاصی خودشان را داشته باشند. شما
              می‌توانید ایده‌های خود را برای ما بازگو کنید تا با استفاده از
              ایده‌های شما، بهترین وب سایت را به شما ارائه بدهیم. ما در فرآیند
              طراحی سایت از جدیدترین و بروزترین متدهای برنامه‌نویسی و طراحی
              استفاده می کنیم. در نتیجه تجربه کاربری فوق العاده ای را به مخاطب و
              کاربر سایت شما منتقل می کنیم.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
