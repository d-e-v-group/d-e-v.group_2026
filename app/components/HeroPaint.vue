<script setup>
const canvas = ref(null)

onMounted(() => {
  const presets = [
    { // 0 — default
      lerp: 0.055, bounceLerp: 0.012, bounceSpeed: 1.8,
      baseRadius: 300, radiusPulse: 60, pulseSpeed: 4000,
      blobPoints: 5,
      warp1: 0.18, warp2: 0.14, warp3: 0.10,
      warpSpeed1: 2000, warpSpeed2: 2700, warpSpeed3: 1500,
      hueSpeed: 1.3, hueSpread: 20,
      opacity: 0.6, opacityMid: 1.28, gradientSpread: 2.3,
      fadeAlpha: 0.0038,
    },
    // { // 1 — huge & slow
    //   lerp: 0.02, bounceLerp: 0.005, bounceSpeed: 0.8,
    //   baseRadius: 520, radiusPulse: 130, pulseSpeed: 7000,
    //   blobPoints: 6,
    //   warp1: 0.22, warp2: 0.18, warp3: 0.14,
    //   warpSpeed1: 4500, warpSpeed2: 5500, warpSpeed3: 3500,
    //   hueSpeed: 0.4, hueSpread: 10,
    //   opacity: 0.45, opacityMid: 0.9, gradientSpread: 2.0,
    //   fadeAlpha: 0.0015,
    // },
    { // 2 — frantic
      lerp: 0.14, bounceLerp: 0.055, bounceSpeed: 4.5,
      baseRadius: 110, radiusPulse: 90, pulseSpeed: 280,
      blobPoints: 8,
      warp1: 0.36, warp2: 0.30, warp3: 0.28,
      warpSpeed1: 380, warpSpeed2: 490, warpSpeed3: 320,
      hueSpeed: 3.5, hueSpread: 65,
      opacity: 0.85, opacityMid: 1.6, gradientSpread: 1.4,
      fadeAlpha: 0.014,
    },
    { // 3 — wispy
      lerp: 0.03, bounceLerp: 0.007, bounceSpeed: 1.1,
      baseRadius: 520, radiusPulse: 300, pulseSpeed: 9000,
      blobPoints: 5,
      warp1: 0.10, warp2: 0.07, warp3: 0.04,
      warpSpeed1: 5000, warpSpeed2: 6500, warpSpeed3: 4000,
      hueSpeed: 0.2, hueSpread: 5,
      opacity: 0.28, opacityMid: 0.5, gradientSpread: 3.2,
      fadeAlpha: 0.008,
    },
    { // 4 — electric
      lerp: 0.18, bounceLerp: 0.08, bounceSpeed: 3.8,
      baseRadius: 170, radiusPulse: 110, pulseSpeed: 550,
      blobPoints: 7,
      warp1: 0.30, warp2: 0.25, warp3: 0.22,
      warpSpeed1: 750, warpSpeed2: 580, warpSpeed3: 920,
      hueSpeed: 2.8, hueSpread: 50,
      opacity: 0.9, opacityMid: 1.9, gradientSpread: 1.6,
      fadeAlpha: 0.0009,
    },
  ]

  let presetIndex = 0
  const cfg = { ...presets[0] }

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
  let bounce = { ...target }
  let vel = { x: cfg.bounceSpeed * 0.8, y: cfg.bounceSpeed }
  let mode = 'bounce'

  const onMove = (e) => {
    const rect = canvas.value.getBoundingClientRect()
    target = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    mode = 'follow'
  }

  const onLeave = () => {
    bounce = { ...cur }
    mode = 'bounce'
  }

  const onClick = () => {
    presetIndex = (presetIndex + 1) % presets.length
    Object.assign(cfg, presets[presetIndex])
  }

  hero.addEventListener('pointermove', onMove)
  hero.addEventListener('pointerleave', onLeave)
  hero.addEventListener('click', onClick)

  const tick = () => {
    hue = (hue + cfg.hueSpeed) % 360

    const { width, height } = canvas.value
    const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim()

    ctx.globalAlpha = cfg.fadeAlpha
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, width, height)
    ctx.globalAlpha = 1

    {
      const lerp = mode === 'bounce' ? cfg.bounceLerp : cfg.lerp

      if (mode === 'bounce') {
        bounce.x += vel.x
        bounce.y += vel.y
        if (bounce.x < 0) { bounce.x = 0; vel.x = Math.abs(vel.x) }
        if (bounce.x > width) { bounce.x = width; vel.x = -Math.abs(vel.x) }
        if (bounce.y < 0) { bounce.y = 0; vel.y = Math.abs(vel.y) }
        if (bounce.y > height) { bounce.y = height; vel.y = -Math.abs(vel.y) }
        target = { x: bounce.x, y: bounce.y }
      }

      cur.x += (target.x - cur.x) * lerp
      cur.y += (target.y - cur.y) * lerp

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
    hero.removeEventListener('click', onClick)
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
  /* background-color: #c8d8f3; */
}

[data-theme="dark"] .hero-paint {
  mix-blend-mode: screen;
}
</style>
