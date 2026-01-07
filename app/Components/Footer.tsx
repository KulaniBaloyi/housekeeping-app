import React from 'react';
import Link from 'next/link';

const Footer = () => {

  
  const linkStyles = "text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-300";
  const headerStyles = "text-[11px] font-bold uppercase tracking-[0.4em] text-white mb-8";

  return (
    <footer className="bg-[#1a1a1a] text-white pt-24 pb-12 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION: Branding & Directories */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* BRAND BLOCK */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-white/20" />
              <span className="font-serif italic text-xl tracking-tighter">The_Architect</span>
            </div>
            <p className="text-[#8c8a82] text-xs uppercase leading-relaxed tracking-wide max-w-sm mb-8">
              Redefining property logistics through meticulous accountability and 
              elite hospitality protocols. Established 2026.
            </p>
            <div className="flex gap-4">
               {/* Minimalist Social Indicators */}
               <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-white/40 transition-colors cursor-pointer text-[10px]">IG</div>
               <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-white/40 transition-colors cursor-pointer text-[10px]">LI</div>
               <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-white/40 transition-colors cursor-pointer text-[10px]">TW</div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-3">
            <h4 className={headerStyles}>Directory</h4>
            <ul className="space-y-4">
              <li><Link href="/projects" className={linkStyles}>The_Archives</Link></li>
              <li><Link href="/services" className={linkStyles}>Operational_Scope</Link></li>
              <li><Link href="/portfolio" className={linkStyles}>Case_Studies</Link></li>
              <li><Link href="/contact" className={linkStyles}>Inquiry_Node</Link></li>
            </ul>
          </div>

          {/* CONTACT/OFFICE */}
          <div className="md:col-span-4">
            <h4 className={headerStyles}>Operational_Hub</h4>
            <address className="not-italic space-y-4">
              <p className={linkStyles}>1200 Avenue of the Americas<br />New York, NY 10036</p>
              <p className={linkStyles}>Logistics@TheArchitect.com</p>
              <p className="text-white text-[10px] tracking-[0.2em]">+1 (212) 555-0198</p>
            </address>
          </div>
        </div>

        {/* BOTTOM STRIP: System Stats & Legal */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">
              System_Status: <span className="text-emerald-500/60 ml-1">Optimal</span>
            </span>
            <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">
              Latency: <span className="text-white/40 ml-1">12ms</span>
            </span>
          </div>

          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-[9px] text-white/20 hover:text-white uppercase tracking-widest">Privacy_Protocol</Link>
            <span className="text-[9px] text-white/20 uppercase tracking-widest">
              © 2026 The_Architect // All_Rights_Reserved
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;