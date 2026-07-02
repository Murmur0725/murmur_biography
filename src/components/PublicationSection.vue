<template>
  <section id="publication" class="publication-section" aria-labelledby="publication-title">
    <SectionAxis class="publication-axis" />

    <div class="publication-inner">
      <div class="publication-heading">
        <h2 id="publication-title">Publication</h2>
      </div>

      <ol class="publication-list">
        <PublicationItem
          v-for="paper in publications"
          :key="paper.title"
          :paper="paper"
        />
      </ol>
    </div>
  </section>
</template>

<script setup>
/*
 * PublicationSection — 论文发表区（id="publication"）
 * 功能：编排 SectionAxis（左侧轴线）、标题、PublicationItem 论文列表
 * 数据：论文列表来自 src/data/publications.js
 */
import { publications } from '../data/publications.js'
import SectionAxis from './SectionAxis.vue'
import PublicationItem from './PublicationItem.vue'
</script>

<style scoped>
.publication-section {
  min-height: 100vh;
  background: var(--paper);
  color: var(--ink);
  padding: var(--layout-top) 0 clamp(80px, 9vw, 132px);
  position: relative;
}

/* 把 publication-section 的轴线变量映射给 SectionAxis */
.publication-axis {
  --section-axis-left: calc((100vw - min(100vw, 1500px)) / 2 + var(--layout-axis-left));
  --section-axis-top: 0;
  --section-axis-width: 6px;
  --section-axis-cap-height: var(--layout-axis-thick-height);
  --section-axis-cap-top: var(--layout-top);
}

.publication-inner {
  width: min(1500px, 100%);
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.publication-heading {
  display: grid;
  grid-template-columns:
    calc(var(--layout-content-left) + var(--layout-title-offset))
    minmax(0, 1fr);
  gap: 0;
  align-items: end;
  margin-bottom: clamp(64px, 9vw, 128px);
}

.publication-heading h2 {
  grid-column: 2;
  margin: 0;
  font-family: var(--display-font);
  font-size: clamp(30px, 5.2vw, 58px);
  line-height: 0.95;
  text-transform: uppercase;
}

.publication-list {
  display: grid;
  gap: 0;
  margin: 0;
  padding: 0;
  padding-left: calc(var(--layout-content-left) + var(--layout-title-offset));
  list-style: none;
}

@media (max-width: 760px) {
  .publication-section {
    padding: 56px 22px 72px;
  }

  .publication-heading {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .publication-heading h2 {
    grid-column: auto;
    justify-self: start;
  }

  .publication-list {
    padding-left: 0;
  }
}
</style>
