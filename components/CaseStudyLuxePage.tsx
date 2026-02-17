
import React from 'react';

interface CaseStudyLuxePageProps {
  onBack: () => void;
}

const CaseStudyLuxePage: React.FC<CaseStudyLuxePageProps> = ({ onBack }) => {
  return (
    <section className="px-6 py-12 animate-in fade-in zoom-in-95 duration-500">
      <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-amber-400 transition-colors mb-12 group font-bold text-sm tracking-widest uppercase">
        <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
        <span>Kembali ke Studi Kasus</span>
      </button>

      <div className="space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-xs font-black text-amber-500 uppercase tracking-widest">Hospitality Excellence</span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">Luxe Travel</h1>
            <p className="text-xl text-gray-400 leading-relaxed italic">"Menciptakan pengalaman visual yang menginspirasi petualangan."</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-surface-dark rounded-3xl border border-white/5">
                <div className="text-3xl font-black text-amber-500">+210%</div>
                <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Online Booking</div>
              </div>
              <div className="p-6 bg-surface-dark rounded-3xl border border-white/5">
                <div className="text-3xl font-black text-white">45k</div>
                <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Monthly Leads</div>
              </div>
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
            <img src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?auto=format&fit=crop&q=75&w=800" className="w-full h-full object-cover" alt="Luxe Travel" decoding="async" loading="lazy" />
          </div>
        </div>

        <div className="bg-surface-dark/40 rounded-[3rem] p-12 border border-white/5 space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-black text-white">Strategi Konten Visual</h2>
            <p className="text-gray-400">Industri travel adalah tentang aspirasi. Kami merombak total arsitektur informasi website untuk mengedepankan konten visual berkualitas tinggi tanpa mengorbankan kecepatan akses.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "Image SEO", d: "Optimasi metadata untuk 5,000+ aset gambar destinasi premium.", i: "image_search" },
              { t: "Seasonal Campaigns", d: "Strategi kata kunci musiman yang menargetkan tren liburan spesifik.", i: "calendar_month" },
              { t: "Mobile Conversion", d: "Mempermudah proses booking melalui antarmuka seluler yang responsif.", i: "phone_iphone" }
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <span className="material-symbols-outlined text-amber-500 text-4xl">{item.i}</span>
                <h4 className="text-xl font-black text-white">{item.t}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyLuxePage;
