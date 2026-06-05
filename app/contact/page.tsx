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
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.319560387921!2d76.98214697480635!3d10.99825588918929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f15a45d%3A0x2e6b5f0b5e5c5e5e!2sPodanur%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

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
        className={`relative bg-green-900 rounded-2xl p-6 md:p-8 border border-green-700 shadow-lg transition-all duration-500 ${
          isHighlighted ? "ring-4 ring-green-500 ring-offset-2 ring-offset-green-900 scale-[1.01]" : ""
        }`}
      >
        <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
        
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
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-green-700 bg-green-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-green-700 bg-green-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-green-700 bg-green-800/50 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            >
              <option value="" className="bg-green-900">Select a subject</option>
              <option value="General Inquiry" className="bg-green-900">General Inquiry</option>
              <option value="Product Information" className="bg-green-900">Product Information</option>
              <option value="Order Support" className="bg-green-900">Order Support</option>
              <option value="Partnership" className="bg-green-900">Partnership Opportunity</option>
              <option value="Technical Support" className="bg-green-900">Technical Support</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-green-700 bg-green-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
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

<footer className="relative overflow-hidden bg-[#013220] border-t border-emerald-800/30">
  


  <div className="relative px-8 py-16">
    {/* Main Footer Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* Company Info */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <Image
            src="/logo.png"
            alt="Zibral Healthcare"
            width={130}
            height={130}
            className="object-contain brightness-110"
          />

          <div>
            <h3 className="text-2xl font-bold text-white">
              Zibral
            </h3>

            <p className="uppercase tracking-[4px] text-xs text-green-400">
              Healthcare
            </p>
          </div>
        </div>

        <p className="text-gray-300 leading-8 text-sm">
          Delivering trusted pharmaceutical and healthcare solutions
          through innovation, quality, and excellence. We are committed
          to improving lives through reliable and affordable healthcare
          products.
        </p>

        {/* Social Icons - Dark Theme */}
        <div className="flex gap-3 mt-6">
          <a
            href="https://www.instagram.com/zibral_healthcare_2021?igsh=YzVxM3prZzBxMHl1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center hover:border-green-500 hover:text-green-400 transition-all duration-300 group"
          >
            <LiaInstagram className="text-2xl text-gray-400 group-hover:text-green-400" />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-6">
          Quick Links
        </h3>

        <ul className="space-y-4">
          <li>
            <Link
              href="/"
              className="text-gray-400 hover:text-green-400 transition-all duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="text-gray-400 hover:text-green-400 transition-all duration-300"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              href="/products"
              className="text-gray-400 hover:text-green-400 transition-all duration-300"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-green-400 transition-all duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Products */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-6">
          Product Categories
        </h3>

        <ul className="space-y-4">
          <li>
            <Link href="/products?category=Tablets" className="text-gray-400 hover:text-green-400 transition-all duration-300">
              Tablets
            </Link>
          </li>
          <li>
            <Link href="/products?category=Capsules" className="text-gray-400 hover:text-green-400 transition-all duration-300">
              Capsules
            </Link>
          </li>
          <li>
            <Link href="/products?category=Syrups" className="text-gray-400 hover:text-green-400 transition-all duration-300">
              Syrups
            </Link>
          </li>
          <li>
            <Link href="/products?category=Injectables" className="text-gray-400 hover:text-green-400 transition-all duration-300">
              Injectables
            </Link>
          </li>
          <li>
            <Link href="/products?category=Supplements" className="text-gray-400 hover:text-green-400 transition-all duration-300">
              Healthcare Solutions
            </Link>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-6">
          Contact Information
        </h3>

        <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 space-y-5 shadow-sm">

          <div className="flex items-start gap-3">
            <MdOutlineEmail className="text-2xl text-green-400 mt-1 flex-shrink-0" />
            <a href="mailto:info@zibralhealthcare.com" className="text-gray-300 hover:text-green-400 transition-all duration-300 text-sm">             
              zibralhealthcare2021@gmail.com
            </a>
          </div>

          <div className="flex items-start gap-3">
            <BiPhone className="text-2xl text-green-400 mt-1 flex-shrink-0" />
            <a href="tel:+918610810041" className="text-gray-300 hover:text-green-400 transition-all duration-300 text-sm">
              +91 86108 10041
            </a>
          </div>

          <div className="flex items-start gap-3">
            <HiOutlineLocationMarker className="text-2xl text-green-400 mt-1 flex-shrink-0" />
            <a 
              href="https://maps.google.com/?q=B6+Ms+nagar+Podanur+Main+Rd+Kurichi+Pirivu+Coimbatore+Tamil+Nadu+641023" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 transition-all duration-300 text-sm leading-6"
            >
              B6, Ms nagar, Podanur Main Rd, <br/> Kurichi Pirivu, Coimbatore, Tamil Nadu 641023
            </a>
          </div>
          <div className="flex items-start gap-3">
            <HiOutlineLocationMarker className="text-2xl text-green-400 mt-1 flex-shrink-0" />
            <a 
              href="https://maps.google.com/?q=Plot+No.26,Lotus+colony+H+Block,+Mumbai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 transition-all duration-300 text-sm leading-6"
            >
              Plot No.26,Lotus colony <br/>H Block ,Govandi Mumbai -400043
            </a>
          </div>

        </div>
      </div>

    </div>

    {/* Divider */}
    <div className="border-t border-gray-800 mt-12 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-gray-500 text-sm">
          © 2026 Zibral Healthcare. All Rights Reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <Link
            href="/privacy-policy"
            className="text-gray-500 hover:text-green-400 transition"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms-conditions"
            className="text-gray-500 hover:text-green-400 transition"
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