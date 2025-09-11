import { useState } from "react";
import { FaBars } from "react-icons/fa";

import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Button from "./util/Button";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="max-w-[1440px] mx-auto px-10 py-2 ">
      <div className="flex justify-between items-center ">
        <div>
          <img src="/assets/logo.svg" alt="logo" className="w-[150px] " />
        </div>
        <div className=" justify-between gap-[40px] hidden md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#14b8a6] border-b-2 border-[#14b8a6] pb-2"
                : "text-gray-600 hover:text-[#14b8a6]"
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#14b8a6] border-b-2 border-[#14b8a6] pb-2"
                : "text-gray-600 hover:text-[#14b8a6]"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact_us"
            className={({ isActive }) =>
              isActive
                ? "text-[#14b8a6] border-b-2 border-[#14b8a6] pb-2"
                : "text-gray-600 hover:text-[#14b8a6]"
            }
          >
            Contact Us
          </NavLink>
        </div>
        <div className="justify-center items-center">
          <Button className="hidden md:block px-[27.5px] py-[14px] bg-[#14b8a6] text-white rounded-full cursor-pointer  ">
            Get Started
          </Button>
          <button
            className="flex md:hidden"
            onClick={() => setIsOpen((s) => !s)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 "
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5M3.75 9.75h16.5M3.75 14.25h16.5M3.75 18.75h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className=" flex flex-col h-screen space-y-5"
        >
          <div className="flex flex-col justify-center items-center space-y-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#14b8a6] border-b-2 border-[#14b8a6] pb-2"
                  : "text-gray-600 hover:text-[#14b8a6]"
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#14b8a6] border-b-2 border-[#14b8a6] pb-2"
                  : "text-gray-600 hover:text-[#14b8a6]"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact_us"
              className={({ isActive }) =>
                isActive
                  ? "text-[#14b8a6] border-b-2 border-[#14b8a6] pb-2"
                  : "text-gray-600 hover:text-[#14b8a6]"
              }
            >
              Contact Us
            </NavLink>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 justify-center "
          >
            <Button className=" px-[27.5px] py-[14px] bg-[#14b8a6] text-white rounded-full cursor-pointer  ">
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default Header;
