import React, { useState } from 'react';
import { SCENT_PROFILES } from '../data/products';
import { Sparkles, Wind } from 'lucide-react';

export const ScentExplorer: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeScent = SCENT_PROFILES[selectedIdx];

  return (
    <section id="scents" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E6D9CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B87333] tracking-widest uppercase mb-2">
            <Wind className="w-3.5 h-3.5" />
            <span>Therapeutic Aromas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2B1C15] tracking-tight">
            Explore Our Signature Scents
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#705244]">
            Every fragrance is composed with phthalate-free, non-toxic essential oils formulated to gently fill your sanctuary without overpowering headaches.
          </p>
        </div>

        {/* Scent Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {SCENT_PROFILES.map((profile, idx) => (
            <button
              key={profile.name}
              onClick={() => setSelectedIdx(idx)}
              className={`px-4 py-2.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedIdx === idx
                  ? 'bg-[#2B1C15] text-white shadow-xs'
                  : 'bg-white border border-[#D9C8B5] text-[#5C4033] hover:border-[#B87333]'
              }`}
            >
              {profile.name}
            </button>
          ))}
        </div>

        {/* Scent Card Display */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#E6D9CB] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#F0E6DA] pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B87333]">
                {activeScent.category}
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#2B1C15] mt-1">
                {activeScent.name}
              </h3>
            </div>
            <div className="text-xs text-[#705244] bg-[#FAF7F2] px-3.5 py-1.5 rounded-full border border-[#E6D9CB]">
              Mood: <strong>{activeScent.mood}</strong>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CB]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B87333] block mb-1">
                Top Notes (First Impression)
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#2B1C15]">
                {activeScent.top}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CB]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B87333] block mb-1">
                Heart Notes (The Essence)
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#2B1C15]">
                {activeScent.heart}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CB]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B87333] block mb-1">
                Base Notes (Lingering Warmth)
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#2B1C15]">
                {activeScent.base}
              </p>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-[#705244] flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B87333]" />
            <span>Infused in pure soy wax for a clean, even scent throw up to 45 hours</span>
          </div>
        </div>

      </div>
    </section>
  );
};
