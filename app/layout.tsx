import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Britannia Defender Group | Restoring Icons of British Engineering",
  description:
    "Classic Land Rover Defenders Rebuilt. Perfected. Reborn. Meticulous restoration of Land Rover Defenders with timeless British craftsmanship and modern reliability.",
  keywords: [
    "Land Rover Defender restoration",
    "classic Defender for sale",
    "restored Land Rover UK",
    "Britannia Defender Group",
    "heritage Defender",
    "bespoke Land Rover",
    "British engineering",
    "classic 4x4 restoration",
    "London Defender specialist",
  ],
  authors: [
    {
      name: "Britannia Defender Group",
      url: "https://britanniadefendergroup.com",
    },
  ],
  creator: "Britannia Defender Group",
  publisher: "Britannia Defender Group",
  metadataBase: new URL("https://britanniadefendergroup.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://britanniadefendergroup.com",
    siteName: "Britannia Defender Group",
    title: "Britannia Defender Group | Restoring Icons of British Engineering",
    description:
      "Classic Land Rover Defenders Rebuilt. Perfected. Reborn. Meticulous restoration with timeless British craftsmanship and modern reliability. Est. London, England.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Britannia Defender Group — Restored Land Rover Defenders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Britannia Defender Group | Restoring Icons of British Engineering",
    description:
      "Classic Land Rover Defenders Rebuilt. Perfected. Reborn. Est. London, England.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
