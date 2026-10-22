import React, { useState } from 'react';
import { X, Star, ShoppingBag, MessageCircle, Clock, Sparkles, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, scent?: string) => void;
  onCustomize?: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onCustomize,
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedScent, setSelectedScent] = useState<string>(
    product.scentOptions ? product.scentOptions[0] : ''
  );
  const [addedNotice, setAddedNotice] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedScent);
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
      onClose();
    }, 1000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello GlowNest Candles! I would like to order:\n- Item: ${product.name}\n- Price: ₹${product.price}\n- Quantity: ${quantity}\n${
      selectedScent ? `- Scent: ${selectedScent}\n` : ''
    }Please let me know how to proceed!`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E6D9CB] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#2B1C15] shadow-xs transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left: Product Image */}
          <div className="relative aspect-4/3 md:aspect-auto md:h-full bg-[#F3ECE2] overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-3 left-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/95 text-[#2B1C15] border border-[#E6D9CB]">
                {product.waxType}
              </span>
            </div>
          </div>

          {/* Right: Product Details & Purchase Form */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs text-[#705244]">
                <span className="font-semibold uppercase tracking-wider text-[#B87333]">
                  {product.categoryLabel}
                </span>
                <div className="flex items-center gap-1 text-amber-500 font-medium">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-[#2B1C15] font-bold">{product.rating.toFixed(1)}</span>
                  <span className="text-[#8C7665]">({product.reviewCount})</span>
                </div>
              </div>

              {/* Title & Price */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2B1C15]">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-mono text-[#B87333] tabular-nums">
                    ₹{product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm font-mono text-[#A89685] line-through tabular-nums">
                      ₹{product.originalPrice}
                    </span>
                  )}
                  <span className="text-xs text-[#8C7665] ml-1">Taxes included</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Specifications: Burn time & Dimensions */}
              <div className="grid grid-cols-2 gap-2 text-xs py-3 px-3.5 bg-[#F3ECE2] rounded-xl text-[#4B3226]">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#B87333]" />
                  <span>Burn: <strong>{product.burnTime}</strong></span>
                </div>
                <div>
                  <span>Vessel: <strong>Reusable Jar</strong></span>
                </div>
              </div>

              {/* Scent Pyramid if available */}
              {product.scentNotes && (
                <div className="space-y-1.5 text-xs border-t border-[#E6D9CB] pt-3">
                  <span className="font-semibold text-[#2B1C15]">Fragrance Pyramid:</span>
                  <div className="text-[#5C4033] space-y-0.5 pl-2 border-l-2 border-[#B87333]">
                    <div><span className="font-medium text-[#2B1C15]">Top:</span> {product.scentNotes.top}</div>
                    <div><span className="font-medium text-[#2B1C15]">Heart:</span> {product.scentNotes.heart}</div>
                    <div><span className="font-medium text-[#2B1C15]">Base:</span> {product.scentNotes.base}</div>
                  </div>
                </div>
              )}

              {/* Scent Variant Selector */}
              {product.scentOptions && product.scentOptions.length > 0 && (
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#2B1C15]">
                    Select Fragrance Blend:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {product.scentOptions.map((scent) => (
                      <button
                        key={scent}
                        type="button"
                        onClick={() => setSelectedScent(scent)}
                        className={`px-3 py-2 text-xs rounded-lg border text-left transition-all cursor-pointer ${
                          selectedScent === scent
                            ? 'border-[#B87333] bg-[#B87333]/10 font-medium text-[#2B1C15]'
                            : 'border-[#D9C8B5] bg-white hover:border-[#B87333] text-[#5C4033]'
                        }`}
                      >
                        {scent}
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Actions */}
            <div className="space-y-3 pt-4 border-t border-[#E6D9CB]">
              
              <div className="flex items-center gap-3">
                {/* Quantity stepper */}
                <div className="flex items-center border border-[#D9C8B5] rounded-xl bg-white p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[#2B1C15] hover:bg-[#F3ECE2] font-semibold transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-mono font-medium text-sm text-[#2B1C15] tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[#2B1C15] hover:bg-[#F3ECE2] font-semibold transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag Button */}
                <button
                  onClick={handleAdd}
                  disabled={addedNotice}
                  className={`flex-1 py-3 px-5 rounded-xl font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    addedNotice
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#2B1C15] hover:bg-[#B87333] text-white shadow-sm'
                  }`}
                >
                  {addedNotice ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Bag
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" /> Add to Bag (₹{product.price * quantity})
                    </>
                  )}
                </button>
              </div>

              {/* Secondary CTA: WhatsApp Direct Order or Customize */}
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl border border-[#25D366] hover:bg-[#25D366]/10 text-[#128C7E] font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Instant WhatsApp Order</span>
                </a>

                {product.category === 'custom' && onCustomize && (
                  <button
                    onClick={() => {
                      onClose();
                      onCustomize(product);
                    }}
                    className="py-2.5 px-4 rounded-xl border border-[#D9C8B5] hover:border-[#B87333] bg-white text-[#2B1C15] font-medium text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#B87333]" />
                    <span>Open Customizer</span>
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
