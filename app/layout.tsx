import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nauman Khan — Growth Operator, AI, Ventures",
  description: "16 years in digital growth. 2 years building agentic AI. Building what's possible.",
  openGraph: {
    title: "Nauman Khan — Growth Operator, AI, Ventures",
    description: "16 years in digital growth. 2 years building agentic AI. Building what's possible.",
    type: "website",
    url: "https://nauman-khan.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          html, body { scrollbar-width: none; }
          html::-webkit-scrollbar, body::-webkit-scrollbar { display: none; }
        `}</style>
      </head>
      <body className="bg-[#0a0b14] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
