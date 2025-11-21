import React, { useState } from 'react';
import { Sparkles, Package, Palette } from 'lucide-react';
import { getCreativeMuse } from '../services/geminiService';
import { MuseResponse, LoadingState } from '../types';

const MuseAI: React.FC = () => {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [result, setResult] = useState<MuseResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setStatus(LoadingState.LOADING);
    try {
      const response = await getCreativeMuse(input);
      setResult(response);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section id="muse" className="py-24 bg-auri-sand/20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4 text-auri-brown">
            <Sparkles size={24} className="animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-auri-charcoal mb-4">AI 包裝設計顧問</h2>
          <p className="text-auri-charcoal/70 font-light italic leading-relaxed">
            告訴我們您想要販售的產品（例如：手工餅乾、高級手錶），<br/> 
            讓 Auri 為您推薦最合適的包裝容器與設計風格。
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-sm shadow-sm border border-white">
          <form onSubmit={handleSubmit} className="mb-10 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="例如：天然有機且強調環保的手工精油皂..."
              className="w-full bg-transparent border-b border-auri-charcoal/30 py-4 text-lg md:text-xl font-serif focus:outline-none focus:border-auri-gold transition-colors text-center placeholder-auri-charcoal/30"
              disabled={status === LoadingState.LOADING}
            />
            <div className="mt-6 text-center">
               <button 
                type="submit"
                disabled={status === LoadingState.LOADING}
                className="bg-auri-charcoal text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-auri-brown transition-colors disabled:opacity-50"
              >
                {status === LoadingState.LOADING ? '分析產品特性中...' : '獲取設計建議'}
              </button>
            </div>
          </form>

          {status === LoadingState.SUCCESS && result && (
            <div className="fade-in space-y-8 border-t border-dashed border-auri-charcoal/20 pt-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Suggestion */}
                <div className="text-center p-6 bg-auri-base/50">
                  <div className="flex justify-center mb-3 text-auri-brown">
                    <Package size={20} />
                  </div>
                  <h3 className="font-serif text-xl text-auri-charcoal mb-2">{result.packagingSuggestion}</h3>
                  <p className="text-sm text-auri-charcoal/60 font-light leading-relaxed">{result.reasoning}</p>
                </div>

                {/* Concept */}
                <div className="text-center p-6 bg-auri-base/50">
                  <div className="flex justify-center mb-3 text-auri-brown">
                    <Palette size={20} />
                  </div>
                  <h3 className="font-serif text-xl text-auri-charcoal mb-2">設計靈感</h3>
                  <p className="text-sm text-auri-charcoal/80 font-serif italic leading-relaxed">"{result.designConcept}"</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MuseAI;