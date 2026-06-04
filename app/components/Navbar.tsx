"use client";

import Link from "next/link";
import Image from "next/image";
import { LiaFacebook, LiaInstagram, LiaTwitter } from "react-icons/lia";
import { BsMailbox } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";

export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">

        {/* ================= TOP BAR ================= */}
        <div className="w-full h-14 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="flex items-center justify-between h-full px-5">

            {/* Left Side */}
            <div className="flex ml-6 items-center gap-2">
              {/* Connect With Us text with icon */}
              <span className="text-sm font-medium">Connect With Us</span>
              
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/p/C33VcCDyGS2/?igsh=MW5kNmphcjVjaHJlcg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                <LiaInstagram className="text-xl" />
              </a>

              {/* Divider */}
              <div className="w-[2px] h-6 bg-white/50 mx-2"></div>

              {/* Email with icon */}
              <MdOutlineEmail className="text-lg" />
              <span className="text-sm tracking-wide">
                zibralhealthcare2021@gmail.com
              </span>

            </div>

            {/* Right Side - Location and Call Button */}
            <div className="flex items-center gap-4 mr-4 text-sm">
              {/* Location with icon */}
              <div className="flex items-center gap-2">
                <HiOutlineLocationMarker className="text-xl" />
                <span>Coimbatore, Tamil Nadu</span>
              </div>

              {/* Divider */}
              <div className="w-[2px] h-6 bg-white/50 mx-1"></div>

              {/* Call Button - Direct phone call */}
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
        <nav className="h-20 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-between h-full px-10">

            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src="/logoo.png"
                  alt="Zibral Healthcare"
                  width={60}
                  height={55}
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-blue-700 leading-none">
                  Zibral
                </h1>

                <p className="text-xs uppercase tracking-[4px] text-gray-500 mt-1">
                  Healthcare
                </p>
              </div>
            </Link>

            {/* Menu */}
            <ul className="flex items-center gap-12 font-medium">
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

            {/* Right Side */}
            <div className="flex items-center gap-4">

              {/* Quality Badge */}
              <div className="hidden xl:flex flex-col items-end">
                <span className="text-xs text-gray-500">
                  Trusted Healthcare
                </span>
                <span className="font-semibold text-blue-700">
                  Quality Assured
                </span>
              </div>

              {/* Reach Us */}
              <Link
                href="/contact"
                className="
                  px-7
                  py-3
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  to-blue-600
                  text-white
                  font-medium
                  shadow-lg
                  shadow-blue-200
                  hover:shadow-blue-300
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >
                Reach Us
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer */}
      <div className="h-[136px]" />
    </>
  );
}