import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import StackedCards from '../components/StackedCards';

const corporateImages = [
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
  'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
  'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
  'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg',
];

const stackedCards = [
  {
    heading: 'ZEN Estate Funnel System',
    subtext: 'Capture, nurture, and convert leads with ease using our all-in-one platform designed to power every step of your sales journey.',
  },
  {
    heading: 'Lead Funnel Platform',
    subtext: 'Easily build websites, capture leads, and manage appointments—all in one place.',
  },
  {
    heading: 'Nurture with HighLevel',
    subtext: 'Build lasting relationships through personalized, multi-channel follow-ups that keep leads engaged and moving forward.',
  },
  {
    heading: 'Smart Booking Automation',
    subtext: 'Automate appointment scheduling with AI-powered messaging and hands-free lead engagement.',
  },
  {
    heading: 'Close More with HighLevel',
    subtext: 'Streamline your pipeline, track performance, and manage payments—all in one powerful platform built for digital agencies.',
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

export default function CRM() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % corporateImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
                Empower Your Business with{' '}
                <span className="bg-gradient-to-r from-[#800020] to-orange-500 bg-clip-text text-transparent">
                  Powerful CRM
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Streamline your workflow and close more deals with ease.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 bg-[#800020] rounded-full mr-3"></span>
                  Smart Task Management
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 bg-[#800020] rounded-full mr-3"></span>
                  Lead Tracking Made Easy
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 bg-[#800020] rounded-full mr-3"></span>
                  Performance Insights
                </li>
              </ul>
              <Link
                to="/pricing"
                className="inline-block bg-orange-500 hover:bg-black text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300"
              >
                Get Started With Us
              </Link>
            </div>

            {/* Corporate Images Carousel */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={corporateImages[currentImageIndex]}
                  alt="Corporate meeting"
                  className="w-full h-80 object-cover transition-all duration-500"
                />
              </div>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {corporateImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-[#800020]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Boxes Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                heading: 'Want More Customers?',
                subtext: "Discover top digital marketers' strategies to increase your online profits.",
              },
              {
                heading: 'Keep Clients Longer',
                subtext: 'Streamline processes, save money, and boost client satisfaction with our all-in-one platform.',
              },
              {
                heading: 'Scale Your Business',
                subtext: 'Connect with successful agency owners to close more deals and grow your services.',
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`p-8 cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${
                  hoveredCard === index
                    ? 'bg-black text-white rounded-2xl shadow-2xl'
                    : 'bg-transparent text-black'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h3 className="text-2xl font-bold mb-4">{card.heading}</h3>
                <p className={`leading-relaxed ${hoveredCard === index ? 'text-gray-300' : 'text-gray-600'}`}>
                  {card.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stacked Scrolling Cards */}
      <StackedCards stackedCards={stackedCards} />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Questions & Answers
          </h2>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
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
    </div>
  );
}