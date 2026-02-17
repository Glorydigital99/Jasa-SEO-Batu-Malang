
import React from 'react';

const allServices = [
  {
    title: "SEO On-Page",
    icon: "article",
    desc: "Optimasi konten, struktur HTML, dan peningkatan pengalaman pengguna agar relevan bagi audiens dan Google."
  },
  {
    title: "Technical SEO",
    icon: "settings_suggest",
    desc: "Perbaikan aspek vital seperti kecepatan web, mobile-friendliness, crawlability, indexing, hingga arsitektur kode."
  },
  {
    title: "Keyword Intelligence",
    icon: "search_insights",
    desc: "Riset mendalam kata kunci potensial dan strategi penempatan untuk menjangkau audiens di waktu yang tepat."
  },
  {
    title: "SEO Comprehensive Audit",
    icon: "troubleshoot",
    desc: "Analisis menyeluruh kondisi website untuk menemukan hambatan teknis yang menahan performa peringkat Anda."
  },
  {
    title: "SEO Content Writing",
    icon: "edit_note",
    desc: "Pembuatan konten pilar berkualitas tinggi yang dirancang untuk menarik, mengedukasi, dan mengonversi target pasar."
  },
  {
    title: "Authority Link Building",
    icon: "link",
    desc: "Strategi mendapatkan backlink berkualitas dari situs bereputasi tinggi untuk meningkatkan kredibilitas domain Anda."
  },
  {
    title: "Local SEO Mastery",
    icon: "location_on",
    desc: "Optimasi kehadiran bisnis Anda di pencarian lokal dan Google Maps untuk mendominasi pasar geografis terdekat."
  },
  {
    title: "E-Commerce SEO",
    icon: "shopping_bag",
    desc: "Solusi khusus toko online: optimasi halaman produk, navigasi kategori, hingga penyempurnaan alur checkout."
  }
];

const DetailedServices: React.FC = () => {
  return (
    <section className="py-24 space-y-16">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="space-y-6 lg:max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
            <span className="material-symbols-outlined text-primary text-sm">construction</span>
            <span className="text-xs font-black text-primary uppercase tracking-widest">Full-Stack SEO Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">Sekarang Giliran <span className="text-primary">Bisnis Anda</span> untuk Tumbuh</h2>
          <p className="text-lg text-gray-400">Klien kami sudah merasakan lonjakan trafik dan konversi. Sekarang giliran Anda memilih layanan SEO yang sesuai dengan kebutuhan skala bisnis Anda.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allServices.map((s, i) => (
          <div key={i} className="group p-8 rounded-[2.5rem] bg-surface-dark/60 border border-white/5 hover:border-primary/20 hover:bg-surface-dark transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-background-dark flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-background-dark transition-all">
              <span className="material-symbols-outlined text-2xl">{s.icon}</span>
            </div>
            <h3 className="text-lg font-black text-white mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="p-12 rounded-[3.5rem] bg-gradient-to-br from-surface-dark to-background-dark border border-white/5 text-center space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/5 blur-[100px]"></div>
        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed relative z-10 italic">
          "Setiap bisnis punya kebutuhan berbeda, dan di sinilah peran tim <span className="text-white font-bold">GLORY DIGITAL</span> untuk membantu memilih serta menjalankan kombinasi layanan yang paling efektif. Selain SEO, Anda juga dapat memaksimalkan hasil melalui layanan Google Ads, Meta Ads, dan Marketplace Ads yang saling melengkapi."
        </p>
        <button 
          onClick={() => window.open('https://wa.me/6285177470073', '_blank')}
          className="relative z-10 px-10 py-5 bg-white text-background-dark font-black rounded-2xl hover:scale-105 transition-all shadow-2xl"
        >
          KONSULTASI STRATEGI SEKARANG
        </button>
      </div>
    </section>
  );
};

export default DetailedServices;
