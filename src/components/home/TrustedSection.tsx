import React from 'react';
import { Shield, MapPin, Award } from 'lucide-react';

const cards = [
  {
    icon: Shield,
    title: 'Trusted & Top-Rated',
    description: 'Our licensed agents bring years of proven experience and are highly rated across platforms',
  },
  {
    icon: MapPin,
    title: 'Smart & Local',
    description: 'We combine sharp negotiation skills with in-depth local knowledge to get you the best results in your neighborhood.',
  },
  {
    icon: Award,
    title: 'Committed to Excellence',
    description: 'Driven by professionalism and integrity, we deliver top-tier service at competitive rates—every step of the way.',
  },
];

export default function TrustedSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-[#800020]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <card.icon className="h-8 w-8 text-[#800020]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}