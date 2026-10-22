import React from 'react';

interface MockupDeviceFrameProps {
  children: React.ReactNode;
  title?: string;
  screenNumber?: number;
  onClick?: () => void;
  interactive?: boolean;
}

export const MockupDeviceFrame: React.FC<MockupDeviceFrameProps> = ({
  children,
  title,
  screenNumber,
  onClick,
  interactive = false,
}) => {
  return (
    <div className="flex flex-col items-center">
      {/* Screen Title Badge */}
      {title && (
        <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-[#5A3825]">
          {screenNumber && (
            <span className="w-5 h-5 rounded-full bg-[#5A3825] text-white flex items-center justify-center text-[10px] font-bold">
              {screenNumber}
            </span>
          )}
          <span>{title}</span>
        </div>
      )}

      {/* Normal Clean Card Frame - No Black Phone Bezel or Mobile Hardware Shell */}
      <div
        onClick={onClick}
        className={`w-[290px] sm:w-[310px] h-[580px] sm:h-[610px] rounded-2xl bg-[#FAF7F2] border border-[#EAE0D4] shadow-md overflow-hidden relative flex flex-col transition-all ${
          interactive ? 'hover:shadow-xl hover:border-[#5A3825]/40 hover:-translate-y-1' : ''
        }`}
      >
        <div className="w-full h-full overflow-hidden bg-[#FAF7F2] relative flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};
