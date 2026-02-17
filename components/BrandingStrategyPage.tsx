
import React from 'react';

interface BrandingStrategyPageProps {
  onBack: () => void;
}

const BrandingStrategyPage: React.FC<BrandingStrategyPageProps> = ({ onBack }) => {
  return (
    <section className="px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-amber-400 transition-colors mb-12 group font-bold text-xs tracking-widest uppercase">
        <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
        <span>Kembali ke Layanan</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full">
            <span className="material-symbols-outlined text-amber-500 text-sm">verified</span>
            <span className="text-xs font-black text-amber-500 uppercase tracking-widest">Brand Architecture</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">Branding <br/><span className="text-amber-500 italic">Identity</span></h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
            Bukan sekadar logo. Kami membangun jiwa bisnis Anda, menentukan posisi pasar, dan merancang bagaimana dunia harus memandang brand Anda.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-square bg-surface-dark rounded-[4rem] border border-white/5 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=75&w=800" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              loading="lazy"
              decoding="async"
              alt="Branding Process"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
        <div className="p-12 rounded-[3.5rem] bg-surface-dark/40 border border-white/5 space-y-6">
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Market Positioning</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Analisis kompetitor mendalam untuk menemukan celah pasar unik di mana brand Anda dapat berdiri paling menonjol.</p>
        </div>
        <div className="p-12 rounded-[3.5rem] bg-amber-500/5 border border-amber-500/10 space-y-6">
          <h3 className="text-2xl font-black text-amber-500 uppercase tracking-tighter">Brand Voice & Tone</h3>
          <p className="text-gray-300 text-sm leading-relaxed">Menentukan cara brand Anda berbicara, emosi yang ingin dibangun, dan nilai-nilai yang ingin disampaikan pada audiens.</p>
        </div>
      </div>

      <div className="text-center py-20 border-t border-white/5">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tighter uppercase">Definisikan <span className="text-amber-500 italic">Masa Depan</span> Brand Anda</h2>
        <button 
          onClick={() => window.open('https://wa.me/6285177470073', '_blank')}
          className="px-16 py-6 bg-white text-background-dark font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(245,158,11,0.2)]"
        >
          MULAI STRATEGI BRANDING
        </button>
      </div>
    </section>
  );
};

export default BrandingStrategyPage;
