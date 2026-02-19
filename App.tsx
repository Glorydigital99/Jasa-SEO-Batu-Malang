import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import GrowthChart from './components/GrowthChart';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import AuditForm from './components/AuditForm';
import Footer from './components/Footer';
import ServiceWebPage from './components/ServiceWebPage';
import AuditImprovementPage from './components/AuditImprovementPage';
import GraphicDesignPage from './components/GraphicDesignPage';
import RedesignWebPage from './components/RedesignWebPage';
import ConfirmationPage from './components/ConfirmationPage';
import CaseStudyPage from './components/CaseStudyPage';
import CaseStudyEmeraldPage from './components/CaseStudyEmeraldPage';
import CaseStudyTechFlowPage from './components/CaseStudyTechFlowPage';
import CaseStudyUrbanPage from './components/CaseStudyUrbanPage';
import CaseStudyLuxePage from './components/CaseStudyLuxePage';
import CaseStudyHealthPage from './components/CaseStudyHealthPage';
import CaseStudyEcoPage from './components/CaseStudyEcoPage';
import ProcessPage from './components/ProcessPage';
import SuccessShowcase from './components/SuccessShowcase';
import DetailedServices from './components/DetailedServices';
import AllServicesPage from './components/AllServicesPage';
import GoogleAdsPage from './components/GoogleAdsPage';
import ContentWritingPage from './components/ContentWritingPage';
import SocialMediaPage from './components/SocialMediaPage';
import BrandingStrategyPage from './components/BrandingStrategyPage';
import AboutPage from './components/AboutPage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import WhatsAppButton from './components/WhatsAppButton';

type Page = 
  | 'home' 
  | 'service-web' 
  | 'audit-improvement' 
  | 'design-grafis' 
  | 'redesign-web' 
  | 'confirmation' 
  | 'case-study' 
  | 'case-emerald' 
  | 'case-techflow' 
  | 'case-urban' 
  | 'case-luxe' 
  | 'case-health' 
  | 'case-eco' 
  | 'process' 
  | 'all-services'
  | 'google-ads'
  | 'content-writing'
  | 'social-media'
  | 'branding'
  | 'about'
  | 'privacy'
  | 'terms';

