import React from "react";
import Section1 from "./Section1";
import Tab from "./Tab";
import DinaGroup from "./DinaGroup";
import DinaAbility from "./DinaAbility";

const Goals = () => {
  return (
    <>
      <section className="container w-[calc(100%-2rem)] px-4 py-8 mx-auto mt-8 bg-white dark:bg-bgDarkInner rounded-xl">
        <Section1 />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto py-8  ">
        <Tab />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto pb-8  ">
        <DinaGroup />
      </section>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto mt-8">
        <DinaAbility />
      </section>
    </>
  );
};

export default Goals;
