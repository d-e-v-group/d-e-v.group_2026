<script setup>
import content from '~/assets/js/content.js'

const view = ref('featured')

/* All-projects list, sourced from WordPress (WP GraphQL) at build time.
   Empty when WP is unreachable. Normalized + sortable. */
const { data: wpProjects } = useProjects()
const all = computed(() => (wpProjects.value || []).map(p => ({
  ...p,
  partner: p.partner || 'Development Group',
  disc: (p.category || []).join(' · '),
  sortYear: Math.max.apply(null, (String(p.year).match(/\d{4}/g) || ['0']).map(Number)),
})))

const sort = ref({ key: 'year', dir: 'desc' })

const sorted = computed(() => {
  const { key, dir } = sort.value
  const mul = dir === 'asc' ? 1 : -1
  const val = (p) => key === 'year' ? p.sortYear
    : key === 'discipline' ? p.disc.toLowerCase()
      : String(p[key] || '').toLowerCase()
  return [...all.value].sort((a, b) => {
    const va = val(a), vb = val(b)
    if (va < vb) return -1 * mul
    if (va > vb) return 1 * mul
    return a.title.localeCompare(b.title)
  })
})

function setSort(key, type) {
  if (sort.value.key === key) {
    sort.value = { key, dir: sort.value.dir === 'asc' ? 'desc' : 'asc' }
  } else {
    sort.value = { key, dir: type === 'num' ? 'desc' : 'asc' }
  }
}
const arrow = (key) => sort.value.key !== key ? '' : (sort.value.dir === 'asc' ? '↑' : '↓')

/* Hover-scroll descriptions (desktop only) */
const isMobile = () => typeof window !== 'undefined' && window.matchMedia('(max-width: 1024px)').matches
function descEnter(e) {
  if (isMobile()) return
  const d = e.currentTarget.querySelector('.wl-desc'); const i = d && d.querySelector('.inner')
  if (!i) return
  const overflow = i.scrollWidth - d.clientWidth
  if (overflow <= 4) return
  d.classList.remove('overflowing')
  i.style.transitionDuration = Math.max(0.6, overflow / 55) + 's'
  i.style.transform = `translateX(-${overflow}px)`
}
function descLeave(e) {
  const d = e.currentTarget.querySelector('.wl-desc'); const i = d && d.querySelector('.inner')
  if (!i) return
  i.style.transitionDuration = '0.3s'
  i.style.transform = 'translateX(0)'
  if (i.scrollWidth - d.clientWidth > 4) d.classList.add('overflowing')
}

/* Mark overflowing descriptions so they get the fade affordance */
const listEl = ref(null)
function markOverflow() {
  if (!listEl.value || isMobile()) return
  listEl.value.querySelectorAll('.wl-row').forEach(r => {
    const d = r.querySelector('.wl-desc'); const i = d && d.querySelector('.inner')
    if (i && i.scrollWidth - d.clientWidth > 4) d.classList.add('overflowing')
    else if (d) d.classList.remove('overflowing')
  })
}
onMounted(() => nextTick(markOverflow))
watch([sorted, view], () => nextTick(markOverflow))
</script>

<template>
  <section class="work-section" id="work">
    <div class="page">
      <div class="work-head">
        <h2 class="section-title">{{ content.sections.work }}</h2>
        <p class="section-quote">{{ content.sectionQuotes.work }}</p>
        <div class="work-toggle" role="tablist" aria-label="Work view">
          <button role="tab" :aria-selected="view === 'featured'" @click="view = 'featured'">Featured</button>
          <button role="tab" :aria-selected="view === 'all'" @click="view = 'all'">All <span class="ct">{{ all.length
              }}</span></button>
        </div>
      </div>

      <!-- FEATURED -->
      <div v-show="view === 'featured'" class="featured-grid view">
        <article v-for="p in content.projects" :key="p.id" class="project reveal"
          :style="{ '--project-accent': p.accent }" :id="`project-${p.id}`">
          <div class="project-media">
            <video v-if="p.video" :src="p.video" autoplay muted loop playsinline></video>
            <img v-else :src="p.image" :alt="p.title" />
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

      <!-- ALL -->
      <div v-show="view === 'all'" class="view">
        <div class="all-meta">
          <span>{{ all.length }} projects</span>
          <span>2010 — 2024</span>
        </div>
        <div class="all-list" ref="listEl">
          <div class="wl-headrow wl-cols">
            <button class="h" :class="{ sorted: sort.key === 'title' }" @click="setSort('title', 'text')">Project<span
                class="sort">{{ arrow('title') }}</span></button>
            <span class="h static">Description</span>
            <button class="h" :class="{ sorted: sort.key === 'discipline' }"
              @click="setSort('discipline', 'text')">Discipline<span class="sort">{{ arrow('discipline')
                }}</span></button>
            <button class="h" :class="{ sorted: sort.key === 'partner' }"
              @click="setSort('partner', 'text')">Partner<span class="sort">{{ arrow('partner') }}</span></button>
            <button class="h r" :class="{ sorted: sort.key === 'year' }" @click="setSort('year', 'num')">Year<span
                class="sort">{{ arrow('year') }}</span></button>
          </div>

          <component :is="p.url ? 'a' : 'div'" v-for="p in sorted" :key="p.title" class="wl-row wl-cols"
            :href="p.url || null" :target="p.url ? '_blank' : null" :rel="p.url ? 'noopener' : null"
            @mouseenter="descEnter" @mouseleave="descLeave">
            <div class="wl-name">{{ p.title }}<span v-if="p.url" class="ar">↗</span></div>
            <div class="wl-desc"><span class="inner">{{ p.desc }}</span></div>
            <div class="wl-type">{{ p.disc }}</div>
            <div class="wl-partner">{{ p.partner }}</div>
            <div class="wl-year">{{ p.year }}</div>
          </component>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
