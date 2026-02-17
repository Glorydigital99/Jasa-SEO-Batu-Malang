
import React from 'react';

interface CaseStudyEcoPageProps {
  onBack: () => void;
}

const CaseStudyEcoPage: React.FC<CaseStudyEcoPageProps> = ({ onBack }) => {
  return (
    <section className="px-6 py-12 animate-in fade-in zoom-in-95 duration-500">
      <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-emerald-400 transition-colors mb-12 group font-bold text-sm tracking-widest uppercase">
        <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
        <span>Kembali ke Studi Kasus</span>
      </button>

      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-8">
          <span className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-black text-emerald-400 uppercase tracking-widest">Sustainable Fashion</span>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase">EcoStore</h1>
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">Dominasi pasar mode ramah lingkungan dengan strategi nilai berkelanjutan.</p>
        </div>

        <div className="relative aspect-video rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl">
          <img src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=75&w=800" className="w-full h-full object-cover" alt="EcoStore" decoding="async" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent flex flex-col justify-end p-12">
            <div className="flex gap-12">
              <div>
                <div className="text-4xl font-black text-emerald-400">#1</div>
                <div className="text-[10px] font-black uppercase text-white/50 tracking-[0.2em]">Sustainability Keywords</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white">+300%</div>
                <div className="text-[10px] font-black uppercase text-white/50 tracking-[0.2em]">Brand Mentions</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-white">Ethical SEO</h3>
            <p className="text-gray-400 leading-relaxed text-sm">Kami tidak hanya mengejar peringkat; kami membangun narasi. Melalui kampanye backlink yang etis dan kerja sama dengan influencer lingkungan, EcoStore kini menjadi referensi utama fashion berkelanjutan.</p>
          </div>
          <div className="bg-emerald-500/5 p-10 rounded-[3rem] border border-emerald-500/10 space-y-6">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <span className="material-symbols-outlined">eco</span>
                </div>
                <h4 className="font-black text-white uppercase">Green Performance</h4>
             </div>
             <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Domain Authority</span>
                  <span className="text-white font-bold">DA 58 (Up from 24)</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Conversion Rate</span>
                  <span className="text-white font-bold">4.2%</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyEcoPage;
