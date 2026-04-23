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
