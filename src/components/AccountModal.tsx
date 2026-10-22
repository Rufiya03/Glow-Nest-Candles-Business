import React, { useState } from 'react';
import { X, User, Package, Heart, MapPin, Bell, LogOut, CheckCircle, ShieldCheck } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistCount: number;
  onOpenWishlist: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  wishlistCount,
  onOpenWishlist,
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'addresses'>('profile');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userEmail, setUserEmail] = useState('ananya.sharma@example.com');
  const [userName, setUserName] = useState('Ananya Sharma');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [loginEmailInput, setLoginEmailInput] = useState('');
  const [loginPassInput, setLoginPassInput] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const mockOrders = [
    {
      id: 'GN-849201',
      date: '18 Oct 2026',
      status: 'Out for Delivery',
      total: 518,
      items: 'Lavender Dream (x1), Rose Bliss (x1)',
      trackingNumber: 'DEL-GN-98214',
    },
    {
      id: 'GN-620419',
      date: '28 Sep 2026',
      status: 'Delivered',
      total: 299,
      items: 'Artisanal Candle Gift Set (x1)',
      trackingNumber: 'DEL-GN-77312',
    },
  ];

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmailInput) return;
    setUserEmail(loginEmailInput);
    setUserName(loginEmailInput.split('@')[0]);
    setIsLoggedIn(true);
    setMessage('Signed in successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E6D9CB] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E6D9CB] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#5A3825] text-white flex items-center justify-center text-sm font-semibold">
              🕯️
            </div>
            <div>
              <h2 className="font-serif text-lg font-semibold text-[#2D1D16]">
                {isLoggedIn ? 'Customer Account' : 'Welcome to GlowNest'}
              </h2>
              <p className="text-xs text-[#705244]">
                {isLoggedIn ? 'Manage your orders & preferences' : 'Log in or create a demo account'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F3ECE2] text-[#705244] hover:text-[#2D1D16] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {message && (
            <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-medium flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>{message}</span>
            </div>
          )}

          {!isLoggedIn ? (
            /* Login Form */
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#2D1D16] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={loginEmailInput}
                  onChange={(e) => setLoginEmailInput(e.target.value)}
                  placeholder="e.g. ananya@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D9C8B5] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#5A3825]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2D1D16] mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={loginPassInput}
                  onChange={(e) => setLoginPassInput(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D9C8B5] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#5A3825]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#5A3825] hover:bg-[#432918] text-white text-sm font-semibold tracking-wide transition-colors cursor-pointer shadow-sm"
              >
                Log In / Continue
              </button>

              <p className="text-center text-xs text-[#705244]">
                Quick test login: enter any email & password to sign in immediately.
              </p>
            </form>
          ) : (
            /* User Profile & Tabs */
            <div className="space-y-5">
              {/* Profile Card */}
              <div className="p-4 rounded-2xl bg-white border border-[#E6D9CB] flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#EAE0D3] text-[#5A3825] font-serif text-xl flex items-center justify-center font-bold border border-[#D9C8B5]">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm text-[#2D1D16]">{userName}</h3>
                  <p className="text-xs text-[#705244]">{userEmail}</p>
                  <p className="text-xs text-[#8C6246] mt-0.5">{phone}</p>
                </div>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="p-2 text-xs text-[#8C6246] hover:text-red-700 flex items-center gap-1 cursor-pointer"
                  title="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-[#E6D9CB] text-xs font-medium text-[#705244]">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`pb-2 px-3 transition-colors cursor-pointer ${
                    activeTab === 'profile'
                      ? 'border-b-2 border-[#5A3825] text-[#2D1D16] font-semibold'
                      : 'hover:text-[#2D1D16]'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`pb-2 px-3 transition-colors cursor-pointer ${
                    activeTab === 'orders'
                      ? 'border-b-2 border-[#5A3825] text-[#2D1D16] font-semibold'
                      : 'hover:text-[#2D1D16]'
                  }`}
                >
                  Orders ({mockOrders.length})
                </button>
                <button
                  onClick={() => setActiveTab('addresses')}
                  className={`pb-2 px-3 transition-colors cursor-pointer ${
                    activeTab === 'addresses'
                      ? 'border-b-2 border-[#5A3825] text-[#2D1D16] font-semibold'
                      : 'hover:text-[#2D1D16]'
                  }`}
                >
                  Address Book
                </button>
              </div>

              {/* Tab: Overview */}
              {activeTab === 'profile' && (
                <div className="space-y-3">
                  <div 
                    onClick={() => {
                      onClose();
                      onOpenWishlist();
                    }}
                    className="p-3.5 rounded-xl bg-white border border-[#E6D9CB] hover:border-[#5A3825] flex items-center justify-between cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <Heart className="w-4 h-4 text-[#B87333]" />
                      <span className="text-xs font-semibold text-[#2D1D16]">My Wishlist</span>
                    </div>
                    <span className="text-xs font-bold text-[#5A3825] bg-[#FAF7F2] px-2 py-0.5 rounded-full border border-[#E6D9CB]">
                      {wishlistCount} items
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#E6D9CB] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Package className="w-4 h-4 text-[#B87333]" />
                      <span className="text-xs font-semibold text-[#2D1D16]">Order History</span>
                    </div>
                    <span className="text-xs text-[#705244]">2 active orders</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#E6D9CB] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#B87333]" />
                      <span className="text-xs font-semibold text-[#2D1D16]">GlowNest VIP Member</span>
                    </div>
                    <span className="text-xs text-emerald-700 font-medium">Free Shipping Eligible</span>
                  </div>
                </div>
              )}

              {/* Tab: Orders */}
              {activeTab === 'orders' && (
                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {mockOrders.map((ord) => (
                    <div key={ord.id} className="p-3.5 rounded-xl bg-white border border-[#E6D9CB] space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-[#2D1D16]">Order #{ord.id}</span>
                        <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 font-semibold text-[11px] border border-amber-200">
                          {ord.status}
                        </span>
                      </div>
                      <p className="text-xs text-[#705244]">{ord.items}</p>
                      <div className="flex items-center justify-between text-xs pt-1 border-t border-[#F2ECE3]">
                        <span className="text-[#8D7B6F]">Placed on {ord.date}</span>
                        <span className="font-bold text-[#5A3825]">₹{ord.total}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab: Addresses */}
              {activeTab === 'addresses' && (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white border border-[#5A3825] relative">
                    <span className="absolute top-2.5 right-2.5 text-[10px] font-bold uppercase bg-[#5A3825] text-white px-2 py-0.5 rounded">
                      Default
                    </span>
                    <h4 className="text-xs font-bold text-[#2D1D16]">Home Address</h4>
                    <p className="text-xs text-[#705244] mt-1">
                      Flat 402, Lotus Residency, Marine Drive<br />
                      Mumbai, Maharashtra - 400020<br />
                      Phone: +91 98765 43210
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#E6D9CB] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#5A3825] hover:bg-[#432918] text-white text-xs font-semibold cursor-pointer transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
