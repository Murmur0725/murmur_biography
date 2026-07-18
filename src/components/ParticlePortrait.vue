<template>
  <div class="portrait-wrap" :aria-hidden="activeItem ? 'false' : 'true'">
    <ExperiencePreview
      :active-item="activeItem"
      :active-preview-top="activePreviewTop"
    />
    <div v-show="!activeItem" class="portrait-stage">
      <img
        class="portrait-image portrait-image-main"
        :src="portraitImage"
        alt=""
        decoding="async"
      >
      <img
        class="portrait-image portrait-image-hover"
        :src="hoverPortraitImage"
        alt=""
        decoding="async"
      >
      <img
        class="portrait-image portrait-image-burst portrait-image-burst-one"
        :src="portraitImage"
        alt=""
        decoding="async"
      >
      <img
        class="portrait-image portrait-image-burst portrait-image-burst-two"
        :src="portraitImage"
        alt=""
        decoding="async"
      >
      <div class="poem-overlay" aria-hidden="true">
        <p
          v-for="line in poemLines"
          :key="line"
          class="poem-line"
        >{{ line }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
/*
 * ParticlePortrait — 人像图 + 粒子爆裂动画
 * 功能：默认显示主人像；鼠标 hover 时切换到 hover 人像并触发
 *       粒子爆裂动画；有 activeItem 时改显示 ExperiencePreview 详情卡
 * 依赖：图片资源在 src/assets/images/，详情卡由 ExperiencePreview 提供
 */
import portraitImage from '../assets/images/particle-portrait.png'
import hoverPortraitImage from '../assets/images/portrait-hover.png'
import ExperiencePreview from './ExperiencePreview.vue'

defineProps({
  activeItem: {
    type: Object,
    default: null,
  },
  activePreviewTop: {
    type: Number,
    default: null,
  },
  poemLines: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped>
.portrait-wrap {
  position: relative;
  min-height: 100%;
  display: flex;
  align-items: flex-start;
}

.portrait-stage {
  position: absolute;
  right: clamp(-16px, -0.4vw, 8px);
  top: clamp(56px, 7vw, 112px);
  width: min(61vw, 794px);
  max-width: none;
  transform-origin: 52% 54%;
  isolation: isolate;
}

.portrait-image {
  display: block;
  width: 100%;
  height: auto;
  pointer-events: none;
  user-select: none;
  transform: scale(1);
  transform-origin: 52% 54%;
}

.portrait-image-burst {
  position: absolute;
  inset: 0;
}

.portrait-image-main {
  position: relative;
  z-index: 2;
  transition: opacity 620ms ease, transform 620ms ease, filter 620ms ease;
}

.portrait-image-hover {
  position: absolute;
  inset: 0;
  z-index: 3;
  opacity: 0;
  transform: scale(0.92) translateY(-6px);
  transition: opacity 620ms ease, transform 620ms ease, filter 620ms ease;
}

.portrait-image-burst {
  opacity: 0;
  z-index: 1;
  mix-blend-mode: multiply;
  filter: grayscale(1) brightness(0.78) contrast(1.08) blur(1.4px);
}

.portrait-stage:hover .portrait-image-main {
  opacity: 0.22;
  filter: contrast(1.04) blur(0.6px);
  transform: scale(1);
}

.portrait-stage:hover .portrait-image-hover {
  opacity: 0.78;
  filter: contrast(1.02);
  transform: scale(0.92) translateY(-6px);
}

.portrait-stage:hover .portrait-image-burst-one {
  animation: particle-burst 1600ms linear infinite;
}

.portrait-stage:hover .portrait-image-burst-two {
  animation: particle-burst 1600ms linear -800ms infinite;
}

/* 悬停时显现的诗句层：宽度与导航列（About 左 → Gallery 右）对齐 */
.poem-overlay {
  position: absolute;
  right: var(--header-padding-right);
  top: 50%;
  transform: translateY(-50%);
  width: var(--header-nav-width);
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(6px, 0.9vw, 12px);
  padding: clamp(20px, 4vw, 48px) 0;
  text-align: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity 520ms ease 120ms;
}

.poem-line {
  margin: 0;
  font-family: var(--display-font);
  font-size: clamp(13px, 1.5vw, 22px);
  font-style: italic;
  line-height: 1.3;
  color: #fff;
  text-shadow: 0 1px 12px rgba(242, 138, 46, 0.9);
  letter-spacing: 0.02em;
}

.portrait-stage:hover .poem-overlay {
  opacity: 1;
}

@keyframes particle-burst {
  0% {
    opacity: 0;
    transform: scale(1);
  }

  18% {
    opacity: 0.24;
  }

  52% {
    opacity: 0.14;
  }

  100% {
    opacity: 0;
    transform: scale(1.22);
  }
}

@media (max-width: 980px) {
  .portrait-wrap {
    display: none;
  }
}
</style>
