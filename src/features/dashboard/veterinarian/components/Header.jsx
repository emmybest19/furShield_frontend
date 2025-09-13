// import { useState } from "react";
// import { FaBars } from "react-icons/fa";

// import { motion } from "framer-motion";
import { FaCog } from "react-icons/fa";
import { FaRightFromBracket } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <aside className=" fixed top-0 left-0 bottom-0  overflow-hidden w-64 h-screen px-6 py-4 bg-[#e6f1f6]">
      <div className="flex justify-between flex-col items-start h-screen ">
        <div className="flex flex-col gap-10">
          <div>
            <img src="/assets/logo.svg" alt="logo" className="w-[150px] " />
          </div>
          <div className=" flex flex-col justify-between gap-4 ">
            <NavLink
              to=""
              className={`({ isActive }) =>
                isActive
                  ? "bg-[#456360]  hover:bg-[#42807b] hover:rounded-lg hover:text-white py-2 px-4"
                  : "text-gray-400 py-2 px-4 hover:bg-[#44867c] hover:text-white"
              `}
              end
            >
              Dashboard
            </NavLink>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive
                  ? "bg-[#456360]  hover:bg-[#42807b] hover:rounded-lg hover:text-white py-2 px-4"
                  : "text-gray-400 py-2 px-4 hover:bg-[#44867c] hover:rounded-lg hover:text-white"
              }
            >
              Patients
            </NavLink>
            <NavLink
              to="/health_record"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#456360]  hover:bg-[#42807b] hover:rounded-lg hover:text-white py-2 px-4"
                  : "text-gray-400 py-2 px-4 hover:bg-[#44867c] hover:rounded-lg hover:text-white"
              }
            >
              Appointments
            </NavLink>
            <NavLink
              to="/adoption"
              className={({ isActive }) =>
                isActive
                 ? "bg-[#456360]  hover:bg-[#42807b] hover:rounded-lg hover:text-white py-2 px-4"
                  : "text-gray-400 py-2 px-4 hover:bg-[#44867c] hover:rounded-lg hover:text-white"
              }
            >
              Messages
            </NavLink>
            <NavLink
              to="/adoption"
              className={({ isActive }) =>
                isActive
                 ? "bg-[#456360]  hover:bg-[#42807b] hover:rounded-lg hover:text-white py-2 px-4"
                  : "text-gray-400 py-2 px-4 hover:bg-[#44867c] hover:rounded-lg hover:text-white"
              }
            >
              Profile
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center py-2 px-4   gap-4">
          <button className="flex justify-center items-center gap-3 text-gray-400">
            <FaCog size={18} className="" /> Settings
          </button>
          
          <button className="flex justify-center items-center gap-3 text-gray-400">
            <FaRightFromBracket size={18} /> Logout
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Header;
