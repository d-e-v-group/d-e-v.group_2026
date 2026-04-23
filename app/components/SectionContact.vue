<script setup>
import content from '~/assets/js/content.js'
</script>

<template>
  <section class="contact" id="contact">
    <div class="page">
      <div class="contact-label">§ 04 / Get in touch</div>
      <a class="contact-email" :href="`mailto:${content.brand.email}`">
        hello<span class="arrow">↗</span>
      </a>
      <div class="contact-row">
        <div><span class="k">Email</span>{{ content.brand.email }}</div>
        <div><span class="k">For</span>New projects</div>
        <div><span class="k">Response</span>Within 2 business days</div>
        <div><span class="k">Bases</span>BK · LA · Remote</div>
      </div>
    </div>
  </section>
</template>
