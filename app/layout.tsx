
import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Playfair_Display } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" })
const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "ChiroPro Wellness - Elite Chiropractic Care",
  description:
    "ChiroPro Wellness offers personalized chiropractic care focused on long-term relief, posture alignment, and holistic well-being in San Diego.",
  metadataBase: new URL("https://chiropronow.com"),
  openGraph: {
    title: "Elite Chiropractic Care in the Heart of the City",
    description: "ChiroPro Wellness offers personalized chiropractic care focused on long-term relief and holistic well-being.",
    images: [
      {
        url: "/images/chiropro-social.jpg",
        width: 1200,
        height: 630,
        alt: "ChiroPro Wellness",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Chiropractic Care in the Heart of the City",
    description: "ChiroPro Wellness offers personalized chiropractic care focused on long-term relief and holistic well-being.",
    images: ["/images/chiropro-social.jpg"],
  },
  appleWebApp: {
    title: "ChiroPro Wellness",
    statusBarStyle: "black-translucent",
  },
  applicationName: "ChiroPro Wellness",
  keywords: ["ChiroPro Wellness", "chiropractic", "wellness", "San Diego", "back pain", "posture", "holistic health"],
  authors: [{ name: "ChiroPro Wellness" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#9b87f5",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.className}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/chiropro-logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="ChiroPro Wellness" />
        <link rel="apple-touch-icon" href="/images/chiropro-logo.png" />
        <style jsx global>{`
          .font-serif {
            font-family: ${playfair.style.fontFamily};
          }
        `}</style>
      </head>
      <body className="bg-white">{children}</body>
    </html>
  )
}
