/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { CustomCandleStudio } from './components/CustomCandleStudio';
import { ScentExplorer } from './components/ScentExplorer';
import { CelebrationEvents } from './components/CelebrationEvents';
import { AboutCraft } from './components/AboutCraft';
import { CandleCareGuide } from './components/CandleCareGuide';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { WishlistModal } from './components/WishlistModal';
import { AccountModal } from './components/AccountModal';
import { WelcomeExperience } from './components/WelcomeExperience';

import { PRODUCTS } from './data/products';
import { Product, CartItem } from './types';
import { Sparkles, Heart, ShoppingBag, ArrowRight } from 'lucide-react';

export default function App() {
  // Cart state persisted to localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('glownest_cart_items');
      return saved ? JSON.parse(saved) : [
        {
          id: 'default-cart-item-1',
          productId: 'lavender-dream',
          name: 'Lavender Dream Scented Candle',
          price: 249,
          quantity: 1,
          image: '/src/assets/images/candle_scented_amber_jar_1790148167588.jpg',
          selectedScent: 'Pure French Lavender',
        }
      ];
    } catch {
      return [];
    }
  });

  // Wishlist state persisted to localStorage
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('glownest_wishlist_ids');
      return saved ? JSON.parse(saved) : ['lavender-dream', 'rose-bliss'];
    } catch {
      return [];
    }
  });

  // Modals & Drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Synchronize localStorage
  useEffect(() => {
    try {
      localStorage.setItem('glownest_cart_items', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('glownest_wishlist_ids', JSON.stringify(wishlistIds));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistIds]);

  // Cart actions
  const handleQuickAdd = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.productId === product.id && !item.isCustom);
      if (existing) {
        return prev.map((item) =>
          item.id === existing.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: `${product.id}-${Date.now()}`,
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image,
          selectedScent: product.scentOptions?.[0],
        },
      ];
    });
    setIsCartOpen(true);
  };

  const handleAddToCartWithDetails = (product: Product, quantity: number, scent?: string) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.productId === product.id && item.selectedScent === scent && !item.isCustom
      );
      if (existing) {
        return prev.map((item) =>
          item.id === existing.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: `${product.id}-${Date.now()}`,
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity,
          image: product.image,
          selectedScent: scent,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const handleAddCustomToCart = (customItem: CartItem) => {
    setCartItems((prev) => [...prev, customItem]);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Wishlist actions
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) =>
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlistIds((prev) => prev.filter((id) => id !== productId));
  };

  // Computed values
  const totalCartCount = cartItems.reduce((acc, it) => acc + it.quantity, 0);
  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D1D16] flex flex-col font-sans selection:bg-[#E5C9A6]">
      {/* Top Announcement Bar */}
      <div className="bg-[#2D1D16] text-[#FAF7F2] px-4 py-2 text-center text-xs tracking-wide flex items-center justify-center gap-2 font-medium">
        <Sparkles className="w-3.5 h-3.5 text-[#E5C9A6]" />
        <span>Free Shipping Pan-India on orders above ₹499 · All candles ₹200 – ₹299</span>
        <button
          onClick={() => setIsWelcomeModalOpen(true)}
          className="underline ml-2 text-[#E5C9A6] hover:text-white cursor-pointer font-semibold"
        >
          View Welcome Screen
        </button>
      </div>

      {/* Main Responsive Header Navigation */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        onOpenCustomStudio={() => scrollToSection('custom-studio')}
        onOpenWelcome={() => setIsWelcomeModalOpen(true)}
      />

      {/* Main Website Surface (Full-width, responsive, no mobile frame) */}
      <main className="flex-1 w-full">
        {/* Editorial Hero Banner */}
        <Hero
          onExploreProducts={() => scrollToSection('products')}
          onOpenCustomStudio={() => scrollToSection('custom-studio')}
        />

        {/* Featured Scented Candles Catalog (₹200–₹299 range) */}
        <ProductGrid
          products={PRODUCTS}
          onQuickAdd={handleQuickAdd}
          onViewDetails={(prod) => setSelectedProduct(prod)}
          onCustomize={() => scrollToSection('custom-studio')}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
        />

        {/* Interactive Custom Candle Studio */}
        <div id="custom-studio">
          <CustomCandleStudio onAddCustomToCart={handleAddCustomToCart} />
        </div>

        {/* Scent Notes Explorer */}
        <ScentExplorer />

        {/* Celebration Hampers & Bulk Favors */}
        <div id="celebrations">
          <CelebrationEvents />
        </div>

        {/* Artisanal Craft Story */}
        <div id="about">
          <AboutCraft />
        </div>

        {/* Candle Care Guide */}
        <div id="care">
          <CandleCareGuide />
        </div>

        {/* Contact & WhatsApp Inquiry */}
        <ContactSection />
      </main>

      {/* Full Website Footer */}
      <Footer />

      {/* Welcome Screen Modal (Clean, single Get Started, beautiful candle photo) */}
      {isWelcomeModalOpen && (
        <WelcomeExperience
          isOverlay
          onClose={() => setIsWelcomeModalOpen(false)}
          onGetStarted={() => {
            setIsWelcomeModalOpen(false);
            scrollToSection('products');
          }}
          onLogIn={() => {
            setIsWelcomeModalOpen(false);
            setIsAccountOpen(true);
          }}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onOpenCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onOrderSuccess={() => {
          setCartItems([]);
        }}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCartWithDetails}
        onCustomize={() => {
          setSelectedProduct(null);
          scrollToSection('custom-studio');
        }}
      />

      {/* Saved Wishlist Modal */}
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onAddToCart={(prod) => {
          handleQuickAdd(prod);
        }}
      />

      {/* Customer Account & Orders Modal */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        wishlistCount={wishlistIds.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />
    </div>
  );
}
