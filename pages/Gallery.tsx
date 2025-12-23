import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Accommodation', 'Conferencing', 'Experiences', 'Nature'];

  const displayedImages = activeTab === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeTab);

  return (
    <div className="bg-brand-sand min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-xs font-bold text-brand-gold mb-4 block">Visuals</span>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-green mb-8">Life at the Village</h1>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 text-xs uppercase tracking-widest transition-colors ${
                activeTab === tab 
                  ? 'text-brand-green border-b border-brand-green font-bold' 
                  : 'text-brand-dark/40 hover:text-brand-green'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {displayedImages.map((img) => (
            <div key={img.id} className="break-inside-avoid relative group overflow-hidden cursor-zoom-in">
              <img src={img.src} alt={img.category} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-[10px] uppercase tracking-widest border border-white px-6 py-3 backdrop-blur-md">View</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <p className="font-serif text-2xl text-brand-green mb-8 italic">Inspired by what you see?</p>
          <a href="/#/book" className="bg-brand-green text-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-brand-earth transition-colors">
            Book a Retreat
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;