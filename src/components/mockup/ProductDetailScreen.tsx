import React, { useState } from 'react';
import { ArrowLeft, Heart, Share2, Star, Droplets, Clock, Leaf, Minus, Plus } from 'lucide-react';
import { MockProduct } from '../../data/mockupData';

interface ProductDetailScreenProps {
  product: MockProduct;
  onBack: () => void;
  onAddToCart: (product: MockProduct, quantity: number) => void;
  isWishlisted?: boolean;
  onToggleWishlist?: (product: MockProduct) => void;
}

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({
  product,
  onBack,
  onAddToCart,
  isWishlisted = true,
  onToggleWishlist,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [wishlistActive, setWishlistActive] = useState(isWishlisted);

  const handleToggleWishlist = () => {
    setWishlistActive(!wishlistActive);
    onToggleWishlist?.(product);
  };

  const heroImage = product.id === 'lavender-dream' 
    ? '/assets/exact/lavender_detail_hero_hd.jpg' 
    : product.image;

  return (
    <div className="relative w-full h-full min-h-[640px] flex flex-col justify-between bg-[#FBF8F4] text-[#2D1D16] overflow-y-auto">
      <div>
        {/* Top Product Hero Image with Floating Buttons matching Screen 4 */}
        <div className="relative aspect-[4/3] sm:aspect-square w-full bg-[#F3ECE2] overflow-hidden">
          <img
            src={heroImage}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />

          {/* Floating Action Buttons */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            {/* Back button circular */}
            <button
              onClick={onBack}
              className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#2D1D16] shadow-sm hover:bg-white transition-colors cursor-pointer"
              aria-label="Back"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2]" />
            </button>

            {/* Right icons: Heart + Share */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleWishlist}
                className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#2D1D16] shadow-sm hover:bg-white transition-colors cursor-pointer"
                aria-label="Wishlist"
              >
                <Heart
                  className={`w-4 h-4 ${
                    wishlistActive ? 'fill-[#5A3825] text-[#5A3825]' : 'text-[#2D1D16]'
                  }`}
                />
              </button>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                }}
                className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#2D1D16] shadow-sm hover:bg-white transition-colors cursor-pointer"
                aria-label="Share"
              >
                <Share2 className="w-4 h-4 stroke-[1.75]" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Info Section matching Screen 4 */}
        <div className="p-5">
          <h2 className="text-lg sm:text-xl font-bold text-[#2D1D16] leading-snug">
            {product.name}
          </h2>

          {/* Reviews Rating */}
          <div className="flex items-center gap-1.5 mt-1.5 text-xs text-[#8D7B6F]">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="font-semibold text-[#2D1D16]">{product.rating}</span>
            <span>({product.reviewCount} reviews)</span>
          </div>

          {/* Price (In 200 to 300 range) */}
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-bold text-[#2D1D16]">
              ₹ {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#8D7B6F] line-through">
                ₹ {product.originalPrice}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="mt-2.5 text-xs text-[#6B5A4E] leading-relaxed">
            {product.description}
          </p>

          {/* 3 Quality Feature Badges matching Screen 4 */}
          <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-[#EAE0D4]">
            <div className="flex flex-col items-center text-center p-2 rounded-xl bg-[#F6EFE6]/60">
              <Droplets className="w-4 h-4 text-[#5A3825] mb-1 stroke-[1.75]" />
              <span className="text-[10px] font-semibold text-[#2D1D16]">100% Soy Wax</span>
            </div>
            <div className="flex flex-col items-center text-center p-2 rounded-xl bg-[#F6EFE6]/60">
              <Clock className="w-4 h-4 text-[#5A3825] mb-1 stroke-[1.75]" />
              <span className="text-[10px] font-semibold text-[#2D1D16]">Long Lasting</span>
            </div>
            <div className="flex flex-col items-center text-center p-2 rounded-xl bg-[#F6EFE6]/60">
              <Leaf className="w-4 h-4 text-[#5A3825] mb-1 stroke-[1.75]" />
              <span className="text-[10px] font-semibold text-[#2D1D16]">Eco Friendly</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Action Bar: Qty selector + Add to Cart pill */}
      <div className="p-4 bg-white border-t border-[#EAE0D4] flex items-center gap-3 shadow-xs">
        {/* Quantity Controls (- 1 +) */}
        <div className="flex items-center justify-between bg-[#F3ECE2] rounded-full px-3 py-2 w-28">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-5 h-5 flex items-center justify-center text-[#2D1D16] hover:opacity-70 cursor-pointer"
          >
            <Minus className="w-3 h-3 stroke-[2.5]" />
          </button>
          <span className="text-xs font-bold text-[#2D1D16]">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-5 h-5 flex items-center justify-center text-[#2D1D16] hover:opacity-70 cursor-pointer"
          >
            <Plus className="w-3 h-3 stroke-[2.5]" />
          </button>
        </div>

        {/* Add to Cart button */}
        <button
          onClick={() => onAddToCart(product, quantity)}
          className="flex-1 py-3 px-5 rounded-full bg-[#5A3825] hover:bg-[#482b1b] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all cursor-pointer text-center"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
