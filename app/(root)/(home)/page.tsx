/**
 * app/(root)/(home)/page.tsx — HOME PAGE (Dashboard)
 *
 * URL: "/" (the root route)
 *
 * ROUTE NESTING:
 *   app/ → (root)/ → (home)/ → page.tsx  (URL is just "/")
 *
 * This is a Server Component — the live clock logic lives in
 * components/HomeHero.tsx ("use client") to keep this file lean.
 */

import React from "react";
import HomeHero from "@/components/HomeHero";
import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <HomeHero />
      <MeetingTypeList />
    </section>
  );
};

export default Home;
