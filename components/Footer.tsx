import React from 'react';
import { Lightbulb, Instagram, Twitter, Linkedin, Mail, MapPin, Phone, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 border-t border-white/10 pt-20 pb-10 relative overflow-hidden z-20">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-yellow via-purple-500 to-blue-500 opacity-50"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-brand-yellow p-1.5 rounded-lg">
                <Lightbulb className="text-black w-6 h-6 fill-black" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                VIRALWAALE
              </span>
            </Link>
            <p className="text-neutral-400 leading-relaxed text-sm">
              We don't just follow trends; we create them. The world's most creative tech & marketing agency dedicated to making your brand unforgettable.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all duration-300 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-neutral-400 hover:text-brand-yellow transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-neutral-400 hover:text-brand-yellow transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/work" className="text-neutral-400 hover:text-brand-yellow transition-colors text-sm">Portfolio</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-brand-yellow transition-colors text-sm">Get In Touch</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Expertise</h4>
            <ul className="space-y-4 text-sm">
              <li className="text-neutral-400 hover:text-white transition-colors cursor-pointer">Digital Marketing</li>
              <li className="text-neutral-400 hover:text-white transition-colors cursor-pointer">Video Editing</li>
              <li className="text-neutral-400 hover:text-white transition-colors cursor-pointer">Web Development</li>
              <li className="text-neutral-400 hover:text-white transition-colors cursor-pointer">Branding & Logo</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4 text-neutral-400">
                <MapPin className="text-brand-yellow mt-1 flex-shrink-0" size={18} />
                <span>123 Creative Block, Tech District,<br/>Innovation City, 500001</span>
              </li>
              <li className="flex items-center gap-4 text-neutral-400">
                <Mail className="text-brand-yellow flex-shrink-0" size={18} />
                <span>hello@viralwaale.com</span>
              </li>
              <li className="flex items-center gap-4 text-neutral-400">
                <Phone className="text-brand-yellow flex-shrink-0" size={18} />
                <span>+91 987 654 3210</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-xs">© {new Date().getFullYear()} Viralwaale. All rights reserved.</p>
          <div className="flex gap-8 text-xs text-neutral-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;