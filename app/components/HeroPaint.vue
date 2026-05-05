<script setup>
const canvas = ref(null)

onMounted(() => {
  const ctx = canvas.value.getContext('2d')
  let hue = 0
  let paintX = null
  let paintY = null
  let painting = false
  let raf = null

  const hero = canvas.value.parentElement

  const resize = () => {
    canvas.value.width = hero.offsetWidth
    canvas.value.height = hero.offsetHeight
  }

  const ro = new ResizeObserver(resize)
  ro.observe(hero)
  resize()

  const onMove = (e) => {
    const rect = canvas.value.getBoundingClientRect()
    paintX = e.clientX - rect.left
    paintY = e.clientY - rect.top
    painting = true
  }

  const onLeave = () => {
    painting = false
  }

  hero.addEventListener('pointermove', onMove)
  hero.addEventListener('pointerleave', onLeave)

  const tick = () => {
    hue = (hue + 0.3) % 360

    const { width, height } = canvas.value
    const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim()

    ctx.globalAlpha = 0.018
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, width, height)
    ctx.globalAlpha = 1

    if (painting && paintX !== null) {
      const radius = 220 + Math.sin(Date.now() / 800) * 40
      const g = ctx.createRadialGradient(paintX, paintY, 0, paintX, paintY, radius)
      g.addColorStop(0,   `hsla(${hue},      70%, 65%, 0.55)`)
      g.addColorStop(0.4, `hsla(${hue + 20}, 65%, 60%, 0.25)`)
      g.addColorStop(1,   `hsla(${hue},      60%, 65%, 0)`)
      ctx.fillStyle = g
      ctx.fillRect(0, 0, width, height)
    }

    raf = requestAnimationFrame(tick)
  }

  raf = requestAnimationFrame(tick)

  onUnmounted(() => {
    hero.removeEventListener('pointermove', onMove)
    hero.removeEventListener('pointerleave', onLeave)
    ro.disconnect()
    if (raf) cancelAnimationFrame(raf)
  })
})
</script>

<template>
  <canvas ref="canvas" class="hero-paint" aria-hidden="true" />
</template>

<style>
.hero-paint {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.75;
  mix-blend-mode: multiply;
}

[data-theme="dark"] .hero-paint {
  mix-blend-mode: screen;
}
</style>
