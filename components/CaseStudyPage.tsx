import React, { useEffect } from 'react';

interface CaseStudyPageProps {
  onBack: () => void;
  onSelectCase?: (id: string) => void;
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ onBack, onSelectCase }) => {
  // Paksa layar kembali ke posisi paling atas saat halaman ini dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    /* FIX: Kita pakai 'relative z-10 block' dan 'opacity-100' secara eksplisit.
       Gue hapus class 'animate-in' karena itu penyebab utama konten jadi transparan di HP 
       kalau plugin Tailwind Animate lu belum terinstall/terkonfigurasi dengan benar.
    */
    <section className="relative z-10 block w-full opacity-100 visible py-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Tombol Kembali - Pakai 'text-gray-400' biar aman di semua browser */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-primary transition-all mb-12 group font-bold text-xs tracking-widest uppercase relative z-20"
        >
          <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
          <span>Kembali ke Beranda</span>
        </button>

        <div className="space-y-16">
          {/* Judul Halaman */}
          <div className="text-left space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
              <span className="material-symbols-outlined text-primary text-sm">stars</span>
              <span className="text-[10px] font-black text-primary uppercase tracking-widest">Success Stories</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
              Bukti Nyata <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Hasil Kerja Kami</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Strategi digital presisi untuk melampaui target pertumbuhan brand Anda.
            </p>
          </div>

          {/* Grid List - 1 Kolom di HP, 3 di Laptop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {cases.map((item, i) => (
              <div key={i} className="group relative bg-surface-dark/60 border border-white/10 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden flex flex-col min-h-[450px] shadow-2xl transition-all hover:border-primary/20">
                <div className="aspect-[4/3] w-full relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-6 md:p-8 space-y-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="px-3 py-1 bg-white/5 text-[9px] font-black text-gray-400 uppercase tracking-widest rounded-full border border-white/5">
                        {item.category}
                      </span>
                      <span className="text-primary font-black text-xs">
                        {item.result}
                      </span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => onSelectCase && onSelectCase(item.id)}
                    className="pt-4 flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-widest group-hover:gap-4 transition-all"
                  >
                    <span>Lihat Detail</span>
                    <span className="material-symbols-outlined text-sm text-primary">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Banner */}
          <div className="mt-20 p-8 md:p-20 rounded-[3rem] md:rounded-[4rem] bg-gradient-to-br from-surface-dark to-background-dark border border-white/5 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-primary/5 blur-[100px]"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">500+</div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Project Selesai</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">4.9/5</div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Rating Client</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">12+</div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Negara Terjangkau</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPage;