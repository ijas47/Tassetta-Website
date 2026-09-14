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
 "Sales tax platform for US ecommerce. Tassetta tracks where you owe across all 50 states, handles the registrations, and gets every return filed on time. You watch the whole thing from one page.";

export const metadata: Metadata = {
 metadataBase: new URL("https://tassetta.com"),
 title: {
 default: "Tassetta. The sales tax platform that actually files.",
 template: "%s. Tassetta",
 },
 description: DEFAULT_DESC,
 applicationName: SITE_NAME,
 openGraph: {
 type: "website",
 siteName: SITE_NAME,
 title: "Tassetta. The sales tax platform that actually files.",
 description: DEFAULT_DESC,
 },
 twitter: {
 card: "summary_large_image",
 title: "Tassetta. The sales tax platform that actually files.",
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
