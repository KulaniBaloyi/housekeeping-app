"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * 💡 ARCHITECTURAL NOTES:
 * To enable the infinite scroll, add this to your globals.css:
 * @keyframes scroll {
 * 0% { transform: translateX(0); }
 * 100% { transform: translateX(-50%); }
 * }
 * .animate-scroll {
 * animation: scroll 40s linear infinite;
 * }
 */

interface StatCardProps {
  label: string;
  value: string;
  description: string;
}

const StatCard = ({ label, value, description }: StatCardProps) => (
  <div className="bg-white p-10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-[#eceae2] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(251,146,60,0.1)] group relative overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50/50 rounded-full -mr-12 -mt-12 transition-transform duration-700 group-hover:scale-150" />
    <div className="relative z-10">
      <div className="text-[10px] font-bold text-[#8c8a82] uppercase tracking-[0.3em] mb-6 border-b border-[#eceae2] pb-2 group-hover:text-orange-600 group-hover:border-orange-200 transition-colors">
        {label}
      </div>
      <div className="text-5xl font-serif text-[#1a1a1a] mb-4 group-hover:text-orange-700 transition-colors">
        {value}
      </div>
      <p className="text-sm leading-relaxed text-[#5a5852] font-light italic">
        {description}
      </p>
    </div>
  </div>
);

const Landing = () => {
  const brands = [
    "Marriott Exec", "Ritz-Carlton", "Aman Resorts", "Four Seasons", 
    "Rosewood", "Belmond", "Mandarin Oriental", "Soneva", "St. Regis"
  ];
  const displayBrands = [...brands, ...brands];

  return (
    <main className="bg-[#FAF9F6] font-sans text-[#1a1a1a] selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-20 pt-32 pb-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 z-10">
            <div className="flex items-center gap-4 mb-10">
              <span className="w-12 h-[1px] bg-orange-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange-600">
                Boutique Hospitality Logistics
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif leading-[1] mb-8 tracking-tight">
              The Art of <br />
              <span className="italic text-[#8c8a82]">Flawless</span> Service.
            </h1>
            
            <p className="text-lg text-[#5a5852] max-w-md leading-relaxed mb-12 font-light">
              Elevate your property standards with verified check-ins and meticulous reporting[cite: 61, 62]. We turn accountability into an amenity[cite: 121].
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-[#1a1a1a] text-white px-12 py-6 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-orange-600 transition-all shadow-2xl">
                Start Your Inquiry
              </button>
              <button className="bg-transparent border border-[#1a1a1a]/20 px-12 py-6 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-orange-50 transition-all">
                The Philosophy
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden shadow-[30px_30px_0px_0px_#fdf7ed] border border-[#eceae2]">
              <Image
                src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury Interior" 
                fill
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-[2s]" 
              />
            </div>
            {/* Cute absolute pattern */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-r border-t border-orange-200 pointer-events-none hidden md:block" />
          </div>
        </div>
      </section>

      {/* 2. INFINITE LOGO SCROLL */}
      <section className="py-24 border-y border-[#eceae2] overflow-hidden bg-white/50 relative">
        <div className="animate-scroll flex items-center gap-24 whitespace-nowrap px-10">
          {displayBrands.map((brand, idx) => (
            <span key={idx} className="text-3xl md:text-4xl font-serif text-[#1a1a1a]/10 hover:text-orange-400 transition-all duration-500 cursor-default">
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* 3. OPERATIONAL SCOPE (Spruced with Life/Color) */}
      <section className="py-32 px-6 md:px-20 bg-[#1a1a1a] text-[#FAF9F6] relative overflow-hidden">
        {/* Warm glow pattern */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-orange-400">Our Services</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 tracking-tight mt-4 italic">Operational_Scope</h2>
            <div className="w-24 h-[1px] bg-orange-400" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {[
              { 
                title: "Turnover Protocol", 
                desc: "Rapid-response care for elite transitions[cite: 71].", 
                color: "bg-orange-500",
                img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1974&auto=format&fit=crop"
              },
              { 
                title: "Visual Audits", 
                desc: "Photo-documented status for total clarity[cite: 72].", 
                color: "bg-blue-400",
                img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1887&auto=format&fit=crop"
              },
              { 
                title: "Inventory Flow", 
                desc: "Tracking of luxury linens and amenities[cite: 80].", 
                color: "bg-emerald-400",
                img: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop"
              },
              { 
                title: "Incident Reports", 
                desc: "Instant flagging of maintenance or safety[cite: 75, 78].", 
                color: "bg-rose-400",
                img: "https://images.unsplash.com/photo-1581578731548-c64695cc6958?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((service, i) => (
              <div key={i} className="bg-[#1a1a1a] group relative h-[450px] overflow-hidden transition-all duration-700">
                <Image 
                  src={service.img}
                  fill
                  alt={service.title}
                  className="object-cover opacity-30 group-hover:opacity-60 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className={`w-8 h-8 ${service.color} mb-6 rounded-full group-hover:scale-125 transition-transform duration-500`} />
                  <h3 className="text-xl font-serif mb-4">{service.title}</h3>
                  <p className="text-xs text-[#8c8a82] leading-relaxed font-light uppercase tracking-widest translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE ELITE NETWORK */}
      <section className="relative overflow-hidden bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[600px] lg:h-auto overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=1887&auto=format&fit=crop"
              alt="Elite Staff"
              fill
              className="object-cover transition-all duration-1000 hover:scale-110"
            />
          </div>
          <div className="p-12 md:p-24 flex flex-col justify-center bg-[#fdfaf5] relative">
            <div className="absolute top-10 right-10 flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-orange-300 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 text-orange-600">The Professionals</span>
            <h2 className="text-5xl font-serif mb-8 leading-tight">Vetted Talent. <br/><span className="italic text-[#8c8a82]">Higher Standards.</span></h2>
            <p className="text-[#5a5852] font-light leading-relaxed mb-10 max-w-md">
              Our specialists are trained logistics operators[cite: 56, 57]. Each session is verified and backed by visual checklists[cite: 69, 73].
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3].map(i => <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative shadow-lg">
                  <Image src={`https://i.pravatar.cc/150?u=${i+10}`} fill alt="avatar" />
                </div>)}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Join 200+ Specialists</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. METRICS (Spruced with Patterns) */}
      <section className="py-32 px-6 md:px-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-100 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <StatCard value="85.4%" label="Accountability" description="Reduction in disputes through visual audits." />
            <StatCard value="15.0m" label="Efficiency" description="Time reclaimed per deployment via digital workflows[cite: 54]." />
            <StatCard value="2,400+" label="Portfolio" description="Elite properties currently managed in our system[cite: 124]." />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-[#eceae2] flex flex-col items-center bg-[#FAF9F6] relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-orange-100/50 rounded-full blur-3xl" />
        <div className="flex gap-2 mb-6">
          {[1,2,3].map(i => (
            <div key={i} className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#8c8a82] mb-4">
          Designed for Excellence // Established 2026
        </p>
        <div className="flex gap-8 text-[9px] font-bold uppercase tracking-widest text-[#1a1a1a]/40">
           <span className="hover:text-orange-600 cursor-pointer transition-colors">Gauteng</span>
           <span>•</span>
           <span className="hover:text-orange-600 cursor-pointer transition-colors">Western Cape</span>
        </div>
      </footer>
    </main>
  );
};

export default Landing;