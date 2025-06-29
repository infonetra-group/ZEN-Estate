import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Check, X } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Real Estate Agent',
    content: 'ZEN Estate has transformed my business. The quality of leads and the support system is unmatched.',
  },
  {
    name: 'Michael Chen',
    role: 'Property Developer',
    content: 'Working with ZEN Estate has been a game-changer. Their network of professionals is truly top-tier.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Real Estate Broker',
    content: 'The platform is intuitive and the results speak for themselves. Highly recommend!',
  },
  {
    name: 'David Thompson',
    role: 'Real Estate Team Leader',
    content: 'The CRM integration and lead generation tools have doubled our conversion rates.',
  },
  {
    name: 'Lisa Martinez',
    role: 'Independent Agent',
    content: 'Professional website design and SEO services helped me rank #1 in my local market.',
  },
];

const faqData = [
  {
    question: 'Do you build custom websites for real estate professionals?',
    answer: 'We design branded, mobile-responsive websites tailored for agents, teams, and brokerages — from templates to fully custom builds.',
  },
  {
    question: 'Is MLS/IDX listing integration included?',
    answer: 'Yes, it\'s fully included in our Elite plan and available as an add-on for Starter and Pro. It ensures your site updates with real-time property listings.',
  },
  {
    question: 'Will my website work on mobile devices?',
    answer: 'Absolutely. All our websites follow a mobile-first, responsive design approach for smooth performance across phones, tablets, and desktops.',
  },
  {
    question: 'Can I capture and manage leads automatically?',
    answer: 'Yes. We offer smart lead capture forms, CRM integration, and automated email/text follow-ups to streamline your lead pipeline.',
  },
  {
    question: 'Do you provide SEO services?',
    answer: 'Yes. All plans include basic SEO. Our Pro and Elite plans offer advanced local SEO and ongoing optimization to help you rank higher.',
  },
  {
    question: 'Is social media marketing included?',
    answer: 'Yes. Social media management is included in Pro and Elite plans — from branded posts to full content strategies.',
  },
  {
    question: 'Can clients book appointments through my website?',
    answer: 'Yes. Calendar booking is included in Pro and Elite plans, allowing clients to schedule directly via Google or Outlook sync.',
  },
  {
    question: 'Do you offer blog content or content marketing?',
    answer: 'Yes. We set up your blog and provide SEO-optimized posts monthly with Pro (1 post) and Elite (up to 4 posts).',
  },
  {
    question: 'Will I get reports or analytics on performance?',
    answer: 'Yes. Pro includes a basic dashboard; Elite includes full ROI reporting with conversion tracking and pixel integration.',
  },
  {
    question: 'What kind of support do I get with each plan?',
    answer: 'Starter includes standard support, Pro offers email/chat support, and Elite comes with priority support and a dedicated account manager.',
  },
];

