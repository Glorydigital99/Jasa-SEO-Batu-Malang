
import React from 'react';

interface AuditImprovementPageProps {
  onBack: () => void;
}

const AuditImprovementPage: React.FC<AuditImprovementPageProps> = ({ onBack }) => {
  const auditFeatures = [
    {
      title: "Technical SEO Audit",
      icon: "settings_suggest",
      desc: "Bedah tuntas lebih dari 100+ parameter teknis termasuk arsitektur situs, crawlability, dan indexing.",
      highlights: ["XML Sitemap Fix", "Robots.txt Analysis", "Schema Markup Setup"]
    },
    {
      title: "Core Web Vitals",
      icon: "speed",
      desc: "Optimasi kecepatan ekstrem untuk memastikan website Anda dimuat dalam hitungan milidetik.",
      highlights: ["LCP Improvement", "FID Optimization", "Image Compression Next-Gen"]
    },
    {
      title: "Competitor Intelligence",
      icon: "travel_explore",
      desc: "Analisis mendalam strategi kata kunci dan profil backlink kompetitor terberat Anda.",
      highlights: ["Keyword Gap Analysis", "Backlink Audit", "Market Share Report"]
    }
  ];

  const improvementSteps = [
    { n: "01", t: "Scanning", d: "Kami menjalankan bot crawler internal kami untuk mendeteksi setiap error tersembunyi." },
    { n: "02", t: "Prioritizing", d: "Menyusun peta jalan berdasarkan dampak terbesar pada pertumbuhan trafik." },
    { n: "03", t: "Execution", d: "Tim teknis kami melakukan perbaikan langsung pada CMS atau kode website Anda." },
    { n: "04", t: "Monitoring", d: "Pelaporan real-time tentang pemulihan peringkat dan kenaikan trafik." }
  ];

  const handleAuditClick = () => {
    onBack();
    setTimeout(() => {
      const element = document.getElementById('audit-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Back Link */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-12 group font-bold text-sm tracking-widest uppercase"
      >
        <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
        <span>Kembali ke Beranda</span>
      </button>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <span className="material-symbols-outlined text-emerald-400 text-sm">troubleshoot</span>
            <span className="text-xs font-black text-emerald-400 uppercase tracking-widest">Performance Engineering</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
            Optimasi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-primary">Tanpa Batas</span>
          </h1>
          
          <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
            Jangan biarkan kesalahan teknis menghambat potensi bisnis Anda. Layanan Audit & Improvement kami dirancang untuk mengubah website yang lambat menjadi mesin pertumbuhan yang tangguh.
          </p>

          <div className="flex flex-col items-start gap-4">
            <button 
              onClick={handleAuditClick}
              className="px-10 py-5 bg-emerald-500 text-background-dark font-black rounded-2xl hover:scale-105 transition-all shadow-lg shadow-emerald-500/20"
            >
              Jalankan Audit AI Sekarang
            </button>
            
            {/* Highlighted Policy Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded-lg">
              <span className="material-symbols-outlined text-red-500 text-xs">info</span>
              <p className="text-[9px] text-red-500 font-black uppercase tracking-[0.15em] leading-none">
                Komitmen minimal 1 tahun untuk hasil optimal
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square bg-surface-darker rounded-[3rem] border border-white/5 p-8 flex items-center justify-center overflow-hidden">
            <div className="w-full space-y-6">
              <div className="flex items-center justify-between text-xs font-black uppercase tracking-[0.2em] text-gray-500">
                <span>Real-time Technical Scan</span>
                <span className="text-emerald-400 animate-pulse">Scanning...</span>
              </div>
              <div className="space-y-4">
                {[75, 92, 45, 88].map((w, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold text-white/50 uppercase">
                      <span>{["HTTPS Status", "Meta Tags", "Internal Links", "Server Speed"][i]}</span>
                      <span>{w}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400" style={{ width: `${w}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-white/5">
                <p className="text-[10px] text-emerald-400/70 font-mono">
                  &gt; Analyzed 1,420 pages...<br />
                  &gt; Detected 14 critical errors in sitemap...<br />
                  &gt; Canonical tags missing on blog pages...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Pillars */}
      <div className="space-y-16 mb-32">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Pilar Perbaikan Strategis</h2>
          <p className="text-gray-400 max-w-2xl mx-auto italic">Kami melakukan lebih dari sekadar mengidentifikasi masalah; kami memberikan solusi teknis yang dapat dieksekusi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {auditFeatures.map((feature, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-surface-dark border border-white/5 hover:border-emerald-500/20 transition-all group flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-background-dark flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{feature.desc}</p>
              
              <div className="space-y-3 pt-6 border-t border-white/5">
                {feature.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step by Step Process */}
      <div className="bg-surface-dark/40 rounded-[3.5rem] border border-white/5 p-12 md:p-24 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-3xl font-black text-white uppercase leading-none">
              Proses <br /> <span className="text-emerald-400">Transformasi</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Metodologi kami teruji secara klinis untuk memberikan hasil yang stabil dan berkelanjutan dalam jangka panjang.
            </p>
            <div className="pt-6">
               <div className="flex items-center gap-4 p-4 rounded-2xl bg-background-dark border border-white/5">
                 <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-400">
                    <span className="material-symbols-outlined">schedule</span>
                 </div>
                 <div>
                   <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Time to Result</div>
                   <div className="text-lg font-black text-white">4 - 8 Minggu</div>
                 </div>
               </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {improvementSteps.map((step, i) => (
              <div key={i} className="space-y-4">
                <div className="text-4xl font-black text-emerald-400/20">{step.n}</div>
                <h4 className="text-xl font-black text-white uppercase tracking-tight">{step.t}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-32 text-center py-20 border-y border-white/5">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
          Website Anda Layak <br />
          <span className="text-emerald-400">Mendapatkan Peringkat Terbaik</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Ambil langkah pertama menuju dominasi pasar dengan audit teknis mendalam yang mengidentifikasi peluang pertumbuhan yang Anda lewatkan.
        </p>
        <div className="flex flex-col items-center gap-6">
          <button 
            onClick={handleAuditClick}
            className="px-16 py-6 bg-white text-background-dark font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(16,185,129,0.2)]"
          >
            MULAI AUDIT GRATIS
          </button>
          
          {/* Highlighted Policy Box for Footer CTA */}
          <div className="flex items-center gap-2 px-4 py-2 bg-red-500/5 border border-red-500/10 rounded-xl">
             <span className="material-symbols-outlined text-red-500 text-sm">gavel</span>
             <p className="text-[10px] text-red-500 font-black uppercase tracking-[0.2em]">
               Penting: Komitmen layanan minimal 1 tahun
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditImprovementPage;