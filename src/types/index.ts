export interface Product {
  id: string;
  name: string;
  category: 'scented' | 'decorative' | 'custom' | 'gift-sets';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: string;
  burnTime: string;
  waxType: string;
  scentNotes?: {
    top: string;
    heart: string;
    base: string;
  };
  scentOptions?: string[];
  dimensions?: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  bestFor: string;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  selectedScent?: string;
  customLabel?: string;
  customVessel?: string;
  customTopping?: string;
  isCustom?: boolean;
}

export interface CustomCandleConfig {
  occasion: string;
  vessel: {
    id: string;
    name: string;
    color: string;
    price: number;
  };
  scent: {
    id: string;
    name: string;
    family: string;
    notes: string;
  };
  topping: {
    id: string;
    name: string;
    price: number;
  };
  labelText: string;
  subtitleText: string;
  quantity: number;
}
