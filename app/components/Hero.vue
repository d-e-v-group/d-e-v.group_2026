<script setup>
import content from '~/assets/js/content.js'
</script>

<template>
  <section class="hero">
    <div class="hero-grid">
      <h1 class="hero-display">{{ content.brand.headline }}</h1>
      <p class="hero-sub">{{ content.brand.pitch }}</p>
    </div>
    <Marquee />
  </section>
</template>
