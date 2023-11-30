import React from "react";
import Section1Support from "./Section1Support";
import Form from "./Form";
import SupportDinaIntro from "./SupportDinaIntro";

const Support = () => {
  return (
    <>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto mt-8 bg-white dark:bg-bgDarkInner dark:shadow-borderDark dark:shadow-lg rounded-xl">
        <Section1Support />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto pb-8  ">
        <Form />
      </section>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto my-8 lg:mt-8 bg-white dark:bg-bgDarkInner rounded-xl">
        <SupportDinaIntro />
      </section>
    </>
  );
};

export default Support;
