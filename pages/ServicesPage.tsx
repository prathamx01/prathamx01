import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Video, Palette, ShoppingCart, Code, BarChart, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const detailedServices = [
  {
    id: 'marketing',
    title: 'Digital Marketing',
    icon: Rocket,
    features: ['SEO Optimization', 'PPC Campaigns', 'Email Marketing', 'Conversion Rate Optimization'],
    desc: "We don't just run ads; we build funnels that convert strangers into loyal customers using data-driven insights."
  },
  {
    id: 'social',
    title: 'Social Media Management',
    icon: BarChart,
    features: ['Content Strategy', 'Community Management', 'Influencer Marketing', 'Analytics & Reporting'],
    desc: "Building a unique voice for your brand that resonates with the Gen-Z and Millennial audience across all platforms."
  },
  {
    id: 'dev',
    title: 'Web & App Development',
    icon: Code,
    features: ['React & Next.js', 'Mobile Apps', 'Custom CMS', 'API Integration'],
    desc: "Robust, scalable, and lightning-fast digital infrastructure built with modern stacks to support your business growth."
  },
  {
    id: 'video',
    title: 'Video Production',
    icon: Video,
    features: ['Commercial Ads', 'Reels & TikToks', 'Motion Graphics', 'Corporate Shoots'],
    desc: "Visual storytelling that captures attention in the first 3 seconds and keeps viewers hooked till the end."
  },
  {
    id: 'branding',
    title: 'Branding & Design',
    icon: Palette,
    features: ['Logo Design', 'Brand Identity', 'UI/UX Design', 'Print Media'],
    desc: "Aesthetics that make your brand stand out in a crowded marketplace. We craft identities that leave a mark."
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    icon: ShoppingCart,
    features: ['Shopify Setup', 'Product Photography', 'Inventory Management', 'Payment Gateway'],
    desc: "Turn your products into a seamless online shopping experience with high-converting store designs."
  }
];

const ServicesPage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 min-h-screen bg-neutral-950"
    >
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white mb-8"
          >
            OUR <span className="text-brand-yellow">SERVICES</span>
          </motion.h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We offer comprehensive digital solutions tailored to elevate your brand in the digital age. From pixels to code, we handle it all.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {detailedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-900/50 border border-white/5 p-8 rounded-3xl hover:bg-neutral-900 hover:border-brand-yellow/30 transition-all duration-500 group flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-neutral-800 rounded-2xl flex items-center justify-center group-hover:bg-brand-yellow transition-colors duration-500">
                  <service.icon className="w-8 h-8 text-brand-yellow group-hover:text-black transition-colors duration-500" />
                </div>
                <span className="text-neutral-700 font-black text-5xl opacity-20 group-hover:opacity-10 transition-opacity">0{index + 1}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-yellow transition-colors">{service.title}</h3>
              <p className="text-neutral-400 mb-8 leading-relaxed flex-grow">{service.desc}</p>
              
              <div className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors">
                    <CheckCircle size={14} className="text-brand-yellow mr-3" />
                    {feature}
                  </div>
                ))}
              </div>

              <Link 
                to="/contact"
                className="w-full py-4 border border-white/10 rounded-xl text-center font-bold text-white hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-all flex items-center justify-center gap-2 group-hover:gap-3"
              >
                Book This Service <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-32 border-t border-white/10 pt-20">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black text-white mb-4">HOW WE WORK</h2>
             <p className="text-neutral-400">Our proven process for success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {[
               { step: "01", title: "Discovery", desc: "We dive deep into your brand goals." },
               { step: "02", title: "Strategy", desc: "We map out the path to victory." },
               { step: "03", title: "Execution", desc: "We build, design, and launch." },
               { step: "04", title: "Scale", desc: "We optimize and grow your results." }
             ].map((item, i) => (
               <div key={i} className="relative p-6 border-l border-white/10 hover:border-brand-yellow transition-colors">
                  <span className="text-6xl font-black text-white/5 absolute top-0 right-0 -z-10">{item.step}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ServicesPage;