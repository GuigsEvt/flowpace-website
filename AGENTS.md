# AGENTS.md -- Flowpace.ai Website

> Comprehensive guide for AI agents working on this codebase. Read this before making any changes.

---

## Critical Warning

This project uses **Next.js 16.2.3** which has breaking changes from earlier versions. APIs, conventions, and file structure may differ from training data. Always check `node_modules/next/dist/docs/` before assuming how something works. Heed deprecation notices.

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 16.2.3 | App router framework |
| React | 19.2.4 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4 | Utility-first styling (via `@tailwindcss/postcss`) |
| Framer Motion | 12.38.0 | Animations |
| @base-ui/react | 1.3.0 | Headless UI primitives |
| @xyflow/react | 12.10.2 | Interactive node diagrams |
| lucide-react | 1.8.0 | Icons |
| CVA | 0.7.1 | Component variant styling |
| clsx + tailwind-merge | latest | Class name composition via `cn()` |

---

## Project Structure

```
src/
├── app/                              # Next.js app router (all routes)
│   ├── layout.tsx                   # Root layout: Navigation + main + Footer
│   ├── page.tsx                     # Homepage (composes home/* sections)
│   ├── globals.css                  # Design tokens, component classes, animations
│   ├── favicon.ico                  # Site favicon (Flowpace F logo)
│   ├── blog/
│   │   ├── page.tsx                 # Blog listing
│   │   └── [slug]/page.tsx          # Blog post (dynamic route)
│   ├── contact/page.tsx             # Contact page with Calendly placeholder
│   ├── industries/
│   │   ├── page.tsx                 # Industries listing (images + cards)
│   │   └── [slug]/page.tsx          # Industry detail (dynamic, SSG)
│   ├── managed-aiops/page.tsx       # Managed AIOps service page
│   └── open-source/
│       ├── page.tsx                 # Open source projects listing
│       ├── whisper-dictate/page.tsx  # Whisper Dictate project page
│       └── sims-workspace/page.tsx   # SimsWorkspace (Coming Soon)
│
├── components/
│   ├── navigation.tsx               # Sticky header, dropdowns, mobile sheet
│   ├── footer.tsx                   # 4-column footer with social links
│   ├── section-container.tsx        # Reusable section wrapper (pill, animation)
│   ├── cta-button.tsx               # Animated CTA (primary/ghost, small/default/large)
│   ├── hero-network-animation.tsx   # Canvas particle network for hero bg
│   ├── animated-counter.tsx         # Spring-animated number counter
│   ├── home/                        # Homepage section components
│   │   ├── hero.tsx                 # Hero: badge, headline, CTAs, scroll arrow
│   │   ├── workflow-section.tsx     # React Flow diagram + steps + comparison
│   │   ├── integrations-marquee.tsx # 2-row scrolling brand logos
│   │   ├── industries-section.tsx   # 2x2 industry cards with images
│   │   ├── aiops-section.tsx        # 4 pillar cards
│   │   ├── metrics-section.tsx      # 3 animated counters
│   │   ├── opensource-section.tsx   # Open source cards (NOT on homepage currently)
│   │   ├── why-section.tsx          # Standalone why section (NOT on homepage currently)
│   │   └── final-cta.tsx            # Bottom CTA banner
│   ├── flow/                        # React Flow components
│   │   ├── workflow-diagram.tsx     # ReactFlowProvider + interactive canvas
│   │   ├── custom-nodes.tsx         # 4 node types: Tools, Engine, Agents, Results
│   │   └── animated-edge.tsx        # Dashed animated edges with traveling dot
│   └── ui/                          # Base UI library (shadcn/base-nova style)
│       ├── button.tsx, card.tsx, badge.tsx, dialog.tsx, sheet.tsx,
│       │   accordion.tsx, tabs.tsx, dropdown-menu.tsx,
│       │   navigation-menu.tsx, tooltip.tsx, separator.tsx
│
└── lib/
    ├── utils.ts                     # cn() = clsx + tailwind-merge
    └── data/
        ├── industries.ts            # Industry[] with slugs, images, pain points, metrics
        └── products.ts              # Product[] with slugs, badges, features
```

---

## Homepage Section Order

The homepage (`src/app/page.tsx`) composes these sections in order:

