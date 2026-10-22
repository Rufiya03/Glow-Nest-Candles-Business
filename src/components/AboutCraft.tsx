import React from 'react';
import { Heart, Sparkles, Sliders, ShieldCheck } from 'lucide-react';

export const AboutCraft: React.FC = () => {
  const pillars = [
    {
      icon: '👐',
      title: 'Handmade With Love',
      tagline: 'Artisanal Care in Small Batches',
      description: 'Each candle is individually hand-poured in our studio using 100% biodegradable soy wax and organic cotton wicks, ensuring zero toxic fumes or petroleum soot.',
    },
    {
      icon: '🌺',
      title: 'Luxurious Fragrances',
      tagline: 'Therapeutic Botanical Blends',
      description: 'Carefully curated with pure essential oils and phthalate-free fragrance notes that diffuse naturally to create a comforting, relaxing sanctuary in your room.',
    },
    {
      icon: '🎨',
      title: 'Bespoke Customization',
      tagline: 'Made For Your Milestones',
      description: 'From personalized foil names and wedding monogram seals to custom scents and gift packaging, we bring your vision to life for every celebration.',
    },
    {
      icon: '💰',
      title: 'Affordable Luxury',
      tagline: 'Direct From Artisan Atelier',
      description: 'We believe premium home fragrance should be accessible to everyone. Enjoy boutique studio quality starting at just ₹200 with no retail markups.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F5ECE0] border-b border-[#E6D9CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B87333] tracking-widest uppercase mb-2">
            <Heart className="w-3.5 h-3.5" />
            <span>The GlowNest Promise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B1C15] tracking-tight">
            Why Choose GlowNest Candles?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C4033] leading-relaxed">
            Light up your moments with warm, soothing light and lingering comfort for Indian homes, celebrations, and cherished relationships.
          </p>
        </div>

        {/* 4 Feature Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <div
              key={p.title}
              className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#E6D9CB] shadow-xs flex flex-col justify-between hover:border-[#B87333] transition-colors"
            >
              <div>
                <div className="text-4xl mb-4" role="img" aria-label={p.title}>
                  {p.icon}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#B87333] block mb-1">
                  {p.tagline}
                </span>
                <h3 className="text-xl font-serif font-semibold text-[#2B1C15] mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#705244] leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E6D9CB]/80 flex items-center gap-1.5 text-[11px] font-medium text-[#2B1C15]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B87333]" />
                <span>100% Quality Guaranteed</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
