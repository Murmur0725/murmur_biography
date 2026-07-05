<template>
  <section id="home" class="hero-section" aria-label="Resume home">
    <SectionAxis class="hero-axis" />

    <div class="hero-content">
      <HeroTitle />
      <ResumeTimeline
        :items="timelineItems"
        @item-hover="handleTimelineHover"
        @item-leave="clearTimelineHover"
      />
    </div>

    <ParticlePortrait
      :active-item="activeTimelineItem"
      :active-preview-top="activePreviewTop"
    />
  </section>
</template>

<script setup>
/*
 * HeroSection — 首页主区域（id="home"）
 * 功能：编排 HeroTitle（主副标题）、ResumeTimeline（经历时间轴）、
 *       ParticlePortrait（人像+粒子）、SectionAxis（左侧轴线），
 *       并协调时间轴悬停 → 详情卡显示的状态（仅桌面端 ≥981px 生效）
 * 数据：经历列表来自 src/data/timeline.js
 */
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ResumeTimeline from './ResumeTimeline.vue'
import ParticlePortrait from './ParticlePortrait.vue'
import HeroTitle from './HeroTitle.vue'
import SectionAxis from './SectionAxis.vue'
import { timelineItems } from '../data/timeline.js'

const previewMediaQuery = '(min-width: 981px)'
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
  --hero-content-left: clamp(60px, 3.5vw, 120px);
  --axis-left: clamp(32px, 3.5vw, 64px);
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
  --timeline-marker-center: calc((clamp(16px, 1.18vw, 22px) * 1.25 + clamp(15px, 1.08vw, 20px) * 1.35 + 6px) / 2);
  /* 悬停经历时整体右移距离：数值越大，block 越往右，横线越长 */
  --timeline-hover-shift: 18px;
  --timeline-line-left: calc(var(--axis-left) + var(--axis-width) - var(--hero-content-left));
  min-height: calc(100vh - var(--header-height));
  display: grid;
  grid-template-columns: minmax(560px, 0.98fr) minmax(470px, 1.02fr);
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
}

.hero-content {
  padding: var(--hero-content-top) 0 clamp(40px, 5vw, 80px) var(--hero-content-left);
  position: relative;
  z-index: 2;
}

@media (max-width: 980px) {
  .hero-section {
    --hero-content-left: 86px;
    --axis-left: 48px;
    --timeline-date-width: 104px;
    min-height: calc(100vh - 76px);
    grid-template-columns: 1fr;
  }

  .hero-content {
    padding: 72px 28px 360px var(--hero-content-left);
  }

  .hero-axis {
    --section-axis-top: 68px;
  }
}

@media (max-width: 620px) {
  .hero-section {
    --hero-content-left: 64px;
    --axis-left: 30px;
    --axis-width: 5px;
    --timeline-date-width: 84px;
    --timeline-dot-size: 16px;
  }

  .hero-content {
    padding: 52px 20px 330px var(--hero-content-left);
  }

  .hero-axis {
    --section-axis-cap-left: -9px;
    --section-axis-cap-width: 24px;
    --section-axis-cap-height: 120px;
  }
}
</style>
