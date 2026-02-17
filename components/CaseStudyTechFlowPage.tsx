
import React from 'react';

interface CaseStudyTechFlowPageProps {
  onBack: () => void;
}

const CaseStudyTechFlowPage: React.FC<CaseStudyTechFlowPageProps> = ({ onBack }) => {
  return (
    <section className="px-6 py-12 animate-in fade-in zoom-in-95 duration-500">
      <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-12 group font-bold text-sm tracking-widest uppercase">
        <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
        <span>Kembali ke Studi Kasus</span>
      </button>

      <div className="space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 order-2 lg:order-1">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=75&w=800" className="w-full h-full object-cover" alt="TechFlow SaaS" decoding="async" loading="lazy" />
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-black text-blue-400 uppercase tracking-widest">Global SaaS Expansion</span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">TechFlow</h1>
            <p className="text-xl text-gray-400 leading-relaxed italic">"Membangun otoritas digital untuk bersaing di pasar B2B global dengan strategi SEO Content."</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-surface-dark rounded-3xl border border-white/5">
                <div className="text-3xl font-black text-blue-400">+450%</div>
                <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Organic Traffic</div>
              </div>
              <div className="p-6 bg-surface-dark rounded-3xl border border-white/5">
                <div className="text-3xl font-black text-white">12</div>
                <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Target Countries</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-10 bg-surface-dark/40 rounded-[3rem] border border-white/5 space-y-6">
            <h3 className="text-2xl font-black text-white">Tantangan Utama</h3>
            <p className="text-gray-400 leading-relaxed text-sm">TechFlow memiliki produk luar biasa namun kesulitan muncul di hasil pencarian untuk kata kunci kompetitif tinggi melawan kompetitor yang sudah mapan selama 10 tahun.</p>
          </div>
          <div className="p-10 bg-blue-500/5 rounded-[3rem] border border-blue-500/10 space-y-6">
            <h3 className="text-2xl font-black text-blue-400">Solusi Kami</h3>
            <p className="text-gray-300 leading-relaxed text-sm">Fokus pada strategi 'Skyscraper' untuk konten blog dan kampanye backlink PR yang menargetkan situs otoritas teknologi global seperti TechCrunch dan Wired.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyTechFlowPage;
