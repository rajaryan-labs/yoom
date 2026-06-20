/**
 * app/(auth)/sign-in/[[...sign-in]]/page.tsx — SIGN IN PAGE
 *
 * URL: /sign-in  (and any sub-paths like /sign-in/factor-one, /sign-in/sso-callback)
 *
 * WHAT IS [[...sign-in]]?
 * This is an "optional catch-all" route (double square brackets + spread).
 * It matches:
 *   /sign-in              → base sign-in page
 *   /sign-in/factor-one   → multi-factor auth step (Clerk handles internally)
 *   /sign-in/sso-callback → OAuth callback after Google/GitHub redirect
 *
 * WHY DOES CLERK NEED THIS?
 * Clerk's SignIn component has multiple "steps" — each step updates the URL.
 * Without the catch-all route, navigating to /sign-in/factor-one would 404.
 * The [[...sign-in]] folder catches all those sub-paths and renders the
 * same <SignIn /> component (Clerk handles rendering the correct step internally).
 *
 * The (auth) folder is a route group — it does NOT appear in the URL.
 * It exists so auth pages can share their own layout (centered, no sidebar).
 */

import { SignIn } from "@clerk/nextjs"; // Clerk's pre-built sign-in UI component

export default function SignInPage() {
  return (
    /**
     * Center the Clerk SignIn card both horizontally and vertically.
     * `h-screen`         → Full viewport height
     * `w-full`           → Full width
     * `items-center`     → Vertical centering (flexbox cross-axis)
     * `justify-center`   → Horizontal centering (flexbox main-axis)
     * `bg-dark-2`        → App background color (#161925)
     */
    <main className="flex h-screen w-full items-center justify-center bg-dark-2">
      {/*
        <SignIn /> — Clerk's complete sign-in form component.
        It handles EVERYTHING automatically:
          ✅ Email/password form
          ✅ Social OAuth buttons (Google, GitHub, etc.)
          ✅ Multi-factor authentication
          ✅ Error messages and validation
          ✅ Redirect after successful sign-in

        Styling comes from the `appearance` prop on <ClerkProvider>
        in app/layout.tsx — no need to configure it here.
      */}
      <SignIn />
    </main>
  );
}
