import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
      crawlDelay: 1,
    },
    sitemap: "https://chronos-picker.com/sitemap.xml",
  };
}
