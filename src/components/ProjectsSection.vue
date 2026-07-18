<template>
  <section id="projects" class="section-shell" aria-labelledby="projects-title">
    <SectionAxis class="layout-axis" />

    <div class="section-inner">
      <div class="section-heading">
        <h2 id="projects-title">{{ t.projects.title }}</h2>
      </div>

      <div class="projects-categories section-content">
        <div class="project-category">
          <h3 class="category-title">{{ t.projects.categories['HCI DESIGN'] }}</h3>
          <div
            :ref="trackRefs.hci"
            class="project-track h-scroll-track"
            :class="{ 'is-dragging': dragging.track === 'hci' }"
            @scroll="updateScrollbar('hci')"
            @pointerdown="onPointerDown($event, 'hci')"
            @pointermove="onPointerMove($event, 'hci')"
            @pointerup="onPointerUp"
            @pointercancel="onPointerUp"
            @pointerleave="onPointerUp"
          >
            <ProjectItem
              v-for="project in hciProjects"
              :key="project.id"
              :project="project"
            />
          </div>
          <div v-if="overflowing.hci" class="h-scroll-bar" aria-hidden="true">
            <span
              class="h-scroll-thumb"
              :style="{ width: thumbWidth.hci, left: thumbLeft.hci }"
              @pointerdown="onThumbDown($event, 'hci')"
              @pointermove="onThumbMove($event, 'hci')"
              @pointerup="onThumbUp"
              @pointercancel="onThumbUp"
            ></span>
          </div>
        </div>

        <div class="project-category">
          <h3 class="category-title">{{ t.projects.categories['AI Systems'] }}</h3>
          <div
            :ref="trackRefs.ai"
            class="project-track h-scroll-track"
            :class="{ 'is-dragging': dragging.track === 'ai' }"
            @scroll="updateScrollbar('ai')"
            @pointerdown="onPointerDown($event, 'ai')"
            @pointermove="onPointerMove($event, 'ai')"
            @pointerup="onPointerUp"
            @pointercancel="onPointerUp"
            @pointerleave="onPointerUp"
          >
            <ProjectItem
              v-for="project in aiProjects"
              :key="project.id"
              :project="project"
            />
          </div>
          <div v-if="overflowing.ai" class="h-scroll-bar" aria-hidden="true">
            <span
              class="h-scroll-thumb"
              :style="{ width: thumbWidth.ai, left: thumbLeft.ai }"
              @pointerdown="onThumbDown($event, 'ai')"
              @pointermove="onThumbMove($event, 'ai')"
              @pointerup="onThumbUp"
              @pointercancel="onThumbUp"
            ></span>
          </div>
        </div>

        <div class="project-category">
          <h3 class="category-title">{{ t.projects.categories.Architecture }}</h3>
          <div
            :ref="trackRefs.arch"
            class="project-track h-scroll-track"
            :class="{ 'is-dragging': dragging.track === 'arch' }"
            @scroll="updateScrollbar('arch')"
            @pointerdown="onPointerDown($event, 'arch')"
            @pointermove="onPointerMove($event, 'arch')"
            @pointerup="onPointerUp"
            @pointercancel="onPointerUp"
            @pointerleave="onPointerUp"
          >
            <ProjectItem
              v-for="project in architectureProjects"
              :key="project.id"
              :project="project"
            />
          </div>
          <div v-if="overflowing.arch" class="h-scroll-bar" aria-hidden="true">
            <span
              class="h-scroll-thumb"
              :style="{ width: thumbWidth.arch, left: thumbLeft.arch }"
              @pointerdown="onThumbDown($event, 'arch')"
              @pointermove="onThumbMove($event, 'arch')"
              @pointerup="onThumbUp"
              @pointercancel="onThumbUp"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/*
 * ProjectsSection — 作品集主界面
 * 功能：分 HCI / AI / Architecture 三个横向滚动区域展示项目卡片
 * 数据：项目列表来自 src/data/projects.js
 */
import { useHorizontalScrollGroup } from '../composables/useHorizontalScroll.js'
import { useI18n } from '../i18n/index.js'
import SectionAxis from './SectionAxis.vue'
import ProjectItem from './ProjectItem.vue'

const { t, hciProjects, aiProjects, architectureProjects } = useI18n()

const {
  trackRefs,
  dragging,
  overflowing,
  thumbWidth,
  thumbLeft,
  updateScrollbar,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onThumbDown,
  onThumbMove,
  onThumbUp,
} = useHorizontalScrollGroup(['hci', 'ai', 'arch'])
</script>

<style scoped>
.projects-categories {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(56px, 8vw, 96px);
}

.project-category {
  min-width: 0;
}

.category-title {
  margin: 0 0 clamp(24px, 3vw, 40px);
  font-family: var(--display-font);
  font-size: clamp(22px, 2.6vw, 36px);
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
}

.project-track {
  display: flex;
  gap: clamp(24px, 3vw, 40px);
  padding-bottom: 24px;
}

.project-track :deep(.project-item) {
  flex: 0 0 auto;
  width: clamp(300px, 30vw, 420px);
}

@media (max-width: 760px) {
  .section-heading {
    margin-bottom: 40px;
  }

  .projects-categories {
    gap: 48px;
  }

  .project-track :deep(.project-item) {
    width: 280px;
  }
}
</style>
