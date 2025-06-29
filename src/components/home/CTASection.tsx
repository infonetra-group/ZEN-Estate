import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Boost, Sell, Succeed, Repeat!
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
          ZEN Estate Referral Solutions is a powerful Platform as a Service (PaaS) tailored to elevate real estate agents' performance. Our advanced technology accelerates sales, streamlines operations, and helps agents build a stronger pipeline.
        </p>
        <Link
          to="/how-it-works"
          className="relative inline-block bg-[#800020] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-500 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="relative z-10">Learn more about us</span>
          <div
            className={`absolute top-0 left-0 h-full bg-black transition-all duration-500 ${
              isHovered ? 'w-full' : 'w-0'
            }`}
          ></div>
        </Link>
      </div>
    </section>
  );
}