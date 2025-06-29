import React, { useEffect, useState } from 'react';

const brands = [
  {
    name: "Sotheby's",
    logo: "/SothebysLogo.jpg"
  },
  {
    name: "Berkshire Hathaway",
    logo: "/berkshire hathaway.jpg"
  },
  {
    name: "EXIT Realty",
    logo: "/exit prime realty.png"
  },
  {
    name: "Coldwell Banker",
    logo: "/coldwell banker.png"
  },
  {
    name: "Century 21",
    logo: "/Century 21.png"
  },
  {
    name: "Vesta Preferred Realty",
    logo: "/Vesta Preferred Reality.png"
  },
  {
    name: "American Corp",
    logo: "/americancorp.jpg"
  },
  {
    name: "RE/MAX",
    logo: "/REMAX.png"
  },
  {
    name: "Keller Williams",
    logo: "/kellerwilliams.png"
  }
];

export default function BrandsSection() {
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBrandIndex((prevIndex) => (prevIndex + 1) % brands.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Connecting You With Trusted Brands
        </h2>
        
        {/* Carousel Container */}
        <div className="relative overflow-hidden h-32">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentBrandIndex * (100 / 3)}%)` }}
          >
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-1/3 px-8 flex flex-col items-center justify-center"
              >
                {/* Real Logo */}
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="w-20 h-20 bg-gray-200 rounded-full hidden items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600">
                      {brand.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{brand.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {brands.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBrandIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBrandIndex ? 'bg-[#800020]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}