<script setup>
import content from '~/assets/js/content.js'

const activeIdx = ref(0)
const active = computed(() => content.services[activeIdx.value])
const linkedProjects = computed(() =>
  (active.value.projects || [])
    .map(id => content.projects.find(p => p.id === id))
    .filter(Boolean)
)
</script>

<template>
  <section class="section services-section" id="services">
    <div class="page">
      <div class="section-head">
        <h2 class="section-title">What we do.</h2>
      </div>
      <div class="services-interactive">
        <div class="services-list">
          <button v-for="(s, i) in content.services" :key="s.n" :class="['service-row', { active: activeIdx === i }]"
            @mouseenter="activeIdx = i" @focus="activeIdx = i">
            <!-- <div class="num"></div> -->
            <div class="title">{{ s.title }}</div>
            <div class="arrow">{{ activeIdx === i ? '●' : '→' }}</div>
          </button>
        </div>
        <div class="services-detail" :key="activeIdx">
          <!-- <div class="detail-num">{{ active.n }} / 07</div> -->
          <div class="detail-meta">{{ active.meta }}</div>
          <p class="detail-desc">{{ active.desc }}</p>
          <!-- <div class="detail-projects-label">Applied in</div>
          <div class="detail-projects">
            <a v-for="p in linkedProjects" :key="p.id" :href="`#project-${p.id}`" class="detail-project">
              <span class="dot" />
              <span class="name">{{ p.client }}</span>
              <span class="yr">{{ p.year }}</span>
            </a>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>
