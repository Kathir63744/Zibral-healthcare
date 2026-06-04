"use client";

import React from "react";

import { BiPhone } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";
import { LiaFacebook, LiaInstagram, LiaTwitter } from "react-icons/lia";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";

export default function AboutPage() {
  const values = [
    "Integrity",
    "Innovation",
    "Quality",
    "Trust",
    "Commitment",
    "Excellence",
  ];

  const stats = [
    { value: "5+", label: "Products" },
    { value: "10+", label: "Years Experience" },
    { value: "100+", label: "Healthcare Partners" },
    { value: "25+", label: "Cities Served" },
  ];

  const coreValues = [
  {
    icon: "🛡️",
    title: "Quality First",
    desc: "We never compromise on quality, safety, and compliance. Every product is developed and delivered with rigorous quality standards to ensure reliability and patient confidence."
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "Through continuous research, scientific advancement, and product development, we strive to create innovative healthcare solutions that address evolving medical needs."
  },
  {
    icon: "🤝",
    title: "Integrity",
    desc: "We conduct our business with honesty, transparency, and ethical practices, building trust with healthcare professionals, partners, and communities."
  },
  {
    icon: "❤️",
    title: "Patient Care",
    desc: "Patient well-being remains at the heart of everything we do. Our commitment is to provide safe, effective, and accessible healthcare solutions that improve lives."
  },
  {
    icon: "🌟",
    title: "Customer Satisfaction",
    desc: "We focus on understanding customer needs and delivering exceptional service, fostering long-term relationships built on trust, reliability, and support."
  },
  {
    icon: "🏆",
    title: "Excellence",
    desc: "We continuously strive for excellence in our products, processes, and performance, ensuring the highest standards across every aspect of our organization."
  }
];

  return (
    <main className="overflow-hidden bg-white">
        <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-flex px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            About Our Company
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Advancing Healthcare
            <br />
            Through Innovation
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
            Delivering trusted pharmaceutical solutions with a commitment
            to quality, research, and patient well-being across every
            stage of healthcare.
          </p>
        </div>
      </section>

        {/* Why Choose Zibral Healthcare - Minimal & Compact */}
<section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
  <div className="max-w-6xl mx-auto px-4">

    {/* Heading - Compact */}
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] bg-clip-text text-transparent">
        Why Choose Zibral Healthcare?
      </h2>
      <p className="mt-2 text-lg text-slate-500">
        Quality-driven healthcare solutions trusted worldwide
      </p>
    </div>

    {/* Features Grid - Compact Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      
      {[
        { title: "Quality-driven", icon: "✓" },
        { title: "Scientifically Developed", icon: "🔬" },
        { title: "Patient-centric Approach", icon: "❤️" },
        { title: "Ethical & Transparent", icon: "🤝" },
        { title: "Reliable Supply Chain", icon: "🚚" },
        { title: "Continuous Innovation", icon: "💡" }
      ].map((item) => (
        <div 
          key={item.title} 
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/70 backdrop-blur-sm border border-blue-100 hover:border-blue-200 hover:bg-white transition-all duration-200"
        >
          <span className="text-blue-500 text-md">{item.icon}</span>
          <span className="text-lg md:text-lg text-slate-700 font-medium">{item.title}</span>
        </div>
      ))}

    </div>

  </div>
</section>


<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-white to-blue-50/40 p-8 lg:p-12">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Item 1 - 5+ Years Experience */}
        <div className="text-center group">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Image
                src="/c3.png"
                alt="Years Experience"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
          </div>
          <h3 className="text-4xl lg:text-4xl font-bold text-blue-600">5+</h3>
          <p className="mt-2 text-slate-500 font-medium text-md">Years Experience</p>
        </div>

        {/* Item 2 - 4 States */}
        <div className="text-center group lg:border-l lg:border-slate-200">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Image
                src="/c22.png"
                alt="States"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
          </div>
          <h3 className="text-4xl lg:text-4xl font-bold text-blue-600">4</h3>
          <p className="mt-2 text-slate-500 font-medium text-md">States</p>
        </div>

        {/* Item 3 - 100+ Products */}
        <div className="text-center group lg:border-l lg:border-slate-200">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Image
                src="/c33.png"
                alt="Products"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
          </div>
          <h3 className="text-4xl lg:text-4xl font-bold text-blue-600">100+</h3>
          <p className="mt-2 text-slate-500 font-medium text-md">Products</p>
        </div>

        {/* Item 4 - GMP Certified - Matching height with invisible heading */}
        <div className="text-center group lg:border-l lg:border-slate-200">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Image
                src="/c4.png"
                alt="GMP Certified"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
          </div>
          {/* Invisible heading to match height with other boxes */}
          <h3 className="text-4xl lg:text-4xl font-bold text-blue-600 select-none">Certified</h3>
          <p className="mt-2 text-slate-500 font-medium text-md">Good Manufacturing Practice</p>
        </div>

      </div>

    </div>

  </div>
</section>

{/* WHO WE ARE */}
<section className="py-24">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Side - Image */}
    <div className="relative">
      <div className="rounded-[40px] overflow-hidden bg-gradient-to-br from-blue-100 to-sky-100 h-[450px] flex items-center justify-center">
        <Image
          src="/about-image.png"
          alt="Who We Are - Zibral Healthcare"
          width={600}
          height={450}
          className="object-cover w-full h-full"
        />
      </div>
    </div>

    {/* Right Side - Content */}
    <div>
      <span className="text-blue-600 font-semibold uppercase tracking-[3px]">
        Who We Are
      </span>

      <h2 className="mt-4 text-4xl font-bold text-gray-900">
        Building a Healthier Future
      </h2>

      <p className="mt-6 text-gray-600 leading-8">
        We are a healthcare-focused pharmaceutical company dedicated
        to developing and delivering innovative, effective, and
        affordable medical solutions. Our commitment to research,
        quality, and ethical practices enables us to support
        healthcare professionals and patients with trusted products.
      </p>

      <p className="mt-4 text-gray-600 leading-8">
        Through continuous innovation and rigorous quality
        standards, we strive to improve health outcomes and create
        long-term value for communities worldwide.
      </p>
    </div>
    
  </div>
