
import React from 'react';

interface CaseStudyUrbanPageProps {
  onBack: () => void;
}

const CaseStudyUrbanPage: React.FC<CaseStudyUrbanPageProps> = ({ onBack }) => {
  return (
    <section className="px-6 py-12 animate-in fade-in zoom-in-95 duration-500">
      <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-12 group font-bold text-sm tracking-widest uppercase">
        <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
        <span>Kembali ke Studi Kasus</span>
      </button>

      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-8">
          <span className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-black text-emerald-400 uppercase tracking-widest">E-Commerce Revolution</span>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">URBAN LIVING</h1>
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">Membangun pengalaman belanja masa depan dengan optimasi kecepatan ekstrem.</p>
        </div>

        <div className="relative aspect-video rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=75&w=1200" className="w-full h-full object-cover" alt="Urban Living" decoding="async" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent flex flex-col justify-end p-12">
            <div className="flex gap-12">
              <div>
                <div className="text-4xl font-black text-primary">3.5x</div>
                <div className="text-[10px] font-black uppercase text-white/50 tracking-[0.2em]">Kenaikan ROI</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white">-40%</div>
                <div className="text-[10px] font-black uppercase text-white/50 tracking-[0.2em]">Bounce Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-white">Visual & Performa</h3>
            <p className="text-gray-400 leading-relaxed">Kami merancang ulang seluruh antarmuka pengguna (UI) dengan prinsip mobile-first. Setiap milidetik dihitung; kami berhasil memangkas waktu muat dari 4.2 detik menjadi 0.8 detik.</p>
          </div>
          <div className="space-y-6 bg-surface-dark p-10 rounded-[3rem] border border-white/5">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <h4 className="font-black text-white uppercase">Core Web Vitals</h4>
             </div>
             <div className="space-y-4">
               {[
                 { l: "Largest Contentful Paint", v: "0.8s", c: "bg-primary" },
                 { l: "First Input Delay", v: "15ms", c: "bg-primary" },
                 { l: "Cumulative Layout Shift", v: "0.01", c: "bg-primary" }
               ].map((m, i) => (
                 <div key={i} className="space-y-1">
                   <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                     <span>{m.l}</span>
                     <span className="text-white">{m.v}</span>
                   </div>
                   <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                     <div className={`h-full ${m.c}`} style={{ width: '95%' }}></div>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyUrbanPage;
