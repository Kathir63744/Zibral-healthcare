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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans dark:bg-white">
      <Navbar />
      <HeroBanner />
      <section className="py-16 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="relative overflow-hidden rounded-[40px] border border-blue-100 bg-gradient-to-br from-white via-blue-50/60 to-sky-50 shadow-[0_20px_60px_rgba(59,130,246,0.08)]">

      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-100/40 rounded-full blur-3xl"></div>

      <div className="relative grid lg:grid-cols-[220px_1fr] gap-10 items-center p-10 lg:p-14">

        {/* Left Side */}
        <div className="flex flex-col items-center lg:items-start">
          <span className="text-blue-600 uppercase tracking-[4px] text-sm font-semibold">
            About Zibral Healthcare
          </span>

          <div className="w-16 h-[3px] bg-blue-600 rounded-full mt-4"></div>

          <h3 className="mt-6 text-5xl font-bold text-gray-900">
            5+
          </h3>

          <p className="text-gray-500 mt-2">
            Years of Healthcare Excellence
          </p>
        </div>

{/* Right Side */}
<div>
  <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
    Delivering{" "}
    <span className="text-blue-600">
      Trusted Pharmaceutical Solutions
    </span>{" "}
    For A Healthier Tomorrow
  </h2>

  <p className="mt-6 text-lg leading-9 text-gray-600">
    Zibral Healthcare is committed to enhancing healthcare outcomes through
    high-quality pharmaceutical products, scientifically developed formulations,
    and ethical business practices.
  </p>

  <p className="mt-5 text-lg leading-9 text-gray-600">
    We focus on delivering safe, effective, and affordable medicines that
    support patients, healthcare professionals, and communities with reliable
    therapeutic care.
  </p>

  <p className="mt-5 text-lg leading-9 text-gray-600">
    Our product portfolio is driven by strict quality standards, continuous
    research, and innovation, ensuring consistent performance, patient safety,
    and long-term trust.
  </p>
</div>

      </div>
    </div>
  </div>
