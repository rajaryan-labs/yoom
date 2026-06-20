# 📦 Push Log — Yoom

> This file is **committed to the repository** and updated on every push.
> Its purpose is to give any developer or AI model instant project context
> without needing to dig through raw git history.

---

## 📌 Quick Project State (Always Up-to-Date)

| Key | Value |
|---|---|
| **Project** | Yoom (Zoom Clone) |
| **Framework** | Next.js 16.2.7 (App Router) |
| **React** | 19.2.4 |
| **Styling** | Tailwind CSS v4 (`@theme` in `globals.css`) |
| **UI Library** | Shadcn UI (`base-nova` style, Lucide icons) |
| **Language** | TypeScript ^5 |
| **OS / Shell** | Windows / PowerShell (use `;` not `&&`) |
| **Repo** | https://github.com/rajaryan-labs/yoom |
| **Branch** | `main` |

---

## 🗂️ Current File Structure Snapshot

```
zoom-clone/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/[[...sign-in]]/ ← ✅ Clerk SignIn page
│   │   └── sign-up/[[...sign-up]]/ ← ✅ Clerk SignUp page
│   ├── (root)/
│   │   ├── layout.tsx            ← ✅ Minimal root group layout
│   │   ├── (home)/
│   │   │   ├── layout.tsx        ← ✅ Navbar + Sidebar shell
│   │   │   ├── page.tsx          ← ✅ Dashboard (clock, hero bg, action cards)
│   │   │   ├── upcoming/page.tsx ← ✅ Styled stub page
│   │   │   ├── previous/page.tsx ← ✅ Styled stub page
│   │   │   ├── recordings/page.tsx ← ✅ Styled stub page
│   │   │   └── personal-room/page.tsx ← ✅ Styled stub page
│   │   └── meeting/[id]/
│   │       └── page.tsx          ← ✅ Async params correctly awaited
│   ├── globals.css               ← ✅ Tailwind v4 @theme tokens defined
│   └── layout.tsx                ← ✅ Root layout, ClerkProvider wrapping
├── components/
│   ├── Navbar.tsx                ← ✅ Full build (logo, avatar, mobile toggle)
│   ├── MobileNav.tsx             ← ✅ Sheet-based mobile nav drawer
│   ├── Sidebar.tsx               ← ✅ Fully functional with active route
│   └── ui/
│       ├── button.tsx            ← ✅ Shadcn-style Button with CVA
│       └── sheet.tsx             ← ✅ Shadcn Sheet component
├── constants/
│   └── index.ts                  ← ✅ sidebarLinks defined
├── lib/
│   └── utils.ts                  ← ✅ cn() helper (clsx + tailwind-merge)
├── public/
│   ├── icons/                    ← ✅ 19 SVG icons
│   └── images/                   ← ✅ 5 avatars + hero-background.png
├── proxy.ts                      ← ✅ Clerk auth proxy (Next.js 16 convention)
├── AGENTS.md                     ← ✅ AI agent rules & conventions
├── CLAUDE.md                     ← ✅ Full project context for LLMs
├── PUSHLOG.md                    ← ✅ This file — push history & state
└── LEARNING_LOG.md               ← 🔒 Gitignored (personal notes)
```

---

## 🎨 Design Tokens

| Token | Hex | Tailwind Class |
|---|---|---|
| `dark-1` | `#1c1f2e` | `bg-dark-1` — Sidebar/card backgrounds |
| `dark-2` | `#161925` | `bg-dark-2` — App body background |
| `blue-1` | `#0e78f9` | `bg-blue-1` — Active states / CTA buttons |

---

## 🚧 What's Built vs What's Pending

### ✅ Done
- [x] Project scaffolded with Next.js 16.2.7, React 19, Tailwind v4, TypeScript
- [x] Shadcn UI configured (`base-nova` style, Lucide icons, `components.json`)
- [x] Root layout with `"Yoom"` metadata title
- [x] Home layout shell: `<Navbar />` + `<Sidebar />` + content area
- [x] `Sidebar.tsx` — dynamic, client-side, active route highlighting
- [x] `constants/index.ts` — sidebar link definitions (5 routes)
- [x] `globals.css` — custom `@theme` color tokens (`dark-1`, `dark-2`, `blue-1`)
- [x] `meeting/[id]/page.tsx` — async params correctly awaited
- [x] Public assets: 19 icons + 6 images committed
- [x] `components/ui/button.tsx` — CVA-based Shadcn button
- [x] `AGENTS.md`, `CLAUDE.md`, `PUSHLOG.md` — context docs
- [x] `Navbar.tsx` — full implementation (logo, user profile, mobile hamburger toggle)
- [x] `MobileNav.tsx` — Sheet-based mobile navigation drawer
- [x] `components/ui/sheet.tsx` — Shadcn Sheet component
- [x] Home dashboard page — live clock, hero background, 4 quick action cards
- [x] `/upcoming`, `/previous`, `/recordings`, `/personal-room` pages — styled stubs
- [x] `README.md` — updated with full project overview

