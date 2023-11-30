import React from "react";
import AccordionCom from "../components/AccrdionCom";
import { chinaAccordins } from "../data/data";
const AccrodionChina = () => {
  return (
    <div>
      {chinaAccordins.map((item) => (
        <AccordionCom
          key={item.id}
          triggerVal={item.triger}
          paragraphs={item.paragraphs}
          image={item.image}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default AccrodionChina;
