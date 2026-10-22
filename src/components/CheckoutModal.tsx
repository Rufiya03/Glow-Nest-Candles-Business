import React, { useState } from 'react';
import { X, CheckCircle, ShoppingBag, Truck, MessageCircle } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderSuccess,
}) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [paymentMode, setPaymentMode] = useState<'cod' | 'upi'>('cod');
  const [giftNote, setGiftNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState<string | null>(null);

  const subtotal = cartItems.reduce((sum, it) => sum + it.price * it.quantity, 0);
  const shipping = subtotal >= 499 ? 0 : 50;
  const grandTotal = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !address || !pincode) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const orderId = `GN-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderConfirmed(orderId);
      setIsSubmitting(false);
      onOrderSuccess();
    }, 1200);
  };

  const whatsappReceiptText = encodeURIComponent(
    `Hello GlowNest Candles! I have placed Order #${orderConfirmed || ''}:\n` +
    `• Name: ${fullName}\n` +
    `• Phone: ${phone}\n` +
    `• Address: ${address}, ${city} - ${pincode}\n` +
    `• Payment Mode: ${paymentMode === 'cod' ? 'Cash on Delivery' : 'UPI Payment'}\n` +
    `• Total: ₹${grandTotal}\n` +
    `Please confirm my shipment!`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E6D9CB] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 bg-white border-b border-[#E6D9CB] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#B87333]" />
            <h3 className="text-xl font-serif font-bold text-[#2B1C15]">
              {orderConfirmed ? 'Order Confirmed!' : 'Delivery & Checkout'}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full text-[#705244] hover:text-[#2B1C15] hover:bg-[#FAF7F2] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderConfirmed ? (
          /* Confirmation State */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#F3ECE2] text-[#B87333] border border-[#E6D9CB]">
                Order {orderConfirmed}
              </span>
              <h4 className="text-2xl font-serif font-bold text-[#2B1C15] mt-3">
                Thank You, {fullName}!
              </h4>
              <p className="text-xs sm:text-sm text-[#5C4033] max-w-md mx-auto mt-2 leading-relaxed">
                Your artisanal handmade candles are now being lovingly prepared in small batches. We will contact you at <strong>{phone}</strong> with dispatch tracking.
              </p>
            </div>

            {/* Order Summary receipt card */}
            <div className="p-4 bg-white rounded-xl border border-[#E6D9CB] text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between text-[#5C4033]">
                <span>Recipient:</span>
                <span className="font-semibold text-[#2B1C15]">{fullName}</span>
              </div>
              <div className="flex justify-between text-[#5C4033]">
                <span>Shipping Address:</span>
                <span className="font-medium text-[#2B1C15] truncate max-w-[200px]">{address}, {city}</span>
              </div>
              <div className="flex justify-between text-[#5C4033]">
                <span>Payment Mode:</span>
                <span className="font-semibold text-[#B87333]">
                  {paymentMode === 'cod' ? 'Cash on Delivery (COD)' : 'UPI on Delivery'}
                </span>
              </div>
              <div className="pt-2 border-t border-[#E6D9CB] flex justify-between font-bold text-sm text-[#2B1C15]">
                <span>Total Amount:</span>
                <span className="font-mono text-[#B87333]">₹{grandTotal}</span>
              </div>
            </div>

            {/* WhatsApp notification action */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <a
                href={`https://wa.me/919876543210?text=${whatsappReceiptText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-xs flex items-center justify-center gap-2 shadow-xs transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Track on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-xl bg-[#2B1C15] text-white font-medium text-xs hover:bg-[#B87333] transition-colors cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          /* Form State */
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div>
                <label className="block text-xs font-semibold text-[#2B1C15] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Radhika Sharma"
                  className="w-full px-3.5 py-2 text-xs bg-white border border-[#D9C8B5] rounded-lg focus:outline-none focus:border-[#B87333]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2B1C15] mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2 text-xs bg-white border border-[#D9C8B5] rounded-lg focus:outline-none focus:border-[#B87333]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-[#2B1C15] mb-1">
                  Complete Delivery Address *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Flat/House No., Building, Street, Landmark"
                  className="w-full px-3.5 py-2 text-xs bg-white border border-[#D9C8B5] rounded-lg focus:outline-none focus:border-[#B87333]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2B1C15] mb-1">
                  City / Town *
                </label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Mumbai"
                  className="w-full px-3.5 py-2 text-xs bg-white border border-[#D9C8B5] rounded-lg focus:outline-none focus:border-[#B87333]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2B1C15] mb-1">
                  Pincode *
                </label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="e.g. 400001"
                  className="w-full px-3.5 py-2 text-xs bg-white border border-[#D9C8B5] rounded-lg focus:outline-none focus:border-[#B87333]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-[#2B1C15] mb-1">
                  Gift Message or Special Notes (Optional)
                </label>
                <input
                  type="text"
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  placeholder="e.g. Please add a handwritten birthday greeting card!"
                  className="w-full px-3.5 py-2 text-xs bg-white border border-[#D9C8B5] rounded-lg focus:outline-none focus:border-[#B87333]"
                />
              </div>

            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2 pt-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#705244]">
                Payment Method
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMode('cod')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    paymentMode === 'cod'
                      ? 'border-[#B87333] bg-[#B87333]/15 font-semibold text-[#2B1C15]'
                      : 'border-[#D9C8B5] bg-white text-[#5C4033]'
                  }`}
                >
                  <div className="text-xs font-bold">💵 Cash on Delivery</div>
                  <div className="text-[10px] text-[#8C7665] mt-0.5">Pay in cash upon arrival</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMode('upi')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    paymentMode === 'upi'
                      ? 'border-[#B87333] bg-[#B87333]/15 font-semibold text-[#2B1C15]'
                      : 'border-[#D9C8B5] bg-white text-[#5C4033]'
                  }`}
                >
                  <div className="text-xs font-bold">⚡ UPI / GPay / PhonePe</div>
                  <div className="text-[10px] text-[#8C7665] mt-0.5">Pay securely on delivery or scan QR</div>
                </button>
              </div>
            </div>

            {/* Order Cost Breakdown */}
            <div className="p-4 bg-white rounded-xl border border-[#E6D9CB] text-xs space-y-1.5">
              <div className="flex justify-between text-[#5C4033]">
                <span>Items ({cartItems.reduce((acc, it) => acc + it.quantity, 0)}):</span>
                <span className="font-mono tabular-nums">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-[#5C4033]">
                <span>Shipping:</span>
                <span>{shipping === 0 ? <strong className="text-emerald-700">FREE</strong> : '₹50'}</span>
              </div>
              <div className="pt-2 border-t border-[#E6D9CB] flex justify-between font-bold text-sm text-[#2B1C15]">
                <span>Total Payable:</span>
                <span className="text-base font-mono text-[#B87333] tabular-nums">₹{grandTotal}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 rounded-xl bg-[#2B1C15] hover:bg-[#B87333] text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer disabled:opacity-75"
            >
              {isSubmitting ? (
                <span>Confirming Order...</span>
              ) : (
                <span>Place Order (₹{grandTotal})</span>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
