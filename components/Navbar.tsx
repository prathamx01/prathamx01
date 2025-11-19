import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/work' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-neutral-950/80 backdrop-blur-md border-b border-white/5 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group z-50">
          <div className="bg-brand-yellow p-1.5 rounded-lg transform transition-transform duration-500 group-hover:rotate-12">
            <Lightbulb className="text-black w-6 h-6 fill-black" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white group-hover:text-brand-yellow transition-colors">
            VIRALWAALE
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative text-sm font-bold tracking-wide uppercase hover:text-brand-yellow transition-colors group"
            >
              {item.label}
              <span className={`absolute left-0 -bottom-1 w-full h-0.5 bg-brand-yellow transform origin-left transition-transform duration-300 ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
          ))}
          <Link to="/contact">
             <button className="relative px-6 py-2 bg-white text-black font-bold text-sm uppercase tracking-wider overflow-hidden group rounded-sm">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Let's Talk</span>
                <div className="absolute inset-0 bg-brand-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
             </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-brand-yellow transition-colors z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 bg-neutral-950 z-40 flex flex-col justify-center items-center md:hidden"
          >
            {navItems.map((item, i) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative overflow-hidden text-4xl font-black text-white/80 hover:text-brand-yellow mb-8 uppercase tracking-tighter"
              >
                <motion.div
                   initial={{ y: 100 }}
                   animate={{ y: 0 }}
                   transition={{ delay: i * 0.1 }}
                >
                  {item.label}
                </motion.div>
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
               <motion.button 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5 }}
                 className="mt-8 px-10 py-4 bg-brand-yellow text-black font-bold text-lg uppercase tracking-wider rounded-full"
               >
                  Let's Talk
               </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;