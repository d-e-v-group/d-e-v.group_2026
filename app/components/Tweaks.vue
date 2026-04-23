<script setup>
const props = defineProps({
  editMode: Boolean,
})

const tweaks = useTweaks()

const update = (key, val) => {
  tweaks.value = { ...tweaks.value, [key]: val }
  window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: val } }, '*')
}

const THEME_OPTS = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
]
const ACCENT_OPTS = [
  { value: 'teal', label: 'Teal' },
  { value: 'electric', label: 'Lime' },
  { value: 'cobalt', label: 'Cobalt' },
  { value: 'tomato', label: 'Tomato' },
  { value: 'mono', label: 'None' },
]
const CURSOR_OPTS = [
  { value: 'on', label: 'On' },
  { value: 'off', label: 'Off' },
]
</script>

<template>
  <div v-if="editMode" class="tweaks open">
    <h4>
      <span>Tweaks</span>
      <span>▸</span>
    </h4>
    <div class="group">
      <label>Theme</label>
      <div class="opts">
        <button
          v-for="o in THEME_OPTS"
          :key="o.value"
          :class="['opt', { active: tweaks.theme === o.value }]"
          @click="update('theme', o.value)"
        >{{ o.label }}</button>
      </div>
    </div>
    <div class="group">
      <label>Accent</label>
      <div class="opts">
        <button
          v-for="o in ACCENT_OPTS"
          :key="o.value"
          :class="['opt', { active: tweaks.accent === o.value }]"
          @click="update('accent', o.value)"
        >{{ o.label }}</button>
      </div>
    </div>
    <div class="group">
      <label>Gradient cursor</label>
      <div class="opts">
        <button
          v-for="o in CURSOR_OPTS"
          :key="o.value"
          :class="['opt', { active: (tweaks.cursor === false ? 'off' : 'on') === o.value }]"
          @click="update('cursor', o.value === 'on')"
        >{{ o.label }}</button>
      </div>
    </div>
  </div>
</template>
