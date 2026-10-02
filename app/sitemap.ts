import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { cases } from "@/data/cases";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/services", "/practice", "/blog", "/about", "/contact", "/privacy"];
  const pages = [
    ...staticPaths.map((path) => ({ url: `${site.url}${path || "/"}`, lastModified: new Date() })),
    ...services.map((item) => ({ url: `${site.url}/services/${item.slug}`, lastModified: new Date() })),
    ...cases.map((item) => ({ url: `${site.url}/practice/${item.slug}`, lastModified: new Date() })),
    ...articles.map((item) => ({ url: `${site.url}/blog/${item.slug}`, lastModified: new Date(item.dateISO) })),
  ];
  return pages;
}
