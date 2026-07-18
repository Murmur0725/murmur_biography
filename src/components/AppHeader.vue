<template>
  <header class="app-header">
    <div class="header-left">
      <a class="brand" href="#home" :aria-label="t.nav.homeAria">
        <img class="brand-logo" :src="logoImage" alt="Portfolio">
      </a>
      <button
        type="button"
        class="lang-toggle"
        :aria-label="t.nav.langSwitchAria"
        @click="toggleLocale"
      >
        <span class="lang-toggle__track" aria-hidden="true">
          <span
            class="lang-toggle__option"
            :class="{ 'is-active': isEn }"
          >EN</span>
          <span
            class="lang-toggle__option"
            :class="{ 'is-active': isZh }"
          >中</span>
        </span>
      </button>
    </div>
    <div class="header-right">
      <nav class="nav-links" :aria-label="t.nav.primaryAria">
        <a href="#about">{{ t.nav.about }}</a>
        <a href="#publication">{{ t.nav.publications }}</a>
        <div class="nav-dropdown">
          <a href="#projects" class="nav-dropdown-trigger">{{ t.nav.projects }}</a>
          <div class="nav-dropdown-menu">
            <a class="nav-dropdown-label" href="#projects" @click.prevent="scrollTo('projects')">
              {{ t.projects.categories['HCI DESIGN'] }}
            </a>
            <a
              v-for="p in hciProjects"
              :key="p.id"
              href="#projects"
              @click.prevent="scrollTo('projects')"
            >{{ p.title }}</a>
            <a class="nav-dropdown-label" href="#projects" @click.prevent="scrollTo('projects')">
              {{ t.projects.categories['AI Systems'] }}
            </a>
            <a
              v-for="p in aiProjects"
              :key="p.id"
              href="#projects"
              @click.prevent="scrollTo('projects')"
            >{{ p.title }}</a>
            <a class="nav-dropdown-label" href="#projects" @click.prevent="scrollTo('projects')">
              {{ t.projects.categories.Architecture }}
            </a>
            <a
              v-for="p in architectureProjects"
              :key="p.id"
              href="#projects"
              @click.prevent="scrollTo('projects')"
            >{{ p.title }}</a>
          </div>
        </div>
        <div class="nav-dropdown">
          <a href="#gallery" class="nav-dropdown-trigger">{{ t.nav.exhibitions }}</a>
          <div class="nav-dropdown-menu">
            <a
              v-for="ex in exhibitions"
              :key="ex.id"
              href="#gallery"
              @click.prevent="scrollTo('gallery')"
            >{{ ex.title }}</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
/*
 * AppHeader — 顶部导航栏
 * 功能：品牌 logo、语言切换、主导航锚点
 */
import logoImage from '../assets/images/logo-portfolio.png'
import { useI18n } from '../i18n/index.js'

const {
  t,
  isEn,
  isZh,
  toggleLocale,
  exhibitions,
  hciProjects,
  aiProjects,
  architectureProjects,
} = useI18n()

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
  gap: 20px;
}

@media (min-width: 981px) {
  .app-header {
    padding-left: max(var(--header-padding-left), calc((100vw - 1500px) / 2));
    padding-right: max(var(--header-padding-right), calc((100vw - 1500px) / 2));
  }
}

.header-left {
  display: inline-flex;
  align-items: center;
  gap: clamp(12px, 1.4vw, 20px);
  flex: 0 0 auto;
  min-width: 0;
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

.lang-toggle {
  flex: 0 0 auto;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  color: inherit;
}

.lang-toggle__track {
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  min-width: 72px;
  padding: 3px;
  border: 1.5px solid rgba(255, 255, 255, 0.85);
  border-radius: 999px;
  background: transparent;
  transition: border-color 180ms ease, background 180ms ease;
}

.lang-toggle:hover .lang-toggle__track,
.lang-toggle:focus-visible .lang-toggle__track {
  border-color: #fff;
  background: rgba(255, 255, 255, 0.08);
  outline: none;
}

.lang-toggle:focus-visible {
  outline: none;
}

.lang-toggle__option {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 22px;
  padding: 0 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.04em;
  line-height: 1;
  color: rgba(255, 255, 255, 0.55);
  transition: color 160ms ease, background 160ms ease;
}

.lang-toggle__option.is-active {
  color: #000;
  background: #fff;
}

.header-right {
  display: flex;
  align-items: center;
  gap: clamp(16px, 2vw, 28px);
  min-width: 0;
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

  .header-left {
    width: 100%;
    justify-content: space-between;
  }

  .header-right {
    width: 100%;
  }

  .nav-links {
    width: auto;
    flex: 1 1 auto;
    font-size: 11px;
  }
}
</style>
