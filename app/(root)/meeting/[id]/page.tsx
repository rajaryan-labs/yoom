/**
 * app/(root)/meeting/[id]/page.tsx — DYNAMIC MEETING ROOM PAGE
 *
 * URL pattern: /meeting/:id
 * Examples:    /meeting/abc123  |  /meeting/my-daily-standup
 *
 * WHAT IS A DYNAMIC ROUTE?
 * The folder `[id]` uses square brackets — that means "id" is a variable.
 * Whatever appears in the URL after /meeting/ gets captured as `id`.
 * This lets ONE file handle millions of unique meeting URLs.
 *
 * NEXT.JS 16 BREAKING CHANGE — ASYNC PARAMS:
 * In Next.js 16 + React 19, route params are wrapped in a Promise.
 * You MUST `await` them before accessing the values.
 *
 *   ✅ Correct (Next.js 16):
 *     const { id } = await params;
 *
 *   ❌ Wrong (old Next.js 13/14 pattern — WILL BREAK):
 *     const { id } = params;  ← TypeError at runtime
 *
 * WHY async?
 * Next.js 16 made params async to support streaming and partial rendering.
 * The page component itself must also be `async` to use `await` inside it.
 */

import React from "react";

/**
 * TypeScript interface for the page's props.
 *
 * All Next.js page components receive a `params` prop automatically.
 * In Next.js 16, params is a Promise, so we type it as Promise<{...}>.
 */
interface PageProps {
  params: Promise<{ id: string }>; // `id` matches the [id] folder name
}

/**
 * Meeting — The meeting room page component.
 *
 * `async` keyword: Makes this an async Server Component.
 * We need `async` here so we can use `await params` inside.
 *
 * @param params - Promise that resolves to { id: string }
 */
const Meeting = async ({ params }: PageProps) => {
  /**
   * Await the params Promise to get the actual { id } value.
   * Using destructuring: `const { id } = await params`
   * is shorthand for:   `const resolved = await params; const id = resolved.id`
   */
  const { id } = await params;

  // TODO: Use `id` to fetch meeting data from the backend / Stream SDK
  return <div>Meeting Room: #{id}</div>;
};

export default Meeting;
