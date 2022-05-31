import { Route, Routes } from "react-router-dom";
import Loginform from "./components/Loginform";
import Aboutus from "./pages/Aboutus/Aboutus";
import Blogspage from "./pages/blogspage/Blogspage";
import Buyer from "./pages/buyer/Buyer";
import Contacts from "./pages/contacts/Contacts";
import Contactus from "./pages/contactus/Contactus";
import Dashboard from "./pages/dashboard/Dashboard";
import Editprofile from "./pages/dashboard/Editprofile";
import Landlorddashboard from "./pages/dashboard/Landlorddashboard";
import TenantBuyerDashboard from "./pages/dashboard/TenantBuyerDashboard";
import Faq from "./pages/Faq/Faq";
import Help from "./pages/help/Help";
import Landlord from "./pages/landlord/Landlord";
import Pricing from "./pages/pricing/Pricing";
import Getcontactedbypropertyowner from "./pages/propertyowner/Getcontactedbypropertyowner";
import Searchlisting from "./pages/searchlisting/Searchlisting";
import Seller from "./pages/Seller/Seller";
import Singlelisting from "./pages/singlelisting/Singlelisting";
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
      <Route path="/ourblogs" element={<Blogspage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/help" element={<Help />} />
      <Route path="/searchlisting" element={<Searchlisting />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/singlelisting" element={<Singlelisting />} />
<Route path="/getcontactedbypropertyowner" element={<Getcontactedbypropertyowner/>}/>
       <Route path="/editprofile" element={<Editprofile/>} />
       <Route path="/landlorddashboard" element={<Landlorddashboard/>} />
       <Route path="/tenantbuyerdashboard" element={<TenantBuyerDashboard/>} />
    </Routes>
  );
}

export default App;
