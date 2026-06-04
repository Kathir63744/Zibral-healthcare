import React from 'react'

const HeroBAnner = () => {
  return (
    <div>
      <section
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/hero.png')",
      }}
    >
      {/* Dark Overlay */}


      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-8 lg:px-20">
        <div className="max-w-2xl text-white">
          <p className="mb-3 text-blue-700 font-semibold tracking-widest uppercase">
            Trusted Healthcare Solutions
          </p>

          <h1 className="text-4xl text-gray-800 md:text-6xl font-bold leading-tight">
            Your Health Is
            <span className="block text-blue-700">
              Our First Priority
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-800">
            Providing quality healthcare services with advanced medical
            technology and experienced professionals.
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default HeroBAnner
