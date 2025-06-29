import React, { useState } from 'react';
import { Link, Users, Briefcase } from 'lucide-react';

const stats = [
  {
    icon: Link,
    title: 'Connect',
    subtitle: 'Match instantly with top real estate, mortgage, and insurance professionals.',
    number: '2,490',
    label: 'Active Realtors',
  },
  {
    icon: Users,
    title: 'Serve',
    subtitle: 'Work closely with local experts to find the perfect solution.',
    number: '1500+',
    label: 'Completed Cases',
  },
  {
    icon: Briefcase,
    title: 'Identify',
    subtitle: 'Let our coordinator guide you confidently through the process.',
    number: '20,465',
    label: 'Hand-Picked Professionals',
  },
];

export default function StatsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#ECEBEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                hoveredCard === index
                  ? 'bg-black text-white shadow-2xl'
                  : 'bg-white text-black shadow-lg hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center justify-center mb-6">
                <stat.icon className={`h-12 w-12 ${hoveredCard === index ? 'text-white' : 'text-[#800020]'}`} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{stat.title}</h3>
              <p className={`text-center mb-6 ${hoveredCard === index ? 'text-gray-300' : 'text-gray-600'}`}>
                {stat.subtitle}
              </p>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}