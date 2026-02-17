
import React from 'react';

interface ContentWritingPageProps {
  onBack: () => void;
}

const ContentWritingPage: React.FC<ContentWritingPageProps> = ({ onBack }) => {
  return (
    <section className="px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-purple-400 transition-colors mb-12 group font-bold text-xs tracking-widest uppercase">
        <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
        <span>Kembali ke Layanan</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <span className="material-symbols-outlined text-purple-400 text-sm">edit_note</span>
            <span className="text-xs font-black text-purple-400 uppercase tracking-widest">Authority Marketing</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">Premium <br/><span className="text-purple-400">Copywriting</span></h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
            Kami menulis konten yang tidak hanya disukai oleh mesin pencari, tetapi juga menginspirasi dan mengonversi pembaca menjadi pelanggan setia.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-8 bg-surface-dark rounded-[2.5rem] border border-white/5 space-y-4">
            <span className="material-symbols-outlined text-purple-400 text-4xl">article</span>
            <h4 className="text-lg font-black text-white">SEO Articles</h4>
            <p className="text-xs text-gray-500">Konten pilar yang mendominasi kata kunci informasional.</p>
          </div>
          <div className="p-8 bg-surface-dark rounded-[2.5rem] border border-white/5 space-y-4">
            <span className="material-symbols-outlined text-purple-400 text-4xl">ads_click</span>
            <h4 className="text-lg font-black text-white">Sales Copy</h4>
            <p className="text-xs text-gray-500">Narasi persuasif yang mendorong tindakan instan.</p>
          </div>
        </div>
      </div>

      <div className="bg-surface-dark/40 rounded-[3rem] p-12 border border-white/5 mb-32">
        <h2 className="text-3xl font-black text-white mb-12 text-center uppercase tracking-tighter">Mengapa Konten Kami Berbeda?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-purple-400">check_circle</span>
              <h4 className="font-black text-white">Data-Driven Topics</h4>
            </div>
            <p className="text-sm text-gray-500 pl-8 leading-relaxed">Kami meriset apa yang sebenarnya dicari audiens Anda sebelum mulai menulis satu kata pun.</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-purple-400">check_circle</span>
              <h4 className="font-black text-white">Semantic SEO Optimized</h4>
            </div>
            <p className="text-sm text-gray-500 pl-8 leading-relaxed">Penggunaan LSI keywords dan struktur konten yang memudahkan Google memahami otoritas Anda.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button 
          onClick={() => window.open('https://wa.me/6285177470073', '_blank')}
          className="px-16 py-6 bg-purple-500 text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(168,85,247,0.2)]"
        >
          PESAN KONTEN SEKARANG
        </button>
      </div>
    </section>
  );
};

export default ContentWritingPage;
