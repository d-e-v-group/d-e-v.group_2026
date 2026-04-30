<script setup>
import content from '~/assets/js/content.js'

const activeIdx = ref(0)
const active = computed(() => content.services[activeIdx.value])
</script>

<template>
  <section class="section services-section" id="services">
    <div class="page">
      <div class="section-head">
        <h2 class="section-title">{{ content.sections.services }}</h2>
      </div>
      <div class="services-interactive">
        <div class="services-list">
          <button
            v-for="(s, i) in content.services"
            :key="s.n"
            :class="['service-row', { active: activeIdx === i }]"
            @mouseenter="activeIdx = i"
            @focus="activeIdx = i"
          >
            <div class="title">{{ s.title }}</div>
            <div class="arrow">{{ activeIdx === i ? '●' : '→' }}</div>
          </button>
        </div>
        <div class="services-detail" :key="activeIdx">
          <div class="detail-meta">{{ active.meta }}</div>
          <p class="detail-desc">{{ active.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
