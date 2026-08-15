import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const SITE_NAME = "Tassetta";
const DEFAULT_DESC =
  "Managed US sales tax compliance. The platform watches where you owe across all 50 states, a tax expert files every return, and you approve in one click.";

export const metadata: Metadata = {
  metadataBase: new URL("https://tassetta.com"),
  title: {
    default: "Tassetta — Sales tax, handled. Not handed back to you.",
    template: "%s — Tassetta",
  },
  description: DEFAULT_DESC,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Tassetta — Sales tax, handled. Not handed back to you.",
    description: DEFAULT_DESC,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tassetta — Sales tax, handled. Not handed back to you.",
    description: DEFAULT_DESC,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
