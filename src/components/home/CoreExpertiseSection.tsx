import React, { useState } from 'react';

const expertiseItems = [
  {
    title: 'All-in-One CRM',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
  },
  {
    title: 'Smart Lead Nurturing',
    image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg',
  },
  {
    title: 'Cross-Channel',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
  },
  {
    title: 'Tools to Grow',
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
  },
];

export default function CoreExpertiseSection() {
  const [hoveredItem, setHoveredItem] = useState(0);

  return (
    <section className="py-20 bg-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-12 relative shadow-2xl" style={{
          background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
          boxShadow: '0 0 100px rgba(128, 0, 32, 0.3), 0 0 200px rgba(128, 0, 32, 0.1)',
        }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Core Expertise</h2>
              <div className="space-y-6">
                {expertiseItems.map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      hoveredItem === index ? 'bg-[#800020]/10 border-l-4 border-[#800020]' : 'hover:bg-gray-50'
                    }`}
                    onMouseEnter={() => setHoveredItem(index)}
                  >
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={expertiseItems[hoveredItem].image}
                  alt={expertiseItems[hoveredItem].title}
                  className="w-full h-80 object-cover transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}