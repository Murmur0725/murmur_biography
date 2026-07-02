<template>
  <header class="app-header">
    <a class="brand" href="#home" aria-label="Portfolio home">
      <img class="brand-logo" :src="logoImage" alt="Portfolio">
    </a>
    <nav class="nav-links" aria-label="Primary navigation">
      <a href="#about">About</a>
      <a href="#publication">Publication</a>
      <a href="#projects">Projects</a>
      <a href="#gallery">Gallery</a>
    </nav>
  </header>
</template>

<script setup>
/*
 * AppHeader — 顶部导航栏
 * 功能：左侧品牌 logo（点击回首页锚点 #home），右侧主导航锚点链接
 *       (About / Publication / Projects / Gallery)
 */
import logoImage from '../assets/images/logo-portfolio.png'
</script>

<style scoped>
.app-header {
  height: var(--header-height);
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--header-padding-right) 0 var(--header-padding-left);
  position: relative;
  z-index: 5;
}

.brand {
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
}

.brand-logo {
  display: block;
  width: clamp(135px, 11.25vw, 198px);
  height: auto;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(20px, 3vw, 56px);
  width: var(--header-nav-width);
  font-size: clamp(12px, 0.9vw, 16px);
  font-weight: 900;
  text-transform: uppercase;
}

.nav-links a {
  position: relative;
  padding: 10px 0;
}

.nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 180ms ease;
}

.nav-links a:hover::after,
.nav-links a:focus-visible::after {
  transform: scaleX(1);
}

@media (max-width: 980px) {
  .app-header {
    height: auto;
    min-height: 76px;
    padding: 18px 22px;
    gap: 20px;
  }

  .nav-links {
    width: auto;
    gap: 18px;
    overflow-x: auto;
    scrollbar-width: none;
  }
}

@media (max-width: 620px) {
  .app-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .nav-links {
    width: 100%;
    font-size: 11px;
  }
}
</style>
