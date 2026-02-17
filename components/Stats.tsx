
import React from 'react';

const stats = [
  { label: 'Trafik Organik', value: '+240%', change: 'Bulan Ini', icon: 'trending_up', color: 'text-primary' },
  { label: 'Kenaikan ROI', value: '3.5x', change: 'Terverifikasi', icon: 'monetization_on', color: 'text-emerald-400' },
  { label: 'Peringkat Kata Kunci', value: '10k+', change: 'Top 3 Pencarian', icon: 'key', color: 'text-primary' },
  { label: 'Kecepatan Lead', value: '+88%', change: 'Pertumbuhan MoM', icon: 'electric_bolt', color: 'text-emerald-400' },
];

const Stats: React.FC = () => {
  return (
    <section className="overflow-x-auto hide-scrollbar -mx-4 px-4 pb-4">
      <div className="flex gap-6 w-max md:w-full md:grid md:grid-cols-4">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className="flex flex-col justify-between w-[200px] md:w-full h-[200px] p-6 rounded-[2rem] bg-surface-dark border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className={`w-10 h-10 rounded-xl bg-background-dark flex items-center justify-center ${stat.color} mb-4`}>
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
            <div className="relative z-10">
              <p className="text-4xl font-black text-white tracking-tight">{stat.value}</p>
              <div className={`flex items-center gap-1 mt-1 font-bold text-xs ${stat.color}`}>
                <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                <span>{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
