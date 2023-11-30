import React from "react";

import Hero from "./Hero";
import WhelpDesk from "./WhelpDesk";
import Section3 from "./Section3";
import Features from "./Features";
import Section4 from "./Section4";
//data
import {
  processItems,
  featuresItems,
  processHead,
  featuresHead,
} from "../data/data";
import Standard from "./Standard";
import UsingFeaturs from "./UsingFeaturs";
import BuyHelpdesk from "./BuyHelpdesk";
import Faq from "./Faq";

const HelpDesk = () => {
  return (
    <>
      <Hero />
      <WhelpDesk />
      <Section3 />
      <Features data={processItems} headTeaxt={processHead} />
      <Standard />
      <Features data={featuresItems} headTeaxt={featuresHead} />
      <Section4 />
      <UsingFeaturs />
      <BuyHelpdesk />
      <Faq />
    </>
  );
};

export default HelpDesk;
