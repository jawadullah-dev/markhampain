import type { MetadataRoute } from "next";

const baseUrl = "https://markhampain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/doctors",
    "/services",
    "/services/chiropractic",
    "/services/massage-therapy",
    "/services/acupuncture",
    "/services/orthotics",
    "/motor-vehicle-accidents",
    "/faq",
    "/blog",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
