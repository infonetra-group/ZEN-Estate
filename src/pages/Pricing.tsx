import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

const faqData = [
  {
    question: 'How does ZEN Estate verify leads?',
    answer: 'Our lead verification process is handled entirely by professional Inside Sales Agents (ISAs). Each lead is manually verified to ensure authenticity and quality, helping you focus only on prospects that are genuinely interested and likely to convert.',
  },
  {
    question: 'How do ZEN Estate agents help me through the home-buying process?',
    answer: 'Our agents work closely with you from start to finish. They understand your needs, explore various options, negotiate deals on your behalf, and provide expert advice to ensure you make informed decisions at every step of the journey.',
  },
  {
    question: 'How does lead distribution work at ZEN Estate?',
    answer: 'Leads are distributed based on agent availability, expertise, and geographic area, ensuring that you receive leads that match your skills and market knowledge. Our referral process also allows agents to benefit from cross-referrals within our network, maximizing potential business opportunities.',
  },
  {
    question: 'How are the 3 guaranteed closings in 6 months ensured?',
    answer: 'We don\'t just deliver leads — we deliver results. With our one-time flat fee, you gain access to ISA-verified, ready-to-act buyers and sellers, plus live transfers and pre-set appointments designed to convert. And here\'s our promise: if you don\'t close at least 3 deals within 6 months, we\'ll keep sending you exclusive, high-quality leads at no additional cost until you do. That\'s how confident we are in the system — you invest once, and we work with you until you win.',
  },
  {
    question: 'Are the leads exclusive to me?',
    answer: 'Yes. All leads provided through this package are 100% exclusive to you. We don\'t share or recycle leads. When a prospect is transferred or scheduled, it\'s yours to close—no competition from other agents in your territory',
  },
  {
    question: 'What\'s included in the Premium Business Profile?',
    answer: 'Your Premium Business Profile includes a custom landing page, branding assets, social proof elements (testimonials, reviews), and the ability to upload unlimited listings. It enhances your online presence, improves trust with prospects, and integrates seamlessly with our lead distribution system.',
  },
  {
    question: 'What does ISA-verified mean?',
    answer: 'ISA-verified means each lead has been screened and qualified by a trained Inside Sales Agent before being passed to you. This ensures you\'re only spending time with serious prospects, not cold or unresponsive contacts.',
  },
  {
    question: 'Can I pause or cancel anytime?',
    answer: 'Yes. These plans offer complete flexibility. You can pause your service at any time—whether for personal reasons or market slowdowns—and cancel without penalties or long-term commitments.',
  },
  {
    question: 'How do Meta Paid Listings work?',
    answer: 'We promote your listings using targeted Meta (Facebook & Instagram) ads to attract more high-intent buyers and sellers in your selected area. This boosts visibility and generates more engagement and conversions for your properties.',
  },
  {
    question: 'How does the CRM integration benefit my business?',
    answer: 'CRM integration helps you track, follow up, and convert your leads more efficiently. All leads flow directly into your CRM, where you can automate responses, schedule appointments, and manage communications—saving you time and closing more deals.',
  },
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('yearly');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleFAQClick = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const FAQSection = () => (
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
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/new-york-stock-exchange-wall-street-new-york-city.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6">
            Custom Plans for Your Real Estate Growth
          </h1>
          <p className="text-xl text-white mb-8">
            Let's get you started in less than 5 minutes!
          </p>
          <h2 className="text-3xl font-bold uppercase text-white mb-8">
            Choose Your Plan
          </h2>
          
          {/* Tab Buttons */}
          <div className="flex justify-center space-x-4 mb-12">
            <button
              onClick={() => setActiveTab('yearly')}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === 'yearly'
                  ? 'bg-[#800020] text-white'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
            >
              Billed Yearly
            </button>
            <button
              onClick={() => setActiveTab('individual')}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === 'individual'
                  ? 'bg-[#800020] text-white'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
            >
              Individual Plans
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === 'team'
                  ? 'bg-[#800020] text-white'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
            >
              Team Plans
            </button>
          </div>
        </div>
      </section>

      {/* Billed Yearly Content */}
      {activeTab === 'yearly' && (
        <>
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Simple and Transparent Pricing
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Don't miss your chance to elevate your real estate business! Try ZEN Estate today to explore our yearly subscription package and start receiving high-quality, exclusive leads tailored to your needs.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
                      <p className="text-gray-600">
                        Get round-the-clock online support for instant assistance and expert guidance whenever you need it.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Consultation</h3>
                      <p className="text-gray-600">
                        Gain expert guidance and personalized consultancy to accelerate your business growth.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 max-w-md w-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                    <p className="text-gray-600 mb-6">90 Day Money Back Guarantee</p>
                    
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-gray-900">$190</span>
                      <span className="text-lg text-gray-600 ml-2">Annually</span>
                    </div>
                    
                    <hr className="border-gray-200 mb-6" />
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Features</h4>
                    <ul className="space-y-3 mb-8 text-gray-700">
                      <li>• $199 Flat referral fee</li>
                      <li>• Up To 35 Referrals</li>
                      <li>• Work in Desired Area</li>
                      <li>• Exclusive Leads</li>
                      <li>• No Contract</li>
                    </ul>
                    
                    <button className="w-full bg-orange-500 hover:bg-black text-white font-bold py-3 rounded-lg transition-colors duration-300">
                      Let's Start
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <FAQSection />
        </>
      )}

      {/* Individual Plans Content */}
      {activeTab === 'individual' && (
        <>
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Tier 1 */}
                <div className="bg-gray-300 text-black rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-2">TIER 1</h3>
                  <p className="text-gray-700 mb-6">90 Day Money Back Guarantee</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$449</span>
                    <span className="text-lg text-gray-600 ml-2">one time</span>
                  </div>
                  
                  <h4 className="text-lg font-bold mb-4">Features</h4>
                  <ul className="space-y-2 text-sm mb-8">
                    <li>• 10% Referral Fee</li>
                    <li>• Upto 3 Referrals /Month</li>
                    <li>• 5-7 Zip Codes</li>
                    <li>• ISA Verified</li>
                    <li>• Exclusive Leads</li>
                    <li>• Pause / Resume Anytime</li>
                    <li>• Cancel Anytime</li>
                    <li className="line-through text-gray-500">• Business Profile</li>
                    <li className="line-through text-gray-500">• CRM Integration</li>
                    <li className="line-through text-gray-500">• Premium Business Profile</li>
                    <li className="line-through text-gray-500">• Upload Unlimited Listings</li>
                  </ul>
                  
                  <button className="w-full bg-orange-500 hover:bg-black text-white font-bold py-3 rounded-lg transition-colors duration-300">
                    Get Started
                  </button>
                </div>

                {/* Tier 2 */}
                <div className="bg-gray-800 text-white rounded-2xl p-8 shadow-lg relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold mb-2">TIER 2</h3>
                  <p className="text-gray-300 mb-6">90 Day Money Back Guarantee</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$749</span>
                    <span className="text-lg text-gray-300 ml-2">one time</span>
                  </div>
                  
                  <h4 className="text-lg font-bold mb-4">Features</h4>
                  <ul className="space-y-2 text-sm mb-8">
                    <li>• 5% Referral Fee</li>
                    <li>• 10 Zip Codes / Or 3 Counties</li>
                    <li>• Upto 5 Scheduled Appointments /Month</li>
                    <li>• Guaranteed Closing in 6 Month</li>
                    <li>• Business Profile</li>
                    <li>• Exclusive Leads</li>
                    <li>• ISA Verified</li>
                    <li>• Pause / Resume Anytime</li>
                    <li>• Cancel Anytime</li>
                    <li className="line-through text-gray-500">• Premium Business Profile</li>
                    <li className="line-through text-gray-500">• CRM Included (optional)</li>
                    <li className="line-through text-gray-500">• Upload Unlimited Listings</li>
                  </ul>
                  
                  <button className="w-full bg-orange-500 hover:bg-black text-white font-bold py-3 rounded-lg transition-colors duration-300">
                    Get Started
                  </button>
                </div>

                {/* Tier 3 */}
                <div className="bg-black text-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-2">TIER 3</h3>
                  <p className="text-gray-300 mb-6">90 Day Money Back Guarantee</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$1325</span>
                    <span className="text-lg text-gray-300 ml-2">one time</span>
                  </div>
                  
                  <h4 className="text-lg font-bold mb-4">Features</h4>
                  <ul className="space-y-2 text-sm mb-8">
                    <li>• $249 Flat Referral Fee</li>
                    <li>• 15 Zips / 5 Cities / or 5 Counties</li>
                    <li>• Upto 8 Live Transfers & Appointments</li>
                    <li>• 3 Guaranteed Closing in 6 Months</li>
                    <li>• Premium Business Profile</li>
                    <li>• Upload Unlimited Listings</li>
                    <li>• Meta Paid listings</li>
                    <li>• Exclusive Leads</li>
                    <li>• I.S.A Verified</li>
                    <li>• CRM Included (optional)</li>
                    <li>• Pause / Resume Anytime</li>
                    <li>• Cancel Anytime</li>
                  </ul>
                  
                  <button className="w-full bg-orange-500 hover:bg-black text-white font-bold py-3 rounded-lg transition-colors duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </section>
          <FAQSection />
        </>
      )}

      {/* Team Plans Content */}
      {activeTab === 'team' && (
        <>
          <section className="py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Team of 5 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">TEAM OF 5</h3>
                  <p className="text-gray-600 mb-6">90 Day Money Back Guarantee</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">$1999</span>
                    <span className="text-lg text-gray-600 ml-2">one time</span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Features</h4>
                  <ul className="space-y-2 text-sm text-gray-700 mb-8">
                    <li>• 5% Referral Fee</li>
                    <li>• 20 Zips / 10 Cities / or 10 Counties</li>
                    <li>• Upto 10 Scheduled Appointments</li>
                    <li>• 5 Business Profiles</li>
                    <li>• Upload Unlimited Listings</li>
                    <li>• CRM Included (optional)</li>
                    <li>• Exclusive Leads</li>
                    <li>• ISA Verified</li>
                    <li>• Pause / Resume Anytime</li>
                    <li>• Cancel Anytime</li>
                  </ul>
                  
                  <button className="w-full bg-orange-500 hover:bg-black text-white font-bold py-3 rounded-lg transition-colors duration-300">
                    Let's Start
                  </button>
                </div>

                {/* Team of 3 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">TEAM OF 3</h3>
                  <p className="text-gray-600 mb-6">90 Day Money Back Guarantee</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">$1599</span>
                    <span className="text-lg text-gray-600 ml-2">one time</span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Features</h4>
                  <ul className="space-y-2 text-sm text-gray-700 mb-8">
                    <li>• 5% Referral Fee</li>
                    <li>• 15 Zips / 5 Cities / or 5 Counties</li>
                    <li>• Upto 8 Schedule Appointments</li>
                    <li>• 3 Business Profiles</li>
                    <li>• Upload Unlimited Listings</li>
                    <li>• CRM Included (optional)</li>
                    <li>• Exclusive Leads</li>
                    <li>• I.S.A Verified</li>
                    <li>• Pause / Resume Anytime</li>
                    <li>• Cancel Anytime</li>
                  </ul>
                  
                  <button className="w-full bg-orange-500 hover:bg-black text-white font-bold py-3 rounded-lg transition-colors duration-300">
                    Let's Start
                  </button>
                </div>
              </div>
            </div>
          </section>
          <FAQSection />
        </>
      )}
    </div>
  );
}