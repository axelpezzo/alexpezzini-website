import { ReactNode } from "react";
import { Instrument_Serif, Roboto } from "next/font/google";
import Script from "next/script";

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={`${roboto.variable} ${instrumentSerif.variable}`}>
      <body>
        {children}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9HXKTN36HB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9HXKTN36HB');
          `}
        </Script>
      </body>
    </html>
  );
}
