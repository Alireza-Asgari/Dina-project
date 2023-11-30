import React from "react";
import image2 from "../assets/images/SeoImages/sample5.png";
const BlogElement = () => {
  return (
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
        شاید در نگاه اول هزینه طراحی سایت بالا باشد اما در حقیقت اینگونه نیست.
        قیمت طراحی سایت‌ها بر اساس امکانات آن‌ها و آپشن ها محاسبه می‌شود. به
        همین دلیل است که قیمت ثابت و واحدی برای طراحی سایت های مختلف وجود ندارد.
        شما باید به تجربه و دانش شرکت نیز توجه کنید. نکته قابل توجه برگشت سرمایه
        از طریق فروش آنلاین و جذب مشتری در مدت زمان کوتاه است .
      </p>
    </div>
  );
};

export default BlogElement;
