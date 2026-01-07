"use client";
import Link from 'next/link';
import Image from 'next/image';

export const ServicesOffered = () => {
  const serviceList = [
    { 
      id: '01', 
      title: "Meticulous Turnover", 
      tag: "Operations",
      desc: "Room-by-room reporting with photo verification for perfect guest arrivals.",
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
    },
    { 
      id: '02', 
      title: "GPS Verification", 
      tag: "Accountability",
      desc: "Location-stamped sign-ins ensuring staff are on-site and on-time.",
      img: "https://images.unsplash.com/photo-1508197149814-0cc02e8b7f44?q=80&w=1974&auto=format&fit=crop" 
    },
    { 
      id: '03', 
      title: "Incident Reporting", 
      tag: "Maintenance",
      desc: "Instant flagging of damages or maintenance with direct media uploads.",
      img: "https://images.unsplash.com/photo-1581578731548-c64695cc6958?q=80&w=2070&auto=format&fit=crop" 
    },
    { 
      id: '04', 
      title: "Inventory Flow", 
      tag: "Logistics",
      desc: "Real-time tracking of consumables and automated low-stock alerts.",
      img: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop" 
    },
    { 
      id: '05', 
      title: "Admin Dashboard", 
      tag: "Management",
      desc: "Centralized visibility of all property statuses and cleaner performance.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
    },
  ];

  const scrollingList = [...serviceList, ...serviceList];

  return (
    <section className="py-32 bg-white border-t border-[#eceae2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-20 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-orange-600">Operational Excellence</span>
            <h2 className="text-5xl md:text-7xl font-serif mt-4 text-[#1a1a1a]">SERVICES</h2>
          </div>
          <p className="text-[#5a5852] text-xs uppercase tracking-widest max-w-[280px] leading-relaxed italic">
            A comprehensive suite of tools designed to bring accountability to property management.
          </p>
        </div>
      </div>

      {/* INFINITE SCROLL CONTAINER */}
      <div className="relative flex overflow-hidden">
        {/* Fixed: min-w-max prevents cards from shrinking to fit screen */}
        <div className="flex animate-infinite-scroll whitespace-nowrap min-w-max hover:[animation-play-state:paused]">
          {scrollingList.map((service, index) => (
            <div 
              key={`${service.id}-${index}`} 
              className="w-[350px] md:w-[450px] px-6 group cursor-pointer whitespace-normal"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f2f0e8] mb-8 shadow-sm">
                <Image 
                  src={service.img} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 text-white text-[9px] font-bold uppercase tracking-[0.2em] bg-black/40 backdrop-blur-md px-4 py-2">
                  {service.tag}
                </div>
              </div>
              
              <div className="px-2">
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#1a1a1a] mb-3 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-[11px] text-[#8c8a82] leading-relaxed tracking-wide uppercase mb-6 line-clamp-2">
                  {service.desc}
                </p>
                <div className="w-8 group-hover:w-full h-[1px] bg-orange-600 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM PROGRESS INDICATOR */}
      <div className="mt-20 mx-auto max-w-xs h-[2px] bg-[#eceae2] relative overflow-hidden">
          {/* Use a simple Tailwind pulse if you don't have the custom progress keyframe yet */}
          <div className="absolute inset-0 bg-orange-500 w-1/3 animate-pulse" />
      </div>
    </section>
  );
};

/**
 * 2. ACCOUNTABILITY PHILOSOPHY
 * Focus: Real-time visibility and communication[cite: 8, 31].
 */
export const AccountabilityPhilosophy = () => {
  return (
    <section className="py-32 bg-[#1a1a1a] text-white overflow-hidden relative border-y border-white/5">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange-200/60">Our Philosophy</span>
          <h2 className="text-5xl md:text-6xl font-serif mt-8 mb-12 leading-tight">
            The Clarity of <br/>
            <span className="italic text-orange-200/80">Real-Time Insight.</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <p className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-4 border-b border-white/10 pb-2">GPS Verification</p>
              <p className="text-[11px] text-[#8c8a82] leading-relaxed tracking-wide uppercase font-light">
                Location-stamped sign-ins ensure your team is exactly where they need to be[cite: 14, 69].
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-4 border-b border-white/10 pb-2">Unified Messaging</p>
              <p className="text-[11px] text-[#8c8a82] leading-relaxed tracking-wide uppercase font-light">
                Integrated chat and WhatsApp tools bridge the gap between management and staff instantly[cite: 32, 33].
              </p>
            </div>
          </div>
        </div>

        <div className="relative aspect-square border border-white/5 flex items-center justify-center group overflow-hidden bg-white/5">
           <Image 
             src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1974&auto=format&fit=crop"
             alt="Professional service staff"
             fill
             className="object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-1000"
           />
           <div className="relative z-10 text-center">
              <div className="text-[8vw] font-serif italic text-white/10 select-none tracking-tighter">
                Visibility
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

/**
 * 3. THE FINAL CALL (Spruced up with Patterns & Animations)
 */
export const FinalInquiry = () => {
  return (
    <section className="py-48 bg-[#FAF9F6] text-center relative overflow-hidden border-t border-[#eceae2]">
      
      {/* Absolute Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-200/20 blur-[120px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute top-20 left-10 w-32 h-32 border-l border-t border-orange-200/40 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-r border-b border-orange-200/40 pointer-events-none" />
      
      <div className="absolute top-1/4 right-[15%] hidden md:block">
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i} 
              className="w-1.5 h-1.5 rounded-full bg-orange-400/30 animate-bounce" 
              style={{ animationDelay: `${i * 0.2}s` }} 
            />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#8c8a82] block mb-8">
          The Future of Property Care
        </span>
        
        <h2 className="text-6xl md:text-8xl font-serif mb-16 tracking-tighter text-[#1a1a1a]">
          Elevate Your <br/>
          <span className="italic relative inline-block text-[#8c8a82] group">
            Standard.
            <span className="absolute bottom-2 left-0 w-0 h-[2px] bg-orange-300 transition-all duration-1000 group-hover:w-full" />
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
           <div className="group">
             <Link href="/signup" className="text-[10px] font-bold uppercase tracking-[0.4em] border-b border-[#1a1a1a] pb-4 block hover:text-orange-600 hover:border-orange-600 transition-all duration-500">
               Register Property
             </Link>
             <p className="text-[8px] uppercase tracking-widest text-[#8c8a82] mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
               Owner & Admin Hub [cite: 58]
             </p>
           </div>

           <div className="group">
             <Link href="/apply" className="text-[10px] font-bold uppercase tracking-[0.4em] border-b border-[#1a1a1a] pb-4 block hover:text-orange-600 hover:border-orange-600 transition-all duration-500">
               Apply to Work
             </Link>
             <p className="text-[8px] uppercase tracking-widest text-[#8c8a82] mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
               Join the Professionals [cite: 56]
             </p>
           </div>

           <div className="group">
             <Link href="/login" className="text-[10px] font-bold uppercase tracking-[0.4em] border-b border-[#1a1a1a] pb-4 block hover:text-orange-600 hover:border-orange-600 transition-all duration-500">
               Operator Login
             </Link>
             <p className="text-[8px] uppercase tracking-widest text-[#8c8a82] mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
               System Access [cite: 13]
             </p>
           </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-20">
         <div className="w-8 h-[1px] bg-[#1a1a1a]" />
         <span className="text-[8px] font-bold tracking-[1em] uppercase">Gauteng // Western Cape [cite: 3]</span>
         <div className="w-8 h-[1px] bg-[#1a1a1a]" />
      </div>
    </section>
  );
};

export default function HousekeepingExpansion() {
  return (
    <>
      <ServicesOffered />
      <AccountabilityPhilosophy />
      <FinalInquiry />
    </>
  );
}