import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '../types';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product) => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E6D9CB] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E6D9CB] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center">
              <Heart className="w-4 h-4 fill-rose-600" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-semibold text-[#2D1D16]">
                My Saved Wishlist
              </h2>
              <p className="text-xs text-[#705244]">
                {wishlistProducts.length} {wishlistProducts.length === 1 ? 'candle' : 'candles'} saved
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F3ECE2] text-[#705244] hover:text-[#2D1D16] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {wishlistProducts.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <Heart className="w-12 h-12 text-[#D9C8B5] mx-auto" />
              <p className="text-sm font-medium text-[#2D1D16]">Your wishlist is currently empty</p>
              <p className="text-xs text-[#705244] max-w-xs mx-auto">
                Explore our handcrafted scented collection and tap the heart icon to save your favorite fragrances!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {wishlistProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-3.5 rounded-2xl bg-white border border-[#E6D9CB] flex items-center gap-4 hover:border-[#B87333]/50 transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-xl object-cover border border-[#E6D9CB]"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm font-semibold text-[#2D1D16] truncate">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#705244] truncate">{product.categoryLabel}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-bold text-sm text-[#5A3825]">₹{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs line-through text-[#A89685]">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        onAddToCart(product);
                      }}
                      className="px-3.5 py-1.5 rounded-full bg-[#5A3825] hover:bg-[#432918] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                    <button
                      onClick={() => onRemoveFromWishlist(product.id)}
                      className="p-2 text-[#A89685] hover:text-rose-600 transition-colors cursor-pointer"
                      title="Remove from wishlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#E6D9CB] flex items-center justify-between">
          <span className="text-xs text-[#705244]">
            Prices range from ₹200 to ₹299
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#5A3825] hover:bg-[#432918] text-white text-xs font-semibold cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
