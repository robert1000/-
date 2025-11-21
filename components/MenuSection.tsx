import React, { useState } from 'react';
import { PRODUCT_ITEMS } from '../constants';
import { generateProductImage } from '../services/geminiService';
import { Sparkles, Loader2, Box } from 'lucide-react';

const ProductSection: React.FC = () => {
  const [generatedImages, setGeneratedImages] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateImages = async () => {
    setIsGenerating(true);
    
    const newImages = { ...generatedImages };
    
    const promises = PRODUCT_ITEMS.map(async (item) => {
       if (newImages[item.id]) return; 

       const base64Image = await generateProductImage(item.name, item.description);
       if (base64Image) {
         setGeneratedImages(prev => ({ ...prev, [item.id]: base64Image }));
       }
    });

    await Promise.all(promises);
    setIsGenerating(false);
  };

  return (
    <section id="products" className="py-24 bg-auri-base">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-auri-gold uppercase tracking-[0.2em] text-xs font-bold">Our Collection</span>
          <h2 className="text-4xl md:text-5xl font-serif text-auri-charcoal mt-4 mb-6">精選包裝方案</h2>
          
          {/* AI Generation Button */}
          <button 
            onClick={handleGenerateImages}
            disabled={isGenerating}
            className="inline-flex items-center gap-2 px-5 py-2 bg-auri-sand/20 hover:bg-auri-sand/40 text-auri-charcoal rounded-full text-sm transition-all duration-300 disabled:opacity-50 border border-auri-gold/30"
          >
            {isGenerating ? (
              <Loader2 size={16} className="animate-spin text-auri-brown" />
            ) : (
              <Sparkles size={16} className="text-auri-brown" />
            )}
            {isGenerating ? 'AI 正在渲染產品圖...' : '使用 AI 渲染實體預覽'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 max-w-6xl mx-auto">
          {PRODUCT_ITEMS.map((item) => (
            <div key={item.id} className="group flex flex-col md:flex-row items-center md:items-start gap-8 cursor-pointer">
              {/* Image Container */}
              <div className="w-full md:w-48 h-48 flex-shrink-0 overflow-hidden rounded-sm shadow-sm relative bg-auri-sand/10 border border-auri-sand/30">
                 <img 
                    src={generatedImages[item.id] || item.image} 
                    alt={item.name}
                    // Add error handling fallback if needed, but assuming generic placeholder works
                    onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/400x400/D6CFC7/2C2C2C?text=No+Image";
                    }}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isGenerating && !generatedImages[item.id] ? 'opacity-50 animate-pulse' : 'opacity-100'}`}
                 />
                 {generatedImages[item.id] && (
                    <div className="absolute top-2 right-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded backdrop-blur-md flex items-center gap-1">
                      <Sparkles size={10} /> AI Rendered
                    </div>
                 )}
                 {/* Category Badge */}
                 <div className="absolute bottom-0 left-0 bg-auri-base/90 px-3 py-1 text-[10px] tracking-widest uppercase text-auri-charcoal">
                    {item.category}
                 </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 space-y-3 w-full text-center md:text-left">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-baseline border-b border-auri-charcoal/10 pb-3 mb-2">
                  <h3 className="text-2xl font-serif text-auri-charcoal group-hover:text-auri-brown transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-serif text-auri-brown text-sm mt-2 md:mt-0 bg-auri-sand/20 px-2 py-1 rounded">{item.price}</span>
                </div>
                <p className="text-auri-charcoal/60 font-light text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
            <div className="inline-block p-6 border border-auri-gold/30 bg-white/50 max-w-2xl">
                 <Box size={24} className="mx-auto mb-3 text-auri-gold" />
                <p className="text-auri-charcoal/70 font-serif italic">
                    「好的包裝，是消費者與品牌的第一次握手。」
                </p>
                <p className="text-auri-charcoal/40 text-xs tracking-widest uppercase mt-4">
                    提供全方位結構設計、材質選用與印刷加工諮詢
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;