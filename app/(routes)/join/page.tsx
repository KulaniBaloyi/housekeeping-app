"use client";
import React, { useState } from 'react';
import { ShieldCheck, Fingerprint, MapPin, Camera, Zap, ArrowRight, UserPlus } from 'lucide-react';

const JoinPage = () => {
  const [role, setRole] = useState('cleaner');

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a] pt-32 pb-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-[#b16642]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#b16642]">Onboarding_v1.0</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            Join the <span className="italic text-[#8c8a82]">Network.</span>
          </h1>
          <p className="text-xs uppercase tracking-[0.2em] text-[#5a5852] max-w-xl leading-relaxed">
            Apply to become a verified Logistics Operator. We specialize in high-precision turnovers for elite portfolios in Gauteng and the Western Cape.
          </p>
        </div>

        {/* JOIN FORM */}
        <div className="bg-white border border-[#eceae2] p-8 md:p-16 shadow-sm">
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            
            {/* PERSONAL INTEL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#8c8a82]">Full Legal Name</label>
                <input type="text" placeholder="SARAH MTHEMBU" className="w-full bg-transparent border-b border-[#eceae2] py-3 text-sm focus:outline-none focus:border-[#b16642] transition-colors" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#8c8a82]">Primary Contact (WhatsApp Required)</label>
                <input type="tel" placeholder="+27 00 000 0000" className="w-full bg-transparent border-b border-[#eceae2] py-3 text-sm focus:outline-none focus:border-[#b16642] transition-colors" />
              </div>
            </div>

            {/* LOGISTICS SPECIFIC FIELDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#8c8a82]">Primary Operating Region</label>
                <select className="w-full bg-transparent border-b border-[#eceae2] py-3 text-sm focus:outline-none focus:border-[#b16642] appearance-none cursor-pointer">
                  <option>SANDTON / GAUTENG</option>
                  <option>ATLANTIC SEABOARD / WC</option>
                  <option>CITY BOWL / WC</option>
                </select>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#8c8a82]">Smartphone OS (For App Sync)</label>
                <div className="flex gap-6 py-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-medium uppercase tracking-tighter">
                    <input type="radio" name="os" className="accent-[#b16642]" /> Android
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-medium uppercase tracking-tighter">
                    <input type="radio" name="os" className="accent-[#b16642]" /> iOS
                  </label>
                </div>
              </div>
            </div>

            {/* PROTOCOL ACKNOWLEDGEMENT */}
            <div className="bg-[#fdfaf5] p-8 space-y-6 border border-[#f2f0e8]">
              <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                <Fingerprint size={16} className="text-[#b16642]" /> 
                System_Requirements_Checklist [cite: 11]
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: <MapPin size={12}/>, text: "Enable GPS Location Stamps [cite: 14]" },
                  { icon: <Camera size={12}/>, text: "High-Res Photo/Video Logs [cite: 16]" },
                  { icon: <Zap size={12}/>, text: "Real-time Inventory Updates [cite: 22]" },
                  { icon: <ShieldCheck size={12}/>, text: "Protocol Accountability [cite: 48]" }
                ].map((req, i) => (
                  <div key={i} className="flex items-center gap-3 text-[10px] text-[#5a5852] uppercase tracking-widest">
                    <span className="text-[#b16642]">{req.icon}</span>
                    {req.text}
                  </div>
                ))}
              </div>
            </div>

            {/* SUBMIT */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
              <div className="max-w-[300px]">
                <p className="text-[9px] text-[#8c8a82] leading-relaxed uppercase tracking-widest italic">
                  * Disclosure: By joining, you consent to GPS tracking during active cleaning sessions to ensure property security and verify "Guest-Ready" status[cite: 37, 39].
                </p>
              </div>
              <button className="w-full md:w-auto flex items-center justify-center gap-4 bg-[#1f1d1b] text-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#b16642] transition-all group shadow-xl">
                Submit Application
                <UserPlus size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>

        {/* SMALL FUN DISCLOSURE */}
        <div className="mt-12 text-center">
          <p className="text-[8px] text-[#8c8a82] uppercase tracking-[0.5em] opacity-40 hover:opacity-100 transition-opacity cursor-default">
            Architect Protocol v2.0 // Managed by Julian Vance Legacy Group [cite: 50, 51]
          </p>
        </div>

      </div>
    </main>
  );
};

export default JoinPage;