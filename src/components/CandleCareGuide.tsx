import React from 'react';
import { CANDLE_CARE_STEPS } from '../data/products';
import { Flame, Sparkles } from 'lucide-react';

export const CandleCareGuide: React.FC = () => {
  return (
    <section id="care" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E6D9CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B87333] tracking-widest uppercase mb-2">
            <Flame className="w-3.5 h-3.5" />
            <span>Artisanal Knowledge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B1C15] tracking-tight">
            Candle Care & Burn Rituals
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#705244]">
            Natural soy wax behaves like a living material. Follow these 4 golden rules to maximize your candle's fragrance throw and burn life.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CANDLE_CARE_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-6 border border-[#E6D9CB] shadow-xs flex flex-col justify-between hover:border-[#B87333] transition-colors"
            >
              <div>
                <span className="text-2xl font-serif font-bold text-[#B87333] block mb-3 font-mono">
                  {step.step}
                </span>
                <h3 className="text-lg font-serif font-semibold text-[#2B1C15] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#705244] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#F0E6DA] text-[11px] text-[#A89685] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#B87333]" />
                <span>Small Batch Care</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
