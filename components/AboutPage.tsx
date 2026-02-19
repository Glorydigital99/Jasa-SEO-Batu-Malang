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
        {/* Hero Section - Optimized with Keywords */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mx-auto lg:mx-0">
            <span className="material-symbols-outlined text-primary text-sm">info</span>
            <span className="text-xs font-black text-primary uppercase tracking-widest">Agensi SEO Malang & Batu</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">
            Tentang <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Glory Digital Agency</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-medium">
            Kami adalah pakar SEO di Malang Raya yang percaya bahwa bisnis lokal layak mendominasi pencarian organik dan tumbuh lebih besar di ruang digital.
          </p>
        </div>

        {/* Mission Card */}
        <div className="relative p-12 md:p-20 rounded-[4rem] bg-surface-dark border border-white/5 overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <span className="material-symbols-outlined text-[200px]">location_city</span>
          </div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl font-black text-white uppercase tracking-widest">Misi Lokal Kami</h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Memberdayakan pengusaha di Batu dan Malang untuk bersaing di level nasional melalui strategi **Jasa SEO** yang berbasis data, audit teknis transparan, dan konten yang relevan dengan market Indonesia.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: "Keahlian", d: "Kami mendalami algoritma Google setiap hari untuk memastikan bisnis Anda tetap di peringkat satu.", i: "psychology" },
            { t: "Konsistensi", d: "Laporan transparan setiap bulan dengan metode SEO 'white-hat' yang aman jangka panjang.", i: "verified_user" },
            { t: "Dampak", d: "Fokus kami bukan cuma trafik, tapi konversi nyata bagi pertumbuhan bisnis Anda.", i: "trending_up" }
          ].map((v, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-surface-darker border border-white/5 hover:border-primary/20 transition-all">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">{v.i}</span>
              <h3 className="text-xl font-black text-white mb-4 uppercase tracking-wider">{v.t}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>

        {/* NAP Consistency Section - Krusial buat Local SEO */}
        <div className="pt-12 border-t border-white/5 text-center lg:text-left">
          <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-widest italic">Basecamp Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-500">
            <div className="flex items-center justify-center lg:justify-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/5">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <div className="text-left">
                <p className="text-xs uppercase font-bold text-gray-400">Alamat</p>
                <p className="text-white font-medium">JL. Imam Bonjol No. 2, Batu, Jawa Timur 65333</p>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4 p-6 rounded-3xl bg-white/5 border border-white/5">
              <span className="material-symbols-outlined text-primary">call</span>
              <div className="text-left">
                <p className="text-xs uppercase font-bold text-gray-400">Hubungi Kami</p>
                <p className="text-white font-medium">+62 851-7747-0073</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;