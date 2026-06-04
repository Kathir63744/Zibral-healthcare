"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

import { BiPhone } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LiaFacebook, LiaInstagram, LiaTwitter } from "react-icons/lia";
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  // Google Maps embed URL with correct Coimbatore location
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.319560387921!2d76.98214697480635!3d10.99825588918929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f15a45d%3A0x2e6b5f0b5e5c5e5e!2sPodanur%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eff6ff] via-white to-[#eff6ff]">
      <Navbar/>
      
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-[#93c5fd] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-[#60a5fa] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ x: [0, -80, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#dbeafe] rounded-full filter blur-3xl opacity-30"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] bg-clip-text text-transparent"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Get in touch with our team for inquiries, support, or partnership opportunities.
            We're here to help you with your healthcare needs.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#dbeafe] rounded-xl">
                  <HiOutlineLocationMarker className="w-6 h-6 text-[#2563eb]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Visit Us</h3>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    B6, Ms nagar, Podanur Main Rd, <br />
                    Kurichi Pirivu, Coimbatore, <br />
                    Tamil Nadu 641023
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Details Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#dbeafe] rounded-xl">
                    <BiPhone className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Call Us</h3>
                    <p className="text-gray-600 mt-1">
                      Main: +91 86108 10041
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#dbeafe] rounded-xl">
                    <MdOutlineEmail className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Email Us</h3>
                    <p className="text-gray-600 mt-1">
                      info@zibralhealthcare.com<br />
                      zibralhealthcare2021@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Business Hours Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#dbeafe] rounded-xl">
                  <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Business Hours</h3>
                  <div className="text-gray-600 mt-1 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form and Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}


            {/* Google Map Integration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg overflow-hidden"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Us Here</h2>
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
              <div className="mt-4 text-center text-gray-500 text-sm">
                <p>📍 B6, Ms nagar, Podanur Main Rd, Kurichi Pirivu, Coimbatore, Tamil Nadu 641023</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <h3 className="text-2xl font-bold text-slate-900">Zibral</h3>
                  <p className="uppercase tracking-[4px] text-xs text-blue-600">Healthcare</p>
                </div>
              </div>
              <p className="text-slate-600 leading-8">
                Delivering trusted pharmaceutical and healthcare solutions
                through innovation, quality, and excellence. We are committed
                to improving lives through reliable and affordable healthcare
                products.
              </p>
              <div className="flex gap-3 mt-6">
                <a
                  href="https://www.instagram.com/p/C33VcCDyGS2/"
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
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><Link href="/" className="text-slate-600 hover:text-blue-600 transition-all duration-300">Home</Link></li>
                <li><Link href="/about" className="text-slate-600 hover:text-blue-600 transition-all duration-300">About Us</Link></li>
                <li><Link href="/products" className="text-slate-600 hover:text-blue-600 transition-all duration-300">Products</Link></li>
                <li><Link href="/contact" className="text-slate-600 hover:text-blue-600 transition-all duration-300">Contact Us</Link></li>
              </ul>
            </div>

            {/* Product Categories */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Product Categories</h3>
              <ul className="space-y-4 text-slate-600">
                <li><Link href="/products?category=Tablets" className="hover:text-blue-600 transition-all duration-300">Tablets</Link></li>
                <li><Link href="/products?category=Capsules" className="hover:text-blue-600 transition-all duration-300">Capsules</Link></li>
                <li><Link href="/products?category=Syrups" className="hover:text-blue-600 transition-all duration-300">Syrups</Link></li>
                <li><Link href="/products?category=Injectables" className="hover:text-blue-600 transition-all duration-300">Injectables</Link></li>
                <li><Link href="/products?category=Supplements" className="hover:text-blue-600 transition-all duration-300">Healthcare Solutions</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Contact Information</h3>
              <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 space-y-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <MdOutlineEmail className="text-2xl text-blue-600 mt-1 flex-shrink-0" />
                  <a href="mailto:zibralhealthcare2021@gmail.com" className="text-slate-600 hover:text-blue-600 transition-all duration-300 text-sm break-all">
                    zibralhealthcare2021@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <BiPhone className="text-2xl text-blue-600 mt-1 flex-shrink-0" />
                  <a href="tel:+918610810041" className="text-slate-600 hover:text-blue-600 transition-all duration-300">
                    +91 86108 10041
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <HiOutlineLocationMarker className="text-2xl text-blue-600 mt-1 flex-shrink-0" />
                  <a 
                    href="https://maps.google.com/?q=B6+Ms+nagar+Podanur+Main+Rd+Kurichi+Pirivu+Coimbatore+Tamil+Nadu+641023" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-blue-600 transition-all duration-300 text-sm"
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
              <p className="text-slate-500 text-sm">© 2026 Zibral Healthcare. All Rights Reserved.</p>
              <div className="flex gap-6 text-sm">
                <Link href="/privacy-policy" className="text-slate-500 hover:text-blue-600 transition">Privacy Policy</Link>
                <Link href="/terms-conditions" className="text-slate-500 hover:text-blue-600 transition">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}