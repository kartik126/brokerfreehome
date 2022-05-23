import React, { useEffect } from "react";
import Bfhworks from "../../components/Bfhworks";
import Blogs from "../../components/Blogs";
import BrowseProperty from "../../components/BrowseProperty";
import Getcontacted from "../../components/Getcontacted";
import Helpdesk from "../../components/Helpdesk";
import Savingcalculator from "../../components/Savingcalculator";
import Tenantbanner from "../../components/Tenantbanner";
import Topdetails from "../../components/Topdetails";
import Footer from "../../othercomponents/Footer";
import Header from "../../othercomponents/Header";

function Tenant() {
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
      <BrowseProperty />
      <Helpdesk />
      <Getcontacted/>
      <Blogs />
      <Footer />
     
    </>
  );
}

export default Tenant;