</section>
      <VisionMissionSection />
      <ProductsSection />
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
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
             Dermatologically Tested
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
<div className="grid lg:grid-cols-2 gap-16 items-center mb-32">

  {/* LEFT CONTENT */}
  <div>

    <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
      Muscle • Nerve • Cardiovascular Health
    </span>

    <h2 className="text-5xl font-bold text-slate-900 mt-5">
      CRAMPLIN
    </h2>

    <p className="text-xl text-slate-600 mt-2">
      Magnesium Bisglycinate + L-Carnitine + Methylcobalamin + Folic Acid +
      Vitamin D3 + Tocotrienols + Zinc
    </p>

    <p className="mt-5 text-slate-600 leading-8">
      Advanced nutritional support formulated to promote muscle strength,
      nerve regeneration, energy production, and cardiovascular wellness.
    </p>

    {/* Benefits */}
    <div className="grid md:grid-cols-2 gap-3 mt-8">

      <div className="p-4 rounded-2xl text-slate-800 border border-gray-900">
        Supports nerve regeneration
      </div>

      <div className="p-4 rounded-2xl text-slate-800 border border-gray-900">
        Reduces muscle cramps & spasms
      </div>

      <div className="p-4 rounded-2xl text-slate-800 border border-gray-900">
        Improves muscle strength
      </div>

      <div className="p-4 rounded-2xl text-slate-800 border border-gray-900">
        Supports cardiovascular wellness
      </div>

      <div className="p-4 rounded-2xl text-slate-800 border border-gray-900">
        Maintains Vitamin D & Magnesium levels
      </div>

      <div className="p-4 rounded-2xl text-slate-800 border border-gray-900">
        Antioxidant protection
      </div>

    </div>

    {/* Indications */}
    <div className="mt-10">

      <h4 className="font-semibold text-slate-900 mb-4">
        Key Indications
      </h4>

      <div className="grid grid-cols-2 gap-3 text-sm text-slate-600">

        <div>• Muscle cramps</div>
        <div>• Nocturnal leg cramps</div>
        <div>• Diabetic neuropathy</div>
        <div>• Tingling & numbness</div>
        <div>• Chronic fatigue</div>
        <div>• Muscle weakness</div>
        <div>• Cardiovascular support</div>
        <div>• Type 2 Diabetes support</div>

      </div>

    </div>

  </div>

  {/* RIGHT SHOWCASE */}
  <div className="relative">

    <div className="absolute inset-0 bg-orange-100 rounded-[40px] blur-3xl opacity-40"></div>

    <div className="relative bg-white rounded-[32px] border border-slate-100 shadow-sm p-8">

      <img
        src="/CRAMPLIN.jpg"
        alt="CRAMPLIN"
        className="w-full object-contain"
      />

      {/* Highlight Images */}
      <div className="grid grid-cols-3 gap-4 mt-8">

        <div className="text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border">
            <img
              src="/muscle.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <p className="text-xs text-slate-600 mt-2">Muscle Strength</p>
        </div>

        <div className="text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border">
            <img
              src="/nerve.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <p className="text-xs text-slate-600 mt-2">Nerve Health</p>
        </div>

        <div className="text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border">
            <img
              src="/heart.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <p className="text-xs text-slate-600 mt-2">Cardiovascular</p>
        </div>

      </div>

      {/* Ingredients */}
      <div className="grid grid-cols-4 gap-3 mt-8">

        <div className="rounded-xl text-slate-800 bg-slate-50 p-3 text-center text-xs">
          Magnesium
        </div>

        <div className="rounded-xl text-slate-800 bg-slate-50 p-3 text-center text-xs">
          L-Carnitine
        </div>

        <div className="rounded-xl text-slate-800 bg-slate-50 p-3 text-center text-xs">
          Vitamin D3
        </div>

        <div className="rounded-xl text-slate-800 bg-slate-50 p-3 text-center text-xs">
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
<section className="py-20 px-6 bg-white">
  <div className="max-w-6xl mx-auto">

    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-50 via-white to-sky-50 border border-blue-100 shadow-[0_15px_50px_rgba(59,130,246,0.08)]">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-100/40 rounded-full blur-3xl"></div>

      <div className="relative px-8 md:px-14 py-14 md:py-16">

        {/* Badge */}
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
          Our Commitment
        </span>

        {/* Heading */}
        <h2 className="mt-6 text-3xl md:text-5xl font-bold text-slate-900 leading-tight max-w-4xl">
          Committed To Building A
          <span className="text-blue-600"> Healthier Future </span>
          Through Quality & Innovation
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg leading-8 text-slate-600 max-w-4xl">
          At <span className="font-semibold text-blue-700">Zibral Healthcare</span>,
          we are dedicated to advancing healthcare through innovation,
          uncompromising quality, and responsible practices. We collaborate
          closely with healthcare professionals and partners to deliver trusted
          pharmaceutical solutions that improve patient outcomes and contribute
          to healthier communities.
        </p>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-5 mt-10">

          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-semibold text-slate-900">
              Innovation
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Developing effective healthcare solutions through continuous
              research and scientific advancement.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-semibold text-slate-900">
              Quality
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Maintaining stringent standards to ensure safety, reliability,
              and therapeutic excellence.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
            <h3 className="font-semibold text-slate-900">
              Responsibility
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Building trust through ethical practices and a commitment to
              patient well-being.
            </p>
          </div>

        </div>

      </div>
    </div>

  </div>
</section>

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <span className="inline-flex px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
        Our Foundation
      </span>

      <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
        Core Values
      </h2>

      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        The principles that guide our commitment to quality healthcare,
        innovation, and patient well-being.
      </p>
    </div>

    {/* Values Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {[
        {
          title: "Quality First",
          desc: "We never compromise on quality, safety, and compliance, ensuring reliable healthcare solutions."
        },
        {
          title: "Innovation",
          desc: "Continuous research and development drive our efforts to create better healthcare solutions."
        },
        {
          title: "Integrity",
          desc: "We uphold ethical business practices and transparency in every aspect of our operations."
        },
        {
          title: "Patient Care",
          desc: "Patient well-being remains at the center of every decision and product we deliver."
        },
        {
          title: "Customer Satisfaction",
          desc: "Building long-term relationships through trust, service excellence, and reliability."
        },
        {
          title: "Excellence",
          desc: "Striving for excellence in products, processes, and performance across our organization."
        }
      ].map((item, index) => (
        <div
          key={item.title}
          className="
            group
            bg-white
            border
            border-slate-200
            rounded-3xl
            p-8
            transition-all
            duration-300
            hover:border-blue-200
            hover:shadow-md
          "
        >
          {/* Number */}
          <div className="text-sm font-semibold text-blue-600 mb-5">
            0{index + 1}
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-slate-900">
            {item.title}
          </h3>

          {/* Description */}
          <p className="mt-4 text-slate-600 leading-7">
            {item.desc}
          </p>

          {/* Minimal Line */}
          <div className="mt-6 h-[2px] w-10 bg-blue-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
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
    </div>
  );
}