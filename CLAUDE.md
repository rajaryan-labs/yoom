# 🎯 Project Context — Yoom (Zoom Clone)

> This file is **auto-maintained** and committed to the repo.
> It is designed for LLMs and developers to get instant full project context.
> Always read this file before starting any work on this codebase.

---

## 📦 Tech Stack

| Technology | Version | Notes |
|---|---|---|
| Next.js | **16.2.7** | App Router — NOT Next.js 13/14 |
| React | **19.2.4** | Async APIs apply |
| TypeScript | ^5 | |
| Tailwind CSS | **v4** | `@theme` in `globals.css` — no config file |
| Shadcn UI | **base-nova** | `components.json` config, Lucide icons |
| Node.js | ≥18.x | |
| OS / Shell | Windows / PowerShell | Use `;` not `&&` |
| Repo | https://github.com/rajaryan-labs/yoom | Branch: `main` |

---

## ⚠️ Critical Breaking Changes

### Async Route Params (Next.js 16 + React 19)
`params` and `searchParams` are **Promises** — must be `await`-ed:
```tsx
// ✅ Correct
const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
};
```

### Tailwind v4 Config
No `tailwind.config.js`. Custom tokens live in `globals.css`:
```css
@theme inline {
  --color-dark-1: #1c1f2e;
  --color-dark-2: #161925;
  --color-blue-1: #0e78f9;
}
```

---

## 🗂️ File Structure & Status

```
zoom-clone/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/[[...sign-in]]/ ← ✅ Clerk SignIn page
│   │   └── sign-up/[[...sign-up]]/ ← ✅ Clerk SignUp page
│   ├── (root)/
│   │   ├── layout.tsx            ← ✅ Minimal root group wrapper
│   │   ├── (home)/
│   │   │   ├── layout.tsx        ← ✅ Navbar + Sidebar + content shell
│   │   │   ├── page.tsx          ← ✅ Dashboard (imports HomeHero)
│   │   │   ├── upcoming/page.tsx ← ✅ Styled stub page
│   │   │   ├── previous/page.tsx ← ✅ Styled stub page
│   │   │   ├── recordings/page.tsx ← ✅ Styled stub page
│   │   │   └── personal-room/page.tsx ← ✅ Styled stub page
│   │   └── meeting/[id]/
│   │       └── page.tsx          ← ✅ Async params correctly awaited
│   ├── globals.css               ← ✅ @theme tokens + glassmorphism utilities
│   └── layout.tsx                ← ✅ Root HTML, fonts, ClerkProvider
├── components/
│   ├── HomeHero.tsx              ← ✅ "use client" — live clock + hero banner
│   ├── Navbar.tsx                ← ✅ Full build (logo, Clerk auth UI)
│   ├── MobileNav.tsx             ← ✅ Sheet-based mobile nav drawer
│   ├── Sidebar.tsx               ← ✅ Complete, active route, icons
│   └── ui/
│       ├── button.tsx            ← ✅ CVA-based Shadcn-style button
│       └── sheet.tsx             ← ✅ Shadcn Sheet component
├── constants/
│   └── index.ts                  ← ✅ sidebarLinks (5 nav routes)
├── lib/
│   └── utils.ts                  ← ✅ cn() (clsx + tailwind-merge)
├── public/
│   ├── icons/                    ← ✅ 19 SVG icons
│   └── images/                   ← ✅ 5 avatars + hero-background.png
├── proxy.ts                      ← ✅ Clerk auth proxy (Next.js 16 convention)
├── AGENTS.md                     ← ✅ AI coding rules
├── CLAUDE.md                     ← ✅ This file
└── PUSHLOG.md                    ← ✅ Full push history
```

---

## 🎨 Design System

### Color Tokens
| Token | Hex | Class | Usage |
|---|---|---|---|
| `dark-1` | `#1c1f2e` | `bg-dark-1` | Sidebar, cards |
| `dark-2` | `#161925` | `bg-dark-2` | Body background |
| `blue-1` | `#0e78f9` | `bg-blue-1` | Active states, CTAs |
| `sky-1`  | `#c9ddff` | `text-sky-1` | Date/time accent in hero |

### Custom Utilities (globals.css)
- `.glassmorphism`  — `rgba(255,255,255,0.25)` + `blur(4px)` — light frosted glass
- `.glassmorphism2` — `rgba(18,17,17,0.25)` + `blur(8px)` — dark frosted glass
- `.flex-between`   — `flex justify-between items-center`
- `.flex-center`    — `flex justify-center items-center`

### Theme
- Dark mode by default
- Deep space color palette
- Custom Tailwind tokens via CSS variables

