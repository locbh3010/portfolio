import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bùi Hữu Lộc (locbh) · Principal Front-end Engineer",
  description:
    "Portfolio of Bùi Hữu Lộc (locbh) – Principal Front-end Engineer specializing in Next.js, React, and Design System architecture, focused on performance and user experience.",
  keywords: [
    "Bùi Hữu Lộc",
    "locbh",
    "Front-end Engineer",
    "Principal Front-end",
    "Next.js",
    "React",
    "Design System",
    "Performance",
  ],
  openGraph: {
    title: "Bùi Hữu Lộc (locbh) · Principal Front-end Engineer",
    description:
      "Connect with locbh to build high-performance web products, excellent experiences, and sustainable UI architecture.",
    type: "website",
    url: "https://locbh.dev",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bùi Hữu Lộc (locbh) · Principal Front-end Engineer",
    description:
      "Front-end engineer leading Next.js and React teams with focus on performance, accessibility, and product mindset.",
  },
  alternates: {
    canonical: "https://locbh.dev",
  },
  metadataBase: new URL("https://locbh.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
