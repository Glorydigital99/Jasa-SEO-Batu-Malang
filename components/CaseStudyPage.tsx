import React, { useEffect } from 'react';

interface CaseStudyPageProps {
  onBack: () => void;
  onSelectCase?: (id: string) => void;
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ onBack, onSelectCase }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cases = [
    {
      id: "case-emerald",
      title: "Emerald Park: Dominasi Pasar Properti",
      category: "Real Estate SEO",
      result: "+320% Lead WhatsApp",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=75&w=600",
      description: "Optimasi SEO lokal di Batu-Malang yang berhasil menempatkan brand ini di peringkat #1 pencarian organik."
    },
    {
      id: "case-techflow",
      title: "TechFlow SaaS: Ekspansi Global",
      category: "B2B Technology",
      result: "+450% Trafik Organik",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=75&w=600",
      description: "Strategi content marketing berbasis data yang meningkatkan authority domain secara signifikan dalam 6 bulan."
    },
    {
      id: "case-urban",
      title: "Urban Living: Revolusi E-Commerce",
      category: "Retail Strategy",
      result: "ROI 3.5x Lipat",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=75&w=600",
      description: "Redesign website fokus pada Core Web Vitals, menurunkan bounce rate hingga 40% secara drastis."
    },
    {
      id: "case-luxe",
      title: "Luxe Travel: Eksplorasi Premium",
      category: "Hospitality SEO",
      result: "+210% Booking",
      image: "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?auto=format&fit=crop&q=75&w=600",
      description: "Kampanye SEO musiman untuk destinasi wisata premium yang meningkatkan reservasi organik."
    },
    {
      id: "case-health",
      title: "HealthLink: Otoritas Medis",
      category: "Healthcare E-E-A-T",
      result: "1.2M Trafik/Bulan",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=75&w=600",
      description: "Penerapan standar E-E-A-T ketat yang menjadikan brand ini sumber informasi medis terpercaya."
    },
    {
      id: "case-eco",
      title: "EcoStore: Fashion Berkelanjutan",
      category: "Green Marketing",
      result: "#1 Green Keywords",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=75&w=600",
      description: "Strategi Ethical Backlinking yang mendominasi ceruk fashion ramah lingkungan di Indonesia."
    }
  ];

  return (
    <section className="relative z-10 block w-full opacity-100 visible py-10 selection:bg-primary/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-primary transition-all mb-12 group font-bold text-xs tracking-widest uppercase relative z-20"
        >
          <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
          <span>Kembali ke Beranda</span>
        </button>

        <div className="space-y-16">
          {/* Header Section */}
          <div className="text-left space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
              <span className="material-symbols-outlined text-primary text-sm">stars</span>
              <span className="text-[10px] font-black text-primary uppercase tracking-widest">Our Expertise</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tighter">
              Bukti Nyata <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Strategi SEO Kami</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium">
              Lihat bagaimana **Glory Digital** membantu berbagai industri mendominasi pencarian dan mencapai ROI maksimal.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((item, i) => (
              <div 
                key={i} 
                className="group relative bg-surface-dark/40 border border-white/5 rounded-[3rem] overflow-hidden flex flex-col min-h-[500px] shadow-2xl transition-all hover:border-primary/20 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] w-full relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`${item.title} Case Study Glory Digital`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
                </div>
                
                <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="px-3 py-1 bg-primary/10 text-[9px] font-black text-primary uppercase tracking-widest rounded-full border border-primary/10">
                        {item.category}
                      </span>
                      <span className="text-emerald-400 font-black text-xs">
                        {item.result}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-black text-white group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </h2>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => onSelectCase && onSelectCase(item.id)}
                    className="pt-6 border-t border-white/5 flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-widest group-hover:gap-4 transition-all"
                  >
                    <span>Pelajari Strateginya</span>
                    <span className="material-symbols-outlined text-sm text-primary">trending_up</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof Banner */}
          <div className="mt-20 p-10 md:p-20 rounded-[4rem] bg-surface-dark border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[120px] rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl font-black text-white mb-2 tracking-tighter">500+</div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Audit Selesai</div>
              </div>
              <div>
                <div className="text-5xl font-black text-primary mb-2 tracking-tighter">4.9/5</div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Rating Klien Puas</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white mb-2 tracking-tighter">320%</div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Rata-rata Kenaikan Leads</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPage;