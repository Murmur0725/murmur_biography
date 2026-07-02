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
import { bio, highlights, skills, awards, volunteer } from '../data/about.js'
import SectionAxis from './SectionAxis.vue'
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
  --section-axis-left: calc((100vw - min(100vw, 1500px)) / 2 + var(--layout-axis-left));
  --section-axis-top: 0;
  --section-axis-width: 6px;
  --section-axis-cap-height: var(--layout-axis-thick-height);
  --section-axis-cap-top: var(--layout-top);
}

.about-inner {
  width: min(1500px, 100%);
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.about-heading {
  display: grid;
  grid-template-columns:
    calc(var(--layout-content-left) + var(--layout-title-offset))
    minmax(0, 1fr);
  gap: 0;
  align-items: end;
  margin-bottom: clamp(36px, 5vw, 64px);
}

.about-heading h2 {
  grid-column: 2;
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
    calc(var(--layout-content-left) + var(--layout-title-offset))
    minmax(0, 1fr);
  gap: 0;
  margin-bottom: clamp(48px, 6vw, 88px);
}

.about-bio {
  grid-column: 2;
  margin: 0 0 clamp(28px, 3vw, 40px) 0;
  max-width: 110ch;
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
  max-width: 110ch;
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
  padding-left: calc(var(--layout-content-left) + var(--layout-title-offset));
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
  max-width: 63ch;
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
}

.about-list-item {
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  gap: 14px;
  align-items: start;
  padding-top: clamp(12px, 1.4vw, 18px);
}

.about-list-year {
  font-size: clamp(16px, 1.18vw, 22px);
  font-weight: 900;
  line-height: 1.25;
  color: var(--muted);
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
  }

  .about-highlights {
    gap: 24px;
  }
}
</style>
