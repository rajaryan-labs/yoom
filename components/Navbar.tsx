/**
 * components/Navbar.tsx — TOP NAVIGATION BAR
 *
 * This is a SERVER COMPONENT (no "use client" directive).
 * Server Components render on the server — faster, no JavaScript sent to browser.
 * We can use them here because we don't need any hooks or browser events.
 *
 * WHAT IT RENDERS:
 *   [Logo + "Yoom" text]     ←  left side
 *   [Auth buttons | Avatar]  ←  right side (changes based on sign-in state)
 *   [Hamburger menu]         ←  far right on mobile
 *
 * LAYOUT TRICK:
 *   `fixed z-50` → Navbar stays at top of screen even when user scrolls.
 *   `z-50`       → Ensures it renders above all other content (higher z-index).
 */

import Image from "next/image"; // Always use next/image, never <img> — it auto-optimizes
import Link from "next/link";   // Client-side navigation (no full page reload)
import React from "react";
import MobileNav from "./MobileNav"; // Hamburger menu for small screens

// Clerk UI components for showing/hiding elements based on auth state
import {
  Show,           // Conditional render: <Show when="signed-in"> / <Show when="signed-out">
  SignInButton,   // Pre-built "Sign In" button that opens Clerk's sign-in flow
  SignUpButton,   // Pre-built "Sign Up" button
  UserButton,     // Shows the user's avatar; clicking opens account management
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    // `flex-between` is our custom utility from globals.css:
    //   → display: flex; justify-content: space-between; align-items: center;
    // This pushes the logo to the left and auth buttons to the right.
    //
    // `fixed z-50 w-full` → sticky navbar that stays on top while scrolling
    // `bg-dark-1`          → #1c1f2e (our dark background token)
    // `px-6 py-4 lg:px-10` → more horizontal padding on large screens
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">

      {/* ── LOGO (left side) ───────────────────────────────────────────────── */}
      {/*
        <Link href="/"> wraps the logo so clicking it navigates to the home page.
        Using Link instead of <a> prevents a full page reload (SPA navigation).
      */}
      <Link href="/" className="flex items-center gap-1 ">
        {/*
          next/image:
            - Automatically serves WebP format for better compression
            - Prevents layout shift by requiring width/height upfront
            - Lazy loads images below the fold
          `max-sm:size-10` → On screens smaller than 'sm' breakpoint, make icon bigger
        */}
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Yoom logo"
          className="max-sm:size-10"
        />
        {/* `max-sm:hidden` → Hide the text "Yoom" on very small screens (show icon only) */}
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Yoom
        </p>
      </Link>

      {/* ── AUTH BUTTONS (right side) ──────────────────────────────────────── */}
      <div className="flex flex-between gap-5">

        {/* Clerk's <Show> component conditionally renders children based on auth state */}

        {/* Show ONLY when the user is NOT signed in */}
        <Show when="signed-out">
          <SignInButton /> {/* Default Clerk "Sign In" button */}
          <SignUpButton>
            {/* We wrap SignUpButton around our custom styled button */}
            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </Show>

        {/* Show ONLY when the user IS signed in */}
        <Show when="signed-in">
          {/*
            UserButton → Clerk's pre-built user avatar/menu component.
            Clicking it opens a dropdown where the user can:
              - Manage their account
              - Sign out
          */}
          <UserButton />
        </Show>

        {/* Mobile hamburger menu — only visible on small screens (hidden on desktop) */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
