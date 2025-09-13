// import { useState } from "react";
// import { FaBars } from "react-icons/fa";

// import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <section className="max-w-[1440px] mx-auto px-2 md:px-10 py-2 bg-[#e6f1f6]">

      <div className="flex justify-between items-center ">
        <div>
          <img src="/assets/logo.svg" alt="logo" className="w-[150px] " />
        </div>
        <div className=" justify-between gap-[40px] hidden md:flex">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-[#14b8a6] border-b-2 border-[#14b8a6] pb-2"
                : "text-gray-600 hover:text-[#14b8a6]"
            }
            end
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/appointment"
            className={({ isActive }) =>
              isActive
                ? "text-[#14b8a6] border-b-2 border-[#14b8a6] pb-2"
                : "text-gray-600 hover:text-[#14b8a6]"
            }
          >
            Appointments
          </NavLink>
          <NavLink
            to="/health_record"
            className={({ isActive }) =>
              isActive
                ? "text-[#14b8a6] border-b-2 border-[#14b8a6] pb-2"
                : "text-gray-600 hover:text-[#14b8a6]"
            }
          >
            Health Records
          </NavLink>
          <NavLink
            to="/adoption"
            className={({ isActive }) =>
              isActive
                ? "text-[#14b8a6] border-b-2 border-[#14b8a6] pb-2"
                : "text-gray-600 hover:text-[#14b8a6]"
            }
          >
            Adoption
          </NavLink>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button>
            <img src="/assets/alert.svg" alt="" className="w-[40px] h-[40px]" />
          </button>
          <button>
            <img src="/assets/profile.svg" className="w-[40px] h-[40px]" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default SideBar;
