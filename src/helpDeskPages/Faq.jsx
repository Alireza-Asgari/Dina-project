import React from "react";
import { HelpdeskFaqs } from "../data/data";
import AccordionCom from "../components/AccrdionCom";

const Faq = () => {
  return (
    <section className="container w-[calc(100%-2rem)] mx-auto pb-8  ">
      <div className="w-full flex flex-col items-center p-4 text-justify mt-4 tracking-tight dark:text-white">
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          className="font-semibold text-xl border-borderDark dark:border-borderDark border-b-4 w-fit p-4 "
        >
          سؤالات متداول در خصوص سامانه help desk
        </h1>
        <div className="w-full mt-12 space-y-8">
          {HelpdeskFaqs.map((item) => (
            <AccordionCom
              key={item.id}
              triggerVal={item.triger}
              paragraphs={[item.answer]}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
