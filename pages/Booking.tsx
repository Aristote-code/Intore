import React, { useState } from 'react';
import { Calendar, CheckCircle, ChevronRight, ChevronLeft, User, Home, Sparkles } from 'lucide-react';
import { ACCOMMODATIONS, EXPERIENCES } from '../constants';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    adults: 1,
    roomType: '',
    numRooms: 1,
    experiences: [] as string[],
    name: '',
    email: '',
    phone: '',
    org: '',
    notes: ''
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  
  const toggleExperience = (id: string) => {
    setFormData(prev => ({
      ...prev,
      experiences: prev.experiences.includes(id) 
        ? prev.experiences.filter(e => e !== id)
        : [...prev.experiences, id]
    }));
  };

  const steps = [
    { num: 1, title: 'Dates', icon: <Calendar size={18} /> },
    { num: 2, title: 'Stay', icon: <Home size={18} /> },
    { num: 3, title: 'Activities', icon: <Sparkles size={18} /> },
    { num: 4, title: 'Details', icon: <User size={18} /> },
  ];

  return (
    <div className="bg-brand-sand min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <span className="uppercase tracking-[0.3em] text-xs font-bold text-brand-gold mb-2 block">Reservations</span>
            <h1 className="font-serif text-3xl md:text-4xl text-brand-green">Book a Retreat</h1>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-16 relative px-4">
          <div className="absolute left-0 top-1/2 w-full h-[1px] bg-brand-green/10 -z-10"></div>
          {steps.map((s) => (
            <div key={s.num} className="flex flex-col items-center bg-brand-sand px-4">
              <div className={`w-8 h-8 flex items-center justify-center transition-colors border ${
                step >= s.num ? 'bg-brand-green border-brand-green text-white' : 'bg-white border-brand-green/20 text-brand-green/40'
              }`}>
                {step > s.num ? <CheckCircle size={14} /> : <span className="text-xs">{s.num}</span>}
              </div>
              <span className={`text-[10px] uppercase tracking-widest mt-2 ${step >= s.num ? 'text-brand-green' : 'text-brand-dark/30'}`}>{s.title}</span>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-white p-8 md:p-12 shadow-sm border border-brand-green/5 min-h-[400px]">
          
          {/* Step 1: Dates & Group */}
          {step === 1 && (
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-2xl font-serif text-brand-green">When would you like to visit?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-green mb-2">Check-in</label>
                  <input 
                    type="date" 
                    className="w-full p-4 border border-brand-green/20 focus:border-brand-gold outline-none bg-brand-sand/20"
                    value={formData.startDate}
                    onChange={e => setFormData({...formData, startDate: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-green mb-2">Check-out</label>
                  <input 
                    type="date" 
                    className="w-full p-4 border border-brand-green/20 focus:border-brand-gold outline-none bg-brand-sand/20"
                    value={formData.endDate}
                    onChange={e => setFormData({...formData, endDate: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-brand-green mb-2">Group Size (Approx.)</label>
                <select 
                  className="w-full p-4 border border-brand-green/20 focus:border-brand-gold outline-none bg-white"
                  value={formData.adults}
                  onChange={e => setFormData({...formData, adults: parseInt(e.target.value)})}
                >
                  <option value={1}>1 Person</option>
                  <option value={2}>2 People</option>
                  <option value={5}>3-10 (Small Group)</option>
                  <option value={15}>11-20 (Team)</option>
                  <option value={30}>21-50 (Large Group)</option>
                  <option value={51}>50+ (Conference)</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 2: Accommodation */}
          {step === 2 && (
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-2xl font-serif text-brand-green">Select Accommodation</h2>
              <div className="space-y-6">
                {ACCOMMODATIONS.map(acc => (
                  <div 
                    key={acc.id}
                    onClick={() => setFormData({...formData, roomType: acc.id})}
                    className={`flex flex-col md:flex-row border cursor-pointer transition-all ${
                      formData.roomType === acc.id ? 'border-brand-gold bg-brand-gold/5' : 'border-brand-green/10 hover:border-brand-green/30'
                    }`}
                  >
                    <img src={acc.image} alt={acc.name} className="w-full md:w-48 h-32 object-cover" />
                    <div className="p-6 flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-serif text-lg text-brand-green">{acc.name}</h3>
                          <p className="text-xs uppercase tracking-widest text-brand-gold">{acc.type}</p>
                        </div>
                        {formData.roomType === acc.id && <CheckCircle className="text-brand-gold" size={20} />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Experiences */}
          {step === 3 && (
            <div className="space-y-8 animate-fade-in-up">
               <h2 className="text-2xl font-serif text-brand-green">Enhance Your Stay</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {EXPERIENCES.map(exp => (
                   <div 
                    key={exp.id}
                    onClick={() => toggleExperience(exp.id)}
                    className={`p-4 border cursor-pointer transition-all flex items-start space-x-4 ${
                      formData.experiences.includes(exp.id) ? 'border-brand-green bg-brand-green text-white' : 'border-brand-green/10 hover:bg-brand-sand/50'
                    }`}
                   >
                     <div className={`w-4 h-4 mt-1 border flex items-center justify-center flex-shrink-0 ${
                       formData.experiences.includes(exp.id) ? 'border-white' : 'border-brand-green/30'
                     }`}>
                       {formData.experiences.includes(exp.id) && <div className="w-2 h-2 bg-white"></div>}
                     </div>
                     <div>
                       <h4 className={`font-serif text-sm ${formData.experiences.includes(exp.id) ? 'text-white' : 'text-brand-green'}`}>{exp.title}</h4>
                       <p className={`text-[10px] uppercase tracking-wider mt-1 ${formData.experiences.includes(exp.id) ? 'text-white/60' : 'text-brand-dark/40'}`}>{exp.category}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {/* Step 4: Contact Info */}
          {step === 4 && (
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-2xl font-serif text-brand-green">Guest Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input 
                  type="text" placeholder="FULL NAME"
                  className="p-4 border-b border-brand-green/20 bg-transparent focus:border-brand-gold outline-none placeholder:text-xs placeholder:tracking-widest"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  type="email" placeholder="EMAIL ADDRESS"
                  className="p-4 border-b border-brand-green/20 bg-transparent focus:border-brand-gold outline-none placeholder:text-xs placeholder:tracking-widest"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
                 <input 
                  type="text" placeholder="ORGANIZATION"
                  className="p-4 border-b border-brand-green/20 bg-transparent focus:border-brand-gold outline-none placeholder:text-xs placeholder:tracking-widest"
                  value={formData.org}
                  onChange={e => setFormData({...formData, org: e.target.value})}
                />
                 <input 
                  type="tel" placeholder="PHONE NUMBER"
                  className="p-4 border-b border-brand-green/20 bg-transparent focus:border-brand-gold outline-none placeholder:text-xs placeholder:tracking-widest"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <textarea 
                placeholder="SPECIAL REQUESTS OR NOTES"
                className="w-full p-4 border-b border-brand-green/20 bg-transparent focus:border-brand-gold outline-none resize-none placeholder:text-xs placeholder:tracking-widest h-32"
                value={formData.notes}
                onChange={e => setFormData({...formData, notes: e.target.value})}
              />
            </div>
          )}

          {/* Footer Actions */}
          <div className="mt-12 flex justify-between items-center pt-8 border-t border-brand-green/5">
            {step > 1 ? (
              <button onClick={handleBack} className="text-brand-green hover:text-brand-gold text-xs uppercase tracking-widest flex items-center">
                <ChevronLeft size={14} className="mr-1" /> Back
              </button>
            ) : <div></div>}
            
            <button 
              onClick={step === 4 ? () => alert('Inquiry Sent') : handleNext}
              className="bg-brand-green text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-brand-earth transition-all flex items-center"
            >
              {step === 4 ? 'Submit Inquiry' : 'Next Step'}
              {step < 4 && <ChevronRight size={14} className="ml-2" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;