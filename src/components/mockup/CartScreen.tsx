import React from 'react';
import { ArrowLeft, Trash2, Minus, Plus } from 'lucide-react';
import { BottomNavBar } from './PhoneChrome';
import { CartItem } from '../../data/mockupData';

interface CartScreenProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
  onBack: () => void;
  onNavigateTab: (tab: 'home' | 'shop' | 'wishlist' | 'profile') => void;
  wishlistCount?: number;
}

export const CartScreen: React.FC<CartScreenProps> = ({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onBack,
  onNavigateTab,
  wishlistCount = 2,
}) => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = 0; // Free in design
  const total = subtotal + shipping;

  return (
    <div className="relative w-full h-full min-h-[640px] flex flex-col justify-between bg-[#FBF8F4] text-[#2D1D16] overflow-y-auto">
      <div>
        {/* Top Header matching Screen 5 */}
        <div className="px-4 py-3.5 flex items-center relative border-b border-[#EAE0D4]/40 bg-[#FAF7F2]">
          <button
            onClick={onBack}
            className="p-1.5 text-[#2D1D16] hover:opacity-70 transition-opacity cursor-pointer"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2]" />
          </button>
          <h2 className="text-base font-semibold text-[#2D1D16] mx-auto pr-7">
            My Cart
          </h2>
        </div>

        {/* Cart Item List */}
        <div className="px-5 py-3.5 space-y-3">
          {cartItems.map((item) => (
            <div
              key={item.product.id}
              className="bg-white rounded-xl p-3 border border-[#EAE0D4] shadow-xs flex items-center justify-between gap-3"
            >
              {/* Product Thumbnail */}
              <div className="w-16 h-16 rounded-lg bg-[#F7F2EA] overflow-hidden shrink-0">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Product Details & Stepper */}
              <div className="flex-1 min-w-0 pr-1">
                <h4 className="text-xs font-semibold text-[#2D1D16] line-clamp-1 leading-snug">
                  {item.product.name}
                </h4>
                <div className="text-xs font-bold text-[#2D1D16] mt-0.5">
                  ₹ {item.product.price}
                </div>

                {/* Quantity Stepper */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center border border-[#E0D4C5] rounded-md px-1.5 py-0.5 bg-[#FAF7F2] text-[11px]">
                    <button
                      onClick={() =>
                        onUpdateQuantity(
                          item.product.id,
                          Math.max(1, item.quantity - 1)
                        )
                      }
                      className="p-0.5 text-[#5A3825] hover:opacity-70 cursor-pointer"
                    >
                      <Minus className="w-2.5 h-2.5" />
                    </button>
                    <span className="w-5 text-center font-semibold text-[#2D1D16]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="p-0.5 text-[#5A3825] hover:opacity-70 cursor-pointer"
                    >
                      <Plus className="w-2.5 h-2.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Delete Trash Button */}
              <button
                onClick={() => onRemoveItem(item.product.id)}
                className="text-[#B09E91] hover:text-[#5A3825] p-1.5 cursor-pointer transition-colors"
                title="Remove item"
              >
                <Trash2 className="w-4 h-4 stroke-[1.5]" />
              </button>
            </div>
          ))}

          {cartItems.length === 0 && (
            <div className="text-center py-12 text-xs text-[#8D7B6F]">
              Your cart is empty. Add some candles!
            </div>
          )}
        </div>

        {/* Pricing Summary matching Screen 5 */}
        <div className="px-5 py-3 space-y-2 text-xs border-t border-[#EAE0D4] mt-2">
          <div className="flex justify-between text-[#5A453A]">
            <span>Subtotal</span>
            <span className="font-semibold text-[#2D1D16]">₹ {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-[#5A453A]">
            <span>Shipping</span>
            <span className="font-semibold text-[#2D1D16]">Free</span>
          </div>
          <div className="flex justify-between text-sm font-bold text-[#2D1D16] pt-1">
            <span>Total</span>
            <span>₹ {total.toLocaleString()}</span>
          </div>
        </div>

        {/* Proceed to Checkout Button */}
        <div className="px-5 pt-2 pb-4">
          <button
            onClick={onProceedToCheckout}
            disabled={cartItems.length === 0}
            className="w-full py-3.5 px-4 rounded-full bg-[#5A3825] hover:bg-[#482b1b] disabled:opacity-50 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md active:scale-98 cursor-pointer text-center"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar
        activeTab="shop"
        onTabChange={onNavigateTab}
        wishlistCount={wishlistCount}
      />
    </div>
  );
};
