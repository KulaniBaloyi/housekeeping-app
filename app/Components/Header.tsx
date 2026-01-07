"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemClasses = "text-[9px] font-bold uppercase tracking-[0.25em] text-white/50 hover:text-white transition-all duration-300";

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-700 flex items-center
        ${isScrolled 
          ? 'bg-[#1a1a1a]/95 backdrop-blur-xl h-16 border-b border-white/5 shadow-2xl' 
          : 'bg-[#1a1a1a] h-20'}
      `}
    >
      <nav className="max-w-7xl mx-auto w-full px-6 md:px-20 flex justify-between items-center">
        
        {/* MOBILE BARS (HINT ONLY) */}
        <button 
          className="flex md:hidden flex-col gap-1.5 p-2 group"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-[1px] bg-white group-hover:w-4 transition-all" />
          <div className="w-4 h-[1px] bg-white group-hover:w-6 transition-all" />
        </button>

        {/* LEFT: Operations & Network */}
        <div className="hidden md:flex items-center gap-12">
           <div className="group relative">
              <span className={navItemClasses + " cursor-default flex items-center gap-2 group-hover:text-white"}>
                Services <span className="text-[7px] opacity-30">▼</span>
              </span>
              {/* DROPDOWN HINT */}
              <div className="absolute top-full -left-4 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                <ul className="bg-[#1a1a1a] border border-white/5 p-6 w-56 space-y-4 shadow-2xl">
                  <li><Link href="/services" className={navItemClasses}>Services</Link></li>
                  <li><Link href="/protocol" className={navItemClasses}>The_Protocol</Link></li>
                  <li><Link href="/apply" className="text-[9px] font-bold uppercase tracking-[0.25em] text-emerald-400 hover:text-white transition-colors">Join_As_Worker</Link></li>
                </ul>
              </div>
           </div>
           <Link href="/about" className={navItemClasses}>About Us</Link>
           <Link href="/join" className={navItemClasses}>Join</Link>
        </div>

        {/* CENTER: Logo (Responsive behavior) */}
        <div className="flex flex-col items-center group cursor-pointer absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="text-sm md:text-base font-serif italic tracking-tighter text-white">House Keeping Website</Link>
          <div className={`h-[px] bg-white/20 transition-all duration-500 ${isScrolled ? 'w-4' : 'w-12'}`} />
        </div>

        {/* RIGHT: Access & Auth */}
        <div className="flex items-center gap-6 md:gap-10">
          <ul className="hidden xl:flex items-center gap-10 border-r border-white/10 pr-10 mr-2">
            <li><Link href="/login" className={navItemClasses}>Log In</Link></li>
            <li><Link href="/signup" className={navItemClasses}>Sign Up</Link></li>
          </ul>
          
          <Link href="/consultation" className="bg-orange-600 text-black px-5 md:px-8 py-2.5 text-[9px] font-black uppercase tracking-[0.2em] hover:bg-[#8c8a82] hover:text-white transition-all shadow-lg whitespace-nowrap">
            Get A Consultation
          </Link>
        </div>
      </nav>

      {/* MOBILE OVERLAY (Simple placeholder logic) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#1a1a1a] z-[60] p-10 flex flex-col justify-between">
           <button onClick={() => setMobileMenuOpen(false)} className="self-end text-white text-[10px] tracking-widest font-bold">CLOSE_</button>
           <ul className="space-y-8">
              <li><Link href="/services" className="text-3xl font-serif italic text-white" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
              <li><Link href="/apply" className="text-3xl font-serif italic text-white" onClick={() => setMobileMenuOpen(false)}>Apply</Link></li>
              <li><Link href="/about" className="text-3xl font-serif italic text-white" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
              <li><Link href="/login" className="text-3xl font-serif italic text-white" onClick={() => setMobileMenuOpen(false)}>Login</Link></li>
           </ul>
           <p className="text-[8px] tracking-[0.5em] text-white/20 uppercase">The_Architect // System_v1.0</p>
        </div>
      )}
    </header>
  );
};

export default Header;