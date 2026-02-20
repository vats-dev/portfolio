# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

All commands should be run from the `portfolio/` directory.

## Architecture

Single-page Next.js 14 (App Router) portfolio. The entire site is rendered in `app/page.tsx` as a vertical sequence of full-screen sections.

### Section Flow (top to bottom)
1. **Hero** — `ScrollyVideo` (looping background video) + `HeroOverlay` (text/CTA) + `ScrollIndicator`
2. **About** — `AboutSplit`, `WaveformVisualizer`, `SkillConstellation`
3. **Beacon** — `BeaconShowcase` and sub-components (feature case study with metrics, architecture diagram, tech stack)
4. **Projects** — `ProjectsGrid`
5. **Skills** — `TechRadar`
6. **Music** — `MusicShowcase`
7. **Social/Contact** — `LinkedInBanner`, `ContactSection`
8. **Footer**

### Directory Structure
- `components/features/<section>/` — all section-specific components
- `components/ui/` — shared UI primitives (currently just `Footer`)
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `lib/useImagePreloader.ts` — hook that preloads the WebP frame sequence from `public/sequence/` for canvas-driven scroll animations
- `public/sequence/` — WebP frames (`frame_000_delay-0.05s.webp` … ) for `ScrollyCanvas`
- `public/hero-video.mp4` — background video for the hero section

### Design Tokens
All colors, fonts, and spacing are defined as CSS variables in `app/globals.css` and mapped to Tailwind utilities in `tailwind.config.ts`.

Key colors: `void` (#0A0A0F background), `surface`, `glass`, `beacon-orange` (#FF6B35 brand accent), `azure`, `emerald`
Fonts: `font-text` (Inter), `font-mono` (JetBrains Mono), `font-display` (SF Pro Display / Inter fallback)

Always use the `cn()` utility from `lib/utils.ts` for conditional class composition.

### Animation Patterns
- **Scroll-driven video**: `ScrollyVideo` uses an `IntersectionObserver` to play/pause `hero-video.mp4`
- **Frame-sequence canvas**: `ScrollyCanvas` + `useImagePreloader` sync WebP frames to scroll position
- **Framer Motion**: used throughout for entrance animations and interactive effects

### Path Alias
`@/` maps to the project root (e.g., `@/components/...`, `@/lib/...`).

### External Images
`next.config.mjs` allows images from `media.licdn.com` (LinkedIn profile photos).

## Screenshot Workflow

When asked to modify or build UI:
1. **Ask** the user to share a screenshot (reference design or current state).
2. **Implement** the changes based on the screenshot.
3. **Re-verify** — ask the user for an updated screenshot of the result and compare it against the reference. Identify any gaps.
4. **Iterate** until the implementation is ≥99% visually accurate to the reference.

Never assume a UI change is complete without at least one screenshot verification loop.
