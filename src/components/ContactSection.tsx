import React, { useState } from 'react';
import { MessageCircle, Mail, Instagram, Send, MapPin, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [enquiryType, setEnquiryType] = useState('Custom Order');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !emailOrPhone || !message) return;
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmailOrPhone('');
      setMessage('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B87333] tracking-widest uppercase mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B1C15] tracking-tight">
            Contact GlowNest Candles
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#705244] leading-relaxed">
            Have a question about scents, custom wedding designs, or bulk corporate gifting? We would love to light up your moments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/919876543210?text=Hello%20GlowNest%20Candles!%20I%20have%20an%20enquiry%20regarding%20your%20handmade%20candles."
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-[#E6D9CB] hover:border-[#25D366] transition-all flex items-center gap-4 group shadow-2xs hover:shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#25D366] flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-[#8C7665]">WhatsApp Direct</div>
                <div className="text-sm sm:text-base font-bold text-[#2B1C15] group-hover:text-[#25D366] transition-colors">
                  +91 98765 43210
                </div>
                <div className="text-[11px] text-[#705244]">Instant responses (9 AM – 9 PM)</div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:glownestcandles@example.com?subject=Enquiry%20about%20GlowNest%20Candles"
              className="p-5 rounded-2xl bg-white border border-[#E6D9CB] hover:border-[#B87333] transition-all flex items-center gap-4 group shadow-2xs hover:shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF0E4] text-[#B87333] flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-[#8C7665]">Email Enquiries</div>
                <div className="text-sm sm:text-base font-bold text-[#2B1C15] group-hover:text-[#B87333] transition-colors">
                  glownestcandles@example.com
                </div>
                <div className="text-[11px] text-[#705244]">Custom proposals & corporate decks</div>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href="https://instagram.com/glownestcandles"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-[#E6D9CB] hover:border-[#E1306C] transition-all flex items-center gap-4 group shadow-2xs hover:shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#E1306C] flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-[#8C7665]">Instagram</div>
                <div className="text-sm sm:text-base font-bold text-[#2B1C15] group-hover:text-[#E1306C] transition-colors">
                  @glownestcandles
                </div>
                <div className="text-[11px] text-[#705244]">Behind the scenes & customer photos</div>
              </div>
            </a>

            {/* Studio note */}
            <div className="p-4 rounded-xl bg-[#F3ECE2] border border-[#E6D9CB] text-xs text-[#5C4033] flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#B87333] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#2B1C15]">Small-Batch Atelier:</strong>
                <p className="mt-0.5">Hand-poured with love in Mumbai, India. Dispatched across all states with bubble-safe transit packing.</p>
              </div>
            </div>

          </div>

          {/* Right: Interactive Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#E6D9CB] shadow-sm">
            <h3 className="text-xl font-serif font-bold text-[#2B1C15] mb-2">
              Send Us An Enquiry
            </h3>
            <p className="text-xs text-[#705244] mb-6">
              Fill in your details below and our candle artisan team will get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="p-6 bg-[#FAF7F2] rounded-xl border border-emerald-300 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-serif font-bold text-[#2B1C15]">
                  Enquiry Received!
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4033]">
                  Thank you for reaching out to GlowNest Candles. We have received your message and will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2B1C15] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priyanshu Roy"
                      className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] border border-[#D9C8B5] rounded-lg focus:outline-none focus:border-[#B87333] text-[#2B1C15]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#2B1C15] mb-1">
                      Email or WhatsApp Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                      placeholder="+91 98765 43210 or email"
                      className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] border border-[#D9C8B5] rounded-lg focus:outline-none focus:border-[#B87333] text-[#2B1C15]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2B1C15] mb-1">
                    Enquiry Subject
                  </label>
                  <select
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] border border-[#D9C8B5] rounded-lg focus:outline-none focus:border-[#B87333] text-[#2B1C15]"
                  >
                    <option value="Custom Order">Personalized Custom Candle</option>
                    <option value="Wedding Favors">Wedding & Party Favors (Bulk)</option>
                    <option value="Corporate Gifting">Corporate & Festival Hampers</option>
                    <option value="Fragrance Question">Scent & Wax Recommendations</option>
                    <option value="General">Other Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2B1C15] mb-1">
                    Your Message / Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you have in mind (e.g. quantity, scent preference, required date)..."
                    className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] border border-[#D9C8B5] rounded-lg focus:outline-none focus:border-[#B87333] text-[#2B1C15]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#B87333] hover:bg-[#A36329] text-white font-medium text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