1. `Hero` -- Badge, gradient headline, CTAs, "Your Business Is Unique" hook, scroll arrow
2. `WorkflowSection` -- Interactive React Flow + 4-step cards + "What You Get" comparison
3. `IntegrationsMarquee` -- 24 brand logos in 2 scrolling rows
4. `IndustriesSection` -- 4 industry cards with Unsplash images
5. `AIOpsSection` -- 4 pillar cards
6. `MetricsSection` -- 3 animated counters
7. `FinalCTA` -- Bottom call-to-action

---

## Design System

### Color Tokens (defined in globals.css `@theme inline`)

```
Background:   #101012          Surface:       #161618
Foreground:   #FAFAFA          Surface Hover: #1e1e21
Accent:       #1A73E8          Accent Light:  #4A9AFF
Card:         #161618          Border:        rgba(255,255,255,0.08)
Heading:      #FAFAFA          Body:          #A1A1AA
Muted:        #71717A          Success:       #10B981
```

### Glassmorphism Classes

All cards use a consistent glassmorphism pattern. **Always use these classes, never inline the styles:**

| Class | Use Case |
|-------|----------|
| `.glass` | Small badges, pills (blur-xl, bg-white/6%, border-white/8%) |
| `.glass-heavy` | Emphasized containers (blur-2xl, bg-white/10%) |
| `.glass-card` | Standard cards (blur-md, bg-white/4%, hover highlights) |
| `.section-card` | Large section containers (blur-md, bg-white/3%, padding) |

**Hover effect pattern** (applied to glass-card and section-card):
- Background brightens: `white/[0.04]` -> `white/[0.07]`
- Border brightens: `white/[0.07]` -> `white/[0.15]`
- Box shadow: outer glow + inset top highlight

### Typography

