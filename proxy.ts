/**
 * proxy.ts — AUTHENTICATION MIDDLEWARE (Next.js 16)
 *
 * WHAT IS MIDDLEWARE?
 * Middleware runs on every request BEFORE the page renders.
 * It sits between the browser and your pages, like a bouncer at a club.
 *
 * WHY proxy.ts AND NOT middleware.ts?
 * Next.js 16 renamed the middleware file from `middleware.ts` → `proxy.ts`.
 * If you use `middleware.ts`, it will conflict or be ignored.
 * Always use `proxy.ts` in this project.
 *
 * HOW IT WORKS:
 *   Browser → proxy.ts (checks auth) → Page renders (if allowed)
 *
 * If a user is NOT signed in and tries to visit a protected route,
 * Clerk automatically redirects them to the sign-in page.
 */

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// ─────────────────────────────────────────────────────────────────────────────
// PROTECTED ROUTES
//
// `createRouteMatcher` takes an array of route patterns and returns a
// function that checks if a given request URL matches any of them.
//
// Patterns:
//   "/"              → exact match for the home page
//   "/upcoming"      → exact match
//   "/meeting(.*)"   → wildcard: matches /meeting, /meeting/abc123, etc.
//
// Any route NOT listed here is PUBLIC (no login required).
// ─────────────────────────────────────────────────────────────────────────────
const protectedRoutes = createRouteMatcher([
  "/",              // Dashboard / home
  "/upcoming",      // Upcoming meetings
  "/previous",      // Previous meetings
  "/recordings",    // Recorded meetings
  "/personal-room", // User's personal meeting room
  "/meeting(.*)",   // Any meeting room URL (dynamic ID)
]);

// ─────────────────────────────────────────────────────────────────────────────
// CLERK MIDDLEWARE
//
// `clerkMiddleware` wraps our logic and gives us two parameters:
//   - `auth` → Clerk's auth helper (lets us check/enforce auth state)
//   - `req`  → The incoming HTTP request object
//
// `auth.protect()` → If the user is NOT signed in, redirect to /sign-in.
//                    If they ARE signed in, do nothing and let the page load.
//
// This runs on every request that matches the `config.matcher` below.
// ─────────────────────────────────────────────────────────────────────────────
export default clerkMiddleware(async (auth, req) => {
  // Only enforce authentication on routes we marked as protected above
  if (protectedRoutes(req)) await auth.protect();
});

// ─────────────────────────────────────────────────────────────────────────────
// MATCHER CONFIG
//
// This tells Next.js WHICH requests the middleware should run on.
// Without this, middleware runs on literally every file (including images!).
//
// The first pattern SKIPS:
//   - Next.js internal routes (_next/*)
//   - Static asset files (images, fonts, CSS, JS, icons, etc.)
//
// The second & third patterns ALWAYS run middleware on:
//   - API routes (/api/...)
//   - tRPC routes (/trpc/...)
//   - Clerk's own frontend API routes (/__clerk/...)
// ─────────────────────────────────────────────────────────────────────────────
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
    // Always run for Clerk-specific frontend API routes
    "/__clerk/(.*)",
  ],
};
