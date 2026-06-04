export default function ProductShapeSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">

      {/* Background Shape */}
      <svg
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[420px] h-[650px] opacity-80 pointer-events-none"
        viewBox="0 0 320 500"
      >
        <path
          d="M40 480 C90 480,150 470,220 430 C280 390,290 330,290 250 L290 170 C250 110,260 50,310 10 C240 20,170 40,120 90 C90 120,90 170,90 250 C90 340,95 410,40 480 Z"
          fill="#0891b2"
        />
      </svg>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-gray-800">
          Our Products
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition">
            Tablets
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition">
            Capsules
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition">
            Syrups
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition">
            Healthcare Solutions
          </div>

        </div>
      </div>
    </section>
  );
}