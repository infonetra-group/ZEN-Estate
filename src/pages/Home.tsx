import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustedSection from '../components/home/TrustedSection';
import MissionSection from '../components/home/MissionSection';
import CoreExpertiseSection from '../components/home/CoreExpertiseSection';
import BrandsSection from '../components/home/BrandsSection';
import StatsSection from '../components/home/StatsSection';
import CTASection from '../components/home/CTASection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <TrustedSection />
      <MissionSection />
      <CoreExpertiseSection />
      <BrandsSection />
      <StatsSection />
      <CTASection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}