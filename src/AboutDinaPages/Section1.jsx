import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/aboutImages/design-team-animate .svg";
const Section1 = () => {
  return (
    <div
      className=" w-full text-center"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <h1 className="font-semibold text-xl dark:text-white p-2 border-b-4 border-borderDark w-fit mx-auto">
        درباره ما – درباره دینا – معرفی 4 محصول اصلی
      </h1>
      <div className=" w-full text-center">
        <p className="py-2 md:py-4 leading-8 text-justify  dark:text-white">
          شما می توانید به راحتی درباره دینا اطلاعات لازم را کسب کنید. همچنین
          شما می توانید با مطالعه رزومه این شرکت اطلاعات کافی را بدست بیاورید.{" "}
          <Link
            className="text-borderDark font-bold dark:text-indigo-500"
            to="/"
          >
            مجموعه نرم‌افزاری دینا
          </Link>{" "}
          به عنوان یک شرکت نرم‌افزاری فعالیت خود را از سال ۱۳۹۷ شروع کرده است.
          این شرکت با همکاری گروهی از فارغ‌التحصیلان گرایش های رشته کامپیوتر و
          نرم‌افزار تشکیل شده و در مدت کوتاهی توانسته به خوبی در بازار IT کشور
          شناخته شود. برخی از فعالیت های اصلی دینا شامل موارد زیر می شوند .
        </p>
        <h1 className="font-semibold text-xl dark:text-white rounded-lg p-4 inline-block border-2 ">
          دینا، گروهی از جوانان مستعد، پرکار و خلاق
        </h1>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className=" items-center lg:flex lg:flex-row-reverse gap-4 bg-white dark:bg-bgDarkInner rounded-xl
  
  w-auto text-justify mt-4 tracking-tight h-fit"
        >
          <div className="w-full dark:text-white">
            <div className=" text-justify">
              <h1 className="font-semibold text-xl text-center border-borderDark dark:border-borderDark border-b-4 dark:text-white w-fit p-4">
                درباره دینا
              </h1>
              <p className="pt-2 md:pt-4 leading-8">
                شرکت نرم افزاری داده کاوان دینا فعالیت خود را از سال ۱۳۹۷ با نام
                گروه نرم افزاری دینا و با همکاری گروهی از فارغ‌التحصیلان گرایش
                های رشته کامپیوتر و نرم افزار آغاز کرد . هدف این شرکت در ابتدا،
                تولید{" "}
                <Link
                  className="font-bold text-borderDark dark:text-indigo-500"
                  to="/سامانه-هلپ-دسک-دینا"
                >
                  سامانه های جامع Help Desk
                </Link>{" "}
                مرتبط با فعالیت ها و عملکردهای واحد فناوری اطلاعات در تمامی
                سازمان ها و ادارات دولتی ، کارخانجات و تمامی مجموعه های خصوصی و
                دولتی است که در همین راستا شروع به تحلیل، طراحی و تولید سامانه
                جامع Help Desk دینا نمود . گسترش فعالیت های شرکت در سال 1398 و
                همچنین اخذ اعتماد مشتریان قبلی شرکت از جمله{" "}
                <a
                  className="font-bold text-borderDark dark:text-indigo-500"
                  href="https://ramakdairy.com/"
                >
                  {" "}
                  شرکت فرآورده های لبنی رامک
                </a>{" "}
                در زمینه طراحی و تولید نرم افزارهای مبتنی بر پردازش تصویر و هوش
                مصنوعی و نیز تلاش جمعی تیم جوان و مستعد خود نهایتا موفق به تولید
                نرم افزار سفارشی چیدمان (چینا) جهت مدیریت هوشمند و مبتنی بر
                پردازش تصویر چیدمان محصولات رامک در تمامی فروشگاه ها و عاملین
                فروش در کشور گردید .
              </p>
              <p className="leading-8">
                با گسترش فعالیت‌های این شرکت از سال ۱۳۹۷ تاکنون، سبد محصولات
                شرکت نرم افزاری داده کاوان دینا در سطح کشور و خارج از کشور وسیع
                تر شده است که این امر، مرهون تلاش و همفکری تیمی متشکل از بهترین
                مهندسان و تکنسین­ها در بخش های مختلف طراحی، مهندسی، تحقیق و
                توسعه، تولید، کنترل کیفیت و … می باشد. این شرکت در طول سالهای
                فعالیت خود، همواره کوشیده است تا از طرفی با طراحی محصولاتی با
                بالاترین بازدهی و ارزنده ترین پشتیبانی های فنی در مقایسه با سایر
                محصولات مشابه؛ و از طرف دیگر با تولید محصولاتی با کیفیت،مبتنی بر
                دانش و فناوری روز دنیا ، متخصصین مجرب و رعایت استانداردهای بین
                المللی مربوطه محقق می شوند، گامی بلند در راستای رضایت مشتریان
                خویش و نیز ارتقای سطح تولید در داخل و خارج از مرزهای ایران عزیز
                بردارد. به امید ایزد منان …
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              src={image}
              alt="office-group"
              className="animated w-full h-full lg:max-w-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
