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
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          className="absolute top-20 -left-20 w-72 h-72 md:w-96 md:h-96 bg-green-500/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-72 h-72 md:w-96 md:h-96 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ x: [0, -80, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[500px] md:h-[500px] bg-green-400/10 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero Section - Responsive */}
      <section className="relative pt-4 pb-8 md:pt-4 md:pb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-4"
          >
            Get in touch with our team for inquiries, support, or partnership opportunities.
            We're here to help you with your healthcare needs.
          </motion.p>
        </div>
      </section>

      {/* Contact Content - Responsive Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        {/* Responsive grid: mobile = 1 column, desktop = 3 columns with 1/3 - 2/3 ratio */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          
          {/* LEFT COLUMN: Address Cards - Full width on mobile, 1/3 on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 bg-white rounded-xl md:rounded-2xl border border-green-100 shadow-[0_0_40px_rgba(0,0,0,0.22)] overflow-hidden flex flex-col"
          >
            {/* Register Office Section - Responsive padding */}
            <div className="bg-[#04692B] m-3 md:m-4 rounded-lg md:rounded-xl p-3 md:p-4">
              <div className="flex items-start gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-9 md:h-9 bg-[#087B35] rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiOutlineLocationMarker className="w-4 h-4 text-[#00FF66]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-sm md:text-base mb-1 md:mb-1.5">Register Office</h3>
                  <p className="text-green-100 text-xs md:text-sm leading-relaxed">
                    B6, Ms nagar, Podanur Main Rd,<br />
                    Kurichi Pirivu, Coimbatore,<br />
                    Tamil Nadu 641023
                  </p>
                  <p className="text-green-100 text-xs md:text-sm leading-relaxed mt-2 md:mt-3">
                    Plot No.26,<br />
                    Lotus Colony, H Block<br />
                    Govandi, Mumbai - 400043
                  </p>
                </div>
              </div>
              <div className="mt-2 md:mt-3 h-[2px] w-8 md:w-10 rounded-full bg-[#00FF66]" />
            </div>

            {/* Call & Email Section */}
            <div className="bg-[#04692B] m-3 md:m-4 rounded-lg md:rounded-xl p-3 md:p-4">
              <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-9 md:h-9 bg-[#087B35] rounded-lg flex items-center justify-center flex-shrink-0">
                  <BiPhone className="w-4 h-4 text-[#00FF66]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm md:text-base mb-0.5">Call Us</h3>
                  <p className="text-green-100 text-xs md:text-sm">Main: +91 86108 10041</p>
                </div>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-9 md:h-9 bg-[#087B35] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MdOutlineEmail className="w-4 h-4 text-[#00FF66]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm md:text-base mb-0.5">Email Us</h3>
                  <p className="text-green-100 text-xs md:text-sm break-all">zibralhealthcare2021@gmail.com</p>
                </div>
              </div>
              <div className="mt-2 md:mt-3 h-[2px] w-8 md:w-10 rounded-full bg-[#00FF66]" />
            </div>

            {/* Business Hours Section - Stretches to fill space */}
            <div className="bg-[#04692B] m-3 md:m-4 rounded-lg md:rounded-xl p-3 md:p-4 flex-1">
              <div className="flex items-start gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-9 md:h-9 bg-[#087B35] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#00FF66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-sm md:text-base mb-1 md:mb-1.5">Business Hours</h3>
                  <div className="text-green-100 text-xs md:text-sm space-y-0.5">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <div className="mt-2 md:mt-3 h-[2px] w-8 md:w-10 rounded-full bg-[#00FF66]" />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Contact Form - Full width on mobile, 2/3 on desktop */}
          <div
            ref={formRef}
            className={`lg:col-span-2 relative bg-white rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 border border-green-100 shadow-[0_0_40px_rgba(0,0,0,0.22)] transition-all duration-500 flex flex-col ${
              isHighlighted ? "ring-4 ring-green-500 ring-offset-2 ring-offset-green-900 scale-[1.01]" : ""
            }`}
          >
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6">Send us a Message</h2>
            
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-2 md:p-3 bg-green-800 border border-green-600 rounded-lg md:rounded-xl text-green-300 text-xs md:text-sm"
              >
                ✓ Thank you for your message! We'll get back to you within 24 hours.
              </motion.div>
            )}

            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-2 md:p-3 bg-red-900/80 border border-red-700 rounded-lg md:rounded-xl text-red-300 text-xs md:text-sm"
              >
                ⚠️ {errorMessage}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
              {/* Responsive 2-column grid for name and email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1.5 md:mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-green-600 bg-green-100/50 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm md:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1.5 md:mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-green-600 bg-green-100/50 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm md:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-4 md:mb-5">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-1.5 md:mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-green-600 bg-green-100/50 text-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-sm md:text-base"
                >
                  <option value="" className="bg-green-200">Select a subject</option>
                  <option value="General Inquiry" className="bg-green-200">General Inquiry</option>
                  <option value="Product Information" className="bg-green-200">Product Information</option>
                  <option value="Order Support" className="bg-green-200">Order Support</option>
                  <option value="Partnership" className="bg-green-200">Partnership Opportunity</option>
                  <option value="Technical Support" className="bg-green-200">Technical Support</option>
                </select>
              </div>

              <div className="flex-1 mb-4 md:mb-5">
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1.5 md:mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-[200px] min-h-[200px] md:min-h-[120px] px-3 md:px-4 py-2 md:py-3 rounded-lg border border-green-600 bg-green-100/50 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none text-sm md:text-base"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-2.5 md:py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed text-sm md:text-base"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
          </div>
        </div>

        {/* Google Map Integration - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <h2 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">Find Us Here</h2>
          <div className="rounded-lg md:rounded-xl overflow-hidden shadow-md">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full md:h-[350px]"
              title="Office Location Map - Coimbatore"
            ></iframe>
          </div>
          <div className="mt-3 md:mt-4 text-center text-gray-800 text-xs md:text-sm">
            <p>📍 B6, Ms nagar, Podanur Main Rd, Kurichi Pirivu, Coimbatore, Tamil Nadu 641023</p>
          </div>
          <div className="mt-3 md:mt-4 h-0.5 w-10 md:w-12 rounded-full bg-green-500 mx-auto group-hover:w-16 md:group-hover:w-24 transition-all duration-300"></div>
        </motion.div>
      </section>

      {/* Footer - Already responsive, keeping as is */}
      <footer className="bg-[#013220] border-t border-emerald-800/20">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">
          {/* Main Grid - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[180px_220px_260px_1fr] gap-8 md:gap-12 items-start">
            {/* Logo */}
            <div className="pt-2 flex justify-center md:justify-start">
              <Image
                src="/footer-logo.png"
                alt="Zibral Healthcare"
                width={120}
                height={120}
                className="object-contain md:w-[140px] md:h-[140px]"
              />
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-base md:text-lg mb-4 md:mb-6">Quick Links</h3>
              <ul className="space-y-2 md:space-y-4">
                <li><Link href="/" className="text-gray-400 text-xs md:text-sm hover:text-green-400 transition">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 text-xs md:text-sm hover:text-green-400 transition">About Us</Link></li>
                <li><Link href="/products" className="text-gray-400 text-xs md:text-sm hover:text-green-400 transition">Products</Link></li>
                <li><Link href="/contact" className="text-gray-400 text-xs md:text-sm hover:text-green-400 transition">Contact Us</Link></li>
              </ul>
            </div>

            {/* Product Categories */}
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-base md:text-lg mb-4 md:mb-6">Product Categories</h3>
              <ul className="space-y-2 md:space-y-4">
                <li><Link href="/products?category=Tablets" className="text-gray-400 text-xs md:text-sm hover:text-green-400 transition">Tablets</Link></li>
                <li><Link href="/products?category=Capsules" className="text-gray-400 text-xs md:text-sm hover:text-green-400 transition">Capsules</Link></li>
                <li><Link href="/products?category=Syrups" className="text-gray-400 text-xs md:text-sm hover:text-green-400 transition">Syrups</Link></li>
                <li><Link href="/products?category=Injectables" className="text-gray-400 text-xs md:text-sm hover:text-green-400 transition">Injectables</Link></li>
                <li><Link href="/products?category=Supplements" className="text-gray-400 text-xs md:text-sm hover:text-green-400 transition">Healthcare Solutions</Link></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-white font-semibold text-base md:text-lg mb-4 md:mb-6 text-center md:text-left">Contact Information</h3>
              <div className="bg-[#0c4033] border border-emerald-700/20 rounded-xl md:rounded-2xl p-3 md:p-4">
                <div className="flex justify-between items-start gap-3 md:gap-4">
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center gap-2 md:gap-3">
                      <MdOutlineEmail className="text-green-400 text-base md:text-lg flex-shrink-0" />
                      <a href="mailto:zibralhealthcare2021@gmail.com" className="text-gray-300 text-xs hover:text-green-400 transition break-all">
                        zibralhealthcare2021@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                      <BiPhone className="text-green-400 text-base md:text-lg flex-shrink-0" />
                      <a href="tel:+918610810041" className="text-gray-300 text-xs hover:text-green-400 transition">
                        +91 86108 10041
                      </a>
                    </div>
                  </div>
                  <a href="https://www.instagram.com/zibral_healthcare_2021/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                    <img src="/insta1.png" alt="Instagram" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                    <span className="text-white text-xs font-medium mt-1">Connect Us</span>
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mt-3 md:mt-4">
                  <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.911017538012!2d76.96804850000001!3d10.970088900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859809a932fe3%3A0x1becc5c1a3eb7308!2sCity%20Centre%20Lodge!5e0!3m2!1sen!2sin!4v1780638693251!5m2!1sen!2sin" target="_blank" rel="noopener noreferrer" className="bg-black rounded-lg md:rounded-xl p-2 md:p-3 border border-transparent hover:border-green-500 transition">
                    <div className="flex gap-2">
                      <HiOutlineLocationMarker className="text-green-400 text-base md:text-lg mt-0.5 flex-shrink-0" />
                      <div className="text-gray-300 text-xs leading-4 md:leading-5">
                        <h4 className="text-white font-medium mb-0.5 md:mb-1 text-xs md:text-sm">Register Office</h4>
                        B6, Ms Nagar, Podanur Main Rd, Kurichi Pirivu, Coimbatore, Tamil Nadu 641023
                      </div>
                    </div>
                  </a>
                  <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30169.95814358246!2d72.89751488490506!3d19.05297297228209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6143538ad4b%3A0xf34f6cb0ef37b97e!2sShop%20no%201557%2C%20H%20&#39;Block%2C%20Plot%20no%20%3A26%2C%20Abdul%20Hamid%20Marg%2C%20Govandi%20Slums%2C%20Govandi%20West%2C%20Lotus%20Colony%2C%20Govandi%20East%2C%20Mumbai%2C%20Maharashtra%20400043!5e0!3m2!1sen!2sin!4v1781248563366!5m2!1sen!2sin" target="_blank" rel="noopener noreferrer" className="bg-black rounded-lg md:rounded-xl p-2 md:p-3 border border-transparent hover:border-green-500 transition">
                    <div className="flex gap-2">
                      <HiOutlineLocationMarker className="text-green-400 text-base md:text-lg mt-0.5 flex-shrink-0" />
                      <div className="text-gray-300 text-xs leading-4 md:leading-5">
                        <h4 className="text-white font-medium mb-0.5 md:mb-1 text-xs md:text-sm">Branch Office</h4>
                        Plot No.26, Lotus Colony, H Block, Govandi, Mumbai - 400043
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-emerald-800/30 mt-6 md:mt-10 pt-4 md:pt-5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-3">
              <p className="text-[#7e918b] text-xs">© 2026 Zibral Healthcare. All Rights Reserved.</p>
              <Link href="https://blackstoneinfomatics.com/" target="_blank" className="text-[#7e918b] text-xs hover:text-green-400 transition">
                Powered By BlackStone Informatics
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}