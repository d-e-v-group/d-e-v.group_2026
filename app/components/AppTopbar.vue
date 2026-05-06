<script setup>
import content from '~/assets/js/content.js'

const SECTIONS = [null, '#services', '#work', '#team', '.footer-v2']
const sectionIndex = ref(0)
const direction = ref('down')

const navigate = () => {
  if (direction.value === 'down') {
    sectionIndex.value = Math.min(sectionIndex.value + 1, SECTIONS.length - 1)
  } else {
    sectionIndex.value = Math.max(sectionIndex.value - 1, 0)
  }

  const idx = sectionIndex.value
  if (idx === 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    document.querySelector(SECTIONS[idx])?.scrollIntoView({ behavior: 'smooth' })
  }

  if (sectionIndex.value === SECTIONS.length - 1) direction.value = 'up'
  else if (sectionIndex.value === 0) direction.value = 'down'
}
</script>

<template>
  <div class="topbar">
    <div class="wordmark">{{ content.brand.name }}</div>
    <nav>
      <a v-for="item in content.nav" :key="item.href" :href="item.href">{{ item.label }}</a>
    </nav>
    <button class="nav-arrow" @click="navigate" :aria-label="direction === 'down' ? 'Next section' : 'Previous section'">
      <span class="nav-arrow-icon" :class="direction">↓</span>
    </button>
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

  >* {
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

.nav-arrow {
  display: none;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  font-size: 20px;
  line-height: 1;

  &:hover .nav-arrow-icon {
    transform: translate(3px, -3px);
  }
}

.nav-arrow-icon {
  display: inline-block;
  transition: transform 0.3s ease;

  &.up {
    transform: rotate(180deg);

    .nav-arrow:hover & {
      transform: rotate(180deg) translate(3px, -3px);
    }
  }
}

@media (max-width: 768px) {
  .topbar {
    padding: 12px 24px;
    mix-blend-mode: normal;
    color: var(--fg);

    nav {
      display: none;
    }
  }

  .nav-arrow {
    display: block;
  }
}
</style>
