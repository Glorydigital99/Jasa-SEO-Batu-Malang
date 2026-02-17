
import React from 'react';

interface CaseStudyZenPageProps {
  onBack: () => void;
}

const CaseStudyZenPage: React.FC<CaseStudyZenPageProps> = ({ onBack }) => {
  return (
    <section className="px-6 py-12 animate-in fade-in zoom-in-95 duration-500">
      <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-12 group font-bold text-sm tracking-widest uppercase">
        <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
        <span>Kembali ke Studi Kasus</span>
      </button>

      <div className="space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-black text-primary uppercase tracking-widest">Real Estate Success</span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">Emerald Park</h1>
            <p className="text-xl text-gray-400 leading-relaxed italic">"Transformasi dari properti tak terlihat menjadi pemimpin pasar digital dalam 6 bulan."</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-surface-dark rounded-3xl border border-white/5">
                <div className="text-3xl font-black text-primary">+320%</div>
                <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Lead Generation</div>
              </div>
              <div className="p-6 bg-surface-dark rounded-3xl border border-white/5">
                <div className="text-3xl font-black text-white">#1</div>
                <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Google Ranking</div>
              </div>
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Emerald Park" />
          </div>
        </div>

        <div className="bg-surface-dark/40 rounded-[3rem] p-12 border border-white/5 space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-black text-white">Strategi Eksekusi</h2>
            <p className="text-gray-400">Kami menerapkan pendekatan SEO Lokal yang agresif, menargetkan pembeli potensial di area terkait dengan konten yang relevan dan optimasi teknis Google Maps.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "Technical Audit", d: "Memperbaiki 42 error indexing dan mempercepat Core Web Vitals hingga skor 98.", i: "analytics" },
              { t: "Local SEO Dominance", d: "Optimasi GMB yang menghasilkan peningkatan rute arah sebesar 150%.", i: "location_on" },
              { t: "Content Pillars", d: "Menulis 24 artikel panduan investasi properti yang mendominasi 'snippet' Google.", i: "edit_note" }
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <span className="material-symbols-outlined text-primary text-4xl">{item.i}</span>
                <h4 className="text-xl font-black text-white">{item.t}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyZenPage;
