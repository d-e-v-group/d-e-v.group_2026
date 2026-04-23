<script setup>
import content from '~/assets/js/content.js'

const now = ref(new Date())
let timer = null

onMounted(() => {
  timer = setInterval(() => { now.value = new Date() }, 1000)
})
onUnmounted(() => clearInterval(timer))

const utcTime = computed(() => now.value.toISOString().slice(11, 19))
const yyyy = computed(() => now.value.getUTCFullYear())
const doy = computed(() => Math.floor(
  (Date.UTC(now.value.getUTCFullYear(), now.value.getUTCMonth(), now.value.getUTCDate()) -
    Date.UTC(now.value.getUTCFullYear(), 0, 0)) / 86400000
))

</script>

<template>
  <footer class="footer-v2">
    <div class="footer-topline">
      <div class="avail">
        <span class="avail-dot" aria-hidden="true"></span>
        <span class="avail-text">
          <span class="avail-label">Status</span>
          <span class="avail-value">Accepting Q3 2026 projects</span>
        </span>
      </div>
      <!-- <div class="shortcut-hint">
        Press <kbd>?</kbd> for keyboard shortcuts · <kbd>`</kbd> for terminal
      </div> -->
    </div>

    <div class="footer-hero">
      <a :href="`mailto:${content.brand.email}`" class="footer-email">
        hello@d-e-v.group
        <span class="footer-email-arrow" aria-hidden="true">↗</span>
      </a>
      <div class="footer-hero-meta">
        <div class="fhm-label">Send brief to</div>
        <div class="fhm-value">{{ content.brand.email }}</div>
        <div class="fhm-label">Response</div>
        <div class="fhm-value">≤ 2 business days</div>
      </div>
    </div>


    <div class="footer-metadata">
      <!-- <div class="fm-row">
        <span class="fm-k">© Development Group</span>
        <span class="fm-v">{{ yyyy }}</span>
      </div> -->
      <div class="fm-row  footer-metadata">
        <div class="fm-row"><span class="fm-k">Development Group</span><span class="fm-v">Est. 2014</span></div>
        <div class="fm-row"><span class="fm-k">Brooklyn · Los Angeles · Remote</span><span class="fm-v">© {{ yyyy
            }}</span>
        </div>
      </div>
      <!-- <div class="fm-row fm-salute">
        <span class="fm-k">—</span>
        <span class="fm-v">All ships sail true</span>
      </div> -->
    </div>
  </footer>
</template>
