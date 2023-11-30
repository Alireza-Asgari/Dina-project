import React from "react";

const ButtonComponent = ({ children, addClass, click }) => {
  return (
    <button
      onClick={click}
      className={
        "py-4 lg:py-4 px-6 lg:px-16 text-sm leading-4 text-white font-semibold rounded-lg bg-borderDark hover:shadow-md transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
