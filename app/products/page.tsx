"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { LiaFacebook, LiaInstagram } from "react-icons/lia";

// ============================================================================
// TYPES
// ============================================================================

interface Product {
  id: number;
  name: string;
  generic: string;
  category: string;
  composition: string;
  image: string;
  uses: string[];
  dosage?: string;
  benefits: string[];
}

// ============================================================================
// PRODUCT DATA (20 products)
// ============================================================================

const products: Product[] = [
  {
    id: 1,
    name: "AZIBRAL-500",
    generic: "Azithromycin Tablets IP 500 mg",
    category: "Antibiotic",
    composition: "Azithromycin 500 mg",
    image: "/Azibral-500 - 1.png",
    uses: ["Tonsillitis", "Sinusitis", "Pharyngitis"],
    dosage: "5-day therapy as per ICMR–IDSA guidelines",
    benefits: ["Short course therapy", "High tissue penetration", "Low drug interactions"],
  },
  {
    id: 2,
    name: "COFCYILIX-D",
    generic: "Dextromethorphan + Phenylephrine + Chlorpheniramine",
    category: "Cough & Cold",
    composition: "Dextromethorphan HBr 15 mg + Phenylephrine HCl 5 mg + Chlorpheniramine 2 mg",
    image: "/Cofcyilix-D.png",
    uses: ["Dry cough", "Allergic cough", "Cold"],
    benefits: ["Reduces cough frequency", "Relieves nasal congestion", "Dries secretions"],
  },
  {
    id: 3,
    name: "COFCYILIX-LS",
    generic: "Ambroxol + Levosalbutamol + Guaiphenesin",
    category: "Productive Cough",
    composition: "Ambroxol 30 mg + Levosalbutamol 1 mg + Guaiphenesin 50 mg",
    image: "/Cofcyilix-LS.png",
    uses: ["Productive cough", "Wheezing"],
    benefits: ["Expels mucus", "Improves airflow", "Relieves bronchospasm"],
  },
  {
    id: 4,
    name: "LINIBRAL-600",
    generic: "Linezolid Tablets IP 600 mg",
    category: "Antibiotic (MRSA)",
    composition: "Linezolid 600 mg",
    image: "/Linibral-600.png",
    uses: ["MRSA infections", "Diabetic foot ulcer"],
    benefits: ["High tissue penetration", "100% bioavailability", "IV to oral switch therapy"],
  },
  {
    id: 5,
    name: "/ZEROBRAL-P - 1.png",
    generic: "Aceclofenac + Paracetamol",
    category: "Pain Relief",
    composition: "Aceclofenac 100 mg + Paracetamol 325 mg",
    image: "/Zerobral-P.png",
    uses: ["Pain", "Fever", "Inflammation"],
    benefits: ["Fast pain relief", "Dual mechanism action", "Strong anti-inflammatory effect"],
  },
  {
    id: 6,
    name: "ZEROBRAL-SP",
    generic: "Aceclofenac + Paracetamol + Serratiopeptidase",
    category: "Pain & Inflammation",
    composition: "Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg",
    image: "/ZEROBRAL-SP.png",
    uses: ["Tonsillitis", "Sinusitis", "Pharyngitis", "Trauma", "Swelling"],
    benefits: ["Aceclofenac: Reduces pain severity", "Serratiopeptidase: Preferred over Trypsin"],
  },
  {
    id: 7,
    name: "CALOBRAL LOTION",
    generic: "Calamine + Allantoin + Vitamin-E + Aloe Vera",
    category: "Topical",
    composition: "Calamine 10% + Allantoin 0.5% + Vitamin-E 0.5%",
    image: "/calobral-lotion.png",
    uses: ["Insect Bite", "Diaper rashes", "Viral Infections", "Summer Associated Dermatitis", "Urticaria"],
    benefits: ["Calamine: Antipruritic", "Allantoin: Protects dry skin", "Vitamin E: Antioxidant", "Aloe Vera: Moisturizes"],
  },
  {
    id: 8,
    name: "MONTIBRAL-LC",
    generic: "Montelukast Sodium + Levocetirizine Hydrochloride",
    category: "Anti-Allergic",
    composition: "Montelukast Sodium 10 mg + Levocetirizine Hydrochloride 5 mg",
    image: "/Montibral-LC.png",
    uses: ["Seasonal Allergic Rhinitis", "Chronic Idiopathic Urticaria", "Prophylaxis & Chronic Treatment of ASTHMA", "Persistent Allergic Rhinitis"],
    benefits: ["Gold Standard Anti-Leukotriene", "Reduces Bronchoconstriction", "Relieves distressing symptoms"],
  },
  {
    id: 9,
    name: "ZIBCLAV 625",
    generic: "Amoxycillin + Potassium Clavulanate",
    category: "Antibiotic",
    composition: "Amoxycillin 500 mg & Potassium Clavulanate 125 mg",
    image: "/ZIBCLAV 625.jpg",
    uses: ["Recurrent Tonsillitis", "Recurrent Sinusitis", "Tonsillo-Pharyngitis", "Dental Infection", "SSTI's"],
    benefits: ["Active against wide range of bacteria", "Excellent clinical results", "Broad-Spectrum protection"],
  },
  {
    id: 10,
    name: "ZIBCLAV-457",
    generic: "Amoxycillin + Potassium Clavulanate",
    category: "Syrups",
    composition: "Amoxycillin 400 mg & Potassium Clavulanate 57 mg",
    image: "/ZIBCLAV 457.jpg",
    uses: ["Recurrent Tonsillitis", "Recurrent Sinusitis", "Tonsillo-Pharyngitis", "Dental Infection"],
    dosage: "For paediatric use",
    benefits: ["Active against bacteria", "Excellent clinical results", "Orange flavour for children"],
  },
  {
    id: 11,
    name: "PPZOLE/40",
    generic: "Pantoprazole",
    category: "Tablets",
    composition: "Pantoprazole 40 mg",
    image: "/Pantoprazole 40 mg Tablet.png",
    uses: ["GERD", "Peptic Ulcer", "Zollinger Ellison Syndrome", "NSAID Induced Ulcer"],
    benefits: ["Superior anti-secretory activity", "Most effective in preventing stress ulcers", "No drug interference"],
  },
  {
    id: 12,
    name: "URIBRAL-B6",
    generic: "Potassium Citrate + Magnesium Citrate + Pyridoxal 5-Phosphate + Cranberry + D-Mannose",
    category: "Syrups",
    composition: "Potassium Citrate 1100 mg, Magnesium Citrate 375 mg, Pyridoxal 5-Phosphate 20 mg, Cranberry 200 mg, D-Mannose 300 mg",
    image: "/URIBRAL-B6 syrup.png",
    uses: ["Urinary Tract Infections", "Recurrent UTI Prophylaxis", "UTIs during Pregnancy", "Kidney Stones"],
    benefits: ["P-5-P: Active Vitamin B6", "Cranberry: Makes urine acidic", "D-Mannose: Inhibits E-coli adhesion"],
  },
  {
    id: 13,
    name: "Q-BRAL DHA",
    generic: "(6s)-5-Methyltetrahydrofolic Acid + Vit B6 + Vit B12",
    category: "Supplements",
    composition: "(6s)-5-Methyltetrahydrofolic Acid with Vitamin B6 & B12",
    image: "/BRALDHA-5-Methyltetrahydrofolic Acid.png",
    dosage: "One Tablet daily",
    uses: ["Adults & Elderly", "Infants & Children", "Pre-concept & Fertility", "Pregnancy & Lactation"],
    benefits: ["Only folate that crosses blood-brain barrier", "99% purity", "Improves fertility", "Lowers risk of birth defects"],
  },
  {
    id: 14,
    name: "BABYMA",
    generic: "Baby Bathing Bar",
    category: "Topical",
    composition: "Kokum Butter, Shea Butter, Olive Oil, Jojoba Oil & Vitamin E",
    image: "/babyma - 1.jpg",
    uses: ["Newborn's sensitive skin", "Eczema prone skin", "Daily baby bathing"],
    benefits: ["pH 5.5", "100% Natural cleanser", "Dermatologically Tested", "Paraben & Silicone Free", "Tear Free"],
  },
  {
    id: 15,
    name: "CRAMPLIN",
    generic: "Magnesium Biglycinate + L-Carnitine + Methylcobalamin + Folic Acid + Vitamin D3 + Tocotrienol + Zinc",
    category: "Supplements",
    composition: "Magnesium Biglycinate 300mg, L-Carnitine 500mg, Methylcobalamin 1500mcg, Folic Acid 1.5mg, Vitamin D3 1000IU, Tocotrienol 100mg & Zinc 37.5mg",
    image: "/CRAMPLIN.jpg",
    uses: ["Cholesterol Management", "Liver Health", "Brain Health", "Cardiovascular Health", "Bone Health"],
    benefits: ["Tocotrienol E: Superior Vitamin E", "Magnesium for muscle function", "Vitamin D3 for bone density"],
  },
  {
    id: 16,
    name: "ZIPHALA",
    generic: "Lactulose + FOS + Wheat Dextrin + Polydextrose",
    category: "Syrups",
    composition: "Lactulose 10G, FOS 2.5G, Wheat Dextrin 3.5G, Polydextrose 2.1G",
    image: "/Ziphalac oral solution.jpg",
    uses: ["Constipation", "Irregular bowel movements", "Gut health", "Bloating"],
    benefits: ["Lactulose: Osmotic laxative", "Wheat Dextrin: Improves regularity", "FOS: Prebiotic", "Gluten Free"],
  },
  {
    id: 17,
    name: "NEFRO DEAL",
    generic: "NAC + Taurine + Ubiquinol + Pyridoxamine",
    category: "Supplements",
    composition: "NAC 300mg, Taurine 500mg, Ubiquinol 100mg, Pyridoxamine 75mg",
    image: "/nefrodeal.png",
    uses: ["Diabetic Kidney Protection", "Diabetic Neuropathy", "Oxidative Stress", "Cardio-Renal Support"],
    benefits: ["NAC: Reduces kidney oxidative stress", "Taurine: Kidney cell protection", "Ubiquinol: Mitochondrial health"],
  },
  {
    id: 18,
    name: "ZIZINC",
    generic: "Zinc Gluconate Oral Solution",
    category: "Syrups",
    composition: "Zinc Gluconate (20 mg elemental Zinc per 5 ml)",
    image: "/zinzic.png",
    dosage: "Above 1 Year: 5 ml/day",
    uses: ["Diarrhoea", "Immunity", "Respiratory Tract Infection", "Common Cold"],
    benefits: ["Improves innate & adaptive immunity", "Facilitates absorption of fluids", "Powerful antioxidant"],
  },
  {
    id: 19,
    name: "NEMCOFLEX",
    generic: "Natural Eggshell Membrane + Collagen + Glucosamine + Chondroitin + MSM + Curcumin + Boswellia + Vitamins",
    category: "Supplements",
    composition: "Natural Eggshell Membrane 300mg, Collagen Type 2 50mg, Hyaluronic Acid 25mg, Glucosamine 500mg, Chondroitin 500mg, MSM 500mg, Curcumin 150mg, Boswellia 150mg, Vitamin C 500mg, Vitamin D3 1000IU",
    image: "/nemcoflex.png",
    uses: ["Joint Health", "Osteoarthritis", "Cartilage Degeneration", "Joint Pain"],
    benefits: ["Restore Cartilage", "Rebuild Joint Matrix", "Reduce Inflammation", "Natural Anti-Inflammatory"],
  },
  {
    id: 20,
    name: "Q-BRAL DHA",
    generic: "(6s)-5-Methyltetrahydrofolic Acid + Methylcobalamin + Pyridoxal 5'-Phosphate + DHA",
    category: "Supplements",
    composition: "(6s)-5-Methyltetrahydrofolic Acid (4th Gen Folate), Methylcobalamin, Pyridoxal 5'-Phosphate & DHA",
    image: "/Q-BRAL DHA.png",
    uses: ["Pregnancy", "Lactation", "Fetal Brain Development", "Maternal Health"],
    benefits: ["4th Generation Folic Acid", "Ready-to-use folate", "DHA for brain development", "Active B12 & B6"],
  },
];

