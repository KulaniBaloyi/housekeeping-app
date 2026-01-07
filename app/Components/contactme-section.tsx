"use client";
import React from 'react';
import { Mail, Phone, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

/**
 * CONTACT ME SECTION
 * Theme: Deep Slate-Earth (#2d312d) 
 * Highlight: Sage & Gold accents
 */
const ContactMeSection = () => {
  return (
    <section className="relative py-32 px-6 md:px-20 bg-[#2d312d] overflow-hidden">
      
      {/* --- ARCHITECTURAL SPRUCE --- */}
      {/* Subtle Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200/20 to-transparent" />
      
      {/* Animated Floating Glows - More subtle and moody */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-emerald-900/20 filter blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-900/10 filter blur-[120px]" />

      {/* Modern SVG Line Pattern */}
      <svg className="absolute top-0 right-0 opacity-10" width="400" height="400" viewBox="0 0 400 400" fill="none">
        <path d="M0 400L400 0" stroke="white" strokeWidth="0.5" />
        <path d="M100 400L400 100" stroke="white" strokeWidth="0.5" />
        <path d="M200 400L400 200" stroke="white" strokeWidth="0.5" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Context & High-End Terminology */}
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-200/80">
                Secure Operational Intake
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif text-[#FAF9F6] leading-tight mb-8">
              Establish Your <br />
              <span className="italic text-emerald-100/40">Protocol.</span>
            </h2>
            
            <p className="text-[#8c8a82] font-light leading-relaxed mb-12 max-w-sm text-sm uppercase tracking-wide">
              Streamline your property logistics across South Africa’s premier estates. We bridge the gap between management and turnover.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="group cursor-pointer">
                <p className="text-[8px] font-bold uppercase tracking-widest text-emerald-400 mb-2">Direct Channel</p>
                <p className="text-sm font-medium text-[#FAF9F6] border-b border-white/10 pb-4 group-hover:border-emerald-400 transition-all">
                  hello@architect.io
                </p>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[8px] font-bold uppercase tracking-widest text-emerald-400 mb-2">WhatsApp Bridge</p>
                <p className="text-sm font-medium text-[#FAF9F6] border-b border-white/10 pb-4 group-hover:border-emerald-400 transition-all">
                  +27 (0) 21 000 0000
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The "Cute but Professional" Form */}
          <div className="relative">
            {/* Geometric Spruce */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-t border-r border-emerald-400/30 hidden md:block" />
            
            <div className="bg-[#FAF9F6] p-8 md:p-14 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative z-10">
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-6">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="FULL NAME"
                      className="w-full bg-transparent border-b border-[#2d312d]/10 py-3 text-[10px] font-bold tracking-widest uppercase focus:outline-none focus:border-emerald-600 transition-colors placeholder-[#2d312d]/30"
                    />
                  </div>
                  
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="WORK EMAIL"
                      className="w-full bg-transparent border-b border-[#2d312d]/10 py-3 text-[10px] font-bold tracking-widest uppercase focus:outline-none focus:border-emerald-600 transition-colors placeholder-[#2d312d]/30"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="relative">
                      <p className="text-[7px] font-bold text-[#2d312d]/40 mb-2 uppercase tracking-tighter">Region</p>
                      <select className="w-full bg-transparent border-b border-[#2d312d]/10 py-2 text-[10px] font-bold tracking-widest uppercase focus:outline-none">
                        <option>Gauteng</option>
                        <option>Western Cape</option>
                      </select>
                    </div>
                    <div className="relative">
                      <p className="text-[7px] font-bold text-[#2d312d]/40 mb-2 uppercase tracking-tighter">Role</p>
                      <select className="w-full bg-transparent border-b border-[#2d312d]/10 py-2 text-[10px] font-bold tracking-widest uppercase focus:outline-none">
                        <option>Owner</option>
                        <option>Worker</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#2d312d] text-white py-6 text-[10px] font-bold uppercase tracking-[0.4em] flex items-center justify-center gap-4 group hover:bg-emerald-800 transition-all duration-500 overflow-hidden relative">
                  <span className="relative z-10">Initiate Protocol</span>
                  <ArrowRight size={14} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                  {/* Subtle hover fill effect */}
                  <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </form>
            </div>

            {/* Subtle "floating" label for form */}
            <div className="absolute -bottom-6 right-0 text-[8px] font-bold uppercase tracking-[0.5em] text-white/20 italic">
              Form_System_v1.0
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactMeSection;