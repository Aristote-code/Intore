import React from 'react';
import { Link } from 'react-router-dom';
import { PACKAGES } from '../constants';
import { Check, HelpCircle } from 'lucide-react';

const Packages: React.FC = () => {
  return (
    <div className="bg-brand-sand min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.3em] text-xs font-bold text-brand-gold mb-4 block">Pricing</span>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-green mb-4">Packages & Offers</h1>
          <p className="text-lg text-brand-dark/60 font-light">Curated experiences for every group type.</p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {PACKAGES.map((pkg, i) => (
            <div key={pkg.id} className={`bg-white border flex flex-col p-8 lg:p-10 ${i === 1 ? 'border-brand-gold shadow-md relative' : 'border-brand-green/10'}`}>
               {i === 1 && <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-white px-4 py-1 text-[10px] uppercase tracking-widest">Most Popular</div>}
               <div className="text-center mb-8 border-b border-brand-green/10 pb-8">
                 <span className="text-[10px] uppercase tracking-widest text-brand-dark/40 block mb-2">{pkg.targetAudience}</span>
                 <h3 className="font-serif text-2xl text-brand-green mb-2 h-16 flex items-center justify-center">{pkg.title}</h3>
                 <p className="text-brand-gold font-bold text-sm uppercase tracking-wide">{pkg.duration}</p>
               </div>
               
               <div className="mb-8 flex-grow">
                 <ul className="space-y-4">
                   {pkg.inclusions.map((inc, i) => (
                     <li key={i} className="flex items-start text-brand-dark/70 text-sm font-light">
                       <Check size={14} className="text-brand-gold mr-3 mt-1 flex-shrink-0" />
                       {inc}
                     </li>
                   ))}
                 </ul>
               </div>
               
               <div className="text-center">
                  <p className="text-[10px] uppercase tracking-widest text-brand-dark/40 mb-1">Starting from</p>
                  <div className="text-2xl font-serif text-brand-green mb-6">{pkg.priceStart}</div>
                  <Link to="/book" className={`block w-full text-center border text-xs uppercase tracking-widest py-3 transition-colors ${i === 1 ? 'bg-brand-gold border-brand-gold text-white hover:bg-brand-earth' : 'border-brand-green text-brand-green hover:bg-brand-green hover:text-white'}`}>
                    Inquire Now
                  </Link>
               </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto border-t border-brand-green/10 pt-16">
          <h2 className="font-serif text-2xl text-brand-green mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
             {[
               { q: "Are prices fixed?", a: "The prices listed are starting estimates. Final quotes depend on group size, specific menu choices, and seasonal availability." },
               { q: "Can we customize a package?", a: "Absolutely. We specialize in bespoke itineraries. You can mix and match experiences to suit your team's goals." },
               { q: "Do you offer non-profit rates?", a: "Yes, as a community-based organization, we offer special rates for registered NGOs and educational institutions." },
             ].map((item, i) => (
               <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <h3 className="font-bold text-brand-green text-sm">{item.q}</h3>
                 <p className="md:col-span-2 text-brand-dark/60 font-light leading-relaxed text-sm">{item.a}</p>
               </div>
             ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Packages;