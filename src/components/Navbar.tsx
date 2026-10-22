import React, { useState } from 'react';
import { ShoppingBag, Sparkles, MessageCircle, Menu, X, Heart, User, Compass } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenAccount: () => void;
  onOpenCustomStudio: () => void;
  onOpenWelcome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenAccount,
  onOpenCustomStudio,
  onOpenWelcome,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E6D9CB] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Tagline */}
        <a 
          href="#welcome" 
          onClick={(e) => {
            e.preventDefault();
            onOpenWelcome();
          }}
          className="hover:opacity-85 transition-opacity flex items-center gap-2.5 cursor-pointer"
        >
          <span className="text-2xl sm:text-3xl" role="img" aria-label="candle flame">🕯️</span>
          <div className="flex flex-col">
            <span 
              className="font-bold text-xl sm:text-2xl tracking-wider text-[#2D1D16] leading-none uppercase"
              style={{ fontFamily: 'var(--font-brand), "Cinzel", "Cormorant Garamond", Georgia, serif' }}
            >
              GlowNest
            </span>
            <span 
              className="text-xs sm:text-sm text-[#6B4226] tracking-wide mt-0.5"
              style={{ fontFamily: 'var(--font-script), "Great Vibes", cursive' }}
            >
              Light up your moments
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4B3226]">
          <button 
            onClick={onOpenWelcome}
            className="hover:text-[#B87333] transition-colors py-1 cursor-pointer font-semibold"
          >
            Welcome
          </button>
          <a 
            href="#products" 
            className="hover:text-[#B87333] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#B87333] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Collection
          </a>
          <button 
            onClick={onOpenCustomStudio}
            className="hover:text-[#B87333] transition-colors py-1 flex items-center gap-1.5 font-medium cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B87333]" />
            <span>Custom Studio</span>
          </button>
          <a 
            href="#scents" 
            className="hover:text-[#B87333] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#B87333] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Scent Notes
          </a>
          <a 
            href="#about" 
            className="hover:text-[#B87333] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#B87333] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Our Craft
          </a>
          <a 
            href="#care" 
            className="hover:text-[#B87333] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#B87333] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Candle Care
          </a>
          <a 
            href="#contact" 
            className="hover:text-[#B87333] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#B87333] after:absolute after:bottom-0 after:left-0 after:transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Primary actions (Account, Wishlist, WhatsApp, Cart) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* WhatsApp Direct Order Button */}
          <a
            href="https://wa.me/919876543210?text=Hello%20GlowNest%20Candles!%20I%20would%20like%20to%20inquire%20about%20ordering%20handmade%20candles."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-[#2B1C15] hover:text-[#B87333] border border-[#D9C8B5] px-3 py-2 rounded-full hover:border-[#B87333] transition-colors whitespace-nowrap"
            title="Chat directly on WhatsApp (+91 98765 43210)"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>

          {/* Account / Login */}
          <button
            onClick={onOpenAccount}
            className="p-2 sm:px-3 sm:py-2 rounded-full bg-[#F3ECE2] text-[#2B1C15] hover:bg-[#EAE0D3] transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-medium"
            title="Customer Account & Orders"
          >
            <User className="w-4 h-4 text-[#5A3825]" />
            <span className="hidden sm:inline">Account</span>
          </button>

          {/* Wishlist */}
          <button
            onClick={onOpenWishlist}
            aria-label={`Wishlist with ${wishlistCount} saved items`}
            className="relative p-2.5 rounded-full bg-[#F3ECE2] text-[#2B1C15] hover:bg-[#EAE0D3] transition-colors cursor-pointer flex items-center justify-center"
            title="Saved to Wishlist"
          >
            <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'text-rose-600 fill-rose-600' : 'text-[#2B1C15]'}`} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Drawer */}
          <button
            onClick={onOpenCart}
            aria-label={`Shopping bag with ${cartCount} items`}
            className="relative p-2.5 rounded-full bg-[#5A3825] text-white hover:bg-[#432918] transition-colors cursor-pointer flex items-center justify-center shadow-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#B87333] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#2D1D16] hover:text-[#B87333]"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E6D9CB] px-6 py-4 space-y-3">
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenWelcome();
            }}
            className="block text-base font-medium text-[#2B1C15] py-1 text-left w-full"
          >
            Welcome Screen
          </button>
          <a
            href="#products"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-medium text-[#2B1C15] py-1"
          >
            Collection (₹200–₹299)
          </a>
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenCustomStudio();
            }}
            className="flex items-center gap-2 text-base font-medium text-[#B87333] py-1 w-full text-left"
          >
            <Sparkles className="w-4 h-4" />
            <span>Custom Candle Studio</span>
          </button>
          <a
            href="#scents"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-medium text-[#2B1C15] py-1"
          >
            Scent Notes
          </a>
          <a
            href="#about"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-medium text-[#2B1C15] py-1"
          >
            Our Craft
          </a>
          <a
            href="#care"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-medium text-[#2B1C15] py-1"
          >
            Candle Care
          </a>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block text-base font-medium text-[#2B1C15] py-1"
          >
            Contact
          </a>
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenAccount();
            }}
            className="flex items-center gap-2 text-base font-medium text-[#5A3825] py-1 w-full text-left pt-2 border-t border-[#E6D9CB]"
          >
            <User className="w-4 h-4" />
            <span>Log In / Customer Account</span>
          </button>
        </div>
      )}
    </header>
  );
};
