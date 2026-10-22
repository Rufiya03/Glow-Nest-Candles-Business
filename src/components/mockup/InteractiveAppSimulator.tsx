import React, { useState } from 'react';
import { WelcomeScreen } from './WelcomeScreen';
import { HomeScreen } from './HomeScreen';
import { ScentedCandlesScreen } from './ScentedCandlesScreen';
import { ProductDetailScreen } from './ProductDetailScreen';
import { CartScreen } from './CartScreen';
import { CheckoutScreen } from './CheckoutScreen';
import { TrackOrderScreen } from './TrackOrderScreen';
import { ProfileScreen } from './ProfileScreen';
import { MOCK_PRODUCTS, MockProduct, CartItem, INITIAL_CART } from '../../data/mockupData';
import { Check, X } from 'lucide-react';

interface InteractiveAppSimulatorProps {
  initialScreen?: string;
  onScreenChange?: (screen: string) => void;
}

export const InteractiveAppSimulator: React.FC<InteractiveAppSimulatorProps> = ({
  initialScreen = 'home',
  onScreenChange,
}) => {
  const [currentScreen, setCurrentScreen] = useState<string>(initialScreen);
  const [screenHistory, setScreenHistory] = useState<string[]>([initialScreen]);
  const [selectedProduct, setSelectedProduct] = useState<MockProduct>(MOCK_PRODUCTS[0]);
  const [cart, setCart] = useState<CartItem[]>(INITIAL_CART);
  const [wishlist, setWishlist] = useState<string[]>(['lavender-dream', 'rose-bliss']);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Screen transition handler
  const navigateTo = (screen: string) => {
    setScreenHistory((prev) => [...prev, screen]);
    setCurrentScreen(screen);
    onScreenChange?.(screen);
  };

  // Back button handler
  const handleBack = () => {
    if (screenHistory.length > 1) {
      const nextHistory = [...screenHistory];
      nextHistory.pop();
      const prevScreen = nextHistory[nextHistory.length - 1];
      setScreenHistory(nextHistory);
      setCurrentScreen(prevScreen);
      onScreenChange?.(prevScreen);
    } else {
      setCurrentScreen('home');
      onScreenChange?.('home');
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Cart operations
  const handleAddToCart = (product: MockProduct, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((it) => it.product.id === product.id);
      if (existing) {
        return prev.map((it) =>
          it.product.id === product.id
            ? { ...it, quantity: it.quantity + qty }
            : it
        );
      }
      return [...prev, { product, quantity: qty }];
    });
    showToast(`Added ${qty} ${product.name} to cart`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((it) =>
        it.product.id === productId ? { ...it, quantity } : it
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((it) => it.product.id !== productId));
    showToast('Item removed from cart');
  };

  const handleToggleWishlist = (product: MockProduct) => {
    if (wishlist.includes(product.id)) {
      setWishlist(wishlist.filter((id) => id !== product.id));
      showToast('Removed from wishlist');
    } else {
      setWishlist([...wishlist, product.id]);
      showToast('Added to wishlist');
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="flex flex-col items-center justify-center w-full px-2 sm:px-4">
      {/* Normal Clean Application Screen - No Mobile Phone Bezel / Chassis / Notch */}
      <div className="w-full max-w-[460px] bg-[#FAF7F2] rounded-3xl shadow-xl border border-[#EAE0D4] overflow-hidden min-h-[660px] flex flex-col relative">
        {currentScreen === 'welcome' && (
          <WelcomeScreen
            onGetStarted={() => navigateTo('home')}
            onLogIn={() => navigateTo('home')}
          />
        )}

        {currentScreen === 'home' && (
          <HomeScreen
            onOpenMenu={() => setIsMenuOpen(true)}
            onOpenCart={() => navigateTo('cart')}
            onOpenCategory={() => navigateTo('scented')}
            onSelectProduct={(p) => {
              setSelectedProduct(p);
              navigateTo('detail');
            }}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            onNavigateTab={(tab) => {
              if (tab === 'home') navigateTo('home');
              if (tab === 'shop') navigateTo('scented');
              if (tab === 'wishlist') {
                setSelectedProduct(MOCK_PRODUCTS[0]);
                navigateTo('detail');
              }
              if (tab === 'profile') navigateTo('profile');
            }}
            cartCount={totalCartCount}
            wishlistCount={wishlist.length}
          />
        )}

        {currentScreen === 'scented' && (
          <ScentedCandlesScreen
            onBack={handleBack}
            onSelectProduct={(p) => {
              setSelectedProduct(p);
              navigateTo('detail');
            }}
            onAddToCart={(p) => handleAddToCart(p, 1)}
          />
        )}

        {currentScreen === 'detail' && (
          <ProductDetailScreen
            product={selectedProduct}
            onBack={handleBack}
            onAddToCart={(p, qty) => {
              handleAddToCart(p, qty);
              navigateTo('cart');
            }}
            isWishlisted={wishlist.includes(selectedProduct.id)}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {currentScreen === 'cart' && (
          <CartScreen
            cartItems={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveFromCart}
            onProceedToCheckout={() => navigateTo('checkout')}
            onBack={handleBack}
            onNavigateTab={(tab) => {
              if (tab === 'home') navigateTo('home');
              if (tab === 'shop') navigateTo('scented');
              if (tab === 'profile') navigateTo('profile');
            }}
            wishlistCount={wishlist.length}
          />
        )}

        {currentScreen === 'checkout' && (
          <CheckoutScreen
            onBack={handleBack}
            onContinueToPayment={() => navigateTo('track')}
          />
        )}

        {currentScreen === 'track' && (
          <TrackOrderScreen
            onBack={() => navigateTo('home')}
            onViewDetails={() => showToast('BlueDart Express: In Transit')}
          />
        )}

        {currentScreen === 'profile' && (
          <ProfileScreen
            onBack={handleBack}
            onNavigateTab={(tab) => {
              if (tab === 'home') navigateTo('home');
              if (tab === 'shop') navigateTo('scented');
              if (tab === 'wishlist') {
                setSelectedProduct(MOCK_PRODUCTS[0]);
                navigateTo('detail');
              }
            }}
            onTrackOrder={() => navigateTo('track')}
            onLogout={() => navigateTo('welcome')}
            wishlistCount={wishlist.length}
          />
        )}

        {/* Slide-over hamburger menu */}
        {isMenuOpen && (
          <div className="absolute inset-0 z-40 bg-black/40 backdrop-blur-xs flex">
            <div className="w-64 bg-[#FAF7F2] h-full p-6 shadow-xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#EAE0D4] pb-3">
                  <span 
                    className="font-bold text-lg text-[#2D1D16]"
                    style={{ fontFamily: 'var(--font-brand), Cinzel, serif' }}
                  >
                    GlowNest Candles
                  </span>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1 text-stone-500 hover:text-stone-900 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3 text-xs font-medium text-[#5A3825]">
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigateTo('welcome');
                    }}
                    className="block w-full text-left py-1.5 hover:text-[#2D1D16] cursor-pointer"
                  >
                    Welcome Screen
                  </button>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigateTo('home');
                    }}
                    className="block w-full text-left py-1.5 hover:text-[#2D1D16] cursor-pointer"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigateTo('scented');
                    }}
                    className="block w-full text-left py-1.5 hover:text-[#2D1D16] cursor-pointer"
                  >
                    Scented Candles
                  </button>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigateTo('cart');
                    }}
                    className="block w-full text-left py-1.5 hover:text-[#2D1D16] cursor-pointer"
                  >
                    My Cart ({totalCartCount})
                  </button>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigateTo('track');
                    }}
                    className="block w-full text-left py-1.5 hover:text-[#2D1D16] cursor-pointer"
                  >
                    Track Order
                  </button>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigateTo('profile');
                    }}
                    className="block w-full text-left py-1.5 hover:text-[#2D1D16] cursor-pointer"
                  >
                    My Profile
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE0D4] text-[11px] text-[#8D7B6F]">
                <p 
                  className="italic"
                  style={{ fontFamily: 'var(--font-script), "Great Vibes", cursive', fontSize: '15px', color: '#6B4226' }}
                >
                  Light up your moments
                </p>
                <p className="mt-1">Handmade in small batches</p>
              </div>
            </div>
            <div className="flex-1" onClick={() => setIsMenuOpen(false)} />
          </div>
        )}

        {/* Toast Notification */}
        {toastMessage && (
          <div className="absolute top-4 left-4 right-4 z-50 bg-[#2D1D16] text-white text-xs px-3.5 py-2.5 rounded-xl shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>{toastMessage}</span>
            </div>
            <button
              onClick={() => setToastMessage(null)}
              className="text-stone-400 hover:text-white cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
