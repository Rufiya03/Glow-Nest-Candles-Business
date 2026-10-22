import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, MessageCircle, Truck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onOpenCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const freeDeliveryThreshold = 499;
  const progressPercent = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);
  const remainingForFree = freeDeliveryThreshold - subtotal;

  const generateWhatsAppOrderText = () => {
    let text = `Hello GlowNest Candles! I would like to place an order:\n\n`;
    cartItems.forEach((item, i) => {
      text += `${i + 1}. ${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}\n`;
      if (item.selectedScent) text += `   • Scent: ${item.selectedScent}\n`;
      if (item.customLabel) text += `   • Custom Inscription: ${item.customLabel}\n`;
      if (item.customVessel) text += `   • Vessel: ${item.customVessel}\n`;
      if (item.customTopping) text += `   • Topping: ${item.customTopping}\n`;
    });
    text += `\nSubtotal: ₹${subtotal}\n`;
    text += subtotal >= freeDeliveryThreshold ? `Shipping: FREE Pan-India\n` : `Shipping: Standard (₹50)\n`;
    text += `Total: ₹${subtotal >= freeDeliveryThreshold ? subtotal : subtotal + 50}\n\n`;
    text += `Please send me the payment and delivery confirmation details!`;
    return encodeURIComponent(text);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end">
      
      {/* Backdrop click to close */}
      <div className="flex-1" onClick={onClose} />

      <div className="w-full max-w-md bg-[#FAF7F2] h-full flex flex-col shadow-2xl border-l border-[#E6D9CB] animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#E6D9CB] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#B87333]" />
            <h3 className="text-lg font-serif font-bold text-[#2B1C15]">
              Your Shopping Bag
            </h3>
            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-[#FAF7F2] text-[#705244] border border-[#E6D9CB]">
              {cartItems.reduce((acc, it) => acc + it.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="p-1.5 rounded-full text-[#705244] hover:text-[#2B1C15] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-5 py-3 bg-[#F3ECE2] border-b border-[#E6D9CB] text-xs text-[#5C4033]">
          <div className="flex items-center justify-between mb-1.5 font-medium">
            <span className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#B87333]" />
              {subtotal >= freeDeliveryThreshold ? (
                <strong className="text-emerald-800">You unlocked FREE Pan-India Shipping!</strong>
              ) : (
                <span>Add <strong>₹{remainingForFree}</strong> more for Free Shipping</span>
              )}
            </span>
            <span className="font-mono">{Math.round(progressPercent)}%</span>
          </div>
          <div className="w-full bg-[#E0D3C3] rounded-full h-1.5 overflow-hidden">
            <div 
              className="bg-[#B87333] h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F3ECE2] text-[#B87333] flex items-center justify-center mx-auto text-2xl">
                🕯️
              </div>
              <h4 className="text-base font-serif font-semibold text-[#2B1C15]">
                Your shopping bag is empty
              </h4>
              <p className="text-xs text-[#705244] max-w-xs mx-auto">
                Discover our hand-poured soy scented candles and personalized celebration gifts.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-[#2B1C15] hover:bg-[#B87333] text-white text-xs font-medium transition-colors cursor-pointer"
              >
                Browse Collection
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-xl bg-white border border-[#E6D9CB] flex gap-3 shadow-2xs"
              >
                {/* Thumbnail */}
                <div className="w-20 h-20 rounded-lg bg-[#F7F2EA] overflow-hidden shrink-0 border border-[#E6D9CB]">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-bold text-[#2B1C15] line-clamp-1">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#A89685] hover:text-red-600 transition-colors p-0.5 cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Scent & Custom tags */}
                    <div className="text-[11px] text-[#705244] mt-0.5 space-y-0.5">
                      {item.selectedScent && (
                        <div>Scent: <span className="font-medium text-[#2B1C15]">{item.selectedScent}</span></div>
                      )}
                      {item.customLabel && (
                        <div className="truncate">Label: <span className="font-serif italic text-[#B87333]">{item.customLabel}</span></div>
                      )}
                    </div>
                  </div>

                  {/* Quantity & Unit Price */}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F0E6DA]">
                    <div className="flex items-center border border-[#D9C8B5] rounded-md bg-[#FAF7F2]">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center text-xs font-bold text-[#2B1C15] hover:bg-white cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-7 text-center text-xs font-mono font-medium text-[#2B1C15] tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center text-xs font-bold text-[#2B1C15] hover:bg-white cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-xs font-bold font-mono text-[#B87333] tabular-nums">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer / Checkout Actions */}
        {cartItems.length > 0 && (
          <div className="p-5 bg-white border-t border-[#E6D9CB] space-y-3">
            
            <div className="space-y-1.5 text-xs text-[#5C4033]">
              <div className="flex justify-between">
                <span>Items Subtotal:</span>
                <span className="font-mono text-[#2B1C15] font-semibold tabular-nums">
                  ₹{subtotal}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="font-medium">
                  {subtotal >= freeDeliveryThreshold ? (
                    <span className="text-emerald-700">FREE</span>
                  ) : (
                    <span className="font-mono text-[#705244]">₹50</span>
                  )}
                </span>
              </div>
              <div className="pt-2 border-t border-[#E6D9CB] flex justify-between items-baseline text-base font-bold text-[#2B1C15]">
                <span>Total Amount:</span>
                <span className="text-xl font-mono text-[#B87333] tabular-nums">
                  ₹{subtotal >= freeDeliveryThreshold ? subtotal : subtotal + 50}
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <button
                onClick={() => {
                  onClose();
                  onOpenCheckout();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-[#2B1C15] hover:bg-[#B87333] text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
              >
                <span>Proceed to Order (COD / UPI)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/919876543210?text=${generateWhatsAppOrderText()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl border border-[#25D366] hover:bg-[#25D366]/10 text-[#128C7E] font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Instant Order via WhatsApp (+91 98765 43210)</span>
              </a>
            </div>

            <p className="text-[10px] text-center text-[#8C7665]">
              Secure packaging · Cash on Delivery available · Pan-India delivery
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
