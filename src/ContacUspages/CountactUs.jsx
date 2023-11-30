import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const CountactUs = () => {
  return (
    <>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto mt-8 bg-white dark:bg-bgDarkInner rounded-xl">
        <Section1 />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto mt-8">
        <Section2 />
      </section>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto my-8 bg-white dark:bg-bgDarkInner rounded-xl">
        <Section3 />
      </section>
    </>
  );
};

export default CountactUs;
