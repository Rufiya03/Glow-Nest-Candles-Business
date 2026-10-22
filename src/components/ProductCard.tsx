import React, { useState } from 'react';
import { ShoppingBag, Eye, Star, Sparkles, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickAdd: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  onCustomize?: (product: Product) => void;
  isWishlisted?: boolean;
  onToggleWishlist?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickAdd,
  onViewDetails,
  onCustomize,
  isWishlisted = false,
  onToggleWishlist,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group bg-white rounded-2xl border border-[#E6D9CB] overflow-hidden flex flex-col justify-between hover:border-[#B87333]/60 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      
      {/* Product Image Slot */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#F7F2EA] cursor-pointer" onClick={() => onViewDetails(product)}>
        
        {/* Styled Fallback Container if image loading or error */}
        {(!imageLoaded || imageError) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-[#F5ECE0] to-[#EBDDCF]">
            <span className="text-4xl mb-2" role="img" aria-label="candle">{product.icon}</span>
            <span className="text-xs font-medium text-[#705244]">{product.name}</span>
          </div>
        )}

        {!imageError && (
          <img
            src={product.image}
            alt={`${product.name} - Handcrafted candle by GlowNest Candles`}
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Quiet top corner status */}
        <div className="absolute top-3 left-3">
          <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-[#2B1C15] border border-[#E6D9CB]/80">
            {product.categoryLabel}
          </span>
        </div>

        {/* Wishlist toggle button */}
        {onToggleWishlist && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-xs hover:bg-white text-[#2B1C15] shadow-xs cursor-pointer transition-colors z-10"
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
          >
            <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'text-rose-600 fill-rose-600' : 'text-[#5A3825]'}`} />
          </button>
        )}

        {/* Quick View trigger overlay button */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 pointer-events-none">
          <span className="px-3 py-1.5 rounded-full bg-white/95 text-xs font-medium text-[#2B1C15] shadow-sm flex items-center gap-1.5 pointer-events-auto">
            <Eye className="w-3.5 h-3.5 text-[#B87333]" /> Quick View
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-5 flex flex-col grow justify-between">
        <div>
          {/* Rating & Review */}
          <div className="flex items-center gap-1.5 text-xs text-[#705244] mb-2">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="font-semibold text-[#2B1C15]">{product.rating.toFixed(1)}</span>
            <span className="text-[#A89685]">({product.reviewCount} reviews)</span>
            <span aria-hidden="true" className="text-[#D9C8B5]">·</span>
            <span className="text-[#705244]">{product.burnTime}</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onViewDetails(product)}
            className="text-lg font-serif font-semibold text-[#2B1C15] group-hover:text-[#B87333] transition-colors cursor-pointer"
          >
            {product.name}
          </h3>

          {/* Short description */}
          <p className="mt-1.5 text-xs sm:text-sm text-[#705244] line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Footer with Price & Actions */}
        <div className="mt-5 pt-4 border-t border-[#F0E6DA] flex items-center justify-between gap-2">
          <div>
            <span className="text-xs text-[#8C7665] block">Price</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold font-mono text-[#B87333] tabular-nums">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs font-mono text-[#A89685] line-through tabular-nums">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {product.category === 'custom' && onCustomize ? (
              <button
                onClick={() => onCustomize(product)}
                className="px-3.5 py-2 rounded-lg bg-[#FAF7F2] hover:bg-[#F3ECE2] text-[#2B1C15] border border-[#D9C8B5] text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Customize this candle"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B87333]" />
                <span>Customize</span>
              </button>
            ) : null}

            <button
              onClick={() => onQuickAdd(product)}
              className="px-3.5 py-2 rounded-lg bg-[#2B1C15] hover:bg-[#B87333] text-white text-xs font-medium transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer whitespace-nowrap"
              title="Add to Shopping Bag"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add to Bag</span>
            </button>
          </div>
        </div>

      </div>
    </article>
  );
};
