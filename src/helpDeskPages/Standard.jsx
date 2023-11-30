import React from "react";
import image from "../assets/images/data-extraction-rafiki-animate.svg";
const Standard = () => {
  return (
    <div className="container w-[calc(100%-2rem)] h-auto mx-auto pb-8  ">
      <div className="w-auto flex flex-col items-center lg:flex-row p-4  text-justify mt-4 tracking-tight dark:text-white">
        <div data-aos="fade-left" data-aos-duration="1000" className="w-full">
          <h1 className="font-semibold text-xl border-borderDark dark:border-borderDark border-b-4 w-fit p-4 ">
            استانداردسازی فرایندها
          </h1>
          <p className="py-2 md:py-4 leading-8">
            یک مجموعه موفق همواره وام دار استفاده از تجربه ، تخصص و تکنیک هایی
            است که منطبق بر مطالعه و دانش به روز باشد. نرم افزار Help Deskدینا
            با توجه به الگوی ساختاری ITILامکانات و ماژول های کاربردی خود را با
            افتخار در این زمینه در اختیار متخصصان و فرهیختگان کشور قرار داده است
            تا بتوانند گام های موثری در راستای نیازمندی های خود بردارند.
          </p>
        </div>
        <div
          data-aos="fade-up"
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
  );
};

export default Standard;
