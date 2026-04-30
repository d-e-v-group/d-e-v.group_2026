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

<style lang="scss">
/* ---------- Work ---------- */
.work-section {
  padding: 120px 0 0;
  border-top: 1px solid var(--rule);
}

.work-grid {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 120px;
  padding-bottom: 120px;
}

.project {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
  align-items: start;

  &:nth-child(even) .project-media {
    order: 2;
  }

  &:nth-child(even) .project-body {
    grid-column: 1 / span 6;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    .project-media,
    .project-body {
      grid-column: 1 / -1;
    }

    &:nth-child(even) .project-media {
      order: 0;
    }

    &:nth-child(even) .project-body {
      grid-column: 1 / -1;
    }
  }
}

.project-media {
  grid-column: span 6;
  background: var(--bg-alt);
  border: 1px solid var(--rule);
  overflow: hidden;
  border-radius: 20px;

  video,
  img {
    width: 100%;
    height: auto;
    display: block;
  }
}

.project-body {
  grid-column: span 6;
  padding-top: 8px;
}

.project-meta {
  padding-bottom: 16px;
  border-bottom: 1px solid var(--rule);
  margin-bottom: 24px;
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--fg-muted);
}

.project-title {
  font-family: var(--serif);
  font-size: clamp(36px, 7vw, 64px);
  font-weight: 100;
  letter-spacing: -0.02em;
  line-height: 1.05;
  margin-bottom: 20px;
}

.project-body > p {
  font-size: 15px;
  line-height: 1.55;
  color: var(--fg-muted);
  margin-bottom: 16px;
}

.project-stack {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.project-stack .tag {
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 6px 10px;
  border: 1px solid var(--rule);
  color: var(--fg-muted);
  border-radius: 999px;
}
</style>
