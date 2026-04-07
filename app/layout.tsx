import type { Metadata } from "next";
import { Inter, Lexend_Tera, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lexendTera = Lexend_Tera({
  subsets: ["latin"],
  variable: "--font-lexend-tera",
  weight: ["400", "600", "700", "800"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Nauman Khan - Founder, Operator, Venture Partner",
  description: "Investing capability. Creating growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lexendTera.variable} ${jetBrainsMono.variable} bg-brand-dark font-sans text-brand-text-light`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
