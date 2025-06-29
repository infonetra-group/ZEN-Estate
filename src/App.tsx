import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'; 
import MarketingPricing from './pages/MarketingPricing';
import Pricing from './pages/Pricing';
import CRM from './pages/CRM';
import HowItWorks from './pages/HowItWorks';
import RealtorsProfile from './pages/RealtorsProfile';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import CommunicationPolicy from './pages/CommunicationPolicy';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/marketing-pricing" element={<MarketingPricing />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/realtors-profile" element={<RealtorsProfile />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/communication-policy" element={<CommunicationPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;