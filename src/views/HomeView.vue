<template>
  <main class="site-shell">
    <div class="design-frame">
      <AppHeader />
      <HeroSection />
      <AboutSection />
      <PublicationSection />
    </div>
  </main>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import PublicationSection from '../components/PublicationSection.vue'
</script>

<style scoped>
.site-shell {
  min-height: 100vh;
  width: 100%;
}

.design-frame {
  width: 100vw;
  min-height: 100vh;
  background: var(--paper);
  position: relative;
  overflow-x: hidden;
}

@media (max-width: 980px) {
  .site-shell {
    padding: 0;
  }

  .design-frame {
    min-height: 100vh;
  }
}
</style>
