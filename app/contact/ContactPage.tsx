"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

import { BiPhone } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LiaInstagram } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isHighlighted, setIsHighlighted] = useState(false);
  
  const formRef = useRef<HTMLDivElement>(null);

  // Listen for custom event from navbar to scroll to form
  useEffect(() => {
    const handleScrollToForm = () => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        setIsHighlighted(true);
        setTimeout(() => setIsHighlighted(false), 2000);
      }
    };

    window.addEventListener("scrollToContactForm", handleScrollToForm);
    
    return () => {
      window.removeEventListener("scrollToContactForm", handleScrollToForm);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Google Maps embed URL
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.911017538012!2d76.96804850000001!3d10.970088900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859809a932fe3%3A0x1becc5c1a3eb7308!2sCity%20Centre%20Lodge!5e0!3m2!1sen!2sin!4v1780638693251!5m2!1sen!2sin";

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50/30 via-white to-emerald-50/20">
      <Navbar />
      
{/* Animated Background Blobs - Dark Green Theme */}
{/* Animated Background Blobs - Dark Green Theme */}
<div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
  <motion.div
    className="absolute top-20 -left-20 w-96 h-96 bg-green-500/20 rounded-full mix-blend-multiply filter blur-3xl"
    animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute bottom-20 -right-20 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-3xl"
    animate={{ x: [0, -80, 0], y: [0, 100, 0] }}
    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-400/10 rounded-full filter blur-3xl"
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
  />
</div>

{/* Hero Section - Dark Green Theme */}
<section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
    >
      Contact Us
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
    >
      Get in touch with our team for inquiries, support, or partnership opportunities.
      We're here to help you with your healthcare needs.
    </motion.p>
  </div>
</section>

{/* Contact Content */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    
    {/* Contact Information Cards - Dark Green Shade */}
    <div className="lg:col-span-1 space-y-6">
      
      {/* Address Card */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="group relative transition-all duration-300 hover:-translate-y-1"
      >
        <div className="relative bg-green-900 rounded-2xl p-6 border border-green-700 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-800 rounded-xl">
                <HiOutlineLocationMarker className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">Register Office</h3>
                <p className="text-gray-300 mt-1 leading-relaxed text-sm">
                  B6, Ms nagar, Podanur Main Rd, <br />
                  Kurichi Pirivu, Coimbatore, <br />
                  Tamil Nadu 641023
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-800 rounded-xl">
                <HiOutlineLocationMarker className="w-6 h-6 text-green-400" />
              </div>
              <div>
  
                <p className="text-gray-300 mt-1 leading-relaxed text-sm">
                  Plot No.26, <br />
                  Lotus Colony, H Block <br />
                  Govandi, Mumbai - 400043
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 h-0.5 w-12 rounded-full bg-green-500 group-hover:w-24 transition-all duration-300"></div>
        </div>
      </motion.div>

      {/* Contact Details Card */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="group relative transition-all duration-300 hover:-translate-y-1"
      >
        <div className="relative bg-green-900 rounded-2xl p-6 border border-green-700 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-800 rounded-xl">
                <BiPhone className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">Call Us</h3>
                <p className="text-gray-300 mt-1">Main: +91 86108 10041</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-800 rounded-xl">
                <MdOutlineEmail className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">Email Us</h3>
                <p className="text-gray-300 mt-1">
                  zibralhealthcare2021@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 h-0.5 w-12 rounded-full bg-green-500 group-hover:w-24 transition-all duration-300"></div>
        </div>
      </motion.div>

      {/* Business Hours Card */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="group relative transition-all duration-300 hover:-translate-y-1"
      >
        <div className="relative bg-green-900 rounded-2xl p-6 border border-green-700 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-800 rounded-xl">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-white text-lg">Business Hours</h3>
              <div className="text-gray-300 mt-1 space-y-1 text-sm">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="mt-4 h-0.5 w-12 rounded-full bg-green-500 group-hover:w-24 transition-all duration-300"></div>
        </div>
      </motion.div>
    </div>

    {/* Contact Form and Map - Dark Green Shade */}
    <div className="lg:col-span-2 space-y-8">
      
      {/* Contact Form */}
      <div
        ref={formRef}
        className={`relative bg-green-200 rounded-2xl p-6 md:p-8 border border-green-700 shadow-lg transition-all duration-500 ${
          isHighlighted ? "ring-4 ring-green-500 ring-offset-2 ring-offset-green-900 scale-[1.01]" : ""
        }`}
      >
        <h2 className="text-2xl font-bold text-black mb-6">Send us a Message</h2>
        
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-800 border border-green-600 rounded-xl text-green-300"
          >
            ✓ Thank you for your message! We'll get back to you within 24 hours.
          </motion.div>
        )}

        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-900/80 border border-red-700 rounded-xl text-red-300"
          >
            ⚠️ {errorMessage}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-green-700 bg-green-100/50 text-black placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-green-700 bg-green-100/50 text-black placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-green-700 bg-green-100/50 text-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            >
              <option value="" className="bg-green-200">Select a subject</option>
              <option value="General Inquiry" className="bg-green-200">General Inquiry</option>
              <option value="Product Information" className="bg-green-200">Product Information</option>
              <option value="Order Support" className="bg-green-200">Order Support</option>
              <option value="Partnership" className="bg-green-200">Partnership Opportunity</option>
              <option value="Technical Support" className="bg-green-200">Technical Support</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-green-700 bg-green-100/50 text-black placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
              placeholder="Please provide details about your inquiry..."
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>
        
        {/* Bottom accent line */}
        <div className="mt-6 h-0.5 w-16 rounded-full bg-green-500 mx-auto group-hover:w-32 transition-all duration-500"></div>
      </div>

      {/* Google Map Integration */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative bg-green-900 rounded-2xl p-6 border border-green-700 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
      >
        <h2 className="text-2xl font-bold text-white mb-4">Find Us Here</h2>
        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Office Location Map - Coimbatore"
          ></iframe>
        </div>
        <div className="mt-4 text-center text-gray-300 text-sm">
          <p>📍 B6, Ms nagar, Podanur Main Rd, Kurichi Pirivu, Coimbatore, Tamil Nadu 641023</p>
        </div>
        <div className="mt-4 h-0.5 w-12 rounded-full bg-green-500 mx-auto group-hover:w-24 transition-all duration-300"></div>
      </motion.div>
    </div>
  </div>
</section>

<footer className="bg-[#013220] border-t border-emerald-800/20">
  <div className="max-w-[1600px] mx-auto px-8 lg:px-12 py-12">

    {/* Main Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[180px_220px_260px_1fr] gap-12 items-start">

      {/* Logo */}
      <div className="pt-2">
        <Image
          src="/footer-logo.png"
          alt="Zibral Healthcare"
          width={140}
          height={140}
          className="object-contain"
        />
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-6">
          Quick Links
        </h3>

        <ul className="space-y-4">
          <li>
            <Link
              href="/"
              className="text-gray-400 text-sm hover:text-green-400 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="text-gray-400 text-sm hover:text-green-400 transition"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              href="/products"
              className="text-gray-400 text-sm hover:text-green-400 transition"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="text-gray-400 text-sm hover:text-green-400 transition"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Product Categories */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-6">
          Product Categories
        </h3>

        <ul className="space-y-4">
          <li>
            <Link
              href="/products?category=Tablets"
              className="text-gray-400 text-sm hover:text-green-400 transition"
            >
              Tablets
            </Link>
          </li>

          <li>
            <Link
              href="/products?category=Capsules"
              className="text-gray-400 text-sm hover:text-green-400 transition"
            >
              Capsules
            </Link>
          </li>

          <li>
            <Link
              href="/products?category=Syrups"
              className="text-gray-400 text-sm hover:text-green-400 transition"
            >
              Syrups
            </Link>
          </li>

          <li>
            <Link
              href="/products?category=Injectables"
              className="text-gray-400 text-sm hover:text-green-400 transition"
            >
              Injectables
            </Link>
          </li>

          <li>
            <Link
              href="/products?category=Supplements"
              className="text-gray-400 text-sm hover:text-green-400 transition"
            >
              Healthcare Solutions
            </Link>
          </li>
        </ul>
      </div>

      {/* Contact Information */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-6">
          Contact Information
        </h3>

        <div className="bg-[#0c4033] border border-emerald-700/20 rounded-2xl p-4">

          {/* Top Row */}
          <div className="flex justify-between items-start gap-4">

            <div className="space-y-3">

              <div className="flex items-center gap-3">
                <MdOutlineEmail className="text-green-400 text-lg flex-shrink-0" />
                <a
                  href="mailto:zibralhealthcare2021@gmail.com"
                  className="text-gray-300 text-xs hover:text-green-400 transition"
                >
                  zibralhealthcare2021@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <BiPhone className="text-green-400 text-lg flex-shrink-0" />
                <a
                  href="tel:+918610810041"
                  className="text-gray-300 text-xs hover:text-green-400 transition"
                >
                  +91 86108 10041
                </a>
              </div>

            </div>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/zibral_healthcare_2021/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <img
                src="/insta1.png"
                alt="Instagram"
                className="w-10 h-10 object-contain"
              />

              <span className="text-white text-xs font-medium mt-1">
                Connect Us
              </span>
            </a>

          </div>

          {/* Address Cards */}
          <div className="grid md:grid-cols-2 gap-3 mt-4">

            {/* Office 1 */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-xl p-3 border border-transparent hover:border-green-500 transition"
            >
              <div className="flex gap-2">
                <HiOutlineLocationMarker className="text-green-400 text-lg mt-1 flex-shrink-0" />

                <div className="text-gray-300 text-xs leading-5">
                  <h4 className="text-white font-medium mb-1">
                    Register Office
                  </h4>

                  B6, Ms Nagar,
                  Podanur Main Rd,
                  Kurichi Pirivu,
                  Coimbatore,
                  Tamil Nadu 641023
                </div>
              </div>
            </a>

            {/* Office 2 */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-xl p-3 border border-transparent hover:border-green-500 transition"
            >
              <div className="flex gap-2">
                <HiOutlineLocationMarker className="text-green-400 text-lg mt-1 flex-shrink-0" />

                <div className="text-gray-300 text-xs leading-5">
                  <h4 className="text-white font-medium mb-1">
                    Branch Office
                  </h4>

                  Plot No.26,
                  Lotus Colony,
                  H Block,
                  Mumbai
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="border-t border-emerald-800/30 mt-10 pt-5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">

        <p className="text-[#7e918b] text-xs">
          © 2026 Zibral Healthcare. All Rights Reserved.
        </p>

        <Link
          href="https://blackstoneinfomatics.com/"
          target="_blank"
          className="text-[#7e918b] text-xs hover:text-green-400 transition"
        >
          Powered By BlackStone Informatics
        </Link>

      </div>
    </div>

  </div>
</footer>
    </main>
  );
}