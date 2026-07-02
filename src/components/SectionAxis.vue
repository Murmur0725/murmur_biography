<template>
  <div class="section-axis" aria-hidden="true">
    <span class="section-axis-cap"></span>
  </div>
</template>

<script setup>
/*
 * SectionAxis — 左侧装饰轴线（竖线 + 顶部粗黑块）
 * 功能：Hero / Publication 共用的视觉装饰，改轴线粗细/位置只改这里
 * 定制：通过 CSS 变量在父级 class 上定义
 *   --section-axis-left / --section-axis-top / --section-axis-width
 *   --section-axis-cap-left / --section-axis-cap-top
 *   --section-axis-cap-width / --section-axis-cap-height
 */
</script>

<style scoped>
.section-axis {
  position: absolute;
  left: var(--section-axis-left);
  top: var(--section-axis-top, 0);
  bottom: 0;
  width: var(--section-axis-width, 6px);
  background: #000;
  z-index: 0;
}

.section-axis-cap {
  position: absolute;
  left: var(--section-axis-cap-left, -12px);
  top: var(--section-axis-cap-top, 0);
  width: var(--section-axis-cap-width, 30px);
  height: var(--section-axis-cap-height, 104px);
  background: #000;
}
</style>
