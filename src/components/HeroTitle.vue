<template>
  <div class="hero-title">
    <h1>{{ title }}</h1>
    <p class="role">{{ role }}</p>
  </div>
</template>

<script setup>
/*
 * HeroTitle — 主副标题（MURMUR / designer 行）
 * 功能：展示主标题和副标题，调字号、上移量只看这个文件
 * 依赖：父级 .hero-section 上的 --hero-title-offset / --hero-title-lift
 */
defineProps({
  title: {
    type: String,
    default: 'MURMUR',
  },
  role: {
    type: String,
    default: 'HCI Designer/Architect /Curator',
  },
})
</script>

<style scoped>
h1,
.role {
  font-family: var(--display-font);
  font-weight: 900;
  text-rendering: geometricPrecision;
}

/* 主标题 MURMUR 字号：修改下面的 font-size */
h1 {
  margin: 0 0 0 var(--hero-title-offset);
  font-size: clamp(30px, 5.2vw, 58px);
  line-height: 0.95;
  position: relative;
  top: calc(-1 * var(--hero-title-lift));
  max-width: calc(100% - var(--hero-title-offset));
}

/* 副标题 designer / researcher / ... 字号：修改下面的 font-size */
.role {
  margin: 30px 0 58px var(--hero-title-offset);
  font-size: clamp(18px, 2vw, 24px);
  line-height: 1.1;
  white-space: nowrap;
  position: relative;
  top: calc(-1 * var(--hero-title-lift));
  max-width: calc(100% - var(--hero-title-offset));
}

@media (max-width: 980px) {
  h1 {
    font-size: clamp(40px, 9vw, 64px);
  }

  .role {
    font-size: clamp(13px, 2.4vw, 22px);
    margin-bottom: 42px;
  }
}

@media (max-width: 760px) {
  h1 {
    font-size: clamp(28px, 8vw, 36px);
  }

  .role {
    font-size: clamp(11px, 3vw, 15px);
    white-space: normal;
    margin-bottom: 56px;
  }
}
</style>
