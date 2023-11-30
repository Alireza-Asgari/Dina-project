import React from "react";
import { UsingFeaturesItems } from "../data/data";
const UsingFeaturs = () => {
  return (
    <section className="container w-[calc(100%-2rem)] mx-auto pb-16 ">
      <div className="flex flex-col dark:text-white p-4 pb-12">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="font-semibold text-xl border-borderDark dark:border-borderDark border-b-4 w-fit p-4 ">
            ویژگی‌ها و مزیت‌های استفاده از هلپ دسک دینا
          </h1>
          <p className="py-2 md:py-4 leading-8 text-justify">
            نرم افزار هلپ دسک دینا دارا مزیت‌ها و ویژگی‌های زیادی است با این حال
            برخی از مهم‌ترین ویژگی‌ها عبارت‌اند از:
          </p>
        </div>
        <ul
          data-aos="fade-left"
          data-aos-duration="1000"
          className={`grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2`}
        >
          {UsingFeaturesItems.map((item) => (
            <li
              data-aos="flip-left"
              data-aos-duration="1000"
              key={item.id}
              className="p-8 rounded-xl text-center hover:scale-105 transition-all neomofisme-shadow dark:neomofisme-shadow-dark"
            >
              <div className="w-fit">
                <p className="dark:text-white line-clamp-none leading-8 text-justify	  ">
                  {item.id}-{item.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UsingFeaturs;
