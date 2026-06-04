"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { LiaFacebook, LiaInstagram, LiaTwitter } from "react-icons/lia";
import { BsMailbox } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">

        {/* ================= TOP BAR - Hidden on Mobile ================= */}
        <div className="w-full h-14 bg-gradient-to-r from-blue-500 to-blue-600 text-white hidden md:block">
          <div className="flex items-center justify-between h-full px-5">

            {/* Left Side */}
            <div className="flex ml-6 items-center gap-2">
              <span className="text-sm font-medium">Connect With Us</span>
              
              <a
                href="https://www.instagram.com/p/C33VcCDyGS2/"
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
        <nav className="h-16 md:h-20 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-between h-full px-4 md:px-10">

            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2 md:gap-3">
              <div className="relative">
                <Image
                  src="/logoo.png"
                  alt="Zibral Healthcare"
                  width={45}
                  height={40}
                  className="object-contain md:w-[60px] md:h-[55px]"
                  priority
                />
              </div>

              <div>
                <h1 className="text-xl md:text-2xl font-bold text-blue-700 leading-none">
                  Zibral
                </h1>
                <p className="text-[10px] md:text-xs uppercase tracking-[3px] md:tracking-[4px] text-gray-500 mt-0.5 md:mt-1">
                  Healthcare
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8 lg:gap-12 font-medium">
              <li>
                <Link
                  href="/"
                  className="relative text-gray-800 hover:text-blue-600 transition group"
                >
                  Home
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="relative text-gray-800 hover:text-blue-600 transition group"
                >
                  About
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="relative text-gray-800 hover:text-blue-600 transition group"
                >
                  Products
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="relative text-gray-800 hover:text-blue-600 transition group"
                >
                  Contact
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center gap-4">
              <div className="hidden xl:flex flex-col items-end">
                <span className="text-xs text-gray-500">Trusted Healthcare</span>
                <span className="font-semibold text-blue-700">Quality Assured</span>
              </div>

              <Link
                href="/contact"
                className="px-5 lg:px-7 py-2 lg:py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-300 text-sm lg:text-base"
              >
                Reach Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="text-2xl text-blue-600" />
              ) : (
                <FiMenu className="text-2xl text-blue-600" />
              )}
            </button>

          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-lg">
            <div className="flex flex-col px-4 py-4 space-y-3">
              
              {/* Mobile Top Bar Info */}
              <div className="flex flex-wrap items-center gap-3 pb-3 border-b border-gray-100">
                <a
                  href="https://www.instagram.com/p/C33VcCDyGS2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"
                >
                  <LiaInstagram className="text-xl text-blue-600" />
                </a>
                
                <div className="flex items-center gap-2">
                  <BiPhone className="text-blue-500 text-sm" />
                  <a href="tel:+918610810041" className="text-sm text-gray-600">
                    +91 86108 10041
                  </a>
                </div>
                
                <div className="flex items-center gap-2">
                  <MdOutlineEmail className="text-blue-500 text-sm" />
                  <span className="text-xs text-gray-600 truncate">
                    zibralhealthcare2021@gmail.com
                  </span>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <Link
                href="/"
                onClick={toggleMenu}
                className="py-2 text-gray-700 hover:text-blue-600 transition font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={toggleMenu}
                className="py-2 text-gray-700 hover:text-blue-600 transition font-medium"
              >
                About
              </Link>
              <Link
                href="/products"
                onClick={toggleMenu}
                className="py-2 text-gray-700 hover:text-blue-600 transition font-medium"
              >
                Products
              </Link>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="py-2 text-gray-700 hover:text-blue-600 transition font-medium"
              >
                Contact
              </Link>

              {/* Mobile Location */}
              <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                <HiOutlineLocationMarker className="text-blue-500 text-sm" />
                <span className="text-xs text-gray-500">Coimbatore, Tamil Nadu</span>
              </div>

              {/* Mobile CTA Button */}
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center font-medium text-sm"
              >
                Reach Us
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Spacer - Adjusted for mobile */}
      <div className="h-16 md:h-[136px]" />
    </>
  );
}