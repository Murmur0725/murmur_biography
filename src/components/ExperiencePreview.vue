<template>
  <transition name="experience-preview" mode="out-in">
    <aside
      v-if="activeItem"
      :key="`${activeItem.date}-${activeItem.title}`"
      class="experience-preview"
      :style="previewStyle"
    >
      <div class="experience-preview-meta">
        <span>{{ activeItem.date }}</span>
        <span>{{ activeItem.type }}</span>
      </div>
      <h3>{{ activeItem.title }}</h3>
      <p class="experience-preview-role">{{ activeItem.description }}</p>
      <p class="experience-preview-detail">{{ activeItem.detail }}</p>
    </aside>
  </transition>
</template>

<script setup>
/*
 * ExperiencePreview — 悬停经历时的详情卡
 * 功能：接收 activeItem 展示完整经历详情（日期/类型/标题/角色/描述），
 *       并按 activePreviewTop 定位到与时间轴首项对齐的位置
 * 触发：由 HeroSection 协调，桌面端 ≥1150px 才显示，更窄时隐藏
 */
import { computed } from 'vue'

const props = defineProps({
  activeItem: {
    type: Object,
    default: null,
  },
  activePreviewTop: {
    type: Number,
    default: null,
  },
})

const previewStyle = computed(() => {
  if (props.activePreviewTop === null) {
    return null
  }

  return {
    top: `${props.activePreviewTop}px`,
  }
})
</script>

<style scoped>
.experience-preview {
  position: absolute;
  right: var(--header-padding-right);
  top: clamp(82px, 9vw, 148px);
  width: var(--header-nav-width);
  color: #000;
}

/* 宽度 >1250 时详情卡收窄到 450px；1250 及以下保持原宽 */
@media (min-width: 1251px) {
  .experience-preview {
    width: 450px;
  }
}

.experience-preview-meta {
  display: flex;
  gap: 18px;
  margin-bottom: 20px;
  font-size: clamp(13px, 0.95vw, 17px);
  font-weight: 900;
  text-transform: uppercase;
}

.experience-preview h3 {
  margin: 0 0 16px;
  font-size: clamp(20px, 1.85vw, 30px);
  line-height: 1.12;
  font-family: var(--display-font);
  font-weight: 900;
}

.experience-preview-role {
  margin: 0 0 18px;
  font-size: clamp(16px, 1.2vw, 21px);
  font-weight: 900;
  line-height: 1.3;
}

.experience-preview-detail {
  margin: 0;
  max-width: 36em;
  color: #444;
  font-size: clamp(14px, 1vw, 18px);
  line-height: 1.55;
  text-align: justify;
  text-align-last: left;
}

.experience-preview-enter-active,
.experience-preview-leave-active {
  transition: opacity 160ms ease, transform 160ms ease;
}

.experience-preview-enter-from,
.experience-preview-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (max-width: 1149px) {
  .experience-preview {
    display: none;
  }
}
</style>
