<template>
  <section id="about" class="section-shell" aria-labelledby="about-title">
    <SectionAxis class="layout-axis" />

    <div class="section-inner">
      <div class="section-heading section-heading--compact">
        <h2 id="about-title">{{ t.about.title }}</h2>
      </div>

      <div class="about-body">
        <p class="about-bio">{{ about.bio }}</p>

        <div class="about-highlights">
          <div
            v-for="item in about.highlights"
            :key="item.label"
            class="about-highlight"
          >
            <span class="about-highlight-value">{{ item.value }}</span>
            <span class="about-highlight-label">{{ item.label }}</span>
          </div>
        </div>

        <ul class="about-skills">
          <li
            v-for="skill in about.skills"
            :key="skill"
            class="about-skill"
          >{{ skill }}</li>
        </ul>
      </div>

      <div class="about-columns section-content">
        <div class="about-subsection">
          <h3 class="about-subtitle">{{ t.about.awards }}</h3>
          <ul class="about-list">
            <li
              v-for="item in about.awards"
              :key="item.title"
              class="about-list-item"
            >
              <span class="about-list-year">{{ item.year }}</span>
              <span class="about-list-text">{{ item.title }}</span>
            </li>
          </ul>

          <div
            ref="track"
            class="certificate-scroller h-scroll-track"
            :class="{ 'is-dragging': dragging }"
            @scroll="updateScrollbar"
            @pointerdown="onPointerDown"
            @pointermove="onPointerMove"
            @pointerup="onPointerUp"
            @pointercancel="onPointerUp"
            @pointerleave="onPointerUp"
          >
            <figure
              v-for="cert in about.certificates"
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
          <div v-if="overflowing" class="certificate-scroll h-scroll-bar" aria-hidden="true">
            <span
              class="h-scroll-thumb"
              :style="{ width: thumbWidth, left: thumbLeft }"
              @pointerdown="onThumbDown"
              @pointermove="onThumbMove"
              @pointerup="onThumbUp"
              @pointercancel="onThumbUp"
            ></span>
          </div>
        </div>

        <div class="about-subsection">
          <h3 class="about-subtitle">{{ t.about.honors }}</h3>
          <ul class="about-list">
            <li
              v-for="item in about.honors"
              :key="`${item.year}-${item.title}`"
              class="about-list-item"
            >
              <span class="about-list-year">{{ item.year }}</span>
              <span class="about-list-text">{{ item.title }}</span>
            </li>
          </ul>
        </div>

        <div class="about-subsection">
          <h3 class="about-subtitle">{{ t.about.volunteer }}</h3>
          <ul class="about-list">
            <li
              v-for="item in about.volunteer"
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
import { useHorizontalScroll } from '../composables/useHorizontalScroll.js'
import { useI18n } from '../i18n/index.js'
import SectionAxis from './SectionAxis.vue'

const baseUrl = import.meta.env.BASE_URL
const { t, about } = useI18n()

const {
  track,
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
} = useHorizontalScroll()
</script>

<style scoped>
.about-body {
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

.about-subsection {
  margin-bottom: clamp(56px, 7vw, 96px);
}

.about-subsection:last-child {
  margin-bottom: 0;
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
  .about-body,
  .about-columns {
    grid-template-columns: 1fr;
    gap: 14px;
    padding-right: 0;
  }

  .about-body,
  .about-bio,
  .about-highlights,
  .about-skills {
    grid-column: auto;
  }

  .about-highlights {
    gap: 24px;
  }
}

.certificate-scroller {
  display: flex;
  gap: clamp(24px, 3vw, 40px);
  margin-top: clamp(36px, 4vw, 56px);
  padding: 4px 4px 12px;
  scroll-snap-type: x mandatory;
  max-width: var(--layout-content-width);
  width: 100%;
}

.certificate-scroll {
  max-width: var(--layout-content-width);
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
</style>
