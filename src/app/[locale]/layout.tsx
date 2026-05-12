import "@/assets/styles/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { routing } from "@/i18n/routing";
import { TLang } from "@/types";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

const BASE_URL = "https://www.alexpezzini.it";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: TLang }>;
}) {
  const locale = (await params).locale;
  const messages = await getMessages({ locale: locale });
  const meta = messages.Meta;

  return {
    metadataBase: new URL(BASE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        it: "/it",
        en: "/en",
        "x-default": `/${routing.defaultLocale}`,
      },
    },
    openGraph: {
      type: "website",
      url: `/${locale}`,
      siteName: "Alex Pezzini",
      title: meta.title,
      description: meta.description,
      locale: locale === "it" ? "it_IT" : "en_US",
      alternateLocale: locale === "it" ? ["en_US"] : ["it_IT"],
      images: [
        {
          url: "/default_image.png",
          width: 1672,
          height: 903,
          alt: meta.title,
        },
      ],
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