- [x] Clerk authentication installed and configured
- [x] `ClerkProvider` wrapping app in `app/layout.tsx`
- [x] `proxy.ts` — Clerk auth proxy (Next.js 16 `proxy` file convention)
- [x] `.env` — Clerk publishable key, secret key, and redirect URLs set
- [x] `app/(auth)/sign-in/[[...sign-in]]/page.tsx` — Clerk `<SignIn />` page
- [x] `app/(auth)/sign-up/[[...sign-up]]/page.tsx` — Clerk `<SignUp />` page
- [x] `globals.css` — `.flex-center` converted from `@apply` to raw CSS

### 🔴 Pending
- [ ] Meeting room functionality
- [ ] Real-time video/audio (Stream SDK integration)

---

## 📋 Push History

---

### Push #6 — 2026-06-09
**Commit**: `feat: improve MobileNav with hamburger trigger, logo link, and sheet content`
**Hash**: `12126e7`

**What Changed**:
- `MobileNav.tsx` — replaced placeholder `SheetTrigger` with hamburger SVG image trigger; added logo + brand link inside sheet; structured scrollable nav content area

**Files Changed**:
- `components/MobileNav.tsx` ← modified (hamburger trigger, logo, sheet content layout)
- `PUSHLOG.md` ← modified

**Status After Push**: MobileNav sheet now opens with hamburger icon and shows proper logo/brand inside. Nav links wiring is next.

---

### Push #5 — 2026-06-07
**Commit**: `feat: build Navbar, MobileNav, home dashboard, and styled route pages`
**Hash**: `290832c`

**What Changed**:
- `Navbar.tsx` — full implementation with logo, user profile avatar, and mobile hamburger toggle
- `MobileNav.tsx` — new Sheet-based mobile navigation drawer with sidebar links
- `components/ui/sheet.tsx` — new Shadcn Sheet component added
- `app/(root)/(home)/page.tsx` — home dashboard with live clock, hero background, 4 quick action cards
- `/upcoming`, `/previous`, `/recordings`, `/personal-room` — styled stub pages
- `README.md` — updated with full project overview and setup instructions
- `AGENTS.md`, `CLAUDE.md`, `PUSHLOG.md` — updated context docs

**Files Changed**:
- `components/Navbar.tsx` ← modified (full build)
- `components/MobileNav.tsx` ← new
- `components/ui/sheet.tsx` ← new
- `app/(root)/(home)/page.tsx` ← modified (dashboard UI)
- `app/(root)/(home)/upcoming/page.tsx` ← modified (styled)
- `app/(root)/(home)/previous/page.tsx` ← modified (styled)
- `app/(root)/(home)/recordings/page.tsx` ← modified (styled)
- `app/(root)/(home)/personal-room/page.tsx` ← modified (styled)
- `README.md` ← modified
- `AGENTS.md` ← modified
- `CLAUDE.md` ← modified
- `PUSHLOG.md` ← modified

**Status After Push**: Navbar + Mobile Nav fully built. Home dashboard live. All 4 route pages styled. Auth is the next milestone.

---

### Push #4 — 2026-06-07
**Commit**: `docs(context): restructure AGENTS.md, CLAUDE.md and add PUSHLOG.md for LLM continuity`
**Hash**: `de94636`

**What Changed**:
- Fully restructured `AGENTS.md` — stack table, 8 critical rules, structure map, design tokens, conventions
- Fully restructured `CLAUDE.md` — tech stack, breaking changes, file status, code snippets, built vs pending
- Created `PUSHLOG.md` — committed push log for LLM/dev context continuity
- Updated `.gitignore` — added `LEARNING_LOG.md` (personal notes, local only)
- Added `--color-blue-1: #0e78f9` to `globals.css` `@theme` (active sidebar highlight)
- Fixed active route detection and label spacing in `Sidebar.tsx`
- Scaffolded 4 stub route pages: `/upcoming`, `/previous`, `/recordings`, `/personal-room`

**Files Changed**:
- `AGENTS.md` — restructured ← modified
- `CLAUDE.md` — restructured ← modified
- `PUSHLOG.md` ← new
- `.gitignore` ← modified
- `app/globals.css` ← modified (blue-1 token added)
- `components/Sidebar.tsx` ← modified
- `app/(root)/(home)/upcoming/page.tsx` ← new
- `app/(root)/(home)/previous/page.tsx` ← new
- `app/(root)/(home)/recordings/page.tsx` ← new
- `app/(root)/(home)/personal-room/page.tsx` ← new

**Status After Push**: All context docs live on GitHub. 4 dashboard routes scaffolded. `bg-blue-1` active token fixed.

