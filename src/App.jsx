import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
// import HelpDesk from "./helpDeskPages/Helpdesk";
import HelpDesk from "./helpDeskPages/HelpDesk";
import Layout from "./layout/Index";
import ChinaSoftware from "./china/ChinaSoftware";
import { Routes, Route, Navigate } from "react-router-dom";
import Rfid from "./RfidPages/Rfid";
import ScrollToTop from "./components/ScrollToTop";
import SuperMarket from "./SuperMarket/SuperMarket";
import Seo from "./SeoPages/Seo";
import AboutDina from "./AboutDinaPages/AboutDina";
import Goals from "./GoalsPages/Goals";
import RequestDemo from "./RequestDemoPages.jsx/RequestDemo";
import Webinar from "./WebinarPages/Webinar";
import Cooperation from "./DinaCooperation/Cooperation";
import Representation from "./representationPage/Representation";
import Blogs from "./blogPages/Blogs";
import Support from "./SupportPages/Support";
import CountactUs from "./ContacUspages/CountactUs";
import Search from "./SerchPage/Search";
import Main from "./mainPage/Main";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      dir="rtl"
      className="font-body transition-colors duration-500 bg-bodyColor dark:bg-dinaColor"
    >
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/سامانه-هلپ-دسک-دینا" element={<HelpDesk />} />
          <Route path="/تگ-rfid" element={<Rfid />} />
          <Route
            path="/نرم-افزار-مدیریت-چیدمان-فروشگاهی"
            element={<ChinaSoftware />}
          />
          <Route
            path="/نرم-افزار-سوپر-مارکت-آنلاین"
            element={<SuperMarket />}
          />
          <Route path="/طراحی-سایت-و-خدمات-سئو" element={<Seo />} />
          <Route path="/درباره-ما-درباره-دینا" element={<AboutDina />} />
          <Route path="/چشم-انداز-و-اهداف-دینا" element={<Goals />} />
          <Route path="/درخواست-دمو" element={<RequestDemo />} />
          <Route path="/شرکت-در-وبینار" element={<Webinar />} />
          <Route path="/درخواست-همکاری-با-دینا" element={<Cooperation />} />
          <Route path="/شرایط-اخذ-نمایندگی" element={<Representation />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/ارتباط-با-واحد-پشتیبانی-دینا" element={<Support />} />
          <Route path="/تماس-با-ما-تماس-با-دینا" element={<CountactUs />} />
          <Route path="/search" element={<Search />} />

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
