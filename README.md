# Flowpace.ai Website

Marketing website for [Flowpace.ai](https://flowpace.ai) -- an AI-powered workflow automation platform.

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + TypeScript
- **Tailwind CSS 4** with glassmorphism design system
- **Framer Motion** for scroll-triggered animations
- **@xyflow/react** for interactive workflow diagrams
- **@base-ui/react** for headless UI primitives

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint check |

## Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── page.tsx            # Homepage
│   ├── blog/               # Blog listing + [slug]
│   ├── contact/            # Contact page
│   ├── industries/         # Industries listing + [slug]
│   ├── managed-aiops/      # Managed AIOps service page
│   └── open-source/        # Open source projects
├── components/
│   ├── home/               # Homepage sections
│   ├── flow/               # React Flow diagram components
│   └── ui/                 # Base UI components
└── lib/
    ├── utils.ts            # cn() utility
    └── data/               # Industries & products data
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/industries` | Industries listing |
| `/industries/[slug]` | Industry detail (freight-logistics, hospitality, venture-capital, insurance) |
| `/open-source` | Open source projects |
| `/open-source/whisper-dictate` | Whisper Dictate project |
| `/open-source/sims-workspace` | SimsWorkspace (Coming Soon) |
| `/blog` | Blog listing |
| `/blog/[slug]` | Blog post |
| `/contact` | Contact page |
| `/managed-aiops` | Managed AIOps service |