</section>

{/* WHAT WE DO */}
<section className="py-24 bg-gradient-to-b from-white to-blue-50/50">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
        Our Expertise
      </span>

      <h2 className="mt-5 text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] bg-clip-text text-transparent">
        What We Do
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">
        We combine innovation, quality, and healthcare expertise to develop
        trusted pharmaceutical solutions that improve patient outcomes.
      </p>
    </div>

    {/* Cards - Fixed height for perfect parallel alignment */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

      {[
        {
          title: "Research & Development",
          icon: "🧪",
          desc: "Developing innovative formulations through scientific research and continuous product advancement."
        },
        {
          title: "Manufacturing Excellence",
          icon: "🏭",
          desc: "Maintaining world-class production standards with precision, consistency, and compliance."
        },
        {
          title: "Quality Assurance",
          icon: "🛡️",
          desc: "Ensuring every product meets stringent quality, safety, and regulatory requirements."
        },
        {
          title: "Healthcare Distribution",
          icon: "🌍",
          desc: "Delivering trusted healthcare products efficiently through a strong distribution network."
        }
      ].map((item) => (
        <div
          key={item.title}
          className="
            group
            relative
            overflow-hidden
            rounded-[30px]
            bg-white
            p-8
            border border-blue-100
            shadow-sm
            hover:shadow-xl
            hover:-translate-y-2
            transition-all
            duration-300
            flex
            flex-col
            h-full
            min-h-[320px]
          "
        >
          {/* Glow */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

          {/* Icon - Fixed size */}
          <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl mb-6 flex-shrink-0">
            {item.icon}
          </div>

          {/* Content - Flex grow to push bottom accent down */}
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              {item.desc}
            </p>
          </div>

          {/* Bottom Accent - Fixed at bottom */}
          <div className="mt-6 h-1 w-12 rounded-full bg-blue-500 group-hover:w-20 transition-all duration-300"></div>
        </div>
      ))}

    </div>

  </div>
</section>


<footer className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 border-t border-slate-200">
  
  {/* Background Effects */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl"></div>

  <div className="relative px-8 py-16">
    {/* Main Footer Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* Company Info */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <Image
            src="/logo.png"
            alt="Zibral Healthcare"
            width={70}
            height={70}
            className="object-contain"
          />

          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Zibral
            </h3>

            <p className="uppercase tracking-[4px] text-xs text-blue-600">
              Healthcare
            </p>
          </div>
        </div>

        <p className="text-slate-600 leading-8">
          Delivering trusted pharmaceutical and healthcare solutions
          through innovation, quality, and excellence. We are committed
          to improving lives through reliable and affordable healthcare
          products.
        </p>

        {/* Social Icons */}
        <div className="flex gap-3 mt-6">
          <a
            href="https://www.instagram.com/p/C33VcCDyGS2/?igsh=MW5kNmphcjVjaHJlcg=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
          >
            <LiaInstagram className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-6">
          Quick Links
        </h3>

        <ul className="space-y-4">
          <li>
            <Link
              href="/"
              className="text-slate-600 hover:text-blue-600 transition-all duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="text-slate-600 hover:text-blue-600 transition-all duration-300"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              href="/products"
              className="text-slate-600 hover:text-blue-600 transition-all duration-300"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="text-slate-600 hover:text-blue-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Products */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-6">
          Product Categories
        </h3>

        <ul className="space-y-4 text-slate-600">
          <li>
            <Link href="/products?category=Tablets" className="hover:text-blue-600 transition-all duration-300">
              Tablets
            </Link>
          </li>
          <li>
            <Link href="/products?category=Capsules" className="hover:text-blue-600 transition-all duration-300">
              Capsules
            </Link>
          </li>
          <li>
            <Link href="/products?category=Syrups" className="hover:text-blue-600 transition-all duration-300">
              Syrups
            </Link>
          </li>
          <li>
            <Link href="/products?category=Injectables" className="hover:text-blue-600 transition-all duration-300">
              Injectables
            </Link>
          </li>
          <li>
            <Link href="/products?category=Supplements" className="hover:text-blue-600 transition-all duration-300">
              Healthcare Solutions
            </Link>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-6">
          Contact Information
        </h3>

        <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 space-y-5 shadow-sm">

          <div className="flex items-start gap-3">
            <MdOutlineEmail className="text-2xl text-blue-600 mt-1 flex-shrink-0" />
            <a href="mailto:info@zibralhealthcare.com" className="text-slate-600 hover:text-blue-600 transition-all duration-300">             
        zibralhealthcare2021@gmail.com
            </a>
          </div>

          <div className="flex items-start gap-3">
            <BiPhone className="text-2xl text-blue-600 mt-1 flex-shrink-0" />
            <a href="tel:+91XXXXXXXXX" className="text-slate-600 hover:text-blue-600 transition-all duration-300">
              +91 86108 10041
            </a>
          </div>

          <div className="flex items-start gap-3">
            <HiOutlineLocationMarker className="text-2xl text-blue-600 mt-1 flex-shrink-0" />
            <a 
              href="https://maps.google.com/?q=Govandi+Mumbai+Maharashtra+India" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 transition-all duration-300"
            >
              B6, Ms nagar, Podanur Main Rd, <br/> Kurichi Pirivu, Coimbatore, Tamil Nadu 641023
            </a>
          </div>

        </div>
      </div>

    </div>

    {/* Divider */}
    <div className="border-t border-slate-200 mt-12 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-slate-500 text-sm">
          © 2026 Zibral Healthcare. All Rights Reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <Link
            href="/privacy-policy"
            className="text-slate-500 hover:text-blue-600 transition"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms-conditions"
            className="text-slate-500 hover:text-blue-600 transition"
          >
            Terms & Conditions
          </Link>
        </div>

      </div>
    </div>
  </div>
</footer>
    </main>
  );
}