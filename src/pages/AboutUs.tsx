import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const journeyCards = [
  {
    heading: 'Building Customer Trust',
    subtext: 'We start by understanding each client\'s unique needs, offering respect, clarity, and consistent support to earn trust and build long-lasting relationships.',
  },
  {
    heading: 'Connecting with Experts',
    subtext: 'Our network links clients to skilled, vetted real estate professionals committed to delivering personalized guidance for successful property transactions.',
  },
  {
    heading: 'Elevating the Experience',
    subtext: 'We don\'t just match clients with agents - we provide a smooth, modern journey shaped around transparency, quality, and outstanding communication.',
  },
  {
    heading: 'Achieving Real Results',
    subtext: 'By combining client-first values, expert support, and seamless service, we help families and individuals reach their real estate dreams and confidence.',
  },
];

const companyLogos = [
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

export default function AboutUs() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredImageCard, setHoveredImageCard] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % journeyCards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/free-photo-of-down-below-shot-of-modern-city-buildings.jpeg')`
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-8">Welcome to ZEN Estate</h1>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-[#800020] mb-4">200+</div>
              <div className="text-xl font-semibold text-white">CLIENTS SERVED</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow-2xl">
            <video
              className="w-full h-[600px] object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/9365264-hd_1920_1080_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Four Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                heading: 'Trusted Network',
                subtext: 'Connect with top-rated real estate professionals you can rely on.',
              },
              {
                heading: 'Seamless Connections',
                subtext: 'We make it easy to find the right expert for your real estate needs.',
              },
              {
                heading: 'Sustainable Growth',
                subtext: 'Sustainable growth means achieving long-term success.',
              },
              {
                heading: 'Your Real Estate Ally',
                subtext: 'Partnering with you to achieve your real estate goals.',
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-4 hover:shadow-2xl ${
                  hoveredCard === index
                    ? 'bg-black text-white'
                    : 'bg-white text-black shadow-lg border border-gray-100'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h3 className="text-xl font-bold mb-4">{card.heading}</h3>
                <p className={`leading-relaxed ${hoveredCard === index ? 'text-gray-300' : 'text-gray-600'}`}>
                  {card.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Image Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Customer-First Philosophy',
                image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
              },
              {
                title: 'Trusted Real Estate Partner',
                image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
              },
              {
                title: 'Guiding Every Real Estate Move',
                image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
              },
            ].map((card, index) => (
              <div
                key={index}
                className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl"
                onMouseEnter={() => setHoveredImageCard(index)}
                onMouseLeave={() => setHoveredImageCard(null)}
              >
                <div className="relative h-80">
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredImageCard === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                  
                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {[
              { number: '2,000', label: 'Satisfied Agents' },
              { number: '2,490', label: 'Active Realtors' },
              { number: '520,234', label: 'Analyzed' },
              { number: '1,500', label: 'Completed Cases' },
              { number: '789,925', label: 'Screened' },
              { number: '20,465', label: 'Hand-Picked' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-[#800020] mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Journey 0 to 200 Clients
          </h2>
          
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentCardIndex * 100}%)` }}
            >
              {journeyCards.map((card, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full px-4"
                >
                  <div className="bg-white/20 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/30 max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">{card.heading}</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">{card.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {journeyCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCardIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentCardIndex ? 'bg-[#800020]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section with Moving Logos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome to ZEN Estate</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At ZEN Estate, we're more than just a real estate referral network – we're your trusted partner on the journey to achieving your real estate goals. Founded with a vision to redefine the real estate experience, ZEN Estate is dedicated to connecting individuals and families with top-tier real estate professionals who can guide them every step of the way.
              </p>
              <Link
                to="/pricing"
                className="relative inline-block bg-black text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-500 overflow-hidden group"
              >
                <span className="relative z-10">Get Started With Us</span>
                <div className="absolute bottom-0 left-0 w-full h-0 bg-orange-500 transition-all duration-500 group-hover:h-full"></div>
              </Link>
            </div>

            {/* Moving Logos Collage */}
            <div className="relative h-96 overflow-hidden rounded-2xl bg-gradient-to-b from-transparent via-gray-50 to-transparent">
              <div className="absolute inset-0">
                {[...Array(3)].map((_, columnIndex) => (
                  <div
                    key={columnIndex}
                    className="absolute w-1/3 h-full"
                    style={{ left: `${columnIndex * 33.33}%` }}
                  >
                    <div 
                      className="flex flex-col space-y-8 animate-scroll-up"
                      style={{
                        animation: `scrollUp ${15 + columnIndex * 2}s linear infinite`,
                        animationDelay: `${columnIndex * 2}s`
                      }}
                    >
                      {[...companyLogos, ...companyLogos].map((company, index) => (
                        <div
                          key={`${columnIndex}-${index}`}
                          className="bg-white rounded-lg p-4 shadow-md mx-2 flex items-center justify-center min-h-[80px]"
                        >
                          <img
                            src={company.logo}
                            alt={company.name}
                            className="max-w-[60px] max-h-[40px] object-contain mr-2"
                            onError={(e) => {
                              // Fallback to placeholder if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const fallback = target.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                          {/* Fallback placeholder */}
                          <div className="w-12 h-12 bg-gray-200 rounded-full hidden items-center justify-center mr-3">
                            <span className="text-lg font-bold text-gray-600">
                              {company.name.charAt(0)}
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-gray-800">{company.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Gradient overlays for fade effect */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}