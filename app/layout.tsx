import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Providers from "@/components/common/Providers";
import ThemeToggle from "@/components/common/ThemeToggle";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Base URL for absolute metadata links (set NEXT_PUBLIC_SITE_URL in .env for prod)
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),

  // Title strategy
  title: {
    default: "Israel Olaleye — Frontend Developer",
    template: "%s | Israel Olaleye",
  },

  description:
    "Portfolio website of Israel Olaleye, a creative frontend developer based in Lagos, Nigeria. I build fast, accessible, and delightful web experiences with React, Next.js, and TypeScript.",

  keywords: [
    "Israel Olaleye",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Lagos",
    "Web Developer",
    "Portfolio",
  ],

  authors: [{ name: "Israel Olaleye", url: "https://theisraelolaleye.com" }],
  creator: "Israel Olaleye",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Israel Olaleye — Frontend Developer",
    description:
      "Portfolio website of Israel Olaleye, a creative frontend developer based in Lagos, Nigeria.",
    url: "/",
    siteName: "Israel Olaleye",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Israel Olaleye — Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Israel Olaleye — Frontend Developer",
    description:
      "Portfolio website of Israel Olaleye, a creative frontend developer based in Lagos, Nigeria.",
    site: "@theisraelolaleye",
    creator: "@theisraelolaleye",
    images: ["/og.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative max-w-[1480px] mx-auto bg-white text-gray-900 dark:bg-black dark:text-gray-100`}
      >
        <Providers>
          <Header />
          <main className=" min-h-screen pt-28 pb-20 md:pb-14 flex w-full">

            {/* left - Social media icons */}
            <div className="hidden lg:flex w-[2%] flex-col h-full justify-center items-center gap-4 fixed left-0 top-1/2 -translate-y-1/2">
              <Link
                href="https://web.facebook.com/theisraelolaleye"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform cursor-pointer text-gray-300 hover:text-white"
              >
                <FaFacebookF className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/theisraelolaleye"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform cursor-pointer text-gray-300 hover:text-white"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com/_israelolaleye"
                aria-label="X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform cursor-pointer text-gray-300 hover:text-white"
              >
                <FaXTwitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/theisraelolaleye"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform cursor-pointer text-gray-300 hover:text-white"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </Link>
            </div>

            {/* Main content area */}
            <div className="flex justify-center w-full lg:w-[96%] lg:mx-auto px-4 md:px-6">
              {children}
            </div>

            {/* right - Creative Developer text */}
            <div className="hidden lg:flex w-[2%] flex-col h-full justify-center items-center fixed right-0 top-1/2 -translate-y-1/2">
              <p className="text-gray-500 rotate-90 uppercase whitespace-nowrap text-sm">Creative Developer</p>
            </div>
          </main>

          {/* Mobile social icons - bottom fixed */}
          <div className="lg:hidden fixed bottom-16 left-0 right-0 flex justify-center gap-6 pb-2 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-sm">
            <Link
              href="https://web.facebook.com/theisraelolaleye"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform cursor-pointer text-gray-300 hover:text-white"
            >
              <FaFacebookF className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/theisraelolaleye"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform cursor-pointer text-gray-300 hover:text-white"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com/_israelolaleye"
              aria-label="X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform cursor-pointer text-gray-300 hover:text-white"
            >
              <FaXTwitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/theisraelolaleye"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform cursor-pointer text-gray-300 hover:text-white"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
          </div>

          {/* Floating theme toggle - bottom corner */}
          <div className="fixed z-50 bottom-24 left-4 md:left-6 md:bottom-16">
            <ThemeToggle />
          </div>

          <footer className="fixed bottom-0 left-0 right-0 h-10 md:h-12 bg-gray-900 dark:bg-black text-white dark:text-gray-100 flex items-center justify-center text-xs md:text-sm">
            <p>© 2025 Israel Olaleye. All rights reserved.</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
