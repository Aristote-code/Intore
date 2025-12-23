import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BedDouble, Mic2, Utensils, Users, Sunrise, Mountain } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-green">
        {/* Background Image with Slow Zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1489447068241-b3490214e879?q=80&w=1920&auto=format&fit=crop" 
            alt="Intore Learning Community Landscape" 
            className="w-full h-full object-cover animate-slow-zoom opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white pt-20">
          <div className="inline-block mb-6 animate-fade-in-up">
             <div className="flex items-center justify-center space-x-4">
                <div className="h-[1px] w-8 bg-brand-gold"></div>
                <p className="uppercase tracking-[0.3em] text-xs font-bold text-brand-gold">Rwanda • Rwamagana</p>
                <div className="h-[1px] w-8 bg-brand-gold"></div>
             </div>
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-8 leading-none animate-fade-in-up delay-100">
            Intore
          </h1>
          <p className="font-serif text-2xl md:text-4xl italic text-brand-sand/90 mb-12 font-light animate-fade-in-up delay-200">
            A sanctuary for <span className="text-brand-gold not-italic">Connection</span> & <span className="text-brand-gold not-italic">Renewal</span>
          </p>
          
          <div className="animate-fade-in-up delay-300 flex flex-col md:flex-row justify-center items-center gap-6">
             <Link to="/book" className="bg-white text-brand-green px-10 py-4 text-xs uppercase tracking-widest hover:bg-brand-gold hover:text-white transition-all duration-500 min-w-[200px]">
              Begin Journey
            </Link>
             <Link to="/experiences" className="text-white border border-white/30 px-10 py-4 text-xs uppercase tracking-widest hover:border-brand-gold hover:text-brand-gold transition-all duration-500 min-w-[200px]">
              Explore Village
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/30 animate-bounce">
           <span className="text-[10px] uppercase tracking-widest mb-2 block text-center">Scroll</span>
          <div className="w-[1px] h-12 bg-brand-gold mx-auto"></div>
        </div>
      </section>

      {/* Philosophy - Editorial Layout */}
      <section className="py-32 bg-brand-sand">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative z-10">
                 <img 
                  src="https://images.unsplash.com/photo-1517013284022-798835f8d975?q=80&w=800&auto=format&fit=crop" 
                  alt="Village Path" 
                  className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                />
              </div>
              {/* Offset border in Earth Brown */}
              <div className="absolute top-8 -left-8 w-full h-full border border-brand-earth/30 z-0 hidden md:block"></div>
            </div>
            
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-6 block">Our Philosophy</span>
              <h2 className="font-serif text-5xl md:text-6xl text-brand-green mb-10 leading-tight">
                Not just a venue, <br/>but a <span className="italic text-brand-clay">living ecosystem.</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                 <p className="text-brand-dark/70 text-lg leading-relaxed font-light font-serif">
                   Intore Learning Community is rooted in the conviction that true learning happens in community. 
                   Away from the sterile lights of convention centers, our village offers a return to the essential.
                 </p>
                 <p className="text-brand-dark/70 text-lg leading-relaxed font-light font-serif">
                   Whether for a corporate strategy retreat, a youth leadership camp, or a cultural immersion, 
                   our spaces are designed to foster deep human connection and presence.
                 </p>
              </div>

              <Link to="/about" className="group inline-flex items-center text-brand-green uppercase tracking-widest text-xs font-bold mt-4">
                Read Our Story 
                <span className="ml-2 w-8 h-[1px] bg-brand-green group-hover:w-16 transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid - Minimalist Luxury */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
             <div>
                <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-3 block">The Village</span>
                <h2 className="font-serif text-5xl text-brand-green">Curated Spaces</h2>
             </div>
             <div className="hidden md:block w-1/3 h-[1px] bg-brand-green/10 mb-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Card 1 */}
             <Link to="/accommodation" className="group relative h-[600px] overflow-hidden block">
                <img src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Accommodation" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-10 left-10 text-white">
                   <p className="text-brand-gold text-xs uppercase tracking-widest mb-2">Rest</p>
                   <h3 className="font-serif text-4xl group-hover:translate-x-4 transition-transform duration-500">Accommodation</h3>
                </div>
             </Link>

             {/* Card 2 */}
             <Link to="/conferencing" className="group relative h-[600px] overflow-hidden block md:-mt-12">
                <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Conferencing" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-10 left-10 text-white">
                   <p className="text-brand-gold text-xs uppercase tracking-widest mb-2">Gather</p>
                   <h3 className="font-serif text-4xl group-hover:translate-x-4 transition-transform duration-500">Conferencing</h3>
                </div>
             </Link>

             {/* Card 3 */}
             <Link to="/experiences" className="group relative h-[600px] overflow-hidden block">
                <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Experiences" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-10 left-10 text-white">
                   <p className="text-brand-gold text-xs uppercase tracking-widest mb-2">Explore</p>
                   <h3 className="font-serif text-4xl group-hover:translate-x-4 transition-transform duration-500">Experiences</h3>
                </div>
             </Link>
          </div>
        </div>
      </section>

      {/* Signature Experiences - Dark Mode with Earth Brown accents */}
      <section className="py-32 bg-brand-green text-brand-sand relative overflow-hidden">
        {/* Decorative background letter */}
        <div className="absolute top-0 right-0 text-[400px] leading-none font-serif text-white/5 select-none -translate-y-1/2 translate-x-1/4">I</div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
              <div>
                <span className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Activities</span>
                <h2 className="font-serif text-5xl text-white">Signature Experiences</h2>
              </div>
              <Link to="/experiences" className="hidden md:block text-xs uppercase tracking-widest text-brand-gold hover:text-white transition-colors">View All Activities &rarr;</Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {EXPERIENCES.slice(0,3).map((exp, i) => (
               <div key={exp.id} className={`group cursor-pointer ${i === 1 ? 'md:mt-16' : ''}`}>
                 <div className="h-[450px] overflow-hidden mb-8 relative">
                   <div className="absolute inset-0 bg-brand-earth/20 mix-blend-overlay z-10"/>
                   <img src={exp.image} alt={exp.title} className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                   <div className="absolute top-6 right-6 bg-brand-sand/90 text-brand-green px-3 py-1 text-[10px] uppercase tracking-widest z-20">
                      {exp.duration}
                   </div>
                 </div>
                 <div className="pr-4">
                   <span className="text-brand-gold text-[10px] uppercase tracking-widest mb-2 block">{exp.category}</span>
                   <h3 className="font-serif text-3xl text-white mb-4 group-hover:text-brand-gold transition-colors">{exp.title}</h3>
                   <p className="text-white/60 font-light text-base leading-relaxed mb-6 font-serif border-l border-brand-gold/30 pl-4">{exp.description}</p>
                 </div>
               </div>
             ))}
           </div>
           
           <div className="mt-16 text-center md:hidden">
              <Link to="/experiences" className="text-xs uppercase tracking-widest text-brand-gold">View All Activities &rarr;</Link>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brand-sand text-center border-t border-brand-earth/10">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-brand-clay uppercase tracking-[0.2em] text-xs font-bold mb-6 block">Plan Your Retreat</span>
          <h2 className="font-serif text-5xl md:text-6xl text-brand-green mb-8">Ready to disconnect?</h2>
          <p className="text-xl text-brand-dark/60 font-light mb-12 max-w-2xl mx-auto font-serif italic">
            "In the silence of the hills, we find the answers we didn't know we were looking for."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link to="/book" className="bg-brand-green text-white px-12 py-5 text-xs uppercase tracking-widest hover:bg-brand-earth transition-colors shadow-xl shadow-brand-green/10">
              Request a Quote
            </Link>
             <Link to="/contact" className="border border-brand-green text-brand-green px-12 py-5 text-xs uppercase tracking-widest hover:bg-brand-green hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;