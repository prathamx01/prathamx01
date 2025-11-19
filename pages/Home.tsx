import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero3D from '../components/Hero3D';
import ServiceCard from '../components/ServiceCard';
import { Rocket, Video, Palette, ShoppingCart, Code, Globe, ArrowRight, Star } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Digital Marketing',
    description: 'Data-driven strategies to skyrocket your brand visibility and ROI across all digital channels.',
    icon: Rocket,
  },
  {
    id: '2',
    title: 'Social Media',
    description: 'Creating viral content and managing communities to build a loyal fanbase for your brand.',
    icon: Globe,
  },
  {
    id: '3',
    title: 'Video Editing',
    description: 'Cinematic storytelling through high-end post-production, motion graphics, and VFX.',
    icon: Video,
  },
  {
    id: '4',
    title: 'Graphics Design',
    description: 'Visual identities that speak louder than words. Logos, branding kits, and marketing assets.',
    icon: Palette,
  },
  {
    id: '5',
    title: 'Web Development',
    description: 'Blazing fast, responsive, and SEO-optimized websites built with modern technologies.',
    icon: Code,
  },
  {
    id: '6',
    title: 'E-Commerce',
    description: 'End-to-end management of your online store, from setup to sales optimization.',
    icon: ShoppingCart,
  },
];

const Home: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="relative"
    >
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Hero3D />
        
        <div className="container mx-auto px-6 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
              <Star className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
              <span className="text-xs font-bold uppercase tracking-widest text-white">Agency of the Future</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black text-white leading-tight mb-8 tracking-tighter">
              MAKE IT <br />
              <span className="text-brand-yellow relative inline-block">
                VIRAL
                <motion.svg 
                  initial={{ pathLength: 0 }} 
                  animate={{ pathLength: 1 }} 
                  transition={{ delay: 1, duration: 1.5 }}
                  className="absolute w-[110%] h-6 -bottom-2 -left-[5%] text-white pointer-events-none" 
                  viewBox="0 0 200 9" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.00025 6.99997C58.5002 3.99999 115.001 2.00002 198 5.00002" stroke="currentColor" strokeWidth="3"/>
                </motion.svg>
              </span>
            </h1>
            
            <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Viralwaale is the creative powerhouse that blends <span className="text-white font-bold">technology</span> with <span className="text-white font-bold">art</span> to craft digital experiences that dominate the market.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact" 
                className="group relative px-8 py-4 bg-brand-yellow text-black font-bold text-lg rounded-full overflow-hidden"
              >
                 <span className="relative z-10 flex items-center gap-2 group-hover:gap-4 transition-all">
                    Start Project <ArrowRight size={20} />
                 </span>
                 <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </Link>
              
              <Link 
                to="/work" 
                className="px-8 py-4 bg-transparent text-white border border-white/20 font-bold text-lg rounded-full hover:bg-white/5 transition-all hover:border-brand-yellow"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-neutral-500"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-brand-yellow to-transparent"></div>
        </motion.div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="bg-brand-yellow py-6 overflow-hidden transform -rotate-1 z-20 relative border-y-4 border-black">
        <div className="whitespace-nowrap animate-[float_20s_linear_infinite] flex gap-8 items-center">
           {Array(6).fill("STRATEGY • DESIGN • DEVELOPMENT • MARKETING • ").map((text, i) => (
             <span key={i} className="text-black font-black text-3xl md:text-5xl uppercase tracking-tighter">
               {text}
             </span>
           ))}
        </div>
      </div>

      {/* ABOUT TEASER */}
      <section className="py-32 bg-neutral-950 relative z-10">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
               NOT JUST AN AGENCY.<br/>
               WE ARE <span className="text-brand-yellow">CULTURE SHIFTERS.</span>
             </h2>
             <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
               In a world of noise, we create signals. At Viralwaale, we don't follow trends; we set them. Our team of expert designers, developers, and marketers work in unison to elevate your brand to cult status.
             </p>
             <Link to="/about" className="text-brand-yellow font-bold uppercase tracking-widest border-b-2 border-brand-yellow pb-1 hover:text-white hover:border-white transition-all">
               Read Our Story
             </Link>
           </div>
           <div className="relative group">
              <div className="absolute inset-0 bg-brand-yellow rounded-2xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
              <div className="relative bg-neutral-900 border border-white/10 rounded-2xl p-2 overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
                  alt="Office Culture" 
                  className="rounded-xl w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
              </div>
           </div>
        </div>
      </section>

      {/* FEATURED WORK TEASER */}
      <section className="py-32 bg-neutral-900 border-t border-white/5">
         <div className="container mx-auto px-6 mb-16 flex justify-between items-end">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white">FEATURED WORK</h2>
            </div>
            <Link to="/work" className="hidden md:block px-6 py-3 border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all font-bold">
              View All Projects
            </Link>
         </div>
         
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Work Item 1 */}
               <Link to="/work" className="group block relative h-[400px] rounded-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt="Work" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <span className="text-3xl font-black text-white uppercase">Apex Identity</span>
                  </div>
               </Link>
               {/* Work Item 2 */}
               <Link to="/work" className="group block relative h-[400px] rounded-2xl overflow-hidden md:translate-y-16">
                  <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt="Work" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <span className="text-3xl font-black text-white uppercase">Neon Drift</span>
                  </div>
               </Link>
            </div>
         </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-32 bg-neutral-950 relative">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mb-6"
            >
              OUR EXPERTISE
            </motion.h2>
            <div className="w-24 h-1 bg-brand-yellow mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link to="/services" key={service.id}>
                <ServiceCard service={service} index={index} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-20 fixed-bg"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent"></div>
         
         <div className="container mx-auto px-6 relative z-10 text-center">
           <h2 className="text-5xl md:text-9xl font-black text-white mb-10 tracking-tighter">
             READY TO GO <br/><span className="text-brand-yellow">VIRAL?</span>
           </h2>
           <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12">
             Let's build something extraordinary together. From concept to execution, we are your partners in growth.
           </p>
           <Link to="/contact">
            <button className="group relative px-12 py-6 bg-white text-black font-bold text-xl overflow-hidden rounded-full hover:scale-105 transition-transform duration-300">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">GET A FREE QUOTE</span>
              <div className="absolute inset-0 bg-neutral-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
           </Link>
         </div>
      </section>
    </motion.div>
  );
};

export default Home;