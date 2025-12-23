import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';
import { Filter } from 'lucide-react';

const Experiences: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Learning', 'Nature', 'Culture', 'Wellness', 'Creative', 'Team-building'];
  
  const filteredExperiences = filter === 'All' 
    ? EXPERIENCES 
    : EXPERIENCES.filter(e => e.category === filter);

  return (
    <div className="bg-brand-sand min-h-screen">
      {/* Header */}
      <div className="bg-brand-green text-brand-sand py-24 px-6 text-center">
        <span className="uppercase tracking-[0.3em] text-xs font-bold text-brand-gold mb-4 block">Discover</span>
        <h1 className="font-serif text-4xl md:text-5xl mb-6">Village Experiences</h1>
        <p className="text-lg font-light text-brand-sand/80 max-w-2xl mx-auto">
            Immersive activities designed to connect your team with Rwandan culture, 
            innovation, and the natural world.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-0 z-40 bg-white border-b border-brand-green/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center space-x-2 md:space-x-6 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-2 py-1 text-xs uppercase tracking-widest transition-colors ${
                filter === cat 
                  ? 'text-brand-green border-b border-brand-green font-bold' 
                  : 'text-brand-dark/40 hover:text-brand-green'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredExperiences.map((exp) => (
            <div key={exp.id} className="group bg-white flex flex-col h-full border border-brand-green/5 hover:border-brand-green/20 transition-all duration-300">
              <div className="relative h-72 overflow-hidden">
                <img src={exp.image} alt={exp.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-brand-green">
                  {exp.category}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="font-serif text-2xl text-brand-green mb-3 group-hover:text-brand-earth transition-colors">{exp.title}</h3>
                <div className="flex items-center text-xs uppercase tracking-widest text-brand-gold mb-4 space-x-4">
                  <span>{exp.duration}</span>
                  <span>•</span>
                  <span>{exp.groupSize} Guests</span>
                </div>
                <p className="text-brand-dark/60 font-light mb-8 flex-grow leading-relaxed">{exp.description}</p>
                <button className="w-full border border-brand-green text-brand-green hover:bg-brand-green hover:text-white text-xs uppercase tracking-widest py-3 transition-colors">
                  Add to Inquiry
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredExperiences.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-light italic">
            No experiences found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Experiences;