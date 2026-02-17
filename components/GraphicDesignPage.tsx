
import React, { useState, useEffect, useCallback } from 'react';

interface GraphicDesignPageProps {
  onBack: () => void;
}

interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  img: string;
}

const initialPortfolio: PortfolioItem[] = [
  {
    "id": 1,
    "category": "Logo",
    "title": "Apex Tech Identity",
    "img": "https://dl.dropboxusercontent.com/scl/fi/m9w1eets1hb2ql2v6j635/apex.png?rlkey=vdlee0pwag9fyr2hwh7am154r&st=xk21xpgo&raw=1"
  },
  {
    "id": 2,
    "category": "Logo",
    "title": "Lumina Studio",
    "img": "https://dl.dropboxusercontent.com/scl/fi/f1q14el903h5ba7fb0r1i/lumina.png?rlkey=odz935hx82442qiu6fnkjuh6h&st=l0bgm6x4&raw=1"
  },
  {
    "id": 3,
    "category": "Logo",
    "title": "Zenith Real Estate",
    "img": "https://dl.dropboxusercontent.com/scl/fi/5ovk9abyv2xqlhgrzk3zz/zenith.png?rlkey=1s1f5pfyv4eefop45np3sv4dn&st=gzlgqrk1&raw=1"
  },
  {
    "id": 13,
    "category": "Logo",
    "title": "Organic Food Co.",
    "img": "https://dl.dropboxusercontent.com/scl/fi/oythqfiqot3hst9pmqxgc/organic.png?rlkey=14mq8el0yujlkzofom67l4dqd&st=08r79uof&raw=1"
  },
  {
    "id": 4,
    "category": "Banner",
    "title": "E-Commerce Summer Sale",
    "img": "https://dl.dropboxusercontent.com/scl/fi/swuimnm0in4pdwtqh1t38/summer-sale.png?rlkey=29kmhq9m59lu0xjyp9dn9y3so&st=jwlmtakx&raw=1"
  },
  {
    "id": 5,
    "category": "Banner",
    "title": "SaaS Hero Section",
    "img": "https://dl.dropboxusercontent.com/scl/fi/nrcrmymfrh201kuvzaqvh/saas-hero.png?rlkey=3uyup5blm3t9f1lej8t6og61r&st=v1mwr4w9&raw=1"
  },
  {
    "id": 6,
    "category": "Banner",
    "title": "Social Media Campaign",
    "img": "https://dl.dropboxusercontent.com/scl/fi/k9iwdwkhiti1fjozbul1s/social-media.png?rlkey=8d9wr1y53t49l82od3knaiw5d&st=dteu8hjv&raw=1"
  },
  {
    "id": 14,
    "category": "Banner",
    "title": "Digital Ads Set",
    "img": "https://dl.dropboxusercontent.com/scl/fi/l8l0bn4le3qm3e19hzqe1/ads-set.png?rlkey=d8boyro7p09wteg4fajuifzi9&st=qxltylnq&raw=1"
  },
  {
    "id": 7,
    "category": "Poster",
    "title": "Digital Future Event",
    "img": "https://dl.dropboxusercontent.com/scl/fi/pm2btkjjzp6kh99naoeji/digital-future.png?rlkey=ll5n77rs2im59sybxhqsphx0h&st=nqd8e9la&raw=1"
  },
  {
    "id": 8,
    "category": "Poster",
    "title": "Minimalist Art Expo",
    "img": "https://dl.dropboxusercontent.com/scl/fi/1ukzabyu2sb78hqt8z5dj/minimalist-art-expo.png?rlkey=p4qoyh82bt2lmudk28wru1hlf&st=9g3a06f7&raw=1"
  },
  {
    "id": 9,
    "category": "Poster",
    "title": "Tech Conference 2024",
    "img": "https://dl.dropboxusercontent.com/scl/fi/xthghxcngvcdzwxshqm6i/tech-conference.png?rlkey=rb98xqlqleydft4kvcklgkdtv&st=mtd97bp8&raw=1"
  },
  {
    "id": 15,
    "category": "Poster",
    "title": "Modern Concept Flyer",
    "img": "https://dl.dropboxusercontent.com/scl/fi/b934nbwkzwsmmcqurnszn/Modern-Concept-Flyer.png?rlkey=fd0azpji5y8uoctuwf6cvj7my&st=pse7czgb&raw=1"
  },
  {
    "id": 10,
    "category": "Pamphlet",
    "title": "Corporate Profile",
    "img": "https://dl.dropboxusercontent.com/scl/fi/m5a04lyvhet7geixobvdn/pamflet-coorporation.png?rlkey=xwa28nk71p7d2lmii434f1m1p&st=3afcabbh&raw=1"
  },
  {
    "id": 11,
    "category": "Pamphlet",
    "title": "Service Catalogue",
    "img": "https://dl.dropboxusercontent.com/scl/fi/j5oibf2h9xjkd45mbs2ao/service-catalogue.png?rlkey=dcftmegho9105k7je0dzmfzo0&st=y1p62ebd&raw=1"
  },
  {
    "id": 12,
    "category": "Pamphlet",
    "title": "Event Guide",
    "img": "https://dl.dropboxusercontent.com/scl/fi/cfrr34dtuqjk4g69xml9u/pamflet-event-guide.png?rlkey=hkkq49l7iml7qs9u66tldawt1&st=eekgftxg&raw=1"
  },
  {
    "id": 16,
    "category": "Pamphlet",
    "title": "Exclusive Brochure",
    "img": "https://dl.dropboxusercontent.com/scl/fi/1tg33peygzv8vaaxtl9d4/pamflet-exclusive-brochure.png?rlkey=35w3c1paqohpfhuvdavngvde1&st=22woagd1&raw=1"
  }
];

