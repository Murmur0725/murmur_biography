<template>
  <section id="about" class="about-section" aria-labelledby="about-title">
    <SectionAxis class="about-axis" />

    <div class="about-inner">
      <div class="about-heading">
        <h2 id="about-title">About</h2>
      </div>

      <div class="about-body">
        <p class="about-bio">{{ bio }}</p>

        <div class="about-highlights">
          <div
            v-for="item in highlights"
            :key="item.label"
            class="about-highlight"
          >
            <span class="about-highlight-value">{{ item.value }}</span>
            <span class="about-highlight-label">{{ item.label }}</span>
          </div>
        </div>

        <ul class="about-skills">
          <li
            v-for="skill in skills"
            :key="skill"
            class="about-skill"
          >{{ skill }}</li>
        </ul>
      </div>

      <div class="about-columns">
        <div class="about-subsection">
          <h3 class="about-subtitle">Awards</h3>
          <ul class="about-list">
            <li
              v-for="item in awards"
              :key="item.title"
              class="about-list-item"
            >
              <span class="about-list-year">{{ item.year }}</span>
              <span class="about-list-text">{{ item.title }}</span>
            </li>
          </ul>

          <div
            ref="certificateTrack"
            class="certificate-scroller"
            :class="{ 'is-dragging': certificateDragging }"
            @scroll="updateCertificateScrollbar"
            @pointerdown="onCertificatePointerDown"
            @pointermove="onCertificatePointerMove"
            @pointerup="onCertificatePointerUp"
            @pointercancel="onCertificatePointerUp"
            @pointerleave="onCertificatePointerUp"
          >
            <figure
              v-for="cert in certificates"
              :key="cert.src"
              class="certificate-card"
            >
              <img
                :src="`${baseUrl}${cert.src}`"
                :alt="cert.alt"
                loading="lazy"
                decoding="async"
                draggable="false"
              >
            </figure>
          </div>
          <div v-if="certificateOverflowing" class="certificate-scroll" aria-hidden="true">
            <span
              class="certificate-scroll-thumb"
              :style="{ width: certificateThumbWidth, left: certificateThumbLeft }"
              @pointerdown="onCertificateThumbDown"
              @pointermove="onCertificateThumbMove"
              @pointerup="onCertificateThumbUp"
              @pointercancel="onCertificateThumbUp"
            ></span>
          </div>
        </div>

        <div class="about-subsection">
          <h3 class="about-subtitle">Honors</h3>
          <ul class="about-list">
            <li
              v-for="item in honors"
              :key="`${item.year}-${item.title}`"
              class="about-list-item"
            >
              <span class="about-list-year">{{ item.year }}</span>
              <span class="about-list-text">{{ item.title }}</span>
            </li>
          </ul>
        </div>

        <div class="about-subsection">
          <h3 class="about-subtitle">Volunteer</h3>
          <ul class="about-list">
            <li
              v-for="item in volunteer"
              :key="item.title"
              class="about-list-item"
            >
              <span class="about-list-year">{{ item.year }}</span>
              <span class="about-list-text">{{ item.title }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/*
 * AboutSection — 自我介绍区（id="about"）
 * 功能：编排 SectionAxis（左侧轴线）、标题、bio、亮点数据、技能 tags、
 *       获奖荣誉列表、志愿服务列表
 * 数据：全部来自 src/data/about.js
 */
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { bio, highlights, skills, awards, honors, volunteer, certificates } from '../data/about.js'
import SectionAxis from './SectionAxis.vue'

const baseUrl = import.meta.env.BASE_URL
const certificateTrack = ref(null)
const certificateDragging = ref(false)
const certificateOverflowing = ref(false)
const certificateThumbWidth = ref('0%')
const certificateThumbLeft = ref('0%')

let certificateDragStartX = 0
let certificateDragStartScroll = 0
let certificateThumbDragging = false
let certificateThumbStartX = 0
let certificateThumbStartScroll = 0

function updateCertificateScrollbar() {
  const el = certificateTrack.value
  if (!el) return

  const { scrollWidth, clientWidth, scrollLeft } = el
  certificateOverflowing.value = scrollWidth - clientWidth > 1
  if (!certificateOverflowing.value) return

  certificateThumbWidth.value = `${(clientWidth / scrollWidth) * 100}%`
  certificateThumbLeft.value = `${(scrollLeft / scrollWidth) * 100}%`
}

function onCertificatePointerDown(event) {
  const el = certificateTrack.value
  if (!el) return

  certificateDragging.value = true
  certificateDragStartX = event.clientX
  certificateDragStartScroll = el.scrollLeft
  el.setPointerCapture?.(event.pointerId)
}

function onCertificatePointerMove(event) {
  const el = certificateTrack.value
  if (!el || !certificateDragging.value) return

  el.scrollLeft = certificateDragStartScroll - (event.clientX - certificateDragStartX)
}

function onCertificatePointerUp() {
  certificateDragging.value = false
}

function onCertificateThumbDown(event) {
  const el = certificateTrack.value
  if (!el) return

  certificateThumbDragging = true
  certificateThumbStartX = event.clientX
  certificateThumbStartScroll = el.scrollLeft
  event.target.setPointerCapture?.(event.pointerId)
  event.stopPropagation()
}

function onCertificateThumbMove(event) {
  const el = certificateTrack.value
  if (!el || !certificateThumbDragging) return

  const ratio = el.scrollWidth / el.clientWidth
  el.scrollLeft = certificateThumbStartScroll + (event.clientX - certificateThumbStartX) * ratio
}

function onCertificateThumbUp() {
  certificateThumbDragging = false
}

onMounted(async () => {
  await nextTick()
  updateCertificateScrollbar()
  window.addEventListener('resize', updateCertificateScrollbar)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateCertificateScrollbar)
})
</script>

