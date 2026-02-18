
import React from 'react';

interface RedesignWebPageProps {
  onBack: () => void;
}

const RedesignWebPage: React.FC<RedesignWebPageProps> = ({ onBack }) => {
  return (
    <section className="px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-12 group font-bold text-xs tracking-widest uppercase">
        <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
        <span>Kembali</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-sm font-black text-orange-400 uppercase tracking-[0.4em]">Web Evolution</h2>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">Design Ulang <br/> <span className="text-orange-400">Tanpa Batas</span></h1>
          <p className="text-xl text-gray-400 leading-relaxed">Website lama Anda adalah penghalang konversi. Kami merombak total dari sisi performa, UX, dan estetika untuk standar tahun 2024.</p>
          
          <div className="space-y-4">
            {["Peningkatan Kecepatan Hingga 300%", "UI Modern & Mobile First", "Optimasi Alur Konversi Sales"].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-orange-400">check_circle</span>
                <span className="font-bold text-white text-sm uppercase tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-dark border border-white/5 rounded-[3rem] p-10 space-y-8">
           <div className="flex justify-between items-end border-b border-white/5 pb-6">
              <div className="text-xs font-black text-gray-500 uppercase">Old Website</div>
              <div className="text-red-400 font-bold">42/100</div>
           </div>
           <div className="flex justify-between items-end border-b border-white/5 pb-6">
              <div className="text-xs font-black text-gray-500 uppercase">Glory Redesign</div>
              <div className="text-primary font-bold text-2xl">99/100</div>
           </div>
           <p className="text-xs text-gray-500 italic">"Durasi sesi pengguna melonjak tajam, sementara angka bounce rate berhasil ditekan seminimal mungkin."</p>
        </div>
      </div>
    </section>
  );
};

export default RedesignWebPage;
