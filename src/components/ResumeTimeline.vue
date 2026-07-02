<template>
  <div class="timeline" aria-label="Education and experience timeline">
    <article
      v-for="item in items"
      :key="`${item.date}-${item.title}`"
      class="timeline-item"
      :class="{ muted: item.muted }"
      tabindex="0"
      @mouseenter="handleItemHover(item, $event)"
      @mouseleave="emit('item-leave')"
      @focus="handleItemHover(item, $event)"
      @blur="emit('item-leave')"
    >
      <div class="timeline-date">
        <strong>{{ item.date }}</strong>
        <span>{{ item.type }}</span>
      </div>
      <div class="timeline-detail">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </div>
    </article>
  </div>
</template>

<script setup>
/*
 * ResumeTimeline — 经历时间轴列表
 * 功能：渲染经历条目（日期+类型 / 标题+描述），
 *       悬停/聚焦时向父级 emit item-hover（含预览位置）和 item-leave
 * 数据：通过 props.items 传入，源数据在 src/data/timeline.js
 */
defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['item-hover', 'item-leave'])

function handleItemHover(item, event) {
  const timeline = event.currentTarget.closest('.timeline')
  const detail = timeline?.querySelector('.timeline-item .timeline-detail')
  const section = event.currentTarget.closest('.hero-section')
  const previewTop =
    detail && section
      ? detail.getBoundingClientRect().top - section.getBoundingClientRect().top
      : null

  emit('item-hover', { item, previewTop })
}
</script>

<style scoped>
.timeline {
  width: min(980px, calc(100vw - var(--hero-content-left) - 32px));
  display: grid;
  gap: var(--timeline-gap);
  margin-top: calc(-1 * var(--timeline-lift));
}

.timeline-item {
  --timeline-item-shift: 0px;
  display: grid;
  grid-template-columns: var(--timeline-date-width) minmax(0, 1fr);
  align-items: start;
  position: relative;
  outline: none;
  cursor: default;
}

.timeline-item:hover,
.timeline-item:focus-visible {
  --timeline-item-shift: var(--timeline-hover-shift);
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: var(--timeline-line-left);
  top: calc(var(--timeline-marker-center) - (var(--timeline-line-height) / 2));
  width: calc(var(--timeline-date-width) - var(--timeline-line-left) + var(--timeline-item-shift));
  height: var(--timeline-line-height);
  background: #000;
  transition: width 180ms ease;
}

.timeline-item::after {
  content: '';
  position: absolute;
  left: calc(var(--timeline-date-width) + var(--timeline-item-shift) - (var(--timeline-dot-size) / 2));
  top: calc(var(--timeline-marker-center) - (var(--timeline-dot-size) / 2));
  width: var(--timeline-dot-size);
  height: var(--timeline-dot-size);
  border-radius: 50%;
  background: #000;
  transition: left 180ms ease;
}

.timeline-item.muted::before,
.timeline-item.muted::after {
  background: #8c8c8c;
}

.timeline-date {
  display: grid;
  /* 时间和经历类型的间距：保持和右侧机构标题/描述的 6px 间距一致 */
  gap: 6px;
  transform: translateX(var(--timeline-item-shift));
  transition: transform 180ms ease;
}

/* 左侧时间、Educate、Intern 字号：修改下面的 font-size */
.timeline-date strong,
.timeline-date span {
  font-size: clamp(16px, 1.18vw, 22px);
  font-weight: 900;
}

.timeline-date strong {
  line-height: 1.25;
}

.timeline-date span {
  line-height: 1.35;
}

.timeline-item.muted .timeline-date,
.timeline-item.muted .timeline-detail {
  color: var(--muted);
}

.timeline-item:hover .timeline-date,
.timeline-item:hover .timeline-detail,
.timeline-item:hover .timeline-detail p,
.timeline-item:focus-visible .timeline-date,
.timeline-item:focus-visible .timeline-detail,
.timeline-item:focus-visible .timeline-detail p {
  color: var(--hover-orange);
}

.timeline-detail {
  padding-left: var(--timeline-detail-padding);
  transform: translateX(var(--timeline-item-shift));
  transition: transform 180ms ease;
}

/* 右侧每条经历标题字号：修改下面的 font-size */
.timeline-detail h2 {
  margin: 0 0 6px;
  font-size: clamp(16px, 1.18vw, 22px);
  font-weight: 900;
  line-height: 1.25;
  white-space: nowrap;
}

/* 右侧每条经历描述字号：修改下面的 font-size */
.timeline-detail p {
  margin: 0;
  color: #444;
  font-size: clamp(15px, 1.08vw, 20px);
  line-height: 1.35;
  white-space: nowrap;
}

.timeline-item.muted .timeline-detail p {
  color: var(--muted);
}

.timeline-item:hover .timeline-detail p,
.timeline-item:focus-visible .timeline-detail p {
  color: var(--hover-orange);
}

@media (max-width: 980px) {
  .timeline-item {
    grid-template-columns: var(--timeline-date-width) 1fr;
  }

  .timeline-item::before {
    width: calc(var(--timeline-date-width) - var(--timeline-line-left));
  }

  .timeline-detail {
    padding-left: 20px;
  }
}

@media (max-width: 620px) {
  .timeline {
    gap: 18px;
  }

  .timeline-item {
    grid-template-columns: var(--timeline-date-width) 1fr;
  }

  .timeline-item::before {
    top: 17px;
    height: 3px;
  }

  .timeline-item::after {
    top: 10px;
  }

  .timeline-date strong,
  .timeline-detail h2,
  .timeline-detail p {
    font-size: clamp(10px, 2.9vw, 12px);
  }

  .timeline-detail {
    padding-left: 14px;
  }
}
</style>
