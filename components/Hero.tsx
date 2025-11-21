import React from 'react';

const Hero: React.FC = () => {
  const scrollToProducts = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('products');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Use a generic texture or abstract image suitable for packaging background */}
        <img 
          src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2600&auto=format&fit=crop" 
          alt="Abstract Packaging Texture" 
          className="w-full h-full object-cover grayscale brightness-50 contrast-75"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 fade-in">
        <h2 className="text-white font-serif text-xl md:text-2xl tracking-[0.3em] mb-4 uppercase opacity-90">
          Est. 2024
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-tight drop-shadow-sm">
          包覆，即是價值 <br/> <span className="italic font-light text-auri-sand">Details define worth.</span>
        </h1>
        <p className="max-w-lg mx-auto text-white/90 text-base md:text-lg leading-relaxed font-light mb-10 drop-shadow-sm">
          不僅是容器，更是品牌的靈魂棲所。<br/>
          極致材質、結構工藝，為您的產品說故事。
        </p>
        <a 
          href="#products" 
          onClick={scrollToProducts}
          className="inline-block border border-white px-8 py-3 text-sm uppercase tracking-widest text-white hover:bg-white hover:text-auri-charcoal transition-all duration-300 cursor-pointer"
        >
          探索材質
        </a>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span className="block w-[1px] h-12 bg-white opacity-60"></span>
      </div>
    </section>
  );
};

export default Hero;