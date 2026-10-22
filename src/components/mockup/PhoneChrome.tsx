import React from 'react';
import { Home, ShoppingBag, Heart, User } from 'lucide-react';

interface StatusBarProps {
  theme?: 'dark' | 'light';
}

// Mobile status bar removed as requested to make the app normal
export const StatusBar: React.FC<StatusBarProps> = () => {
  return null;
};

interface BottomNavBarProps {
  activeTab: 'home' | 'shop' | 'wishlist' | 'profile';
  onTabChange: (tab: 'home' | 'shop' | 'wishlist' | 'profile') => void;
  wishlistCount?: number;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeTab,
  onTabChange,
  wishlistCount = 2,
}) => {
  const tabs = [
    { id: 'home' as const, label: 'Home', icon: Home },
    { id: 'shop' as const, label: 'Shop', icon: ShoppingBag },
    { id: 'wishlist' as const, label: 'Wishlist', icon: Heart, badge: wishlistCount },
    { id: 'profile' as const, label: 'Profile', icon: User },
  ];

  return (
    <nav 
      aria-label="App Navigation"
      className="w-full bg-[#FAF7F2] border-t border-[#EAE0D4] py-2.5 px-6 flex items-center justify-between shadow-xs select-none"
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center transition-colors relative py-1 px-3 cursor-pointer ${
              isActive ? 'text-[#5A3825] font-semibold' : 'text-[#8D7B6F] hover:text-[#5A3825]'
            }`}
          >
            <div className="relative">
              <Icon className="w-5 h-5 stroke-[1.75]" />
              {tab.badge !== undefined && tab.badge > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#5A3825] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                  {tab.badge}
                </span>
              )}
            </div>
            <span className="text-[11px] mt-1">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
