<template>
  <li class="publication-item">
    <span class="publication-index">{{ paper.index }}</span>
    <div class="publication-content">
      <p class="publication-authors">{{ paper.authors }}</p>
      <p v-if="paper.award" class="publication-award">{{ paper.award }}</p>
      <h3>{{ paper.title }}</h3>
      <p class="publication-venue">{{ paper.venue }}</p>
      <a
        v-if="paper.link"
        class="publication-link"
        :href="paper.link"
        target="_blank"
        rel="noreferrer"
      >
        {{ paper.linkLabel }}
      </a>
    </div>
  </li>
</template>

<script setup>
/*
 * PublicationItem — 单条论文卡片
 * 功能：展示一条论文的序号 / 作者 / 标题 / 出处 / 链接
 * 依赖：父级 .publication-section 上的 --publication-* 变量
 */
defineProps({
  paper: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.publication-item {
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  gap: 14px;
  align-items: start;
  position: relative;
  padding-top: clamp(24px, 3.5vw, 44px);
  max-width: var(--layout-content-width);
}

.publication-item:not(:first-child) {
  border-top: 2px solid #000;
  margin-top: clamp(24px, 3.5vw, 44px);
}

.publication-item:first-child {
  padding-top: 0;
}

.publication-index {
  font-size: clamp(24px, 2.1vw, 34px);
  font-weight: 900;
  line-height: 1.25;
  color: #000;
}

.publication-content {
  max-width: var(--layout-content-width);
}

.publication-authors {
  margin: 0 0 10px;
  color: var(--muted);
  font-size: clamp(14px, 1vw, 17px);
  font-weight: 900;
}

.publication-content h3 {
  margin: 0 0 12px;
  font-size: clamp(16px, 1.18vw, 22px);
  font-weight: 900;
  line-height: 1.25;
}

.publication-venue {
  margin: 0;
  color: #444;
  font-size: clamp(15px, 1.08vw, 18px);
  line-height: 1.48;
  text-align: justify;
  text-align-last: left;
}

.publication-award {
  margin: 0 0 12px;
  color: var(--hover-orange);
  font-size: clamp(14px, 1vw, 17px);
  font-weight: 900;
  text-transform: uppercase;
}

.publication-venue :deep(.award-highlight) {
  color: var(--hover-orange);
  font-weight: 900;
}

.publication-link {
  display: inline-block;
  margin-top: 12px;
  color: var(--hover-orange);
  font-size: clamp(14px, 1vw, 17px);
  font-weight: 900;
}

.publication-link:hover,
.publication-link:focus-visible {
  text-decoration: underline;
}

@media (max-width: 760px) {
  .publication-item {
    grid-template-columns: 1fr;
    gap: 6px;
    padding-top: 20px;
  }
}
</style>
