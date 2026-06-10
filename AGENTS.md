<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agent Guidelines — Streamline Conferencing (Zoom Clone)

> This file is **auto-maintained** and committed to the repo.
> It is the single source of truth for any AI agent working on this project.
> Always read this file in full before writing any code.

---

## 📦 Stack & Versions

| Technology | Version | Notes |
|---|---|---|
| Next.js | **16.2.7** | App Router. NOT Next.js 13/14. |
| React | **19.2.4** | New async APIs apply |
| TypeScript | ^5 | Strict mode |
| Tailwind CSS | **v4** | No `tailwind.config.js` — uses `@theme` in CSS |
| Shadcn UI | **base-nova** style | Configured in `components.json`. Icons via Lucide |
| Node.js | ≥18.x | Required |
| Shell | PowerShell (Windows) | Use `;` not `&&` |

---

## ⚠️ Critical Rules (Read Before Writing Any Code)

### 1. Next.js Version Is 16.2.7 — Not 14
Consult `node_modules/next/dist/docs/` before using any Next.js API. Do not assume behavior from older versions.

### 2. Async Route Params (Breaking Change)
In Next.js 16 + React 19, `params` and `searchParams` are **Promises**. Always `await` them.
```tsx
// ✅ Correct
const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div>Meeting: {id}</div>;
};

// ❌ Wrong — will cause runtime error
const Page = ({ params }: { params: { id: string } }) => {
  return <div>Meeting: {params.id}</div>;
};
```

### 3. Tailwind CSS v4 — No Config File
There is **no `tailwind.config.js`**. All custom tokens are defined in `app/globals.css` under `@theme`:
```css
@theme inline {
  --color-dark-1: #1c1f2e;
  --color-dark-2: #161925;
  --color-blue-1: #0e78f9;
}
```
Tailwind auto-generates `bg-dark-1`, `text-blue-1`, etc. from `--color-*` variables.

### 4. Next.js Image Component
Always use `Image` from `next/image`. Never use native `<img>`.
```tsx
import Image from "next/image";
// ✅ Correct
<Image src={link.imgUrl} alt={link.label} width={24} height={24} />
```

### 5. PowerShell Command Chaining
Use `;` to sequence commands, not `&&`:
```powershell
# ✅ PowerShell
git add .; git commit -m "feat: ..."; git push

# ❌ Bash only — will fail in PowerShell
git add . && git commit -m "feat: ..." && git push
```

### 6. Client vs Server Components
- Default: all components are **Server Components** (more efficient)
- Add `"use client"` **only** when using: hooks (`useState`, `useEffect`, `usePathname`), browser APIs, or event listeners
- `Sidebar.tsx` uses `usePathname()` → must be `"use client"`

### 7. JSX Expression Syntax
```tsx
// ✅ JS expression (variable)
src={link.imgUrl}

// ✅ Inline style object (only valid use of double braces)
style={{ color: "red" }}

// ❌ Wrong — creates a JS object, not an expression
src={{link.imgUrl}}
```

### 8. No Placeholders
Do not leave stub components or empty files unless explicitly scaffolding. Every file must have working code with proper imports.

### 9. Middleware File Is `proxy.ts` — Not `middleware.ts` ⚠️
Next.js 16 **deprecated** `middleware.ts` and renamed it to `proxy.ts`. Using `middleware.ts` will cause a runtime error if `proxy.ts` also exists.
```
✅ proxy.ts       ← correct filename at project root
❌ middleware.ts   ← deprecated, do NOT create this file
```
The Clerk integration exports go in `proxy.ts` using `clerkMiddleware` from `@clerk/nextjs/server`.

---

## 🗂️ Project Structure

```
zoom-clone/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/              ← 🔴 Needs page.tsx
│   │   └── sign-up/              ← 🔴 Needs page.tsx
│   ├── (root)/
│   │   ├── layout.tsx            ← ✅ Minimal wrapper
│   │   ├── (home)/
│   │   │   ├── layout.tsx        ← ✅ Navbar + Sidebar shell
│   │   │   └── page.tsx          ← 🔴 Stub — needs dashboard UI
│   │   └── meeting/[id]/
│   │       └── page.tsx          ← ✅ Async params correctly used
│   ├── globals.css               ← ✅ Tailwind v4 @theme tokens
│   └── layout.tsx                ← ✅ Root layout + metadata
├── components/
│   ├── Navbar.tsx                ← 🔴 Stub — needs full build
│   ├── Sidebar.tsx               ← ✅ Fully functional
│   └── ui/
│       └── button.tsx            ← ✅ CVA-based button
├── constants/
│   └── index.ts                  ← ✅ sidebarLinks (5 routes)
├── lib/
│   └── utils.ts                  ← ✅ cn() helper
├── public/
│   ├── icons/                    ← ✅ 19 SVGs
│   └── images/                   ← ✅ avatars + hero-background
├── proxy.ts                      ← ✅ Next.js 16 middleware (NOT middleware.ts)
├── AGENTS.md                     ← ✅ This file
├── CLAUDE.md                     ← ✅ LLM project context
└── PUSHLOG.md                    ← ✅ Push history & state
```

---

## 🎨 Design Tokens

| CSS Variable | Hex | Tailwind Class | Usage |
|---|---|---|---|
| `--color-dark-1` | `#1c1f2e` | `bg-dark-1` | Sidebar, card backgrounds |
| `--color-dark-2` | `#161925` | `bg-dark-2` | App body background |
| `--color-blue-1` | `#0e78f9` | `bg-blue-1` | Active states, CTA buttons |

---

## 📋 Conventions

### Commit Messages (Conventional Commits)
```
feat:     New feature
fix:      Bug fix
chore:    Config / maintenance
docs:     Documentation only
style:    Formatting, no logic change
refactor: Code restructure, no behavior change
```

### Import Order (per file)
```tsx
// 1. React
import React from "react";
// 2. Next.js
import Image from "next/image";
import Link from "next/link";
// 3. Third-party
import { cn } from "@/lib/utils";
// 4. Internal / local
import { sidebarLinks } from "@/constants";
```

### Path Aliases
- `@/` maps to project root (configured in `tsconfig.json`)
- Example: `import { cn } from "@/lib/utils"`

---

## 🧩 Shadcn UI

### Configuration (`components.json`)
```json
{
  "style": "base-nova",
  "tailwind": { "css": "app/globals.css", "cssVariables": true },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "ui": "@/components/ui",
    "utils": "@/lib/utils",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### Rules
- Add new Shadcn components with: `npx shadcn@latest add <component>`
- All generated UI components land in `components/ui/`
- Import from the alias path: `import { Button } from "@/components/ui/button"`
- Icons come from **Lucide React**: `import { Video, Plus } from "lucide-react"`
- Never modify generated Shadcn files directly — extend via wrapper components instead
- Shadcn uses **CSS variables** for theming — custom tokens in `globals.css` take priority

---

## 🔄 Auto-Maintained Files

| File | Updated When |
|---|---|
| `AGENTS.md` | New rules, stack changes, new patterns established |
| `CLAUDE.md` | New features built, project state changes |
| `PUSHLOG.md` | Every `git push` |
| `LEARNING_LOG.md` | Every mistake or new concept (gitignored) |

---

*Last updated: 2026-06-11 — Push #5 | Added Rule 9: proxy.ts convention*
