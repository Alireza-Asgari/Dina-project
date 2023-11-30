import React from "react";

const Representation = () => {
  return (
    <section className="container w-[calc(100%-2rem)] p-4 mx-auto mt-8 bg-white dark:bg-bgDarkInner rounded-xl">
      <div
        className=" w-full text-center"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h1 className="font-semibold text-xl dark:text-white p-2 border-b-4 border-borderDark w-fit mx-auto">
          شرایط اخذ نمایندگی
        </h1>
        <div className=" w-fit mx-auto rounded-xl flex items-center justify-center my-8 p-4 neomofisme-shadow dark:neomofisme-shadow-dark">
          <a href="#" className="font-semibold text-xl dark:text-white p-2">
            دانلود فایل درخواست نمایندگی
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 dark:text-white text-mauve12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Representation;
