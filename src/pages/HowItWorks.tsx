import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
  },
  {
    name: "Compass",
    logo: "/compass-logo.png"
  },
  {
    name: "eXp Realty",
    logo: "/exp-logo.png"
  },
  {
    name: "Redfin",
    logo: "/redfin-logo.png"
  }
];

const scrollingCards = [
  {
    heading: 'Boost Your Online Presence',
    subtext: 'Build your trust, showcase your expertise, and optimize your profile for better discoverability and client attraction.',
  },
  {
    heading: 'Exclusive Online Leads',
    subtext: 'Access real-time, targeted leads that drive success and help you stay competitive and responsive in the market.',
  },
  {
    heading: 'Real Estate Referrals',
    subtext: 'Benefit from single-agent assignments, develop local market authority, and enjoy dedicated support to boost your referral success.',
  },
  {
    heading: 'Transform Your Leads with Data Enrichment',
    subtext: 'Enhance lead quality by enriching data, updating outdated records, and turning raw leads into valuable opportunities.',
  },
  {
    heading: 'Grow with Geo Farming & Referrals',
    subtext: 'We first understand your challenges to tailor a solution that fits your needs.',
  },
  {
    heading: 'Brand with Reputation Management',
    subtext: 'Effortlessly collect reviews, control your online image, and stand out with positive feedback to enhance your reputation.',
  },
];

const faqData = [
  {
    question: "What if I'm not satisfied with the agent I'm matched with?",
    answer: "If you're not satisfied with the agent we've recommended, no problem! Simply contact us, and we'll work quickly to match you with another professional who better suits your preferences and needs. Your satisfaction is our top priority.",
  },
  {
    question: 'How does ZEN Estate verify leads?',
    answer: 'Our lead verification process is thorough and efficient. We use advanced algorithms and manual checks to ensure that all leads are legitimate and qualified. This process helps you focus your time and efforts on leads that are most likely to convert into successful transactions.',
  },
  {
    question: 'How do ZEN Estate agents help me through the home-buying process?',
    answer: 'Our agents work closely with you from start to finish. They understand your needs, explore various options, negotiate deals on your behalf, and provide expert advice to ensure you make informed decisions at every step of the journey.',
  },
  {
    question: 'Can ZEN Estate help with mortgage and insurance professionals as well?',
    answer: 'Absolutely! ZEN Estate not only connects you with real estate agents but also top mortgage and insurance professionals. This way, you have access to a full team of experts to guide you through every aspect of your home-buying or selling process.',
  },
  {
    question: 'How does lead distribution work at ZEN Estate?',
    answer: 'Leads are distributed based on agent availability, expertise, and geographic area, ensuring that you receive leads that match your skills and market knowledge. Our referral process also allows agents to benefit from cross-referrals within our network, maximizing potential business opportunities.',
  },
];

const ScrollingCardsSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate progress through the section
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - viewportHeight)));
      
      // Calculate which card should be active
      const cardIndex = Math.floor(scrollProgress * scrollingCards.length);
      const clampedIndex = Math.max(0, Math.min(scrollingCards.length - 1, cardIndex));
      
      setCurrentCardIndex(clampedIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: `${100 + (scrollingCards.length - 1) * 25}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Boost, Sell, Succeed, Repeat!
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                ZEN Estate Referral Solutions is a powerful Platform as a Service (PaaS) tailored to elevate real estate agents' performance. Our advanced technology accelerates sales, streamlines operations, and helps agents build a stronger pipeline.
              </p>
              <Link
                to="/pricing"
                className="inline-block bg-orange-500 hover:bg-black text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300"
              >
                Get Started With Us
              </Link>
            </div>

            {/* Right Side - Scrolling Cards */}
            <div className="relative h-96 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {scrollingCards.map((card, index) => {
                  const isActive = index === currentCardIndex;
                  const isPrevious = index < currentCardIndex;
                  const isNext = index > currentCardIndex;
                  
                  let transform = '';
                  let opacity = 0;
                  let zIndex = 0;
                  
                  if (isActive) {
                    transform = 'translateY(0px) scale(1)';
                    opacity = 1;
                    zIndex = 10;
                  } else if (isPrevious) {
                    transform = 'translateY(-50px) scale(0.95)';
                    opacity = 0;
                    zIndex = 1;
                  } else if (isNext) {
                    transform = 'translateY(50px) scale(0.95)';
                    opacity = 0.3;
                    zIndex = 5;
                  }
                  
                  return (
                    <div
                      key={index}
                      className="absolute w-full transition-all duration-700 ease-out"
                      style={{
                        transform,
                        opacity,
                        zIndex,
                      }}
                    >
                      <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.heading}</h3>
                        <p className="text-gray-600 leading-relaxed">{card.subtext}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Progress Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {scrollingCards.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentCardIndex ? 'bg-[#800020]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function HowItWorks() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleFAQClick = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Boost Your Success with{' '}
                <span className="bg-gradient-to-r from-[#800020] to-orange-500 bg-clip-text text-transparent">
                  ZEN Estate
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Elevate Your Real Estate Game with ZEN Estate
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 bg-[#800020] rounded-full mr-3"></span>
                  Accelerate Sales
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 bg-[#800020] rounded-full mr-3"></span>
                  Streamline Operations
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 bg-[#800020] rounded-full mr-3"></span>
                  Grow Your Pipeline
                </li>
              </ul>
              <Link
                to="/pricing"
                className="inline-block bg-orange-500 hover:bg-black text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300"
              >
                Get Started With Us
              </Link>
            </div>

            {/* Right Side - Woman with Laptop Image */}
            <div className="flex justify-center">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Woman using laptop"
                className="w-full max-w-md h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gray-50 px-6 text-lg text-gray-600">
                Trusted by <span className="font-bold">500+</span> teams to empower <span className="font-bold">2,00,000+</span> people
              </span>
            </div>
          </div>

          {/* Moving Carousel */}
          <div className="mt-12 overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {[...companyLogos, ...companyLogos].map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white rounded-lg p-6 shadow-md flex items-center justify-center min-w-[200px]"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-[60px] max-h-[40px] object-contain mr-3"
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
        </div>
      </section>

      {/* Committed to Success Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="rounded-3xl p-12 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #800020 0%, #ff6b35 50%, #800020 100%)',
            }}
          >
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Committed To Your Success
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Core Values */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Core Values</h3>
                <div className="space-y-6 text-white">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Real-time lead tracking:</h4>
                    <p className="text-gray-100">Stay ahead by tracking leads instantly.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Automated Client Follow-ups:</h4>
                    <p className="text-gray-100">Never miss a follow-up with automated reminders.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Easy Performance Insights:</h4>
                    <p className="text-gray-100">Gain clear insights to optimize your sales strategy.</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Empowering Performance */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Empowering Agent Performance</h3>
                <p className="text-gray-100 mb-6">
                  ZEN Estate equips agents with the tools they need to close more deals and grow their business.
                </p>
                
                <h4 className="text-xl font-bold text-white mb-4">Smarter, Faster Sales</h4>
                <p className="text-gray-100 mb-8">
                  Our platform accelerates transactions with technology that simplifies every step.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                to="/pricing"
                className="inline-block bg-black hover:bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300"
              >
                Get Started With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Cards Section */}
      <ScrollingCardsSection />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Questions & Answers
          </h2>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg bg-white">
                <button
                  onClick={() => handleFAQClick(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900">
                    {String(index + 1).padStart(2, '0')} {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 transition-all duration-300 ease-in-out">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}