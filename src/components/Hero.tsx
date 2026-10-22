import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { HERO_IMAGE } from '../data/products';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenCustomStudio: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onOpenCustomStudio,
}) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F5ECE0] to-[#FAF7F2] py-16 lg:py-24 border-b border-[#E6D9CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Clean unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#B87333] tracking-widest uppercase">
              <span>GlowNest Candles</span>
              <span aria-hidden="true" className="text-[#D9C8B5]">·</span>
              <span>Handcrafted Soy Atelier</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-[#2B1C15] tracking-tight leading-[1.12] text-balance">
              Light Up Your Moments
            </h1>

            <p className="text-lg sm:text-xl text-[#5C4033] leading-relaxed max-w-xl font-normal">
              Handmade, scented, and customized candles crafted lovingly by GlowNest Candles for your celebrations, heartfelt gifts, and cozy beautiful homes.
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onExploreProducts}
                className="px-7 py-3.5 bg-[#B87333] hover:bg-[#A36329] text-white font-medium rounded-full transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 group cursor-pointer text-sm"
              >
                <span>Shop Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenCustomStudio}
                className="px-6 py-3.5 bg-[#FAF7F2] hover:bg-white text-[#2B1C15] border border-[#D9C8B5] hover:border-[#B87333] font-medium rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <Sparkles className="w-4 h-4 text-[#B87333]" />
                <span>Custom Candle Studio</span>
              </button>
            </div>

            {/* Quiet trust credentials with dot separators (Zero-Pill rule) */}
            <div className="pt-6 border-t border-[#E6D9CB]/80 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-[#705244]">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B87333]" /> 100% Pure Soy Wax
              </span>
              <span aria-hidden="true" className="text-[#D9C8B5]">·</span>
              <span className="font-medium">Clean Smokeless Cotton Wick</span>
              <span aria-hidden="true" className="text-[#D9C8B5]">·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <HeartHandshake className="w-3.5 h-3.5 text-[#B87333]" /> Starting at ₹200
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main photography card */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E6D9CB] bg-white group">
                <img
                  src={HERO_IMAGE}
                  alt="Artisanal handmade scented soy candles glowing softly on travertine stone"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                {/* Floating caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E6D9CB] shadow-sm flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#B87333]">
                      Freshly Hand-Poured
                    </div>
                    <div className="text-sm font-semibold text-[#2B1C15]">
                      Small Batch Candle Atelier
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#705244]">Burn Time</span>
                    <div className="text-sm font-bold font-mono text-[#2B1C15] tabular-nums">
                      45+ Hours
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative warm accent glow */}
              <div 
                aria-hidden="true"
                className="absolute -top-6 -right-6 w-32 h-32 bg-[#F3D5B5] rounded-full blur-3xl opacity-60 -z-10 pointer-events-none"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
