
import React from 'react';

interface FooterProps {
  onNavigate?: (page: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 text-center bg-surface-darker">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center gap-4">
          <div 
            className="flex items-center justify-center gap-2 mb-2 group cursor-pointer"
            onClick={() => onNavigate && onNavigate('home')}
          >
            <span className="material-symbols-outlined text-primary text-3xl group-hover:rotate-12 transition-transform">rocket_launch</span>
            <span className="text-2xl font-black tracking-tighter text-white uppercase">GLORY DIGITAL</span>
          </div>
          <p className="text-gray-500 max-w-sm">
            Merancang pertumbuhan pencarian berkelanjutan untuk brand digital paling ambisius di dunia.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-x-8 gap-y-4 text-[10px] font-black tracking-widest uppercase">
          <button 
            onClick={() => onNavigate && onNavigate('about')}
            className="text-gray-400 hover:text-primary transition-colors focus:outline-none"
          >
            Tentang Kami
          </button>
          <button 
            onClick={() => onNavigate && onNavigate('privacy')}
            className="text-gray-400 hover:text-primary transition-colors focus:outline-none"
          >
            Privasi
          </button>
        </div>

        <div className="pt-12 flex flex-col items-center gap-4">
          <div className="flex gap-6 text-gray-500">
            <span className="material-symbols-outlined cursor-pointer hover:text-primary">language</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary">alternate_email</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary">linked_camera</span>
          </div>
          <p className="text-xs text-gray-600 font-bold tracking-wider">
            © 2026 GLORY DIGITAL AGENCY. SELURUH HAK CIPTA DILINDUNGI UNDANG-UNDANG.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
