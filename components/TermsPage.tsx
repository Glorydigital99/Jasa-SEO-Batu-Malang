
import React from 'react';

interface TermsPageProps {
  onBack: () => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ onBack }) => {
  const sections = [
    {
      title: "1. Definisi Pihak",
      icon: "groups",
      content: "Dokumen Perjanjian Layanan ini mengikat secara hukum antara GLORY DIGITAL (selanjutnya disebut 'Agensi') dan entitas atau individu yang menyetujui layanan kami (selanjutnya disebut 'Klien'). Dokumen ini menjamin hak, kewajiban, serta akuntabilitas profesional dalam pelaksanaan strategi pemasaran digital."
    },
    {
      title: "2. Ruang Lingkup Layanan (Scope of Work)",
      icon: "inventory_2",
      content: "Paket SEO/Trial mencakup: Audit teknis komprehensif, riset kata kunci strategis, optimasi on-page (meta-data, arsitektur informasi), perbaikan infrastruktur teknis (kecepatan & sitemap), serta pelaporan performa berkala. Layanan tidak mencakup biaya iklan pihak ketiga (Google/Meta Ads) atau produksi konten kreatif di luar kesepakatan tertulis."
    },
    {
      title: "3. Durasi & Linimasa Proyek",
      icon: "history",
      content: "Paket Trial berlangsung selama 30 hari kalender. Proyek berkelanjutan diaktifkan secara bulanan dengan sistem perpanjangan otomatis kecuali ada pemberitahuan terminasi. SEO adalah investasi jangka panjang; hasil pertumbuhan organik umumnya mulai terakselerasi dalam 3-6 bulan tergantung pada otoritas domain awal dan kompetisi pasar."
    },
    {
      title: "4. Disclaimer Hasil & Batasan Tanggung Jawab",
      icon: "verified",
      content: "Agensi menggunakan metodologi 'White-Hat SEO' yang terstandarisasi. Mengingat sifat algoritma mesin pencari yang dinamis dan fluktuatif, Agensi tidak menjamin posisi peringkat spesifik dalam waktu singkat. Fokus utama kami adalah peningkatan volume trafik berkualitas, relevansi otoritas, dan optimasi konversi bisnis."
    },
    {
      title: "5. Kebijakan Revisi & Feedback",
      icon: "rate_review",
      content: "Klien berhak mendapatkan sesi konsultasi dan revisi strategi maksimal 3 kali per periode bulan berjalan. Penyesuaian di luar ruang lingkup yang telah disepakati akan ditinjau kembali dan dapat dikenakan biaya tambahan sesuai dengan kompleksitas teknis yang diminta."
    },
    {
      title: "6. Ketentuan Pembayaran & Komitmen",
      icon: "payments",
      content: "Pelaksanaan proyek dimulai segera setelah Down Payment (DP) sebesar 50% diterima. Sisa pembayaran wajib dilunasi setelah laporan deliverable fase pertama dikirimkan. Sesuai dengan kebijakan agensi untuk hasil maksimal, kerja sama SEO profesional disarankan dengan komitmen minimal 12 bulan."
    },
    {
      title: "7. Kebijakan Pembatalan & Pengembalian Dana",
      icon: "cancel",
      content: "Pembayaran untuk Paket Trial bersifat non-refundable karena alokasi sumber daya teknis yang intensif di awal. Untuk paket langganan bulanan, pembatalan dapat dilakukan dengan pemberitahuan tertulis minimal 7 hari sebelum siklus penagihan berikutnya dimulai."
    },
    {
      title: "8. Kewajiban & Akses Klien",
      icon: "key",
      content: "Klien berkewajiban memberikan akses yang diperlukan ke platform CMS (WordPress/Shopify/dll), Google Search Console, dan Google Analytics. Keterlambatan pemberian akses atau informasi bisnis yang akurat dapat mempengaruhi linimasa pencapaian target proyek."
    },
    {
      title: "9. Kode Etik Penyedia Jasa",
      icon: "shield_person",
      content: "GLORY DIGITAL berkomitmen penuh untuk menjaga integritas website Klien, memberikan laporan yang transparan tanpa manipulasi data, dan melakukan edukasi berkelanjutan agar Klien memahami nilai strategis dari setiap optimasi yang dilakukan."
    },
    {
      title: "10. Keadaan Kahar (Force Majeure)",
      icon: "cyclone",
      content: "Agensi tidak bertanggung jawab atas penurunan performa yang disebabkan oleh faktor eksternal di luar kendali teknis, termasuk namun tidak terbatas pada: perubahan algoritma mesin pencari yang bersifat global/masif, gangguan penyedia hosting pihak ketiga, atau serangan siber eksternal."
    },
    {
      title: "11. Perjanjian Kerahasiaan (NDA & DA)",
      icon: "lock",
      isSpecial: true,
      content: "Kedua belah pihak setuju untuk menjaga kerahasiaan seluruh data bisnis, strategi internal, dan metodologi unik yang dibagikan selama masa kerja sama. Data Klien tidak akan dibagikan kepada pihak ketiga manapun tanpa persetujuan tertulis. Sebaliknya, Klien wajib menjaga kerahasiaan kerangka kerja (framework) strategi yang dikembangkan oleh Agensi."
    },
    {
      title: "12. Persetujuan & Aktivasi",
      icon: "task_alt",
      content: "Dengan melakukan pembayaran Down Payment (DP), Klien secara otomatis menyatakan persetujuan penuh terhadap seluruh Syarat & Ketentuan yang tercantum dalam dokumen ini. Perjanjian ini mulai berlaku efektif sejak tanggal dana diterima oleh Agensi."
    }
  ];

  return (
    <section className="px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button onClick={onBack} className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-12 group font-bold text-xs tracking-widest uppercase">
        <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">arrow_back</span>
        <span>Kembali ke Beranda</span>
      </button>

      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
            <span className="material-symbols-outlined text-primary text-sm">gavel</span>
            <span className="text-xs font-black text-primary uppercase tracking-widest">Legal Framework</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter">
            Terms of Service <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">& NDA Agreement</span>
          </h1>
          <p className="text-gray-500 font-bold uppercase tracking-[0.4em] text-xs">Standard Operating Procedure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, idx) => (
            <div 
              key={idx} 
              className={`p-10 rounded-[2.5rem] border transition-all duration-500 ${
                section.isSpecial 
                  ? 'bg-amber-500/5 border-amber-500/20 md:col-span-2' 
                  : 'bg-surface-dark/40 border-white/5 hover:border-primary/20'
              }`}
            >
              <div className="flex items-start gap-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  section.isSpecial ? 'bg-amber-500/10 text-amber-500' : 'bg-primary/10 text-primary'
                }`}>
                  <span className="material-symbols-outlined text-2xl">{section.icon}</span>
                </div>
                <div className="space-y-4">
                  <h3 className={`text-xl font-black uppercase tracking-tight ${
                    section.isSpecial ? 'text-amber-500' : 'text-white'
                  }`}>
                    {section.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-12 rounded-[3.5rem] bg-surface-darker border border-white/10 text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none"></div>
          <h2 className="text-2xl font-black text-white relative z-10">Punya Pertanyaan Hukum?</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm relative z-10">
            Tim kepatuhan kami siap membantu menjelaskan detail operasional dan perlindungan hukum untuk bisnis Anda.
          </p>
          <button 
            onClick={() => window.open('https://wa.me/6285177470073', '_blank')}
            className="relative z-10 px-10 py-5 bg-white text-background-dark font-black rounded-2xl hover:scale-105 transition-all shadow-2xl"
          >
            HUBUNGI LEGAL ADMIN
          </button>
        </div>
      </div>
    </section>
  );
};

export default TermsPage;
