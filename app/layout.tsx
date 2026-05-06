import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LanguageProvider from "@/components/LanguageProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RIN Hair Studio — Premium Barber Parlor",
    template: "%s | RIN Hair Studio",
  },
  description:
    "RIN Hair Studio — premium barber parlor in Tân Bình, HCMC. Combos from 80K. Classic cuts, hot-towel shaves, beard grooming and more.",
  keywords: [
    "barbershop",
    "RIN Hair Studio",
    "tiệm cắt tóc nam",
    "barber Tân Bình",
    "hot towel shave",
    "fade haircut",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
