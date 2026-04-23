<script setup>
import content from '~/assets/js/content.js'

const items = [...content.clients, ...content.clients]
</script>

<template>
  <div class="marquee">
    <div class="marquee-track">
      <template v-for="(c, i) in items" :key="i">
        <span>{{ c }}</span>
        <span class="dot">◆</span>
      </template>
      <template v-for="(c, i) in items" :key="`b${i}`">
        <span>{{ c }}</span>
        <span class="dot">◆</span>
      </template>
    </div>
  </div>
</template>
