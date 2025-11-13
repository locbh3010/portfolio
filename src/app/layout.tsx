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
    "Portfolio của Bùi Hữu Lộc (locbh) – Principal Front-end Engineer chuyên về Next.js, React và kiến trúc Design System, tập trung vào hiệu năng và trải nghiệm người dùng.",
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
      "Kết nối với locbh để xây dựng sản phẩm web hiệu năng cao, trải nghiệm xuất sắc và kiến trúc UI bền vững.",
    type: "website",
    url: "https://locbh.dev",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bùi Hữu Lộc (locbh) · Principal Front-end Engineer",
    description:
      "Kỹ sư front-end dẫn dắt các team Next.js và React với trọng tâm performance, accessibility và product mindset.",
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
