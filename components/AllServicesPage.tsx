
import React from 'react';

interface AllServicesPageProps {
  onBack: () => void;
  onNavigate: (page: string) => void;
}

const services = [
  {
    id: 'service-web',
    title: "Web Development",
    icon: "web",
    category: "Development",
    desc: "Pembuatan website premium dengan fokus pada kecepatan, keamanan, dan user experience kelas dunia.",
    color: "text-primary"
  },
  {
    id: 'audit-improvement',
    title: "SEO Strategy",
    icon: "troubleshoot",
    category: "Marketing",
    desc: "Audit mendalam dan optimasi berkelanjutan untuk mendominasi peringkat teratas mesin pencari.",
    color: "text-emerald-400"
  },
  {
    id: 'design-grafis',
    title: "Graphic Design",
    icon: "brush",
    category: "Creative",
    desc: "Desain visual yang memperkuat identitas brand, dari logo hingga konten media sosial yang estetik.",
    color: "text-blue-400"
  },
  {
    id: 'redesign-web',
    title: "UI/UX Redesign",
    icon: "history_edu",
    category: "Creative",
    desc: "Modernisasi website lama Anda untuk meningkatkan konversi dan memberikan kesan profesional.",
    color: "text-orange-400"
  },
  {
    id: 'google-ads',
    title: "Google Ads (SEM)",
    icon: "ads_click",
    category: "Ads",
    desc: "Kampanye iklan berbayar yang ditargetkan secara presisi untuk hasil instan dan ROI yang terukur.",
    color: "text-red-400"
  },
  {
    id: 'content-writing',
    title: "Content Writing",
    icon: "edit_note",
    category: "Marketing",
    desc: "Penulisan artikel dan konten pilar yang SEO-friendly untuk membangun otoritas bisnis Anda.",
    color: "text-purple-400"
  },
  {
    id: 'social-media',
    title: "Social Media Mgmt",
    icon: "share",
    category: "Marketing",
    desc: "Pengelolaan akun media sosial secara profesional untuk meningkatkan engagement dan brand awareness.",
    color: "text-pink-400"
  },
  {
    id: 'branding',
    title: "Branding Strategy",
    icon: "verified",
    category: "Creative",
    desc: "Konsultasi dan pengembangan identitas brand yang membedakan Anda dari kompetitor.",
    color: "text-amber-400"
  }
];

const AllServicesPage: React.FC<AllServicesPageProps> = ({ onBack, onNavigate }) => {
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

      <div className="space-y-16">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
            <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
            <span className="text-xs font-black text-primary uppercase tracking-widest">Our Capabilities</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
            Ekosistem Layanan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Paling Komprehensif</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
            Dari strategi teknis hingga eksekusi kreatif, kami menyediakan solusi 360 derajat untuk memastikan bisnis Anda tidak hanya bertahan, tapi mendominasi pasar digital.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div 
              key={i} 
              onClick={() => {
                onNavigate(service.id);
              }}
              className={`group p-8 rounded-[2.5rem] bg-surface-dark border border-white/5 hover:border-primary/20 hover:bg-surface-dark/80 transition-all duration-300 cursor-pointer flex flex-col`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-background-dark flex items-center justify-center ${service.color} mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-background-dark transition-all`}>
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
              
              <div className="space-y-4 flex-grow">
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{service.category}</span>
                  <h3 className="text-xl font-black text-white group-hover:text-primary transition-colors">{service.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest">
                <span>Pelajari Selengkapnya</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution Banner */}
        <div className="relative rounded-[4rem] bg-gradient-to-br from-surface-dark to-background-dark border border-white/5 p-12 md:p-20 overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-[200px]">hub</span>
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-6 max-w-xl text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-white">Butuh Solusi Kustom?</h2>
              <p className="text-gray-400">Setiap bisnis itu unik. Kami dapat merancang paket layanan yang disesuaikan khusus dengan kebutuhan industri dan target audiens Anda.</p>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/6285177470073', '_blank')}
              className="px-12 py-6 bg-primary text-background-dark font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(19,236,91,0.2)]"
            >
              HUBUNGI KONSULTAN KAMI
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllServicesPage;
