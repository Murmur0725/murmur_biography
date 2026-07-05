<template>
  <section id="projects" class="projects-section" aria-labelledby="projects-title">
    <SectionAxis class="projects-axis" />

    <div class="projects-inner">
      <div class="projects-heading">
        <h2 id="projects-title">Projects</h2>
      </div>

      <div class="projects-categories">
        <!-- Product track -->
        <div class="project-category">
          <h3 class="category-title">HCI Systems & User Research</h3>
          <div
            ref="hciTrack"
            class="project-track"
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
          <div v-if="overflowing.hci" class="project-scroll" aria-hidden="true">
            <span
              class="project-scroll-thumb"
              :style="{ width: thumbWidth.hci, left: thumbLeft.hci }"
              @pointerdown="onThumbDown($event, 'hci')"
              @pointermove="onThumbMove($event, 'hci')"
              @pointerup="onThumbUp"
              @pointercancel="onThumbUp"
            ></span>
          </div>
        </div>

        <!-- AI Agent track -->
        <div class="project-category">
          <h3 class="category-title">AI Agent & Embodied Intelligence</h3>
          <div
            ref="aiTrack"
            class="project-track"
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
          <div v-if="overflowing.ai" class="project-scroll" aria-hidden="true">
            <span
              class="project-scroll-thumb"
              :style="{ width: thumbWidth.ai, left: thumbLeft.ai }"
              @pointerdown="onThumbDown($event, 'ai')"
              @pointermove="onThumbMove($event, 'ai')"
              @pointerup="onThumbUp"
              @pointercancel="onThumbUp"
            ></span>
          </div>
        </div>

        <!-- Architecture track -->
        <div class="project-category">
          <h3 class="category-title">Architecture</h3>
          <div
            ref="archTrack"
            class="project-track"
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
          <div v-if="overflowing.arch" class="project-scroll" aria-hidden="true">
            <span
              class="project-scroll-thumb"
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
 * 功能：分 Product / Architecture 两个横向滚动区域展示项目卡片
 *       带自定义滚动条（与 Gallery 保持一致）
 * 数据：项目列表来自 src/data/projects.js
 */
import { computed, ref, reactive, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { projects } from '../data/projects.js'
import SectionAxis from './SectionAxis.vue'
import ProjectItem from './ProjectItem.vue'

const aiProjects = computed(() => projects.filter((p) => p.direction === 'AI Agent'))
const hciProjects = computed(() => projects.filter((p) => p.direction === 'HCI'))
const architectureProjects = computed(() =>
  projects.filter((p) => p.direction === 'Architecture')
)

// ── Track refs ──
const aiTrack = ref(null)
const hciTrack = ref(null)
const archTrack = ref(null)
const tracks = computed(() => ({ ai: aiTrack.value, hci: hciTrack.value, arch: archTrack.value }))

// ── 轨道拖拽 ──
const dragging = reactive({ track: null })
let dragEl = null
let startX = 0
let startScroll = 0

function onPointerDown(event, key) {
  const el = tracks.value[key]
  if (!el) return
  dragEl = el
  dragging.track = key
  startX = event.clientX
  startScroll = el.scrollLeft
  el.setPointerCapture?.(event.pointerId)
}

function onPointerMove(event, key) {
  if (!dragEl || dragging.track !== key) return
  dragEl.scrollLeft = startScroll - (event.clientX - startX)
}

function onPointerUp() {
  dragEl = null
  dragging.track = null
}

// ── 自定义滚动条 ──
const overflowing = reactive({ ai: false, hci: false, arch: false })
const thumbWidth = reactive({ ai: '0%', hci: '0%', arch: '0%' })
const thumbLeft = reactive({ ai: '0%', hci: '0%', arch: '0%' })

function updateScrollbar(key) {
  const el = tracks.value[key]
  if (!el) return
  const { scrollWidth, clientWidth, scrollLeft } = el
  overflowing[key] = scrollWidth - clientWidth > 1
  if (!overflowing[key]) return
  thumbWidth[key] = `${(clientWidth / scrollWidth) * 100}%`
  thumbLeft[key] = `${(scrollLeft / scrollWidth) * 100}%`
}

// 拖拽底部滑块
const thumbDrag = reactive({ key: null })
let thumbStartX2 = 0
let thumbStartScroll2 = 0

function onThumbDown(event, key) {
  const el = tracks.value[key]
  if (!el) return
  thumbDrag.key = key
  thumbStartX2 = event.clientX
  thumbStartScroll2 = el.scrollLeft
  event.target.setPointerCapture?.(event.pointerId)
  event.stopPropagation()
}

function onThumbMove(event, key) {
  if (thumbDrag.key !== key) return
  const el = tracks.value[key]
  const ratio = el.scrollWidth / el.clientWidth
  el.scrollLeft = thumbStartScroll2 + (event.clientX - thumbStartX2) * ratio
}

function onThumbUp() {
  thumbDrag.key = null
}

function updateAllScrollbars() {
  updateScrollbar('ai')
  updateScrollbar('hci')
  updateScrollbar('arch')
}

onMounted(async () => {
  await nextTick()
  updateAllScrollbars()
  window.addEventListener('resize', updateAllScrollbars)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateAllScrollbars)
})
</script>

