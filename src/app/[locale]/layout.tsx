import "@/assets/styles/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { routing } from "@/i18n/routing";
import { TLang } from "@/types";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: TLang }>;
}) {
  const locale = (await params).locale;
  const messages = await getMessages({ locale: locale });
  const meta = messages.Meta;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        it: `${BASE_URL}/it`,
        en: `${BASE_URL}/en`,
      },
    },
  };
}

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

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      <Header />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
