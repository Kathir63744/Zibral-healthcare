"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { LiaInstagram } from "react-icons/lia";
import { BiPhone } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import ContactPopup from "./ContactPopup";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
      
      <header className="fixed top-0 left-0 w-full z-50">

        {/* ================= TOP BAR - Hidden on Mobile ================= */}
        <div className="w-full h-14 bg-gradient-to-r from-green-700 to-green-600 text-white hidden md:block">
          <div className="flex items-center justify-between h-full px-5">

            {/* Left Side */}
            <div className="flex ml-6 items-center gap-2">
              <span className="text-sm font-medium">Connect With Us</span>
              
              <a
                href="https://www.instagram.com/zibral_healthcare_2021/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                <LiaInstagram className="text-xl" />
              </a>

              <div className="w-[2px] h-6 bg-white/50 mx-2"></div>

              <MdOutlineEmail className="text-lg" />
              <span className="text-sm tracking-wide hidden lg:block">
                zibralhealthcare2021@gmail.com
              </span>
              <span className="text-sm tracking-wide lg:hidden">
                Email
              </span>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4 mr-4 text-sm">
              <div className="flex items-center gap-2">
                <HiOutlineLocationMarker className="text-xl" />
                <span className="hidden lg:block">Coimbatore, Tamil Nadu</span>
                <span className="lg:hidden">Location</span>
              </div>

              <div className="w-[2px] h-6 bg-white/50 mx-1"></div>

              <a
                href="tel:+918610810041"
                aria-label="Call us at 8610810041"
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300"
              >
                <BiPhone className="text-lg" />
                <span className="text-sm font-medium">Call Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* ================= NAVBAR ================= */}
        <nav className="h-16 md:h-20 bg-white/95 backdrop-blur-md border-b border-green-100 shadow-[0_4px_20px_rgba(34,139,34,0.08)]">
          <div className="flex items-center justify-between h-full px-4 md:px-10">

            {/* Logo Section - LARGER on mobile */}
            <Link href="/" className="flex items-center gap-2 md:gap-3">
              <div className="relative">
                <Image
                  src="/logo1.png"
                  alt="Zibral Healthcare"
                  width={60}
                  height={55}
                  className="object-contain md:w-[75px] md:h-[68px] w-[80px] h-[70px]"
                  priority
                />
              </div>

              <div>
                <h1 className="text-2xl md:text-2xl font-bold text-green-700 leading-none">
                  Zibral
                </h1>
                <p className="text-[12px] md:text-xs uppercase tracking-[3px] md:tracking-[4px] text-green-600 mt-0.5 md:mt-1">
                  Healthcare
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8 lg:gap-12 font-medium">
              <li>
                <Link
                  href="/"
                  className="relative text-gray-700 hover:text-green-600 transition group"
                >
                  Home
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="relative text-gray-700 hover:text-green-600 transition group"
                >
                  About
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="relative text-gray-700 hover:text-green-600 transition group"
                >
                  Products
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="relative text-gray-700 hover:text-green-600 transition group"
                >
                  Contact
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>

            {/* Desktop Right Side - Reach Us Button with Popup */}
            <div className="hidden md:flex items-center gap-4">
              <div className="hidden xl:flex flex-col items-end">
                <span className="text-xs text-gray-500">Trusted Healthcare</span>
                <span className="font-semibold text-green-700">Quality Assured</span>
              </div>

              <button
                onClick={openPopup}
                className="px-5 lg:px-7 py-2 lg:py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium shadow-lg shadow-green-200 hover:shadow-green-300 hover:-translate-y-0.5 transition-all duration-300 text-sm lg:text-base"
              >
                Reach Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-green-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="text-2xl text-green-600" />
              ) : (
                <FiMenu className="text-2xl text-green-600" />
              )}
            </button>

          </div>
        </nav>

        {/* Mobile Menu Dropdown - Green Theme */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-green-100 shadow-lg">
            <div className="flex flex-col px-5 py-5 space-y-4">
              
              {/* Mobile Top Bar Info - Green Theme */}
              <div className="flex flex-wrap items-center gap-3 pb-4 border-b border-green-100">
                <a
                  href="https://www.instagram.com/zibral_healthcare_2021?igsh=YzVxM3prZzBxMHl1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition"
                >
                  <LiaInstagram className="text-xl text-green-600" />
                </a>
                
                <div className="flex items-center gap-2">
                  <BiPhone className="text-green-500 text-sm" />
                  <a href="tel:+918610810041" className="text-sm text-gray-700 font-medium">
                    +91 86108 10041
                  </a>
                </div>
                
                <div className="flex items-center gap-2">
                  <MdOutlineEmail className="text-green-500 text-sm" />
                  <span className="text-xs text-gray-600 truncate">
                    zibralhealthcare2021@gmail.com
                  </span>
                </div>
              </div>

              {/* Mobile Navigation Links - Green Theme */}
              <Link
                href="/"
                onClick={toggleMenu}
                className="py-2 text-gray-700 hover:text-green-600 transition font-medium text-base border-l-2 border-transparent hover:border-green-500 pl-3"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={toggleMenu}
                className="py-2 text-gray-700 hover:text-green-600 transition font-medium text-base border-l-2 border-transparent hover:border-green-500 pl-3"
              >
                About
              </Link>
              <Link
                href="/products"
                onClick={toggleMenu}
                className="py-2 text-gray-700 hover:text-green-600 transition font-medium text-base border-l-2 border-transparent hover:border-green-500 pl-3"
              >
                Products
              </Link>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="py-2 text-gray-700 hover:text-green-600 transition font-medium text-base border-l-2 border-transparent hover:border-green-500 pl-3"
              >
                Contact
              </Link>

              {/* Mobile Location - Green Theme */}
              <div className="flex items-center gap-2 pt-3 border-t border-green-100">
                <HiOutlineLocationMarker className="text-green-500 text-base" />
                <span className="text-sm text-gray-600">Coimbatore, Tamil Nadu</span>
              </div>

              {/* Mobile CTA Button - Opens Popup */}
              <button
                onClick={openPopup}
                className="mt-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white text-center font-semibold text-sm shadow-md shadow-green-200"
              >
                Reach Us
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Spacer - Adjusted for mobile */}
      <div className="h-16 md:h-[136px]" />
    </>
  );
}