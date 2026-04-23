export const useScramble = (target, trigger) => {
  const text = ref(isRef(target) ? target.value : target)

  watch(trigger, (active) => {
    if (!active) return
    const chars = '!<>-_\\/[]{}—=+*^?#________'
    let frame = 0
    const duration = 18
    const id = setInterval(() => {
      frame++
      const progress = frame / duration
      const t = isRef(target) ? target.value : target
      const result = t.split('').map((c, i) => {
        if (c === ' ') return ' '
        const ready = (i + 1) / t.length
        if (progress >= ready) return t[i]
        return chars[Math.floor(Math.random() * chars.length)]
      }).join('')
      text.value = result
      if (frame >= duration) {
        text.value = t
        clearInterval(id)
      }
    }, 30)
    onUnmounted(() => clearInterval(id))
  })

  return text
}
