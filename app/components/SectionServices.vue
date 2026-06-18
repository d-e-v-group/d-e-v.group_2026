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
        <p class="section-quote">{{ content.sectionQuotes.services }}</p>
      </div>
      <div class="services-interactive">
        <div class="services-list">
          <div v-for="(s, i) in content.services" :key="s.n" class="service-item">
            <button :class="['service-row', { active: activeIdx === i }]" @mouseenter="activeIdx = i"
              @focus="activeIdx = i" @click="activeIdx = i">
              <div class="title">{{ s.title }}</div>
              <div class="arrow">{{ activeIdx === i ? '●' : '→' }}</div>
            </button>
            <!-- Always rendered; hidden on desktop (side panel drives hover),
                 shown stacked on mobile in place of the accordion. -->
            <div class="service-detail-inline">
              <div class="detail-meta">{{ s.meta }}</div>
              <div v-if="s.icon" class="detail-icon">
                <img :src="`/icons/${s.icon}.svg`" :alt="`${s.title} icon`" width="40" height="40" />
              </div>
              <p class="detail-desc">{{ s.desc }}</p>
            </div>
          </div>
        </div>
        <div class="services-detail" :key="activeIdx">
          <div class="detail-meta">{{ active.meta }}</div>
          <div v-if="active.icon" class="detail-icon">
            <img :src="`/icons/${active.icon}.svg`" :alt="`${active.title} icon`" width="40" height="40" />
          </div>
          <p class="detail-desc">{{ active.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
/* ---------- Services ---------- */
.services-interactive {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 64px;
  align-items: start;
  border-top: 1px solid var(--rule);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 32px;

    .services-detail {
      display: none;
    }

    .service-detail-inline {
      display: block;
      padding: 20px 0 24px;
      border-bottom: 1px solid var(--rule);
    }

    /* Each row is now followed by its detail; let the detail's border-bottom
       separate the stacked blocks, and drop the accordion arrow affordance. */
    .service-row {
      border-bottom: none;

      .arrow {
        display: none;
      }

      &:hover {
        padding-left: 0;
      }
    }
  }

  .services-list {
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--rule);
    padding-right: 48px;

    @media (max-width: 900px) {
      border-right: none;
      padding-right: 0;
    }
  }

  .service-row {
    display: grid;
    grid-template-columns: 1fr 28px;
    gap: 20px;
    align-items: center;
    padding: 22px 0;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid var(--rule);
    cursor: pointer;
    background: transparent;
    text-align: left;
    color: var(--fg);
    width: 100%;
    transition: padding 0.3s ease;

    &:hover {
      padding-left: 16px;
    }

    .title {
      font-size: clamp(18px, 2.4vw, 22px);
      font-weight: 500;
      letter-spacing: -0.02em;
      line-height: 1;
      //color: var(--fg-muted);
      transition: color 0.3s ease;
    }

    &.active .title {
      color: var(--fg);
    }

    .arrow {
      font-size: 14px;
      color: var(--fg-faint);
      transition: color 0.3s ease, transform 0.3s ease;
    }

    &.active .arrow {
      color: var(--accent-ink);
    }

    &:hover .arrow {
      color: var(--fg);
      transform: translateX(4px);
    }

    &.active:hover .arrow {
      transform: none;
      color: var(--accent-ink);
    }
  }
}

/* Detail panel */
.services-detail {
  position: sticky;
  top: 96px;
  padding: 32px 0 0;
  animation: fadeInUp 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.services-detail,
.service-detail-inline {
  .detail-meta {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--fg-muted);
    margin-bottom: 32px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--rule);
    display: none;
  }

  .detail-icon {
    margin-bottom: 20px;

    img {
      display: block;
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
  }

  .detail-desc {
    //padding-left: 20px;
    font-size: 19px;
    line-height: 1.45;
    color: var(--fg);
    max-width: 38ch;
  }
}

/* Retro icons ship as solid black; invert so they read on the dark theme. */
[data-theme="dark"] .detail-icon img {
  filter: invert(1);
}

/* Inline accordion detail — desktop: hidden */
.service-detail-inline {
  display: none;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}
</style>
