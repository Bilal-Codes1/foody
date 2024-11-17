"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/Logo.png";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu visibility

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex xl:px-40 justify-between items-center py-4 px-4 sm:px-16 w-full text-white">
      {/* Logo */}
      <Link
        to="home" // Target the section with id="home"
        smooth={true}
        duration={500}
      >
        <Image
          src={Logo}
          width={110}
          height={110}
          alt="logo"
          className="cursor-pointer"
        />
      </Link>

      {/* Navigation Links (Desktop) */}
      <ul className="hidden sm:flex gap-8 items-center">
        {["Home", "Menu", "About Us", "Reviews"].map((item) => (
          <li key={item}>
            <Link
              to={item.toLowerCase().replace(" ", "")} // Dynamically set the target section
              smooth={true}
              duration={500}
              className="cursor-pointer relative hover:before:content-[''] hover:before:w-full hover:before:h-[3px] hover:before:duration-500 hover:before:transition-all hover:before:ease-in-out hover:before:rounded-full hover:before:bg-primary hover:before:absolute hover:before:bottom-0 hover:before:left-0"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button (Hamburger Icon) */}
      <div
        className="sm:hidden flex flex-col items-center justify-center cursor-pointer"
        onClick={handleMenuToggle}
      >
        <div className="w-6 h-0.5 bg-white mb-2"></div>
        <div className="w-6 h-0.5 bg-white mb-2"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </div>

      {/* Mobile Menu (Visible when menuOpen is true) */}
      {menuOpen && (
        <ul className="sm:hidden absolute top-16 left-0 w-full bg-[#232323] text-white flex flex-col items-center py-4 gap-4">
          {["Home", "Menu", "About Us", "Reviews"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase().replace(" ", "")} // Dynamically set the target section
                smooth={true}
                duration={500}
                className="cursor-pointer relative hover:before:content-[''] hover:before:w-full hover:before:h-[3px] hover:before:duration-500 hover:before:transition-all hover:before:ease-in-out hover:before:rounded-full hover:before:bg-primary hover:before:absolute hover:before:bottom-0 hover:before:left-0"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
