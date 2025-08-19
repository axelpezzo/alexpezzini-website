import "@/assets/styles/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { routing } from "@/i18n/routing";
import { TLang } from "@/types";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Instrument_Serif, Roboto } from "next/font/google";
import { notFound } from "next/navigation";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Alex Pezzini - Sviluppatore Web Fullstack",
  description:
    "Sviluppatore web full-stack specializzato in React, Next.js e TypeScript, certificato sviluppatore BigCommerce ed esperto di Drupal CMS.",
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: TLang }>;
}) {
  const { children } = props;
  const params = await props.params;
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${roboto.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ lang: "it" }, { lang: "en" }];
}
