import React, { useState } from 'react';
import { Sparkles, ShoppingBag, MessageCircle, Check, Heart, HelpCircle } from 'lucide-react';
import { CartItem } from '../types';

interface CustomCandleStudioProps {
  onAddCustomToCart: (item: CartItem) => void;
}

const OCCASIONS = [
  'Birthdays 🎂',
  'Weddings 💍',
  'Anniversaries 🥂',
  'Festivals & Diwali 🪔',
  'Housewarming 🏡',
  'Corporate Events 💼',
];

const VESSELS = [
  {
    id: 'amber-glass',
    name: 'Amber Apothecary Jar',
    description: 'Warm golden glow with natural beechwood lid',
    colorHex: '#78461E',
    basePrice: 239,
  },
  {
    id: 'matte-ceramic',
    name: 'Matte Ceramic (Ivory)',
    description: 'Clean Scandinavian aesthetic with cork lid',
    colorHex: '#F0ECE4',
    basePrice: 249,
  },
  {
    id: 'terracotta-clay',
    name: 'Handmade Terracotta',
    description: 'Rustic artisanal Indian clay pot',
    colorHex: '#B25A38',
    basePrice: 229,
  },
  {
    id: 'ribbed-fluted',
    name: 'Vintage Fluted Glass',
    description: 'Sculptural elegance with metallic gold lid',
    colorHex: '#A39382',
    basePrice: 259,
  },
];

const SCENTS = [
  { id: 'lavender-sage', name: 'French Lavender & Sage', notes: 'Calming, floral, therapeutic' },
  { id: 'vanilla-amber', name: 'Warm Vanilla & Amber', notes: 'Sweet, cozy, gourmand warmth' },
  { id: 'mysore-sandal', name: 'Mysore Sandalwood & Cedar', notes: 'Spiritual, woody, meditative' },
  { id: 'rose-saffron', name: 'Royal Rose Petals & Saffron', notes: 'Romantic, opulent, festive' },
  { id: 'citrus-blossom', name: 'Citrus Blossom & Neroli', notes: 'Uplifting, fresh, sun-kissed' },
  { id: 'unscented', name: 'Pure Unscented (Sensitive)', notes: 'Zero fragrance, 100% pure soy' },
];

const TOPPINGS = [
  { id: 'dried-rosebuds', name: 'Dried Rosebuds & Gold Leaf', extra: 25 },
  { id: 'lavender-buds', name: 'Organic Lavender Buds & Salt Crystals', extra: 20 },
  { id: 'cinnamon-cloves', name: 'Whole Cinnamon & Star Anise', extra: 20 },
  { id: 'smooth-clean', name: 'Clean Minimalist (Smooth Wax)', extra: 0 },
];

