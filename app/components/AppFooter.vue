<script setup>
import content from '~/assets/js/content.js'

/* Live UTC year for the copyright line */
const now = ref(new Date())
let timer = null
onMounted(() => { timer = setInterval(() => { now.value = new Date() }, 1000) })
onUnmounted(() => clearInterval(timer))
const yyyy = computed(() => now.value.getUTCFullYear())

/* Retro icons scattered behind the CTA — mirrors the hero's falling-icon field.
   Deterministic delays (no Math.random) so SSR and client markup match. */
const scatter = [
  { icon: 'computer', size: 58, top: '26%', left: '60%', rot: -14, dur: 9, delay: 0.0 },
  { icon: 'floppydisk', size: 46, top: '34%', left: '82%', rot: 12, dur: 11, delay: 1.4 },
  { icon: 'peace', size: 50, top: '32%', left: '42%', rot: -8, dur: 8, delay: 0.8 },
  { icon: 'folder', size: 54, top: '58%', left: '66%', rot: 16, dur: 10, delay: 2.1 },
  { icon: 'mailbox', size: 58, top: '30%', left: '88%', rot: -10, dur: 12, delay: 0.5 },
  { icon: 'mouse', size: 44, top: '52%', left: '48%', rot: 9, dur: 9.5, delay: 1.9 },
  { icon: 'thumbs-up', size: 40, top: '70%', left: '86%', rot: -16, dur: 10.5, delay: 3.2 },
  { icon: 'pencil', size: 48, top: '42%', left: '72%', rot: 14, dur: 8.5, delay: 2.6 },
  { icon: 'documents', size: 42, top: '38%', left: '52%', rot: -6, dur: 11.5, delay: 1.1 },
  { icon: 'bomb', size: 36, top: '72%', left: '54%', rot: -12, dur: 10, delay: 0.3 },
]

const iconStyle = (s) => ({
  width: `${s.size}px`,
  height: `${s.size}px`,
  top: s.top,
  left: s.left,
  '--src': `url(/icons/${s.icon}.svg)`,
  '--r': `${s.rot}deg`,
  '--d': `${s.dur}s`,
  animationDelay: `${s.delay}s`,
})

/* Inline marks for the social row */
const socialIcons = {
  GitHub: 'M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z',
  LinkedIn: 'M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05C20.5 8.59 21 11.1 21 14.36V21h-4v-5.86c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21H9z',
  Instagram: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.52.01-4.76.07-.92.04-1.42.2-1.75.33-.44.17-.76.38-1.09.71-.33.33-.54.65-.71 1.09-.13.33-.29.83-.33 1.75-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.04.92.2 1.42.33 1.75.17.44.38.76.71 1.09.33.33.65.54 1.09.71.33.13.83.29 1.75.33 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.92-.04 1.42-.2 1.75-.33.44-.17.76-.38 1.09-.71.33-.33.54-.65.71-1.09.13-.33.29-.83.33-1.75.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.04-.92-.2-1.42-.33-1.75a2.94 2.94 0 0 0-.71-1.09 2.94 2.94 0 0 0-1.09-.71c-.33-.13-.83-.29-1.75-.33-1.24-.06-1.61-.07-4.76-.07zm0 2.76a5.46 5.46 0 1 1 0 10.92 5.46 5.46 0 0 1 0-10.92zm0 9a3.54 3.54 0 1 0 0-7.08 3.54 3.54 0 0 0 0 7.08zm6.95-9.2a1.27 1.27 0 1 1-2.55 0 1.27 1.27 0 0 1 2.55 0z',
}
</script>

<template>
  <footer class="footer-v2">
    <!-- Scattered retro icons, filled flat with --fg to match the hero icons (mask over solid fg) -->
    <div class="footer-scatter" aria-hidden="true">
      <span v-for="s in scatter" :key="s.icon" class="holo-icon" :style="iconStyle(s)"></span>
    </div>

    <div class="footer-inner">
      <!-- Status + socials -->
      <div class="footer-topline">
        <div class="avail">
          <span class="avail-dot" aria-hidden="true"></span>
          <span class="avail-text">
            <span class="avail-label">Status</span>
            <span class="avail-value">{{ content.brand.status }}</span>
          </span>
        </div>
        <nav class="footer-social">
          <a v-for="s in content.social" :key="s.label" :href="s.href" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path :d="socialIcons[s.label]" />
            </svg>
            <span>{{ s.label }}</span>
          </a>
        </nav>
      </div>

      <!-- CTA -->
      <div class="footer-cta">
        <span class="footer-eyebrow">Let's set a course</span>
        <div class="footer-headline">Start a project.</div>
        <a class="footer-email" :href="`mailto:${content.brand.email}`">
          {{ content.brand.email }}
          <span class="footer-email-arrow" aria-hidden="true">↗</span>
        </a>
      </div>

      <!-- Base row -->
      <div class="footer-base">
        <span class="fb-primary">© {{ yyyy }} {{ content.brand.name }}</span>
        <span>{{ content.brand.year }}</span>
        <span>{{ content.brand.location }}</span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
