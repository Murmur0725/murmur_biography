<template>
  <section id="projects" class="projects-section" aria-labelledby="projects-title">
    <SectionAxis class="projects-axis" />

    <div class="projects-inner">
      <div class="projects-heading">
        <h2 id="projects-title">Projects</h2>
      </div>

      <div class="projects-grid">
        <ProjectItem
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
/*
 * ProjectsSection — 作品集主界面
 * 功能：平铺展示 HCI 与 Architecture 两个方向的项目卡片
 * 数据：项目列表来自 src/data/projects.js
 */
import { projects } from '../data/projects.js'
import SectionAxis from './SectionAxis.vue'
import ProjectItem from './ProjectItem.vue'
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
  --section-axis-left: calc((100vw - min(100vw, 1500px)) / 2 + var(--layout-axis-left));
  --section-axis-top: 0;
  --section-axis-width: 6px;
  --section-axis-cap-height: var(--layout-axis-thick-height);
  --section-axis-cap-top: var(--layout-top);
}

.projects-inner {
  width: min(1500px, 100%);
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.projects-heading {
  display: grid;
  grid-template-columns:
    calc(var(--layout-content-left) + var(--layout-title-offset))
    minmax(0, 1fr);
  gap: 0;
  align-items: end;
  margin-bottom: clamp(64px, 9vw, 128px);
}

.projects-heading h2 {
  grid-column: 2;
  margin: 0;
  font-family: var(--display-font);
  font-size: clamp(30px, 5.2vw, 58px);
  line-height: 0.95;
  text-transform: uppercase;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(40px, 5vw, 72px);
  padding-left: calc(var(--layout-content-left) + var(--layout-title-offset));
  padding-right: clamp(28px, 4vw, 72px);
}

@media (max-width: 760px) {
  .projects-section {
    padding: 56px 22px 72px;
  }

  .projects-heading {
    grid-template-columns: 1fr;
    gap: 14px;
    margin-bottom: 40px;
  }

  .projects-heading h2 {
    grid-column: auto;
    justify-self: start;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 48px;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
