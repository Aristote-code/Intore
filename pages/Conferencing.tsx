import React from 'react';
import { Link } from 'react-router-dom';
import { MEETING_SPACES } from '../constants';
import { Users, Wifi, Monitor } from 'lucide-react';

const Conferencing: React.FC = () => {
  return (
    <div className="bg-brand-sand min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh]">
         <img 
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1920&auto=format&fit=crop" 
            alt="Open air meeting space with view" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-green/40 mix-blend-multiply" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
             <div className="max-w-3xl">
                <span className="uppercase tracking-[0.3em] text-xs font-bold text-white mb-4 block">Meetings & Events</span>
                <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Meet with Purpose</h1>
                <p className="text-white/90 text-lg font-light max-w-xl mx-auto">
                   Thoughtfully designed spaces that blend modern functionality with the serenity of nature.
                </p>
             </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        
        {/* Spaces Grid */}
        <section className="mb-32">
           <div className="text-center mb-20">
             <h2 className="font-serif text-4xl text-brand-green mb-6">Our Spaces</h2>
             <p className="text-brand-dark/60 font-light max-w-2xl mx-auto">
               Equipped with high-speed fiber internet, audiovisual facilities, and flexible configurations to suit your agenda.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {MEETING_SPACES.map((space) => (
               <div key={space.id} className="group bg-white border border-brand-green/5 hover:border-brand-green/20 transition-all duration-500">
                  <div className="h-64 overflow-hidden relative">
                    <img src={space.image} alt={space.name} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-brand-green">
                       {space.capacity}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-2xl text-brand-green mb-3">{space.name}</h3>
                    <p className="text-brand-dark/60 text-sm leading-relaxed mb-6 font-light h-12">{space.description}</p>
                    <div className="flex gap-4 text-xs text-brand-dark/40 uppercase tracking-wider border-t border-brand-green/5 pt-4">
                      <span className="flex items-center"><Wifi size={12} className="mr-1"/> Fiber Wifi</span>
                      <span className="flex items-center"><Monitor size={12} className="mr-1"/> A/V Tech</span>
                    </div>
                  </div>
               </div>
             ))}
           </div>
        </section>

        {/* Sample Itineraries - Elegant Cards */}
        <section>
           <h2 className="font-serif text-3xl text-brand-green mb-12 text-center">Curated Itineraries</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-10 border-t-2 border-brand-gold shadow-sm">
                 <span className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-4 block">1 Day</span>
                 <h3 className="font-serif text-2xl text-brand-green mb-6">Strategy Offsite</h3>
                 <ul className="space-y-4 text-sm text-brand-dark/70 font-light">
                    <li className="flex gap-4 border-b border-brand-green/5 pb-2"><span className="font-bold text-brand-green w-16">08:30</span> Welcome Coffee at Rooftop</li>
                    <li className="flex gap-4 border-b border-brand-green/5 pb-2"><span className="font-bold text-brand-green w-16">09:00</span> Strategy Session in Boardroom</li>
                    <li className="flex gap-4 border-b border-brand-green/5 pb-2"><span className="font-bold text-brand-green w-16">12:30</span> Farm-to-table Lunch</li>
                    <li className="flex gap-4 border-b border-brand-green/5 pb-2"><span className="font-bold text-brand-green w-16">14:00</span> Guided Nature Walk</li>
                    <li className="flex gap-4"><span className="font-bold text-brand-green w-16">16:00</span> Closing Wrap-up</li>
                 </ul>
              </div>
              <div className="bg-white p-10 border-t-2 border-brand-green shadow-sm">
                 <span className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-4 block">3 Days</span>
                 <h3 className="font-serif text-2xl text-brand-green mb-6">Leadership Retreat</h3>
                 <ul className="space-y-4 text-sm text-brand-dark/70 font-light">
                    <li className="flex gap-4 border-b border-brand-green/5 pb-2"><span className="font-bold text-brand-green w-16">Day 1</span> Arrival, Check-in, Evening Bonfire</li>
                    <li className="flex gap-4 border-b border-brand-green/5 pb-2"><span className="font-bold text-brand-green w-16">Day 2</span> Workshop + Community Service</li>
                    <li className="flex gap-4"><span className="font-bold text-brand-green w-16">Day 3</span> Morning Yoga, Closing, Departure</li>
                 </ul>
              </div>
           </div>
           <div className="text-center mt-16">
             <Link to="/contact" className="bg-brand-green hover:bg-brand-earth text-white px-10 py-4 text-xs uppercase tracking-widest transition-all">
               Request a Proposal
             </Link>
           </div>
        </section>

      </div>
    </div>
  );
};

export default Conferencing;