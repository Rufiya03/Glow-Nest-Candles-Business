import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  theme = 'dark',
  showTagline = true,
}) => {
  const isLight = theme === 'light';
  const textColor = isLight ? '#FAF7F2' : '#2D1D16';
  const subtextColor = isLight ? '#D9C8B5' : '#6B4226';

  // Small header logo (used in Home Screen header and top bars):
  // Exactly matching Screen 2: "GlowNest" (serif, bold, mixed case) + "C A N D L E S"
  if (size === 'sm') {
    return (
      <div className="flex flex-col items-center select-none text-center">
        <h1 
          className="text-xl sm:text-2xl font-bold tracking-tight leading-none"
          style={{ fontFamily: 'var(--font-brand), "Cinzel", "Cormorant Garamond", Georgia, serif', color: textColor }}
        >
          GlowNest
        </h1>
        <span 
          className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase font-semibold mt-0.5"
          style={{ color: subtextColor }}
        >
          CANDLES
        </span>
      </div>
    );
  }

  const isLg = size === 'lg';

  // Large/medium logo with laurel wreath & candle flame emblem (as on Welcome Screen)
  return (
    <div className="flex flex-col items-center select-none text-center">
      {/* Symmetrical Botanical Laurel & Candle Emblem */}
      <div className={`relative flex items-center justify-center ${isLg ? 'mb-4' : 'mb-2'}`}>
        <svg
          viewBox="0 0 160 120"
          className={isLg ? 'w-24 h-20' : 'w-18 h-14'}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Candle Jar Container */}
          <rect
            x="64"
            y="48"
            width="32"
            height="46"
            rx="4"
            stroke="#6B4226"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Candle Wax Top Line */}
          <line x1="68" y1="58" x2="92" y2="58" stroke="#6B4226" strokeWidth="1.5" />
          {/* Wick */}
          <line x1="80" y1="48" x2="80" y2="39" stroke="#6B4226" strokeWidth="2" strokeLinecap="round" />
          {/* Tear-drop Flame */}
          <path
            d="M80 20C83.5 28 86.5 31.5 86.5 35.5C86.5 39.5 83.5 41.5 80 41.5C76.5 41.5 73.5 39.5 73.5 35.5C73.5 31.5 76.5 28 80 20Z"
            fill="#C89257"
            stroke="#6B4226"
            strokeWidth="1.5"
          />

          {/* Left Laurel Leaves */}
          <g stroke="#6B4226" strokeWidth="1.75" fill="none" strokeLinecap="round">
            <path d="M60 96C50 90 42 74 42 56C42 46 47 38 52 32" />
            <path d="M52 32C46 33 42 28 44 22C47 23 52 27 52 32Z" fill="#FAF7F2" />
            <path d="M46 46C39 46 36 41 38 35C42 37 46 41 46 46Z" fill="#FAF7F2" />
            <path d="M42 62C35 60 33 54 36 48C40 51 43 57 42 62Z" fill="#FAF7F2" />
            <path d="M45 78C38 74 37 68 41 62C44 66 46 72 45 78Z" fill="#FAF7F2" />
            <path d="M52 90C46 84 47 78 52 73C54 78 54 85 52 90Z" fill="#FAF7F2" />
          </g>

          {/* Right Laurel Leaves */}
          <g stroke="#6B4226" strokeWidth="1.75" fill="none" strokeLinecap="round">
            <path d="M100 96C110 90 118 74 118 56C118 46 113 38 108 32" />
            <path d="M108 32C114 33 118 28 116 22C113 23 108 27 108 32Z" fill="#FAF7F2" />
            <path d="M114 46C121 46 124 41 122 35C118 37 114 41 114 46Z" fill="#FAF7F2" />
            <path d="M118 62C125 60 127 54 124 48C120 51 117 57 118 62Z" fill="#FAF7F2" />
            <path d="M115 78C122 74 123 68 119 62C116 66 114 72 115 78Z" fill="#FAF7F2" />
            <path d="M108 90C114 84 113 78 108 73C106 78 106 85 108 90Z" fill="#FAF7F2" />
          </g>
        </svg>
      </div>

      {/* Brand Name: GlowNest (classic serif, mixed case) */}
      <h1
        className={`font-bold tracking-tight leading-none text-[#2D1D16] ${
          isLg ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
        }`}
        style={{
          fontFamily: 'var(--font-brand), "Cinzel", "Cormorant Garamond", Georgia, serif',
          color: textColor,
        }}
      >
        GlowNest
      </h1>

      {/* Spaced Sub-Wordmark with em-dash: CANDLES — */}
      <div className="flex items-center justify-center gap-1.5 mt-1.5">
        <span
          className={`tracking-[0.28em] font-semibold uppercase ${
            isLg ? 'text-xs' : 'text-[10px]'
          }`}
          style={{
            fontFamily: 'var(--font-sans)',
            color: subtextColor,
          }}
        >
          C A N D L E S —
        </span>
      </div>

      {/* Elegant Script Tagline: "Light up your moments" */}
      {showTagline && (
        <span
          className={`block ${isLg ? 'text-xl sm:text-2xl mt-2' : 'text-base sm:text-lg mt-1'}`}
          style={{
            fontFamily: 'var(--font-script), "Great Vibes", cursive',
            color: '#6B4226',
          }}
        >
          Light up your moments
        </span>
      )}
    </div>
  );
};
