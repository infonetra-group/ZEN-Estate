import React, { useState } from 'react';

const cards = [
  {
    title: 'About us',
    content: 'At ZEN Estate, we connect clients with only the best real estate professionals—carefully selected through a strict vetting process focused on experience, performance, and local expertise.',
  },
  {
    title: 'Our mission',
    content: 'To deliver exceptional real estate experiences by matching clients with top-tier, trusted agents who exceed expectations.',
  },
  {
    title: 'Our vision',
    content: 'To become the most trusted platform for finding elite real estate professionals, setting the standard for quality and service in the industry.',
  },
];

export default function MissionSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-black text-white rounded-2xl p-8 cursor-pointer transition-all duration-500 transform ${
                hoveredCard === index ? 'scale-110 z-10' : 'scale-100'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  hoveredCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-300 leading-relaxed">{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}