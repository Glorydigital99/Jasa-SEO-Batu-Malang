
import React from 'react';

interface ServiceWebPageProps {
  onBack: () => void;
}

const ServiceWebPage: React.FC<ServiceWebPageProps> = ({ onBack }) => {
  const specializedServices = [
    {
      title: 'Web Design Eksklusif',
      icon: 'brush',
      desc: 'Kami merancang identitas digital yang memukau. Fokus kami adalah menciptakan User Experience (UX) yang mulus dan User Interface (UI) yang modern.',
      features: ['Custom UI/UX Design', 'Interactive Prototypes', 'Responsive System', 'Brand Consistency Audit'],
      color: 'text-primary'
    },
    {
      title: 'Landing Page High-Conversion',
      icon: 'ads_click',
      desc: 'Halaman khusus yang dirancang untuk satu tujuan: Konversi. Sempurna untuk kampanye iklan Google Ads, Meta Ads, atau peluncuran produk.',
      features: ['Persuasive Copywriting', 'Fast Load Optimization', 'Lead Form Integration', 'A/B Testing Ready'],
      color: 'text-emerald-400'
    },
    {
      title: 'E-Commerce Solution',
      icon: 'shopping_cart',
      desc: 'Platform toko online skala enterprise dengan fokus pada kemudahan manajemen inventaris dan keamanan transaksi pelanggan.',
      features: ['Payment Gateway Ready', 'Inventory Management', 'SEO Optimized Catalog', 'Mobile Shopping App'],
      color: 'text-blue-400'
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
            <span className="material-symbols-outlined text-primary text-sm">web</span>
            <span className="text-xs font-black text-primary uppercase tracking-widest">Digital Architecture</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
            Solusi Website <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Tanpa Kompromi</span>
          </h1>
          
          <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
            Dari landing page yang tajam hingga ekosistem desain web yang kompleks, kami menghadirkan teknologi masa depan untuk bisnis Anda hari ini.
          </p>
        </div>

        <div className="relative">
          <div className="aspect-video bg-surface-dark rounded-[2.5rem] border border-white/10 overflow-hidden relative group shadow-2xl">
             <img 
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=75&w=1200" 
              alt="Design Process"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
          </div>
        </div>
      </div>

      {/* Specialized Service Section */}
      <div className="space-y-16 mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-white">Layanan Spesialis</h2>
            <p className="text-gray-400 max-w-xl">Kami membagi keahlian kami menjadi tiga kategori utama untuk memastikan setiap aspek kehadiran digital Anda ditangani oleh ahlinya.</p>
          </div>
          <div className="flex gap-4">
            <div className="p-4 rounded-2xl bg-surface-dark border border-white/10 text-center">
              <div className="text-primary font-black text-2xl">100+</div>
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Project Selesai</div>
            </div>
            <div className="p-4 rounded-2xl bg-surface-dark border border-white/10 text-center">
              <div className="text-emerald-400 font-black text-2xl">98%</div>
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Kepuasan Klien</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specializedServices.map((service, i) => (
            <div key={i} className="group p-8 rounded-[3rem] bg-surface-dark border border-white/5 hover:border-primary/20 transition-all duration-500 flex flex-col h-full">
              <div className={`w-16 h-16 rounded-2xl bg-background-dark flex items-center justify-center ${service.color} mb-8 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
              
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>

              <div className="space-y-3 pt-6 border-t border-white/5">
                <p className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em] mb-4">Fitur Utama:</p>
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className={`material-symbols-outlined text-sm ${service.color}`}>check_circle</span>
                    <span className="text-xs font-bold text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative rounded-[3.5rem] bg-gradient-to-br from-primary/20 to-emerald-500/5 border border-white/10 p-12 md:p-24 overflow-hidden text-center">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <span className="material-symbols-outlined text-[200px]">rocket_launch</span>
        </div>
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Siap Membuat <br /> Perubahan Besar?
          </h2>
          <p className="text-gray-300 text-lg">
            Konsultasikan ide Anda dengan tim ahli kami dan dapatkan penawaran khusus yang dirancang untuk skala bisnis Anda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceWebPage;
