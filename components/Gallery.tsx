import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-md">
            <h2 className="text-4xl font-serif text-auri-charcoal mb-4">應用案例</h2>
            <p className="text-auri-charcoal/60 font-light leading-relaxed">
              從結構到視覺，我們協助品牌在貨架上脫穎而出。欣賞我們的實際包裝應用案例。
            </p>
          </div>
          <div className="hidden md:block">
             <span className="text-auri-gold font-serif italic text-xl">設計，是產品的無聲語言。</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
          <div className="md:col-span-2 h-full overflow-hidden group relative bg-auri-base">
            <img 
                src={GALLERY_IMAGES[0]} 
                alt="Packaging Case 1" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
            />
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-serif tracking-wider text-sm bg-black/20 p-2 backdrop-blur-sm">保養品瓶器系列</div>
          </div>
          <div className="flex flex-col gap-4 h-full">
            <div className="h-1/2 overflow-hidden group relative bg-auri-base">
                <img 
                    src={GALLERY_IMAGES[1]} 
                    alt="Packaging Case 2" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                />
                 <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-serif tracking-wider text-sm bg-black/20 p-2 backdrop-blur-sm">精裝硬盒結構</div>
            </div>
            <div className="h-1/2 overflow-hidden group relative bg-auri-base">
                <img 
                    src={GALLERY_IMAGES[2]} 
                    alt="Packaging Case 3" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                />
                 <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-serif tracking-wider text-sm bg-black/20 p-2 backdrop-blur-sm">永續軟包裝</div>
            </div>
          </div>
          <div className="md:col-span-1 h-full overflow-hidden group relative bg-auri-base">
            <img 
                src={GALLERY_IMAGES[3]} 
                alt="Packaging Case 4" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
            />
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-serif tracking-wider text-sm bg-black/20 p-2 backdrop-blur-sm">緩衝內襯設計</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;