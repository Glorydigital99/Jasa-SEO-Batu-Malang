
import React from 'react';

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  return (
    <section className="px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-12 group font-bold text-xs tracking-widest uppercase">
        <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
        <span>Kembali ke Beranda</span>
      </button>

      <div className="max-w-4xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mx-auto lg:mx-0">
            <span className="material-symbols-outlined text-primary text-sm">info</span>
            <span className="text-xs font-black text-primary uppercase tracking-widest">Our Story</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">
            Tentang <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Glory Digital</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-medium">
            Kami adalah kumpulan pemimpi, insinyur data, dan perancang kreatif yang percaya bahwa setiap bisnis layak mendominasi ruang digital mereka sendiri.
          </p>
        </div>

        {/* Mission Card */}
        <div className="relative p-12 md:p-20 rounded-[4rem] bg-surface-dark border border-white/5 overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <span className="material-symbols-outlined text-[200px]">rocket_launch</span>
          </div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl font-black text-white uppercase tracking-widest">Misi Kami</h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Membantu brand paling ambisius di dunia untuk tumbuh secara berkelanjutan melalui strategi SEO yang berbasis data, desain yang intuitif, dan teknologi web yang berperforma tinggi. Kami tidak sekadar mengejar klik, kami mengejar dampak bisnis yang nyata.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: "Inovasi", d: "Kami terus bereksperimen dengan algoritma terbaru untuk menjaga klien kami tetap di depan.", i: "psychology" },
            { t: "Integritas", d: "Transparansi penuh dalam pelaporan dan etika kerja SEO 'white-hat'.", i: "verified_user" },
            { t: "Hasil", d: "Orientasi utama kami adalah ROI klien, bukan sekadar angka vanitas.", i: "trending_up" }
          ].map((v, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-surface-darker border border-white/5 hover:border-primary/20 transition-all">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">{v.i}</span>
              <h3 className="text-xl font-black text-white mb-4 uppercase tracking-wider">{v.t}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
