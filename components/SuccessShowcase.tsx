
import React from 'react';

const cases = [
  {
    title: "Pabrik Beton Precast",
    stat: "65%",
    label: "Sesi Meningkat",
    desc: "Solusi infrastruktur masif untuk kebutuhan sektor pemerintah. Berhasil melonjak dari 2.283 menjadi 3.774 sesi bulanan.",
    icon: "factory",
    color: "from-emerald-500/20"
  },
  {
    title: "Distributor Panel Surya",
    stat: "4000%",
    label: "Lonjakan Klik",
    desc: "Dominasi pasar energi terbarukan di tengah kompetisi ritel yang sengit. Melejit dari 544 menjadi 22.483 klik bulanan.",
    icon: "solar_power",
    color: "from-blue-500/20"
  },
  {
    title: "Premium Bike Shop",
    stat: "80%",
    label: "Kenaikan Sesi",
    desc: "Persaingan ketat di ceruk perlengkapan hobi dan gaya hidup sehat. Membantu peningkatan dari 2.491 ke 4.667 sesi organik bulanan.",
    icon: "pedal_bike",
    color: "from-primary/20"
  },
  {
    title: "Brand Skincare Lokal",
    stat: "1000x",
    label: "Pertumbuhan Masif",
    desc: "Menantang dominasi brand kecantikan global di hasil pencarian organik. Dari hanya 11 sesi menjadi 14.337 sesi per bulan.",
    icon: "face",
    color: "from-pink-500/20"
  }
];

const SuccessShowcase: React.FC = () => {
  return (
    <section className="py-24 space-y-16">
      <div className="text-center space-y-4">
        <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Hasil Nyata, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Bukan Janji.</span></h3>
        <p className="text-gray-400 max-w-2xl mx-auto">Lihat bagaimana strategi presisi kami mengubah angka statistik menjadi pertumbuhan bisnis yang nyata bagi klien kami.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cases.map((c, i) => (
          <div key={i} className="group relative p-8 rounded-[3rem] bg-surface-dark border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${c.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors text-3xl">{c.icon}</span>
                <div className="h-10 w-24 flex items-end gap-1">
                   {[40, 60, 45, 90, 70, 100].map((h, j) => (
                     <div key={j} className="flex-1 bg-primary/20 rounded-t-sm group-hover:bg-primary/40 transition-all" style={{ height: `${h}%` }}></div>
                   ))}
                </div>
              </div>

              <div>
                <div className="text-5xl font-black text-white group-hover:scale-110 transition-transform origin-left duration-500">{c.stat}</div>
                <div className="text-[10px] font-black text-primary uppercase tracking-widest mt-1">{c.label}</div>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-bold text-white">{c.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessShowcase;
