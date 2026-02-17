
import React from 'react';

interface CaseStudyHealthPageProps {
  onBack: () => void;
}

const CaseStudyHealthPage: React.FC<CaseStudyHealthPageProps> = ({ onBack }) => {
  return (
    <section className="px-6 py-12 animate-in fade-in zoom-in-95 duration-500">
      <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-rose-400 transition-colors mb-12 group font-bold text-sm tracking-widest uppercase">
        <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
        <span>Kembali ke Studi Kasus</span>
      </button>

      <div className="space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 order-2 lg:order-1">
            <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=75&w=800" className="w-full h-full object-cover" alt="HealthLink" decoding="async" loading="lazy" />
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <span className="px-4 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-full text-xs font-black text-rose-500 uppercase tracking-widest">Medical Otoritas</span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">HealthLink</h1>
            <p className="text-xl text-gray-400 leading-relaxed italic">"Membangun kepercayaan melalui transparansi dan akurasi informasi."</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-surface-dark rounded-3xl border border-white/5">
                <div className="text-3xl font-black text-rose-500">1.2M</div>
                <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Monthly Traffic</div>
              </div>
              <div className="p-6 bg-surface-dark rounded-3xl border border-white/5">
                <div className="text-3xl font-black text-white">99%</div>
                <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Acurracy Score</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-10 bg-surface-dark/40 rounded-[3rem] border border-white/5 space-y-6">
            <h3 className="text-2xl font-black text-white">Standar E-A-T</h3>
            <p className="text-gray-400 leading-relaxed text-sm">Untuk situs YMYL (Your Money Your Life), Google sangat ketat. Kami merekrut dewan medis untuk memverifikasi setiap artikel, memastikan skor otoritas yang sangat tinggi di mata algoritma.</p>
          </div>
          <div className="p-10 bg-rose-500/5 rounded-[3rem] border border-rose-500/10 space-y-6">
            <h3 className="text-2xl font-black text-rose-500">Hasil Nyata</h3>
            <p className="text-gray-300 leading-relaxed text-sm">Peningkatan 400% dalam jumlah pendaftaran janji temu pasien secara online melalui optimasi kata kunci pencarian gejala penyakit ke solusi medis.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHealthPage;
