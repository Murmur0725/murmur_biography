<template>
  <section id="gallery" class="gallery-section" aria-labelledby="gallery-title">
    <SectionAxis class="gallery-axis" />

    <div class="gallery-inner">
      <div class="gallery-heading">
        <h2 id="gallery-title">Exhibitions</h2>
      </div>

      <ol class="gallery-list">
        <GalleryItem
          v-for="show in exhibitions"
          :key="show.id"
          :show="show"
        />
      </ol>
    </div>
  </section>
</template>

<script setup>
/*
 * GallerySection — 展览区（id="gallery"）
 * 功能：编排 SectionAxis（左侧轴线）、标题、GalleryItem 展览列表
 *       每行一个展览，每个展览可含多张图
 * 数据：展览列表来自 src/data/gallery.js
 */
import { exhibitions } from '../data/gallery.js'
import SectionAxis from './SectionAxis.vue'
import GalleryItem from './GalleryItem.vue'
</script>

<style scoped>
.gallery-section {
  min-height: 100vh;
  background: var(--paper);
  color: var(--ink);
  padding: var(--layout-top) 0 clamp(80px, 9vw, 132px);
  position: relative;
}

.gallery-axis {
  --section-axis-left: calc((100vw - min(100vw, var(--layout-frame-width))) / 2 + var(--layout-axis-left));
  --section-axis-top: 0;
  --section-axis-width: 6px;
  --section-axis-cap-height: var(--layout-axis-thick-height);
  --section-axis-cap-top: var(--layout-top);
}

.gallery-inner {
  width: min(var(--layout-frame-width), 100%);
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.gallery-heading {
  display: grid;
  grid-template-columns:
    var(--layout-content-start)
    minmax(0, 1fr);
  gap: 0;
  align-items: end;
  padding-right: var(--layout-content-right);
  margin-bottom: clamp(64px, 9vw, 128px);
}

.gallery-heading h2 {
  grid-column: 2;
  width: var(--layout-content-width);
  max-width: 100%;
  margin: 0;
  font-family: var(--display-font);
  font-size: clamp(30px, 5.2vw, 58px);
  line-height: 0.95;
  text-transform: uppercase;
}

.gallery-list {
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  padding-left: var(--layout-content-start);
  padding-right: var(--layout-content-right);
  list-style: none;
}

@media (max-width: 760px) {
  .gallery-section {
    padding: 56px 22px 72px;
  }

  .gallery-heading {
    grid-template-columns: 1fr;
    gap: 14px;
    padding-right: 0;
  }

  .gallery-heading h2 {
    grid-column: auto;
    justify-self: start;
  }

  .gallery-list {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
