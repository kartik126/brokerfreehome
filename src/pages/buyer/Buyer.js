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
  return (
    <>
      <Header />
      <Tenantbanner />
      <Topdetails />
      <Bfhworks />
      <Savingcalculator />
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