const App: React.FC = () => {
  const getInitialPage = (): Page => {
    const path = window.location.pathname.split('/').pop();
    const validPages: Page[] = [
      'service-web', 'audit-improvement', 'design-grafis', 'redesign-web', 
      'confirmation', 'case-study', 'case-emerald', 'case-techflow', 
      'case-urban', 'case-luxe', 'case-health', 'case-eco', 'process', 
      'all-services', 'google-ads', 'content-writing', 'social-media', 
      'branding', 'about', 'privacy', 'terms'
    ];
    return (path && validPages.includes(path as Page)) ? (path as Page) : 'home';
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>(getInitialPage());

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.page) {
        setCurrentPage(event.state.page);
      } else {
        setCurrentPage(getInitialPage());
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = titles[currentPage] || "GLORY DIGITAL";
  }, [currentPage]);

  const titles: Record<Page, string> = {
    home: "GLORY DIGITAL | Jasa SEO Batu dan Malang #1 di Indonesia",
    about: "Tentang Kami | Glory Digital SEO Agency Malang",
    'case-study': "Studi Kasus & Portofolio SEO | Glory Digital",
    'all-services': "Layanan Digital Marketing Lengkap | Glory Digital",
    'service-web': "Jasa Pembuatan Website SEO Friendly | Glory Digital",
    'audit-improvement': "Audit SEO Gratis & Optimasi Website | Glory Digital",
    'design-grafis': "Jasa Desain Grafis Profesional",
    'redesign-web': "Jasa Redesign Website",
    'confirmation': "Konfirmasi Audit - Glory Digital",
    'case-emerald': "Emerald Park Case Study",
    'case-techflow': "TechFlow Case Study",
    'case-urban': "Urban Living Case Study",
    'case-luxe': "Luxe Travel Case Study",
    'case-health': "HealthLink Case Study",
    'case-eco': "EcoStore Case Study",
    'process': "Alur Kerja Kami - Glory Digital",
    'google-ads': "Jasa Google Ads",
    'content-writing': "Jasa Penulisan Artikel SEO",
    'social-media': "Jasa Kelola Media Sosial",
    'branding': "Strategi Branding Bisnis",
    'privacy': "Kebijakan Privasi - Glory Digital",
    'terms': "Syarat & Ketentuan - Glory Digital"
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    const base = '/Jasa-SEO-Batu-Malang';
    const urlPath = page === 'home' ? `${base}/` : `${base}/${page}`;
    window.history.pushState({ page }, '', urlPath);
  };

  return (
    <div className="min-h-screen bg-background-dark text-white font-sans selection:bg-primary/30 relative overflow-hidden">
      
      {/* --- LAYER 0: VIDEO BACKGROUND --- */}
      {currentPage === 'home' && (
        <div className="absolute top-0 left-0 w-full h-[140vh] z-0 pointer-events-none">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-80 scale-100">
            <source src="/Jasa-SEO-Batu-Malang/earth.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/95 via-background-dark/50 to-transparent"></div>
          <div className="absolute inset-0 bg-background-dark/40"></div>
        </div>
      )}

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar isScrolled={isScrolled} onNavigate={navigateTo as any} />
        
        <main className="max-w-7xl mx-auto pt-20 pb-32">
          {currentPage === 'home' && (
            <>
              <section className="sr-only"> 
                <h1>Jasa SEO Batu & Malang Terbaik - Glory Digital Agency</h1>
              </section>
              <Hero />
              
              <div className="space-y-24 px-4 md:px-8">
                <Stats />
                <SuccessShowcase />
                
                {/* --- GRID SECTION: AUTHORITY HIGHLIGHT --- */}
                <div className="space-y-16">
                  
                  {/* BOX 1: LAYANAN (CLEAN & CENTERED HEADLINE) */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 rounded-[2.5rem] blur-2xl opacity-75 group-hover:opacity-100 animate-pulse transition duration-1000"></div>
                    
                    <div className="relative bg-background-dark/80 backdrop-blur-xl rounded-[2.2rem] border-2 border-primary/20 p-10 lg:p-16 shadow-[0_0_50px_-12px_rgba(0,255,128,0.2)]">
                      
                      {/* HEADER CLEAN (Teks "Layanan Kami" Dihapus Total) */}
                      <div className="mb-16 flex flex-col items-center text-center max-w-4xl mx-auto">
                        <div className="mb-6 flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10">
                          <span className="h-2 w-2 rounded-full bg-primary animate-ping"></span>
                          <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-70">Sistem Pertumbuhan Aktif</span>
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight uppercase mb-8 italic">
                          Strategi <span className="text-primary underline decoration-wavy underline-offset-[12px]">Eksklusif</span> Untuk Dominasi Digital yang Tak Terhentikan
                        </h2>
                        
                        <p className="text-base md:text-lg text-white/60 leading-relaxed font-medium">
                          Kami tidak sekadar menawarkan jasa; kami memberikan ekosistem pertumbuhan yang dirancang secara presisi menggunakan data analitik mendalam. Setiap langkah optimasi yang kami ambil bertujuan untuk memastikan bisnis Anda tidak hanya bertahan, tetapi memimpin pasar melalui visibilitas organik yang stabil dan berkelanjutan di mesin pencari.
                        </p>
                      </div>
                      
                      <Services onNavigate={navigateTo as any} />
                    </div>
                  </div>

                  {/* BOX 2: GRAFIK (BAWAH) */}
                  <div className="w-full">
                    <div className="bg-white/5 rounded-[2.2rem] border border-white/10 p-8 lg:p-12 shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-15 transition-opacity">
                        <span className="material-symbols-outlined text-8xl">insights</span>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="mb-8">
                          <h3 className="text-xl font-bold opacity-90 flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">bar_chart</span>
                            Lintasan Pertumbuhan Klien
                          </h3>
                        </div>
                        <div className="min-h-[450px]">
                          <GrowthChart />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <DetailedServices />
                <AuditForm onSuccess={() => navigateTo('confirmation')} />
                <Testimonials />
              </div>
            </>
          )}

          {/* Rendering Halaman Lain */}
          {currentPage === 'all-services' && <AllServicesPage onBack={() => navigateTo('home')} onNavigate={navigateTo as any} />}
          {currentPage === 'service-web' && <ServiceWebPage onBack={() => navigateTo('home')} />}
          {currentPage === 'audit-improvement' && <AuditImprovementPage onBack={() => navigateTo('home')} />}
          {currentPage === 'design-grafis' && <GraphicDesignPage onBack={() => navigateTo('home')} />}
          {currentPage === 'redesign-web' && <RedesignWebPage onBack={() => navigateTo('home')} />}
          {currentPage === 'google-ads' && <GoogleAdsPage onBack={() => navigateTo('all-services')} />}
          {currentPage === 'content-writing' && <ContentWritingPage onBack={() => navigateTo('all-services')} />}
          {currentPage === 'social-media' && <SocialMediaPage onBack={() => navigateTo('all-services')} />}
          {currentPage === 'branding' && <BrandingStrategyPage onBack={() => navigateTo('all-services')} />}
          {currentPage === 'confirmation' && <ConfirmationPage onBack={() => navigateTo('home')} />}
          {currentPage === 'case-study' && <CaseStudyPage onBack={() => navigateTo('home')} onSelectCase={(id) => navigateTo(id as Page)} />}
          {currentPage === 'case-emerald' && <CaseStudyEmeraldPage onBack={() => navigateTo('case-study')} />}
          {currentPage === 'case-techflow' && <CaseStudyTechFlowPage onBack={() => navigateTo('case-study')} />}
          {currentPage === 'case-urban' && <CaseStudyUrbanPage onBack={() => navigateTo('case-study')} />}
          {currentPage === 'case-luxe' && <CaseStudyLuxePage onBack={() => navigateTo('case-study')} />}
          {currentPage === 'case-health' && <CaseStudyHealthPage onBack={() => navigateTo('case-study')} />}
          {currentPage === 'case-eco' && <CaseStudyEcoPage onBack={() => navigateTo('case-study')} />}
          {currentPage === 'process' && <ProcessPage onBack={() => navigateTo('home')} />}
          {currentPage === 'about' && <AboutPage onBack={() => navigateTo('home')} />}
          {currentPage === 'privacy' && <PrivacyPage onBack={() => navigateTo('home')} />}
          {currentPage === 'terms' && <TermsPage onBack={() => navigateTo('home')} />}
        </main>

        <Footer onNavigate={navigateTo as any} />
      </div>

      <WhatsAppButton />

      {currentPage === 'home' && (
        <div className="fixed bottom-6 left-4 right-4 z-40 md:hidden">
          <button 
            onClick={() => document.getElementById('audit-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full h-14 rounded-2xl bg-white text-background-dark font-black text-lg shadow-2xl flex items-center justify-between px-6 active:scale-95 transition-all"
          >
            <span>Mulai Audit Gratis</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;