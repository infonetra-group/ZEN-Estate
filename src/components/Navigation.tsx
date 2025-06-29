import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Home as HomeIcon } from 'lucide-react';

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const dropdownItems = [
    { name: 'CRM', path: '/crm' },
    { name: 'How it Works', path: '/how-it-works' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Normal Navigation Bar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <HomeIcon className="h-8 w-8 text-[#800020]" />
              <span className="text-2xl font-bold text-[#800020]">ZEN Estate</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-[#800020]' : 'text-gray-700 hover:text-[#800020]'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/about-us') ? 'text-[#800020]' : 'text-gray-700 hover:text-[#800020]'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/marketing-pricing"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/marketing-pricing') ? 'text-[#800020]' : 'text-gray-700 hover:text-[#800020]'
                }`}
              >
                Marketing Pricing
              </Link>
              <Link
                to="/pricing"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/pricing') ? 'text-[#800020]' : 'text-gray-700 hover:text-[#800020]'
                }`}
              >
                Pricing
              </Link>

              {/* Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#800020] transition-colors"
                >
                  For Realtors +
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-white/20 py-2">
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#800020]/10 hover:text-[#800020] transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive('/contact') ? 'text-[#800020]' : 'text-gray-700 hover:text-[#800020]'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-[#800020]"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-white/20 mt-2 rounded-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#800020]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about-us"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#800020]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/marketing-pricing"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#800020]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Marketing Pricing
                </Link>
                <Link
                  to="/pricing"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#800020]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                {dropdownItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-6 py-2 text-sm font-medium text-gray-600 hover:text-[#800020]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#800020]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Capsule Navigation Bar */}
      <div 
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out ${
          isScrolled 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 -translate-y-4 scale-125 pointer-events-none'
        }`}
        style={{
          animation: isScrolled ? 'capsuleShrink 0.7s ease-out forwards' : 'none'
        }}
      >
        <nav className="bg-white/90 backdrop-blur-md rounded-full shadow-2xl border border-white/30 px-8 py-3">
          {/* Desktop Capsule Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-full ${
                isActive('/') ? 'text-[#800020] bg-[#800020]/10' : 'text-gray-700 hover:text-[#800020] hover:bg-gray-100/50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-full ${
                isActive('/about-us') ? 'text-[#800020] bg-[#800020]/10' : 'text-gray-700 hover:text-[#800020] hover:bg-gray-100/50'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/marketing-pricing"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-full ${
                isActive('/marketing-pricing') ? 'text-[#800020] bg-[#800020]/10' : 'text-gray-700 hover:text-[#800020] hover:bg-gray-100/50'
              }`}
            >
              Marketing Pricing
            </Link>
            <Link
              to="/pricing"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-full ${
                isActive('/pricing') ? 'text-[#800020] bg-[#800020]/10' : 'text-gray-700 hover:text-[#800020] hover:bg-gray-100/50'
              }`}
            >
              Pricing
            </Link>

            {/* Capsule Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#800020] hover:bg-gray-100/50 transition-colors rounded-full"
              >
                For Realtors +
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-white/30 py-2">
                  {dropdownItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#800020]/10 hover:text-[#800020] transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-full ${
                isActive('/contact') ? 'text-[#800020] bg-[#800020]/10' : 'text-gray-700 hover:text-[#800020] hover:bg-gray-100/50'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Capsule Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#800020] rounded-full hover:bg-gray-100/50 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Capsule Menu */}
        {isMobileMenuOpen && isScrolled && (
          <div className="md:hidden mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 py-3">
            <div className="px-4 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#800020] hover:bg-gray-100/50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#800020] hover:bg-gray-100/50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/marketing-pricing"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#800020] hover:bg-gray-100/50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Marketing Pricing
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#800020] hover:bg-gray-100/50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              {dropdownItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-6 py-2 text-sm font-medium text-gray-600 hover:text-[#800020] hover:bg-gray-100/50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#800020] hover:bg-gray-100/50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes capsuleShrink {
          0% {
            transform: translateX(-50%) translateY(-16px) scale(1.25);
            opacity: 0;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: translateX(-50%) translateY(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}