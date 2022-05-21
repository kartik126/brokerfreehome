import { Route, Routes } from "react-router-dom";
import Loginform from "./components/Loginform";
import Aboutus from "./pages/Aboutus/Aboutus";
import Blogspage from "./pages/blogspage/Blogspage";
import Buyer from "./pages/buyer/Buyer";
import Contacts from "./pages/contacts/Contacts";
import Contactus from "./pages/contactus/Contactus";
import Faq from "./pages/Faq/Faq";
import Help from "./pages/help/Help";
import Landlord from "./pages/landlord/Landlord";
import Pricing from "./pages/pricing/Pricing";
import Seller from "./pages/Seller/Seller";
import Tenant from "./pages/tenant/Tenant";
import Termscondition from "./pages/termsandcondition/Termscondition";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Buyer />} />
      <Route path="/Seller" element={<Seller />} />
      <Route path="/tenant" element={<Tenant />} />
      <Route path="/landlord" element={<Landlord />} />
      <Route path="/loginform" element={<Loginform />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/termsandcondition" element={<Termscondition />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/ourblogs" element={<Blogspage/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/contacts" element={<Contacts/>} />
      <Route path="/help" element={<Help/>} />
    </Routes>
  );
}

export default App;
