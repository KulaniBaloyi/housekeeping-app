"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Star, MessageSquare, ShieldCheck, Send, Quote, 
  MapPin, Phone, Award, Calendar as CalendarIcon,
  ChevronLeft, ChevronRight, ArrowRight
} from 'lucide-react';

const HouseKeeperDetails = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const specialist = {
    name: "Thandiwe Khumalo",
    role: "Senior Logistics Operator",
    location: "Sandton, Gauteng",
    phone: "+27 82 445 9901",
    rating: "4.98",
    deployments: "1,240",
    bio: "Certified in the 'Architect' protocol with a focus on visual audit perfection. Specialized in high-pressure transitions for elite Sandton portfolios."
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a] pt-32 md:pt-48 pb-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* --- PROFILE IDENTITY SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-8">
            <div className="relative aspect-[3/4] w-full overflow-hidden shadow-2xl bg-[#f2f0e8]">
              <Image 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
                alt={specialist.name}
                fill
                priority
                className="object-cover transition-transform duration-1000"
              />
              <div className="absolute top-6 right-6 z-10 bg-[#D4AF37] text-white p-3 rounded-full shadow-xl">
                <ShieldCheck size={20} />
              </div>
            </div>

            <div className="bg-white p-8 border border-[#eceae2] space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#fdfaf5] text-[#D4AF37] rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[8px] font-bold text-[#8c8a82] uppercase tracking-tighter">Location</p>
                  <p className="text-sm font-medium">{specialist.location}</p>
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-3 bg-[#1a1a1a] text-white py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-all group">
                <MessageSquare size={14} />
                Open Comms
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#D4AF37]">Specialist_Node</span>
              <h1 className="text-5xl md:text-7xl font-serif mt-4 mb-6">{specialist.name}</h1>
              <p className="text-[#5a5852] font-light leading-relaxed max-w-2xl text-lg italic">"{specialist.bio}"</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                 {[
                   { label: "Rating", val: specialist.rating, icon: <Star size={12} className="text-[#D4AF37]"/> },
                   { label: "Deployments", val: specialist.deployments, icon: <Award size={12} className="text-[#D4AF37]"/> },
                   { label: "GPS Accuracy", val: "99.8%", icon: <MapPin size={12} className="text-[#D4AF37]"/> },
                   { label: "Trust", val: "A+", icon: <ShieldCheck size={12} className="text-[#D4AF37]"/> },
                 ].map((s, i) => (
                   <div key={i} className="bg-white p-6 border border-[#eceae2] text-center group hover:border-[#D4AF37] transition-colors">
                      <div className="flex justify-center mb-2">{s.icon}</div>
                      <p className="text-xl font-serif">{s.val}</p>
                      <p className="text-[8px] font-bold uppercase tracking-widest text-[#8c8a82] mt-1">{s.label}</p>
                   </div>
                 ))}
              </div>
            </div>

            {/* --- FIXED CALENDAR SECTION --- */}
            <div className="bg-white border border-[#eceae2] p-8 md:p-12 shadow-sm relative overflow-hidden">
              <div className="flex justify-between items-center mb-10 relative z-10">
                <h3 className="text-xl font-serif flex items-center gap-3">
                  <CalendarIcon size={20} className="text-[#D4AF37]" />
                  Availability
                </h3>
                <div className="flex gap-4">
                  <button className="p-2 hover:bg-[#fdfaf5] rounded-full transition-colors"><ChevronLeft size={20}/></button>
                  <button className="p-2 hover:bg-[#fdfaf5] rounded-full transition-colors"><ChevronRight size={20}/></button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 relative z-10">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-[10px] font-bold uppercase text-[#8c8a82] text-center mb-4">{day}</div>
                ))}
                {Array.from({ length: 31 }).map((_, i) => {
                  const day = i + 1;
                  const isBooked = [4, 12, 18, 19, 25].includes(day);
                  const isSelected = selectedDate === day;

                  return (
                    <button 
                      key={i}
                      disabled={isBooked}
                      onClick={() => setSelectedDate(day)}
                      className={`
                        aspect-square flex flex-col items-center justify-center text-xs transition-all border
                        ${isBooked 
                          ? 'bg-[#b74e4e41] text-[#292121] border-transparent cursor-not-allowed italic' 
                          : 'border-transparent hover:border-[#D4AF37] hover:bg-[#fdfaf5] text-[#1a1a1a] font-medium'
                        }
                        ${isSelected ? 'bg-[#1a1a1a] text-white border-[#1a1a1a] hover:bg-[#1a1a1a]' : ''}
                      `}
                    >
                      <span className={isBooked ? 'line-through opacity-50' : ''}>{day}</span>
                    </button>
                  );
                })}
              </div>
              <button className={`mt-10 w-full py-5 text-[10px] font-bold uppercase tracking-widest transition-all
                ${selectedDate ? 'bg-[#1a1a1a] text-white shadow-xl' : 'bg-[#eceae2] text-[#8c8a82] cursor-not-allowed'}`}>
                {selectedDate ? `Confirm Deployment: Jan ${selectedDate}` : 'Select an available date'}
              </button>
            </div>
          </div>
        </div>

        {/* --- PULSE: TOP COMMENTS --- */}
        <section className="py-20 border-t border-[#eceae2]">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
            <h2 className="text-4xl md:text-6xl font-serif italic">The_Pulse</h2>
            <p className="text-[#8c8a82] text-[10px] uppercase tracking-widest max-w-[200px]">Network intel from property architects.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="p-10 bg-white border border-[#eceae2] relative group">
                <Quote className="absolute top-6 right-6 text-[#fdfaf5]" size={40} />
                <p className="text-sm font-light leading-relaxed mb-8 text-[#5a5852] italic">"The protocol was followed to the letter. Turnover logs were submitted via GPS with zero discrepancy."</p>
                <p className="text-[10px] font-bold uppercase tracking-widest">Property Admin {i}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- AUDIT: RATE & COMMENT --- */}
        <section className="bg-[#1a1a1a] text-[#FAF9F6] p-10 md:p-20 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4AF37]">Operational Feedback</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-12">Submit Audit <span className="italic text-white/40">Report.</span></h2>
            
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} type="button" 
                    onMouseEnter={() => setHoverRating(star)} 
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setUserRating(star)}>
                    <Star size={32} className={`transition-all ${(hoverRating || userRating) >= star ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-white/10'}`} />
                  </button>
                ))}
              </div>
              <textarea 
                placeholder="LOG INTEL REGARDING DEPLOYMENT..."
                className="w-full bg-transparent border-b border-white/10 py-4 text-xs font-light tracking-widest focus:outline-none focus:border-[#D4AF37] transition-colors placeholder-white/20"
              />
              <button className="bg-[#D4AF37] text-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">
                Submit Intel
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HouseKeeperDetails;