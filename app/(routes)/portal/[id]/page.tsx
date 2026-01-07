"use client";
import React, { useState } from 'react';
import { 
  Calendar, Clock, CheckCircle2, XCircle, Wallet, 
  MapPin, Camera, Bell, TrendingUp, PlaneTakeoff, 
  ChevronRight, ChevronLeft, History, BarChart3, ArrowUpRight
} from 'lucide-react';

const HouseKeeperPortal = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [showDetails, setShowDetails] = useState(false);

  const stats = [
    { label: "Total Revenue", val: "R 24,500", icon: <Wallet size={18} />, grad: "from-[#b16642] via-[#8a4a2d] to-[#63321c]" },
    { label: "Active Projects", val: "3", icon: <TrendingUp size={18} />, grad: "from-[#c67a54] via-[#b16642] to-[#8a4a2d]" },
    { label: "Success Rate", val: "99%", icon: <CheckCircle2 size={18} />, grad: "from-[#8a4a2d] via-[#63321c] to-[#4a2312]" },
  ];

  return (
    <div className="min-h-screen bg-[#F2F0E8] text-[#1a1a1a] pb-20 font-sans">
      
      {/* 1. THE SPACER & STRIP FIX */}
      {/* We add a div with height equivalent to your header (usually h-16 or h-20) */}
      <div className="h-16 md:h-20 w-full bg-transparent" /> 

      {/* PORTAL STRIP - Removed 'sticky' to prevent it fighting with your main header */}
      <div className="bg-[#1F1D1B] text-white px-6 md:px-12 py-3 flex justify-between items-center shadow-lg relative z-10">
        <div className="flex items-center gap-4">
          <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#b16642]">Operator Portal</span>
          <div className="h-3 w-[1px] bg-white/20" />
          <span className="text-[9px] font-medium text-white/50 uppercase tracking-widest">Protocol v4.0.2</span>
        </div>
        <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-widest">
           <span className="flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"/> 
             System Live
           </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-8">
        
        {/* 2. STATS SECTION */}
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500 italic">Performance_Logs</h2>
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#b16642] hover:text-[#1a1a1a] transition-colors border-b border-transparent hover:border-[#b16642]"
          >
            {showDetails ? 'Collapse' : 'Expand'} Analytics <BarChart3 size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {stats.map((s, i) => (
            <div key={i} className={`bg-gradient-to-br ${s.grad} p-8 shadow-2xl transition-transform hover:-translate-y-1 relative overflow-hidden group`}>
              <div className="absolute -right-4 -bottom-4 text-white opacity-10 group-hover:scale-110 transition-transform">
                {React.cloneElement(s.icon, { size: 100 })}
              </div>
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">{s.label}</p>
                  <div className="text-white/80 p-2 bg-white/10 rounded">{s.icon}</div>
                </div>
                <h2 className="text-4xl font-serif font-bold text-white tracking-tight">{s.val}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* DETAILED STATS (Clean view) */}
        {showDetails && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-in fade-in slide-in-from-top-2 duration-300">
            {[
              { label: "Avg Turnover", val: "2.4h" },
              { label: "Rating", val: "4.9/5" },
              { label: "Reliability", val: "100%" },
              { label: "Audit Avg", val: "96%" },
            ].map((d, i) => (
              <div key={i} className="bg-white border border-stone-200 p-6 shadow-sm">
                <p className="text-[8px] font-bold uppercase tracking-widest text-stone-400">{d.label}</p>
                <p className="text-xl font-serif font-bold mt-1 tracking-tight">{d.val}</p>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* MAIN FEED */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex gap-10 border-b border-stone-300">
              {['active', 'projects', 'earnings'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[11px] font-bold uppercase tracking-[0.3em] pb-6 transition-all relative ${
                    activeTab === tab ? 'text-[#1a1a1a]' : 'text-[#8c8a82]'
                  }`}
                >
                  {tab}
                  {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#b16642]" />}
                </button>
              ))}
            </div>

            <div className="space-y-4 pt-6">
              {[1, 2].map((booking) => (
                <div key={booking} className="bg-white p-8 border border-stone-200 shadow-sm hover:border-[#b16642] transition-colors group">
                  <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="flex gap-8">
                      <div className="w-24 h-24 bg-[#F2F0E8] flex flex-col items-center justify-center gap-2 border border-stone-100 group-hover:bg-[#1F1D1B] transition-colors">
                        <Camera size={20} className="text-stone-300 group-hover:text-orange-400" />
                        <span className="text-[7px] font-bold uppercase text-stone-400">Log_Capture</span>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-serif tracking-tight">V&A Marina Wing #402</h3>
                        <div className="flex flex-wrap gap-6 text-[10px] uppercase text-stone-500 font-bold tracking-tight">
                          <span className="flex items-center gap-2 italic">Jan 12 // 09:00</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col gap-2 min-w-[140px]">
                      <button className="bg-[#1a1a1a] text-white py-4 text-[9px] font-bold uppercase tracking-widest hover:bg-[#b16642] transition-all">
                        Accept
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR: LEAVE & HISTORY */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-10 border border-stone-200 shadow-xl">
              <div className="flex items-center gap-3 mb-10 border-b border-stone-100 pb-6">
                <PlaneTakeoff size={18} className="text-[#b16642]" />
                <h3 className="text-xs font-bold uppercase tracking-[0.4em]">Schedule Leave</h3>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center px-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 font-serif italic">January 2026</p>
                  <div className="flex gap-4 text-stone-300">
                    <ChevronLeft size={16} className="cursor-pointer hover:text-black" />
                    <ChevronRight size={16} className="cursor-pointer hover:text-black" />
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {['S','M','T','W','T','F','S'].map((d,i) => (
                    <div key={i} className="text-[9px] font-bold text-stone-200 text-center py-2">{d}</div>
                  ))}
                  {[...Array(31)].map((_, i) => (
                    <div key={i} className={`aspect-square flex items-center justify-center text-[10px] cursor-pointer transition-all border ${
                      [20, 21, 22].includes(i+1) 
                      ? 'bg-[#1F1D1B] border-[#1F1D1B] text-white font-bold scale-110 shadow-lg' 
                      : 'text-stone-700 border-transparent hover:border-stone-200'
                    }`}>
                      {i + 1}
                    </div>
                  ))}
                </div>

                <button className="w-full bg-[#1F1D1B] text-white py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#b16642] transition-all mt-4">
                  Initialize Leave Approval
                </button>
              </div>

              {/* LOGS SECTION */}
              <div className="mt-12 pt-8 border-t border-stone-100">
                <p className="text-[9px] font-bold uppercase tracking-widest text-stone-300 mb-6 flex items-center gap-2">
                  <History size={12}/> Past_Leave_Entries
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-tight">Holiday_Break</span>
                    <span className="text-[8px] font-bold uppercase text-emerald-600">Approved</span>
                  </div>
                  <p className="text-[9px] text-stone-400 uppercase">Dec 15 - Dec 28, 2025</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HouseKeeperPortal;