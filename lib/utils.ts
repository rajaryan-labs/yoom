/**
 * lib/utils.ts — SHARED UTILITY FUNCTIONS
 *
 * This file contains helper functions used across the entire project.
 * Anything reusable and not specific to one component belongs here.
 *
 * Currently exports:
 *   - `cn()`  → Smart Tailwind class merger (the most commonly used helper)
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn() — Class Names helper (short for "class names")
 *
 * PROBLEM it solves:
 * When you write Tailwind classes conditionally, you can run into conflicts.
 * Example: `"bg-blue-500 bg-red-500"` — which wins? Unpredictable!
 *
 * HOW IT WORKS:
 *   1. `clsx(inputs)` — Takes any mix of strings, arrays, and objects and
 *      flattens them into a single class string. It handles conditionals:
 *        clsx("base", isActive && "active", { hidden: !show })
 *        → "base active" (if isActive=true, show=true)
 *
 *   2. `twMerge(...)` — Intelligently resolves Tailwind class conflicts by
 *      keeping the LAST defined class when there's a conflict:
 *        twMerge("bg-blue-500 bg-red-500") → "bg-red-500" (last wins)
 *
 * USAGE EXAMPLE (from Sidebar.tsx):
 *   cn(
 *     "flex gap-4 items-center p-4 rounded-lg",  // always applied
 *     { "bg-blue-1": isActive }                   // only when isActive is true
 *   )
 *
 * @param inputs - Any number of class values (strings, objects, arrays, falsy values)
 * @returns A merged, conflict-free Tailwind class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
