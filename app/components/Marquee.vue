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