<style scoped>
.projects-section {
  min-height: 100vh;
  background: var(--paper);
  color: var(--ink);
  padding: var(--layout-top) 0 clamp(80px, 9vw, 132px);
  position: relative;
}

.projects-axis {
  --section-axis-left: calc((100vw - min(100vw, var(--layout-frame-width))) / 2 + var(--layout-axis-left));
  --section-axis-top: 0;
  --section-axis-width: 6px;
  --section-axis-cap-height: var(--layout-axis-thick-height);
  --section-axis-cap-top: var(--layout-top);
}

.projects-inner {
  width: min(var(--layout-frame-width), 100%);
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.projects-heading {
  display: grid;
  grid-template-columns:
    var(--layout-content-start)
    minmax(0, 1fr);
  gap: 0;
  align-items: end;
  padding-right: var(--layout-content-right);
  margin-bottom: clamp(64px, 9vw, 128px);
}

.projects-heading h2 {
  grid-column: 2;
  width: var(--layout-content-width);
  max-width: 100%;
  margin: 0;
  font-family: var(--display-font);
  font-size: clamp(30px, 5.2vw, 58px);
  line-height: 0.95;
  text-transform: uppercase;
}

.projects-categories {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(56px, 8vw, 96px);
  padding-left: var(--layout-content-start);
  padding-right: var(--layout-content-right);
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
  overflow-x: auto;
  padding-bottom: 24px;
  scrollbar-width: none;
  cursor: grab;
}

.project-track.is-dragging {
  cursor: grabbing;
  user-select: none;
}

.project-track::-webkit-scrollbar {
  display: none;
}

.project-track :deep(.project-item) {
  flex: 0 0 auto;
  width: clamp(300px, 30vw, 420px);
}

/* ── 自定义滚动条（与 Gallery 一致）── */
.project-scroll {
  position: relative;
  margin-top: 4px;
  width: 100%;
  height: 4px;
  border-radius: 999px;
  background: #e6e6e6;
}

.project-scroll-thumb {
  position: absolute;
  top: 0;
  height: 100%;
  min-width: 28px;
  border-radius: 999px;
  background: #000;
  cursor: grab;
  touch-action: none;
}

.project-scroll-thumb:active {
  cursor: grabbing;
}

@media (max-width: 760px) {
  .projects-section {
    padding: 56px 22px 72px;
  }

  .projects-heading {
    grid-template-columns: 1fr;
    gap: 14px;
    padding-right: 0;
    margin-bottom: 40px;
  }

  .projects-heading h2 {
    grid-column: auto;
    justify-self: start;
  }

  .projects-categories {
    padding-left: 0;
    padding-right: 0;
    gap: 48px;
  }

  .project-track :deep(.project-item) {
    width: 280px;
  }
}
</style>
