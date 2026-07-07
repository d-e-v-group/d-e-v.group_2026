<script setup>
import content from '~/assets/js/content.js'
</script>

<template>
  <section class="hero">
    <HeroPaint />
    <div class="hero-grid">
      <h1 class="hero-display">{{ content.brand.headline }}</h1>
      <p class="hero-sub">{{ content.brand.pitch }}</p>
    </div>
    <!-- <Marquee /> -->
  </section>
</template>

<style lang="scss">
/* ---------- Hero ---------- */
.hero {
  position: relative;
  min-height: 100vh;
  /* fall-back */
  // min-height: -moz-available;
  // min-height: -webkit-fill-available;
  // min-height: fill-available;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  padding-top: 140px;
  overflow: hidden;
}

.hero-grid {
  position: relative;
  z-index: 1;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  align-content: end;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 48px 80px;
}

.hero-display {
  grid-column: 1 / span 8;
  font-family: var(--serif);
  font-weight: 100;
  font-size: clamp(56px, 9.5vw, 128px);
  line-height: 0.9;
  letter-spacing: -0.03em;

  .accent {
    color: var(--fg-muted);
  }
}

.hero-sub {
  grid-column: 7 / span 6;
  font-size: 17px;
  line-height: 1.45;
  color: var(--fg-muted);
  margin-top: 48px;
  max-width: 48ch;
}

@media (max-width: 768px) {
  .hero-grid {
    padding: 0 24px 64px;
  }

  .hero-display,
  .hero-sub {
    grid-column: 1 / -1;
  }
}
</style>
