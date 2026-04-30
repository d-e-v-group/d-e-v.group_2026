<script setup>
import content from '~/assets/js/content.js'
</script>

<template>
  <section class="work-section" id="work">
    <div class="page">
      <div class="section-head">
        <h2 class="section-title">{{ content.sections.work }}</h2>
      </div>
      <div class="work-grid">
        <article
          v-for="p in content.projects"
          :key="p.id"
          class="project reveal"
          :style="{ '--project-accent': p.accent }"
          :id="`project-${p.id}`"
        >
          <div class="project-media">
            <video v-if="p.video" :src="p.video" autoplay muted loop playsinline />
            <img v-else :src="p.image" :alt="p.title">
          </div>
          <div class="project-body">
            <div class="project-meta">{{ p.title }}</div>
            <h3 class="project-title">{{ p.client }}</h3>
            <p>{{ p.body }}</p>
            <div class="project-stack">
              <span v-for="(s, j) in p.stack" :key="j" class="tag">{{ s }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