---

### Push #3 — 2026-06-07
**Commit**: `fix: add missing Image import and clean up Sidebar component`
**Hash**: `4e88a30`

**What Changed**:
- Added `import Image from "next/image"` to `Sidebar.tsx` (was missing, causing red lines)
- Cleaned up `<Image />` prop formatting (proper indentation and alignment)
- Committed all public assets (19 SVG icons, 5 avatars, hero background image)

**Files Changed**:
- `components/Sidebar.tsx` — Image import added, props cleaned up
- `public/icons/*` — 19 SVG icons added
- `public/images/*` — 5 avatar images + hero background added

**Status After Push**: Sidebar fully functional. All icons and assets available.

---

### Push #2 — 2026-06-06
**Commit**: `feat: set up home layout skeleton with navbar, sidebar, and navigation constants`
**Hash**: `8172bac`

**What Changed**:
- Updated metadata title in `app/layout.tsx` to `"Yoom"`
- Integrated `<Navbar />` and `<Sidebar />` into the home layout
- Created `components/Navbar.tsx` (skeleton)
- Created `components/Sidebar.tsx` with dynamic active route logic
- Created `constants/index.ts` with 5 sidebar link definitions

**Files Changed**:
- `app/layout.tsx`
- `app/(root)/(home)/layout.tsx`
- `components/Navbar.tsx` ← new
- `components/Sidebar.tsx` ← new
- `constants/index.ts` ← new

**Status After Push**: Basic layout shell in place. Navbar is a stub.

---

### Push #1 — 2026-06-05 (Initial)
**Commit**: Initial project commit
**Hash**: `72538bc`

**What Changed**:
- Project bootstrapped with Next.js 16.2.7 + React 19 + Tailwind v4 + TypeScript
- Base app structure created: `app/layout.tsx`, `app/globals.css`
- `meeting/[id]/page.tsx` created with async params pattern
- `lib/utils.ts` — `cn()` utility
- `components/ui/button.tsx` — base button component

**Status After Push**: Empty shell project. Dev server runnable.

---

### Push #7 — 2026-06-09
**Commit**: `feat: wire MobileNav sidebar links and fix Navbar positioning`
**Hash**: `9c14ec3`

**What Changed**:
- `MobileNav.tsx` — `SheetTrigger` now renders with a proper `<button>` wrapper around the hamburger icon; `SheetClose` on each nav link now uses `nativeButton={false}` (correct pattern for anchor elements); sidebar links are now fully wired with active route highlighting via `usePathname`
- `Navbar.tsx` — fixed positioning: `fixes` → `fixed` (navbar now correctly sticks to top of viewport on scroll)
- `globals.css` — added `.flex-between` custom utility class via `@layer utilities` (`display: flex; justify-content: space-between; align-items: center`)

**Files Changed**:
- `components/MobileNav.tsx` ← modified (SheetTrigger button wrapper, SheetClose nativeButton, nav links wired)
- `components/Navbar.tsx` ← modified (fixed positioning typo)
- `app/globals.css` ← modified (flex-between utility added)
- `PUSHLOG.md` ← modified

**Status After Push**: MobileNav is fully functional — hamburger opens sheet, all 5 nav links work with active state, sheet closes on navigation. Navbar is fixed-positioned correctly.

---

### Push #8 — 2026-06-10
**Commit**: `feat: set up Clerk authentication, auth pages, and migrate to proxy.ts`

**What Changed**:
- `proxy.ts` — created at project root (Next.js 16: `middleware` file convention is deprecated, renamed to `proxy`)
- `app/layout.tsx` — added `<ClerkProvider>` wrapping `{children}`
- `.env` — added `NEXT_PUBLIC_CLERK_SIGN_IN_URL`, `NEXT_PUBLIC_CLERK_SIGN_UP_URL`, and fallback redirect URLs
- `app/(auth)/sign-in/[[...sign-in]]/page.tsx` — new Clerk `<SignIn />` page (catch-all required by Clerk)
- `app/(auth)/sign-up/[[...sign-up]]/page.tsx` — new Clerk `<SignUp />` page
- `app/globals.css` — `.flex-center` rewritten from `@apply` to explicit CSS for consistency with `.flex-between`

**Files Changed**:
- `proxy.ts` ← new
- `app/layout.tsx` ← modified
- `.env` ← modified
- `app/(auth)/sign-in/[[...sign-in]]/page.tsx` ← new
- `app/(auth)/sign-up/[[...sign-up]]/page.tsx` ← new
- `app/globals.css` ← modified
- `PUSHLOG.md` ← modified

**Status After Push**: Clerk fully wired. Auth pages live. `proxy.ts` running with no deprecation warnings. Next: Stream SDK for real-time video/audio.

---

