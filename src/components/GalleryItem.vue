<template>
  <li class="gallery-item">
    <!-- 标题 + 时间地点 → 海报上方 -->
    <h3 class="gallery-title">{{ show.title }}</h3>
    <div class="gallery-meta">
      <strong>{{ show.date }}</strong>
      <span>{{ show.venue }}</span>
    </div>

    <!-- 两栏：左海报，右内容 -->
    <div class="gallery-body">
      <!-- A4 海报 → 左侧，顶部对齐描述，底部对齐图片 -->
      <div class="gallery-poster">
        <img
          v-if="show.poster"
          :src="`${baseUrl}${show.poster}`"
          :alt="`${show.title} poster`"
          loading="lazy"
          draggable="false"
        />
        <div v-else class="gallery-poster-placeholder" aria-hidden="true">
          <span>{{ t.gallery.posterPlaceholder }}</span>
        </div>
      </div>

      <!-- 描述 + 图片 → 右侧 -->
      <div class="gallery-content">
        <p class="gallery-description">{{ show.description }}</p>

        <div
          ref="track"
          class="gallery-images h-scroll-track"
          :class="{ 'is-dragging': dragging }"
          @scroll="updateScrollbar"
          @pointerdown="onPointerDown"
          @pointermove="onPointerMove"
          @pointerup="onPointerUp"
          @pointercancel="onPointerUp"
          @pointerleave="onPointerUp"
        >
          <figure
            v-for="(image, index) in show.images"
            :key="index"
            class="gallery-figure"
          >
            <div class="gallery-thumb">
              <img
                v-if="image.src"
                :src="`${baseUrl}${image.src}`"
                :alt="image.caption || show.title"
                loading="lazy"
                draggable="false"
              />
              <div v-else class="gallery-thumb-placeholder" aria-hidden="true"></div>
            </div>
            <figcaption v-if="image.caption" class="gallery-caption">
              {{ image.caption }}
            </figcaption>
          </figure>
        </div>

        <div v-if="overflowing" class="gallery-scroll h-scroll-bar" aria-hidden="true">
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
    </div>
  </li>
</template>

<script setup>
/*
 * GalleryItem — 单个展览（Gallery 里的一行）
 * 功能：展览标题 → 时间/地点 → 描述 → 多图横向滚动轨道，整体左对齐
 * 数据：通过 props.show 传入，源数据在 src/data/gallery.js
 */
import { useHorizontalScroll } from '../composables/useHorizontalScroll.js'
import { useI18n } from '../i18n/index.js'

const baseUrl = import.meta.env.BASE_URL
const { t } = useI18n()

defineProps({
  show: {
    type: Object,
    required: true,
  },
})

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
.gallery-item {
  padding-top: clamp(44px, 6vw, 76px);
  max-width: var(--layout-content-width);
}

.gallery-item:not(:first-child) {
  border-top: 2px solid #000;
  margin-top: clamp(44px, 6vw, 76px);
}

.gallery-item:first-child {
  padding-top: 0;
}

/* ── 标题 + 元信息 ── */
.gallery-title {
  margin: 0 0 6px;
  font-size: clamp(16px, 1.18vw, 22px);
  font-weight: 900;
  line-height: 1.25;
}

.gallery-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 6px 16px;
  margin-bottom: clamp(20px, 2.4vw, 32px);
}

.gallery-meta strong {
  font-size: clamp(14px, 1vw, 17px);
  font-weight: 900;
  line-height: 1.35;
}

.gallery-meta span {
  font-size: clamp(14px, 1vw, 17px);
  font-weight: 900;
  line-height: 1.35;
  color: var(--muted);
}

/* ── 两栏布局：左海报，右内容 ── */
.gallery-body {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  gap: 0 clamp(28px, 4vw, 52px);
}

/* ── 海报 → 左侧，跨两行，高度自动匹配内容 ── */
.gallery-poster {
  grid-column: 1;
  grid-row: 1 / 3;
  width: clamp(180px, 22vw, 300px);
  overflow: hidden;
  background: #f5f5f5;
}

.gallery-poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-poster-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e8e8e8 0%, #f5f5f5 50%, #e8e8e8 100%);
  border: 2px dashed #ccc;
}

.gallery-poster-placeholder span {
  font-size: clamp(12px, 0.85vw, 15px);
  font-weight: 900;
  color: #bbb;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* ── 内容 → 右侧 ── */
.gallery-content {
  grid-column: 2;
  grid-row: 1 / 3;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.gallery-description {
  margin: 0 0 clamp(20px, 2.4vw, 32px);
  color: #444;
  font-size: clamp(15px, 1.08vw, 18px);
  line-height: 1.5;
  max-width: var(--layout-content-width);
  text-align: justify;
  text-align-last: left;
}

.gallery-images {
  display: flex;
  gap: clamp(16px, 1.8vw, 28px);
}

.gallery-scroll {
  margin-top: 16px;
}

.gallery-figure {
  margin: 0;
  flex: 0 0 auto;
  width: clamp(240px, 26vw, 340px);
}

.gallery-thumb {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #f5f5f5;
}

.gallery-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 260ms ease;
}

.gallery-thumb-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #e8e8e8 0%, #f5f5f5 50%, #e8e8e8 100%);
}

.gallery-figure:hover .gallery-thumb img {
  transform: scale(1.03);
}

.gallery-caption {
  margin-top: 10px;
  font-size: clamp(13px, 0.95vw, 15px);
  font-weight: 400;
  color: var(--muted);
  line-height: 1.35;
}

@media (max-width: 760px) {
  .gallery-item {
    padding-top: 24px;
  }

  .gallery-item:not(:first-child) {
    margin-top: 24px;
  }

  .gallery-body {
    grid-template-columns: auto 1fr;
    gap: 0 20px;
  }

  .gallery-poster {
    width: clamp(140px, 38vw, 200px);
  }

  .gallery-figure {
    width: clamp(200px, 68vw, 260px);
  }
}
</style>