const GraphicDesignPage: React.FC<GraphicDesignPageProps> = ({ onBack }) => {
  const [localPortfolio] = useState<PortfolioItem[]>(initialPortfolio);
  const [filter, setFilter] = useState('All');
  const [imageStatus, setImageStatus] = useState<Record<number, 'loading' | 'error' | 'loaded'>>({});
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const categories = ['All', 'Logo', 'Banner', 'Poster', 'Pamphlet'];
  
  const filteredPortfolio = filter === 'All' 
    ? localPortfolio 
    : localPortfolio.filter(item => item.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Logo': return 'pentool';
      case 'Banner': return 'view_carousel';
      case 'Poster': return 'photo_size_select_actual';
      case 'Pamphlet': return 'menu_book';
      default: return 'design_services';
    }
  };

  const openModal = (idx: number) => {
    setSelectedIdx(idx);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedIdx(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! + 1) % filteredPortfolio.length);
  }, [selectedIdx, filteredPortfolio.length]);

  const prevImage = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! - 1 + filteredPortfolio.length) % filteredPortfolio.length);
  }, [selectedIdx, filteredPortfolio.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, nextImage, prevImage]);

  return (
    <section className="px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-12">
        <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors group font-bold text-xs tracking-widest uppercase">
          <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
          <span>Kembali</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">
              Desain Grafis <br/><span className="text-blue-400 italic">Berkelas</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Kami tidak sekadar menggambar kami merancang bahasa visual yang memperkuat otoritas brand Anda di pasar yang kompetitif.
            </p>
          </div>
          <div className="flex gap-4 lg:justify-end">
            <div className="p-8 bg-surface-dark rounded-[2rem] border border-white/5 text-center min-w-[140px]">
              <div className="text-3xl font-black text-blue-400">1.2k+</div>
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Aset Dibuat</div>
            </div>
            <div className="p-8 bg-surface-dark rounded-[2rem] border border-white/5 text-center min-w-[140px]">
              <div className="text-3xl font-black text-white">100%</div>
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Custom Work</div>
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-white/5 pb-8">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Portfolio Showcase</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => { setFilter(cat); setSelectedIdx(null); }}
                  className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    filter === cat 
                      ? 'bg-blue-400 text-background-dark' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPortfolio.map((item, idx) => {
              const status = imageStatus[item.id] || 'loading';

              return (
                <div 
                  key={item.id} 
                  onClick={() => openModal(idx)}
                  className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-surface-darker border border-white/5 hover:border-blue-400/30 transition-all duration-500 cursor-pointer"
                >
                  {/* Image State */}
                  {status !== 'error' && (
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      loading={idx < 4 ? "eager" : "lazy"}
                      fetchPriority={idx < 4 ? "high" : "low"}
                      decoding="async"
                      onLoad={() => setImageStatus(prev => ({ ...prev, [item.id]: 'loaded' }))}
                      onError={() => setImageStatus(prev => ({ ...prev, [item.id]: 'error' }))}
                      className={`w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ${
                        status === 'loading' ? 'opacity-0' : 'opacity-100'
                      }`}
                    />
                  )}

                  {/* Skeleton State */}
                  {status === 'loading' && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-surface-dark p-8 space-y-6 animate-pulse">
                      <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10"></div>
                      <div className="space-y-3 w-full flex flex-col items-center">
                        <div className="h-2 w-16 bg-white/5 rounded-full"></div>
                        <div className="h-4 w-32 bg-white/10 rounded-full"></div>
                      </div>
                    </div>
                  )}

                  {/* Fallback State (Error) */}
                  {status === 'error' && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-surface-dark p-8 text-center space-y-6 overflow-hidden bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:20px_20px]">
                      <div className="absolute inset-0 bg-blue-400/5 blur-[80px] pointer-events-none group-hover:opacity-100 transition-opacity"></div>
                      <div className="w-20 h-20 rounded-3xl bg-background-dark flex items-center justify-center text-blue-400/40 border border-white/5 group-hover:scale-110 group-hover:text-blue-400 group-hover:border-blue-400/20 transition-all duration-500 relative z-10">
                        <span className="material-symbols-outlined text-4xl">{getCategoryIcon(item.category)}</span>
                      </div>
                      <div className="space-y-2 relative z-10">
                        <span className="text-[10px] font-black text-blue-400/50 uppercase tracking-[0.4em] block">{item.category}</span>
                        <h4 className="text-sm font-black text-gray-400 group-hover:text-white transition-colors duration-500 px-4 leading-tight">
                          {item.title}
                        </h4>
                      </div>
                      <div className="absolute top-6 left-6 flex items-center gap-1.5 opacity-30 group-hover:opacity-60 transition-opacity">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                        <span className="text-[8px] font-black text-white uppercase tracking-widest">Preview Unavailable</span>
                      </div>
                    </div>
                  )}

                  {/* Info Overlay */}
                  <div className={`absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-30 bg-gradient-to-t from-background-dark/80 via-background-dark/20 to-transparent`}>
                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-2 inline-block">{item.category}</span>
                    <h4 className="text-xl font-black text-white leading-tight">{item.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-[4rem] bg-gradient-to-br from-blue-900/20 to-background-dark border border-white/10 p-12 md:p-24 text-center overflow-hidden">
          <div className="absolute inset-0 bg-blue-400/5 blur-[120px] pointer-events-none"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white">Wujudkan Visi Visual Anda</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Setiap brand memiliki cerita unik. Mari kita buat dunia melihatnya melalui desain yang tak tertandingi.
            </p>
            <button 
              onClick={() => window.open('https://wa.me/6285177470073', '_blank')}
              className="px-12 py-6 bg-blue-400 text-background-dark font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(96,165,250,0.2)]"
            >
              MULAI PROYEK DESAIN
            </button>
          </div>
        </div>
      </div>

      {/* Portfolio Modal / Carousel */}
      {selectedIdx !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-background-dark/95 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <button 
            onClick={closeModal}
            className="fixed top-6 right-6 md:top-10 md:right-10 z-[110] w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all hover:rotate-90 active:scale-90 border border-white/10 group shadow-2xl"
          >
            <span className="material-symbols-outlined text-2xl md:text-3xl group-hover:scale-110 transition-transform">close</span>
          </button>

          <div 
            className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={prevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-4 text-white/30 hover:text-primary transition-all hover:scale-110 z-10"
            >
              <span className="material-symbols-outlined text-5xl md:text-7xl">chevron_left</span>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-4 text-white/30 hover:text-primary transition-all hover:scale-110 z-10"
            >
              <span className="material-symbols-outlined text-5xl md:text-7xl">chevron_right</span>
            </button>

            <div className="relative w-full h-[60vh] md:h-[75vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
              {imageStatus[filteredPortfolio[selectedIdx].id] !== 'error' ? (
                <img 
                  src={filteredPortfolio[selectedIdx].img} 
                  alt={filteredPortfolio[selectedIdx].title}
                  decoding="async"
                  className="w-full h-full object-contain bg-surface-darker/50"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-surface-dark p-12 text-center space-y-8">
                   <div className="w-32 h-32 rounded-full bg-blue-400/10 flex items-center justify-center text-blue-400 border border-blue-400/20">
                    <span className="material-symbols-outlined text-6xl">{getCategoryIcon(filteredPortfolio[selectedIdx].category)}</span>
                  </div>
                  <div className="space-y-4">
                    <span className="text-xs font-black text-blue-400 uppercase tracking-[0.5em]">Project Preview</span>
                    <h3 className="text-4xl md:text-5xl font-black text-white">{filteredPortfolio[selectedIdx].title}</h3>
                  </div>
                </div>
              )}
            </div>

            <div className="text-center space-y-2 animate-in slide-in-from-bottom-2 duration-500">
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">
                {filteredPortfolio[selectedIdx].category}
              </span>
              <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight">
                {filteredPortfolio[selectedIdx].title}
              </h3>
              <p className="text-gray-500 font-bold text-xs uppercase tracking-widest pt-2">
                {selectedIdx + 1} of {filteredPortfolio.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GraphicDesignPage;
