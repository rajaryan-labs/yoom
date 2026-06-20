"use client";

/**
 * components/HomeHero.tsx — Live Clock Hero Banner
 *
 * "use client" is required here because we use:
 *   - useState  → to store the current Date object
 *   - useEffect → to start a setInterval that ticks every second
 *
 * page.tsx stays a Server Component and simply renders <HomeHero />.
 */

import React, { useEffect, useState } from "react";

const HomeHero = () => {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    // Tick every second so the clock stays accurate
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    // Cleanup: clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  // ── Time formatting ──────────────────────────────────────────────
  // Example output: "11:30 AM"
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  // ── Date formatting ──────────────────────────────────────────────
  // Example output: "Saturday, June 21, 2026"
  const date = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
      {/*
        Flex column: space-between pushes the pill to the top
        and the time/date block to the bottom.
        Padding: mobile → px-5 py-8 | desktop → p-11
      */}
      <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">

        {/* Upcoming Meeting pill — glassmorphism frosted-glass */}
        <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
          Upcoming Meeting at: 12:30 PM
        </h2>

        {/* Live time + date */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-extrabold lg:text-7xl">
            {time}
          </h1>
          <p className="text-lg font-medium text-sky-1 lg:text-2xl">
            {date}
          </p>
        </div>

      </div>
    </div>
  );
};

export default HomeHero;
