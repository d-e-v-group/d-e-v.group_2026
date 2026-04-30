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

<style lang="scss">
.tweaks {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
  background: var(--bg);
  border: 1px solid var(--rule);
  padding: 16px 18px;
  min-width: 260px;
  font-size: 11px;
  letter-spacing: 0.04em;
  box-shadow: 0 20px 60px rgba(0,0,0,0.12);
  display: none;

  &.open {
    display: block;
  }

  h4 {
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-weight: 500;
    margin-bottom: 14px;
    color: var(--fg-muted);
    font-size: 10px;
    display: flex;
    justify-content: space-between;
  }

  .group {
    margin-bottom: 14px;
  }

  label {
    display: block;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--fg-faint);
    font-size: 9px;
    margin-bottom: 6px;
  }

  .opts {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }

  .opt {
    flex: 1;
    min-width: 0;
    padding: 7px 10px;
    border: 1px solid var(--rule);
    background: transparent;
    color: var(--fg);
    font: inherit;
    cursor: pointer;
    text-transform: uppercase;
    text-align: center;
    transition: background 0.15s, border-color 0.15s;

    &:hover {
      border-color: var(--fg);
    }

    &.active {
      background: var(--fg);
      color: var(--bg);
      border-color: var(--fg);
    }
  }
}
</style>
