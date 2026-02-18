import React from 'react';

const stats = [
  { label: 'Trafik Organik', value: '+240%', change: 'Bulan Ini', icon: 'trending_up', color: 'text-primary' },
  { label: 'Kenaikan ROI', value: '3.5x', change: 'Terverifikasi', icon: 'monetization_on', color: 'text-emerald-400' },
  { label: 'Peringkat Kata Kunci', value: '10k+', change: 'Top 3 Pencarian', icon: 'key', color: 'text-primary' },
  { label: 'Kecepatan Lead', value: '+88%', change: 'Pertumbuhan MoM', icon: 'electric_bolt', color: 'text-emerald-400' },
];

const Stats: React.FC = () => {
  return (
    <section className="py-10">
      {/* RAHASIA ANTI-KEPOTONG: 
          - Ganti 'flex w-max' jadi 'grid grid-cols-2'. 
          - Di HP jadi 2 baris (2 kiri, 2 kanan), di laptop otomatis jadi 4 kolom sejajar.
      */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className="flex flex-col justify-between w-full h-[180px] md:h-[240px] p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-surface-dark/50 border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 backdrop-blur-sm"
          >
            {/* Ambient Glow Effect (Sama kayak Navbar premium lu) */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-background-dark/80 flex items-center justify-center ${stat.color} mb-3 md:mb-6 border border-white/5 shadow-inner`}>
                <span className="material-symbols-outlined text-xl md:text-2xl">{stat.icon}</span>
              </div>
              <p className="text-gray-400 text-[9px] md:text-xs font-black uppercase tracking-[0.15em] leading-tight">
                {stat.label}
              </p>
            </div>

            <div className="relative z-10 mt-auto">
              <p className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-1">{stat.value}</p>
              <div className={`flex items-center gap-1 font-bold text-[8px] md:text-xs ${stat.color} opacity-80`}>
                <span className="material-symbols-outlined text-[12px] md:text-[16px]">arrow_upward</span>
                <span className="uppercase tracking-wider">{stat.change}</span>
              </div>
            </div>

            {/* Micro-Interaction Decor */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;