import React, { useState } from 'react';
import { Github, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart, ArrowUp, Ship } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const footerLinks = {
    'Company': ['About Us', 'Our Team', 'Careers', 'Contact'],
    'Services': ['Web Design', 'Development', 'SEO', 'Consulting'],
    'Resources': ['Blog', 'Documentation', 'Help Center', 'Community'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-500 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Company info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="group cursor-pointer">
               <div className="flex items-center space-x-2 group cursor-pointer">
            <Ship className="w-6 h-6 text-white" />
            <span
              className={`font-semibold text-2xl transition-colors duration-200`}
            >
              Eksporia.id
            </span>
          </div>

                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500"></div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed hover:text-white transition-colors duration-300">
                Creating digital experiences that inspire and engage. We transform ideas into stunning realities.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group cursor-pointer">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">Eksporiaid@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group cursor-pointer">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">+62 859-1234-5678</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group cursor-pointer">
                  <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">Surakarta, Indonesia</span>
                </div>
              </div>
            </div>

            {/* Footer links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h4 className="text-lg font-semibold text-white relative">
                  {category}
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-gray-300 hover:text-white text-sm transition-all duration-300 hover:translate-x-2 block relative group"
                      >
                        <span className="relative z-10">{link}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"></div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter subscription */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-slate-600/30 hover:border-blue-400/30 transition-all duration-500">
            <div className="max-w-md mx-auto text-center">
              <h4 className="text-xl font-semibold mb-2 text-white">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-6">Get the latest news and updates delivered to your inbox.</p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white placeholder-gray-400 transition-all duration-300"
                    required
                  />
                </div>
                <button
                  onClick={handleSubscribe}
                  disabled={isSubscribed}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-green-500 disabled:to-green-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                >
                  {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </div>
            </div>
          </div>

          {/* Social links and bottom section */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              
              {/* Social media links */}
              <div className="flex space-x-6">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group relative p-3 bg-slate-700/50 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>© 2024 YourBrand. Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>in Indonesia</span>
              </div>

              {/* Back to top button */}
              <button
                onClick={scrollToTop}
                className="group p-3 bg-slate-700/50 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Animated border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-50">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;