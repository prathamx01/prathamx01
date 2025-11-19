import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative p-8 glass-panel rounded-2xl hover:border-brand-yellow/50 transition-colors duration-500 overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowUpRight className="text-brand-yellow w-6 h-6" />
      </div>
      
      <div className="mb-6 inline-block p-4 bg-neutral-800 rounded-xl group-hover:bg-brand-yellow transition-colors duration-300">
        <service.icon className="w-8 h-8 text-white group-hover:text-black transition-colors duration-300" />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors">
        {service.title}
      </h3>
      
      <p className="text-neutral-400 leading-relaxed mb-6">
        {service.description}
      </p>
      
      <div className="w-full h-0.5 bg-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-yellow transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;