import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Toaster
        position="top-center"
        reverseOrder={true}
        containerStyle={{
          top: 70,
        }}
      />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
