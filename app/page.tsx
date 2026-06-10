import { LiaFacebook, LiaInstagram, LiaTwitter } from "react-icons/lia";

import HeroBanner from "./components/HeroBanners";
import { BsMailbox } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { Mail, Mailbox, MailX } from "lucide";
import ProductShapeSection from "./components/ProductShapeSection";
import VisionMissionSection from "./components/VisionMissionSection";

import Navbar from "./components/Navbar";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";
import ProductsSection from "./components/ProductsSection";
import { Metadata } from "next";

const products = [
  {
    img: "/c22.png",
    name: "AZIBRAL-500",
    generic: "Azithromycin Tablets IP 500 mg",
    category: "Antibiotic",
    strength: "500 mg",
    uses: ["Tonsillitis", "Sinusitis", "Pharyngitis"],
  },
  {
    img: "/products/amoxibral-625.png",
    name: "AMOXIBRAL-625",
    generic: "Amoxicillin & Clavulanate Tablets",
    category: "Antibiotic",
    strength: "625 mg",
    uses: ["Respiratory Infection", "ENT Infection", "Dental Infection"],
  },
  {
    img: "/products/pantobral-40.png",
    name: "PANTOBRAL-40",
    generic: "Pantoprazole Gastro Resistant Tablets",
    category: "Gastro Care",
    strength: "40 mg",
    uses: ["Acidity", "GERD", "Stomach Ulcer"],
  },
  {
    img: "/products/dolobral-sp.png",
    name: "DOLOBRAL-SP",
    generic: "Aceclofenac, Paracetamol & Serratiopeptidase",
    category: "Pain Management",
    strength: "SP",
    uses: ["Joint Pain", "Inflammation", "Muscle Pain"],
  },
  {
    img: "/products/cetrabral-ls.png",
    name: "CETRABRAL-LS",
    generic: "Levocetirizine & Ambroxol Syrup",
    category: "Respiratory Care",
    strength: "100 ml",
    uses: ["Cough", "Cold", "Allergic Rhinitis"],
  },
];

