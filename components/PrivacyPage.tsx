
import React from 'react';

interface PrivacyPageProps {
  onBack: () => void;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBack }) => {
  return (
    <section className="px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-12 group font-bold text-xs tracking-widest uppercase">
        <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
        <span>Kembali ke Beranda</span>
      </button>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-8 mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">Kebijakan <span className="text-primary">Privasi</span></h1>
          <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs">Terakhir Diperbarui: 1 Januari 2026</p>
        </div>

        <div className="bg-surface-dark/40 backdrop-blur-md rounded-[3rem] border border-white/5 p-10 md:p-16 space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-white uppercase">1. Pengumpulan Informasi</h2>
            <p className="text-gray-400 leading-relaxed">
              Kami mengumpulkan informasi yang Anda berikan langsung kepada kami saat Anda mengisi formulir audit SEO, termasuk nama, informasi kontak (WhatsApp), dan detail properti/bisnis Anda. Data ini digunakan semata-mata untuk proses analisis dan konsultasi strategi digital.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-black text-white uppercase">2. Keamanan Data</h2>
            <p className="text-gray-400 leading-relaxed">
              Glory Digital menerapkan standar keamanan digital yang ketat untuk melindungi data Anda dari akses yang tidak sah. Informasi audit Anda disimpan dalam lingkungan terenkripsi dan hanya dapat diakses oleh tim ahli kami yang bertugas.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-black text-white uppercase">3. Penggunaan Cookie</h2>
            <p className="text-gray-400 leading-relaxed">
              Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna dan menganalisis trafik situs. Kami tidak membagikan data identifikasi pribadi kepada pihak ketiga untuk tujuan pemasaran tanpa persetujuan eksplisit Anda.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-black text-white uppercase">4. Kerahasiaan Strategi</h2>
            <p className="text-gray-400 leading-relaxed">
              Hasil audit dan rekomendasi strategi yang kami berikan bersifat rahasia dan merupakan kekayaan intelektual Glory Digital yang dipersonalisasi untuk bisnis Anda. Kami berkomitmen untuk menjaga kerahasiaan operasional klien kami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPage;
