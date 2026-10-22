import React from 'react';
import { Heart, MessageCircle, Mail, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#271A13] text-[#FAF7F2] border-t border-[#3D2619]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand Wordmark & Story */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl" role="img" aria-label="candle flame">🕯️</span>
              <div>
                <span className="font-serif text-2xl font-bold text-white tracking-tight block leading-none">
                  GlowNest Candles
                </span>
                <span className="text-xs font-serif italic text-[#D4A373] tracking-wide block mt-1">
                  Light up your moments
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#D9C8B5] max-w-sm leading-relaxed">
              Handcrafted, scented, and customized candles created specially for your celebrations, gifts, and cozy beautiful homes. Hand-poured with 100% pure soy wax in small batches.
            </p>
            <div className="pt-2 flex items-center gap-4 text-[#D9C8B5]">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:glownestcandles@example.com"
                className="hover:text-[#B87333] transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/glownestcandles"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E1306C] transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4A373]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#D9C8B5]">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Candle Collection
                </a>
              </li>
              <li>
                <a href="#custom" className="hover:text-white transition-colors">
                  Custom Candle Studio
                </a>
              </li>
              <li>
                <a href="#scents" className="hover:text-white transition-colors">
                  Fragrance Notes
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Artisanal Craft & Values
                </a>
              </li>
              <li>
                <a href="#care" className="hover:text-white transition-colors">
                  Candle Care & Burn Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4A373]">
              Direct Orders
            </h4>
            <div className="space-y-2 text-xs text-[#D9C8B5]">
              <p>📱 WhatsApp: +91 98765 43210</p>
              <p>📧 glownestcandles@example.com</p>
              <p>📸 @glownestcandles</p>
              <div className="pt-2 text-[11px] text-[#A89685]">
                Free Pan-India Delivery on orders above ₹499.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A89685]">
          <p>© 2026 GlowNest Candles · Light up your moments 🕯️</p>
          <div className="flex items-center gap-4">
            <span>100% Pure Soy Wax</span>
            <span aria-hidden="true">·</span>
            <span>Plastic-Free Kraft Packing</span>
            <span aria-hidden="true">·</span>
            <span>Dispatched Pan-India</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
