import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Banknote } from 'lucide-react';
import { USER_PROFILE } from '../../data/mockupData';

interface CheckoutScreenProps {
  onBack: () => void;
  onContinueToPayment: () => void;
}

export const CheckoutScreen: React.FC<CheckoutScreenProps> = ({
  onBack,
  onContinueToPayment,
}) => {
  const [deliveryMethod, setDeliveryMethod] = useState<'standard' | 'express'>('standard');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');

  return (
    <div className="relative w-full h-full min-h-[640px] flex flex-col justify-between bg-[#FBF8F4] text-[#2D1D16] overflow-y-auto">
      <div>
        {/* Top Header matching Screen 6 */}
        <div className="px-4 py-3.5 flex items-center relative border-b border-[#EAE0D4]/40 bg-[#FAF7F2]">
          <button
            onClick={onBack}
            className="p-1.5 text-[#2D1D16] hover:opacity-70 transition-opacity cursor-pointer"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2]" />
          </button>
          <h2 className="text-base font-semibold text-[#2D1D16] mx-auto pr-7">
            Checkout
          </h2>
        </div>

        {/* 3 Steps Indicator matching Screen 6 */}
        <div className="px-8 py-3.5 flex items-center justify-between relative">
          <div className="absolute top-1/2 left-12 right-12 h-0.5 bg-[#E0D4C5] -translate-y-1 z-0" />

          {/* Step 1: Shipping (Active) */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-5 h-5 rounded-full bg-[#5A3825] text-white flex items-center justify-center text-[10px] font-bold">
              +
            </div>
            <span className="text-[10px] font-medium text-[#5A3825] mt-1">Shipping</span>
          </div>

          {/* Step 2: Payment */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-5 h-5 rounded-full bg-white border border-[#D0C2B2] text-[#8D7B6F] flex items-center justify-center text-[10px]">
              ○
            </div>
            <span className="text-[10px] font-medium text-[#8D7B6F] mt-1">Payment</span>
          </div>

          {/* Step 3: Confirmation */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-5 h-5 rounded-full bg-white border border-[#D0C2B2] text-[#8D7B6F] flex items-center justify-center text-[10px]">
              ○
            </div>
            <span className="text-[10px] font-medium text-[#8D7B6F] mt-1">Confirmation</span>
          </div>
        </div>

        {/* Shipping Address Box */}
        <div className="px-5 py-2">
          <div className="flex items-center justify-between mb-1.5">
            <h3 className="text-xs font-semibold text-[#2D1D16]">Shipping Address</h3>
            <button className="text-[11px] text-[#8D7B6F] hover:text-[#5A3825] cursor-pointer">
              Edit
            </button>
          </div>
          <div className="bg-white rounded-xl p-3.5 border border-[#EAE0D4] shadow-xs text-xs space-y-1">
            <p className="font-semibold text-[#2D1D16]">{USER_PROFILE.name}</p>
            <p className="text-[#5A453A]">{USER_PROFILE.address.line1}</p>
            <p className="text-[#5A453A]">{USER_PROFILE.address.stateAndPin}</p>
          </div>
        </div>

        {/* Delivery Method Box */}
        <div className="px-5 py-2">
          <h3 className="text-xs font-semibold text-[#2D1D16] mb-1.5">Delivery Method</h3>
          <div className="bg-white rounded-xl border border-[#EAE0D4] shadow-xs overflow-hidden divide-y divide-[#F0E6DA]">
            {/* Standard Delivery */}
            <label
              onClick={() => setDeliveryMethod('standard')}
              className="flex items-center justify-between p-3 cursor-pointer hover:bg-[#FAF7F2] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    deliveryMethod === 'standard'
                      ? 'border-[#5A3825] bg-[#5A3825]'
                      : 'border-[#C5B5A5]'
                  }`}
                >
                  {deliveryMethod === 'standard' && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </div>
                <div>
                  <div className="text-xs font-medium text-[#2D1D16]">
                    Standard Delivery
                  </div>
                  <div className="text-[10px] text-[#8D7B6F]">(3–5 days)</div>
                </div>
              </div>
              <span className="text-xs font-medium text-[#2D1D16]">Free</span>
            </label>

            {/* Express Delivery */}
            <label
              onClick={() => setDeliveryMethod('express')}
              className="flex items-center justify-between p-3 cursor-pointer hover:bg-[#FAF7F2] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    deliveryMethod === 'express'
                      ? 'border-[#5A3825] bg-[#5A3825]'
                      : 'border-[#C5B5A5]'
                  }`}
                >
                  {deliveryMethod === 'express' && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </div>
                <div>
                  <div className="text-xs font-medium text-[#2D1D16]">
                    Express Delivery
                  </div>
                  <div className="text-[10px] text-[#8D7B6F]">(1–2 days)</div>
                </div>
              </div>
              <span className="text-xs font-medium text-[#2D1D16]">₹ 99</span>
            </label>
          </div>
        </div>

        {/* Payment Method Box */}
        <div className="px-5 py-2 pb-6">
          <h3 className="text-xs font-semibold text-[#2D1D16] mb-1.5">Payment Method</h3>
          <div className="bg-white rounded-xl border border-[#EAE0D4] shadow-xs overflow-hidden divide-y divide-[#F0E6DA]">
            {/* UPI / Google Pay */}
            <label
              onClick={() => setPaymentMethod('upi')}
              className="flex items-center justify-between p-3 cursor-pointer hover:bg-[#FAF7F2] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    paymentMethod === 'upi'
                      ? 'border-[#5A3825] bg-[#5A3825]'
                      : 'border-[#C5B5A5]'
                  }`}
                >
                  {paymentMethod === 'upi' && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-medium text-[#2D1D16]">UPI / Google Pay</span>
                </div>
              </div>
              <span className="text-[10px] bg-green-50 text-green-700 font-semibold px-2 py-0.5 rounded-full">
                Fast & Secure
              </span>
            </label>

            {/* Card */}
            <label
              onClick={() => setPaymentMethod('card')}
              className="flex items-center justify-between p-3 cursor-pointer hover:bg-[#FAF7F2] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    paymentMethod === 'card'
                      ? 'border-[#5A3825] bg-[#5A3825]'
                      : 'border-[#C5B5A5]'
                  }`}
                >
                  {paymentMethod === 'card' && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </div>
                <div className="flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-[#5A3825]" />
                  <span className="text-xs font-medium text-[#2D1D16]">Card (Debit / Credit)</span>
                </div>
              </div>
            </label>

            {/* Cash on Delivery */}
            <label
              onClick={() => setPaymentMethod('cod')}
              className="flex items-center justify-between p-3 cursor-pointer hover:bg-[#FAF7F2] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    paymentMethod === 'cod'
                      ? 'border-[#5A3825] bg-[#5A3825]'
                      : 'border-[#C5B5A5]'
                  }`}
                >
                  {paymentMethod === 'cod' && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </div>
                <div className="flex items-center gap-1.5">
                  <Banknote className="w-3.5 h-3.5 text-[#5A3825]" />
                  <span className="text-xs font-medium text-[#2D1D16]">Cash on Delivery</span>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Continue to Payment button */}
      <div className="p-4 bg-white border-t border-[#EAE0D4] shadow-xs">
        <button
          onClick={onContinueToPayment}
          className="w-full py-3.5 px-4 rounded-full bg-[#5A3825] hover:bg-[#482b1b] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md active:scale-98 cursor-pointer text-center"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};
