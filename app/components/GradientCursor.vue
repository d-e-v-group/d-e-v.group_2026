<script setup>
const el = ref(null)

onMounted(() => {
  const pos = { x: -9999, y: -9999, tx: -9999, ty: -9999 }
  let raf = null

  const onMove = (e) => {
    pos.tx = e.clientX
    pos.ty = e.clientY
  }

  const tick = () => {
    pos.x += (pos.tx - pos.x) * 0.12
    pos.y += (pos.ty - pos.y) * 0.12
    if (el.value) el.value.style.transform = `translate3d(${pos.x - 300}px, ${pos.y - 300}px, 0)`
    raf = requestAnimationFrame(tick)
  }

  window.addEventListener('pointermove', onMove)
  raf = requestAnimationFrame(tick)

  onUnmounted(() => {
    window.removeEventListener('pointermove', onMove)
    if (raf) cancelAnimationFrame(raf)
  })
})
</script>

<template>
  <div ref="el" class="gradient-cursor" aria-hidden="true" />
</template>

<style lang="scss">
.gradient-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  background: radial-gradient(
    circle,
    color-mix(in oklch, var(--accent) 70%, transparent) 0%,
    color-mix(in oklch, var(--accent) 35%, transparent) 22%,
    transparent 55%
  );
  filter: blur(60px);
  opacity: 0.55;
  mix-blend-mode: multiply;
  will-change: transform;
  transition: opacity 0.4s ease;

  [data-theme="dark"] & {
    opacity: 0.4;
    mix-blend-mode: screen;
  }

  [data-accent="mono"] & {
    display: none;
  }

  @media (hover: none), (pointer: coarse) {
    display: none;
  }
}
</style>
