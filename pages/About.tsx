import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Trophy, Users, Zap, Target, Lightbulb, Heart } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: '500+', icon: CheckCircle2 },
  { label: 'Happy Clients', value: '200+', icon: Users },
  { label: 'Awards Won', value: '15', icon: Trophy },
  { label: 'Years Experience', value: '5+', icon: Zap },
];

const About: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 min-h-screen bg-neutral-950"
    >
      {/* Header */}
      <div className="container mx-auto px-6 mb-20">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl md:text-7xl font-black text-white mb-8"
        >
          WHO WE <span className="text-brand-yellow">ARE</span>
        </motion.h1>
        <div className="w-full h-px bg-white/10 mb-12"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="space-y-6 text-lg text-neutral-400 leading-relaxed"
          >
            <p>
              <strong className="text-white">Viralwaale</strong> isn't just an agency; we are a collective of dreamers, designers, developers, and strategists obsessed with digital perfection.
            </p>
            <p>
              Founded on the belief that every brand has a unique story waiting to go viral, we combine cutting-edge technology with raw creativity. Our mission is simple: to turn noise into influence and clicks into customers.
            </p>
            <p>
              Whether it's a high-performance website, a cinematic brand video, or a disruptive social media campaign, we pour our souls into every pixel and frame.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
             <div className="absolute -inset-4 bg-brand-yellow/20 rounded-3xl blur-2xl"></div>
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
               alt="Creative Team" 
               className="relative rounded-3xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
             />
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-neutral-900 py-20 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <stat.icon className="w-10 h-10 text-brand-yellow mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</h3>
                <p className="text-neutral-500 uppercase tracking-wider text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Vision */}
      <div className="container mx-auto px-6 py-32">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">OUR DNA</h2>
            <p className="text-neutral-400">The core values that drive every pixel we push.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: 'Innovation', icon: Lightbulb, desc: 'We embrace new tech before it becomes a trend. We are future-proof.'},
             { title: 'Creativity', icon: Target, desc: 'We hate boring. We design to disrupt and capture attention instantly.'},
             { title: 'Passion', icon: Heart, desc: 'We love what we do. It shows in our code, our designs, and our results.'}
           ].map((item, i) => (
             <motion.div 
               key={i} 
               whileHover={{ y: -10 }}
               className="p-10 border border-white/5 rounded-3xl hover:border-brand-yellow/30 transition-all bg-white/[0.02] group"
             >
               <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-yellow transition-colors">
                 <item.icon className="text-white group-hover:text-black" size={24} />
               </div>
               <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-yellow transition-colors">{item.title}</h3>
               <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>

      {/* Clients Ticker */}
      <div className="py-20 border-t border-white/5 overflow-hidden">
         <h3 className="text-center text-neutral-500 font-bold uppercase tracking-widest mb-10">Trusted By Brands Like</h3>
         <div className="flex justify-center gap-12 md:gap-24 opacity-50 grayscale">
             {/* Simple Circles for logo placeholders */}
             {[1,2,3,4,5].map((i) => (
                 <div key={i} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-neutral-700"></div>
                    <span className="font-bold text-xl">BRAND</span>
                 </div>
             ))}
         </div>
      </div>
    </motion.div>
  );
};

export default About;