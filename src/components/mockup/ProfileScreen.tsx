import React from 'react';
import {
  ArrowLeft,
  Settings,
  User,
  ShoppingBag,
  Heart,
  Contact,
  CreditCard,
  Bell,
  HelpCircle,
  Info,
  ChevronRight,
} from 'lucide-react';
import { BottomNavBar } from './PhoneChrome';
import { USER_PROFILE } from '../../data/mockupData';

interface ProfileScreenProps {
  onBack: () => void;
  onNavigateTab: (tab: 'home' | 'shop' | 'wishlist' | 'profile') => void;
  onTrackOrder: () => void;
  onLogout: () => void;
  wishlistCount?: number;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  onBack,
  onNavigateTab,
  onTrackOrder,
  onLogout,
  wishlistCount = 2,
}) => {
  const menuItems = [
    { label: 'My Orders', icon: ShoppingBag, action: onTrackOrder },
    { label: 'Wishlist', icon: Heart, action: () => onNavigateTab('wishlist') },
    { label: 'Address Book', icon: Contact },
    { label: 'Payment Methods', icon: CreditCard },
    { label: 'Notifications', icon: Bell },
    { label: 'Help & Support', icon: HelpCircle },
    { label: 'About GlowNest', icon: Info },
  ];

  return (
    <div className="relative w-full h-full min-h-[640px] flex flex-col justify-between bg-[#FBF8F4] text-[#2D1D16] overflow-y-auto">
      <div>
        {/* Top Header matching Screen 8 */}
        <div className="px-4 py-3.5 flex items-center justify-between border-b border-[#EAE0D4]/40 bg-[#FAF7F2]">
          <button
            onClick={onBack}
            className="p-1.5 text-[#2D1D16] hover:opacity-70 transition-opacity cursor-pointer"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2]" />
          </button>
          <h2 className="text-base font-semibold text-[#2D1D16]">
            My Profile
          </h2>
          <button
            className="p-1.5 text-[#2D1D16] hover:opacity-70 transition-opacity cursor-pointer"
            aria-label="Settings"
          >
            <Settings className="w-5 h-5 stroke-[1.75]" />
          </button>
        </div>

        {/* User Card */}
        <div className="px-5 py-4 flex items-center gap-3.5">
          <div className="w-14 h-14 rounded-full bg-[#E8DDD0] flex items-center justify-center text-[#8D7B6F] shrink-0 shadow-2xs">
            <User className="w-8 h-8 stroke-[1.5]" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#2D1D16]">
              {USER_PROFILE.name}
            </h3>
            <p className="text-xs text-[#8D7B6F]">
              {USER_PROFILE.email}
            </p>
          </div>
        </div>

        {/* Menu Items List */}
        <div className="px-5 py-2">
          <div className="bg-white rounded-2xl border border-[#EAE0D4] shadow-xs overflow-hidden divide-y divide-[#F3ECE2]">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="w-full flex items-center justify-between p-3.5 hover:bg-[#FAF7F2] transition-colors cursor-pointer text-left"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-[#5A3825] stroke-[1.75]" />
                    <span className="text-xs font-medium text-[#2D1D16]">
                      {item.label}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#B09E91]" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Log Out Button */}
        <div className="px-5 pt-3 pb-6">
          <button
            onClick={onLogout}
            className="w-full py-3 px-4 rounded-xl border border-[#D9C8B5] hover:bg-[#F3ECE2] text-xs font-semibold text-[#5A3825] transition-colors cursor-pointer text-center"
          >
            Log Out
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar
        activeTab="profile"
        onTabChange={onNavigateTab}
        wishlistCount={wishlistCount}
      />
    </div>
  );
};
