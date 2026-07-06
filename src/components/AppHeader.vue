<template>
  <header class="app-header">
    <a class="brand" href="#home" aria-label="Portfolio home">
      <img class="brand-logo" :src="logoImage" alt="Portfolio">
    </a>
    <nav class="nav-links" aria-label="Primary navigation">
      <a href="#about">About</a>
      <a href="#publication">Publications</a>
      <div class="nav-dropdown">
        <a href="#projects" class="nav-dropdown-trigger">Projects</a>
        <div class="nav-dropdown-menu">
          <a class="nav-dropdown-label" href="#projects" @click.prevent="scrollTo('projects')">HCI DESIGN</a>
          <a v-for="p in hciProjects" :key="p.id" href="#projects" @click.prevent="scrollTo('projects')">{{ p.title }}</a>
          <a class="nav-dropdown-label" href="#projects" @click.prevent="scrollTo('projects')">AI SYSTEMS</a>
          <a v-for="p in aiProjects" :key="p.id" href="#projects" @click.prevent="scrollTo('projects')">{{ p.title }}</a>
          <a class="nav-dropdown-label" href="#projects" @click.prevent="scrollTo('projects')">ARCHITECTURE</a>
          <a v-for="p in archProjects" :key="p.id" href="#projects" @click.prevent="scrollTo('projects')">{{ p.title }}</a>
        </div>
      </div>
      <div class="nav-dropdown">
        <a href="#gallery" class="nav-dropdown-trigger">Exhibitions</a>
        <div class="nav-dropdown-menu">
          <a v-for="ex in exhibitions" :key="ex.id" :href="`#gallery`" @click.prevent="scrollTo('gallery')">{{ ex.title }}</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
/*
 * AppHeader — 顶部导航栏
 * 功能：左侧品牌 logo（点击回首页锚点 #home），右侧主导航锚点链接
 *       (About / Publication / Projects / Exhibitions)
 */
import { computed } from 'vue'
import logoImage from '../assets/images/logo-portfolio.png'
import { exhibitions } from '../data/gallery.js'
import { projects } from '../data/projects.js'

const aiProjects = computed(() => projects.filter((p) => p.direction === 'AI Systems'))
const hciProjects = computed(() => projects.filter((p) => p.direction === 'HCI DESIGN'))
const archProjects = computed(() => projects.filter((p) => p.direction === 'Architecture'))

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
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

/* 大屏时内容居中，logo 和导航往中间靠 */
@media (min-width: 981px) {
  .app-header {
    padding-left: max(var(--header-padding-left), calc((100vw - 1500px) / 2));
    padding-right: max(var(--header-padding-right), calc((100vw - 1500px) / 2));
  }
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

.nav-dropdown-trigger {
  padding-bottom: 0;
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

/* ── 下拉菜单 ── */
.nav-dropdown {
  position: relative;
  display: flex;
  align-items: flex-end;
  align-self: stretch;
}

.nav-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(12px);
  display: flex;
  flex-direction: column;
  min-width: 160px;
  padding: 10px 0;
  background: rgba(68, 68, 68, 0.5);
  border: 1px solid rgba(85, 85, 85, 0.5);
  border-radius: 0;
  border-top: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity 200ms ease, visibility 200ms ease;
  z-index: 10;
}

.nav-dropdown:hover .nav-dropdown-menu,
.nav-dropdown-trigger:focus-visible + .nav-dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(12px);
}

.nav-dropdown-label {
  display: block;
  padding: 6px 20px 4px;
  font-size: clamp(17px, 1.25vw, 26px);
  font-weight: 900;
  color: #fff !important;
  text-transform: uppercase !important;
  letter-spacing: 0.08em;
  white-space: nowrap;
  text-align: left;
  transition: color 160ms ease, background 160ms ease;
}

.nav-dropdown-menu a:not(.nav-dropdown-label) {
  text-align: left;
}

.nav-dropdown-label:not(:first-child) {
  margin-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding-top: 14px;
}

.nav-dropdown-label:hover {
  color: #fff !important;
  background: #555 !important;
}

.nav-dropdown-menu a {
  display: block;
  padding: 6px 20px;
  font-size: clamp(11px, 0.78vw, 13px);
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  text-transform: none;
  letter-spacing: 0.02em;
  white-space: nowrap;
  transition: color 160ms ease, background 160ms ease;
}

.nav-dropdown-menu a:hover {
  color: #fff;
  background: #555;
}

.nav-dropdown-menu a:not(.nav-dropdown-label)::before {
  content: '• ';
}

.nav-dropdown-menu a:not(.nav-dropdown-label):hover::before {
  content: '→ ';
}

.nav-dropdown-menu a::after {
  display: none;
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
