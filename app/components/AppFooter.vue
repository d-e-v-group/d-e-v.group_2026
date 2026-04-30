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
