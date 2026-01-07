"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Fingerprint, Key, ArrowRight, UserCircle } from 'lucide-react';

const LoginPage = () => {
  const [userType, setUserType] = useState<'manager' | 'specialist'>('manager');

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-[#FAF9F6]">
      
      {/* LEFT SIDE: BRANDING & IDENTITY (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:col-span-7 bg-[#1f1d1b] relative overflow-hidden items-center justify-center p-20">
        {/* Background Graphic Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-[10%] left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#b16642] to-transparent" />
          <div className="absolute bottom-[10%] left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#b16642] to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#b16642] mb-8 block">
            Secure_Access_Portal
          </span>
          <h1 className="text-7xl font-serif text-white leading-tight mb-8">
            Manage Your <br />
            <span className="italic text-stone-500">Legacy.</span>
          </h1>
          <p className="text-stone-400 text-sm uppercase tracking-widest leading-relaxed font-light">
            Access the Architect logistics engine to monitor real-time deployments across Gauteng and the Western Cape portfolios.
          </p>
          
          <div className="mt-20 flex gap-12">
            <div>
              <p className="text-2xl font-serif text-white">200+</p>
              <p className="text-[8px] font-bold uppercase tracking-widest text-[#b16642] mt-1">Verified Nodes</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-white">99.8%</p>
              <p className="text-[8px] font-bold uppercase tracking-widest text-[#b16642] mt-1">Audit Accuracy</p>
            </div>
          </div>
        </div>

        {/* Decorative Watermark */}
        <div className="absolute bottom-10 left-10 text-[10vw] font-serif italic text-white/5 select-none pointer-events-none">
          Architect
        </div>
      </div>

      {/* RIGHT SIDE: LOGIN FORM */}
      <div className="lg:col-span-5 flex flex-col justify-center p-8 md:p-20 lg:p-24 bg-white">
        <div className="max-w-md mx-auto w-full">
          
          {/* USER TYPE TOGGLE */}
          <div className="flex bg-[#fdfaf5] p-1 mb-12 border border-[#eceae2]">
            <button 
              onClick={() => setUserType('manager')}
              className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest transition-all ${
                userType === 'manager' ? 'bg-[#1f1d1b] text-white shadow-lg' : 'text-[#8c8a82]'
              }`}
            >
              Management
            </button>
            <button 
              onClick={() => setUserType('specialist')}
              className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest transition-all ${
                userType === 'specialist' ? 'bg-[#1f1d1b] text-white shadow-lg' : 'text-[#8c8a82]'
              }`}
            >
              Specialist
            </button>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-serif mb-2">Portal Entry</h2>
            <p className="text-[10px] uppercase tracking-widest text-[#8c8a82]">
              Provide your encrypted credentials below.
            </p>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[9px] font-bold uppercase tracking-widest text-[#b16642] block">Identification (Email)</label>
              <div className="relative">
                <UserCircle className="absolute left-0 top-1/2 -translate-y-1/2 text-[#eceae2]" size={18} />
                <input 
                  type="email" 
                  placeholder="admin@legacy-group.co.za" 
                  className="w-full bg-transparent border-b border-[#eceae2] py-4 pl-8 text-sm focus:outline-none focus:border-[#b16642] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-bold uppercase tracking-widest text-[#b16642] block">Security Key</label>
              <div className="relative">
                <Key className="absolute left-0 top-1/2 -translate-y-1/2 text-[#eceae2]" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-transparent border-b border-[#eceae2] py-4 pl-8 text-sm focus:outline-none focus:border-[#b16642] transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-3 h-3 accent-[#1f1d1b]" />
                <span className="text-[10px] font-bold uppercase tracking-tighter text-[#8c8a82] group-hover:text-[#1f1d1b]">Keep Session Active</span>
              </label>
              <Link href="#" className="text-[10px] font-bold uppercase tracking-tighter text-[#b16642] hover:underline">
                Lost Key?
              </Link>
            </div>

            <button className="w-full bg-[#1f1d1b] text-white py-6 flex items-center justify-center gap-4 group hover:bg-[#b16642] transition-all shadow-xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Initialize Session</span>
              <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>

          {/* FOOTER DISCLOSURE */}
          <div className="mt-20 pt-8 border-t border-[#fdfaf5]">
            <div className="flex items-center gap-3 text-[#eceae2] mb-4">
              <Fingerprint size={16} />
              <ShieldCheck size={16} />
            </div>
            <p className="text-[9px] text-[#8c8a82] leading-relaxed uppercase tracking-widest italic">
              * Access restricted to verified personnel only. All login attempts are logged with GPS and IP coordinates.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;