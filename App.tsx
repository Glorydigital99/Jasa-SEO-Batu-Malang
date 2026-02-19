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
  // --- 1. Fungsi buat deteksi halaman dari URL saat pertama kali load ---
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

  // --- 2. Handle tombol Back & Forward di Browser ---
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

  // --- 3. Update Title Browser & Scroll ke atas setiap ganti halaman ---
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Auto-Title Logic
    const titles: Record<Page, string> = {
      home: "GLORY DIGITAL | Jasa SEO Batu dan Malang #1 di Indonesia",
      about: "Tentang Kami | Glory Digital Agency Malang",
      'case-study': "Studi Kasus & Portofolio SEO | Glory Digital",
      'all-services': "Layanan Digital Marketing Lengkap | Glory Digital",
      'service-web': "Jasa Pembuatan Website SEO Friendly | Glory Digital",
      'audit-improvement': "Audit SEO Gratis & Optimasi Website | Glory Digital",
      // ... tambahkan yang lain jika perlu
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
    document.title = titles[currentPage] || "GLORY DIGITAL";
  }, [currentPage]);

  // --- 4. Navigasi yang Update URL Address Bar ---
  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    const base = '/GLORY-DIGITAL1'; // Sesuaikan dengan repo GitHub lu
    const urlPath = page === 'home' ? `${base}/` : `${base}/${page}`;
    window.history.pushState({ page }, '', urlPath);
  };

  return (
    <div className="min-h-screen bg-background-dark text-white font-sans selection:bg-primary/30">
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
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-7 min-h-[500px]">
                  <GrowthChart />
                </div>
                <div className="lg:col-span-5">
                  <Services onNavigate={navigateTo as any} />
                </div>
              </div>

              <DetailedServices />
              <AuditForm onSuccess={() => navigateTo('confirmation')} />
              <Testimonials />
            </div>
          </>
        )}

        {/* --- Rendering Halaman Lain --- */}
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

      {currentPage === 'home' && (
        <div className="fixed bottom-6 left-4 right-4 z-40 md:hidden">
          <button 
            onClick={() => {
              document.getElementById('audit-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full h-14 rounded-2xl bg-white text-background-dark font-black text-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-between px-6 active:scale-95 transition-all"
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