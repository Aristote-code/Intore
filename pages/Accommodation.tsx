import React from 'react';
import { Link } from 'react-router-dom';
import { ACCOMMODATIONS } from '../constants';
import { Check, User } from 'lucide-react';

const Accommodation: React.FC = () => {
  return (
    <div className="bg-brand-sand min-h-screen">
      {/* Header */}
      <div className="relative h-[60vh]">
         <img 
           src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1920&auto=format&fit=crop" 
           className="w-full h-full object-cover" 
           alt="Accommodation Hero"
         />
         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
               <span className="uppercase tracking-[0.3em] text-xs font-bold mb-4 block">The Village</span>
               <h1 className="font-serif text-5xl md:text-6xl text-white">Accommodation</h1>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 space-y-32">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center">
           <p className="font-serif text-2xl text-brand-green italic mb-6">"Rest is not idleness, and to lie sometimes on the grass under trees on a summer's day, listening to the murmur of the water, or watching the clouds float across the sky, is by no means a waste of time."</p>
           <p className="text-brand-dark/60 font-light">We offer two distinct styles of accommodation, designed to suit the needs of diverse groups while maintaining a standard of comfort and cleanliness.</p>
        </div>

        {/* List - Zig Zag Layout */}
        <div className="space-y-32">
          {ACCOMMODATIONS.map((acc, index) => (
            <div key={acc.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
               {/* Image Side */}
               <div className="w-full lg:w-1/2 relative">
                  <div className="h-[500px] overflow-hidden">
                     <img src={acc.image} alt={acc.name} className="w-full h-full object-cover" />
                  </div>
                  {/* Decorative offset border */}
                  <div className={`absolute -bottom-6 -right-6 w-full h-full border border-brand-green/20 -z-10 hidden md:block ${index % 2 === 1 ? 'right-auto -left-6' : ''}`}></div>
               </div>
               
               {/* Text Side */}
               <div className="w-full lg:w-1/2 space-y-6">
                  <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">{acc.type}</span>
                  <h2 className="font-serif text-4xl text-brand-green">{acc.name}</h2>
                  <div className="w-16 h-[1px] bg-brand-green/20"></div>
                  <p className="text-brand-dark/70 text-lg leading-relaxed font-light">{acc.description}</p>
                  
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8 py-6">
                     <div className="flex items-center text-sm font-medium text-brand-green">
                        <User size={16} className="mr-3 text-brand-gold" /> {acc.capacity}
                     </div>
                     {acc.amenities.map((am, i) => (
                        <div key={i} className="flex items-center text-sm font-light text-brand-dark/80">
                           <Check size={14} className="mr-3 text-brand-gold" /> {am}
                        </div>
                     ))}
                  </div>

                  <div className="pt-4">
                     <Link to="/book" className="inline-block bg-brand-green text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-brand-earth transition-colors">
                        Check Availability
                     </Link>
                  </div>
               </div>
            </div>
          ))}
        </div>
        
        {/* VIP Section */}
        <div className="bg-brand-light p-12 md:p-20 text-center border border-brand-green/5">
           <h3 className="font-serif text-3xl text-brand-green mb-6">Executive Cottages</h3>
           <p className="text-brand-dark/60 max-w-2xl mx-auto mb-10 font-light">
             For distinguished guests requiring additional privacy and premium amenities, we offer a limited number of Executive Cottages. 
             These feature private living areas, upgraded furnishings, and dedicated service.
           </p>
           <Link to="/contact" className="text-brand-green border-b border-brand-green pb-1 text-xs uppercase tracking-widest hover:text-brand-gold hover:border-brand-gold transition-colors">
             Inquire for Executive Booking
           </Link>
        </div>

      </div>
    </div>
  );
};

export default Accommodation;