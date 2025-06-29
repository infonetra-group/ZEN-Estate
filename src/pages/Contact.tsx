import React, { useState } from 'react';
import { Phone, Mail, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      phone: !formData.phone.trim(),
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      const missingFields = [];
      if (errors.name || !formData.name.trim()) missingFields.push('Name');
      if (errors.email || !formData.email.trim()) missingFields.push('Email');
      if (errors.phone || !formData.phone.trim()) missingFields.push('Phone Number');
      
      alert(`${missingFields.join('/')} required`);
      return;
    }

    // Simulate sending email
    console.log('Form submitted:', formData);
    alert(`Thank you ${formData.name}! Your message has been sent to support@example.us`);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="pt-24 pb-16">
      {/* Header Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/pexels-kaip-597909.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <h2 className="text-3xl font-semibold text-white">Connect With Our Team</h2>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Send us a message</h3>
              <p className="text-gray-600 mb-8">
                Give us a chance to serve and bring magic to your brand.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent transition-all duration-200 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent transition-all duration-200 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent transition-all duration-200 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Enter your message"
                  />
                </div>
                
                <button
                  type="submit"
                  className="relative w-full bg-orange-500 hover:bg-black text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 flex items-center justify-center group overflow-hidden"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span className="relative z-10 mr-2">Send us a message</span>
                  <ArrowUpRight 
                    className={`h-5 w-5 relative z-10 transition-transform duration-300 ${
                      isHovered ? 'transform translate-x-1 -translate-y-1' : ''
                    }`}
                  />
                </button>
              </form>
            </div>

            {/* Right Side - Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg h-fit">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Info</h3>
              
              <div className="space-y-6">
                {/* Sales Phone */}
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#800020] mr-3" />
                  <span className="text-gray-700">Sales +111-232-3232</span>
                </div>
                
                {/* Support Phone */}
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#800020] mr-3" />
                  <span className="text-gray-700">Support +189-456-8989</span>
                </div>
                
                {/* Email */}
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#800020] mr-3" />
                  <span className="text-gray-700">support@example.us</span>
                </div>
                
                {/* Divider Line */}
                <div className="border-t border-gray-200 my-6"></div>
                
                {/* Live Chat Section */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <MessageCircle className="h-5 w-5 text-[#800020] mr-2" />
                    Live Chat
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Need Help? We're Here for You – Click to Start Live Chat!
                  </p>
                </div>
                
                {/* Office Hours */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Clock className="h-5 w-5 text-[#800020] mr-2" />
                    Our Office Timing
                  </h4>
                  <p className="text-gray-600">
                    Mon to Fri<br />
                    10:00 AM to 7:00 PM (EST)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}