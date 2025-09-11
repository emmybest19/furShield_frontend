import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="flex flex-col justify-center max-w-[1440px] mx-auto px-10 space-y-4 md:space-y-0 py-[13px]">
      <div className="flex flex-col md:flex-row justify-between items-center px-4  space-y-4 md:space-y-0">
        <div>
          <img src="/assets/logo.svg" alt="" />
        </div>
        <div className=" flex  gap-8">
          <Link to="/about">About</Link>
          <Link to="/contact_us">Contact Us</Link>
        </div>
        <div className="flex justify-between gap-8">
            <FaFacebook />
            <FaInstagram />
            <FaX />
        </div>
      </div>
      <div>
        <h3 className="text-center">&copy; 2025 FurShield. All rights reserved</h3>
      </div>
    </div>
  );
}

export default Footer;
