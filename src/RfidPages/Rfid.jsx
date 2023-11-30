import React from "react";
import Intro from "./Intro";
import Passport from "./Passport";
import WhatRfid from "./WhatRfid";
import Freequency from "./Freequency";
import BazarUsing from "./BazarUsing";
import UsageRfid from "./UsageRfid";
import RfidSoftware from "./RfidSoftware";
import SoftwareIntro from "./SoftwareIntro";
import DinaIntro from "./DinaIntro";

const Rfid = () => {
  return (
    <>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto mt-8 bg-white dark:bg-bgDarkInner dark:shadow-borderDark dark:shadow-lg rounded-xl">
        <Intro />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto pb-8  ">
        <Passport />
      </section>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto mt-10 lg:mt-8 bg-white dark:bg-bgDarkInner rounded-xl">
        <WhatRfid />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto pb-8  ">
        <Freequency />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto pb-8  ">
        <BazarUsing />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto pb-8 ">
        <UsageRfid />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto pb-8  ">
        <RfidSoftware />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto pb-8  ">
        <SoftwareIntro />
      </section>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto bg-white dark:bg-bgDarkInner rounded-xl my-8">
        <DinaIntro />
      </section>
    </>
  );
};

export default Rfid;
