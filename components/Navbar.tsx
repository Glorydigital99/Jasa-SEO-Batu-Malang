
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
  onNavigate: (page: 'home' | 'service-web' | 'audit-improvement' | 'design-grafis' | 'redesign-web' | 'case-study' | 'process' | 'terms' | 'about') => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, onNavigate }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-background-dark/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'bg-transparent py-5'
    }`}>
      {/* Subtle SEO Analytics Theme Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-[pulse_4s_infinite]"></div>
        
        {/* Tiny Floating Data Nodes */}
        <div className="absolute top-2 left-[20%] w-1 h-1 bg-primary rounded-full animate-ping"></div>
        <div className="absolute bottom-3 left-[40%] w-1 h-1 bg-emerald-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-4 right-[30%] w-1 h-1 bg-primary rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 group cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          <div className="relative">
            <span className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:rotate-12 group-hover:scale-110 duration-500">rocket_launch</span>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-white text-xl font-black tracking-tight uppercase group-hover:tracking-widest transition-all duration-500">GLORY DIGITAL</h2>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <div 
            className="relative group py-2"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-white/80 hover:text-primary transition-all duration-300 focus:outline-none">
              <span>Layanan</span>
              <span className={`material-symbols-outlined text-xs transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>keyboard_arrow_down</span>
            </button>
            
            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[480px] mt-2 p-4 bg-surface-dark border border-white/10 rounded-3xl shadow-2xl transition-all duration-300 transform origin-top ${
              isDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
            }`}>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => { onNavigate('service-web'); setIsDropdownOpen(false); }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-left group/item border border-transparent hover:border-primary/20"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary"><span className="material-symbols-outlined text-xl">web</span></div>
                  <div><div className="text-white font-bold text-[10px] uppercase tracking-wider">Pembuatan Web</div><div className="text-[9px] text-gray-500 leading-tight">Eksklusif & High-End</div></div>
                </button>
                <button 
                  onClick={() => { onNavigate('design-grafis'); setIsDropdownOpen(false); }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-left group/item border border-transparent hover:border-blue-400/20"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400"><span className="material-symbols-outlined text-xl">brush</span></div>
                  <div><div className="text-white font-bold text-[10px] uppercase tracking-wider">Design Grafis</div><div className="text-[9px] text-gray-500 leading-tight">Branding & Logo</div></div>
                </button>
                <button 
                  onClick={() => { onNavigate('redesign-web'); setIsDropdownOpen(false); }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-left group/item border border-transparent hover:border-orange-400/20"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400"><span className="material-symbols-outlined text-xl">history_edu</span></div>
                  <div><div className="text-white font-bold text-[10px] uppercase tracking-wider">Redesign Web</div><div className="text-[9px] text-gray-500 leading-tight">Modernisasi Visual</div></div>
                </button>
                <button 
                  onClick={() => { onNavigate('audit-improvement'); setIsDropdownOpen(false); }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-left group/item border border-transparent hover:border-emerald-500/20"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400"><span className="material-symbols-outlined text-xl">troubleshoot</span></div>
                  <div><div className="text-white font-bold text-[10px] uppercase tracking-wider">SEO Audit</div><div className="text-[9px] text-gray-500 leading-tight">Cek Kesehatan Web</div></div>
                </button>
              </div>
            </div>
          </div>

          <button onClick={() => onNavigate('case-study')} className="text-white/80 hover:text-primary transition-all duration-300">Studi Kasus</button>
          <button onClick={() => onNavigate('process')} className="text-white/80 hover:text-primary transition-all duration-300">Proses</button>
          
          {/* Highlighted S&K / NDA Menu */}
          <button 
            onClick={() => onNavigate('terms')} 
            className="relative px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 transition-all flex items-center gap-2 group/terms"
          >
            <span className="text-xs uppercase font-black tracking-widest">S&K / NDA</span>
            <div className="absolute -top-3 -right-2 px-1.5 py-0.5 bg-primary text-background-dark text-[8px] font-black rounded-md shadow-lg scale-90 group-hover/terms:scale-100 transition-transform">
              LEGAL
            </div>
          </button>

          <button 
            onClick={() => window.open('https://wa.me/6285177470073', '_blank')}
            className="px-6 py-2 bg-primary text-background-dark font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(19,236,91,0.3)] text-sm tracking-wide"
          >
            Kontak Kami
          </button>
        </div>

        <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
