<script setup>
import content from '~/assets/js/content.js'
</script>

<template>
  <div class="topbar">
    <div class="wordmark">{{ content.brand.name }}</div>
    <nav>
      <a v-for="item in content.nav" :key="item.href" :href="item.href">{{ item.label }}</a>
    </nav>
  </div>
</template>

<style lang="scss">
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 20px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  mix-blend-mode: difference;
  color: #fff;
  pointer-events: none;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 500;

  > * {
    pointer-events: auto;
  }

  .wordmark {
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    line-height: 1;
  }

  nav {
    display: flex;
    gap: 28px;

    a {
      text-decoration: none;
      opacity: 0.85;

      &:hover {
        opacity: 1;
      }
    }
  }

  .coords {
    font-variant-numeric: tabular-nums;
    opacity: 0.7;
  }
}
</style>
