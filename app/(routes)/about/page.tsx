"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Quote, ShieldCheck, Star, Zap, Map, Award, Fingerprint } from 'lucide-react';

const AboutPage = () => {
  return (
    <main className="bg-[#FAF9F6] text-[#1a1a1a] overflow-x-hidden">
      
      {/* 1. HERO / FOUNDER SECTION - Swapped Slate/Green for Espresso/Copper */}
      <section className="relative py-32 px-6 md:px-20 bg-[#1f1d1b] text-[#FAF9F6]">
        {/* Subtle Branding Watermark */}
        <div className="absolute top-10 right-10 text-[15vw] font-serif italic opacity-[0.03] pointer-events-none select-none">
          Legacy
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-[#b16642]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#b16642]">The Visionary</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-12">
              Driven by <br />
              <span className="italic opacity-40">Excellence.</span>
            </h1>

            <div className="relative">
              <Quote className="absolute -left-8 -top-8 text-[#b16642]/20" size={60} />
              <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-stone-300 italic">
                "We didn't just want to build a cleaning service; we wanted to build a logistics engine for luxury. In Gauteng and the Western Cape, property is an asset—we ensure it’s treated like one."
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#b16642]">
                — Julian Vance, Founder & Lead Architect
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
             <div className="aspect-[3/4] relative overflow-hidden shadow-2xl group border border-white/5">
                <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
                  alt="Founder Portrait"
                  fill
                  className="object-cover transition-all duration-1000 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[#b16642]/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
             </div>
             
             {/* Spruced up stats badge - Copper Theme */}
             <div className="absolute -bottom-10 -left-10 bg-[#b16642] p-8 hidden md:block shadow-2xl">
                <p className="text-4xl font-serif text-white">10+</p>
                <p className="text-[8px] font-bold uppercase tracking-widest text-white/80">Years in Hospitality</p>
             </div>
          </div>
        </div>
      </section>

      {/* 2. THE HUMAN CAPITAL (Employee "Brag" Section) */}
      <section className="py-32 px-6 md:px-20 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#b16642]">Our Specialists</span>
              <h2 className="text-5xl md:text-7xl font-serif mt-4 mb-8">Vetted Talent. <br/><span className="italic text-[#8c8a82]">Verified Precision.</span></h2>
              <p className="text-[#5a5852] font-light leading-relaxed uppercase text-xs tracking-[0.2em]">
                We recruit Logistics Operators, not just cleaners. Every member of our team is an expert in the 'Architect' protocol.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                role: "Lead Logistics", 
                name: "Sarah Mthembu", 
                stat: "4.9★", 
                desc: "Expert in Gauteng estate turnovers and inventory management.",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
              },
              { 
                role: "Visual Auditor", 
                name: "David Chen", 
                stat: "2k+ Units", 
                desc: "Specializes in deep-clean verification and damage reporting protocol.",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
              },
              { 
                role: "Regional Head", 
                name: "Elena Ross", 
                stat: "Cape Town", 
                desc: "Overseeing elite property standards across the Atlantic Seaboard.",
                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
              }
            ].map((staff, i) => (
              <div key={i} className="group cursor-pointer">
                <Link href={`/housekeepers/${staff.name}`} className="relative block aspect-[4/5] overflow-hidden mb-8 bg-[#f2f0e8]">
                  <Image 
                    src={staff.img}
                    alt={staff.name}
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                  />
                  {/* Subtle hover overlay using Copper */}
                  <div className="absolute inset-0 bg-[#1f1d1b]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                     <p className="text-[10px] font-bold text-white uppercase tracking-widest border-b border-[#b16642] pb-2 inline-block">
                       {staff.stat} Performance
                     </p>
                  </div>
                </Link>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#b16642] block mb-2">{staff.role}</span>
                <h3 className="text-2xl font-serif mb-4">{staff.name}</h3>
                <p className="text-xs text-[#8c8a82] leading-relaxed uppercase tracking-widest font-light">
                  {staff.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE PROTOCOL VALUES - Swapped emerald icons for Copper/Stone */}
      <section className="py-32 px-6 md:px-20 bg-[#fdfaf5] border-y border-[#eceae2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { icon: <Map className="text-[#b16642]" />, title: "GPS Verified", text: "Zero accountability gaps." },
            { icon: <Fingerprint className="text-[#b16642]" />, title: "Secure Logs", text: "Encrypted photo evidence." },
            { icon: <Award className="text-[#b16642]" />, title: "Elite Vetting", text: "Top 5% of Gauteng talent." },
            { icon: <div className="font-serif italic text-2xl text-[#b16642]">A+</div>, title: "Standard", text: "The Architect protocol." },
          ].map((value, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 border border-[#eceae2] group-hover:border-[#b16642] transition-colors">
                {value.icon}
              </div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-2">{value.title}</h4>
              <p className="text-xs text-[#8c8a82] uppercase tracking-widest">{value.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;