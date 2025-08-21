"use client";
import { routing } from "@/i18n/routing";
import { redirect } from "next/navigation";

export default function Home() {
  const defaultLocale = routing.defaultLocale;
  const targetPath = `/${defaultLocale}`;

  if (typeof window !== "undefined") {
    if (!window.location.pathname.endsWith(targetPath)) {
      redirect(targetPath);
    }
  }

  return null;
}
