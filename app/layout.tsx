import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { JsonLd, personJsonLd } from "@/components/json-ld";
import { site } from "@/data/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s · ${site.short}` },
  description: site.description,
  alternates: { canonical: site.url },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    locale: "ru_BY",
    type: "website",
    siteName: site.brand,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body className="min-h-screen antialiased">
        <JsonLd data={personJsonLd()} />
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
