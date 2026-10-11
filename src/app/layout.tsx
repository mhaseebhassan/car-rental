import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { brandConfig } from "@/config/brand";
import { CurrencyProvider } from "@/context/CurrencyContext";
import SmoothScroll from "@/components/SmoothScroll";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import MobileConciergeBar from "@/components/MobileConciergeBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F3F1EC",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: `${brandConfig.name} | Luxury & Exotic Car Rental Dubai`,
    template: `%s | ${brandConfig.name}`,
  },
  description: `${brandConfig.name} - ${brandConfig.tagline} Supercars, luxury SUVs, and executive sedans delivered across Dubai in under 60 minutes. Free airport VIP handover. RTA licensed operator.`,
  keywords: [
    "Dubai Supercar Rental",
    "Luxury Car Rental Dubai",
    "Ferrari Rental Dubai",
    "Lamborghini Hire Dubai",
    "Rolls Royce Cullinan Dubai",
    "G63 Rental Dubai",
    "DXB Airport VIP Car Delivery",
    "Zero Deposit Car Rental UAE",
    "RTA Licensed Luxury Car Rental"
  ],
  authors: [{ name: brandConfig.brokerage }],
  creator: brandConfig.brokerage,
  publisher: brandConfig.brokerage,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  metadataBase: new URL("https://apexdrive-dubai.ae"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${brandConfig.name} | Luxury & Exotic Car Rental Dubai`,
    description: brandConfig.tagline,
    url: "https://apexdrive-dubai.ae",
    siteName: brandConfig.name,
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/images/og-share.webp",
        width: 1200,
        height: 630,
        alt: `${brandConfig.name} Precision Automotive Fleet`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brandConfig.name} | Luxury Car Rental Dubai`,
    description: brandConfig.tagline,
    images: ["/images/og-share.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "name": brandConfig.name,
    "legalName": brandConfig.brokerage,
    "description": brandConfig.tagline,
    "telephone": brandConfig.phone,
    "email": brandConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": brandConfig.address,
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.1328",
      "longitude": "55.2289"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "AED 1,300 to AED 4,500 per day"
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg-paper)] text-[var(--text-ink)] selection:bg-[var(--text-ink)] selection:text-[var(--bg-paper)]">
        <CurrencyProvider>
          <SmoothScroll />
          {children}
          <CookieConsentBanner />
          <MobileConciergeBar />
        </CurrencyProvider>
      </body>
    </html>
  );
}
