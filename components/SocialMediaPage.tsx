
import React from 'react';

interface SocialMediaPageProps {
  onBack: () => void;
}

const SocialMediaPage: React.FC<SocialMediaPageProps> = ({ onBack }) => {
  return (
    <section className="px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-pink-400 transition-colors mb-12 group font-bold text-xs tracking-widest uppercase">
        <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
        <span>Kembali ke Layanan</span>
      </button>

      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-pink-500/10 border border-pink-500/20 rounded-full mx-auto">
            <span className="material-symbols-outlined text-pink-400 text-sm">share</span>
            <span className="text-xs font-black text-pink-400 uppercase tracking-widest">Brand Engagement</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">SOCIAL <span className="text-pink-400 italic">ORCHESTRA</span></h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium">
            Ubah pengikut menjadi komunitas yang loyal melalui konten visual yang memukau dan strategi interaksi yang manusiawi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square bg-surface-dark rounded-[3rem] border border-white/5 p-12 flex flex-col justify-between group">
            <span className="material-symbols-outlined text-6xl text-pink-400/20 group-hover:text-pink-400 transition-colors">camera_alt</span>
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-white">Visual Storytelling</h3>
              <p className="text-gray-500 text-sm">Desain feed, stories, dan reels yang merefleksikan identitas brand Anda secara konsisten.</p>
            </div>
          </div>
          <div className="aspect-square bg-surface-dark rounded-[3rem] border border-white/5 p-12 flex flex-col justify-between group">
            <span className="material-symbols-outlined text-6xl text-pink-400/20 group-hover:text-pink-400 transition-colors">forum</span>
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-white">Community Mgmt</h3>
              <p className="text-gray-500 text-sm">Moderasi komentar, membalas DM dengan cepat, dan membangun hubungan bermakna dengan audiens.</p>
            </div>
          </div>
        </div>

        <div className="relative rounded-[4rem] bg-gradient-to-br from-pink-900/20 to-background-dark border border-white/10 p-12 md:p-24 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">Buat Brand Anda <br/> Menjadi Pembicaraan</h2>
          <button 
            onClick={() => window.open('https://wa.me/6285177470073', '_blank')}
            className="px-12 py-6 bg-pink-500 text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            KONSULTASI SOCIAL MEDIA
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaPage;
