"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  UserPlus, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  MapPin,
  Mail,
  Lock
} from 'lucide-react';

const SignUpPage = () => {
  const [role, setRole] = useState<'owner' | 'specialist'>('owner');

  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#b16642]">
            Identity_Initialization
          </span>
          <h1 className="text-5xl md:text-7xl font-serif">
            Join the <span className="italic text-[#8c8a82]">Collective.</span>
          </h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#5a5852] max-w-md mx-auto leading-relaxed">
            Select your professional capacity to begin the vetting and integration process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: ROLE SELECTION & INFO */}
          <div className="lg:col-span-5 space-y-6">
            <div 
              onClick={() => setRole('owner')}
              className={`p-8 border transition-all cursor-pointer group ${
                role === 'owner' ? 'bg-[#1f1d1b] text-white border-[#1f1d1b]' : 'bg-white border-[#eceae2] hover:border-[#b16642]/40'
              }`}
            >
              <Building2 className={`mb-6 ${role === 'owner' ? 'text-[#b16642]' : 'text-[#8c8a82]'}`} size={28} />
              <h3 className="text-xl font-serif mb-2">Property Owner / Manager</h3>
              <p className="text-[10px] uppercase tracking-widest leading-relaxed opacity-60 font-light">
                Request access to manage portfolios, track live deployments, and audit luxury turnovers.
              </p>
            </div>

            <div 
              onClick={() => setRole('specialist')}
              className={`p-8 border transition-all cursor-pointer group ${
                role === 'specialist' ? 'bg-[#1f1d1b] text-white border-[#1f1d1b]' : 'bg-white border-[#eceae2] hover:border-[#b16642]/40'
              }`}
            >
              <UserPlus className={`mb-6 ${role === 'specialist' ? 'text-[#b16642]' : 'text-[#8c8a82]'}`} size={28} />
              <h3 className="text-xl font-serif mb-2">Logistics Specialist</h3>
              <p className="text-[10px] uppercase tracking-widest leading-relaxed opacity-60 font-light">
                Apply to join the vetted elite team. Requires background clearance and protocol certification.
              </p>
            </div>

            {/* TRUST MARK */}
            <div className="pt-8 flex items-center gap-4 border-t border-[#eceae2]">
              <ShieldCheck className="text-[#b16642]" size={20} />
              <p className="text-[9px] uppercase tracking-widest text-[#8c8a82] leading-tight">
                All applicants undergo a <br /> mandatory 48-hour visual audit review.
              </p>
            </div>
          </div>

          {/* RIGHT: REGISTRATION FORM */}
          <div className="lg:col-span-7 bg-white border border-[#eceae2] p-8 md:p-16 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#fdfaf5] -mr-16 -mt-16 rounded-full" />
            
            <form className="relative z-10 space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-[#8c8a82]">Full Name</label>
                  <div className="relative">
                    <input type="text" placeholder="LEAD NAME" className="w-full bg-transparent border-b border-[#eceae2] py-3 text-xs focus:outline-none focus:border-[#b16642] transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-[#8c8a82]">Primary Region</label>
                  <select className="w-full bg-transparent border-b border-[#eceae2] py-3 text-xs uppercase tracking-widest focus:outline-none focus:border-[#b16642] appearance-none cursor-pointer">
                    <option>SANDTON (GP)</option>
                    <option>CAPE TOWN (WC)</option>
                    <option>PRETORIA (GP)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-widest text-[#8c8a82]">Communication Channel (Email)</label>
                <div className="relative">
                  <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-[#eceae2]" size={14} />
                  <input type="email" placeholder="OFFICE@LEGACY-GROUP.ZA" className="w-full bg-transparent border-b border-[#eceae2] py-3 pl-6 text-xs focus:outline-none focus:border-[#b16642] transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-bold uppercase tracking-widest text-[#8c8a82]">Establish Security Key</label>
                <div className="relative">
                  <Lock className="absolute left-0 top-1/2 -translate-y-1/2 text-[#eceae2]" size={14} />
                  <input type="password" placeholder="••••••••••••" className="w-full bg-transparent border-b border-[#eceae2] py-3 pl-6 text-xs focus:outline-none focus:border-[#b16642] transition-colors" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 size={14} className="text-[#b16642]" />
                  </div>
                  <p className="text-[9px] text-[#8c8a82] leading-relaxed uppercase tracking-widest">
                    I acknowledge that the "Architect" protocol requires real-time data synchronization and GPS verification during turnover sessions.
                  </p>
                </div>
              </div>

              <button className="w-full bg-[#1f1d1b] text-white py-6 flex items-center justify-center gap-4 group hover:bg-[#b16642] transition-all">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Initialize Account</span>
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>

              <p className="text-center text-[10px] uppercase tracking-widest text-[#8c8a82]">
                Already Registered? <Link href="/login" className="text-[#b16642] font-bold hover:underline ml-2">Secure Entry</Link>
              </p>
            </form>
          </div>
        </div>

        {/* SMALL DISCLOSURE */}
        <div className="mt-20 text-center opacity-30">
          <p className="text-[8px] uppercase tracking-[0.5em] text-[#8c8a82]">
            Identity Protocol v4.0 // Legacy Logistics Group
          </p>
        </div>

      </div>
    </main>
  );
};

export default SignUpPage;