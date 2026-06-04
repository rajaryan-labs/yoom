# Streamline Conferencing 🎥

**Streamline Conferencing** is a modern, real-time video conferencing application designed to replicate the core experience of Zoom. Built on a cutting-edge frontend stack, it features seamless route dynamics, custom theme integration, and high-performance layouts.

---

## 🚀 Key Features
* **Asynchronous Routing**: Implements dynamic page parameter handling in Next.js, awaiting routing params on the server side to ensure stable data resolution.
* **Modern Design System**: Styled from the ground up using Tailwind CSS v4's direct CSS variables configuration (`@theme`).
* **Sleek Dark Mode**: Features custom deep-space background colors (`#1c1f2e` and `#161925`) optimized for low-latency conferencing interfaces.
* **Responsive Layout**: Designed for mobile, tablet, and desktop screens with a clean flex layout.

---

## 🛠️ Tech Stack
* **Framework**: [Next.js](https://nextjs.org/) (App Router)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & PostCSS
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Runtime**: [Node.js](https://nodejs.org/) & React 19

---

## 📂 Project Structure
```text
streamline-conferencing/
├── app/
│   ├── (auth)/             # Authentication views
│   ├── (root)/             # Main application views
│   │   └── meeting/[id]/   # Dynamic real-time meeting rooms
│   ├── globals.css         # Tailwind v4 theme definitions and base styles
│   └── layout.tsx          # Main root layout wrapper
├── components/             # Reusable UI components
├── postcss.config.mjs      # PostCSS configuration
├── package.json            # Node dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

---

## 🚦 Getting Started

### 1. Prerequisites
Make sure you have Node.js (v18.x or higher) installed.

### 2. Clone and Install
Clone this repository to your local machine and install the dependencies:
```bash
git clone https://github.com/your-username/streamline-conferencing.git
cd streamline-conferencing
npm install
```

### 3. Run the Development Server
Start the local server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 💡 Learning Notes (Next.js & Tailwind CSS v4)
This project is built using the latest modern standards:
* **Next.js 15+ Dynamic APIs**: Route parameters (`params` and `searchParams`) are treated as asynchronous `Promise` objects. We resolve them using `await` in server components or React's `use()` hook in client components.
* **Tailwind v4 Config**: Traditional `tailwind.config.js` is replaced by declaring custom colors (e.g. `--color-dark-1: #1c1f2e`) within the `@theme` directive in `globals.css`.
