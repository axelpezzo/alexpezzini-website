import { routing } from "@/i18n/routing";
import type { MetadataRoute } from "next";

const siteUrl = "https://www.alexpezzini.it";

export const dynamic = "force-static";

function toAbsolute(pathname: string): string {
  const normalizedBase = siteUrl.replace(/\/+$/, "");
  return `${normalizedBase}${pathname}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: toAbsolute(`/${locale}`),
    alternates: {
      languages: {
        it: toAbsolute("/it"),
        en: toAbsolute("/en"),
        "x-default": toAbsolute(`/${routing.defaultLocale}`),
      },
    },
  }));
}
