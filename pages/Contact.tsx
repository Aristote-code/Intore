import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-brand-sand min-h-screen">
       <div className="max-w-7xl mx-auto px-6 py-24">
         <div className="text-center mb-20">
           <span className="uppercase tracking-[0.3em] text-xs font-bold text-brand-gold mb-4 block">Connect</span>
           <h1 className="font-serif text-4xl md:text-5xl text-brand-green mb-6">Get in Touch</h1>
           <p className="text-lg text-brand-dark/60 font-light">We'd love to discuss your upcoming retreat.</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
           {/* Info */}
           <div className="space-y-12">
               <div>
                  <h3 className="font-serif text-2xl text-brand-green mb-8">Contact Information</h3>
                  <div className="space-y-8">
                    <div className="flex items-start group">
                      <MapPin size={20} className="text-brand-gold mr-6 flex-shrink-0 mt-1" strokeWidth={1} />
                      <div>
                        <p className="uppercase tracking-widest text-xs font-bold text-brand-green mb-1">Address</p>
                        <p className="text-brand-dark/60 font-light">Rwamagana District, Eastern Province<br/>Rwanda (1hr from Kigali)</p>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <Mail size={20} className="text-brand-gold mr-6 flex-shrink-0 mt-1" strokeWidth={1} />
                      <div>
                        <p className="uppercase tracking-widest text-xs font-bold text-brand-green mb-1">Email</p>
                        <a href="mailto:visit@intore.rw" className="text-brand-dark/60 font-light hover:text-brand-gold transition-colors">visit@intore.rw</a>
                      </div>
                    </div>
                    <div className="flex items-start group">
                      <Phone size={20} className="text-brand-gold mr-6 flex-shrink-0 mt-1" strokeWidth={1} />
                      <div>
                        <p className="uppercase tracking-widest text-xs font-bold text-brand-green mb-1">Phone</p>
                        <p className="text-brand-dark/60 font-light">+250 788 000 000</p>
                      </div>
                    </div>
                  </div>
               </div>
               
               {/* Map Placeholder */}
               <div className="bg-gray-200 h-80 w-full grayscale">
                   <div className="w-full h-full flex items-center justify-center bg-brand-green/5">
                      <span className="font-serif text-brand-green/40 italic">Google Map Embed</span>
                   </div>
               </div>
           </div>

           {/* Form */}
           <div className="bg-white p-10 lg:p-12 shadow-sm border border-brand-green/5">
             <h3 className="font-serif text-2xl text-brand-green mb-8">Send a Message</h3>
             <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-green mb-2">First Name</label>
                    <input type="text" className="w-full p-3 bg-brand-sand/50 border-b border-brand-green/20 focus:border-brand-gold outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-green mb-2">Last Name</label>
                    <input type="text" className="w-full p-3 bg-brand-sand/50 border-b border-brand-green/20 focus:border-brand-gold outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-green mb-2">Email</label>
                  <input type="email" className="w-full p-3 bg-brand-sand/50 border-b border-brand-green/20 focus:border-brand-gold outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-green mb-2">Message</label>
                  <textarea rows={6} className="w-full p-3 bg-brand-sand/50 border-b border-brand-green/20 focus:border-brand-gold outline-none resize-none transition-colors"></textarea>
                </div>
                <button className="w-full bg-brand-green text-white text-xs uppercase tracking-widest font-bold py-4 hover:bg-brand-earth transition-colors mt-4">
                  Send Message
                </button>
             </form>
           </div>
         </div>
       </div>
    </div>
  );
};

export default Contact;