---

## 🧩 Shadcn UI

- **Style**: `base-nova` (configured in `components.json`)
- **Icons**: Lucide React — `import { Video, Plus } from "lucide-react"`
- **Add components**: `npx shadcn@latest add <component>`
- **Components land in**: `components/ui/`
- **Import pattern**: `import { Button } from "@/components/ui/button"`
- **Theming**: via CSS variables in `globals.css` — custom `@theme` tokens take priority
- **Installed so far**: `button.tsx` (CVA-based)

### Alias Paths (from `components.json`)
| Alias | Resolves To |
|---|---|
| `@/components` | `components/` |
| `@/components/ui` | `components/ui/` |
| `@/lib/utils` | `lib/utils.ts` |
| `@/hooks` | `hooks/` |

---

## 📄 Key Implementations

### `constants/index.ts` — Sidebar Links
```typescript
export const sidebarLinks = [
  { label: "Home",          route: "/",             imgUrl: "/icons/Home.svg" },
  { label: "Upcoming",      route: "/upcoming",     imgUrl: "/icons/upcoming.svg" },
  { label: "Previous",      route: "/previous",     imgUrl: "/icons/previous.svg" },
  { label: "Recordings",    route: "/recordings",   imgUrl: "/icons/Video.svg" },
  { label: "Personal Room", route: "/personal-room",imgUrl: "/icons/add-personal.svg" },
];
```

### `components/Sidebar.tsx` — Dynamic Active Nav
```tsx
"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col
      justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
          return (
            <Link href={link.route} key={link.label}
              className={cn("flex gap-4 items-center p-4 rounded-lg justify-start",
                { "bg-blue-1": isActive })}>
              <Image src={link.imgUrl} alt={link.label} width={24} height={24} />
              <p className="text-lg font-semibold max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default Sidebar;
```

### `app/(root)/(home)/layout.tsx` — Home Shell
```tsx
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const HomeLayout = ({ children }: { children: ReactNode }) => (
  <main className="relative">
    <Navbar />
    <div className="flex">
      <Sidebar />
      <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
        <div className="w-full">{children}</div>
      </section>
    </div>
  </main>
);
```

### `lib/utils.ts` — Class Merging Utility
```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 🚧 Built vs Pending

### ✅ Done
- [x] Next.js 16.2.7 + React 19 + Tailwind v4 + TypeScript scaffolded
- [x] Root layout with title `"Yoom"` + ClerkProvider
- [x] Home layout shell (Navbar + Sidebar + content area)
- [x] `Sidebar.tsx` — dynamic active route highlighting with icons
- [x] `constants/index.ts` — 5 sidebar navigation links
- [x] `globals.css` — `dark-1`, `dark-2`, `blue-1`, `sky-1` color tokens
- [x] `globals.css` — `.glassmorphism`, `.glassmorphism2`, `.flex-between`, `.flex-center` utilities
- [x] `meeting/[id]/page.tsx` — async params correctly implemented
- [x] Public assets: 19 icons + 6 images
- [x] `lib/utils.ts` — `cn()` helper
- [x] `components/ui/button.tsx` — CVA button
- [x] `Navbar.tsx` — logo, Clerk auth UI (UserButton, SignIn/SignUp buttons)
- [x] `MobileNav.tsx` — Sheet-based mobile navigation drawer
- [x] `components/ui/sheet.tsx` — Shadcn Sheet component
- [x] `/upcoming`, `/previous`, `/recordings`, `/personal-room` — styled stub pages
- [x] Clerk auth installed: `ClerkProvider`, `proxy.ts`, sign-in/sign-up pages
- [x] `proxy.ts` — `async` clerkMiddleware with `await auth.protect()`
- [x] `HomeHero.tsx` — `"use client"` live clock component (updates every second)
- [x] `app/(root)/(home)/page.tsx` — Server Component wrapping `<HomeHero />`

### 🔴 Pending
- [ ] Meeting room functionality
- [ ] Real-time video/audio (Stream SDK integration)

---

## 🔗 Context Files

| File | Purpose |
|---|---|
| `AGENTS.md` | AI agent coding rules & conventions |
| `CLAUDE.md` | This file — full LLM project context |
| `PUSHLOG.md` | Every push: commit, files changed, project state |
| `LEARNING_LOG.md` | Personal learning journal (gitignored) |
| `components.json` | Shadcn UI component configuration |

---

*Last updated: 2026-06-21 — Push #12 | `HomeHero.tsx` live clock, `sky-1` token, glassmorphism utilities*
*Next goal: Stream SDK integration for real-time video/audio*
