import React from 'react';
import { Menu, ShoppingBag, Search, Plus, Sparkles, Flame, Gift } from 'lucide-react';
import { BottomNavBar } from './PhoneChrome';
import { MOCK_PRODUCTS, MockProduct } from '../../data/mockupData';

interface HomeScreenProps {
  onOpenMenu?: () => void;
  onOpenCart: () => void;
  onOpenCategory: (cat: string) => void;
  onSelectProduct: (product: MockProduct) => void;
  onAddToCart: (product: MockProduct) => void;
  onNavigateTab: (tab: 'home' | 'shop' | 'wishlist' | 'profile') => void;
  cartCount?: number;
  wishlistCount?: number;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onOpenMenu,
  onOpenCart,
  onOpenCategory,
  onSelectProduct,
  onAddToCart,
  onNavigateTab,
  cartCount = 2,
  wishlistCount = 2,
}) => {
  const featured = [MOCK_PRODUCTS[0], MOCK_PRODUCTS[1]]; // Lavender Dream (₹249) & Rose Bliss (₹229)

  return (
    <div className="relative w-full h-full min-h-[640px] flex flex-col justify-between bg-[#FBF8F4] text-[#2D1D16] overflow-y-auto">
      {/* Top Section */}
      <div>
        {/* Navigation Header - Matches Screen 2 */}
        <div className="px-5 py-3.5 flex items-center justify-between border-b border-[#EAE0D4]/40 bg-[#FAF7F2]">
          <button
            onClick={onOpenMenu}
            className="p-1.5 text-[#2D1D16] hover:opacity-70 transition-opacity cursor-pointer"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 stroke-[2]" />
          </button>

          {/* Exact Center Brand Logo from Design Screen 2: GlowNest CANDLES */}
          <div 
            className="cursor-pointer select-none text-center" 
            onClick={() => onNavigateTab('home')}
          >
            <div
              className="text-xl sm:text-2xl font-bold tracking-tight text-[#2D1D16] leading-none"
              style={{ fontFamily: 'var(--font-brand), "Cinzel", "Cormorant Garamond", Georgia, serif' }}
            >
              GlowNest
            </div>
            <div className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase font-semibold text-[#6B4226] mt-0.5">
              CANDLES
            </div>
          </div>

          {/* Cart Icon with badge */}
          <button
            onClick={onOpenCart}
            className="p-1.5 relative text-[#2D1D16] hover:opacity-70 transition-opacity cursor-pointer"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
            {cartCount > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-[#5A3825] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-5 py-3">
          <div 
            onClick={() => onOpenCategory('scented')}
            className="relative flex items-center bg-[#F3ECE2] rounded-full px-4 py-2.5 text-xs text-[#8D7B6F] cursor-pointer hover:bg-[#EBE2D6] transition-colors"
          >
            <Search className="w-4 h-4 text-[#8D7B6F] mr-2.5 shrink-0" />
            <input
              type="text"
              placeholder="Search for candles..."
              className="bg-transparent w-full text-[#2D1D16] placeholder-[#8D7B6F] text-xs focus:outline-none pointer-events-none"
              readOnly
            />
          </div>
        </div>

        {/* Hero Banner: Exact "Every Candle Tells a Story." with "Shop Now ->" */}
        <div className="px-5 py-1">
          <div
            onClick={() => onOpenCategory('scented')}
            className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group bg-[#2D1D16]"
          >
            <img
              src="/assets/exact/home_story_banner_exact.jpg"
              alt="Every Candle Tells a Story - Shop Now"
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </div>
        </div>

        {/* Categories 4 circular icons matching Screen 2 */}
        <div className="px-5 py-3.5">
          <div className="grid grid-cols-4 gap-2 text-center">
            {/* Scented */}
            <button
              onClick={() => onOpenCategory('scented')}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#F3ECE2] group-hover:bg-[#EAE0D4] flex items-center justify-center transition-colors shadow-2xs">
                <Flame className="w-5 h-5 text-[#5A3825]" />
              </div>
              <span className="text-[11px] font-medium text-[#2D1D16] mt-1.5">Scented</span>
            </button>

            {/* Decorative */}
            <button
              onClick={() => onOpenCategory('decorative')}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#F3ECE2] group-hover:bg-[#EAE0D4] flex items-center justify-center transition-colors shadow-2xs">
                <svg className="w-5 h-5 text-[#5A3825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M12 2v4m-3 0h6m-5 4h4v6h-4zm-4 8h12" />
                </svg>
              </div>
              <span className="text-[11px] font-medium text-[#2D1D16] mt-1.5">Decorative</span>
            </button>

            {/* Custom */}
            <button
              onClick={() => onOpenCategory('custom')}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#F3ECE2] group-hover:bg-[#EAE0D4] flex items-center justify-center transition-colors shadow-2xs">
                <Sparkles className="w-5 h-5 text-[#5A3825]" />
              </div>
              <span className="text-[11px] font-medium text-[#2D1D16] mt-1.5">Custom</span>
            </button>

            {/* Gift Sets */}
            <button
              onClick={() => onOpenCategory('gift-sets')}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#F3ECE2] group-hover:bg-[#EAE0D4] flex items-center justify-center transition-colors shadow-2xs">
                <Gift className="w-5 h-5 text-[#5A3825]" />
              </div>
              <span className="text-[11px] font-medium text-[#2D1D16] mt-1.5">Gift Sets</span>
            </button>
          </div>
        </div>

        {/* Featured Collection Header */}
        <div className="px-5 pt-1 pb-1 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-[#2D1D16]">
            Featured Collection
          </h3>
          <button
            onClick={() => onOpenCategory('scented')}
            className="text-[11px] text-[#8D7B6F] hover:text-[#5A3825] flex items-center gap-0.5 cursor-pointer font-medium"
          >
            <span>View All</span>
            <span>→</span>
          </button>
        </div>

        {/* Featured Products (Lavender Dream & Rose Bliss) with HD images & 200-300 price */}
        <div className="px-5 py-2 grid grid-cols-2 gap-3 pb-4">
          {featured.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl overflow-hidden border border-[#EAE0D4] shadow-xs flex flex-col justify-between transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              onClick={() => onSelectProduct(p)}
            >
              <div className="aspect-[4/3] bg-[#F7F2EA] overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-3">
                <h4 className="text-xs font-semibold text-[#2D1D16] line-clamp-1 leading-tight">
                  {p.name.replace(' Scented Candle', '').replace(' Decorative Candle', '')}
                </h4>
                <p className="text-[10px] text-[#8D7B6F] line-clamp-1 mt-0.5">
                  {p.categoryLabel}
                </p>
                <div className="flex items-center justify-between mt-2.5">
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

      {/* Bottom Navigation */}
      <BottomNavBar
        activeTab="home"
        onTabChange={onNavigateTab}
        wishlistCount={wishlistCount}
      />
    </div>
  );
};
