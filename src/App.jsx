import { BrowserRouter, Route, Routes } from "react-router-dom";
// import DashboardLayout from "./layouts/DashboardLayout";
import PublicLayout from "./layouts/PublicLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

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
          {/* <Route element={<DashboardLayout />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
