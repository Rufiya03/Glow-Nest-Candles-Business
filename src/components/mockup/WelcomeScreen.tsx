import React from 'react';

interface WelcomeScreenProps {
  onGetStarted: () => void;
  onLogIn: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onGetStarted,
  onLogIn,
}) => {
  return (
    <div className="relative w-full min-h-[640px] sm:min-h-[720px] flex items-center justify-center p-2 sm:p-6 bg-[#EFE8DD] select-none">
      {/* Clean, Full-fidelity Welcome Screen - No mobile chassis or fake status bar */}
      <div className="relative w-full max-w-[420px] aspect-[9/18.5] rounded-3xl overflow-hidden shadow-2xl bg-[#FAF7F2] border border-[#E6D9CB]/80">
        {/* Exact welcome image from design (clear, high-res, Lanczos sharpened, status bar removed) */}
        <img
          src="/assets/exact/welcome_screen_no_statusbar.jpg"
          alt="GlowNest Candles - Light up your moments"
          className="w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Interactive Hotspot: Single Get Started Button */}
        <button
          onClick={onGetStarted}
          className="absolute left-1/2 -translate-x-1/2 bottom-[10.5%] w-[82%] h-[6.8%] rounded-full bg-[#5A3825]/90 hover:bg-[#482b1b] text-white text-sm sm:text-base font-medium tracking-wide shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center border border-white/20"
          aria-label="Get Started"
        >
          <span>Get Started</span>
        </button>

        {/* Interactive Hotspot: Single Log In Link */}
        <button
          onClick={onLogIn}
          className="absolute left-1/2 -translate-x-1/2 bottom-[4.2%] text-xs sm:text-sm font-semibold text-[#5A3825] hover:text-[#2D1D16] tracking-wide cursor-pointer transition-colors hover:underline"
          aria-label="Log In"
        >
          Log In
        </button>
      </div>
    </div>
  );
};