### Push #9 — 2026-06-11
**Commit**: `fix: await auth.protect() in clerkMiddleware for Clerk v7 async API`
**Hash**: `b4aa50b`

**What Changed**:
- `proxy.ts` — middleware callback made `async`; `auth.protect()` now correctly `await`ed
- `LEARNING_LOG.md` — new entry documenting the silent Clerk v7 async breaking change

**Root Cause**: In Clerk v7, `auth.protect()` is async. Without `await`, the returned promise was silently discarded — protected routes were accessible without login and **no error was thrown**.

**Files Changed**:
- `proxy.ts` ← modified (`async` callback + `await auth.protect()`)
- `LEARNING_LOG.md` ← modified (new entry)
- `PUSHLOG.md` ← modified

**Status After Push**: Route protection fully working. Visiting `/`, `/upcoming`, `/meeting/*` etc. without login now correctly redirects to `/sign-in`.

---

### Push #10 — 2026-06-11
**Commit**: `feat: update Navbar with Clerk Show component for conditional auth UI`

**What Changed**:
- `components/Navbar.tsx` — replaced static avatar placeholder with Clerk's `<Show>` component for conditional rendering; `<SignInButton />` and `<SignUpButton />` shown when signed out; `<UserButton />` shown when signed in

**Files Changed**:
- `components/Navbar.tsx` ← modified (Clerk Show, SignInButton, SignUpButton, UserButton)
- `PUSHLOG.md` ← modified

**Status After Push**: Navbar now dynamically shows auth controls based on Clerk session state. Signed-out users see sign-in/sign-up buttons; signed-in users see the user avatar/menu.

---

### Push #11 — 2026-06-18
**Commit**: `chore: rename project to Yoom and clean up layout/imports`

**What Changed**:
- Globally renamed project from "Streamline Conferencing" to "Yoom" across all docs and UI
- `app/layout.tsx` — removed unused Clerk imports (`Show`, `SignInButton`, `SignUpButton`, `UserButton`); updated metadata title to `"Yoom"` with a proper description; simplified `<html>` and `<body>` class attributes
- `components/Navbar.tsx` — removed stray `ClerkProvider` import; updated logo `alt` text and brand name to "Yoom"
- `app/(root)/(home)/upcoming/page.tsx` — fixed typo "Meeetings" → "Meetings"
- `app/globals.css` — updated `:root` `--background` to `#161925` (dark-2) and `--foreground` to near-white for better dark mode baseline
- `AGENTS.md`, `CLAUDE.md`, `PUSHLOG.md`, `README.md` — updated all references from old name/repo URL to "Yoom"

**Files Changed**:
- `app/layout.tsx` ← modified (clean imports, Yoom metadata)
- `components/Navbar.tsx` ← modified (removed ClerkProvider import, Yoom branding)
- `app/(root)/(home)/upcoming/page.tsx` ← modified (typo fix)
- `app/globals.css` ← modified (dark background/foreground defaults)
- `AGENTS.md` ← modified (Yoom name + timestamp)
- `CLAUDE.md` ← modified (Yoom name + repo URL)
- `PUSHLOG.md` ← modified (Yoom name + Push #11 entry)
- `README.md` ← modified (Yoom name + repo path)

**Status After Push**: Project fully rebranded to Yoom. Codebase is clean with no leftover "Streamline Conferencing" references in committed files.

---

### Push #12 — 2026-06-21
**Commit**: `feat: add live clock hero (HomeHero.tsx), sky-1 token, and glassmorphism utilities`

**What Changed**:
- `components/HomeHero.tsx` — new `"use client"` component; renders the hero banner with a live clock (ticks every second via `setInterval`) and formatted date; uses `.glassmorphism` pill for the upcoming meeting label and `text-sky-1` for the date
- `app/(root)/(home)/page.tsx` — refactored from a static stub to a clean Server Component that imports `<HomeHero />`; keeps page.tsx free of hooks
- `app/globals.css` — added `--color-sky-1: #c9ddff` design token; added `.glassmorphism` and `.glassmorphism2` utility classes to `@layer utilities`
- `AGENTS.md`, `CLAUDE.md`, `PUSHLOG.md` — fully updated: file structure, design tokens table, built/pending status, timestamps

**Files Changed**:
- `components/HomeHero.tsx` ← new
- `app/(root)/(home)/page.tsx` ← modified (now imports HomeHero)
- `app/globals.css` ← modified (sky-1 token + glassmorphism utilities)
- `AGENTS.md` ← modified (structure, tokens, timestamp)
- `CLAUDE.md` ← modified (full refresh — was stale at Push #4)
- `PUSHLOG.md` ← modified

**Status After Push**: Hero dashboard live with real-time clock. All docs synced. Next milestone: Stream SDK for real-time video/audio.

---

*Last updated: Push #12 — 2026-06-21*
*Next goal: Stream SDK integration for real-time video/audio*
