
import React from 'react';

interface ServicesProps {
  onNavigate?: (page: 'home' | 'service-web' | 'audit-improvement' | 'design-grafis' | 'redesign-web' | 'all-services') => void;
}

const services = [
  {
    id: 'service-web',
    title: 'Pembuatan Website',
    description: 'Kami membangun website berperforma tinggi, SEO-friendly, dan berorientasi konversi.',
    icon: 'web'
  },
  {
    id: 'design-grafis',
    title: 'Design Grafis',
    description: 'Solusi branding visual mulai dari logo hingga identitas media sosial yang memukau.',
    icon: 'brush'
  },
  {
    id: 'redesign-web',
    title: 'Design Ulang Website',
    description: 'Transformasikan website lama Anda menjadi modern, cepat, dan lebih menjual.',
    icon: 'history_edu'
  },
  {
    id: 'audit-improvement',
    title: 'SEO Audit',
    description: 'Analisis mendalam kesehatan website Anda untuk dominasi hasil pencarian Google.',
    icon: 'troubleshoot'
  }
];

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Layanan Kami</h2>
        <p className="text-gray-400 text-sm">Strategi digital menyeluruh untuk akselerasi bisnis Anda.</p>
      </div>

      <div className="flex flex-col gap-3">
        {services.map((service) => (
          <div 
            key={service.id} 
            onClick={() => {
              if (onNavigate) {
                onNavigate(service.id as any);
              }
            }}
            className="group flex gap-4 p-5 rounded-3xl bg-surface-dark border border-white/5 hover:border-primary/30 hover:bg-surface-dark/80 transition-all duration-300 cursor-pointer"
          >
            <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-background-dark text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
              <span className="material-symbols-outlined text-xl">{service.icon}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-[11px] text-gray-500 leading-tight">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4">
        <button 
          onClick={() => onNavigate && onNavigate('all-services')}
          className="flex items-center gap-2 text-primary font-black text-xs hover:translate-x-2 transition-transform uppercase tracking-widest"
        >
          <span>Lihat Detail Layanan</span>
          <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
        </button>
      </div>
    </div>
  );
};

export default Services;
