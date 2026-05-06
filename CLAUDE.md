# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Build for SSR deployment
npm run generate   # Static site generation (SSG)
npm run preview    # Preview production build locally
```

No linter or test suite is configured.

## Stack

- **Nuxt 4** + **Vue 3** (`<script setup>` throughout)
- **SCSS** for component styles, **CSS custom properties** for the design token/theming system
- Nuxt's built-in `useState` for SSR-safe global state

## Architecture

This is a single-page marketing/landing site. The only route is `pages/index.vue`, which composes a set of section components.

### Content

All copy lives in [app/assets/js/content.js](app/assets/js/content.js) as a plain JS object. Components import it directly — there is no CMS or API. To add or change any text, edit that file.

### Theming

The global design token system is in [assets/css/styles.css](assets/css/styles.css). It defines:

- **Semantic color tokens**: `--bg`, `--fg`, `--fg-muted`, `--rule`, `--accent` — use these in components, never hard-code colors.
- **Dark theme**: overridden via `[data-theme="dark"]` on the root element.
- **Accent presets**: 5 color schemes (teal, electric, cobalt, tomato, mono) selected by a `[data-accent="…"]` attribute.

Global theme state (theme, accent, cursor toggle) is managed by the [app/composables/useTweaks.js](app/composables/useTweaks.js) composable via `useState('tweaks', …)`.

### Animations & Interactions

- **Scroll reveal**: Add the class `reveal` to any element. The [app/composables/useReveal.js](app/composables/useReveal.js) composable uses IntersectionObserver to add the class `in` when the element enters the viewport. Call `useReveal()` in the component's `<script setup>`.
- **Text scramble**: [app/composables/useScramble.js](app/composables/useScramble.js) provides a hover-triggered character scramble effect.
- **Gradient cursor**: [app/components/GradientCursor.vue](app/components/GradientCursor.vue) is a mouse-tracking visual effect, toggled by the `cursor` flag in tweaks state.
- **Marquee**: [app/components/Marquee.vue](app/components/Marquee.vue) uses a CSS `@keyframes marquee` infinite scroll animation.

### Fonts

Custom fonts (ABC Diatype, ITC Garamond) are loaded via `@font-face` in `styles.css` from the [assets/fonts/](assets/fonts/) directory. They are not served from a CDN.

### HeroPaint canvas blob presets

[app/components/HeroPaint.vue](app/components/HeroPaint.vue) renders an animated paint blob on a `<canvas>`. Clicking the hero cycles through the `presets` array. Each preset is a plain object with these parameters:

**Blob movement**

- `lerp` — how quickly the blob follows the cursor (0–1; higher = snappier)
- `bounceLerp` — same, but used during autonomous bounce mode (lower = floatier)
- `bounceSpeed` — pixels-per-frame velocity of the autonomous bounce

**Blob shape**

- `baseRadius` — base radius in pixels before warping or pulsing
- `radiusPulse` — amplitude of the sine-wave size pulse
- `pulseSpeed` — period of the size pulse in milliseconds (higher = slower breath)
- `blobPoints` — number of control points on the blob outline (more = more complex silhouette)
- `warp1`, `warp2`, `warp3` — amplitude of three independent warp oscillators (fraction of radius; higher = more distorted)
- `warpSpeed1`, `warpSpeed2`, `warpSpeed3` — period of each warp oscillator in milliseconds (higher = slower)

**Color**

- `hueSpeed` — degrees of hue shift per frame
- `hueSpread` — hue difference between the inner and mid gradient stops

**Gradient & opacity**

- `opacity` — alpha of the inner gradient stop
- `opacityMid` — alpha of the mid gradient stop (can exceed 1 with `multiply`/`screen` blend modes)
- `gradientSpread` — radius of the radial gradient as a multiple of `baseRadius` (higher = softer, larger glow)

**Trail**

- `fadeAlpha` — alpha used to fill the canvas with `--bg` each frame; controls how quickly old paint fades (lower = longer trails)
