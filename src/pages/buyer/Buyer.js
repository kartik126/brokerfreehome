import React, { useEffect } from "react";
import Header from "../../othercomponents/Header";
import Footer from "../../othercomponents/Footer";
import Topdetails from "../../components/Topdetails";
import Bfhworks from "../../components/Bfhworks";
import Savingcalculator from "../../components/Savingcalculator";
import Tenantbanner from "../../components/Tenantbanner";
import Helpdesk from "../../components/Helpdesk";
import Blogs from "../../components/Blogs";
import BrowseProperty from "../../components/BrowseProperty";
import MortageCalculator from "../../components/MortageCalculator";
import Getcontacted from "../../components/Getcontacted";

function Buyer() {
  useEffect(() => {
    window.scrollTo(0, 0);
   

  });
  return (
    <>
      <Header />
      <Tenantbanner />
      <Topdetails />
      <Bfhworks />
      <Savingcalculator />
      <BrowseProperty/>
      <BrowseProperty/>
      <MortageCalculator/>
      <Helpdesk/>
      <Getcontacted/>
      <Blogs/>
      <Footer />
    </>
  );
}

export default Buyer;
