import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kirara - Luxury Skincare",
  description: "Nourish your skin with the gentle touch of sakura. Premium body lotion with natural Japanese ingredients.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
