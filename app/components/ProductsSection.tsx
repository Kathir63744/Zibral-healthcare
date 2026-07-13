"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    name: "AZIBRAL-500",
    generic: "Azithromycin Tablets IP 500 mg",
    category: "Antibiotic",
    composition: "Azithromycin 500 mg",
    image: "/Azibral-500.png",
    uses: ["Tonsillitis", "Sinusitis", "Pharyngitis"],
    dosage: "5-day therapy as per ICMR–IDSA guidelines",
    benefits: [
      "Short course therapy",
      "High tissue penetration",
      "Low drug interactions",
    ],
  },
  {
    id: 2,
    name: "COFCYILIX-D",
    generic:
      "Dextromethorphan + Phenylephrine + Chlorpheniramine",
    category: "Cough & Cold",
    composition:
      "Dextromethorphan HBr 15 mg + Phenylephrine HCl 5 mg + Chlorpheniramine 2 mg",
    image: "/Cofcyilix-D.png",
    uses: ["Dry cough", "Allergic cough", "Cold"],
    benefits: [
      "Reduces cough frequency",
      "Relieves nasal congestion",
      "Dries secretions",
    ],
  },
  {
    id: 3,
    name: "COFCYILIX-LS",
    generic: "Ambroxol + Levosalbutamol + Guaiphenesin",
    category: "Productive Cough",
    composition:
      "Ambroxol 30 mg + Levosalbutamol 1 mg + Guaiphenesin 50 mg",
    image: "/Cofcyilix-LS.png",
    uses: ["Productive cough", "Wheezing"],
    benefits: [
      "Expels mucus",
      "Improves airflow",
      "Relieves bronchospasm",
    ],
  },
  {
    id: 4,
    name: "LINIBRAL-600",
    generic: "Linezolid Tablets IP 600 mg",
    category: "Antibiotic (MRSA)",
    composition: "Linezolid 600 mg",
    image: "/Linibral-600.png",
    uses: ["MRSA infections", "Diabetic foot ulcer"],
    benefits: [
      "High tissue penetration",
      "100% bioavailability",
      "IV to oral switch therapy",
    ],
  },
  {
    id: 5,
    name: "ZEROBRAL-P",
    generic: "Aceclofenac + Paracetamol",
    category: "Pain Relief",
    composition: "Aceclofenac 100 mg + Paracetamol 325 mg",
    image: "/ZEROBRAL-P - 1.png",
    uses: ["Pain", "Fever", "Inflammation"],
    benefits: [
      "Fast pain relief",
      "Dual mechanism action",
      "Strong anti-inflammatory effect",
    ],
  },
];

export default function ProductsSection() {
  const [zoomImg, setZoomImg] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  return (
    <section className="py-14 bg-gradient-to-b from-green-50/50 via-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER - Lite Green Theme */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold mb-3">
            ✿ Our Products ✿
          </span>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
            Pharmaceutical Products
          </h2>
          <div className="flex justify-center mt-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" />
          </div>
          <p className="text-sm text-green-600/70 mt-3">
            Trusted formulations for better healthcare outcomes
          </p>
        </div>

        {/* GRID - Lite Green Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer group border border-green-100 hover:border-green-300"
              onClick={() => setSelectedProduct(p)}
            >
              {/* IMAGE - With green gradient background */}
              <div
                className="relative h-44 bg-gradient-to-br from-green-50 to-emerald-50 cursor-pointer flex-shrink-0"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomImg(p.image);
                }}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain p-3 group-hover:scale-105 transition duration-300"
                />

                <span className="absolute top-2 left-2 text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-full shadow-sm font-medium">
                  {p.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-3 flex flex-col flex-grow">
                <h3 className="text-sm font-bold text-green-800 line-clamp-2 min-h-[40px]">
                  {p.name}
                </h3>

                <p className="text-[11px] text-green-600/70 line-clamp-2 min-h-[32px] mt-1">
                  {p.generic}
                </p>

                <p className="text-[10px] text-green-500/60 line-clamp-2 min-h-[32px] mt-1">
                  {p.composition}
                </p>

                {/* Uses Tags - Lite Green */}
                <div className="flex flex-wrap gap-1 mt-2 min-h-[48px]">
                  {p.uses.slice(0, 2).map((u, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-[2px] rounded-full  text-green-700"
                    >
                      {u.length > 18 ? u.substring(0, 15) + "..." : u}
                    </span>
                  ))}
                  {p.uses.length > 2 && (
                    <span className="text-[10px] px-2 py-[2px] rounded-full  text-green-700">
                      +{p.uses.length - 2}
                    </span>
                  )}
                </div>

                {/* BUTTON - Lite Green Gradient */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(p);
                  }}
                  className="w-full mt-3 py-2 text-xs rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 transition shadow-sm"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IMAGE ZOOM MODAL - Lite Green Theme */}
      <AnimatePresence>
        {zoomImg && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
            onClick={() => setZoomImg(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-xl p-4 max-w-md mx-4 border border-green-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
                <Image
                  src={zoomImg}
                  alt="zoom"
                  fill
                  className="object-contain"
                />
              </div>

              <button
                onClick={() => setZoomImg(null)}
                className="mt-4 w-full py-2 text-sm rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 transition font-medium"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* PRODUCT DETAILS MODAL - Lite Green Theme */}
      <AnimatePresence>
        {selectedProduct && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white w-[90%] max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-green-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Close button */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 shadow-md hover:bg-green-50 transition-colors border border-green-200"
                >
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="p-6">
                  {/* Product Image in Modal */}
                  <div className="flex justify-center mb-4">
                    <div className="relative w-40 h-40 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-4">
                      <Image
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-green-800 text-center">
                    {selectedProduct.name}
                  </h2>

                  <p className="text-sm text-green-600/70 text-center mt-1">
                    {selectedProduct.generic}
                  </p>

                  <p className="text-xs text-green-500/60 text-center mt-1">
                    {selectedProduct.composition}
                  </p>

                  {/* USES */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <span className="text-green-500">✧</span> Therapeutic Uses
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {selectedProduct.uses?.map((u: string, i: number) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-[2px] rounded-full  text-green-700"
                        >
                          {u}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* BENEFITS */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <span className="text-green-500">✧</span> Key Benefits
                    </h4>
                    <ul className="text-xs text-green-700 mt-1 space-y-1">
                      {selectedProduct.benefits?.map((b: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* DOSAGE */}
                  {selectedProduct.dosage && (
                    <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                      <p className="text-xs text-green-700 font-medium">💊 {selectedProduct.dosage}</p>
                    </div>
                  )}

                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="mt-5 w-full py-2 text-sm rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition shadow-md"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}