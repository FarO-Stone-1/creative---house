export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;       // in GHS
  unit: string;        // e.g. "pack of 100"
  category: string;
  image?: string;
};

// ⚠️ PLACEHOLDER PRICES — replace with real prices from your friend.
export const products: Product[] = [
  // Business Cards
  {
    id: "cards-100",
    name: "Business Cards — 100 pcs",
    description: "Premium matte finish, double-sided, full color.",
    price: 80,
    unit: "pack of 100",
    category: "Business Cards",
  },
  {
    id: "cards-500",
    name: "Business Cards — 500 pcs",
    description: "Bulk pack. Matte or gloss finish, double-sided.",
    price: 320,
    unit: "pack of 500",
    category: "Business Cards",
  },

  // Stickers
  {
    id: "stickers-100",
    name: "Stickers — 100 pcs",
    description: "Custom die-cut stickers, waterproof.",
    price: 150,
    unit: "pack of 100",
    category: "Stickers",
  },

  // Roll-Up Banners
  {
    id: "rollup-standard",
    name: "Roll-Up Banner",
    description: "80×200cm full-color print with stand and carry bag.",
    price: 350,
    unit: "each",
    category: "Banners",
  },

  // T-Shirts
  {
    id: "tshirt-single",
    name: "Custom T-Shirt",
    description: "Full-color print on quality cotton shirt.",
    price: 60,
    unit: "each",
    category: "T-Shirts",
  },
  {
    id: "tshirt-bulk",
    name: "T-Shirts — Bulk (10+)",
    description: "Discounted price for teams, churches, and events.",
    price: 50,
    unit: "each (min 10)",
    category: "T-Shirts",
  },

  // Large Format
  {
    id: "large-format-sqm",
    name: "Large Format Print",
    description: "Per square meter. Outdoor vinyl, vivid color.",
    price: 120,
    unit: "per sqm",
    category: "Large Format",
  },

  // Flyers
  {
    id: "flyers-100",
    name: "Flyers — 100 pcs",
    description: "A5 full-color flyers, single-sided.",
    price: 100,
    unit: "pack of 100",
    category: "Flyers",
  },

  // Banners
  {
    id: "banner-sqm",
    name: "Vinyl Banner",
    description: "Per square meter. Reinforced edges, eyelets.",
    price: 90,
    unit: "per sqm",
    category: "Banners",
  },
];

export const categories = [
  "All",
  "Business Cards",
  "Stickers",
  "Banners",
  "T-Shirts",
  "Large Format",
  "Flyers",
];