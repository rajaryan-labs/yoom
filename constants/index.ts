/**
 * constants/index.ts — APP-WIDE CONSTANTS
 *
 * WHY HAVE A CONSTANTS FILE?
 * Instead of typing the same data (labels, routes, icon paths) in multiple
 * components, we define it ONCE here and import it wherever needed.
 *
 * BENEFITS:
 *   ✅ Single source of truth — change a route in one place, updates everywhere
 *   ✅ Keeps components clean (no hardcoded strings scattered around)
 *   ✅ Easy to add new sidebar links without touching any component code
 *
 * HOW IT'S USED:
 *   Both Sidebar.tsx and MobileNav.tsx import `sidebarLinks` and `.map()` over
 *   it to render navigation items — same data, two different layouts.
 */

/**
 * sidebarLinks — Navigation items for the left sidebar and mobile menu.
 *
 * Each object has:
 *   - `label`  → Display text shown next to the icon
 *   - `route`  → The URL path this link navigates to (used in Next.js <Link href>)
 *   - `imgUrl` → Path to the SVG icon in /public/icons/
 *                (paths starting with "/" are relative to the /public folder)
 */
export const sidebarLinks = [
  {
    label: "Home",
    route: "/",
    imgUrl: "/icons/Home.svg",
  },
  {
    label: "Upcoming",
    route: "/upcoming",
    imgUrl: "/icons/upcoming.svg",
  },
  {
    label: "Previous",
    route: "/previous",
    imgUrl: "/icons/previous.svg",
  },
  {
    label: "Recordings",
    route: "/recordings",
    imgUrl: "/icons/Video.svg",
  },
  {
    label: "Personal Room",
    route: "/personal-room",
    imgUrl: "/icons/add-personal.svg",
  },
];
