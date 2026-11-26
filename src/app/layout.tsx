import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "NOVA Store",
  description:
    "Discover and explore a wide range of products at NOVA Store. Enjoy a modern shopping experience with easy product browsing and cart management.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${vazirmatn.variable} ${vazirmatn.variable}`}>
      <body>{children}</body>
    </html>
  );
}
