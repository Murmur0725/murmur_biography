<template>
  <article class="project-item">
    <a class="project-card" :href="`#project-${project.id}`" @click.prevent>
      <div class="project-thumbnail">
        <img
          v-if="project.thumbnail"
          :src="`${baseUrl}${project.thumbnail}`"
          :alt="project.title"
          loading="lazy"
          draggable="false"
        />
        <div v-else class="project-thumbnail-placeholder" aria-hidden="true"></div>
      </div>

      <div class="project-meta">
        <h3 class="project-title">{{ project.title }}</h3>
        <span class="project-year">{{ project.year }}</span>
      </div>

      <div class="project-body">
        <p class="project-description">{{ project.description }}</p>
        <div class="project-footer">
          <span
            class="project-direction"
            :class="typeClass"
          >
            {{ project.type }}
          </span>
          <span class="project-learn-more">Learn More →</span>
        </div>
      </div>
    </a>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const baseUrl = import.meta.env.BASE_URL

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const typeClass = computed(() =>
  props.project.type === 'Research' ? 'project-direction--research' : 'project-direction--design'
)
</script>

<style scoped>
.project-item {
  position: relative;
}

.project-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  height: 100%;
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

/* ── 标题 + 年份同行 ── */
.project-meta {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
}

.project-title {
  margin: 0;
  font-size: clamp(16px, 1.18vw, 22px);
  font-weight: 900;
  line-height: 1.25;
}

.project-year {
  flex: 0 0 auto;
  font-size: clamp(13px, 0.95vw, 15px);
  font-weight: 900;
  color: var(--muted);
}

/* ── Tag + Learn More 末行 ── */
.project-body {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}

.project-footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  padding-top: clamp(12px, 1.2vw, 16px);
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

.project-direction--design {
  background: var(--blue);
}

.project-direction--research {
  background: var(--accent);
}

.project-description {
  margin: 0;
  font-size: clamp(14px, 1vw, 17px);
  line-height: 1.5;
  color: #444;
  text-align: justify;
  text-align-last: left;
}

/* ── Learn More ── */
.project-learn-more {
  font-size: clamp(12px, 0.82vw, 14px);
  font-weight: 900;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  transition: color 180ms ease;
}

.project-card:hover .project-learn-more,
.project-card:focus-visible .project-learn-more {
  color: var(--hover-orange);
}
</style>
