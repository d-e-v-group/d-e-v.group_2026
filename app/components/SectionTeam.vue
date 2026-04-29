<script setup>
import content from '~/assets/js/content.js'
</script>

<template>
  <section class="section" id="team">
    <div class="page">
      <div class="section-head">
        <h2 class="section-title">Who we are.</h2>
      </div>
      <div class="team-grid">
        <div v-for="m in content.team" :key="m.name" class="team-card reveal">
          <div class="team-photo">
            <div class="team-photo-placeholder">{{ m.initials }}</div>
          </div>
          <div class="team-meta">
            <div>
              <div class="name">{{ m.name }}</div>
              <div class="role">{{ m.role }}</div>
            </div>
            <div class="links">
              <a href="#" aria-label="LinkedIn">IN</a>
              <a href="#" aria-label="GitHub">GH</a>
              <a href="#" aria-label="Instagram">IG</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