/* ---------- Work ---------- */
.work-section {
  padding: 120px 0;
  border-top: 1px solid var(--rule);
}

.work-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 56px;

  .section-quote {
    margin-top: 0;
  }
}

.work-toggle {
  display: inline-flex;
  border: 1px solid var(--rule);
  border-radius: 999px;
  padding: 3px;
  gap: 2px;

  button {
    font: inherit;
    cursor: pointer;
    border: none;
    background: none;
    padding: 5px 14px;
    border-radius: 999px;
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--fg-muted);
    transition: color 0.2s ease, background 0.25s ease;

    .ct {
      margin-left: 6px;
      font-variant-numeric: tabular-nums;
      opacity: 0.6;
    }

    &:hover {
      color: var(--fg);
    }

    &[aria-selected="true"] {
      background: var(--bg-alt);
      color: var(--fg);
    }
  }
}

.view {
  animation: workFade 0.45s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

@keyframes workFade {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

/* Featured grid (existing layout) */
.featured-grid {
  display: flex;
  flex-direction: column;
  gap: 120px;
  padding-bottom: 0;
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

.project-body>p {
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
  color: var(--fg-muted);
  border-radius: 0;
  background: var(--bg-alt);
}

/* All list */
.all-meta {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  padding: 0 8px;
  margin-bottom: 20px;
  font-size: 11px;
  letter-spacing: 0.06em;
  color: var(--fg-faint);
  font-weight: 500;
}

.all-list {
  border-top: 1px solid var(--rule);
}

.wl-cols {
  grid-template-columns: minmax(200px, 1fr) minmax(0, 2fr) 164px 150px 56px;
}

.wl-headrow,
.wl-row {
  display: grid;
  gap: 40px;
  align-items: center;
}

.wl-headrow {
  padding: 20px 8px 16px;
  border-bottom: 1px solid var(--rule);

  .h {
    font: inherit;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    text-align: left;
    font-size: 9.5px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--fg-faint);
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: color 0.2s ease;

    &:hover {
      color: var(--fg);
    }

    &.sorted {
      color: var(--fg);
    }

    &.static {
      cursor: default;
      pointer-events: none;
    }

    &.r {
      justify-content: flex-end;
      text-align: right;
    }

    .sort {
      font-size: 9px;
    }
  }
}

.wl-row {
  padding: 13px 8px;
  border-bottom: 1px solid var(--rule);
  color: inherit;
  text-decoration: none;
  transition: background 0.18s ease;

  &:hover {
    background: var(--bg-alt);
  }
}

.wl-name {
  font-family: var(--font);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.01em;
  line-height: 1.3;
  color: var(--fg);
  display: inline-flex;
  align-items: center;
  gap: 8px;

  .ar {
    font-size: 0.85em;
    font-weight: 400;
    color: var(--fg-faint);
    transition: transform 0.25s ease, color 0.2s ease;
  }
}

a.wl-row:hover .wl-name {
  color: var(--accent-ink);
}

a.wl-row:hover .wl-name .ar {
  transform: translate(3px, -3px);
  color: var(--accent-ink);
}

.wl-desc {
  font-size: 13px;
  line-height: 1.4;
  color: var(--fg-muted);
  overflow: hidden;
  white-space: nowrap;

  &.overflowing {
    -webkit-mask: linear-gradient(90deg, #000 86%, transparent);
    mask: linear-gradient(90deg, #000 86%, transparent);
  }

  .inner {
    display: inline-block;
    transition: transform 0.25s linear;
  }
}

.wl-type {
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--fg-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.wl-partner {
  font-size: 11px;
  letter-spacing: 0.04em;
  color: var(--fg-muted);
}

.wl-year {
  font-size: 12px;
  letter-spacing: 0.02em;
  color: var(--fg-muted);
  text-align: right;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

@media (max-width: 1024px) {
  .wl-cols {
    grid-template-columns: 1fr 70px;
  }

  .wl-headrow {
    display: none;
  }

  .wl-row {
    gap: 4px 20px;
    grid-template-columns: 1fr 70px;
    padding: 16px 8px;
  }

  .wl-name {
    grid-column: 1;
  }

  .wl-year {
    grid-column: 2;
    grid-row: 1;
  }

  .wl-desc {
    grid-column: 1 / -1;
    white-space: normal;
    overflow: visible;
    margin-top: 4px;
    -webkit-mask: none !important;
    mask: none !important;

    .inner {
      transform: none !important;
    }
  }

  .wl-type {
    grid-column: 1 / -1;
    margin-top: 6px;
  }

  .wl-partner {
    grid-column: 1 / -1;
  }
}
</style>
