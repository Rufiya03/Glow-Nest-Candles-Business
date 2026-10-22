import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onQuickAdd: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  onCustomize: (product: Product) => void;
  wishlistIds?: string[];
  onToggleWishlist?: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onQuickAdd,
  onViewDetails,
  onCustomize,
  wishlistIds = [],
  onToggleWishlist,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  const filteredProducts = useMemo(() => {
    let result = products;
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }
    return [...result].sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default order
    });
  }, [products, activeCategory, sortBy]);

  const categories = [
    { id: 'all', label: 'All Candles' },
    { id: 'scented', label: 'Scented Jars' },
    { id: 'decorative', label: 'Decorative Sculptures' },
    { id: 'custom', label: 'Customized & Events' },
    { id: 'gift-sets', label: 'Luxury Gift Sets' },
  ];

  return (
    <section id="products" className="py-16 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B87333] tracking-widest uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Handmade With Organic Soy Wax</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2B1C15] tracking-tight">
            Our Candle Collection
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#705244] leading-relaxed">
            Every candle is hand-poured in small artisanal batches with natural soy wax, premium botanical essences, and lead-free cotton wicks.
          </p>
        </div>

        {/* Filter Bar & Sorting (Interactive Filter Tabs) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 border-b border-[#E6D9CB] mb-8">
          
          {/* Segmented Category Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-[#EFE5D8] rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#2B1C15] text-white shadow-xs'
                    : 'text-[#5C4033] hover:text-[#2B1C15] hover:bg-[#FAF7F2]/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 text-xs text-[#705244]">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#B87333]" />
            <span className="font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-[#D9C8B5] rounded-lg px-3 py-1.5 text-xs text-[#2B1C15] focus:outline-none focus:border-[#B87333] cursor-pointer"
            >
              <option value="featured">Featured Collection</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

        </div>

        {/* Product Grid: 4 items (responsive 1 col on mobile, 2 on tablet, 4 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickAdd={onQuickAdd}
              onViewDetails={onViewDetails}
              onCustomize={onCustomize}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>

        {/* Banner note at bottom of collection */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E6D9CB] shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF0E4] flex items-center justify-center text-xl shrink-0">
              ✨
            </div>
            <div className="text-left">
              <h4 className="text-base font-serif font-semibold text-[#2B1C15]">
                Need bulk orders for your wedding, birthday, or corporate gifting?
              </h4>
              <p className="text-xs text-[#705244]">
                We offer custom packaging, gold-foil logos, customized scent notes, and wholesale pricing.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/919876543210?text=Hello%20GlowNest%20Candles!%20I%20am%20interested%20in%20a%20bulk%20order%20for%20an%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#F3ECE2] text-[#2B1C15] border border-[#D9C8B5] text-xs font-semibold transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Inquire for Bulk Orders</span>
          </a>
        </div>

      </div>
    </section>
  );
};
