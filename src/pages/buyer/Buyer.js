import Header from "../../othercomponents/Header";
import Footer from "../../othercomponents/Footer";
import Topdetails from "../../components/Topdetails";
import Bfhworks from "../../components/Bfhworks";
import Savingcalculator from "../../components/Savingcalculator";
import Helpdesk from "../../components/Helpdesk";
import Blogs from "../../components/Blogs";
import BrowseProperty from "../../components/BrowseProperty";
import MortageCalculator from "../../components/MortageCalculator";

function Buyer() {
  return (
    <>
      <Header />
      <Topdetails />
      <Bfhworks />
      <Savingcalculator />
      <BrowseProperty/>
      <MortageCalculator/>
      <Helpdesk/>
      <Blogs/>
      <Footer />
    </>
  );
}

export default Buyer;
