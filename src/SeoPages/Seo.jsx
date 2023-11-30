import React from "react";
import Hero from "./Hero";
import DoDisign from "./DoDisign";
import Samples from "./Samples";
import Services from "./Services";
import WhatSeo from "./WhatSeo";

const Seo = () => {
  return (
    <>
      <section className="container w-[calc(100%-2rem)] p-2 mx-auto mt-8">
        <Hero />
      </section>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto mt-8 bg-white dark:bg-bgDarkInner rounded-xl">
        <DoDisign />
      </section>
      <section className="container w-[calc(100%-2rem)] p-2 mx-auto mt-8">
        <Samples />
      </section>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto mt-8">
        <Services />
      </section>
      <section className="container w-[calc(100%-2rem)] p-2 mx-auto mt-8">
        <WhatSeo />
      </section>
    </>
  );
};

export default Seo;
