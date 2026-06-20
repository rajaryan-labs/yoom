/**
 * app/(auth)/sign-up/[[...sign-up]]/page.tsx — SIGN UP PAGE
 *
 * URL: /sign-up  (and any sub-paths like /sign-up/verify-email-address)
 *
 * SAME PATTERN AS SIGN-IN — see sign-in/page.tsx for detailed explanation.
 *
 * [[...sign-up]] = optional catch-all route.
 * Clerk's SignUp flow has multiple steps (email → verify → complete),
 * each updating the URL. The catch-all ensures none of those sub-paths 404.
 *
 * Example flow:
 *   /sign-up                         → Step 1: Enter email & password
 *   /sign-up/verify-email-address    → Step 2: Enter OTP from email
 *   /sign-up/continue                → Step 3: Additional info (if configured)
 */

import { SignUp } from "@clerk/nextjs"; // Clerk's pre-built registration UI

export default function SignUpPage() {
  return (
    /**
     * Same centered layout as the sign-in page.
     * The dark background matches the rest of the app.
     */
    <main className="flex h-screen w-full items-center justify-center bg-dark-2">
      {/*
        <SignUp /> — Clerk's complete registration component.
        Handles automatically:
          ✅ Email/password registration
          ✅ Social OAuth sign-up (Google, GitHub, etc.)
          ✅ Email verification (OTP)
          ✅ Redirect to dashboard after successful registration

        Styling is inherited from <ClerkProvider appearance={...}> in app/layout.tsx.
      */}
      <SignUp />
    </main>
  );
}
