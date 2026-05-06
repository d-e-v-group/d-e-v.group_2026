<script setup>
const tweaks = useTweaks()
const editMode = ref(false)

useHead({
  htmlAttrs: {
    'data-theme': computed(() => tweaks.value.theme),
    'data-accent': computed(() => tweaks.value.accent),
  },
})

onMounted(() => {
  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  tweaks.value.theme = mq.matches ? 'dark' : 'light'
  const onSchemeChange = (e) => { tweaks.value.theme = e.matches ? 'dark' : 'light' }
  mq.addEventListener('change', onSchemeChange)

  const handler = (e) => {
    if (!e.data?.type) return
    if (e.data.type === '__activate_edit_mode') editMode.value = true
    else if (e.data.type === '__deactivate_edit_mode') editMode.value = false
  }
  window.addEventListener('message', handler)
  window.parent.postMessage({ type: '__edit_mode_available' }, '*')
  onUnmounted(() => {
    window.removeEventListener('message', handler)
    mq.removeEventListener('change', onSchemeChange)
  })
})

useReveal()
</script>

<template>
  <GradientCursor v-if="tweaks.cursor !== false" />
  <AppTopbar />
  <Hero />
  <SectionServices />
  <SectionWork />
  <SectionTeam />
  <AppFooter />
  <Tweaks :edit-mode="editMode" />
</template>
