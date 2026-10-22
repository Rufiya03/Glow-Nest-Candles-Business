import React, { useState } from 'react';
import { ArrowLeft, Check, Truck } from 'lucide-react';
import { StatusBar } from './PhoneChrome';
import { ORDER_TRACKING } from '../../data/mockupData';

interface TrackOrderScreenProps {
  onBack: () => void;
  onViewDetails?: () => void;
}

export const TrackOrderScreen: React.FC<TrackOrderScreenProps> = ({
  onBack,
  onViewDetails,
}) => {
  const [showOrderModal, setShowOrderModal] = useState(false);

  return (
    <div className="relative w-full h-full min-h-[640px] flex flex-col justify-between bg-[#FBF8F4] text-[#2D1D16] overflow-y-auto">
      <div>
        <StatusBar theme="dark" />

        {/* Top Header */}
        <div className="px-4 py-2 flex items-center relative">
          <button
            onClick={onBack}
            className="p-1.5 text-[#2D1D16] hover:opacity-70 transition-opacity cursor-pointer"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2]" />
          </button>
          <h2 className="text-base font-semibold text-[#2D1D16] mx-auto pr-7">
            Track Order
          </h2>
        </div>

        {/* Vertical Stepper Timeline */}
        <div className="px-7 py-4">
          <div className="space-y-6 relative">
            {ORDER_TRACKING.steps.map((step, index) => {
              const isLast = index === ORDER_TRACKING.steps.length - 1;
              const isCompleted = step.completed && !step.current;
              const isCurrent = step.current;

              return (
                <div key={step.title} className="flex items-start gap-4 relative">
                  {/* Vertical connecting line */}
                  {!isLast && (
                    <div
                      className={`absolute left-2.5 top-6 bottom-0 w-0.5 -mb-6 ${
                        step.completed ? 'bg-[#5A3825]' : 'bg-[#E0D4C5]'
                      }`}
                    />
                  )}

                  {/* Icon Indicator Circle */}
                  <div className="relative z-10 shrink-0">
                    {isCurrent ? (
                      <div className="w-5 h-5 rounded-full bg-[#5A3825] text-white flex items-center justify-center shadow-xs">
                        <Truck className="w-3 h-3" />
                      </div>
                    ) : isCompleted ? (
                      <div className="w-5 h-5 rounded-full bg-[#5A3825] text-white flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-white border border-[#D0C2B2] flex items-center justify-center" />
                    )}
                  </div>

                  {/* Step Label & Timestamp */}
                  <div className="flex-1 min-w-0 -mt-0.5">
                    <h4
                      className={`text-xs font-semibold ${
                        isCurrent || isCompleted
                          ? 'text-[#2D1D16]'
                          : 'text-[#8D7B6F]'
                      }`}
                    >
                      {step.title}
                    </h4>
                    <p className="text-[10px] text-[#8D7B6F] mt-0.5">
                      {step.timestamp}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Status Box Card at Bottom */}
        <div className="px-5 py-4">
          <div className="bg-[#F5ECE1] rounded-2xl p-5 border border-[#EAE0D4] text-center flex flex-col items-center">
            {/* Illustrated delivery van */}
            <div className="w-12 h-10 rounded-xl bg-[#5A3825]/15 flex items-center justify-center text-[#5A3825] mb-2">
              <Truck className="w-6 h-6" />
            </div>

            <h3 className="text-xs font-bold text-[#2D1D16] mt-1">
              Your order is out for delivery!
            </h3>
            <p className="text-[11px] text-[#705244] mt-1 max-w-[200px] leading-relaxed">
              It will be delivered to your address soon.
            </p>

            <button
              onClick={() => {
                setShowOrderModal(true);
                onViewDetails?.();
              }}
              className="mt-4 w-full py-2.5 px-4 rounded-full bg-[#5A3825] hover:bg-[#482b1b] text-white text-xs font-semibold tracking-wide transition-all shadow-xs cursor-pointer"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Order Details Modal Popup if clicked */}
      {showOrderModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-5 max-w-xs w-full shadow-xl border border-[#EAE0D4] space-y-3 text-xs">
            <div className="flex justify-between items-center border-b border-[#F0E6DA] pb-2">
              <span className="font-bold text-[#2D1D16]">Order #{ORDER_TRACKING.orderId}</span>
              <button
                onClick={() => setShowOrderModal(false)}
                className="text-stone-400 hover:text-stone-800 text-sm font-bold"
              >
                ✕
              </button>
            </div>
            <div className="space-y-1.5 text-[#5A453A]">
              <p><strong>Recipient:</strong> Rufiya Shaikh</p>
              <p><strong>Address:</strong> 123, Green Park, Bhopal</p>
              <p><strong>Courier:</strong> BlueDart Express Tracking #BD-98231</p>
              <p><strong>Delivery Agent:</strong> Rajesh (+91 98200 11223)</p>
            </div>
            <button
              onClick={() => setShowOrderModal(false)}
              className="w-full py-2 rounded-xl bg-[#5A3825] text-white font-medium text-xs mt-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
