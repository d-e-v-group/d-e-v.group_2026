<script setup>
import content from '~/assets/js/content.js'
</script>

<template>
  <section class="section" id="team">
    <div class="page">
      <div class="section-head">
        <h2 class="section-title">{{ content.sections.team }}</h2>
      </div>
      <div class="team-grid">
        <div v-for="m in content.team" :key="m.name" class="team-card reveal">
          <div class="team-photo">
            <div class="team-photo-placeholder">{{ m.initials }}</div>
          </div>
          <div class="team-meta">
            <div class="name">{{ m.name }}</div>
            <div class="role">{{ m.role }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
/* ---------- Team ---------- */
.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.team-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.team-photo {
  aspect-ratio: 4/5;
  background: var(--bg-alt);
  border: 1px solid var(--rule);
  position: relative;
  overflow: hidden;
}

.team-photo-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--serif);
  font-weight: 100;
  font-size: 120px;
  color: var(--fg-faint);
  background: radial-gradient(circle at 50% 40%, var(--bg-alt) 0%, var(--bg) 100%);
  transition: transform 0.6s cubic-bezier(0.2,0.8,0.2,1);

  .team-card:hover & {
    transform: scale(1.05);
  }
}

.team-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;

  .name {
    font-family: var(--serif);
    font-size: 22px;
    font-weight: 100;
    letter-spacing: -0.01em;
  }

  .role {
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--fg-muted);
  }
}
</style>
