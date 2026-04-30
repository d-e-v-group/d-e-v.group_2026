<script setup>
import content from '~/assets/js/content.js'

const icons = [
  'computer', 'documents', 'floppydisk', 'folder',
  'mailbox', 'mouse', 'peace', 'pencil', 'thumbs-up',
]

const items = [...content.capabilities, ...content.capabilities]
</script>

<template>
  <div class="marquee">
    <div class="marquee-track">
      <template v-for="(c, i) in items" :key="i">
        <span>{{ c }}</span>
        <span class="dot">
          <img :src="`/icons/${icons[i % icons.length]}.svg`" alt="" aria-hidden="true" />
        </span>
      </template>
      <template v-for="(c, i) in items" :key="`b${i}`">
        <span>{{ c }}</span>
        <span class="dot">
          <img :src="`/icons/${icons[i % icons.length]}.svg`" alt="" aria-hidden="true" />
        </span>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
/* ---------- Marquee ---------- */
.marquee {
  overflow: hidden;
  border-top: 1px solid var(--fg);
  border-bottom: 1px solid var(--fg);
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
  animation: marquee 45s linear infinite;

  span {
    padding: 0 32px;
  }

  .dot {
    display: inline-flex;
    align-items: center;
    padding: 0 8px;
    opacity: 0.8;

    img {
      width: 24px;
      max-width: none;
      height: 24px;
      display: block;
    }
  }
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
</style>