- **Headings**: `text-heading` class, Inter font, bold weight
- **Body text**: `text-body` class (#A1A1AA)
- **Muted/secondary**: `text-muted` class (#71717A)
- **Accent text**: `text-accent` class (#1A73E8)
- **Logo pattern**: "Flowpace" in white + ".ai" in `text-accent`

### Spacing

- Section padding: `py-14 md:py-20` (via SectionContainer)
- Container max-width: `max-w-7xl` (80rem)
- Grid gaps: `gap-6` standard
- Page content padding: `px-4`

### Animations

- **Framer Motion** for all UI animations (fade, slide, scale)
- **Scroll-triggered**: `whileInView` with `viewport={{ once: true }}`
- **Stagger pattern**: `containerVariants` + `cardVariants` for grids
- **CSS animations**: `animate-marquee-left/right`, `animate-glow`, `animate-shimmer`

---

## Component Patterns

### SectionContainer

Wrap all major sections with this. It provides consistent padding, max-width, optional pill badge, and scroll-in animation.

```tsx
<SectionContainer id="anchor" pill="Label">
  <h2 className="text-3xl md:text-4xl font-bold text-heading">...</h2>
  {/* content */}
</SectionContainer>
```

### CTAButton

Polymorphic button (renders `<a>` if `href` provided, `<button>` otherwise). Has motion hover/tap effects.

```tsx
<CTAButton variant="primary" size="small" href="/contact">Book a Call</CTAButton>
<CTAButton variant="ghost" size="large" href="#section">Learn More</CTAButton>
```

Sizes: `small` (nav), `default` (inline), `large` (hero)

### Card Component (ui/card.tsx)

Compound component with slots. Uses glassmorphism styling with hover effects.

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>...</CardContent>
  <CardFooter>...</CardFooter>
</Card>
```

### React Flow Diagram

Located in `components/flow/`. Interactive diagram with:
- 4 custom node types (glassmorphic cards with handles)
- Animated dashed edges with traveling dot
- Draggable nodes, pannable canvas, zoomable
- Background dots, Controls panel, MiniMap
- **Must be dynamically imported** with `ssr: false`:

```tsx
const WorkflowDiagram = dynamic(() => import("@/components/flow/workflow-diagram"), { ssr: false });
```

---

## Data Layer

### Industries (`src/lib/data/industries.ts`)

```typescript
interface Industry {
  slug: string;          // URL slug
  name: string;          // Display name
  tagline: string;       // Short description
  description: string;   // Long description
  gradient: string;      // Tailwind gradient classes (for overlays)
  image: string;         // Unsplash URL (800x500, fit=crop)
  painPoints: { title: string; description: string }[];  // 4 items
  agentSteps: { id: string; label: string; description: string }[];  // 5 items
  metrics: { value: string; label: string }[];  // 3 items
  integrations: string[];  // Tool names
}
```

Current industries: `freight-logistics`, `hospitality`, `venture-capital`, `insurance`

### Products (`src/lib/data/products.ts`)

```typescript
interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;           // Lucide icon name
  badge: "Live" | "Coming Soon";
  features: string[];     // Checklist items
}
```

Current products: `sims-workspace` (Coming Soon), `whisper-dictate` (Live)

---

## Navigation Structure

**Header nav links** (defined in `navigation.tsx`):
- Industries (dropdown: 4 industry links)
- Open Source (dropdown: Whisper Dictate)
- Resources (dropdown: Blog, Managed AIOps)
- Contact

**Footer columns**: Company, Industries, Open Source, Resources

---

## Image Handling

- **Unsplash images**: Used for industry thumbnails. Configured in `next.config.ts` remotePatterns.
- **GitHub raw images**: Used for Whisper Dictate demo gif. Also in remotePatterns.
- **Local images**: Logo at `/public/logo.png`, favicon at `src/app/favicon.ico`
- **Brand logos**: Loaded from `cdn.simpleicons.org/{slug}/a1a1aa` (gray color). Not all brands available -- verify with HTTP request before adding.
- **Next/Image**: Use for optimized images. Use `<img>` tag for external SVGs and gifs.

---

## Route Map

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Homepage |
| `/industries` | Static | Industries listing |
| `/industries/[slug]` | SSG | Industry detail (4 slugs) |
| `/open-source` | Static | Open source projects |
| `/open-source/whisper-dictate` | Static | Whisper Dictate page |
| `/open-source/sims-workspace` | Static | SimsWorkspace (Coming Soon) |
| `/blog` | Static | Blog listing |
| `/blog/[slug]` | Dynamic | Blog post |
| `/contact` | Static | Contact page |
| `/managed-aiops` | Static | Managed AIOps service |

---

## Do's and Don'ts

### Do
- Use `cn()` from `@/lib/utils` for conditional class names
- Use existing glass classes (`.glass-card`, `.section-card`) for cards
- Wrap sections in `SectionContainer` for consistent spacing/animation
- Use `text-heading`, `text-body`, `text-muted`, `text-accent` for typography
- Import icons from `lucide-react` (check they exist first -- not all names work)
- Use Framer Motion `whileInView` for scroll animations
- Keep data in `src/lib/data/` separate from components
- Dynamic import React Flow components with `ssr: false`
- Use `border-white/[0.07]` pattern for borders (not `border-white/5`)
- Test image URLs (especially simpleicons.org) before adding -- many return 404

### Don't
- Don't use `bg-zinc-900` or `bg-surface` directly on cards -- use glass classes
- Don't hard-code colors -- use CSS custom properties via Tailwind tokens
- Don't add `min-h-screen` to sections (hero is `min-h-[75vh]`)
- Don't use `position: fixed` for the header -- it's `sticky`
- Don't forget `"use client"` directive on components using hooks, motion, or browser APIs
- Don't import `Github` from lucide-react (it doesn't exist) -- use inline SVG
- Don't use `localhost` in configs -- use `127.0.0.1`
- Don't skip the `remotePatterns` config when adding external image domains

---

## Adding New Content

### New Industry
1. Add entry to `src/lib/data/industries.ts` following the `Industry` interface
2. Include an Unsplash image URL (800x500, fit=crop)
3. The `/industries/[slug]` page auto-generates via `generateStaticParams()`

### New Open Source Project
1. Create page at `src/app/open-source/{slug}/page.tsx`
2. Add card to `src/app/open-source/page.tsx` projects array
3. Optionally add to nav dropdown in `navigation.tsx`
4. Update footer links in `footer.tsx`

### New Homepage Section
1. Create component in `src/components/home/`
2. Use `SectionContainer` wrapper with optional `id` and `pill` props
3. Import and add to `src/app/page.tsx` in desired position
4. Use `motion` variants for scroll-triggered animations

### New Blog Post
1. Add to the posts array in `src/app/blog/page.tsx`
2. The `[slug]` page handles dynamic rendering

---

## Build & Dev

```bash
npm install          # Install dependencies
npm run dev          # Dev server on localhost:3000
npm run build        # Production build (must pass TypeScript + lint)
npm run start        # Serve production build
npm run lint         # ESLint check
```

**Important**: Run `npm run build` before committing to catch TypeScript errors. The build uses Turbopack.