<style scoped>
.about-section {
  min-height: 100vh;
  background: var(--paper);
  color: var(--ink);
  padding: var(--layout-top) 0 clamp(80px, 9vw, 132px);
  position: relative;
}

.about-axis {
  --section-axis-left: calc((100vw - min(100vw, var(--layout-frame-width))) / 2 + var(--layout-axis-left));
  --section-axis-top: 0;
  --section-axis-width: 6px;
  --section-axis-cap-height: var(--layout-axis-thick-height);
  --section-axis-cap-top: var(--layout-top);
}

.about-inner {
  width: min(var(--layout-frame-width), 100%);
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.about-heading {
  display: grid;
  grid-template-columns:
    var(--layout-content-start)
    minmax(0, 1fr);
  gap: 0;
  align-items: end;
  padding-right: var(--layout-content-right);
  margin-bottom: clamp(36px, 5vw, 64px);
}

.about-heading h2 {
  grid-column: 2;
  width: var(--layout-content-width);
  max-width: 100%;
  margin: 0;
  font-family: var(--display-font);
  font-size: clamp(30px, 5.2vw, 58px);
  line-height: 0.95;
  text-transform: uppercase;
}

.about-body {
  grid-column: 2;
  display: grid;
  grid-template-columns:
    var(--layout-content-start)
    minmax(0, 1fr);
  gap: 0;
  padding-right: var(--layout-content-right);
  margin-bottom: clamp(48px, 6vw, 88px);
}

.about-bio {
  grid-column: 2;
  margin: 0 0 clamp(28px, 3vw, 40px) 0;
  max-width: var(--layout-content-width);
  font-size: clamp(15px, 1.08vw, 19px);
  line-height: 1.6;
  color: #333;
  text-align: justify;
  text-align-last: left;
}

.about-highlights {
  grid-column: 2;
  display: flex;
  flex-wrap: wrap;
  gap: clamp(64px, 9vw, 128px);
  margin-bottom: clamp(28px, 3vw, 40px);
}

.about-highlight {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.about-highlight-value {
  font-family: var(--display-font);
  font-size: clamp(40px, 4.8vw, 72px);
  font-weight: 900;
  line-height: 1;
}

.about-highlight-label {
  font-size: clamp(13px, 1vw, 17px);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--muted);
}

.about-skills {
  grid-column: 2;
  display: flex;
  flex-wrap: wrap;
  gap: clamp(12px, 1.4vw, 20px);
  margin: 0;
  padding: 0;
  list-style: none;
  max-width: var(--layout-content-width);
}

.about-skill {
  padding: 6px 14px;
  border: 1.5px solid #000;
  border-radius: 999px;
  font-size: clamp(12px, 0.9vw, 15px);
  font-weight: 900;
  white-space: nowrap;
}

.about-columns {
  padding-left: var(--layout-content-start);
  padding-right: var(--layout-content-right);
}

.about-subsection {
  margin-bottom: clamp(56px, 7vw, 96px);
}

.about-subsection:last-child {
  margin-bottom: 0;
}

.about-subsection,
.about-subsection:last-child {
  grid-column: auto;
}

.about-subtitle {
  margin: 0 0 clamp(32px, 3.5vw, 48px);
  padding-bottom: clamp(20px, 2.4vw, 32px);
  border-bottom: 2px solid #000;
  max-width: var(--layout-content-width);
  font-family: var(--display-font);
  font-size: clamp(18px, 1.5vw, 24px);
  font-weight: 900;
  text-transform: uppercase;
}

.about-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: clamp(6px, 0.8vw, 12px);
  max-width: var(--layout-content-width);
}

