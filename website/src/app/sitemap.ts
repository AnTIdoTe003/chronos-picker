import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://chronos-picker.com";
  const pages = [
    "",
    "/docs/introduction",
    "/docs/installation",
    "/docs/usage",
    "/docs/api",
    "/docs/theming",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : 0.8,
  }));
}
