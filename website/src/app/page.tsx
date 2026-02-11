import { Metadata } from "next";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";

export const metadata: Metadata = {
  title: "Chronos Picker - Modern React Date Time Picker with Timezone Support",
  description: "Chronos Picker is a powerful React date and time picker component featuring timezone support, dark mode, accessibility compliance, and beautiful UI. Get started for free.",
  keywords: [
    "React date time picker",
    "timezone picker component",
    "accessible date picker",
    "dark mode date picker",
    "React datetime component",
    "WCAG compliant picker",
    "date selector React"
  ],
  openGraph: {
    title: "Chronos Picker - React Date & Time Picker Component",
    description: "Beautiful, accessible React date time picker with full timezone support and dark mode",
  },
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://chronos-picker.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Documentation",
        item: "https://chronos-picker.com/docs/introduction",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "API Reference",
        item: "https://chronos-picker.com/docs/api",
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      <Hero />
      <FeatureGrid />
    </main>
  );
}
