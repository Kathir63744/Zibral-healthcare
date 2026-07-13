"use client";

import React from "react";

export default function VisionMissionSection() {
  return (
    <section className="relative py-16 bg-green-200 overflow-hidden">
      {/* Background Ambient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-green-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Compact Heading */}
        <div className="text-center mb-10">
          <span className="inline-flex px-4 py-1.5 rounded-full bg-emerald-950/60 backdrop-blur-md text-emerald-200 text-xs font-semibold border border-emerald-500/40">
            ✦ Healthcare Excellence ✦
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-700">
            Vision <span className="text-green-700">&</span> Mission
          </h2>
          <div className="flex justify-center mt-3">
            <div className="w-16 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" />
          </div>
        </div>

        {/* Equal Height Cards Grid - Using items-stretch for parallel alignment */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Mission Card */}
          <div className="group relative transition-all duration-300 hover:-translate-y-1 h-full">
            {/* Broad Outline Effect */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-400 rounded-[60px_14px_14px_60px] opacity-60 blur-md group-hover:opacity-100 transition duration-300" />
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-green-700 rounded-[58px_12px_12px_58px] opacity-90" />
            
            {/* Glass Card - Fixed height, flex column for parallel alignment */}
            <div
              className="relative bg-emerald-400/40 backdrop-blur-xl border border-emerald-400/30 shadow-xl p-6 h-full flex flex-col"
              style={{ borderRadius: "48px 12px 12px 48px" }}
            >
              <div className="absolute inset-0 rounded-[48px_12px_12px_48px] bg-gradient-to-br from-emerald-400/8 to-transparent pointer-events-none" />
              
              {/* Fixed position content - starts at top */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🎯</span>
                  <span className="text-sm font-bold tracking-[3px] uppercase text-white">Our Mission</span>
                </div>

                <div className="w-12 h-[2px] bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-3" />

                <p className="text-white leading-relaxed text-sm flex-1">
                  To provide innovative, high-quality and affordable healthcare products that enhance patient health and quality of life. Committed to ethics, integrity, and continuous innovation for global healthcare needs.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative transition-all duration-300 hover:-translate-y-1 h-full">
            {/* Broad Outline Effect */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-teal-400 via-emerald-500 to-green-400 rounded-[14px_60px_60px_14px] opacity-60 blur-md group-hover:opacity-100 transition duration-300" />
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-700 rounded-[12px_58px_58px_12px] opacity-90" />
            
            {/* Glass Card - Fixed height, flex column for parallel alignment */}
            <div
              className="relative bg-emerald-400/40  border border-emerald-400/30 shadow-xl p-6 h-full flex flex-col"
              style={{ borderRadius: "12px 48px 48px 12px" }}
            >
              <div className="absolute inset-0 rounded-[12px_48px_48px_12px] bg-gradient-to-teal-100 from-teal-400/8 to-transparent pointer-events-none" />
              
              {/* Fixed position content - starts at top */}
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🌟</span>
                  <span className="text-sm font-bold tracking-[3px] uppercase text-white">Our Vision</span>
                </div>

                <div className="w-12 h-[2px] bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mb-3" />

                <p className="text-white leading-relaxed text-sm flex-1">
                  To become a trusted global healthcare company recognized for excellence in quality, innovation, and commitment to improving health outcomes for communities worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Compact Bottom Accent */}

      </div>
    </section>
  );
}