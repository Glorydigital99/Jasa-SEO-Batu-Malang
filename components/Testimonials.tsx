
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-white mb-4">Apa Kata Para Pendiri</h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative rounded-[3rem] bg-gradient-to-br from-[#1a2e22] to-[#112217] p-10 overflow-hidden border border-white/5 group">
          <span className="material-symbols-outlined absolute top-8 right-8 text-8xl text-white/5 pointer-events-none group-hover:scale-110 transition-transform">format_quote</span>
          <div className="relative z-10 space-y-8">
            <div className="flex gap-1 text-primary">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="material-symbols-outlined text-sm">star</span>
              ))}
            </div>
            <p className="text-2xl text-white font-medium leading-relaxed italic">
              "Semenjak bekerja sama dengan Glory Digital, trafik organik kami meningkat tiga kali lipat. Pendekatan mereka sangat berbeda dari agensi lain—benar-benar berbasis data."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-surface-dark border-2 border-primary/20 overflow-hidden">
                <img src="https://picsum.photos/seed/sarah/100/100" alt="Sarah" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-black text-lg">Sarah Jenkins</p>
                <p className="text-text-muted font-bold text-sm">CMO di TechFlow</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-[3rem] bg-gradient-to-br from-[#1a2e22] to-[#112217] p-10 overflow-hidden border border-white/5 group">
          <span className="material-symbols-outlined absolute top-8 right-8 text-8xl text-white/5 pointer-events-none group-hover:scale-110 transition-transform">format_quote</span>
          <div className="relative z-10 space-y-8">
            <div className="flex gap-1 text-primary">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="material-symbols-outlined text-sm">star</span>
              ))}
            </div>
            <p className="text-2xl text-white font-medium leading-relaxed italic">
              "Akhirnya, agensi SEO yang memberikan hasil terukur. Kami melihat ROI 3,5x lipat dalam kuartal pertama. Kerja yang luar biasa."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-surface-dark border-2 border-primary/20 overflow-hidden">
                <img src="https://picsum.photos/seed/marcus/100/100" alt="Marcus" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-black text-lg">Marcus Chen</p>
                <p className="text-text-muted font-bold text-sm">Founder, Urban Living</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