export const metadata: Metadata = {
  title: "Pharmaceutical Company in Tamil Nadu | Zibral Healthcare",
  description:
    "Zibral Healthcare is a trusted pharmaceutical company in Tamil Nadu offering quality medicines, healthcare products, and innovative healthcare solutions.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans dark:bg-white">
      <Navbar />
      <HeroBanner />
      <section className="py-16 px-6">
  <div className="max-w-6xl mx-auto">
      {/* Glass morphism card with lite green tint */}
      <div className="relative overflow-hidden rounded-[40px] backdrop-blur-xl bg-white/30 bg-gradient-to-br from-green-50/40 via-emerald-50/30 to-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/50 transition-all duration-300 hover:shadow-[0_20px_45px_-12px_rgba(34,139,34,0.2)]">
        
        {/* Subtle green glass overlay - adds depth without losing transparency */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-emerald-300/5 to-transparent pointer-events-none"></div>
        
        {/* Soft glow effect - light green ambient */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-300/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none"></div>
        
        {/* Light reflection / glass shine */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
        
        {/* Content Container */}
        <div className="relative z-10 grid lg:grid-cols-[220px_1fr] gap-10 items-center p-10 lg:p-14">
          
          {/* Left Side - Stats & Badge */}
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-emerald-700 uppercase tracking-[4px] text-sm font-semibold bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-white/40">
              About Zibral Healthcare
            </span>
            
            <div className="w-16 h-[3px] bg-gradient-to-r from-emerald-500 to-green-400 rounded-full mt-4 shadow-sm"></div>
            
            <h3 className="mt-6 text-5xl lg:text-6xl font-bold text-emerald-800 drop-shadow-sm">
              5+
            </h3>
            
            <p className="text-emerald-700 mt-2 font-medium">
              Years of Healthcare Excellence
            </p>
            
            {/* Decorative glass accent */}
            <div className="mt-5 hidden lg:block opacity-40">
              <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
                <path d="M8 24 L16 8 L24 24 M28 20 L34 6 L40 20" stroke="#2D6A4F" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 3"/>
              </svg>
            </div>
          </div>
          
          {/* Right Side - Main Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-emerald-900 drop-shadow-sm">
              Delivering{" "}
              <span className="text-emerald-600 relative inline-block">
                Trusted Pharmaceutical Solutions

              </span>{" "}
              For A Healthier Tomorrow
            </h2>
            
            <p className="mt-6 text-lg leading-9 text-emerald-800 font-medium">
              Zibral Healthcare is committed to enhancing healthcare outcomes through
              high-quality pharmaceutical products, scientifically developed formulations,
              and ethical business practices.
            </p>
            
            <p className="mt-5 text-lg leading-9 text-emerald-800">
              We focus on delivering safe, effective, and affordable medicines that
              support patients, healthcare professionals, and communities with reliable
              therapeutic care.
            </p>
            
            <p className="mt-5 text-lg leading-9 text-emerald-800">
              Our product portfolio is driven by strict quality standards, continuous
              research, and innovation, ensuring consistent performance, patient safety,
              and long-term trust.
            </p>
            
            {/* Glass divider */}
            <div className="flex items-center gap-3 mt-7">
              <div className="h-[1px] w-12 bg-emerald-400/50 rounded-full"></div>
              <span className="text-xs uppercase tracking-wider text-emerald-600 font-medium bg-white/30 px-2 py-0.5 rounded-full backdrop-blur-sm">sustainable care</span>
              <div className="h-[1px] w-full max-w-[80px] bg-emerald-400/40 rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Bottom glass reflection */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        
        {/* Subtle corner glass highlights */}
        <div className="absolute top-4 left-4 w-20 h-20 bg-white/20 rounded-full blur-xl pointer-events-none"></div>
        <div className="absolute bottom-4 right-4 w-20 h-20 bg-white/15 rounded-full blur-xl pointer-events-none"></div>
      </div>
    </div>
</section>
      <VisionMissionSection />
      <ProductsSection />
      <section className="py-20 bg-gradient-to-b from-white to-green-50/30">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
        Featured Products
      </span>

      <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
        Our Best Products
      </h2>

      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        Trusted formulations developed to deliver effective therapeutic outcomes
        and support better patient care.
      </p>
    </div>

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}
      <div>

        {/* Product Pack */}
        <div className="bg-pink-50 rounded-[32px] p-8">
          <img
            src="/babyma.jpg"
            alt=""
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Ingredient Showcase */}
        <div className="grid grid-cols-4 gap-4 mt-8">

          <div className="text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
              <img src="/kokum.png" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs text-slate-800 mt-2">Kokum Butter</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
              <img src="/shea.png" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs text-slate-800 mt-2">Shea Butter</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
              <img src="/olive.png" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs text-slate-800 mt-2">Olive Oil</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto">
              <img src="/jojoba.png" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs text-slate-800 mt-2">Jojoba Oil</p>
          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div>

        <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full">
          Baby Care
        </span>

        <h2 className="text-5xl text-gray-700 font-bold mt-5">
          Babyma
        </h2>

        <h3 className="text-2xl text-pink-600 mt-2">
          Baby Bathing Bar
        </h3>

        <p className="mt-5 text-gray-600">
          Moisturizing care specially formulated for newborn and sensitive skin.
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 mt-8">

          <div className="rounded-xl text-slate-800 border p-3">
             Tear Free
          </div>

          <div className="rounded-xl text-slate-800 border p-3">
             pH 5.5 Balanced
          </div>

          <div className="rounded-xl text-slate-800 border p-3">
             Bioactives
          </div>

          <div className="rounded-xl text-slate-800 border p-3">
             Paraben Free
          </div>

          <div className="rounded-xl text-slate-800 border p-3">
             Safe For Newborn
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
{/* CRAMPLIN */}
<div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-24 lg:mb-32">

  {/* LEFT CONTENT */}
  <div className="order-2 lg:order-1">

    <span className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full bg-orange-100 text-orange-700 text-xs md:text-sm font-medium">
      Muscle • Nerve • Cardiovascular Health
    </span>

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-4 md:mt-5">
      CRAMPLIN
    </h2>

    <p className="text-base sm:text-lg md:text-xl text-slate-600 mt-2 leading-relaxed">
      Magnesium Bisglycinate + L-Carnitine + Methylcobalamin + Folic Acid +
      Vitamin D3 + Tocotrienols + Zinc
    </p>

    <p className="mt-4 md:mt-5 text-sm sm:text-base text-slate-600 leading-relaxed md:leading-8">
      Advanced nutritional support formulated to promote muscle strength,
      nerve regeneration, energy production, and cardiovascular wellness.
    </p>

    {/* Benefits - Responsive Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-6 md:mt-8">

      <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl text-slate-800 border border-gray-200 text-sm sm:text-base">
        ✓ Supports nerve regeneration
      </div>

      <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl text-slate-800 border border-gray-200 text-sm sm:text-base">
        ✓ Reduces muscle cramps & spasms
      </div>

      <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl text-slate-800 border border-gray-200 text-sm sm:text-base">
        ✓ Improves muscle strength
      </div>

      <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl text-slate-800 border border-gray-200 text-sm sm:text-base">
        ✓ Supports cardiovascular wellness
      </div>

      <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl text-slate-800 border border-gray-200 text-sm sm:text-base">
        ✓ Maintains Vitamin D & Magnesium levels
      </div>

      <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl text-slate-800 border border-gray-200 text-sm sm:text-base">
        ✓ Antioxidant protection
      </div>

    </div>

    {/* Indications - Responsive */}
    <div className="mt-8 md:mt-10">

      <h4 className="font-semibold text-slate-900 mb-3 md:mb-4 text-base md:text-lg">
        Key Indications
      </h4>

      <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600">

        <div className="flex items-center gap-2">
          <span className="text-orange-500">•</span> Muscle cramps
        </div>
        <div className="flex items-center gap-2">
          <span className="text-orange-500">•</span> Nocturnal leg cramps
        </div>
        <div className="flex items-center gap-2">
          <span className="text-orange-500">•</span> Diabetic neuropathy
        </div>
        <div className="flex items-center gap-2">
          <span className="text-orange-500">•</span> Tingling & numbness
        </div>
        <div className="flex items-center gap-2">
          <span className="text-orange-500">•</span> Chronic fatigue
        </div>
        <div className="flex items-center gap-2">
          <span className="text-orange-500">•</span> Muscle weakness
        </div>
        <div className="flex items-center gap-2">
          <span className="text-orange-500">•</span> Cardiovascular support
        </div>
        <div className="flex items-center gap-2">
          <span className="text-orange-500">•</span> Type 2 Diabetes support
        </div>

      </div>

    </div>

  </div>

  {/* RIGHT SHOWCASE - Responsive */}
  <div className="relative order-1 lg:order-2">

    <div className="absolute inset-0 bg-orange-100 rounded-[30px] sm:rounded-[40px] blur-2xl sm:blur-3xl opacity-40"></div>

    <div className="relative bg-white rounded-2xl sm:rounded-[32px] border border-slate-100 shadow-sm p-4 sm:p-6 md:p-8">

      {/* Product Image */}
      <div className="relative w-full max-w-md mx-auto">
        <img
          src="/CRAMPLIN.jpg"
          alt="CRAMPLIN"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Highlight Images - Responsive Grid */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">

        <div className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden mx-auto border-2 border-orange-100">
            <img
              src="/muscle.png"
              className="w-full h-full object-cover"
              alt="Muscle Strength"
            />
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600 mt-1 sm:mt-2">Muscle Strength</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden mx-auto border-2 border-orange-100">
            <img
              src="/nerve.png"
              className="w-full h-full object-cover"
              alt="Nerve Health"
            />
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600 mt-1 sm:mt-2">Nerve Health</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden mx-auto border-2 border-orange-100">
            <img
              src="/heart.png"
              className="w-full h-full object-cover"
              alt="Cardiovascular"
            />
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600 mt-1 sm:mt-2">Cardiovascular</p>
        </div>

      </div>

      {/* Ingredients - Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-6 sm:mt-8">

        <div className="rounded-xl text-slate-800 bg-slate-50 p-2 sm:p-3 text-center text-[11px] sm:text-xs font-medium">
          Magnesium
        </div>

        <div className="rounded-xl text-slate-800 bg-slate-50 p-2 sm:p-3 text-center text-[11px] sm:text-xs font-medium">
          L-Carnitine
        </div>

        <div className="rounded-xl text-slate-800 bg-slate-50 p-2 sm:p-3 text-center text-[11px] sm:text-xs font-medium">
          Vitamin D3
        </div>

        <div className="rounded-xl text-slate-800 bg-slate-50 p-2 sm:p-3 text-center text-[11px] sm:text-xs font-medium">
          Zinc
        </div>

      </div>

    </div>

  </div>

</div>

{/* Product 4 - ZIPHALAC */}
<div className="grid lg:grid-cols-2 gap-12 items-center mb-24">

  {/* LEFT IMAGE */}
  <div className="relative group">
    <div className="absolute inset-0 bg-slate-100 rounded-[30px] blur-3xl opacity-30"></div>

    <div className="relative bg-white rounded-[30px] p-8 shadow-sm border border-slate-100">

      <img
        src="/Ziphalac oral solution.jpg"
        alt="ZIPHALAC"
        className="w-full h-[320px] object-contain transition duration-500 group-hover:scale-105"
      />

      {/* Small Highlights */}
      <div className="flex justify-center gap-3 mt-6">

        <div className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">
          Gluten Free
        </div>

        <div className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">
          Safe In Pregnancy
        </div>

      </div>

    </div>
  </div>

  {/* RIGHT CONTENT */}
  <div>

    <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
      Digestive Health
    </span>

    <h3 className="text-4xl font-bold text-slate-900 mt-5">
      ZIPHALAC
    </h3>

    <p className="mt-3 text-slate-600 font-medium">
      Lactulose + Wheat Dextrin + Polydextrose + FOS
    </p>

    <p className="mt-5 text-slate-500 leading-8">
      Complete fiber care solution formulated to improve bowel regularity,
      digestive comfort and gut microbiome health. A unique blend of
      Lactulose and dietary fibers helps provide gentle yet effective
      relief from constipation.
    </p>

    {/* Benefits */}
    <div className="grid grid-cols-2 gap-3 mt-8">

      <div className="bg-slate-50 text-slate-800 rounded-xl p-4 border border-slate-800">
        Regular Bowel Movement
      </div>

      <div className="bg-slate-50 text-slate-800 rounded-xl p-4 border border-slate-800">
        Relieves Constipation
      </div>

      <div className="bg-slate-50 text-slate-800 rounded-xl p-4 border border-slate-800">
        Supports Gut Health
      </div>

      <div className="bg-slate-50 text-slate-800 rounded-xl p-4 border border-slate-800">
        Reduces Bloating
      </div>

      <div className="bg-slate-50 text-slate-800 rounded-xl p-4 border border-slate-800">
        Better Tolerability
      </div>

      <div className="bg-slate-50 text-slate-800 rounded-xl p-4 border border-slate-800">
        Long-Term Use
      </div>

    </div>

    {/* Indications */}
    <div className="mt-8">

      <h4 className="font-semibold text-slate-900 mb-4">
        Recommended For
      </h4>

      <div className="grid grid-cols-2 gap-y-3 text-slate-600">

        <span>✓ Constipation</span>
        <span>✓ IBS-C</span>

        <span>✓ Piles</span>
        <span>✓ Post-Surgical Care</span>

        <span>✓ Post-Pregnancy</span>
        <span>✓ Elderly Patients</span>

      </div>

    </div>

  </div>

</div>

  </div>
</section>
<section className="py-10 px-2 -mt-20 bg-gradient-to-b from-green-50/30 via-white to-emerald-50/20">
  <div className="max-w-6xl mx-auto">

    <div className="relative overflow-hidden rounded-[32px] backdrop-blur-xl bg-white/30 bg-gradient-to-br from-green-50/40 via-white/20 to-emerald-50/30 border border-green-100/60 shadow-[0_15px_50px_rgba(34,139,34,0.08)]">

      {/* Background Glow - Lite Green */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-300/20 rounded-full blur-3xl"></div>
      
      {/* Subtle grass shimmer */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>

      <div className="relative px-8 md:px-14 py-14 md:py-16">

        {/* Badge - Lite Green Glass */}
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100/80 backdrop-blur-sm text-green-700 text-sm font-semibold border border-green-200/50 shadow-sm">
          <span className="text-green-500 mr-1">✦</span> Our Commitment
          <span className="text-green-500 ml-1">✦</span>
        </span>

        {/* Heading */}
        <h2 className="mt-6 text-3xl md:text-5xl font-bold text-slate-900 leading-tight max-w-4xl">
          Committed To Building A
          <span className="text-green-600 relative inline-block mx-2">
            Healthier Future
          </span>
          Through Quality & Innovation
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg leading-8 text-slate-700 max-w-4xl">
          At <span className="font-semibold text-green-700">Zibral Healthcare</span>,
          we are dedicated to advancing healthcare through innovation,
          uncompromising quality, and responsible practices. We collaborate
          closely with healthcare professionals and partners to deliver trusted
          pharmaceutical solutions that improve patient outcomes and contribute
          to healthier communities.
        </p>

        {/* Highlights - Glass Cards */}
        <div className="grid md:grid-cols-3 gap-5 mt-10">

          {/* Innovation Card */}
          <div className="group relative transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400/40 to-emerald-400/40 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-green-100/60 shadow-sm hover:shadow-md transition-all h-full">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🌿</span>
                <h3 className="font-semibold text-green-800">Innovation</h3>
              </div>
              <p className="text-sm text-green-700/80 leading-relaxed">
                Developing effective healthcare solutions through continuous
                research and scientific advancement.
              </p>
            </div>
          </div>

          {/* Quality Card */}
          <div className="group relative transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400/40 to-green-400/40 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-green-100/60 shadow-sm hover:shadow-md transition-all h-full">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">✅</span>
                <h3 className="font-semibold text-green-800">Quality</h3>
              </div>
              <p className="text-sm text-green-700/80 leading-relaxed">
                Maintaining stringent standards to ensure safety, reliability,
                and therapeutic excellence.
              </p>
            </div>
          </div>

          {/* Responsibility Card */}
          <div className="group relative transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400/40 to-teal-400/40 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-green-100/60 shadow-sm hover:shadow-md transition-all h-full">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🤝</span>
                <h3 className="font-semibold text-green-800">Responsibility</h3>
              </div>
              <p className="text-sm text-green-700/80 leading-relaxed">
                Building trust through ethical practices and a commitment to
                patient well-being.
              </p>
            </div>
          </div>

        </div>


      </div>
    </div>

  </div>
</section>

<section className="py-16 px-3 bg-gradient-to-b from-green-50/30 via-white to-emerald-50/20">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-12">
      <span className="inline-flex px-4 py-1.5 rounded-full bg-green-100/80 backdrop-blur-sm text-green-700 text-sm font-semibold border border-green-200/50">
        ✦ Our Foundation ✦
      </span>

      <h2 className="mt-4 text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-[#000]">
        Core Values
      </h2>

      <div className="flex justify-center mt-3">
        <div className="w-12 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" />
      </div>

      <p className="mt-3 text-sm text-[#000] max-w-2xl mx-auto">
        The principles that guide our commitment to quality healthcare,
        innovation, and patient well-being.
      </p>
    </div>

    {/* Values Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Quality First",
          desc: "We never compromise on quality, safety, and compliance, ensuring reliable healthcare solutions.",
          icon: "🏆"
        },
        {
          title: "Innovation",
          desc: "Continuous research and development drive our efforts to create better healthcare solutions.",
          icon: "💡"
        },
        {
          title: "Integrity",
          desc: "We uphold ethical business practices and transparency in every aspect of our operations.",
          icon: "🤝"
        },
        {
          title: "Patient Care",
          desc: "Patient well-being remains at the center of every decision and product we deliver.",
          icon: "❤️"
        },
        {
          title: "Customer Satisfaction",
          desc: "Building long-term relationships through trust, service excellence, and reliability.",
          icon: "⭐"
        },
        {
          title: "Excellence",
          desc: "Striving for excellence in products, processes, and performance across our organization.",
          icon: "🎯"
        }
      ].map((item, index) => (
        <div
          key={item.title}
          className="group relative transition-all duration-300 hover:-translate-y-1"
        >
          {/* Premium Glow Glass Effect */}

          
          {/* Medium glass glow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-800 blur-sm backdrop-blur-[1px]" />
          

          

          
          {/* Original Green Card */}
          <div className="
            relative
            border-green-500/60
            border-2
            rounded-2xl
            p-5
            transition-all
            duration-300
            group-hover:shadow-xl
            bg-[#008000]
            h-full
            flex
            flex-col
          ">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-semibold text-[#fff] bg-green-100/50 px-2 py-0.5 rounded-full">
                0{index + 1}
              </div>
              <span className="text-xl">{item.icon}</span>
            </div>

            <h3 className="text-base font-bold text-[#fff]">
              {item.title}
            </h3>

            <p className="mt-2 text-xs text-[#fff] leading-relaxed">
              {item.desc}
            </p>

            <div className="mt-4 h-[2px] w-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full group-hover:w-12 transition-all duration-300"></div>
          </div>
        </div>
      ))}
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
            href="https://www.instagram.com/zibral_healthcare_2021/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 h-20 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center hover:border-green-500 hover:text-green-400 transition-all duration-300 group"
          >
            <LiaInstagram className="text-4xl text-gray-400 group-hover:text-green-400" />
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
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.911017538012!2d76.96804850000001!3d10.970088900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859809a932fe3%3A0x1becc5c1a3eb7308!2sCity%20Centre%20Lodge!5e0!3m2!1sen!2sin!4v1780638693251!5m2!1sen!2sin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 transition-all duration-300 text-sm leading-6"
            >
              <h2 className="text-white">Register Office</h2>
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
              Plot No.26,Lotus colony <br/>H Block ,Mumbai
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
            href="https://blackstoneinfomatics.com/"
            className="text-gray-500 hover:text-green-400 transition"
          >
            Powered By BlackStone Informatics
          </Link>
        </div>

      </div>
    </div>
  </div>
</footer>
    </div>
  );
}