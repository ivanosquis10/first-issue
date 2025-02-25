import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import React from "react";

import BuyMeACoffee from "../components/BuyMeACoffee";
import { TopBar } from "../components/TopBar";
import "../styles/globals.css";
import config from "./config.mts";

// Fontawesome and TailwindCSS related settings
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  metadataBase: new URL(config.meta.siteUrl),
  title: {
    default: config.meta.title,
    template: `%s | ${config.meta.title}`
  },
  description: config.meta.description,
  openGraph: {
    title: config.meta.title,
    description: config.meta.description,
    url: "./",
    siteName: config.meta.title,
    images: [config.meta.socialBanner],
    locale: "en_US",
    type: "website"
  },
  alternates: {
    canonical: "./"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  twitter: {
    title: config.meta.title,
    card: "summary_large_image",
    images: [config.meta.socialBanner]
  },
  creator: config.author.name,
  publisher: config.author.name,
  authors: [
    {
      name: "Luca Cavallin",
      url: config.author.website
    }
  ],
  viewport: "width=device-width, initial-scale=1"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#101620" />
        <meta name="msapplication-TileColor" content="#101620" />
        <meta name="theme-color" content="#101620" />
        <script defer data-domain="verto.sh" src="https://plausible.io/js/script.js"></script>
      </head>
      <body>
        <main className={`${space_grotesk.variable} font-sans`}>
          <TopBar />
          {children}
        </main>
        <BuyMeACoffee />
      </body>
    </html>
  );
}
