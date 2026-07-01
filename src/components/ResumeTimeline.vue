<template>
  <div class="timeline" aria-label="Education and experience timeline">
    <article
      v-for="item in items"
      :key="`${item.date}-${item.title}`"
      class="timeline-item"
      :class="{ muted: item.muted }"
      tabindex="0"
      @mouseenter="handleItemHover(item, $event)"
      @mouseleave="emit('item-leave')"
      @focus="handleItemHover(item, $event)"
      @blur="emit('item-leave')"
    >
      <div class="timeline-date">
        <strong>{{ item.date }}</strong>
        <span>{{ item.type }}</span>
      </div>
      <div class="timeline-detail">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </div>
    </article>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['item-hover', 'item-leave'])

function handleItemHover(item, event) {
  const timeline = event.currentTarget.closest('.timeline')
  const detail = timeline?.querySelector('.timeline-item .timeline-detail')
  const section = event.currentTarget.closest('.hero-section')
  const previewTop =
    detail && section
      ? detail.getBoundingClientRect().top - section.getBoundingClientRect().top
      : null

  emit('item-hover', { item, previewTop })
}
</script>
