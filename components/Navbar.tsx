import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80; // Approximate height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled ? 'bg-auri-base/95 backdrop-blur-md py-2 shadow-sm' : 'bg-transparent py-6'
  }`;

  // Text colors change based on scroll state
  const textColorClass = isScrolled ? 'text-auri-charcoal' : 'text-white';
  const hoverColorClass = isScrolled ? 'hover:text-auri-gold' : 'hover:text-auri-sand';

  const linkClasses = `${textColorClass} ${hoverColorClass} tracking-widest text-sm uppercase transition-colors duration-300 font-sans font-bold cursor-pointer`;

  // Custom Logo Component
  const AuriLogo = ({ className, isLight }: { className?: string, isLight: boolean }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Hexagon or Box shape implies packaging */}
      <path d="M50 10 L90 30 L90 75 L50 95 L10 75 L10 30 Z" stroke={isLight ? "#D6CFC7" : "#C5B399"} strokeWidth="2" fill="none" />
      <text 
        x="50" 
        y="62" 
        textAnchor="middle" 
        fontFamily='"Cormorant Garamond", serif' 
        fontSize="40" 
        fill="none" 
        stroke={isLight ? "#FFFFFF" : "#2C2C2C"} 
        strokeWidth="0.8"
        style={{ letterSpacing: '0.05em' }}
      >
        Auri
      </text>
    </svg>
  );

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="flex items-center gap-3 group cursor-pointer">
           <div className={`transition-all duration-500 ${isScrolled ? 'w-12 h-12' : 'w-16 h-16'}`}>
              <AuriLogo className="w-full h-full" isLight={!isScrolled} />
           </div>
           <span className={`font-serif text-xl hidden md:block transition-colors ${textColorClass}`}>PACKAGING</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className={linkClasses}>首頁</a>
          <a href="#products" onClick={(e) => scrollToSection(e, 'products')} className={linkClasses}>精選型錄</a>
          <a href="#muse" onClick={(e) => scrollToSection(e, 'muse')} className={linkClasses}>設計顧問</a>
          <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className={linkClasses}>應用案例</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={linkClasses}>客製諮詢</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`${textColorClass} focus:outline-none`}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-auri-base shadow-lg transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-center space-y-6 py-8 font-serif text-lg text-auri-charcoal">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>首頁</a>
          <a href="#products" onClick={(e) => scrollToSection(e, 'products')}>精選型錄</a>
          <a href="#muse" onClick={(e) => scrollToSection(e, 'muse')}>設計顧問</a>
          <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')}>應用案例</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>客製諮詢</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;