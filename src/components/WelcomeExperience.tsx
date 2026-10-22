import React from 'react';
import { ArrowRight, Sparkles, User, ShieldCheck } from 'lucide-react';

interface WelcomeExperienceProps {
  onGetStarted: () => void;
  onLogIn: () => void;
  isOverlay?: boolean;
  onClose?: () => void;
}

export const WelcomeExperience: React.FC<WelcomeExperienceProps> = ({
  onGetStarted,
  onLogIn,
  isOverlay = false,
  onClose,
}) => {
  return (
    <section 
      id="welcome"
      className={`relative w-full ${
        isOverlay 
          ? 'fixed inset-0 z-50 overflow-y-auto bg-[#2D1D16]/70 backdrop-blur-sm flex items-center justify-center p-4' 
          : 'relative min-h-[90vh] flex items-center justify-center bg-[#F7F2EA] py-12 px-4 sm:px-6'
      }`}
    >
      {/* Background Ambience Layer */}
      <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-[#E6D9CB] bg-white">
        
        {/* Responsive Layout: Photo + Elegant Welcome Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[580px]">
          
          {/* Left / Top: High-Res Beautiful Candle Photo */}
          <div className="md:col-span-7 relative h-72 md:h-auto overflow-hidden bg-[#EAE0D3]">
            <img
              src="/src/assets/images/welcome_candles_bg_1792576165159.jpg"
              alt="Handcrafted artisanal candles glowing with flowers"
              className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02] transform hover:scale-105 transition-transform duration-700"
            />
            {/* Soft Warm Radial Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#FAF7F2]/60" />
            
            {/* Tag on image */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
              <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-[#5A3825] shadow-xs flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B87333]" />
                100% Pure Soy Wax · ₹200 – ₹299
              </span>
            </div>
          </div>

          {/* Right: Clean Editorial Brand Identity (Zero Duplicates) */}
          <div className="md:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-[#FAF7F2] text-center md:text-left relative">
            
            {/* Close Button if opened as overlay */}
            {isOverlay && onClose && (
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-[#705244] hover:text-[#2D1D16] p-2 rounded-full hover:bg-[#EFE8DD] transition-colors cursor-pointer text-xs font-semibold"
                aria-label="Close Welcome Screen"
              >
                ✕ Close
              </button>
            )}

            {/* Top Brand Logo & Wordmark */}
            <div className="space-y-4">
              <div className="flex flex-col items-center md:items-start">
                <div className="w-14 h-14 rounded-full bg-[#5A3825] text-white flex items-center justify-center text-2xl shadow-md border-2 border-[#E5C9A6]/40 mb-3">
                  🕯️
                </div>
                <h1 
                  className="text-2xl sm:text-3xl font-bold tracking-wider text-[#2D1D16] uppercase"
                  style={{ fontFamily: 'var(--font-brand), "Cinzel", "Cormorant Garamond", Georgia, serif' }}
                >
                  GlowNest
                  <span className="block text-sm font-semibold tracking-[0.25em] text-[#8D6B4F] mt-0.5">
                    CANDLES
                  </span>
                </h1>
                
                <p 
                  className="text-xl sm:text-2xl text-[#6B4226] mt-1 italic"
                  style={{ fontFamily: 'var(--font-script), "Great Vibes", cursive' }}
                >
                  Light up your moments
                </p>
              </div>

              <p className="text-sm text-[#705244] leading-relaxed pt-2">
                Handcrafted organic soy candles infused with botanical essential oils. Curated for peaceful sanctuaries, romantic evenings, and joyful celebrations.
              </p>
            </div>

            {/* Middle Feature Highlights */}
            <div className="py-6 border-y border-[#E6D9CB]/80 my-4 space-y-2 text-xs text-[#5C4033] text-left">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B87333] shrink-0" />
                <span>Hand-poured in small batches in India</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B87333] shrink-0" />
                <span>Smokeless cotton wick & long-lasting aromas</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B87333] shrink-0" />
                <span>Affordable luxury: ₹200 to ₹299 range</span>
              </div>
            </div>

            {/* Bottom Actions: EXACTLY ONE "Get Started" and ONE "Log In" */}
            <div className="space-y-3 pt-2">
              <button
                onClick={onGetStarted}
                className="w-full py-3.5 px-6 rounded-full bg-[#5A3825] hover:bg-[#432918] active:scale-[0.99] text-white text-sm sm:text-base font-semibold tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onLogIn}
                className="w-full py-2.5 text-xs sm:text-sm font-semibold text-[#6B4226] hover:text-[#2D1D16] tracking-wide transition-colors flex items-center justify-center gap-1.5 cursor-pointer hover:underline"
              >
                <User className="w-3.5 h-3.5" />
                <span>Log In / Customer Account</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
