<script setup>
import content from '~/assets/js/content.js'

const icons = [
  'computer', 'documents', 'floppydisk', 'folder',
  'mailbox', 'mouse', 'peace', 'pencil', 'thumbs-up',
]

const shuffled = [...content.capabilities].sort(() => Math.random() - 0.5)
const items = [...shuffled, ...shuffled]
</script>

<template>
  <!-- Static icon preview for sizing tweaks — remove when done -->
  <!-- <div class="marquee-icon-preview">
    <span v-for="icon in icons" :key="icon" :class="`dot icon-${icon}`">
      <img :src="`/icons/${icon}.svg`" alt="" aria-hidden="true" />
    </span>
  </div> -->

  <div class="marquee">
    <div class="marquee-track">
      <template v-for="(c, i) in items" :key="i">
        <span>{{ c }}</span>
        <span :class="`dot icon-${icons[i % icons.length]}`">
          <img :src="`/icons/${icons[i % icons.length]}.svg`" alt="" aria-hidden="true" />
        </span>
      </template>
      <template v-for="(c, i) in items" :key="`b${i}`">
        <span>{{ c }}</span>
        <span :class="`dot icon-${icons[i % icons.length]}`">
          <img :src="`/icons/${icons[i % icons.length]}.svg`" alt="" aria-hidden="true" />
        </span>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
/* ---------- Marquee ---------- */
.marquee-icon-preview {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px 48px;
  border-bottom: 1px solid var(--rule);
  background: var(--bg-alt);
}

.marquee {
  position: relative;
  z-index: 11;
  overflow: hidden;
  border-top: 1px solid var(--fg);
  border-bottom: 1px solid var(--fg);
  background-color: var(--bg);
  padding: 18px 0;
  white-space: nowrap;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--fg);
}

.marquee-track {
  display: inline-flex;
  align-items: center;
  animation: marquee 100s linear infinite;

  span {
    padding: 0 32px;
  }
}

/* Shared dot styles */
.dot {
  display: inline-flex;
  align-items: center;
  padding: 0 8px;
  opacity: 0.8;

  img {
    max-width: none;
    display: block;
  }
}

/* Per-icon sizing — tweak width/height values as needed */
.icon-computer img {
  width: 24px;
  height: 24px;
}

.icon-documents img {
  width: 24px;
  height: 24px;
}

.icon-floppydisk img {
  width: 22px;
  height: 24px;
}

.icon-folder img {
  width: 28px;
  height: 24px;
}

.icon-mailbox img {
  width: 34px;
  height: 24px;
}

.icon-mouse img {
  width: 24px;
  height: 24px;
}

.icon-peace img {
  width: 24px;
  height: 28px;
}

.icon-pencil img {
  width: 28px;
  height: 24px;
}

.icon-thumbs-up img {
  width: 24px;
  height: 24px;
}

[data-theme="dark"] .dot img {
  filter: brightness(0) invert(1);
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
</style>
