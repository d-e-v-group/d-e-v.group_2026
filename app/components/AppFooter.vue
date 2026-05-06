<script setup>
import content from '~/assets/js/content.js'

const now = ref(new Date())
let timer = null
onMounted(() => { timer = setInterval(() => { now.value = new Date() }, 1000) })
onUnmounted(() => clearInterval(timer))

const yyyy = computed(() => now.value.getUTCFullYear())
</script>

<template>
  <footer class="footer-v2">
    <div class="footer-topline">
      <div class="avail">
        <span class="avail-dot" aria-hidden="true"></span>
        <span class="avail-text">
          <span class="avail-label">Status</span>
          <span class="avail-value">{{ content.brand.status }}</span>
        </span>
      </div>
    </div>

    <div class="footer-hero">
      <a :href="`mailto:${content.brand.email}`" class="footer-email">
        {{ content.brand.email }}
        <span class="footer-email-arrow" aria-hidden="true">↗</span>
      </a>
    </div>

    <div class="footer-metadata">
      <div class="fm-row">
        <span class="fm-k">{{ content.brand.name }}</span>
        <span class="fm-v">{{ content.brand.year }}</span>
      </div>
      <div class="fm-row">
        <span class="fm-k">{{ content.brand.location }}</span>
        <span class="fm-v">© {{ yyyy }}</span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
/* ---------- Footer ---------- */
.footer-v2 {
  padding: 48px 48px 32px;
  border-top: 1px solid var(--rule);
  background: var(--bg);

  @media (max-width: 700px) {
    padding: 32px 20px 20px;
  }
}

.footer-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--rule);
  font-size: 11px;
  letter-spacing: 0.1em;
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
  gap: 16px;
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

.footer-hero {
  padding: 64px 0 80px;
  border-bottom: 1px solid var(--rule);

  @media (max-width: 700px) {
    padding: 32px 0 40px;
  }
}

.footer-email {
  font-size: clamp(12x, 10vw, 50px);
  font-weight: 100;
  letter-spacing: -0.03em;
  line-height: 0.9;
  color: var(--fg);
  text-decoration: none;
  display: inline-flex;
  align-items: flex-start;
  gap: 0.08em;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-ink);

    .footer-email-arrow {
      transform: translate(4px, -4px);
    }
  }
}

.footer-email-arrow {
  font-size: 0.35em;
  line-height: 1;
  margin-top: 0.3em;
  transition: transform 0.3s ease;
}

.footer-metadata {
  padding: 32px 0 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px 48px;
  font-size: 11px;
  letter-spacing: 0.02em;
  color: var(--fg-muted);
  font-weight: 500;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
}

.fm-row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 8px 0;
  border-bottom: 1px solid var(--rule);

  &:nth-last-child(-n+2) {
    border-bottom: none;
  }

  @media (max-width: 700px) {
    border-bottom: 1px solid var(--rule);
  }
}

.fm-k {
  color: var(--fg-faint);
  letter-spacing: 0.04em;
}

.fm-v {
  color: var(--fg-muted);
}
</style>
