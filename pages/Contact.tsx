import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Check, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      // Reset after a few seconds
      setTimeout(() => setFormState('idle'), 3000);
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 min-h-screen bg-neutral-950 relative overflow-hidden"
    >
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-b from-brand-yellow/10 to-transparent -skew-x-12 pointer-events-none blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Info */}
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-none">
              LET'S <br/><span className="text-brand-yellow">TALK</span>
            </h1>
            <p className="text-xl text-neutral-400 mb-12 leading-relaxed max-w-md">
              Got a project in mind? We'd love to hear about it. Fill out the form or reach us directly.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-neutral-900 border border-white/5 rounded-full flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-black transition-all duration-300">
                   <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Email Us</h3>
                  <p className="text-neutral-400 group-hover:text-brand-yellow transition-colors">hello@viralwaale.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-neutral-900 border border-white/5 rounded-full flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-black transition-all duration-300">
                   <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Call Us</h3>
                  <p className="text-neutral-400 group-hover:text-brand-yellow transition-colors">+91 987 654 3210</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-neutral-900 border border-white/5 rounded-full flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-black transition-all duration-300">
                   <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Visit Us</h3>
                  <p className="text-neutral-400 group-hover:text-brand-yellow transition-colors">
                    123 Creative Block, Tech District
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="bg-neutral-900/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider ml-1">Name</label>
                  <input required type="text" className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-brand-yellow focus:bg-black/40 focus:outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider ml-1">Phone</label>
                  <input type="tel" className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-brand-yellow focus:bg-black/40 focus:outline-none transition-all" placeholder="+91 ..." />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider ml-1">Email</label>
                <input required type="email" className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-brand-yellow focus:bg-black/40 focus:outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider ml-1">Message</label>
                <textarea required rows={4} className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white focus:border-brand-yellow focus:bg-black/40 focus:outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formState !== 'idle'}
                className={`w-full py-4 font-bold text-lg rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${
                  formState === 'success' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-brand-yellow text-black hover:bg-white'
                }`}
              >
                {formState === 'idle' && (
                  <>Send Message <Send size={20} /></>
                )}
                {formState === 'loading' && (
                  <Loader2 size={24} className="animate-spin" />
                )}
                {formState === 'success' && (
                  <>Message Sent! <Check size={24} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;