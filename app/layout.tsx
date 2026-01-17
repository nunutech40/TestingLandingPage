import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { GoogleAnalytics } from "@/components/shared/google-analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JuraganVault - Amankan Aset & Warisan Keluarga",
  description: "Template & Panduan Praktis Pencatatan Aset untuk Keluarga Indonesia. Solusi anti-ribet untuk merapikan dokumen penting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />

        {/* Google Analytics */}
        <GoogleAnalytics />

        {/* JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "JuraganVault - Paket Lengkap",
              "description": "Template & Panduan Praktis Pencatatan Aset untuk Keluarga Indonesia. Solusi anti-ribet untuk merapikan dokumen penting.",
              "image": "https://juraganvault.com/product-excel.png",
              "brand": {
                "@type": "Brand",
                "name": "JuraganVault"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://juraganvault.com",
                "priceCurrency": "IDR",
                "price": "297000",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "JuraganVault"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
