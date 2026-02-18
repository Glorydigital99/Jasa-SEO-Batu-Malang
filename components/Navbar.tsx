import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isScrolled: boolean;
  onNavigate: (page: 'home' | 'service-web' | 'audit-improvement' | 'design-grafis' | 'redesign-web' | 'case-study' | 'process' | 'terms' | 'about') => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, onNavigate }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mencegah scroll body saat menu mobile terbuka
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleMobileNav = (page: any) => {
    setTimeout(() => {
        onNavigate(page);
        setIsMobileMenuOpen(false);
    }, 150);
  };

  return (
    <>
      {/* 1. MAIN NAVIGATION BAR */}
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        isScrolled ? 'bg-background-dark/80 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.2)]' : 'bg-transparent py-5'
      }`}>
        <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-[0.03]'}`}>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer relative z-[70]" onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }}>
            <div className="relative">
              <span className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:rotate-12 duration-500">rocket_launch</span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-white text-xl font-black tracking-tight uppercase transition-all duration-500">GLORY DIGITAL</h2>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
             {/* Dropdown Layanan Desktop */}
             <div className="relative group py-2" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                <button className="flex items-center gap-1 text-white/80 hover:text-primary transition-all duration-300 focus:outline-none">
                    <span>Layanan</span>
                    <span className={`material-symbols-outlined text-xs transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>keyboard_arrow_down</span>
                </button>
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[480px] mt-2 p-4 bg-surface-dark border border-white/10 rounded-3xl shadow-2xl transition-all duration-300 transform origin-top ${
                    isDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}>
                    <div className="grid grid-cols-2 gap-2">
                        <button onClick={() => { onNavigate('service-web'); setIsDropdownOpen(false); }} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-left group/item border border-transparent hover:border-primary/20">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary"><span className="material-symbols-outlined text-xl">web</span></div>
                            <div><div className="text-white font-bold text-[10px] uppercase tracking-wider">Pembuatan Web</div><div className="text-[9px] text-gray-500 leading-tight">Eksklusif & High-End</div></div>
                        </button>
                        <button onClick={() => { onNavigate('design-grafis'); setIsDropdownOpen(false); }} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-left group/item border border-transparent hover:border-blue-400/20">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400"><span className="material-symbols-outlined text-xl">brush</span></div>
                            <div><div className="text-white font-bold text-[10px] uppercase tracking-wider">Design Grafis</div><div className="text-[9px] text-gray-500 leading-tight">Branding & Logo</div></div>
                        </button>
                        <button onClick={() => { onNavigate('redesign-web'); setIsDropdownOpen(false); }} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-left group/item border border-transparent hover:border-orange-400/20">
                            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400"><span className="material-symbols-outlined text-xl">history_edu</span></div>
                            <div><div className="text-white font-bold text-[10px] uppercase tracking-wider">Redesign Web</div><div className="text-[9px] text-gray-500 leading-tight">Modernisasi Visual</div></div>
                        </button>
                        <button onClick={() => { onNavigate('audit-improvement'); setIsDropdownOpen(false); }} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-left group/item border border-transparent hover:border-emerald-500/20">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400"><span className="material-symbols-outlined text-xl">troubleshoot</span></div>
                            <div><div className="text-white font-bold text-[10px] uppercase tracking-wider">SEO Audit</div><div className="text-[9px] text-gray-500 leading-tight">Cek Kesehatan Web</div></div>
                        </button>
                    </div>
                </div>
            </div>
            <button onClick={() => onNavigate('case-study')} className="text-white/80 hover:text-primary transition-all">Studi Kasus</button>
            <button onClick={() => onNavigate('process')} className="text-white/80 hover:text-primary transition-all">Proses</button>
            <button onClick={() => window.open('https://wa.me/6285177470073', '_blank')} className="px-6 py-2 bg-primary text-background-dark font-black rounded-full hover:scale-105 active:scale-95 transition-all text-sm tracking-wide">Kontak Kami</button>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/5 text-white z-[70] relative active:scale-95 transition-transform"
          >
            <span className={`material-symbols-outlined text-2xl absolute transition-all duration-500 ${isMobileMenuOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}>menu</span>
            <span className={`material-symbols-outlined text-2xl absolute transition-all duration-500 text-primary ${isMobileMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`}>close</span>
          </button>
        </div>
      </nav>

      {/* --- 2. BACKDROP DIMMER (FullScreen Blur) --- */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-[51] md:hidden transition-opacity duration-500 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* --- 3. NEW: FLOATING CENTER MENU --- */}
      <div className={`fixed inset-0 z-[55] md:hidden flex items-center justify-center p-6 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
      }`}>
        <div className="relative w-full max-w-[400px] max-h-[85vh] bg-surface-dark/95 border border-white/10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
          
          {/* Ambient Glow di dalam Card */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="relative h-full flex flex-col p-8 overflow-y-auto">
            {/* Navigasi Utama */}
            <div className="space-y-6 mb-10 text-left">
              <p className="text-[10px] font-black text-primary/70 uppercase tracking-[0.3em] flex items-center gap-2">
                <span className="w-4 h-[1px] bg-primary"></span> Menu Utama
              </p>
              <ul className="space-y-4">
                {['Home', 'Studi Kasus', 'Proses'].map((label, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => handleMobileNav(label === 'Proses' ? 'process' : label.toLowerCase().replace(' ', '-'))} 
                      className="w-full text-left"
                    >
                      <span className="text-4xl font-black text-white uppercase tracking-tighter active:text-primary transition-colors">{label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Grid Layanan Mini */}
            <div className="mb-10 text-left">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4">Layanan Kami</p>
              <div className="grid grid-cols-2 gap-3">
                 {[
                   { id: 'service-web', title: 'Web Dev', icon: 'web' },
                   { id: 'design-grafis', title: 'Grafis', icon: 'brush' },
                   { id: 'redesign-web', title: 'Redesign', icon: 'history_edu' },
                   { id: 'audit-improvement', title: 'SEO Audit', icon: 'troubleshoot' }
                 ].map((item) => (
                   <button key={item.id} onClick={() => handleMobileNav(item.id as any)} 
                     className="flex flex-col items-center justify-center p-4 rounded-3xl bg-white/5 border border-white/5 active:bg-primary/10 active:border-primary/30 transition-all text-center">
                      <span className="material-symbols-outlined text-gray-400 text-xl mb-1">{item.icon}</span>
                      <span className="text-[10px] font-bold text-white uppercase tracking-tight">{item.title}</span>
                   </button>
                 ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mt-auto">
              <button onClick={() => handleMobileNav('terms')} className="w-full py-3 rounded-2xl border border-white/5 bg-white/5 text-white/50 text-[9px] font-black uppercase tracking-[0.2em]">
                S&K / Legal NDA
              </button>
              <button 
                onClick={() => window.open('https://wa.me/6285177470073', '_blank')}
                className="w-full py-5 bg-primary text-background-dark font-black rounded-2xl text-base uppercase tracking-widest shadow-[0_10px_30px_rgba(19,236,91,0.2)] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Hubungi Kami</span>
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;