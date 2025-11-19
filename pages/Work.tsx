import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Filter } from 'lucide-react';

const categories = ["All", "Web Dev", "Branding", "Marketing", "Video"];

const projects = [
  {
    id: 1,
    title: "Neon Drift",
    category: "Video",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    client: "Drift Masters"
  },
  {
    id: 2,
    title: "EcoStore Com",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    client: "Green Life"
  },
  {
    id: 3,
    title: "Apex Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop",
    client: "Apex Gear"
  },
  {
    id: 4,
    title: "Urban Hype",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop",
    client: "City Wear"
  },
  {
    id: 5,
    title: "Tech Nova",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
    client: "Nova Systems"
  },
  {
    id: 6,
    title: "Glitch Energy",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1613254025696-67c9c92b72e4?q=80&w=2574&auto=format&fit=crop",
    client: "Glitch Drinks"
  }
];

const Work: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 min-h-screen bg-neutral-950"
    >
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-5xl md:text-8xl font-black text-white mb-4"
            >
              SELECTED <br/><span className="text-brand-yellow">WORK</span>
            </motion.h1>
            <p className="text-neutral-400 text-lg max-w-xl">
              A showcase of our most impactful projects. Where creativity meets strategy.
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-brand-yellow text-black border-brand-yellow' 
                    : 'bg-transparent text-neutral-500 border-neutral-800 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 relative">
                  {/* Image */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <h3 className="text-3xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {project.title}
                    </h3>
                    <p className="text-brand-yellow font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                      {project.category}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* More Button */}
        <div className="text-center mt-20">
          <button className="px-10 py-4 border border-white/10 rounded-full text-neutral-400 hover:bg-white/5 hover:text-white hover:border-white/30 transition-all duration-300 font-bold uppercase tracking-widest text-sm">
            Load More Projects
          </button>
        </div>

      </div>
    </motion.div>
  );
};

export default Work;