.about-list-item {
  display: grid;
  grid-template-columns: clamp(92px, 7vw, 124px) minmax(0, 1fr);
  gap: 14px;
  align-items: start;
  padding-top: clamp(12px, 1.4vw, 18px);
}

.about-list-year {
  font-size: clamp(16px, 1.18vw, 22px);
  font-weight: 900;
  line-height: 1.25;
  color: var(--muted);
  white-space: nowrap;
}

.about-list-text {
  margin: 0;
  font-size: clamp(16px, 1.18vw, 22px);
  font-weight: 900;
  line-height: 1.25;
}

@media (max-width: 760px) {
  .about-section {
    padding: 56px 22px 72px;
  }

  .about-heading,
  .about-body,
  .about-columns {
    grid-template-columns: 1fr;
    gap: 14px;
    padding-right: 0;
  }

  .about-heading h2 {
    grid-column: auto;
    justify-self: start;
  }

  .about-body,
  .about-bio,
  .about-highlights,
  .about-skills {
    grid-column: auto;
  }

  .about-subsection,
  .about-subsection:last-child {
    grid-column: auto;
  }

  .about-columns {
    padding-left: 0;
    padding-right: 0;
  }

  .about-highlights {
    gap: 24px;
  }
}

/* ── 证书横向滚动（直接在 Awards 下方）── */
.certificate-scroller {
  display: flex;
  gap: clamp(24px, 3vw, 40px);
  overflow-x: auto;
  margin-top: clamp(36px, 4vw, 56px);
  padding: 4px 4px 12px;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  max-width: var(--layout-content-width);
  width: 100%;
  cursor: grab;
}

.certificate-scroller.is-dragging {
  cursor: grabbing;
  user-select: none;
}

.certificate-scroller::-webkit-scrollbar {
  display: none;
}

.certificate-scroll {
  position: relative;
  margin-top: 4px;
  width: 100%;
  max-width: var(--layout-content-width);
  height: 4px;
  border-radius: 999px;
  background: #e6e6e6;
}

.certificate-scroll-thumb {
  position: absolute;
  top: 0;
  height: 100%;
  min-width: 28px;
  border-radius: 999px;
  background: #000;
  cursor: grab;
  touch-action: none;
}

.certificate-scroll-thumb:active {
  cursor: grabbing;
}

.certificate-card {
  flex: 0 0 auto;
  height: clamp(180px, 17vw, 250px);
  margin: 0;
  scroll-snap-align: start;
}

.certificate-card img {
  display: block;
  width: auto;
  height: 100%;
  filter: grayscale(1);
  transition: transform 200ms ease;
}

.certificate-card:hover img {
  transform: scale(1.03);
}

@media (max-width: 760px) {
  .about-certificates {
    padding-left: 0;
  }
}
</style>
