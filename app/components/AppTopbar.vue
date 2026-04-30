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
