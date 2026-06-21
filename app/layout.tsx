/**
 * app/layout.tsx — ROOT LAYOUT
 *
 * In Next.js App Router, every route is wrapped by the nearest `layout.tsx`.
 * This file is the TOPMOST layout — it wraps every single page in the app.
 *
 * Think of it like a picture frame:
 *   layout.tsx (this file) → sets the frame (fonts, auth, global CSS)
 *     └─ page.tsx           → the actual picture (unique content per route)
 *
 * Key responsibilities here:
 *   1. Load Google Fonts and expose them as CSS variables
 *   2. Export `metadata` for SEO (browser tab title, description)
 *   3. Wrap the entire app in <ClerkProvider> for authentication
 *   4. Apply global styles (bg-dark-2 = #161925 from globals.css)
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Tailwind v4 styles + our custom CSS tokens
import { ClerkProvider } from "@clerk/nextjs"; // Authentication provider

// ─────────────────────────────────────────────────────────────────────────────
// FONTS
// next/font/google downloads fonts at BUILD TIME (no runtime network request).
// The `variable` option creates a CSS custom property so we can use it in CSS.
// e.g. --font-geist-sans → referenced in globals.css as var(--font-geist-sans)
// ─────────────────────────────────────────────────────────────────────────────
const geistSans = Geist({
  variable: "--font-geist-sans", // CSS variable name we can use in stylesheets
  subsets: ["latin"], // Only download the Latin character set (smaller bundle)
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", // Used for code blocks / monospace text
  subsets: ["latin"],
});

// ─────────────────────────────────────────────────────────────────────────────
// SEO METADATA
// Next.js reads this `metadata` export and injects the values into <head>.
// `title` → browser tab title
// `description` → shown by Google in search results
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Yoom",
  description:
    "Yoom is a modern, real-time video conferencing application designed to replicate the core experience of Zoom. Built on a cutting-edge frontend stack, it features seamless route dynamics, custom theme integration, and high-performance layouts.",
};

// ─────────────────────────────────────────────────────────────────────────────
// ROOT LAYOUT COMPONENT
//
// `children` is whatever page or nested layout is being rendered for the
// current URL. Next.js passes it automatically — we just need to render it.
//
// `Readonly<{...}>` is a TypeScript utility that makes all properties
// read-only so we can't accidentally mutate them.
// ─────────────────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // `lang="en"` helps screen readers and search engines understand the language.
    // The two className variables inject CSS custom properties for our fonts
    // into the <html> element so they're available everywhere in the app.
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      {/*
        bg-dark-2   → background color #161925 (defined in globals.css @theme)
        antialiased → smoother font rendering on macOS / high-DPI screens
      */}
      <body className="bg-dark-2 antialiased">
        {/*
          ClerkProvider must wrap the ENTIRE app so that any component can
          access the currently signed-in user. Placing it here (root layout)
          guarantees that — no matter which page you're on, auth state is available.

          `appearance` passes our custom styles defined above.
        */}
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
