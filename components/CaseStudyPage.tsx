
import React from 'react';

interface CaseStudyPageProps {
  onBack: () => void;
  onSelectCase?: (id: string) => void;
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ onBack, onSelectCase }) => {
  const cases = [
    {
      id: "case-emerald",
      title: "Emerald Park: Dominasi Pasar Properti",
      category: "Real Estate",
      result: "+320% Lead WhatsApp",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=75&w=600",
      description: "Optimasi SEO lokal dan audit teknis menyeluruh yang berhasil menempatkan Emerald Park di peringkat #1 untuk kata kunci 'Apartemen Mewah Jakarta'."
    },
    {
      id: "case-techflow",
      title: "TechFlow SaaS: Ekspansi Global",
      category: "Technology",
      result: "+450% Trafik Organik",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=75&w=600",
      description: "Strategi content marketing berbasis data yang menargetkan audiens B2B internasional, meningkatkan authority domain secara signifikan."
    },
    {
      id: "case-urban",
      title: "Urban Living: Revolusi E-Commerce",
      category: "Retail",
      result: "ROI 3.5x Lipat",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=75&w=600",
      description: "Redesign website dengan fokus pada kecepatan muat dan UI/UX modern, berhasil menurunkan bounce rate hingga 40%."
    },
    {
      id: "case-luxe",
      title: "Luxe Travel: Eksplorasi Premium",
      category: "Hospitality",
      result: "+210% Booking",
      image: "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?auto=format&fit=crop&q=75&w=600",
      description: "Kampanye SEO musiman dan optimasi konten visual yang meningkatkan reservasi paket liburan premium secara organik."
    },
    {
      id: "case-health",
      title: "HealthLink: Otoritas Medis",
      category: "Healthcare",
      result: "1.2M Trafik/Bulan",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=75&w=600",
      description: "Penerapan standar E-A-T ketat yang menjadikan HealthLink sebagai sumber informasi medis nomor satu di Asia Tenggara."
    },
    {
      id: "case-eco",
      title: "EcoStore: Fashion Berkelanjutan",
      category: "Fashion",
      result: "#1 Green Keywords",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=75&w=600",
      description: "Strategi 'Ethical Backlinking' yang menghubungkan brand dengan komunitas lingkungan, mendominasi ceruk fashion ramah lingkungan."
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

      <div className="space-y-16">
        <div className="text-center md:text-left space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
            <span className="material-symbols-outlined text-primary text-sm">stars</span>
            <span className="text-xs font-black text-primary uppercase tracking-widest">Success Stories</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
            Bukti Nyata <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Pertumbuhan Eksponensial</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Kami telah membantu ratusan brand di berbagai industries untuk melampaui target pertumbuhan mereka melalui strategi digital yang presisi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cases.map((item, i) => (
            <div key={i} className="group relative bg-surface-dark/40 border border-white/5 rounded-[3rem] overflow-hidden hover:border-primary/20 transition-all duration-500 flex flex-col">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                   <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40 flex items-center justify-center text-primary scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <span className="material-symbols-outlined">visibility</span>
                   </div>
                </div>
              </div>
              
              <div className="p-8 space-y-6 flex-grow flex flex-col">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-white/5 text-[10px] font-black text-gray-400 uppercase tracking-widest rounded-full border border-white/5">
                    {item.category}
                  </span>
                  <span className="text-primary font-black text-sm">
                    {item.result}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
                
                <button 
                  onClick={() => onSelectCase && onSelectCase(item.id)}
                  className="pt-4 flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-widest group-hover:gap-4 transition-all"
                >
                  <span>Lihat Detail Studi Kasus</span>
                  <span className="material-symbols-outlined text-sm text-primary">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Achievement Banner */}
        <div className="mt-20 p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-surface-dark to-background-dark border border-white/5 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-primary/5 blur-[100px]"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-black text-white mb-2">500+</div>
              <div className="text-xs font-black text-gray-500 uppercase tracking-widest">Project Selesai</div>
            </div>
            <div>
              <div className="text-5xl font-black text-primary mb-2">4.9/5</div>
              <div className="text-xs font-black text-gray-500 uppercase tracking-widest">Rating Client</div>
            </div>
            <div>
              <div className="text-5xl font-black text-white mb-2">12+</div>
              <div className="text-xs font-black text-gray-500 uppercase tracking-widest">Negara Terjangkau</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPage;
