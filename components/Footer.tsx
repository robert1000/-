import React from 'react';
import { Instagram, Facebook, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  // Custom Logo Component for Footer (Light text)
  const AuriLogoFooter = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
       <path d="M50 10 L90 30 L90 75 L50 95 L10 75 L10 30 Z" stroke="#D6CFC7" strokeWidth="2" fill="none" />
      {/* Text 'Auri' - White Outline */}
      <text 
        x="50" 
        y="62" 
        textAnchor="middle" 
        fontFamily='"Cormorant Garamond", serif' 
        fontSize="40" 
        fill="none" 
        stroke="#F9F8F6" 
        strokeWidth="0.8"
        style={{ letterSpacing: '0.05em' }}
      >
        Auri
      </text>
    </svg>
  );

  return (
    <footer id="contact" className="bg-auri-charcoal text-auri-base py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
             <div className="flex items-center gap-3">
                <div className="w-16 h-16">
                  <AuriLogoFooter className="w-full h-full" />
                </div>
             </div>
             <p className="text-auri-base/50 max-w-xs font-light text-sm leading-relaxed">
               致力於永續材質與創新結構。<br/>為您的產品，打造獨一無二的開箱體驗。
             </p>
          </div>

          {/* Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
                <h4 className="uppercase tracking-widest text-xs text-auri-gold mb-2">聯絡我們</h4>
                <div className="flex items-start gap-3 text-auri-base/80 font-light">
                    <MapPin size={18} className="mt-1 flex-shrink-0 text-auri-sand"/>
                    <span>台北市設計園區 3 號倉庫</span>
                </div>
                <div className="flex items-start gap-3 text-auri-base/80 font-light">
                    <Mail size={18} className="mt-1 flex-shrink-0 text-auri-sand"/>
                    <span>business@auri-packaging.com</span>
                </div>
                 <div className="flex items-start gap-3 text-auri-base/80 font-light">
                    <Phone size={18} className="mt-1 flex-shrink-0 text-auri-sand"/>
                    <span>+886 2 2345 6789</span>
                </div>
            </div>

            <div className="space-y-4">
                <h4 className="uppercase tracking-widest text-xs text-auri-gold mb-2">社群連結</h4>
                <div className="flex gap-4">
                    <a href="#" onClick={(e) => e.preventDefault()} className="text-auri-base/60 hover:text-white transition-colors"><Instagram /></a>
                    <a href="#" onClick={(e) => e.preventDefault()} className="text-auri-base/60 hover:text-white transition-colors"><Facebook /></a>
                </div>
                <p className="text-auri-base/40 text-sm font-light mt-4">
                    週一至週五：09:00 - 18:00
                </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-auri-base/30">
          <p>&copy; 2024 Auri Packaging. 版權所有。</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white/50">隱私權政策</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white/50">服務條款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;