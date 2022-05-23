import React, { useEffect } from "react";
import Bfhworks from "../../components/Bfhworks";
import Blogs from "../../components/Blogs";
import Helpdesk from "../../components/Helpdesk";
import Mainbanner from "../../components/Mainbanner";
import Registrationform from "../../components/Registrationform";
import Savingcalculator from "../../components/Savingcalculator";
import Topdetails from "../../components/Topdetails";
import Footer from "../../othercomponents/Footer";
import Header from "../../othercomponents/Header";

function Seller() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <Mainbanner />
      <Topdetails />
      <Bfhworks />
      <Savingcalculator />
      <Helpdesk />
      <Blogs />
      <Footer />
  
    </>
  );
}

export default Seller;
