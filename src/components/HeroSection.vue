<template>
  <section id="home" class="hero-section" :aria-label="t.hero.sectionAria">
    <SectionAxis class="hero-axis" />

    <div class="hero-content">
      <HeroTitle :title="t.hero.title" :role="t.hero.role" />
      <ResumeTimeline
        :items="timelineItems"
        :aria-label="t.hero.timelineAria"
        @item-hover="handleTimelineHover"
        @item-leave="clearTimelineHover"
      />
    </div>

    <ParticlePortrait
      :active-item="activeTimelineItem"
      :active-preview-top="activePreviewTop"
      :poem-lines="poemLines"
    />
  </section>
</template>

<script setup>
/*
 * HeroSection — 首页主区域（id="home"）
 */
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ResumeTimeline from './ResumeTimeline.vue'
import ParticlePortrait from './ParticlePortrait.vue'
import HeroTitle from './HeroTitle.vue'
import SectionAxis from './SectionAxis.vue'
import { useI18n } from '../i18n/index.js'
import { messages } from '../i18n/messages.js'

const { t, timelineItems } = useI18n()
/** 人像悬停诗句固定英文，不随语言切换 */
const poemLines = messages.en.poem

const previewMediaQuery = '(min-width: 1150px)'
const activeTimelineItem = ref(null)
const activePreviewTop = ref(null)
let previewMatcher = null

function canShowExperiencePreview() {
  return typeof window !== 'undefined' && window.matchMedia(previewMediaQuery).matches
}

function handleTimelineHover({ item, previewTop }) {
  if (!canShowExperiencePreview()) {
    clearTimelineHover()
    return
  }

  activeTimelineItem.value = item
  activePreviewTop.value = previewTop
}

function clearTimelineHover() {
  activeTimelineItem.value = null
  activePreviewTop.value = null
}

function handlePreviewBreakpointChange(event) {
  if (!event.matches) {
    clearTimelineHover()
  }
}

onMounted(() => {
  previewMatcher = window.matchMedia(previewMediaQuery)
  previewMatcher.addEventListener('change', handlePreviewBreakpointChange)
})

onBeforeUnmount(() => {
  previewMatcher?.removeEventListener('change', handlePreviewBreakpointChange)
})
</script>

<style scoped>
.hero-section {
  --hero-content-left: var(--layout-content-left);
  --axis-left: var(--layout-axis-left);
  --axis-width: 6px;
  --timeline-date-width: 124px;
  --timeline-detail-padding: 24px;
  /* 主副标题和经历文字左对齐：由时间列宽度 + 经历文字左边距自动计算 */
  --hero-title-offset: calc(var(--timeline-date-width) + var(--timeline-detail-padding));
  --hero-content-top: clamp(56px, 7vw, 112px);
  /* 主副标题上移距离：数值越大，MURMUR 和 designer 那行越往上 */
  --hero-title-lift: clamp(48px, 1.6vw, 76px);
  /* 粗时间轴和主副标题顶部对齐：会跟随主副标题上移距离自动调整 */
  --axis-top: calc(var(--hero-content-top) - var(--hero-title-lift));
  /* 粗时间轴长度：和 MURMUR + designer 这组主副标题的高度保持接近 */
  --axis-thick-height: clamp(88px, 7.1vw, 104px);
  /* 经历列表整体上移距离：数值越大，经历越靠上 */
  --timeline-lift: 36px;
  /* 每一段经历之间的间距：数值越大，每段之间越松 */
  --timeline-gap: 26px;
  /* 时间轴横线粗细：数值越小，横线越细 */
  --timeline-line-height: 2px;
  /* 时间轴端头圆点大小：数值越小，圆点越小 */
  --timeline-dot-size: 14px;
  --timeline-marker-center: calc((clamp(16px, 1.18vw, 22px) * 1.25 + clamp(15px, 1.08vw, 20px) * 1.35 + 12px) / 2);
  /* 悬停经历时整体右移距离：数值越大，block 越往右，横线越长 */
  --timeline-hover-shift: 18px;
  --timeline-line-left: calc(var(--axis-left) + var(--axis-width) - var(--hero-content-left));
  min-height: calc(100vh - var(--header-height));
  display: grid;
  grid-template-columns: minmax(0, 0.98fr) minmax(0, 1.02fr);
  width: min(100%, 1500px);
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

/* 把 hero-section 的轴线变量映射给 SectionAxis */
.hero-axis {
  --section-axis-left: var(--axis-left);
  --section-axis-top: var(--axis-top);
  --section-axis-width: var(--axis-width);
  --section-axis-cap-height: var(--axis-thick-height);
  /* cap 相对细轴线定位：默认 -12px / 30px，让粗块居中压在细线上 */
}

.hero-content {
  padding: var(--hero-content-top) 0 clamp(40px, 5vw, 80px) var(--hero-content-left);
  position: relative;
  z-index: 2;
  min-width: 0;
}

@media (max-width: 980px) {
  .hero-section {
    /* 轴线/左缘继续用 --layout-*，与 About 等 section 保持同一条竖线 */
    --timeline-date-width: 104px;
    --hero-title-offset: calc(var(--timeline-date-width) + var(--timeline-detail-padding));
    min-height: calc(100vh - 76px);
    grid-template-columns: 1fr;
  }

  .hero-content {
    padding: 72px var(--layout-content-right) clamp(40px, 5vw, 80px) var(--hero-content-left);
  }

  .hero-axis {
    --section-axis-top: 68px;
  }
}

@media (max-width: 760px) {
  .hero-section {
    --timeline-date-width: 84px;
    --timeline-detail-padding: 14px;
    --hero-title-offset: calc(var(--timeline-date-width) + var(--timeline-detail-padding));
    --axis-width: 5px;
    --timeline-dot-size: 12px;
    --axis-thick-height: 100px;
    /* 字变小后减少上移，并加大顶部留白 */
    --hero-title-lift: 8px;
    --hero-content-top: 72px;
    /* 减小经历上移，拉开与名字的间距 */
    --timeline-lift: 8px;
  }

  .hero-content {
    padding: var(--hero-content-top) var(--layout-content-right) clamp(40px, 5vw, 80px) var(--hero-content-left);
  }

  .hero-axis {
    --section-axis-top: calc(var(--hero-content-top) - var(--hero-title-lift));
    --section-axis-cap-left: -9px;
    --section-axis-cap-width: 24px;
  }
}
</style>
