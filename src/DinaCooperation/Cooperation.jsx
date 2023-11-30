import React from "react";
// import { ToastContainer } from "react-toastify";
import Section1 from "./Section1";
import Section2 from "./Section2";
import FormPage from "./FormInfo";
import Form from "./Form";
const Cooperation = () => {
  return (
    <>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto mt-8 bg-white dark:bg-bgDarkInner rounded-xl">
        <Section1 />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto">
        <Section2 />
      </section>
      <section className="container w-[calc(100%-2rem)] p-4 mx-auto my-8 bg-white dark:bg-bgDarkInner rounded-xl">
        <FormPage />
      </section>
      <section className="container w-[calc(100%-2rem)] mx-auto pb-8">
        <Form />
      </section>
    </>
  );
};

export default Cooperation;
