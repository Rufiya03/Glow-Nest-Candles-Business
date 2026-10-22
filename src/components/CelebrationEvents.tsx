import React, { useState } from 'react';
import { Sparkles, MessageCircle, Gift, CheckCircle2, ArrowRight } from 'lucide-react';
import { REVIEWS } from '../data/products';

export const CelebrationEvents: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState('Weddings & Favors');
  const [bulkQty, setBulkQty] = useState(50);

  const eventTypes = [
    {
      name: 'Weddings & Favors',
      icon: '💍',
      tag: 'Custom Monograms & Wax Seals',
      popularCandle: 'Customized Scented Jar in Ivory Ceramic',
      desc: 'Create bespoke fragrant wedding favors with bride & groom initials, custom wedding dates, and royal rose-saffron fragrance.',
    },
    {
      name: 'Birthdays & Milestones',
      icon: '🎂',
      tag: 'Personalized Age & Quotes',
      popularCandle: 'Celebration Jar with Golden Mica Flakes',
      desc: 'Delight the birthday star with personalized wishes, custom birthday aromas, and reusable amber apothecary jars.',
    },
    {
      name: 'Festivals & Diwali',
      icon: '🪔',
      tag: 'Festive Hampers & Terracotta Pots',
      popularCandle: 'Artisanal Soy Terracotta & Gift Sets',
      desc: 'Light up Diwali, Navratri, Christmas, and Eid with pure smokeless soy candles infused with cardamom, sandalwood, and sweet orange.',
    },
    {
      name: 'Corporate & Client Gifting',
      icon: '💼',
      tag: 'Branded Foil Boxes & Notes',
      popularCandle: 'The Sanctuary Duo Luxury Gift Box',
      desc: 'Thoughtful, sustainable executive gifts featuring your company branding, premium match bottles, and brass wick snuffer.',
    },
    {
      name: 'Housewarming & Anniversaries',
      icon: '🏡',
      tag: 'Home Sanctuary Scents',
      popularCandle: 'Ribbed Pillar & Amber Jar Collection',
      desc: 'Help friends and family bless their new space with grounding sandalwood, calming lavender, and sculpted aesthetic candles.',
    },
  ];

  // Calculate bulk pricing discount
  const baseRate = 220; // bulk average price
  let discountPercent = 0;
  if (bulkQty >= 100) discountPercent = 15;
  else if (bulkQty >= 50) discountPercent = 10;
  else if (bulkQty >= 25) discountPercent = 5;

  const discountedRate = Math.round(baseRate * (1 - discountPercent / 100));
  const estimatedTotal = discountedRate * bulkQty;

  const whatsappBulkMessage = encodeURIComponent(
    `Hello GlowNest Candles! I am planning an event:\n` +
    `• Event: ${selectedEvent}\n` +
    `• Approximate Quantity: ${bulkQty} candles\n` +
    `• Estimated Budget: ~₹${estimatedTotal}\n` +
    `Please share your catalogue and sample kit options!`
  );

  return (
    <section id="events" className="py-16 sm:py-24 bg-[#3B2317] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4A373] tracking-widest uppercase mb-2">
            <Gift className="w-3.5 h-3.5" />
            <span>Celebrations & Gifting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#FAF7F2] tracking-tight">
            Made Especially For You
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#D9C8B5] leading-relaxed">
            Birthdays • Weddings • Anniversaries • Festivals • Housewarming • Corporate Events
          </p>
        </div>

        {/* Event Selector & Interactive Bulk Estimator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Event Cards */}
          <div className="lg:col-span-7 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#D4A373] mb-2">
              Select Your Occasion
            </h3>
            <div className="space-y-3">
              {eventTypes.map((evt) => (
                <div
                  key={evt.name}
                  onClick={() => setSelectedEvent(evt.name)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                    selectedEvent === evt.name
                      ? 'bg-white/10 border-[#D4A373] shadow-md'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <span className="text-2xl mt-0.5" role="img" aria-label={evt.name}>
                    {evt.icon}
                  </span>
                  <div className="grow">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-lg font-semibold text-white">
                        {evt.name}
                      </h4>
                      <span className="text-[11px] font-medium text-[#D4A373]">
                        {evt.tag}
                      </span>
                    </div>
                    <p className="text-xs text-[#D9C8B5] mt-1 leading-relaxed">
                      {evt.desc}
                    </p>
                    <div className="mt-2 text-[11px] text-[#FAF7F2]/80 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#D4A373]" />
                      <span>Recommended: <strong>{evt.popularCandle}</strong></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Instant Bulk Estimator Box */}
          <div className="lg:col-span-5 bg-white text-[#2B1C15] p-6 sm:p-8 rounded-2xl shadow-xl border border-[#D4A373]/30 sticky top-28 space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#B87333]">
                Event Bulk Calculator
              </span>
              <h4 className="text-xl font-serif font-bold text-[#2B1C15] mt-1">
                Custom Favors for {selectedEvent.split(' ')[0]}
              </h4>
              <p className="text-xs text-[#705244] mt-1">
                Personalized labels, custom wax fragrances, and gift packaging included for bulk orders.
              </p>
            </div>

            {/* Slider / Qty Selector */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span>Quantity needed:</span>
                <span className="font-mono text-sm text-[#B87333] font-bold tabular-nums">
                  {bulkQty} pieces
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="250"
                step="5"
                value={bulkQty}
                onChange={(e) => setBulkQty(Number(e.target.value))}
                className="w-full accent-[#B87333] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#8C7665]">
                <span>10 pcs</span>
                <span>50 pcs (10% off)</span>
                <span>100+ pcs (15% off)</span>
              </div>
            </div>

            {/* Bulk estimation output */}
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CB] space-y-2 text-xs">
              <div className="flex justify-between text-[#5C4033]">
                <span>Bulk Tier Discount:</span>
                <span className="font-semibold text-emerald-700">
                  {discountPercent > 0 ? `${discountPercent}% Discount Applied` : 'Standard Bulk Rate'}
                </span>
              </div>
              <div className="flex justify-between text-[#5C4033]">
                <span>Approx. Unit Price:</span>
                <span className="font-mono tabular-nums font-semibold">₹{discountedRate} / piece</span>
              </div>
              <div className="pt-2 border-t border-[#D9C8B5] flex justify-between items-baseline text-sm font-bold text-[#2B1C15]">
                <span>Estimated Investment:</span>
                <span className="text-2xl font-mono text-[#B87333] tabular-nums">
                  ₹{estimatedTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <div className="space-y-2.5">
              <a
                href={`https://wa.me/919876543210?text=${whatsappBulkMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#B87333] hover:bg-[#A36329] text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Get Instant WhatsApp Bulk Quote</span>
              </a>

              <p className="text-[11px] text-center text-[#8C7665]">
                Free sample kit dispatched for verified wedding and event inquiries.
              </p>
            </div>
          </div>

        </div>

        {/* Customer Testimonials Section */}
        <div className="pt-12 border-t border-white/15">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Loved By Couples & Gifters Across India
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.name}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3 text-xs">
                    {'★'.repeat(rev.rating)}
                    <span className="text-white/60 ml-1">· {rev.occasion}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#FAF7F2]/90 italic leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-baseline text-xs">
                  <span className="font-semibold text-white">{rev.name}</span>
                  <span className="text-white/60">{rev.city} · {rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
