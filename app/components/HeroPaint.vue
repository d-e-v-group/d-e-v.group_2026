<script setup>
const canvas = ref(null)

onMounted(() => {
  const cfg = {
    // movement
    lerp: 0.0055, // cursor follow speed — lower = lazier (0.01–0.25)

    // brush size
    baseRadius: 600,    // base radius in px
    radiusPulse: 400,     // how much it breathes in/out
    pulseSpeed: 4100,   // ms per pulse cycle

    // blob morphing — how lumpy/stretched the shape gets
    blobPoints: 3,      // number of control points (5–10)
    warp1: 0.18,   // amplitude of first warp wave  (0–0.4)
    warp2: 0.14,   // amplitude of second warp wave (0–0.4)
    warp3: 0.10,   // amplitude of third warp wave  (0–0.4)
    warpSpeed1: 2000,   // ms per cycle for warp1
    warpSpeed2: 2700,   // ms per cycle for warp2
    warpSpeed3: 1500,   // ms per cycle for warp3

    // color
    hueSpeed: 0.3,    // degrees per frame (higher = faster rainbow)
    hueSpread: 20,     // hue shift on mid-stop (color variety within brush)
    opacity: 0.6,    // peak opacity at brush center (0–1)
    opacityMid: 0.28,   // opacity at mid-gradient stop
    gradientSpread: 1.3, // how far gradient bleeds past blob edge (1.0–2.0)

    // trail
    fadeAlpha: 0.018,  // how fast old paint fades — lower = longer trails
  }

  const ctx = canvas.value.getContext('2d')
  let hue = 0
  let raf = null

  const hero = canvas.value.parentElement

  const resize = () => {
    canvas.value.width = hero.offsetWidth
    canvas.value.height = hero.offsetHeight
  }

  const ro = new ResizeObserver(resize)
  ro.observe(hero)
  resize()

  const center = () => ({ x: canvas.value.width / 2, y: canvas.value.height / 2 })
  let target = center()
  let cur = { ...target }

  const onMove = (e) => {
    const rect = canvas.value.getBoundingClientRect()
    target = { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }

  const onLeave = () => {
    target = center()
  }

  hero.addEventListener('pointermove', onMove)
  hero.addEventListener('pointerleave', onLeave)

  const tick = () => {
    hue = (hue + cfg.hueSpeed) % 360

    const { width, height } = canvas.value
    const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim()

    ctx.globalAlpha = cfg.fadeAlpha
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, width, height)
    ctx.globalAlpha = 1

    {
      cur.x += (target.x - cur.x) * cfg.lerp
      cur.y += (target.y - cur.y) * cfg.lerp

      const t = Date.now()
      const N = cfg.blobPoints
      const baseR = cfg.baseRadius + Math.sin(t / cfg.pulseSpeed) * cfg.radiusPulse
      const pts = Array.from({ length: N }, (_, i) => {
        const a = (i / N) * Math.PI * 2
        const d =
          Math.sin(a * 2 + t / cfg.warpSpeed1) * cfg.warp1 +
          Math.sin(a * 3 - t / cfg.warpSpeed2) * cfg.warp2 +
          Math.sin(a * 1.5 + t / cfg.warpSpeed3) * cfg.warp3
        const r = baseR * (1 + d)
        return { x: cur.x + Math.cos(a) * r, y: cur.y + Math.sin(a) * r }
      })

      ctx.beginPath()
      pts.forEach((p1, i) => {
        const p0 = pts[(i - 1 + N) % N]
        const p2 = pts[(i + 1) % N]
        const p3 = pts[(i + 2) % N]
        if (i === 0) ctx.moveTo(p1.x, p1.y)
        ctx.bezierCurveTo(
          p1.x + (p2.x - p0.x) / 6, p1.y + (p2.y - p0.y) / 6,
          p2.x - (p3.x - p1.x) / 6, p2.y - (p3.y - p1.y) / 6,
          p2.x, p2.y
        )
      })
      ctx.closePath()

      const g = ctx.createRadialGradient(cur.x, cur.y, 0, cur.x, cur.y, baseR * cfg.gradientSpread)
      g.addColorStop(0, `hsla(${hue},                 70%, 65%, ${cfg.opacity})`)
      g.addColorStop(0.5, `hsla(${hue + cfg.hueSpread}, 65%, 60%, ${cfg.opacityMid})`)
      g.addColorStop(1, `hsla(${hue},                 60%, 65%, 0)`)
      ctx.fillStyle = g
      ctx.fill()
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
  z-index: 10;
  opacity: .35;
  mix-blend-mode: multiply;
  background-color: var(--bg);
}

[data-theme="dark"] .hero-paint {
  mix-blend-mode: screen;
}
</style>
