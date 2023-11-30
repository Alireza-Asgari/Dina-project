import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
const Main = () => {
  return (
    <>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto mt-8 bg-white dark:bg-bgDarkInner rounded-xl">
        <Section1 />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto mt-8 py-8">
        <Section2 />
      </section>
      <section className="container w-[calc(100%-2rem)] px-4 mx-auto mb-8 bg-white dark:bg-bgDarkInner rounded-xl">
        <Section3 />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto mt-8 py-8">
        <Section4 />
      </section>
      <section className="container w-[calc(100%-2rem)] px-4 mx-auto pb-8 bg-white dark:bg-bgDarkInner rounded-xl">
        <Section5 />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto mt-8 ">
        <Section6 />
      </section>
      <section className="container w-[calc(100%-2rem)] px-4 mx-auto my-8 bg-white dark:bg-bgDarkInner rounded-xl">
        <Section7 />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto my-8 ">
        <Section8 />
      </section>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto my-8 bg-white dark:bg-bgDarkInner rounded-xl">
        <Section9 />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto my-8 ">
        <Section10 />
      </section>
    </>
  );
};

export default Main;
