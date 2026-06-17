# Yoom 🎥

**Yoom** is a modern, real-time video conferencing application designed to replicate the core experience of Zoom. Built on a cutting-edge frontend stack, it features seamless route dynamics, custom theme integration, and high-performance layouts.

---

## 🚀 Key Features
* **Asynchronous Routing**: Implements dynamic page parameter handling in Next.js, awaiting routing params on the server side to ensure stable data resolution.
* **Modern Design System**: Styled from the ground up using Tailwind CSS v4's direct CSS variables configuration (`@theme`) with a custom deep-space dark palette.
* **Shadcn UI Components**: Pre-built, accessible UI components using the `base-nova` style with Lucide React icons for a consistent, polished interface.
* **Sleek Dark Mode**: Features custom deep-space background colors (`#1c1f2e` and `#161925`) optimized for low-latency conferencing interfaces.
* **Responsive Layout**: Designed for mobile, tablet, and desktop screens with a clean flex layout.
* **Dynamic Sidebar Navigation**: Active route highlighting with icon + label navigation links.

---

## 🛠️ Tech Stack

| Technology | Version | Notes |
|---|---|---|
| [Next.js](https://nextjs.org/) | **16.2.7** | App Router |
| [React](https://react.dev/) | **19.2.4** | Async APIs |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Strict mode |
| [Tailwind CSS](https://tailwindcss.com/) | **v4** | `@theme` config in CSS |
| [Shadcn UI](https://ui.shadcn.com/) | base-nova | Lucide icons, `components/ui/` |
| [Node.js](https://nodejs.org/) | ≥18.x | Required |

---

## 📂 Project Structure
```text
yoom/
├── app/
│   ├── (auth)/                  # Authentication views (sign-in, sign-up)
│   ├── (root)/
│   │   ├── (home)/              # Dashboard routes (/, /upcoming, /previous...)
│   │   └── meeting/[id]/        # Dynamic real-time meeting rooms
│   ├── globals.css              # Tailwind v4 @theme tokens + base styles
│   └── layout.tsx               # Root layout wrapper
├── components/
│   ├── Navbar.tsx               # Top navigation bar
│   ├── Sidebar.tsx              # Dynamic sidebar with active route detection
│   └── ui/                      # Shadcn UI components (button, etc.)
├── constants/
│   └── index.ts                 # Navigation link definitions
├── lib/
│   └── utils.ts                 # cn() class merging utility
├── public/
│   ├── icons/                   # 19 SVG icons
│   └── images/                  # Avatars + hero background
├── components.json              # Shadcn UI configuration
├── AGENTS.md                    # AI agent coding rules
├── CLAUDE.md                    # LLM project context
└── PUSHLOG.md                   # Push history & project state
```

---

## 🚦 Getting Started

### 1. Prerequisites
Make sure you have Node.js (v18.x or higher) installed.

### 2. Clone and Install
Clone this repository to your local machine and install the dependencies:
```bash
git clone https://github.com/your-username/yoom.git
cd yoom
npm install
```

### 3. Run the Development Server
Start the local server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 💡 Learning Notes
This project is built using the latest modern standards:
* **Next.js 16 Dynamic APIs**: Route parameters (`params` and `searchParams`) are **Promises** — always `await` them in async server components.
* **Tailwind v4 Config**: No `tailwind.config.js`. Custom colors like `--color-dark-1: #1c1f2e` are declared in the `@theme` directive inside `globals.css`.
* **Shadcn UI**: Components are added via `npx shadcn@latest add <component>` and land in `components/ui/`. Uses the `base-nova` style with Lucide React icons and CSS variable theming.