/* ---------- Footer ---------- */
.footer-v2 {
  position: relative;
  z-index: 2;
  background: var(--bg);
  color: var(--fg);
  border-top: 1px solid var(--rule);
  padding: 80px 56px 30px;
  overflow: hidden;

  @media (max-width: 760px) {
    padding: 56px 22px 22px;
  }
}

/* Scattered holographic icons */
.footer-scatter {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.holo-icon {
  display: inline-block;
  position: absolute;
  background-color: var(--fg);
  -webkit-mask: var(--src) center / contain no-repeat;
  mask: var(--src) center / contain no-repeat;
  opacity: 0.82;
  animation: footerDrift var(--d, 9s) ease-in-out infinite;
  transform: rotate(var(--r, 0deg));

  [data-theme="dark"] & {
    opacity: 0.55;
  }
}

@keyframes footerDrift {

  0%,
  100% {
    transform: translateY(0) rotate(var(--r, 0deg));
  }

  50% {
    transform: translateY(-12px) rotate(calc(var(--r, 0deg) + 7deg));
  }
}

.footer-inner {
  position: relative;
  z-index: 2;
  max-width: 1440px;
  margin: 0 auto;
}

/* Topline */
.footer-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--rule);
  flex-wrap: wrap;
}

.avail {
  display: inline-flex;
  align-items: center;
  gap: 14px;
}

.avail-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  animation: availPulse 2s ease-in-out infinite;
  flex: 0 0 8px;
}

@keyframes availPulse {

  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);
  }

  50% {
    box-shadow: 0 0 0 8px rgba(34, 197, 94, 0);
  }
}

.avail-text {
  display: inline-flex;
  gap: 14px;
  align-items: baseline;
}

.avail-label {
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--fg-faint);
  font-weight: 500;
}

.avail-value {
  font-size: 13px;
  letter-spacing: 0.02em;
  color: var(--fg);
  font-weight: 500;
}

.footer-social {
  display: flex;
  gap: 26px;

  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 500;
    text-decoration: none;
    color: var(--fg-muted);
    transition: color 0.2s ease;

    &:hover {
      color: var(--fg);
    }

    svg {
      width: 14px;
      height: 14px;
      fill: currentColor;
    }
  }
}

/* CTA */
.footer-cta {
  padding: 96px 0 70px;
  max-width: 560px;

  @media (max-width: 760px) {
    padding: 64px 0 48px;
  }
}

.footer-eyebrow {
  display: block;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--accent-ink);
  margin-bottom: 26px;
}

.footer-headline {
  font-family: var(--serif);
  font-weight: 100;
  font-size: clamp(44px, 7vw, 90px);
  line-height: 0.92;
  letter-spacing: -0.03em;
  color: var(--fg);
}

.footer-email {
  margin-top: 34px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  letter-spacing: 0.02em;
  color: var(--fg);
  text-decoration: none;
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 13px 22px;
  transition: border-color 0.25s ease;

  &:hover {
    border-color: var(--fg);

    .footer-email-arrow {
      transform: translate(4px, -4px);
    }
  }
}

.footer-email-arrow {
  transition: transform 0.3s ease;
}

/* Base row */
.footer-base {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px 40px;
  padding-top: 24px;
  border-top: 1px solid var(--rule);
  flex-wrap: wrap;
  font-size: 11px;
  letter-spacing: 0.06em;
  font-weight: 500;
  color: var(--fg-muted);

  .fb-primary {
    color: var(--fg);
  }

  @media (max-width: 620px) {
    gap: 8px;

    span {
      flex: 0 0 100%;
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .holo-icon {
    animation: none;
  }
}
</style>
