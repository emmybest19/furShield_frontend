import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import PublicLayout from "./layouts/PublicLayout";
import Veterinarian from "./layouts/VaterinarianDashBoardLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import SignUp from "./features/auth/pages/SignUp";
import SignIn from "./features/auth/pages/SignIn";
import Owner from "./features/dashboard/pet_owner/pages/OwnerDahsboard";
import OwnerDahsboard from "./features/dashboard/pet_owner/pages/OwnerDahsboard";
import OwnerAppointment from "./features/dashboard/pet_owner/pages/OwnerAppointment";
import OwnerHealth_Records from "./features/dashboard/pet_owner/pages/OwnerHealth_Records";
import VetProfile from "./features/dashboard/veterinarian/pages/VetProfile.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact_us" element={<ContactUs />} />
          </Route>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" index element={<OwnerDahsboard/>} />
            <Route path="/appointment" element={<OwnerAppointment />} />
            <Route path="/health_record" element={<OwnerHealth_Records />} />
          </Route>

          <Route element={<Veterinarian />}>
            <Route path="/vetProfile" element={<VetProfile />} />
          </Route>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
