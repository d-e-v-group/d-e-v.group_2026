<script setup>
import content from '~/assets/js/content.js'
</script>

<template>
  <section class="section" id="team">
    <div class="page">
      <div class="section-head">
        <h2 class="section-title">{{ content.sections.team }}</h2>
        <p class="section-quote">{{ content.sectionQuotes.team }}</p>
      </div>
      <div class="team-grid">
        <div v-for="m in content.team" :key="m.name" class="team-card reveal">
          <div class="team-photo">
            <img v-if="m.photo" :src="m.photo" :alt="m.name" loading="lazy" />
            <div v-else class="team-photo-placeholder">{{ m.initials }}</div>
          </div>
          <div class="team-meta">
            <div class="name">{{ m.name }}</div>
            <div class="role">{{ m.role }}</div>
            <div class="team-links" v-if="m.linkedin || m.github">
              <a v-if="m.linkedin" :href="m.linkedin" class="team-link" target="_blank" rel="noopener"
                aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05C20.5 8.59 21 11.1 21 14.36V21h-4v-5.86c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21H9z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a v-if="m.github" :href="m.github" class="team-link" target="_blank" rel="noopener" aria-label="GitHub">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
/* ---------- Team ---------- */
.section#team {
  background: var(--bg-alt);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 32px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
}

.team-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
}

.team-photo {
  flex: 0 0 auto;
  width: 150px;
  height: 150px;
  background: var(--bg-alt);
  border: 1px solid var(--rule);
  position: relative;
  overflow: hidden;
  border-radius: 15px;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);

    .team-card:hover & {
      transform: scale(1.05);
    }
  }

  @media (max-width: 540px) {
    width: 92px;
    height: 92px;
  }
}

.team-photo-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--serif);
  font-weight: 100;
  font-size: 40px;
  color: var(--fg-faint);
  // background: radial-gradient(circle at 50% 40%, var(--bg-alt) 0%, var(--bg) 100%);
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  background: white;

  .team-card:hover & {
    transform: scale(1.05);
  }
}

.team-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;

  .name {
    font-family: var(--serif);
    font-size: 22px;
    font-weight: 100;
    letter-spacing: -0.01em;
    line-height: 1.1;
  }

  .role {
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--fg-muted);
  }
}

.team-links {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 14px;
  margin-top: 10px;
}

.team-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--fg-muted);
  text-decoration: none;
  transition: color 0.2s ease;

  svg {
    width: 15px;
    height: 15px;
    fill: currentColor;
  }

  &:hover {
    color: var(--accent);
  }
}
</style>
