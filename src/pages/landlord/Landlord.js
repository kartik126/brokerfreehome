import React from 'react'
import Bfhworks from "../../components/Bfhworks";
import Blogs from "../../components/Blogs";
import Helpdesk from "../../components/Helpdesk";
import Mainbanner from "../../components/Mainbanner";
import Savingcalculator from "../../components/Savingcalculator";
import Topdetails from "../../components/Topdetails";
import Footer from "../../othercomponents/Footer";
import Header from "../../othercomponents/Header";

function Landlord() {
  return (
    <>
    <Header/>
    <Mainbanner />
      <Topdetails />
      <Bfhworks />
      <Savingcalculator />
      <Helpdesk />
      <Blogs />
      <Footer />
    </>
  )
}

export default Landlord