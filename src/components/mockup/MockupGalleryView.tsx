import React from 'react';
import { MockupDeviceFrame } from './MockupDeviceFrame';
import { WelcomeScreen } from './WelcomeScreen';
import { HomeScreen } from './HomeScreen';
import { ScentedCandlesScreen } from './ScentedCandlesScreen';
import { ProductDetailScreen } from './ProductDetailScreen';
import { CartScreen } from './CartScreen';
import { CheckoutScreen } from './CheckoutScreen';
import { TrackOrderScreen } from './TrackOrderScreen';
import { ProfileScreen } from './ProfileScreen';
import { MOCK_PRODUCTS, INITIAL_CART, CartItem } from '../../data/mockupData';

interface MockupGalleryViewProps {
  onSelectScreenToInteract: (screenId: string) => void;
}

export const MockupGalleryView: React.FC<MockupGalleryViewProps> = ({
  onSelectScreenToInteract,
}) => {
  const sampleProduct = MOCK_PRODUCTS[0]; // Lavender Dream
  const sampleCart: CartItem[] = [
    { product: MOCK_PRODUCTS[0], quantity: 1 },
    { product: MOCK_PRODUCTS[1], quantity: 1 },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 sm:px-6 py-6">
      {/* Editorial Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#B87333]">
          Pixel-Perfect Visual Reproduction
        </span>
        <h2
          className="text-2xl sm:text-3xl font-bold text-[#2D1D16] mt-1 tracking-tight"
          style={{ fontFamily: 'var(--font-brand), Cinzel, serif' }}
        >
          GlowNest Candles App Mockup
        </h2>
        <p className="text-xs sm:text-sm text-[#705244] mt-1.5">
          All 8 screens faithfully recreated from your design reference. Click on any screen to launch interactive live mode!
        </p>
      </div>

      {/* 8-Screen Grid matching 4 columns x 2 rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
        {/* Screen 1: Welcome Screen */}
        <div 
          className="cursor-pointer group transition-transform hover:-translate-y-1"
          onClick={() => onSelectScreenToInteract('welcome')}
        >
          <MockupDeviceFrame title="Welcome" screenNumber={1} interactive>
            <WelcomeScreen
              onGetStarted={() => onSelectScreenToInteract('home')}
              onLogIn={() => onSelectScreenToInteract('home')}
            />
          </MockupDeviceFrame>
        </div>

        {/* Screen 2: Home Screen */}
        <div 
          className="cursor-pointer group transition-transform hover:-translate-y-1"
          onClick={() => onSelectScreenToInteract('home')}
        >
          <MockupDeviceFrame title="Home" screenNumber={2} interactive>
            <HomeScreen
              onOpenCart={() => onSelectScreenToInteract('cart')}
              onOpenCategory={() => onSelectScreenToInteract('scented')}
              onSelectProduct={() => onSelectScreenToInteract('detail')}
              onAddToCart={() => onSelectScreenToInteract('cart')}
              onNavigateTab={(tab) => {
                if (tab === 'home') onSelectScreenToInteract('home');
                if (tab === 'shop') onSelectScreenToInteract('scented');
                if (tab === 'wishlist') onSelectScreenToInteract('detail');
                if (tab === 'profile') onSelectScreenToInteract('profile');
              }}
              cartCount={2}
            />
          </MockupDeviceFrame>
        </div>

        {/* Screen 3: Scented Candles */}
        <div 
          className="cursor-pointer group transition-transform hover:-translate-y-1"
          onClick={() => onSelectScreenToInteract('scented')}
        >
          <MockupDeviceFrame title="Scented Candles" screenNumber={3} interactive>
            <ScentedCandlesScreen
              onBack={() => onSelectScreenToInteract('home')}
              onSelectProduct={() => onSelectScreenToInteract('detail')}
              onAddToCart={() => onSelectScreenToInteract('cart')}
            />
          </MockupDeviceFrame>
        </div>

        {/* Screen 4: Product Detail */}
        <div 
          className="cursor-pointer group transition-transform hover:-translate-y-1"
          onClick={() => onSelectScreenToInteract('detail')}
        >
          <MockupDeviceFrame title="Product Detail" screenNumber={4} interactive>
            <ProductDetailScreen
              product={sampleProduct}
              onBack={() => onSelectScreenToInteract('scented')}
              onAddToCart={() => onSelectScreenToInteract('cart')}
            />
          </MockupDeviceFrame>
        </div>

        {/* Screen 5: My Cart */}
        <div 
          className="cursor-pointer group transition-transform hover:-translate-y-1"
          onClick={() => onSelectScreenToInteract('cart')}
        >
          <MockupDeviceFrame title="My Cart" screenNumber={5} interactive>
            <CartScreen
              cartItems={sampleCart}
              onUpdateQuantity={() => {}}
              onRemoveItem={() => {}}
              onProceedToCheckout={() => onSelectScreenToInteract('checkout')}
              onBack={() => onSelectScreenToInteract('home')}
              onNavigateTab={(tab) => {
                if (tab === 'home') onSelectScreenToInteract('home');
                if (tab === 'profile') onSelectScreenToInteract('profile');
              }}
            />
          </MockupDeviceFrame>
        </div>

        {/* Screen 6: Checkout */}
        <div 
          className="cursor-pointer group transition-transform hover:-translate-y-1"
          onClick={() => onSelectScreenToInteract('checkout')}
        >
          <MockupDeviceFrame title="Checkout" screenNumber={6} interactive>
            <CheckoutScreen
              onBack={() => onSelectScreenToInteract('cart')}
              onContinueToPayment={() => onSelectScreenToInteract('track')}
            />
          </MockupDeviceFrame>
        </div>

        {/* Screen 7: Track Order */}
        <div 
          className="cursor-pointer group transition-transform hover:-translate-y-1"
          onClick={() => onSelectScreenToInteract('track')}
        >
          <MockupDeviceFrame title="Track Order" screenNumber={7} interactive>
            <TrackOrderScreen
              onBack={() => onSelectScreenToInteract('home')}
            />
          </MockupDeviceFrame>
        </div>

        {/* Screen 8: My Profile */}
        <div 
          className="cursor-pointer group transition-transform hover:-translate-y-1"
          onClick={() => onSelectScreenToInteract('profile')}
        >
          <MockupDeviceFrame title="My Profile" screenNumber={8} interactive>
            <ProfileScreen
              onBack={() => onSelectScreenToInteract('home')}
              onNavigateTab={(tab) => {
                if (tab === 'home') onSelectScreenToInteract('home');
                if (tab === 'shop') onSelectScreenToInteract('scented');
              }}
              onTrackOrder={() => onSelectScreenToInteract('track')}
              onLogout={() => onSelectScreenToInteract('welcome')}
            />
          </MockupDeviceFrame>
        </div>
      </div>
    </div>
  );
};
