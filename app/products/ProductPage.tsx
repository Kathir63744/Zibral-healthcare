// app/products/ProductPage.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { products, categories, Product, createSlug } from "../../lib/products";


// ============================================================================
// PRODUCT DETAIL MODAL COMPONENT
// ============================================================================

function ProductDetailModal({ 
  product, 
  isOpen, 
  onClose,
  isFullPage = false 
}: { 
  product: Product | null; 
  isOpen: boolean; 
  onClose: () => void;
  isFullPage?: boolean;
}) {
  if (!product) return null;

  // If full page mode, render as full page instead of modal
  if (isFullPage) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#eff6ff] via-white to-[#eff6ff]">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-green-700 hover:text-green-500 mb-6 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Products
          </Link>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
              <div className="relative flex items-center justify-center p-6 bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] rounded-2xl">
                <motion.div
                  className="relative w-56 h-56 md:w-64 md:h-64"
                  animate={{ y: [0, -10, 0], rotateX: [0, 5, 0], rotateY: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                >
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-green-700/20 rounded-full blur-xl" />
                  <div className="relative w-full h-full rounded-2xl" style={{ transform: "rotateX(5deg) rotateY(-5deg)", boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.25)" }}>
                    <Image src={product.image} alt={product.name} fill className="object-contain p-4 drop-shadow-2xl" />
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-col space-y-4">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-green-700 bg-[#dbeafe] rounded-full">{product.category}</span>
                  <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h2>
                  <p className="mt-1 text-sm text-gray-500 italic">{product.generic}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span>Composition: {product.composition}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Therapeutic Uses</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.uses.map((use, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 rounded-full bg-[#dbeafe] text-green-700">{use}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Key Benefits</h3>
                  <ul className="space-y-1.5">
                    {product.benefits.map((benefit, idx) => (
                      <motion.li key={idx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="flex items-center gap-2 text-gray-600 text-sm">
                        <svg className="w-4 h-4 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {product.dosage && (
                  <div className="mt-2 p-3 bg-[#dbeafe] rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-900">Dosage</h4>
                    <p className="text-sm text-gray-600">{product.dosage}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Original modal view
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 shadow-md hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
                  <div className="relative flex items-center justify-center p-6 bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] rounded-2xl">
                    <motion.div
                      className="relative w-56 h-56 md:w-64 md:h-64"
                      animate={{ y: [0, -10, 0], rotateX: [0, 5, 0], rotateY: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                    >
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-green-700/20 rounded-full blur-xl" />
                      <div className="relative w-full h-full rounded-2xl" style={{ transform: "rotateX(5deg) rotateY(-5deg)", boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.25)" }}>
                        <Image src={product.image} alt={product.name} fill className="object-contain p-4 drop-shadow-2xl" />
                      </div>
                    </motion.div>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-green-700 bg-[#dbeafe] rounded-full">{product.category}</span>
                      <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h2>
                      <p className="mt-1 text-sm text-gray-500 italic">{product.generic}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <span>Composition: {product.composition}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Therapeutic Uses</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.uses.slice(0, 4).map((use, idx) => (
                          <span key={idx} className="text-xs px-3 py-1 rounded-full bg-[#dbeafe] text-green-700">{use}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Key Benefits</h3>
                      <ul className="space-y-1.5">
                        {product.benefits.slice(0, 4).map((benefit, idx) => (
                          <motion.li key={idx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="flex items-center gap-2 text-gray-600 text-sm">
                            <svg className="w-4 h-4 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {benefit}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {product.dosage && (
                      <div className="mt-2 p-3 bg-[#dbeafe] rounded-lg">
                        <h4 className="text-sm font-semibold text-gray-900">Dosage</h4>
                        <p className="text-sm text-gray-600">{product.dosage}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

interface ProductsPageProps {
  selectedProduct?: Product | null;
  isFullPage?: boolean;
}

export default function ProductsPage({ selectedProduct: propSelectedProduct, isFullPage = false }: ProductsPageProps = {}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(propSelectedProduct || null);
  const [isModalOpen, setIsModalOpen] = useState(!!propSelectedProduct);
  const [zoomImg, setZoomImg] = useState<string | null>(null);

  // Update when propSelectedProduct changes (for full page mode)
  useEffect(() => {
    if (propSelectedProduct) {
      setSelectedProduct(propSelectedProduct);
      setIsModalOpen(true);
    }
  }, [propSelectedProduct]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    return matchesCategory;
  });

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    // Update URL with product name slug instead of ID
    if (typeof window !== 'undefined') {
      const slug = createSlug(product.name);
      window.history.pushState({}, '', `/products/${slug}`);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
    // If in full page mode, navigate back to products
    if (isFullPage && typeof window !== 'undefined') {
      window.history.pushState({}, '', '/products');
    }
  };

  // If isFullPage and no selectedProduct, show not found
  if (isFullPage && !selectedProduct) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#eff6ff] via-white to-[#eff6ff]">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-700">Product not found</h1>
          <Link href="/products" className="mt-4 inline-block text-green-700 hover:text-green-500">
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eff6ff] via-white to-[#eff6ff]">
      <Navbar />
      
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div className="absolute top-20 -left-20 w-96 h-96 bg-[#93c5fd] rounded-full mix-blend-multiply filter blur-3xl opacity-20" animate={{ x: [0, 100, 0], y: [0, 50, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#60a5fa] rounded-full mix-blend-multiply filter blur-3xl opacity-20" animate={{ x: [0, -80, 0], y: [0, 100, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#dbeafe] rounded-full filter blur-3xl opacity-30" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-5 pb-12 md:pt-7 md:pb-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#1e3a8a] to-green-700 bg-clip-text text-transparent">
            Pharmaceutical Products
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted formulations for better healthcare outcomes
          </motion.p>
        </div>
      </section>

      {/* Show category filter and product grid only if not in full page mode */}
      {!isFullPage && (
        <>
          {/* Category Filter Section - Centered */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-green-700 text-white shadow-md"
                      : "bg-white/70 text-gray-600 hover:bg-[#dbeafe] border border-gray-100"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </section>

          {/* Products Grid - Fixed height cards for perfect alignment */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ y: -8 }}
                    className="cursor-pointer rounded-2xl transition-all duration-300 bg-white shadow-sm hover:shadow-xl group overflow-hidden flex flex-col h-full"
                  >
                    {/* IMAGE - Fixed height */}
                    <div className="relative h-44 bg-slate-50 cursor-pointer flex-shrink-0" onClick={(e) => { e.stopPropagation(); setZoomImg(product.image); }}>
                      <Image src={product.image} alt={product.name} fill className="object-contain p-3 hover:scale-105 transition" />
                      <span className="absolute top-2 left-2 text-[10px] bg-white/90 text-slate-600 px-2 py-1 rounded-full shadow-sm">
                        {product.category}
                      </span>
                    </div>

                    {/* CONTENT - Fixed structure with flex-grow */}
                    <div className="p-3 flex flex-col flex-grow" onClick={() => handleProductSelect(product)}>
                      <h3 className="text-sm font-bold text-slate-900 line-clamp-2 min-h-[40px]">
                        {product.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 line-clamp-2 min-h-[32px] mt-1">
                        {product.generic}
                      </p>
                      <p className="text-[10px] text-slate-400 line-clamp-2 min-h-[32px] mt-1">
                        {product.composition}
                      </p>

                      {/* Uses - Fixed height tags */}
                      <div className="flex flex-wrap gap-1 mt-2 min-h-[48px]">
                        {product.uses.slice(0, 2).map((u, i) => (
                          <span key={i} className="text-[10px] px-2 py-[2px] rounded-full  text-slate-600">
                            {u.length > 18 ? u.substring(0, 15) + "..." : u}
                          </span>
                        ))}
                        {product.uses.length > 2 && (
                          <span className="text-[10px] px-2 py-[2px] rounded-full  text-slate-600">
                            +{product.uses.length - 2}
                          </span>
                        )}
                      </div>

                      {/* BUTTON - Fixed at bottom */}
                      <button onClick={(e) => { e.stopPropagation(); handleProductSelect(product); }} className="w-full mt-3 py-2 text-xs rounded-lg bg-green-700 text-white hover:bg-green-500 transition">
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-700">No products found</h3>
                <p className="text-gray-500 mt-2">Try selecting a different category</p>
              </motion.div>
            )}
          </section>
        </>
      )}

      {/* Image Zoom Modal */}
      {zoomImg && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50" onClick={() => setZoomImg(null)}>
          <div className="bg-white rounded-xl shadow-xl p-4 max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]">
              <Image src={zoomImg} alt="zoom" fill className="object-contain" />
            </div>
            <button onClick={() => setZoomImg(null)} className="mt-4 w-full py-2 text-sm rounded-lg bg-green-700 text-white hover:bg-blue-500 transition">Close</button>
          </div>
        </div>
      )}

      {/* Product Detail Modal - only show if not in full page mode */}
      {!isFullPage && (
        <ProductDetailModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />
      )}

      {/* If in full page mode, show the full page product detail */}
      {isFullPage && selectedProduct && (
        <ProductDetailModal product={selectedProduct} isOpen={true} onClose={closeModal} isFullPage={true} />
      )}

      {/* Footer */}
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