<template>
  <article class="project-item">
    <a class="project-card" :href="`#project-${project.id}`" @click.prevent>
      <div class="project-thumbnail">
        <img
          v-if="project.thumbnail"
          :src="project.thumbnail"
          :alt="project.title"
          loading="lazy"
        />
        <div v-else class="project-thumbnail-placeholder" aria-hidden="true"></div>
      </div>

      <div class="project-meta">
        <span
          class="project-direction"
          :class="directionClass"
        >
          {{ project.direction }}
        </span>
        <span class="project-year">{{ project.year }}</span>
      </div>

      <div class="project-body">
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
        <ul class="project-tags">
          <li v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</li>
        </ul>
      </div>
    </a>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const directionClass = computed(() =>
  props.project.direction === 'HCI' ? 'project-direction--hci' : 'project-direction--architecture'
)
</script>

<style scoped>
.project-item {
  position: relative;
}

.project-card {
  display: block;
  text-decoration: none;
  color: inherit;
}

.project-thumbnail {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #f5f5f5;
  margin-bottom: clamp(16px, 1.6vw, 24px);
}

.project-thumbnail img,
.project-thumbnail-placeholder {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 260ms ease;
}

.project-thumbnail-placeholder {
  background: linear-gradient(135deg, #e8e8e8 0%, #f5f5f5 50%, #e8e8e8 100%);
}

.project-card:hover .project-thumbnail img,
.project-card:hover .project-thumbnail-placeholder,
.project-card:focus-visible .project-thumbnail img,
.project-card:focus-visible .project-thumbnail-placeholder {
  transform: scale(1.03);
}

.project-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.project-direction {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: clamp(11px, 0.82vw, 13px);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #fff;
}

.project-direction--hci {
  background: var(--blue);
}

.project-direction--architecture {
  background: var(--accent);
}

.project-year {
  font-size: clamp(13px, 0.95vw, 15px);
  font-weight: 900;
  color: var(--muted);
}

.project-title {
  margin: 0 0 10px;
  font-family: var(--display-font);
  font-size: clamp(18px, 1.45vw, 26px);
  font-weight: 900;
  line-height: 1.1;
  transition: color 180ms ease;
}

.project-card:hover .project-title,
.project-card:focus-visible .project-title {
  color: var(--hover-orange);
}

.project-description {
  margin: 0 0 14px;
  font-size: clamp(14px, 1vw, 17px);
  line-height: 1.5;
  color: #444;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.project-tag {
  font-size: clamp(11px, 0.82vw, 13px);
  font-weight: 700;
  color: var(--muted);
  padding: 3px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
