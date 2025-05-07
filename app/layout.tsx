import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PURE Health - Share Your Experience",
  description:
    "Your feedback helps us improve our services. Please take a moment to rate your experience with PURE Health.",
  metadataBase: new URL("https://pureivhealth.com"),
  openGraph: {
    title: "How Was Your Experience at PURE Health?",
    description: "Your feedback helps us improve our services. Please take a moment to rate your experience.",
    images: [
      {
        url: "/images/social-share.png",
        width: 1200,
        height: 630,
        alt: "PURE Health Review",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Was Your Experience at PURE Health?",
    description: "Your feedback helps us improve our services. Please take a moment to rate your experience.",
    images: ["/images/social-share.png"],
  },
  appleWebApp: {
    title: "PURE Health Reviews",
    statusBarStyle: "black-translucent",
  },
  applicationName: "PURE Health Reviews",
  keywords: ["PURE Health", "Dr. Matt Johnson", "healthcare reviews", "medical reviews", "patient experience"],
  authors: [{ name: "PURE Health" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#4a90a7",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/pure-health-logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="PURE Health Reviews" />
        <link rel="apple-touch-icon" href="/images/pure-health-logo.png" />
      </head>
      <body className={`${montserrat.className} bg-gray-100`}>{children}</body>
    </html>
  )
}
