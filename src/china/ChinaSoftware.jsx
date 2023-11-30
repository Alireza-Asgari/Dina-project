import React from "react";
import ChinaHero from "./Chinahero";
import ChinaIntro from "./ChinaIntro";
import AccordionChina from "./AccrodionChina";
const ChinaSoftware = () => {
  return (
    <>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto mt-8 bg-white dark:bg-bgDarkInner rounded-xl">
        <ChinaHero />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto pb-8  ">
        <ChinaIntro />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto pb-8  ">
        <AccordionChina />
      </section>
    </>
  );
};

export default ChinaSoftware;
