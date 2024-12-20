import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex items-center justify-between py-10 md:py-20 flex-wrap">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#2B4570] mb-2">
          Idbook Hotel
        </h1>
        <div className="flex items-baseline gap-4 mb-4">
          <span className="text-4xl md:text-6xl font-bold text-[#2B4570]">
            &
          </span>
          <span
            className="text-4xl md:text-6xl font-bold text-transparent"
            style={{
              WebkitTextStroke: '2px #2B4570',
            }}
          >
            Corporate
          </span>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-4xl md:text-6xl font-bold text-[#2B4570]">
            Partners
          </h2>
          <svg
            width="40"
            height="24"
            viewBox="0 0 40 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-2"
          >
            <path
              d="M39.0607 13.0607C39.6464 12.4749 39.6464 11.5251 39.0607 10.9393L29.5147 1.39343C28.9289 0.807647 27.9792 0.807647 27.3934 1.39343C26.8076 1.97922 26.8076 2.92896 27.3934 3.51475L35.8787 12L27.3934 20.4853C26.8076 21.071 26.8076 22.0208 27.3934 22.6066C27.9792 23.1924 28.9289 23.1924 29.5147 22.6066L39.0607 13.0607ZM0 13.5H38V10.5H0V13.5Z"
              fill="#2B4570"
            />
          </svg>
        </div>
      </div>

      {/* Right side - Image overlay */}
      <div>
        <Image
          src="https://www.idbookhotels.com/_next/image?url=%2Fcorporate%2Fhero-image.png&w=640&q=75"
          alt="Corporate imagery"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default HeroSection;
