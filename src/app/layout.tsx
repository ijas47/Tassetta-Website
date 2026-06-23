import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tassetta | Managed US Sales Tax Compliance",
  description:
    "Sales tax, handled. Not handed back to you. Managed compliance for Shopify brands and multi-channel sellers.",
  openGraph: {
    title: "Tassetta | Managed US Sales Tax Compliance",
    description:
      "Sales tax, handled. Not handed back to you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}