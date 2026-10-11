export interface BrandConfig {
  name: string;
  tagline: string;
  brokerage: string;
  permitNumber: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  address: string;
  coordinates: string;
  currency: 'AED' | 'USD';
  exchangeRateUsd: number;
  deliveryPromise: string;
  colors: {
    base: string;
    surface: string;
    ink: string;
    accent: string;
    accentHover: string;
  };
  socials: {
    instagram: string;
    whatsapp: string;
    telegram: string;
    linkedin: string;
  };
  tracking: {
    ga4Id: string;
    pixelId: string;
  };
  endpoints: {
    contactForm: string;
  };
}

export const brandConfig: BrandConfig = {
  name: "APEX DRIVE DUBAI",
  tagline: "PRECISION AUTOMOTIVE FLEET. ZERO COMPROMISE.",
  brokerage: "Apex Drive Luxury Car Rental LLC",
  permitNumber: "RTA Permit #2026-DXB-9912 / Commercial Reg #108422",
  phone: "+97143992810",
  phoneDisplay: "+971 4 399 2810",
  whatsappNumber: "971508471920",
  whatsappDisplay: "+971 50 847 1920",
  email: "dispatch@apexdrive.ae",
  address: "Al Quoz Industrial 3, Street 18B, Dubai, United Arab Emirates",
  coordinates: "25.1328° N, 55.2289° E",
  currency: "AED",
  exchangeRateUsd: 3.6725,
  deliveryPromise: "Under 60 minutes anywhere in Dubai. Free airport meet and greet.",
  colors: {
    base: "#F3F1EC",
    surface: "#FFFFFF",
    ink: "#0E0E0E",
    accent: "#E8590C",
    accentHover: "#C94A06",
  },
  socials: {
    instagram: "https://instagram.com/apexdrivedxb",
    whatsapp: "https://wa.me/971508471920",
    telegram: "https://t.me/apexdrivedxb",
    linkedin: "https://linkedin.com/company/apexdrivedxb",
  },
  tracking: {
    ga4Id: "G-XXXXXXXXXX",
    pixelId: "XXXXXXXXXXXXXXX",
  },
  endpoints: {
    contactForm: "https://formspree.io/f/placeholder",
  },
};

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
