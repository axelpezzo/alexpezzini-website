import "@/assets/styles/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { TLang } from "@/types";
import type { Metadata } from "next";
import { Instrument_Serif, Roboto } from "next/font/google";

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
  params: Promise<{ lang: TLang }>;
}) {
  const { children } = props;
  const params = await props.params;
  const { lang } = params;

  return (
    <html
      lang={lang}
      className={`${roboto.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{ lang: "it" }, { lang: "en" }];
}
