"use client";

import React from "react";

export default function VisionMissionSection() {
  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-b from-white via-green-50/30 to-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            Healthcare Excellence
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Vision & Mission
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Empowering healthier lives through innovation, trust and commitment
            to pharmaceutical excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Mission Card */}
          <div
            className="bg-white border-2 border-green-500 shadow-md p-8 min-h-[280px] flex flex-col justify-center"
            style={{
              borderRadius: "60px 16px 16px 60px",
            }}
          >
            <span className="text-lg font-semibold tracking-[3px] uppercase text-green-600">
              Our Mission
            </span>

            <div className="w-12 h-[2px] bg-green-600 mt-4" />



            <p className="mt-4 text-gray-600 leading-7">
              To provide innovative, high-quality and affordable healthcare
              products that enhance patient health and quality of life. We are
              committed to maintaining the highest standards of ethics,
              integrity and customer satisfaction while continuously improving
              pharmaceutical solutions for global healthcare needs.
            </p>
          </div>

          {/* Vision Card */}
          <div
            className="bg-white border-2 border-blue-500 shadow-md p-8 min-h-[280px] flex flex-col justify-center"
            style={{
              borderRadius: "16px 60px 60px 16px",
            }}
          >
            <span className="text-lg font-semibold tracking-[3px] uppercase text-blue-600">
              Our Vision
            </span>

            <div className="w-12 h-[2px] bg-blue-600 mt-4" />

            <p className="mt-4 text-gray-600 leading-7">
  To become trusted global healthcare company
  recognized for excellence in product quality,innovation,
  commitment to improving global health outcomes through reliable
  pharmaceutical solutions that positively impact communities and
  contribute to healthier future generations to come.
</p>
          </div>
        </div>
      </div>
    </section>
  );
}