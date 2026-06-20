/**
 * components/Sidebar.tsx — LEFT NAVIGATION SIDEBAR
 *
 * ⚠️  "use client" is required here because we use `usePathname()`.
 *     `usePathname` is a React hook → hooks only work in Client Components.
 *     Without "use client", Next.js treats this as a Server Component and
 *     throws an error when it encounters the hook.
 *
 * WHAT IT DOES:
 *   - Renders a vertical list of navigation links from `sidebarLinks` (constants/index.ts)
 *   - Highlights the ACTIVE link (the one matching the current URL) in blue
 *   - Hidden on mobile screens (max-sm:hidden) — MobileNav handles small screens
 *
 * LAYOUT NOTES:
 *   `sticky top-0`       → Sidebar stays in view as the main content scrolls
 *   `h-screen`           → Takes up the full viewport height
 *   `lg:w-[264px]`       → Wide sidebar on large screens, icon-only on medium
 *   `pt-28`              → Padding pushes links below the fixed Navbar (height ≈ 72px)
 */

"use client"; // Required: this component uses usePathname() hook

import { sidebarLinks } from "@/constants"; // Navigation link data
import { cn } from "@/lib/utils";           // Smart class merger utility
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Returns the current URL path
import React from "react";

const Sidebar = () => {
  /**
   * usePathname() — React hook from Next.js
   * Returns the current URL path as a string.
   * Example: if you're on /upcoming, pathname = "/upcoming"
   * We use this to compare each link's route and highlight the active one.
   */
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">

        {/*
          .map() — Iterates over every item in sidebarLinks array and
          returns JSX for each one. Think of it as a for-loop that builds UI.

          Each `link` object has: { label, route, imgUrl }
        */}
        {sidebarLinks.map((link) => {
          /**
           * ACTIVE STATE DETECTION
           *
           * A link is "active" if the current URL matches its route.
           * We check two conditions (either one means it's active):
           *
           * 1. `pathname === link.route`
           *    Exact match. E.g. pathname="/upcoming" and route="/upcoming" ✅
           *
           * 2. `pathname.startsWith(link.route + "/")`
           *    Handles nested routes. E.g. if route="/meeting" and
           *    pathname="/meeting/abc123", the meeting link should still be active.
           *    Note: we add "/" to avoid "/" matching everything (home route is "/").
           */
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);

          return (
            <Link
              href={link.route}
              key={link.label} // React needs a unique `key` when rendering lists
              className={cn(
                // Base classes — always applied to every link
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                {
                  /**
                   * Conditional class using cn():
                   * "bg-blue-1" is only added when isActive === true.
                   * The object syntax `{ "className": condition }` is how
                   * clsx handles conditional classes.
                   */
                  "bg-blue-1": isActive,
                },
              )}
            >
              {/* SVG icon from /public/icons/ folder */}
              <Image
                src={link.imgUrl}
                alt={link.label}
                width={24}
                height={24}
              />

              {/*
                `max-lg:hidden` → Text label is hidden on medium screens (icon only).
                On large screens (lg: breakpoint and above) it becomes visible.
                This creates the "icon-only" collapsed sidebar on smaller viewports.
              */}
              <p className="text-lg font-semibold max-lg:hidden ">
                {" "}
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
