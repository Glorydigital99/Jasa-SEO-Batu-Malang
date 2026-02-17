
import React from 'react';

interface GoogleAdsPageProps {
  onBack: () => void;
}

const GoogleAdsPage: React.FC<GoogleAdsPageProps> = ({ onBack }) => {
  return (
    <section className="px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-red-400 transition-colors mb-12 group font-bold text-xs tracking-widest uppercase">
        <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
        <span>Kembali ke Layanan</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full">
            <span className="material-symbols-outlined text-red-400 text-sm">ads_click</span>
            <span className="text-xs font-black text-red-400 uppercase tracking-widest">Performance Marketing</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">Google Ads <br/><span className="text-red-400">Mastery</span></h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
            Hasil instan dengan penargetan presisi. Kami mengelola kampanye Search, Display, dan Video untuk memaksimalkan ROI bisnis Anda sejak hari pertama.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-video bg-surface-dark rounded-[3rem] border border-white/5 p-12 flex flex-col justify-center space-y-6">
            <div className="flex justify-between items-center text-xs font-bold text-gray-500 uppercase tracking-widest">
              <span>Average Ad ROI</span>
              <span className="text-red-400 text-lg">450%</span>
            </div>
            <div className="h-4 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-red-400" style={{ width: '85%' }}></div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-background-dark rounded-2xl border border-white/5">
                <div className="text-2xl font-black text-white">$0.45</div>
                <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Avg. CPC</div>
              </div>
              <div className="p-4 bg-background-dark rounded-2xl border border-white/5">
                <div className="text-2xl font-black text-white">12.4%</div>
                <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Conv. Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {[
          { t: "Search Engine Marketing", d: "Menampilkan bisnis Anda tepat saat calon pelanggan mencari solusi yang Anda tawarkan.", i: "search" },
          { t: "Remarketing Strategy", d: "Mengejar kembali pengunjung website yang belum melakukan pembelian dengan iklan strategis.", i: "sync" },
          { t: "Data-Driven Scaling", d: "Optimasi budget harian berdasarkan data real-time untuk mendapatkan lead termurah.", i: "trending_up" }
        ].map((item, i) => (
          <div key={i} className="p-10 rounded-[2.5rem] bg-surface-dark border border-white/5 group hover:border-red-400/20 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-background-dark flex items-center justify-center text-red-400 mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">{item.i}</span>
            </div>
            <h3 className="text-xl font-black text-white mb-4">{item.t}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.d}</p>
          </div>
        ))}
      </div>

      <div className="relative rounded-[4rem] bg-gradient-to-br from-red-900/20 to-background-dark border border-white/10 p-12 md:p-24 text-center overflow-hidden">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-serif italic text-white leading-[1.2] tracking-tight">
            Siap Mendominasi Halaman Pertama Google & <br className="hidden md:block" />
            <span className="text-red-400 not-italic font-sans font-black uppercase text-3xl md:text-5xl block mt-4">Mengubah Setiap Klik Menjadi Leads Berkualitas?</span>
          </h2>
        </div>
        <button 
          onClick={() => window.open('https://wa.me/6285177470073', '_blank')}
          className="mt-12 px-12 py-6 bg-red-400 text-background-dark font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl"
        >
          MULAI KAMPANYE ADS SEKARANG
        </button>
      </div>
    </section>
  );
};

export default GoogleAdsPage;
