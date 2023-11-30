import React from "react";
import Section1 from "./Section1";
import Form from "./Form";
import Section2 from "./Section2";
const RequestDemo = () => {
  return (
    <>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto mt-8 bg-white dark:bg-bgDarkInner rounded-xl">
        <Section1 />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto pb-8 ">
        <Form />
      </section>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto my-8 bg-white dark:bg-bgDarkInner rounded-xl">
        <Section2 />
      </section>
      
    </>
  );
};

export default RequestDemo;
