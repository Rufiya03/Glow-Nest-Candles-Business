import React, { useState } from 'react';
import { ArrowLeft, Plus } from 'lucide-react';
import { MOCK_PRODUCTS, MockProduct } from '../../data/mockupData';

interface ScentedCandlesScreenProps {
  onBack: () => void;
  onSelectProduct: (product: MockProduct) => void;
  onAddToCart: (product: MockProduct) => void;
}

export const ScentedCandlesScreen: React.FC<ScentedCandlesScreenProps> = ({
  onBack,
  onSelectProduct,
  onAddToCart,
}) => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter 6 products matching Screen 3 of design
  const items = [
    MOCK_PRODUCTS.find((p) => p.id === 'vanilla-bean')!,
    MOCK_PRODUCTS.find((p) => p.id === 'sandalwood')!,
    MOCK_PRODUCTS.find((p) => p.id === 'lavender')!,
    MOCK_PRODUCTS.find((p) => p.id === 'jasmine')!,
    MOCK_PRODUCTS.find((p) => p.id === 'ocean-breeze')!,
    MOCK_PRODUCTS.find((p) => p.id === 'cinnamon-spice')!,
  ].filter(Boolean);

  const filters = ['All', 'Soy', 'Beeswax', 'Luxury'];

  return (
    <div className="relative w-full h-full min-h-[640px] flex flex-col bg-[#FBF8F4] text-[#2D1D16] overflow-y-auto">
      {/* Top Header */}
      <div className="px-4 py-3 flex items-center relative border-b border-[#EAE0D4]/40 bg-[#FAF7F2]">
        <button
          onClick={onBack}
          className="p-1.5 text-[#2D1D16] hover:opacity-70 transition-opacity cursor-pointer"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5 stroke-[2]" />
        </button>
        <h2 className="text-base font-semibold text-[#2D1D16] mx-auto pr-7">
          Scented Candles
        </h2>
      </div>

      {/* Filter Chips Row matching Screen 3 */}
      <div className="px-5 py-3 flex items-center gap-2 overflow-x-auto scrollbar-none">
        {filters.map((f) => {
          const isActive = activeFilter === f;
          return (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-[#5A3825] text-white shadow-xs'
                  : 'bg-[#F3ECE2] text-[#8D7B6F] hover:text-[#2D1D16]'
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* 2-Column Product Grid (6 items) matching Screen 3 */}
      <div className="px-5 py-2 grid grid-cols-2 gap-3 pb-8">
        {items.map((p) => (
          <div
            key={p.id}
            onClick={() => onSelectProduct(p)}
            className="bg-white rounded-xl overflow-hidden border border-[#EAE0D4] shadow-xs flex flex-col justify-between transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            <div className="aspect-[4/3] bg-[#F7F2EA] overflow-hidden relative">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-3">
              <h4 className="text-xs font-semibold text-[#2D1D16] truncate">
                {p.name}
              </h4>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs font-bold text-[#2D1D16]">
                  ₹ {p.price}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(p);
                  }}
                  className="w-5 h-5 rounded-full bg-[#5A3825] hover:bg-[#482b1b] text-white flex items-center justify-center cursor-pointer transition-transform active:scale-90 shadow-xs"
                  title="Add to cart"
                >
                  <Plus className="w-3 h-3 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
