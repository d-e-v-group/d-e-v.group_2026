<script setup>
import content from '~/assets/js/content.js'

const items = content.testimonials
const total = items.length
const cur = ref(0)
const pad = (n) => String(n).padStart(2, '0')

let timer = null
const start = () => { stop(); timer = setInterval(() => go(cur.value + 1), 7000) }
const stop = () => { if (timer) clearInterval(timer); timer = null }

const go = (n) => { cur.value = (n + total) % total }
const next = () => { go(cur.value + 1); start() }
const prev = () => { go(cur.value - 1); start() }
const select = (i) => { go(i); start() }

onMounted(start)
onUnmounted(stop)
</script>

<template>
  <section class="section testimonials" id="testimonials">
    <div class="page">
      <div class="section-head">
        <h2 class="section-title">{{ content.sections.testimonials }}</h2>
        <p class="section-quote">{{ content.sectionQuotes.testimonials }}</p>
      </div>

      <div class="carousel reveal" @mouseenter="stop" @mouseleave="start">
        <!-- <span class="c-mark" aria-hidden="true">“</span> -->
        <div class="c-stage">
          <figure v-for="(t, i) in items" :key="t.name" class="c-slide" :class="{ 'is-active': i === cur }">
            <blockquote class="c-quote">“{{ t.quote }}”</blockquote>
            <div class="asym-meta">
              <div class="asym-client">{{ t.client }}</div>
              <span class="asym-name">{{ t.name }}</span>
              <span class="t-role">{{ t.title }}</span>
            </div>
          </figure>
        </div>

        <div class="c-controls">
          <!-- <div class="c-index">
            <span>{{ pad(cur + 1) }}</span><i>/</i><span>{{ pad(total) }}</span>
          </div> -->
          <div class="c-dots">
            <button v-for="(t, i) in items" :key="i" class="c-dot" :class="{ 'is-active': i === cur }"
              :aria-label="`Go to quote ${i + 1}`" @click="select(i)"></button>
          </div>
          <div class="c-arrows">
            <button class="c-arrow" aria-label="Previous testimonial" @click="prev">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
            <button class="c-arrow" aria-label="Next testimonial" @click="next">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
/* ---------- Testimonials carousel ---------- */
.carousel {
  position: relative;
}

.c-mark {
  display: block;
  font-family: var(--serif);
  font-weight: 400;
  font-size: clamp(88px, 11vw, 150px);
  line-height: 0.6;
  height: 0.46em;
  color: var(--accent-ink);
  user-select: none;
  margin-bottom: 18px;
}

@media (max-width: 860px) {
  .c-mark {
    margin-bottom: 8px;
  }
}

.c-stage {
  position: relative;
  min-height: 280px;
}

.c-slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.6s ease, transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
  pointer-events: none;
  display: grid;
  grid-template-columns: 1fr 0.42fr;
  gap: 64px;
  align-items: center;
  text-align: left;

  &.is-active {
    position: relative;
    opacity: 1;
    transform: none;
    pointer-events: auto;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 28px;
    align-items: start;
  }
}

.c-quote {
  font-family: var(--serif);
  font-weight: 300;
  color: var(--fg);
  letter-spacing: -0.01em;
  text-wrap: balance;
  font-size: clamp(26px, 3.1vw, 42px);
  line-height: 1.22;
  text-indent: -0.35em;
}

.asym-meta {
  padding-left: 40px;
  border-left: 1px solid var(--rule);
  align-self: center;

  @media (max-width: 860px) {
    border-left: none;
    border-top: 1px solid var(--rule);
    padding-left: 0;
    padding-top: 24px;
  }
}

.asym-client {
  @include label-sans;
  color: var(--fg);
  margin-bottom: 4px;
}

.asym-name {
  display: block;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--fg);
  margin-bottom: 6px;
}

.t-role {
  display: block;
  font-size: 10.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--fg-faint);
  font-weight: 500;
}

/* Controls */
.c-controls {
  margin-top: 56px;
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.c-index {
  font-size: 11px;
  letter-spacing: 0.14em;
  font-weight: 500;
  color: var(--accent-ink);
  font-variant-numeric: tabular-nums;
  min-width: 70px;

  i {
    color: var(--fg-faint);
    font-style: normal;
    padding: 0 4px;
  }
}

.c-dots {
  display: flex;
  gap: 10px;
  align-items: center;

  .c-dot {
    width: 26px;
    height: 2px;
    border: none;
    padding: 0;
    cursor: pointer;
    background: var(--rule);
    transition: background 0.3s ease;

    &.is-active {
      background: var(--fg);
    }

    &:hover {
      background: var(--accent);
    }
  }
}

.c-arrows {
  display: flex;
  gap: 8px;
  min-width: 70px;
  justify-content: flex-end;

  .c-arrow {
    background: none;
    border: 1px solid var(--rule);
    border-radius: 999px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: var(--fg);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.25s ease;

    &:hover {
      border-color: var(--fg);
    }

    svg {
      width: 15px;
      height: 15px;
    }
  }
}
</style>
