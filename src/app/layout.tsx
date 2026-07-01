import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theasterion.com"),
  title: "The Asterion - Story Development & Production House",
  description:
    "The Asterion is an independent production house developing original stories, films, documentaries, museum experiences and visual worlds.",
  openGraph: {
    title: "The Asterion - Story Development & Production House",
    description:
      "Original stories, films, documentaries, museum experiences and visual worlds.",
    url: "https://theasterion.com",
    siteName: "The Asterion",
    locale: "en_US",
    alternateLocale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
