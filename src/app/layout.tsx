import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://toodls.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Toodls — Turn Clutter Into Cash",
    template: "%s · Toodls",
  },
  description:
    "Scan unused items, discover what they're worth, and decide whether to keep, sell, or donate. Toodls turns your clutter into cash.",
  keywords: [
    "Toodls",
    "declutter app",
    "sell used items",
    "resale value app",
    "AI item scanner",
    "garage sale app",
    "moving sale planner",
  ],
  applicationName: "Toodls",
  authors: [{ name: "Toodls" }],
  creator: "Toodls",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Toodls",
    title: "Toodls — Turn Clutter Into Cash",
    description:
      "Scan unused items, discover what they're worth, and decide whether to keep, sell, or donate.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Toodls — Turn Clutter Into Cash",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toodls — Turn Clutter Into Cash",
    description:
      "Scan unused items, discover what they're worth, and decide whether to keep, sell, or donate.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        {children}
      </body>
    </html>
  );
}
