import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToastProvider from "./components/ui/ToastProvider";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JAYNEX IT - Your Digital Solutions Partner",
  description:
    "Transform your digital vision into reality with JAYNEX IT's cutting-edge solutions.",
  verification: {
    google: "o3zL6I4E9qUBHzXPbUGtZyuBFl8YHE7OzohGvLjBdAM"
  },
  openGraph: {
    title: "JAYNEX IT - Your Digital Solutions Partner",
    description: "Transform your digital vision into reality with JAYNEX IT's cutting-edge solutions.",
    url: "https://jaynex-it.vercel.app/",
    siteName: "JAYNEX IT",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JAYNEX IT - Your Digital Solutions Partner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JAYNEX IT - Your Digital Solutions Partner",
    description: "Transform your digital vision into reality with JAYNEX IT's cutting-edge solutions.",
    images: ["/og-image.png"],
    creator: "@jaynexit",
  },
  alternates: {
    canonical: "https://jaynex-it.vercel.app/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "JAYNEX IT",
  "url": "https://jaynex-it.vercel.app/",
  "logo": "/logo.png",
  "sameAs": [
    "https://www.facebook.com/jaynexit",
    "https://twitter.com/jaynexit"
  ],
  "description": "Transform your digital vision into reality with JAYNEX IT's cutting-edge solutions."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://jaynexit.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ToastProvider />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
