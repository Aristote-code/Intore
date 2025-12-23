import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-brand-sand min-h-screen text-brand-green">
      {/* Hero */}
      <div className="relative h-[70vh] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1920&auto=format&fit=crop" 
          alt="Rwanda Community Gathering" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
        />
        <div className="absolute inset-0 bg-brand-green/20 mix-blend-multiply"></div>
        <div className="relative z-10 text-center max-w-4xl px-4">
           <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Our Story</span>
           <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-brand-green mb-8">Rooted in Resilience</h1>
           <p className="text-xl md:text-2xl font-serif italic text-brand-green/80">Connecting the world to the wisdom of the village.</p>
        </div>
      </div>

      {/* Editorial Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
        
        {/* Section 1: Text Heavy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 items-start">
           <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
                 A bridge between <br/>
                 <span className="text-brand-clay italic">global innovators</span> and <br/>
                 <span className="text-brand-earth italic">local wisdom.</span>
              </h2>
              <div className="w-24 h-[2px] bg-brand-gold mb-8"></div>
           </div>
           <div className="font-serif text-lg leading-relaxed text-brand-dark/70 space-y-6">
              <p>
                 <span className="text-5xl float-left mr-4 mt-[-10px] font-serif text-brand-gold">I</span>
                 ntore Learning Community was born from a desire to create a sustainable model for community development. 
                 Inspired by the resilience of the Rwandan people, we built a village that serves as a bridge.
              </p>
              <p>
                 Traditional conference centers isolate you. A village integrates you. Here, you don't just attend a meeting; 
                 you inhabit a space designed for human scale interaction. The fresh air, the red earth paths, and the 
                 communal dining spaces foster a type of connection that sterile hotel ballrooms cannot match.
              </p>
           </div>
        </div>

        {/* Section 2: Image & Values */}
        <div className="relative mb-32">
           <div className="aspect-w-16 aspect-h-9 h-[600px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover" alt="Community" />
           </div>
           <div className="lg:absolute lg:bottom-[-50px] lg:right-24 bg-brand-green text-brand-sand p-12 lg:max-w-xl shadow-2xl">
              <h3 className="font-serif text-3xl text-brand-gold mb-6">Our Core Values</h3>
              <ul className="space-y-6">
                 <li className="flex items-start">
                    <span className="text-brand-clay font-bold mr-4">01.</span>
                    <div>
                       <h4 className="uppercase tracking-widest text-xs font-bold mb-2">Learning</h4>
                       <p className="font-light text-white/70">Education happens everywhere, not just in classrooms. We learn from the land and each other.</p>
                    </div>
                 </li>
                 <li className="flex items-start">
                    <span className="text-brand-clay font-bold mr-4">02.</span>
                    <div>
                       <h4 className="uppercase tracking-widest text-xs font-bold mb-2">Community</h4>
                       <p className="font-light text-white/70">We are stronger together. Every voice matters in the village.</p>
                    </div>
                 </li>
                 <li className="flex items-start">
                    <span className="text-brand-clay font-bold mr-4">03.</span>
                    <div>
                       <h4 className="uppercase tracking-widest text-xs font-bold mb-2">Stewardship</h4>
                       <p className="font-light text-white/70">Proceeds from ILC directly support youth education and community health initiatives.</p>
                    </div>
                 </li>
              </ul>
           </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-24 border-t border-brand-earth/20">
          <h2 className="font-serif text-4xl text-brand-green mb-8">Join our Community</h2>
          <div className="flex justify-center gap-6">
            <Link to="/contact" className="bg-brand-earth text-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-brand-green transition-colors">
              Start a Conversation
            </Link>
             <Link to="/packages" className="text-brand-green border border-brand-green px-10 py-4 text-xs uppercase tracking-widest hover:bg-brand-green hover:text-white transition-colors">
              View Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;