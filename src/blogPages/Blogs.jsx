import React from "react";
import BlogElement from "./BlogElement";

const Blogs = () => {
  return (
    <section className="container w-[calc(100%-2rem)] p-4 mx-auto mt-8 bg-white dark:bg-bgDarkInner rounded-xl">
      <div className="w-full mt-8 text-justify grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <BlogElement />
        <BlogElement />
        <BlogElement />
        <BlogElement />
      </div>
    </section>
  );
};

export default Blogs;