// Categories for filtering
const categories = ["All", "Antibiotic", "Cough & Cold", "Productive Cough", "Antibiotic (MRSA)", "Pain Relief", "Pain & Inflammation", "Topical", "Anti-Allergic", "Syrups", "Supplements", "Tablets"];

// ============================================================================
// PRODUCT DETAIL MODAL COMPONENT
// ============================================================================

function ProductDetailModal({ product, isOpen, onClose }: { product: Product | null; isOpen: boolean; onClose: () => void }) {
  if (!product) return null;

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
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-[#2563eb]/20 rounded-full blur-xl" />
                      <div className="relative w-full h-full rounded-2xl" style={{ transform: "rotateX(5deg) rotateY(-5deg)", boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.25)" }}>
                        <Image src={product.image} alt={product.name} fill className="object-contain p-4 drop-shadow-2xl" />
                      </div>
                    </motion.div>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-[#2563eb] bg-[#dbeafe] rounded-full">{product.category}</span>
                      <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h2>
                      <p className="mt-1 text-sm text-gray-500 italic">{product.generic}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <span>Composition: {product.composition}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Therapeutic Uses</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.uses.slice(0, 4).map((use, idx) => (
                          <span key={idx} className="text-xs px-3 py-1 rounded-full bg-[#dbeafe] text-[#2563eb]">{use}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Key Benefits</h3>
                      <ul className="space-y-1.5">
                        {product.benefits.slice(0, 4).map((benefit, idx) => (
                          <motion.li key={idx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="flex items-center gap-2 text-gray-600 text-sm">
                            <svg className="w-4 h-4 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {benefit}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-2 px-6 py-3 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full">
                      Request Information →
                    </motion.button>
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

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomImg, setZoomImg] = useState<string | null>(null);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    return matchesCategory;
  });

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

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
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] bg-clip-text text-transparent">
            Pharmaceutical Products
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted formulations for better healthcare outcomes
          </motion.p>
        </div>
      </section>

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
                  ? "bg-[#2563eb] text-white shadow-md"
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
                  <button onClick={(e) => { e.stopPropagation(); handleProductSelect(product); }} className="w-full mt-3 py-2 text-xs rounded-lg bg-blue-400 text-white hover:bg-blue-500 transition">
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

      {/* Image Zoom Modal */}
      {zoomImg && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50" onClick={() => setZoomImg(null)}>
          <div className="bg-white rounded-xl shadow-xl p-4 max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]">
              <Image src={zoomImg} alt="zoom" fill className="object-contain" />
            </div>
            <button onClick={() => setZoomImg(null)} className="mt-4 w-full py-2 text-sm rounded-lg bg-blue-400 text-white hover:bg-blue-500 transition">Close</button>
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      <ProductDetailModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />

      {/* Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 border-t border-slate-200">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl"></div>

        <div className="relative px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Image src="/logo.png" alt="Zibral Healthcare" width={70} height={70} className="object-contain" />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Zibral</h3>
                  <p className="uppercase tracking-[4px] text-xs text-blue-600">Healthcare</p>
                </div>
              </div>
              <p className="text-slate-600 leading-8">
                Delivering trusted pharmaceutical and healthcare solutions through innovation, quality, and excellence.
              </p>
              <div className="flex gap-3 mt-6">
                <a href="https://www.instagram.com/p/C33VcCDyGS2/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                  <LiaInstagram className="text-2xl" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><Link href="/" className="text-slate-600 hover:text-blue-600 transition">Home</Link></li>
                <li><Link href="/about" className="text-slate-600 hover:text-blue-600 transition">About Us</Link></li>
                <li><Link href="/products" className="text-slate-600 hover:text-blue-600 transition">Products</Link></li>
                <li><Link href="/contact" className="text-slate-600 hover:text-blue-600 transition">Contact Us</Link></li>
              </ul>
            </div>

            {/* Product Categories */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Product Categories</h3>
              <ul className="space-y-4 text-slate-600">
                <li><Link href="/products?category=Tablets" className="hover:text-blue-600 transition">Tablets</Link></li>
                <li><Link href="/products?category=Capsules" className="hover:text-blue-600 transition">Capsules</Link></li>
                <li><Link href="/products?category=Syrups" className="hover:text-blue-600 transition">Syrups</Link></li>
                <li><Link href="/products?category=Injectables" className="hover:text-blue-600 transition">Injectables</Link></li>
                <li><Link href="/products?category=Supplements" className="hover:text-blue-600 transition">Healthcare Solutions</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Contact Information</h3>
              <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 space-y-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <MdOutlineEmail className="text-2xl text-blue-600 mt-1 flex-shrink-0" />
                  <a href="mailto:zibralhealthcare2021@gmail.com" className="text-slate-600 hover:text-blue-600 transition text-sm break-all">zibralhealthcare2021@gmail.com</a>
                </div>
                <div className="flex items-start gap-3">
                  <BiPhone className="text-2xl text-blue-600 mt-1 flex-shrink-0" />
                  <a href="tel:+918610810041" className="text-slate-600 hover:text-blue-600 transition">+91 86108 10041</a>
                </div>
                <div className="flex items-start gap-3">
                  <HiOutlineLocationMarker className="text-2xl text-blue-600 mt-1 flex-shrink-0" />
                  <a href="https://maps.google.com/?q=B6+Ms+nagar+Podanur+Main+Rd+Kurichi+Pirivu+Coimbatore+Tamil+Nadu+641023" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition text-sm">
                    B6, Ms nagar, Podanur Main Rd, <br /> Kurichi Pirivu, Coimbatore, Tamil Nadu 641023
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