import React from 'react';

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

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Senior Real Estate Agent',
    company: 'Apex Realty',
    content: 'ZEN Estate has completely transformed how I manage my client relationships. The lead quality is exceptional, and the automated follow-up system has increased my conversion rate by 40%. I can\'t imagine working without it now.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Property Developer',
    company: 'Haven Homes',
    content: 'Working with ZEN Estate has been a game-changer for our development projects. Their network of professionals is truly top-tier, and the referral system has brought us clients we never would have reached otherwise.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Real Estate Broker',
    company: 'Pinnacle Properties',
    content: 'The platform is incredibly intuitive and the results speak for themselves. In just 6 months, I\'ve seen a 60% increase in qualified leads and closed more deals than ever before. Highly recommend to any serious agent!',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Team Leader',
    company: 'Sterling Realty',
    content: 'The CRM integration and lead generation tools have doubled our team\'s conversion rates. The real-time analytics help us make data-driven decisions that consistently improve our performance.',
    rating: 5,
  },
  {
    name: 'Lisa Martinez',
    role: 'Independent Agent',
    company: 'Horizon Homes',
    content: 'As an independent agent, ZEN Estate\'s professional website design and SEO services helped me rank #1 in my local market. The investment paid for itself within the first month.',
    rating: 5,
  },
  {
    name: 'Robert Wilson',
    role: 'Luxury Home Specialist',
    company: 'Summit Properties',
    content: 'The exclusive leads and premium business profile features have elevated my brand presence significantly. My clients appreciate the professional touch, and I\'ve expanded into new luxury markets.',
    rating: 5,
  },
  {
    name: 'Jennifer Adams',
    role: 'Commercial Real Estate Agent',
    company: 'Blue Sky Realty',
    content: 'ZEN Estate\'s commercial lead verification process is outstanding. Every lead I receive is pre-qualified and ready to move forward. It\'s saved me countless hours and increased my closing ratio.',
    rating: 5,
  },
  {
    name: 'Mark Foster',
    role: 'Real Estate Consultant',
    company: 'Dream Dwellings',
    content: 'The automated appointment scheduling and live transfer capabilities have streamlined my entire workflow. I can focus on what I do best - closing deals - while the platform handles the rest.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="pt-24 pb-16">
      {/* Header Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/usa-united-states-america-flag-flagpole-near-skyscrapers-cloudy-sky.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-12">
            What They Are Saying
          </h1>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16 uppercase bg-gradient-to-r from-[#800020] to-orange-500 bg-clip-text text-transparent">
            Testimonials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  <p className="text-[#800020] text-xs font-semibold">{testimonial.company}</p>
                </div>
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