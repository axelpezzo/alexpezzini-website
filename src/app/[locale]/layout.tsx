import "@/assets/styles/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { routing } from "@/i18n/routing";
import { TLang } from "@/types";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: TLang }>;
}) {
  const messages = await getMessages({ locale: (await params).locale });
  const meta = messages.Meta;

  return {
    title: meta.title,
    description: meta.description,
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
  return [{ locale: "it" }, { locale: "en" }];
}
