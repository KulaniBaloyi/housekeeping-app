"use client";
import React, { useState } from 'react';
import { 
  ArrowRight, 
  Layers, 
  Calendar, 
  Globe, 
  BarChart3, 
  CheckCircle2,
  Clock
} from 'lucide-react';

const ConsultationPage = () => {
  const [activeTier, setActiveTier] = useState('boutique');

  const tiers = [
    {
      id: 'boutique',
      name: 'Boutique Portfolio',
      units: '1-5 Units',
      desc: 'Optimization of individual luxury rentals with protocol integration.',
      icon: <Layers size={20} />
    },
    {
      id: 'estate',
      name: 'Estate Management',
      units: '5-20 Units',
      desc: 'Full-scale logistics for property groups and small hotel portfolios.',
      icon: <Globe size={20} />
    },
    {
      id: 'enterprise',
      name: 'Institutional Asset',
      units: '20+ Units',
      desc: 'Custom API integration and dedicated regional logistics leads.',
      icon: <BarChart3 size={20} />
    }
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a] pt-32 pb-20 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* LEFT COLUMN: THE OFFERING */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-[#b16642]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#b16642]">Strategy_Session</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Engineer Your <br />
              <span className="italic text-[#8c8a82]">Operations.</span>
            </h1>
            <p className="text-sm uppercase tracking-widest text-[#5a5852] leading-relaxed max-w-md">
              A private consultation to map your property portfolio onto the Architect logistics framework. 
            </p>
          </div>

          <div className="space-y-4">
            {tiers.map((tier) => (
              <div 
                key={tier.id}
                onClick={() => setActiveTier(tier.id)}
                className={`p-8 border transition-all cursor-pointer group ${
                  activeTier === tier.id 
                  ? 'border-[#b16642] bg-white shadow-xl translate-x-2' 
                  : 'border-[#eceae2] hover:border-[#b16642]/40'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-full transition-colors ${
                    activeTier === tier.id ? 'bg-[#b16642] text-white' : 'bg-[#fdfaf5] text-[#b16642]'
                  }`}>
                    {tier.icon}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#8c8a82]">
                    {tier.units}
                  </span>
                </div>
                <h3 className="text-lg font-serif mb-2">{tier.name}</h3>
                <p className="text-xs text-[#8c8a82] leading-relaxed font-light italic">
                  "{tier.desc}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: THE INTAKE FORM */}
        <div className="lg:col-span-7">
          <div className="bg-[#1f1d1b] text-white p-10 md:p-16 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#b16642] opacity-5 -mr-32 -mt-32 rounded-full" />
            
            <div className="relative z-10 space-y-12">
              <div className="flex items-center gap-6 pb-8 border-b border-white/10">
                <Clock className="text-[#b16642]" size={24} />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em]">45-Minute Discovery</h4>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Gauteng & WC Regional Focus</p>
                </div>
              </div>

              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Portfolio Lead</label>
                    <input type="text" placeholder="NAME" className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:outline-none focus:border-[#b16642] transition-colors placeholder:text-white/10" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Primary Asset Location</label>
                    <input type="text" placeholder="SANDTON / CAMPS BAY" className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:outline-none focus:border-[#b16642] transition-colors placeholder:text-white/10" />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Operational Pain Point</label>
                  <select className="w-full bg-transparent border-b border-white/10 py-3 text-xs uppercase tracking-widest focus:outline-none focus:border-[#b16642] appearance-none cursor-pointer">
                    <option className="bg-[#1f1d1b]">Accountability & GPS Tracking</option>
                    <option className="bg-[#1f1d1b]">Stock & Inventory Leakage</option>
                    <option className="bg-[#1f1d1b]">Turnover Speed / Quality</option>
                    <option className="bg-[#1f1d1b]">Full Protocol Implementation</option>
                  </select>
                </div>

                <div className="space-y-6 pt-6">
                    <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/5">
                        <CheckCircle2 size={16} className="text-[#b16642] mt-0.5" />
                        <p className="text-[9px] uppercase tracking-widest leading-relaxed text-white/60">
                            By requesting a session, you agree to provide an operational walkthrough of your current asset management flow.
                        </p>
                    </div>
                </div>

                <button className="w-full flex items-center justify-center gap-4 bg-[#b16642] text-white py-6 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-[#1f1d1b] transition-all group">
                  Secure Consultation Slot
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>

              <div className="pt-8 text-center border-t border-white/5">
                <p className="text-[8px] text-white/20 uppercase tracking-[0.5em]">
                  Julian Vance Legacy Group // Senior Architect Review
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default ConsultationPage;