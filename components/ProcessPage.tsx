
import React from 'react';

interface ProcessPageProps {
  onBack: () => void;
}

const ProcessPage: React.FC<ProcessPageProps> = ({ onBack }) => {
  const steps = [
    {
      phase: "Fase 01",
      title: "Discovery & Audit",
      description: "Kami mulai dengan membedah data. Menggunakan AI dan tool internal, kami menganalisis performa teknis, profil backlink, dan posisi kompetitor Anda saat ini.",
      icon: "search_insights",
      deliverables: ["Technical Audit Report", "Competitor Benchmark", "Initial Keyword Map"],
      color: "border-primary/30"
    },
    {
      phase: "Fase 02",
      title: "Strategic Roadmap",
      description: "Berdasarkan temuan, kami menyusun rencana pertumbuhan jangka panjang. Kami menentukan kata kunci 'money makers' dan strategi konten yang akan mendominasi pasar.",
      icon: "map",
      deliverables: ["6-Month Growth Plan", "Content Strategy Guide", "Conversion Funnel Mapping"],
      color: "border-emerald-400/30"
    },
    {
      phase: "Fase 03",
      title: "Technical Engineering",
      description: "Tim teknis kami memperbaiki 'mesin' website Anda. Fokus pada Core Web Vitals, Schema Markup, dan optimasi arsitektur untuk memastikan crawlability maksimal.",
      icon: "handyman",
      deliverables: ["Performance Optimization", "Structural SEO Fixes", "Mobile-First UX Updates"],
      color: "border-blue-400/30"
    },
    {
      phase: "Fase 04",
      title: "Content & Authority",
      description: "Kami memproduksi konten pilar yang otoritatif dan membangun profil backlink berkualitas tinggi melalui kampanye PR digital yang etis.",
      icon: "auto_awesome",
      deliverables: ["Premium Content Assets", "High-DA Backlinks", "Brand Authority Boost"],
      color: "border-purple-400/30"
    },
    {
      phase: "Fase 05",
      title: "Scale & Optimize",
      description: "SEO adalah proses berkelanjutan. Kami terus memantau peringkat, melakukan A/B testing, dan menyesuaikan strategi untuk memaksimalkan ROI secara eksponensial.",
      icon: "trending_up",
      deliverables: ["Monthly Performance ROI", "Ongoing CRO Testing", "Market Dominance Scaling"],
      color: "border-rose-400/30"
    }
  ];

  return (
    <section className="px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Back Link */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-12 group font-bold text-sm tracking-widest uppercase"
      >
        <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
        <span>Kembali ke Beranda</span>
      </button>

      <div className="space-y-24">
        {/* Header */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
            <span className="material-symbols-outlined text-primary text-sm">precision_manufacturing</span>
            <span className="text-xs font-black text-primary uppercase tracking-widest">Growth Engine</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
            Metodologi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Pertumbuhan Teruji</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed italic border-l-4 border-primary/20 pl-6">
            "Kami tidak percaya pada keajaiban. Kami percaya pada data, teknik yang presisi, dan konsistensi yang tak kenal lelah."
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative space-y-12">
          {/* Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-[2.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-emerald-500 to-transparent opacity-20"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative lg:pl-32 group">
              {/* Circle Marker */}
              <div className="hidden lg:flex absolute left-0 top-0 w-20 h-20 rounded-full bg-background-dark border border-white/10 items-center justify-center z-10 group-hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-3xl text-gray-500 group-hover:text-primary transition-colors">{step.icon}</span>
              </div>

              <div className={`p-8 md:p-12 rounded-[3rem] bg-surface-dark/40 border ${step.color} backdrop-blur-sm hover:bg-surface-dark transition-all duration-500`}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-7 space-y-6">
                    <span className="text-xs font-black text-primary uppercase tracking-[0.3em]">{step.phase}</span>
                    <h3 className="text-3xl md:text-4xl font-black text-white">{step.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>
                  </div>
                  
                  <div className="lg:col-span-5 space-y-6 lg:border-l border-white/5 lg:pl-12">
                    <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Key Deliverables:</h4>
                    <ul className="space-y-4">
                      {step.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-primary text-sm">done_all</span>
                          <span className="text-sm font-bold text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Banner */}
        <div className="relative rounded-[4rem] bg-gradient-to-br from-surface-dark to-background-dark border border-white/10 p-12 md:p-24 overflow-hidden text-center">
          <div className="absolute inset-0 bg-primary/5 blur-[120px] pointer-events-none"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white">Siap Memulai <br/> Fase Pertama?</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Jadwalkan panggilan konsultasi strategi gratis dan biarkan kami menunjukkan bagaimana metodologi kami dapat mengubah bisnis Anda.
            </p>
            <button 
              onClick={() => window.open('https://wa.me/6285177470073', '_blank')}
              className="px-12 py-6 bg-primary text-background-dark font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(19,236,91,0.2)]"
            >
              KONSULTASI STRATEGI SEKARANG
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessPage;
