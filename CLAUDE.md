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
