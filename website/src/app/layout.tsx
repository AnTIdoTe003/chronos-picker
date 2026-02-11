import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins"
});

const baseUrl = "https://chronos-picker.com";

export const metadata: Metadata = {
  title: "Chronos Picker - Timezone-Aware Date & Time Picker for React",
  description: "A modern, accessible, and lightweight React date time picker component with full timezone support, dark mode, and WCAG 2.1 compliance. Built with TypeScript and Luxon.",
  keywords: [
    "React date picker",
    "time picker",
    "timezone picker",
    "date time component",
    "React component",
    "datetime selector",
    "timezone aware",
    "WCAG accessible",
    "dark mode picker",
    "Luxon integration"
  ],
  authors: [
    { name: "AnTIdoTe003", url: "https://github.com/AnTIdoTe003" }
  ],
  creator: "AnTIdoTe003",
  publisher: "Chronos Picker",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Chronos Picker - Timezone-Aware Date & Time Picker for React",
    description: "A modern, accessible React date time picker with timezone support and dark mode. Perfect for applications handling international dates and times.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Chronos Picker - React Date Time Component",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chronos Picker - React Date & Time Picker",
    description: "Timezone-aware date time picker component with accessible UI and dark mode support",
    images: [`${baseUrl}/og-image.png`],
  },
  category: "Developer Tools",
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://chronos-picker.com",
    name: "Chronos Picker",
    description: "A modern, accessible, and lightweight React date time picker component with full timezone support",
    url: "https://chronos-picker.com",
    applicationCategory: "DeveloperApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    author: {
      "@type": "Person",
      name: "AnTIdoTe003",
      url: "https://github.com/AnTIdoTe003",
    },
    operatingSystem: "Cross-platform",
    softwareRequirements: "React, Luxon",
    license: "https://opensource.org/licenses/MIT",
    keywords: "React, date picker, time picker, timezone, datetime, component",
    inLanguage: "en",
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <meta name="google-site-verification" content="" />
        <meta name="msvalidate.01" content="" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://chronos-picker.com" />
      </head>
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
