import React from "react";
const Features = ({ data, headTeaxt }) => {
  return (
    <section className="container w-[calc(100%-2rem)] mx-auto pb-16 ">
      <div className="flex flex-col dark:text-white p-4 pb-12 bg-white dark:bg-bgDarkInner rounded-xl">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="font-semibold text-xl border-borderDark dark:border-borderDark border-b-4 w-fit p-4 ">
            {headTeaxt.h}
          </h1>
          <p className="py-2 md:py-4 leading-8 text-justify">{headTeaxt.p}</p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className={`grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-${
            data.length <= 4 ? "2" : "3"
          }  `}
        >
          {data.map((item) => (
            <div
              data-aos="flip-right"
              data-aos-duration="1000"
              key={item.id}
              className="p-8 rounded-xl neomofisme-shadow dark:neomofisme-shadow-dark hover:scale-105 transition-all"
            >
              <div className="w-full flex justify-center">
                <img src={item.imgurl} alt="icon" className="w-16 h-16" />
              </div>
              <div>
                <h3 className="p-4 dark:text-white w-full text-center leading-8">
                  {item.text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
