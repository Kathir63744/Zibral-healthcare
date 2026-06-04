import React from 'react';
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div>
      <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
        <Image
          src="/hero2.png"
          alt="Zibral Healthcare"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
        />
      </section>
    </div>
  );
};

export default HeroBanner;