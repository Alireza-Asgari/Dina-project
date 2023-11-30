import React from "react";
import Section1 from "./Section1";
import FollowDina from "./FollowDina";
import DinaProducts from "./HelpDeskProduct";
import ChinaProduct from "./ChinaProduct";
import DinaSood from "./DinasoodProduct";
import RfidProduct from "./RfidProduct";
const AboutDina = () => {
  return (
    <>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto mt-8 bg-white dark:bg-bgDarkInner rounded-xl">
        <Section1 />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto pb-8 ">
        <FollowDina />
      </section>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto">
        <DinaProducts rowValue="row" />
      </section>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto mt-8 bg-white dark:bg-bgDarkInner rounded-xl">
        <ChinaProduct rowValue="row-reverse" />
      </section>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto">
        <DinaSood rowValue="row" />
      </section>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto my-8 bg-white dark:bg-bgDarkInner rounded-xl">
        <RfidProduct rowValue="row-reverse" />
      </section>
    </>
  );
};

export default AboutDina;
