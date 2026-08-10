import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Self-hosted display faces for the portfolio homepage.
const ruska = localFont({
  src: "./fonts/ruska-display.woff2",
  variable: "--font-ruska",
  display: "swap",
});

const endless = localFont({
  src: "./fonts/endless.woff2",
  variable: "--font-endless",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meagan McKeever — Scientific AI & Digital R&D",
  description:
    "Food scientist, applied AI builder, and digital R&D lead building evidence-linked systems that scientists can use.",
  authors: [{ name: "Meagan McKeever" }],
  openGraph: {
    title: "Meagan McKeever — Scientific AI & Digital R&D",
    description:
      "Scientific software, evidence-linked AI systems, and digital R&D products built for real work.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#17243e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${ruska.variable} ${endless.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