export const CustomCandleStudio: React.FC<CustomCandleStudioProps> = ({
  onAddCustomToCart,
}) => {
  const [occasion, setOccasion] = useState(OCCASIONS[0]);
  const [selectedVessel, setSelectedVessel] = useState(VESSELS[0]);
  const [selectedScent, setSelectedScent] = useState(SCENTS[1]);
  const [selectedTopping, setSelectedTopping] = useState(TOPPINGS[0]);
  const [customName, setCustomName] = useState('Ananya & Kabir');
  const [customDateOrSubtitle, setCustomDateOrSubtitle] = useState('With Love • 24.12.2026');
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const unitPrice = selectedVessel.basePrice + selectedTopping.extra;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    const item: CartItem = {
      id: `custom-${Date.now()}`,
      productId: 'customized-candles',
      name: `Custom Candle (${occasion.replace(/[^\w\s]/gi, '').trim()})`,
      price: unitPrice,
      quantity: quantity,
      image: '/src/assets/images/candle_customized_celebration_1790148192251.jpg',
      selectedScent: selectedScent.name,
      customLabel: `${customName} | ${customDateOrSubtitle}`,
      customVessel: selectedVessel.name,
      customTopping: selectedTopping.name,
      isCustom: true,
    };
    onAddCustomToCart(item);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello GlowNest Candles! I'd like to order a Custom Candle:\n` +
    `• Occasion: ${occasion}\n` +
    `• Inscription Name: ${customName}\n` +
    `• Date / Subtitle: ${customDateOrSubtitle}\n` +
    `• Vessel: ${selectedVessel.name}\n` +
    `• Fragrance: ${selectedScent.name}\n` +
    `• Topping: ${selectedTopping.name}\n` +
    `• Quantity: ${quantity}\n` +
    `• Total: ₹${totalPrice}\n` +
    `Please confirm the order!`
  );

  return (
    <section id="custom" className="py-16 sm:py-24 bg-[#F5ECE0] border-t border-b border-[#E6D9CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B87333] tracking-widest uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Custom Atelier</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B1C15] tracking-tight">
            Design Your Personalized Candle
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C4033] leading-relaxed">
            Craft a one-of-a-kind keepsake with tailored inscriptions, artisanal vessels, and therapeutic botanical scents. Perfect for weddings, anniversaries, birthdays, and gifts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Customization Controls (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#E6D9CB] shadow-sm space-y-6">
            
            {/* Step 1: Occasion */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#705244] mb-2.5">
                1. Select Occasion or Milestone
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {OCCASIONS.map((occ) => (
                  <button
                    key={occ}
                    type="button"
                    onClick={() => setOccasion(occ)}
                    className={`px-3 py-2 text-xs font-medium rounded-xl border text-left transition-all cursor-pointer ${
                      occasion === occ
                        ? 'border-[#B87333] bg-[#B87333]/15 text-[#2B1C15] font-semibold'
                        : 'border-[#D9C8B5] bg-white text-[#5C4033] hover:border-[#B87333]'
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Custom Inscription Text */}
            <div className="p-4 rounded-xl bg-white border border-[#E6D9CB] space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-[#705244]">
                  2. Foil Label Inscription
                </label>
                <span className="text-[11px] text-[#A89685]">Real-time preview on right</span>
              </div>

              <div>
                <span className="text-[11px] text-[#705244] block mb-1">Primary Headline (Names / Greeting):</span>
                <input
                  type="text"
                  maxLength={32}
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="e.g. Maya & Aarav"
                  className="w-full px-3.5 py-2 text-sm bg-[#FAF7F2] border border-[#D9C8B5] rounded-lg focus:outline-none focus:border-[#B87333] text-[#2B1C15]"
                />
              </div>

              <div>
                <span className="text-[11px] text-[#705244] block mb-1">Subtitle or Date / Special Quote:</span>
                <input
                  type="text"
                  maxLength={40}
                  value={customDateOrSubtitle}
                  onChange={(e) => setCustomDateOrSubtitle(e.target.value)}
                  placeholder="e.g. Happy 25th Birthday • 2026"
                  className="w-full px-3.5 py-2 text-sm bg-[#FAF7F2] border border-[#D9C8B5] rounded-lg focus:outline-none focus:border-[#B87333] text-[#2B1C15]"
                />
              </div>
            </div>

            {/* Step 3: Vessel */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#705244] mb-2.5">
                3. Choose Candle Vessel
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {VESSELS.map((v) => (
                  <div
                    key={v.id}
                    onClick={() => setSelectedVessel(v)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                      selectedVessel.id === v.id
                        ? 'border-[#B87333] bg-[#B87333]/10 shadow-xs'
                        : 'border-[#D9C8B5] bg-white hover:border-[#B87333]'
                    }`}
                  >
                    <div 
                      className="w-8 h-8 rounded-lg shrink-0 border border-black/10 mt-0.5"
                      style={{ backgroundColor: v.colorHex }}
                    />
                    <div className="grow">
                      <div className="flex items-center justify-between text-xs font-semibold text-[#2B1C15]">
                        <span>{v.name}</span>
                        <span className="font-mono text-[#B87333]">₹{v.basePrice}</span>
                      </div>
                      <p className="text-[11px] text-[#705244] mt-0.5">{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Fragrance Blend */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#705244] mb-2.5">
                4. Select Fragrance Aroma
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SCENTS.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => setSelectedScent(s)}
                    className={`p-2.5 rounded-xl border cursor-pointer transition-all text-left ${
                      selectedScent.id === s.id
                        ? 'border-[#B87333] bg-[#B87333]/15 font-semibold text-[#2B1C15]'
                        : 'border-[#D9C8B5] bg-white hover:border-[#B87333] text-[#5C4033]'
                    }`}
                  >
                    <div className="text-xs font-medium text-[#2B1C15]">{s.name}</div>
                    <div className="text-[10px] text-[#8C7665]">{s.notes}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 5: Botanical Topping */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#705244] mb-2.5">
                5. Wax Surface Topping
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {TOPPINGS.map((top) => (
                  <div
                    key={top.id}
                    onClick={() => setSelectedTopping(top)}
                    className={`p-2.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between text-xs ${
                      selectedTopping.id === top.id
                        ? 'border-[#B87333] bg-[#B87333]/15 font-semibold text-[#2B1C15]'
                        : 'border-[#D9C8B5] bg-white hover:border-[#B87333] text-[#5C4033]'
                    }`}
                  >
                    <span>{top.name}</span>
                    <span className="text-[11px] font-mono text-[#8C7665]">
                      {top.extra > 0 ? `+₹${top.extra}` : 'Included'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Live Interactive Label & Jar Preview (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            
            {/* Live Visual Canvas */}
            <div className="bg-white rounded-2xl border border-[#E6D9CB] p-6 shadow-md text-center space-y-5">
              
              <div className="flex items-center justify-between text-xs text-[#705244] border-b border-[#F0E6DA] pb-3">
                <span className="font-semibold uppercase tracking-wider text-[#B87333]">Live Custom Preview</span>
                <span>Hand-Poured in Small Batches</span>
              </div>

              {/* Graphical representation of the custom candle jar with real label inscription */}
              <div className="relative py-8 flex flex-col items-center justify-center">
                
                {/* Wick flame */}
                <div className="flex flex-col items-center mb-1 animate-pulse">
                  <div className="w-3.5 h-6 bg-gradient-to-t from-orange-400 via-amber-300 to-yellow-100 rounded-full blur-[0.5px] shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
                  <div className="w-0.5 h-2 bg-stone-800" />
                </div>

                {/* Jar body */}
                <div 
                  className="w-48 sm:w-56 h-64 rounded-2xl border-4 border-[#3D2619]/20 shadow-xl flex flex-col items-center justify-center p-4 relative transition-all duration-300"
                  style={{
                    backgroundColor: selectedVessel.colorHex,
                    color: selectedVessel.id === 'matte-ceramic' ? '#2B1C15' : '#FAF7F2',
                  }}
                >
                  {/* Jar Lid indicator */}
                  <div className="absolute -top-3 w-40 h-3 bg-[#D4A373] rounded-t-md shadow-xs" />

                  {/* Topping hint at rim */}
                  <div className="absolute top-2 px-3 py-0.5 text-[9px] rounded-full bg-white/30 backdrop-blur-xs text-stone-900 font-medium">
                    ✨ {selectedTopping.name.split(' ')[0]} Infusion
                  </div>

                  {/* Embossed Custom Label */}
                  <div className="w-full py-4 px-3 rounded-lg bg-[#FAF7F2] text-[#2B1C15] border border-[#D9C8B5] shadow-inner text-center space-y-1">
                    <div className="text-[9px] font-bold uppercase tracking-widest text-[#B87333]">
                      GLOWNEST CANDLES
                    </div>
                    <div className="text-sm sm:text-base font-serif font-bold truncate leading-tight text-[#2B1C15]">
                      {customName || 'Your Custom Name'}
                    </div>
                    <div className="text-[10px] text-[#5C4033] truncate italic">
                      {customDateOrSubtitle || 'Personalized Inscription'}
                    </div>
                    <div className="pt-1.5 border-t border-[#E6D9CB] text-[9px] text-[#8C7665] flex items-center justify-center gap-1">
                      <span>{selectedScent.name.split(' ')[0]}</span>
                      <span>·</span>
                      <span>100% Soy Wax</span>
                    </div>
                  </div>

                  <div className="absolute bottom-2 text-[9px] opacity-70">
                    Handmade in India
                  </div>
                </div>

              </div>

              {/* Price Calculation Summary */}
              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E6D9CB] text-left space-y-2 text-xs">
                <div className="flex justify-between text-[#5C4033]">
                  <span>Vessel: {selectedVessel.name}</span>
                  <span className="font-mono tabular-nums">₹{selectedVessel.basePrice}</span>
                </div>
                <div className="flex justify-between text-[#5C4033]">
                  <span>Surface Topping: {selectedTopping.name}</span>
                  <span className="font-mono tabular-nums">
                    {selectedTopping.extra > 0 ? `+₹${selectedTopping.extra}` : '₹0'}
                  </span>
                </div>
                <div className="flex justify-between text-[#5C4033]">
                  <span>Custom Gold Foil Inscription:</span>
                  <span className="font-medium text-emerald-700">Free Special Inclusion</span>
                </div>
                <div className="pt-2 border-t border-[#D9C8B5] flex justify-between items-baseline text-sm font-bold text-[#2B1C15]">
                  <span>Total ({quantity} candle{quantity > 1 ? 's' : ''})</span>
                  <span className="text-xl font-mono text-[#B87333] tabular-nums">
                    ₹{totalPrice}
                  </span>
                </div>
              </div>

              {/* Quantity Stepper & Add to Bag */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-[#D9C8B5] rounded-xl bg-[#FAF7F2] p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-[#2B1C15] hover:bg-white font-semibold cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-mono font-medium text-sm text-[#2B1C15] tabular-nums">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-[#2B1C15] hover:bg-white font-semibold cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    disabled={addedSuccess}
                    className={`flex-1 py-3 px-4 rounded-xl font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      addedSuccess
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#2B1C15] hover:bg-[#B87333] text-white shadow-sm'
                    }`}
                  >
                    {addedSuccess ? (
                      <>
                        <Check className="w-4 h-4" /> Customized Candle Added!
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" /> Add to Shopping Bag
                      </>
                    )}
                  </button>
                </div>

                {/* Direct WhatsApp Ordering */}
                <a
                  href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl border border-[#25D366] hover:bg-[#25D366]/10 text-[#128C7E] font-medium text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Order Directly via WhatsApp (+91 98765 43210)</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