export default function MarketingPricing() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [hoveredFeatureCard, setHoveredFeatureCard] = useState<number | null>(null);
  const [customPlanForm, setCustomPlanForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleFAQClick = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleCustomPlanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Custom plan form submitted:', customPlanForm);
    alert(`Thank you ${customPlanForm.name}! Your custom plan request has been sent to our team.`);
    setCustomPlanForm({ name: '', email: '', phone: '', message: '' });
  };

  const handleCustomPlanChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCustomPlanForm({
      ...customPlanForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/photo-1582407947304-fd86f028f716.jfif')`
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
          <button className="bg-white text-black font-bold px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition-colors">
            For Agents
          </button>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Agent Starter */}
            <div className="bg-gray-300 text-black rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Agent Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$89</span>
                <span className="text-lg text-gray-600"> per month</span>
              </div>
              <button className="w-full bg-orange-500 hover:bg-black text-white font-bold py-3 rounded-lg mb-8 transition-colors duration-300">
                GET STARTED WITH US
              </button>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-3">Website & Design</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 7-Page Mobile-Responsive Portfolio Website</li>
                    <li>• Up to 10 Pages & Posts via Codeless Website Builder</li>
                    <li>• 3 Custom Listing Pages</li>
                    <li>• Lead-Generating Contact Form</li>
                    <li>• Integration of Client-Provided Content & Graphics</li>
                    <li>• Single MLS & IDX Integration</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3">SEO Online Presence</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Basic On-Page SEO Setup (Titles, Meta Descriptions)</li>
                    <li>• Local Keyword Optimization</li>
                    <li>• Google Analytics & Search Console Setup</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3">Social Media & Marketing</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 2 Social Media Posts per Week (Facebook & Instagram)</li>
                    <li>• Social Media Icons on Website</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3">Lead Generation & CRM</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Simple CRM for Lead Tracking</li>
                    <li>• Basic Lead Capture Forms</li>
                    <li>• Email Marketing (up to 50 Emails/Month)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3">Support & Maintenance</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Maintenance Free</li>
                    <li>• Monthly Backups & Security Monitoring</li>
                    <li>• Email Support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Agent Pro */}
            <div className="bg-gray-800 text-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Agent Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$299</span>
                <span className="text-lg text-gray-300"> per month</span>
              </div>
              <button className="w-full bg-orange-500 hover:bg-black text-white font-bold py-3 rounded-lg mb-8 transition-colors duration-300">
                GET STARTED WITH US
              </button>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-3">Website & Design</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 10-Page Mobile-Responsive Portfolio Website</li>
                    <li>• Up to 20 Pages & Posts via Codeless Website Builder</li>
                    <li>• 5 Custom Listing Pages</li>
                    <li>• Lead Capture Forms & High-Converting Popups</li>
                    <li>• Integration of Client-Provided Content & Graphics</li>
                    <li>• Single MLS & IDX Integration</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3">SEO Online Presence</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Enhanced On-Page SEO with Alt Tags & Meta Optimization</li>
                    <li>• Local & Regional Keyword Optimization</li>
                    <li>• 50 High-Quality Follow Backlinks</li>
                    <li>• Google Tools Setup & SEO Monitoring</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3">Social Media & Marketing</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 3 Social Media Posts per Week (Facebook & Instagram)</li>
                    <li>• Social Profile Branding</li>
                    <li>• Basic Marketing Tools & Content Sharing</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3">Lead Generation & CRM</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• CRM with Lead Tracking & Automated Follow-Up</li>
                    <li>• Advanced Lead Capture Forms & Popups</li>
                    <li>• Email Marketing (up to 100 Emails/Month)</li>
                    <li>• Up to 8 Scheduled Appointments & Live Transfers</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3">Support & Maintenance</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Maintenance Free</li>
                    <li>• Monthly Backups & Security Monitoring</li>
                    <li>• Priority Email Support</li>
                    <li>• 1-on-1 Onboarding</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Agent Elite */}
            <div className="bg-black text-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Agent Elite</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$749</span>
                <span className="text-lg text-gray-300"> per month</span>
              </div>
              <button className="w-full bg-orange-500 hover:bg-black text-white font-bold py-3 rounded-lg mb-8 transition-colors duration-300">
                GET STARTED WITH US
              </button>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-3">Website & Design</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 15+ Page Mobile-Responsive Portfolio Website</li>
                    <li>• Up to 25 Pages & Posts via Codeless Website Builder</li>
                    <li>• 7+ Custom Listing Pages</li>
                    <li>• Advanced Lead Capture Popups & Forms</li>
                    <li>• Full Integration of Client-Provided Content & Visuals</li>
                    <li>• MLS & IDX Integration with Enhanced Features</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3">SEO Online Presence</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Full On-Page & Technical SEO Setup (Sitemap, Robots.txt, Schema)</li>
                    <li>• Comprehensive Keyword Optimization</li>
                    <li>• 50+ High-Quality Follow Backlinks</li>
                    <li>• Continuous SEO Monitoring & Reporting</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3">Social Media & Marketing</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 4+ Social Media Posts per Week (Facebook, Instagram, LinkedIn)</li>
                    <li>• Meta Paid Listings Management</li>
                    <li>• Marketing Automation & Customization Tools</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3">Lead Generation & CRM</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Advanced CRM with Lead Scoring & Automated Workflows</li>
                    <li>• Unlimited Lead Capture Forms & Popups</li>
                    <li>• Email Marketing (100+ Emails/Month)</li>
                    <li>• Appointment Scheduling & Live Transfer Capabilities</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3">Support & Maintenance</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Maintenance Free</li>
                    <li>• Dedicated Account Manager</li>
                    <li>• Monthly Backups & Security Audits</li>
                    <li>• Phone & Priority Support</li>
                    <li>• Comprehensive Training & Onboarding</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Agent Essential Rectangle */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Agent Essential</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$49</span>
                  <span className="text-xl text-gray-600"> per month</span>
                </div>
                <button className="bg-orange-500 hover:bg-black text-white font-bold px-8 py-3 rounded-lg transition-colors duration-300">
                  GET STARTED WITH US
                </button>
              </div>
              
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  For new Agents starting their journey, seeking a real estate platform that's both straightforward and impactful.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• 3-Page Mobile-Responsive Website</li>
                  <li>• 3 Custom Listing Pages</li>
                  <li>• Contact Form for Lead Inquiries</li>
                  <li>• Basic MLS/IDX Integration</li>
                  <li>• Email Support + Monthly Site Backup</li>
                  <li>• Simple Lead Capture & CRM</li>
                  <li>• Local SEO Setup (Meta Tags, Google Tools)</li>
                  <li>• 2 Social Media Posts/Week (Facebook & LinkedIn)</li>
                  <li>• 50 Marketing Emails/Month</li>
                  <li>• $50 monthly fees/ First Month $0</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features and Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Features and Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                heading: 'Custom Websites',
                subtext: 'Tailored real estate websites that showcase listings and capture leads.',
                number: '100+',
                label: 'WordPress Themes',
              },
              {
                heading: 'SEO Services',
                subtext: 'Real estate SEO that boosts rankings and drives organic traffic.',
                number: '1500+',
                label: 'Backlinks',
              },
              {
                heading: 'CRM Integration',
                subtext: 'Manage leads and automate follow-ups with built-in CRM tools.',
                number: '2,490',
                label: 'Active Realtors',
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`p-8 cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${
                  hoveredFeatureCard === index
                    ? 'bg-black text-white rounded-2xl shadow-2xl'
                    : 'bg-transparent text-black'
                }`}
                onMouseEnter={() => setHoveredFeatureCard(index)}
                onMouseLeave={() => setHoveredFeatureCard(null)}
              >
                <h3 className="text-2xl font-bold mb-4">{card.heading}</h3>
                <p className={`mb-6 ${hoveredFeatureCard === index ? 'text-gray-300' : 'text-gray-600'}`}>
                  {card.subtext}
                </p>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{card.number}</div>
                  <div className="text-lg font-semibold">{card.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Compare All ZEN Estate Solutions
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Features</th>
                  <th className="px-6 py-4 text-center font-bold">Agent Essential</th>
                  <th className="px-6 py-4 text-center font-bold">Agent Starter</th>
                  <th className="px-6 py-4 text-center font-bold">Agent Elite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ['Mobile-Responsive Website', '7 Pages', '10 Pages', '15+ Pages'],
                  ['Codeless Website Builder', 'Up to 10 Pages & Posts', 'Up to 20 Pages & Posts', 'Up to 25 Pages & Posts'],
                  ['Custom Listing Pages', '3', '5', '7+'],
                  ['MLS & IDX Integration', 'Single MLS (Basic)', 'Single MLS (Standard)', 'Enhanced MLS/IDX'],
                  ['Contact Form', 'Basic Form', '+ Popups', 'Advanced Forms & Popups'],
                  ['Lead Capture Tools', 'Simple CRM', 'Forms + Popups', 'Smart Forms + Unlimited Popups'],
                  ['CRM Integration', '50 Emails', 'Lead Tracking + Follow-Up', 'Advanced CRM + Workflows'],
                  ['Email Marketing (Monthly)', '2 (Facebook & Instagram)', '100 Emails', '100+ Emails + Automation'],
                  ['Social Media Posts/Week', 'Basic On-Page SEO', '3 (Facebook & Instagram)', '4+ (Facebook, Instagram, LinkedIn)'],
                  ['SEO Setup', '✗', 'Enhanced On-Page + Keywords', 'Full SEO + Technical SEO'],
                  ['Backlink Package', 'Tick', '50+ Backlinks', '50+ Backlinks + Ongoing'],
                  ['Google Tools Setup', 'Basic', 'Tick', '+ Reporting'],
                  ['Branding Customization', 'Email', 'Standard', 'Full Branding Control'],
                  ['Support', 'Monthly', 'Priority Email + Onboarding', 'Dedicated Manager + Priority'],
                  ['Website Backups & Security', '✗', 'Monthly + Monitoring', 'Monthly + Security Audits'],
                  ['Appointments/Live Transfers', '✗', 'Up to 8', 'Unlimited'],
                  ['Onboarding/Training', '', '1-on-1 (30 min)', 'Full Training & Walkthrough'],
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{row[0]}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row[1] === '✗' ? <X className="h-5 w-5 text-red-500 mx-auto" /> : row[1] === 'Tick' ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : row[1]}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row[2] === '✗' ? <X className="h-5 w-5 text-red-500 mx-auto" /> : row[2] === 'Tick' ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : row[2]}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row[3] === '✗' ? <X className="h-5 w-5 text-red-500 mx-auto" /> : row[3] === 'Tick' ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Questions & Answers
          </h2>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => handleFAQClick(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900">
                    {String(index + 1).padStart(2, '0')} {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300" />
                  )}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            ZEN Estate in Our Clients' Words
          </h2>
          
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full px-4">
                  <div className="bg-black text-white rounded-2xl p-8 max-w-2xl mx-auto">
                    <p className="text-lg mb-6 leading-relaxed">"{testimonial.content}"</p>
                    <div>
                      <h4 className="font-bold text-xl">{testimonial.name}</h4>
                      <p className="text-gray-300">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-[#800020]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Plan Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Custom Plan</h2>
              <p className="text-xl text-gray-600 mb-8">
                Your Business, Your Way. Let's Build a Solution Just for You.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Designed For:</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                This plan is ideal for serious real estate professionals — from top agents and brokers to growing agencies — who need a fully customized digital strategy. If you're ready to elevate your brand, automate your leads, and scale with high-performance tools, the Custom Plan is built for you.
              </p>
              
              <div className="text-2xl font-bold text-[#800020]">
                111-222-3333
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <form onSubmit={handleCustomPlanSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={customPlanForm.name}
                    onChange={handleCustomPlanChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={customPlanForm.email}
                    onChange={handleCustomPlanChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={customPlanForm.phone}
                    onChange={handleCustomPlanChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={customPlanForm.message}
                    onChange={handleCustomPlanChange}
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent resize-vertical"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#800020] hover:bg-[#600018] text-white font-bold py-3 rounded-lg transition-colors duration-300"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}