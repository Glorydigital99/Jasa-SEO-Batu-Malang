
import React from 'react';

interface ConfirmationPageProps {
  onBack: () => void;
}

const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ onBack }) => {
  return (
    <section className="min-h-[75vh] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-surface-dark/40 border border-white/5 rounded-[3.5rem] p-10 md:p-16 text-center space-y-10 relative overflow-hidden backdrop-blur-sm">
        {/* Latar belakang statis yang tenang */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30"></div>
        
        <div className="space-y-8 relative z-10">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/5 border border-primary/20 text-primary mb-2">
            <span className="material-symbols-outlined text-5xl">verified</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Terima Kasih
            </h1>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed font-medium">
              Permintaan audit dan data anda telah kami terima. Tim <span className="text-white font-bold">GLORY DIGITAL</span> akan meninjau informasi yang Anda kirimkan dan menghubungi Anda dalam waktu <span className="text-primary font-bold">paling lambat 7X24 jam kerja</span>.
            </p>
          </div>
        </div>

        {/* Bagian interaksi yang menunggu input pengguna */}
        <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <button 
            onClick={onBack}
            className="px-8 py-4 bg-background-dark/80 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all flex items-center justify-center gap-2 group"
          >
            <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
            <span className="text-sm uppercase tracking-widest">Kembali ke Beranda</span>
          </button>
          
          <button 
            onClick={() => window.open('https://wa.me/6285177470073', '_blank')}
            className="px-8 py-4 bg-primary text-background-dark font-black rounded-2xl hover:shadow-[0_0_30px_rgba(19,236,91,0.3)] transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-xl">chat</span>
            <span className="text-sm uppercase tracking-widest">Chat Admin</span>
          </button>
        </div>

        <div className="text-[9px] text-gray-600 font-black uppercase tracking-[0.5em] pt-8 opacity-50">
          GLORY DIGITAL Agency • Excellence in Search
        </div>
      </div>
    </section>
  );
};

export default ConfirmationPage;
