import React from 'react';
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div>
      <section className="relative w-full">
        {/* Mobile optimized image - shows full content */}
        <div className="block md:hidden w-full">
          <div className="relative w-full h-[220px]">
            <img
              src="/hero2.png"
              alt="Zibral Healthcare"
              className="w-full h-full object-fit object-top"
            />
          </div>
        </div>
        
        {/* Desktop optimized image */}
        <div className="hidden md:block w-full">
          <div className="relative w-full h-[450px] lg:h-[550px] xl:h-[650px]">
            <Image
              src="/hero2.png"
              alt="Zibral Healthcare"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;