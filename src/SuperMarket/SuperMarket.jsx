import React from "react";
import Intro from "./Intro";
import Why from "./Why";
import Dinadescriptio from "./Dinadescriptio";
import DinaVision from "./DinaVision";
const SuperMarket = () => {
  return (
    <>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto mt-8 bg-white dark:bg-bgDarkInner rounded-xl">
        <Intro />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto pb-8  ">
        <Why />
      </section>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto mt-8 bg-white dark:bg-bgDarkInner rounded-xl">
        <Dinadescriptio />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto pb-8  ">
        <DinaVision />
</section>
    </>
  );
};

export default SuperMarket;
