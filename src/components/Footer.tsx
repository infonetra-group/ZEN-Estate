import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Mail, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <HomeIcon className="h-8 w-8 text-[#800020]" />
            <span className="text-2xl font-bold text-white">ZEN Estate</span>
          </div>
          
          <div className="flex flex-wrap gap-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about-us" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Get in touch
            </Link>
          </div>
        </div>

        {/* Three Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Legal Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal Pages</h3>
            <div className="space-y-2">
              <Link to="/privacy-policy" className="block text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/refund-policy" className="block text-gray-300 hover:text-white transition-colors">
                Refund Policy
              </Link>
              <Link to="/terms-and-conditions" className="block text-gray-300 hover:text-white transition-colors">
                Terms and Conditions
              </Link>
              <Link to="/communication-policy" className="block text-gray-300 hover:text-white transition-colors">
                Communication Policy
              </Link>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Office Hours
            </h3>
            <p className="text-gray-300">
              Mon to Fri<br />
              10:00 AM to 7:00 PM (EST)
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@example.us</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>111-222-3333</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Strip */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0">
            Copyright © 2025 ZEN Estate. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms-and-conditions" className="text-gray-300 hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}