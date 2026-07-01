<template>
  <div class="portrait-wrap" :aria-hidden="activeItem ? 'false' : 'true'">
    <transition name="experience-preview" mode="out-in">
      <aside
        v-if="activeItem"
        :key="`${activeItem.date}-${activeItem.title}`"
        class="experience-preview"
        :style="previewStyle"
      >
        <div class="experience-preview-meta">
          <span>{{ activeItem.date }}</span>
          <span>{{ activeItem.type }}</span>
        </div>
        <h3>{{ activeItem.title }}</h3>
        <p class="experience-preview-role">{{ activeItem.description }}</p>
        <p class="experience-preview-detail">{{ activeItem.detail }}</p>
      </aside>
    </transition>
    <img
      v-show="!activeItem"
      class="portrait-image"
      :src="portraitImage"
      alt=""
      decoding="async"
    >
  </div>
</template>

<script setup>
import { computed } from 'vue'
import portraitImage from '../assets/images/particle-portrait.png'

const props = defineProps({
  activeItem: {
    type: Object,
    default: null,
  },
  activePreviewTop: {
    type: Number,
    default: null,
  },
})

const previewStyle = computed(() => {
  if (props.activePreviewTop === null) {
    return null
  }

  return {
    top: `${props.activePreviewTop}px`,
  }
})
</script>
