/**
 * app/(root)/layout.tsx — ROOT GROUP LAYOUT
 *
 * ROUTE GROUPS IN NEXT.JS:
 * The folder `(root)` is a "Route Group" — the parentheses tell Next.js
 * NOT to include this folder name in the URL.
 *
 * Example:
 *   app/(root)/(home)/page.tsx  → URL is "/"    (not "/root/home")
 *   app/(root)/meeting/[id]/page.tsx → URL is "/meeting/abc" (not "/root/meeting/abc")
 *
 * WHY USE ROUTE GROUPS?
 * They let you share a layout across multiple routes WITHOUT affecting the URL.
 * Here, all routes inside (root)/ share this layout wrapper (the <main> tag).
 * The auth routes (sign-in, sign-up) are in a different group (auth)/ so they
 * DON'T get this layout — they get their own centered layout instead.
 *
 * CURRENT STATE:
 * This layout is minimal — just a <main> wrapper.
 * In future, the Navbar + Sidebar shell lives in (home)/layout.tsx,
 * not here, because not ALL (root) routes need the sidebar (e.g. meeting rooms).
 */

import React, { ReactNode } from "react";

/**
 * RootLayout — Wraps all routes inside app/(root)/
 *
 * @param children - The page content from the matched route's page.tsx
 */
const RootLayout = ({ children }: { children: ReactNode }) => {
  // <main> is a semantic HTML5 element — tells browsers/screen readers
  // "this is the main content area of the page"
  return <main>{children}</main>;
};

export default RootLayout;
