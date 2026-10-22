export interface MockProduct {
  id: string;
  name: string;
  category: 'scented' | 'decorative' | 'custom' | 'gift-sets';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  features: string[];
  waxType: string;
}

export interface CartItem {
  product: MockProduct;
  quantity: number;
}

export const MOCK_PRODUCTS: MockProduct[] = [
  {
    id: 'lavender-dream',
    name: 'Lavender Dream Scented Candle',
    category: 'scented',
    categoryLabel: 'Scented Candle',
    price: 249,
    originalPrice: 299,
    rating: 4.8,
    reviewCount: 120,
    description: 'A calming blend of lavender and vanilla, designed to bring peace and relaxation to your space.',
    image: '/assets/exact/candle_lavender_dream_hd.jpg',
    features: ['100% Soy Wax', 'Long Lasting', 'Eco Friendly'],
    waxType: '100% Pure Soy Wax',
  },
  {
    id: 'rose-bliss',
    name: 'Rose Bliss Decorative Candle',
    category: 'decorative',
    categoryLabel: 'Decorative Candle',
    price: 229,
    originalPrice: 279,
    rating: 4.9,
    reviewCount: 94,
    description: 'Intricately molded floral rose candle crafted in delicate rose petal soy wax. Enhances any tabletop, vanity, or romantic setting.',
    image: '/assets/exact/candle_rose_bliss_hd.jpg',
    features: ['Hand-Carved', 'Natural Dyes', 'Subtle Rose Fragrance'],
    waxType: 'Soy-Beeswax Blend',
  },
  {
    id: 'vanilla-bean',
    name: 'Vanilla Bean',
    category: 'scented',
    categoryLabel: 'Scented Candle',
    price: 219,
    originalPrice: 269,
    rating: 4.7,
    reviewCount: 88,
    description: 'Rich Madagascar vanilla pods with notes of warm whipped cream and golden sugarcane.',
    image: '/assets/exact/candle_vanilla_hd.jpg',
    features: ['Madagascar Vanilla', 'Lead-free Cotton Wick', 'Clean 45-hr Burn'],
    waxType: '100% Soy Wax',
  },
  {
    id: 'sandalwood',
    name: 'Sandalwood',
    category: 'scented',
    categoryLabel: 'Scented Candle',
    price: 279,
    originalPrice: 299,
    rating: 4.9,
    reviewCount: 112,
    description: 'Deep Australian sandalwood essence blended with cedarwood and golden amber resin.',
    image: '/assets/exact/candle_sandalwood_hd.jpg',
    features: ['Earthy & Grounding', 'Glass Amber Tumbler', 'Aromatherapeutic'],
    waxType: 'Soy & Coconut Wax',
  },
  {
    id: 'lavender',
    name: 'Lavender',
    category: 'scented',
    categoryLabel: 'Scented Candle',
    price: 239,
    originalPrice: 289,
    rating: 4.8,
    reviewCount: 104,
    description: 'French lavender blossoms harvested at sunrise, infused with gentle hints of chamomile.',
    image: '/assets/exact/candle_lavender_hd.jpg',
    features: ['Sleep & Stress Relief', 'Botanical Infusion', 'Eco Friendly'],
    waxType: '100% Pure Soy Wax',
  },
  {
    id: 'jasmine',
    name: 'Jasmine',
    category: 'scented',
    categoryLabel: 'Scented Candle',
    price: 259,
    originalPrice: 299,
    rating: 4.8,
    reviewCount: 76,
    description: 'Night-blooming royal jasmine with fresh white petals, neroli, and sweet honey undertones.',
    image: '/assets/exact/candle_jasmine_hd.jpg',
    features: ['Floral Radiance', 'Natural Extracts', 'Cotton Wick'],
    waxType: 'Soy Wax Blend',
  },
  {
    id: 'ocean-breeze',
    name: 'Ocean Breeze',
    category: 'scented',
    categoryLabel: 'Scented Candle',
    price: 269,
    originalPrice: 299,
    rating: 4.6,
    reviewCount: 65,
    description: 'Crisp sea salt, coastal driftwood, marine ozone, and refreshing eucalyptus mist.',
    image: '/assets/exact/candle_ocean_hd.jpg',
    features: ['Fresh & Invigorating', 'Aqua Tinted Glass', 'Clean Burning'],
    waxType: 'Soy Wax Blend',
  },
  {
    id: 'cinnamon-spice',
    name: 'Cinnamon Spice',
    category: 'scented',
    categoryLabel: 'Scented Candle',
    price: 249,
    originalPrice: 299,
    rating: 4.9,
    reviewCount: 98,
    description: 'Ceylon cinnamon quills, crushed cloves, fresh nutmeg, and warm baked apple sweetness.',
    image: '/assets/exact/candle_cinnamon_hd.jpg',
    features: ['Warm & Festive', 'Rich Scent Throw', 'Winter Classic'],
    waxType: 'Soy-Beeswax Blend',
  },
];

export const INITIAL_CART: CartItem[] = [
  {
    product: MOCK_PRODUCTS[0], // Lavender Dream (₹249)
    quantity: 1,
  },
  {
    product: MOCK_PRODUCTS[1], // Rose Bliss (₹229)
    quantity: 1,
  },
];

export const USER_PROFILE = {
  name: 'Rufiya Shaikh',
  email: 'rufiya@gmail.com',
  address: {
    line1: '123, Green Park, Bhopal',
    stateAndPin: 'Madhya Pradesh - 462016',
  },
};

export const ORDER_TRACKING = {
  orderId: 'GN-88421',
  steps: [
    { title: 'Order Placed', timestamp: 'Apr 26, 2025 10:24 AM', completed: true },
    { title: 'Processing', timestamp: 'Apr 26, 2025 2:30 PM', completed: true },
    { title: 'Shipped', timestamp: 'Apr 27, 2025 11:15 AM', completed: true },
    { title: 'Out for Delivery', timestamp: 'Apr 28, 2025 9:00 AM', completed: true, current: true },
    { title: 'Delivered', timestamp: 'Expected by Apr 29, 2025', completed: false },
  ],
};
