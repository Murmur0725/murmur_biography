<template>
  <section id="gallery" class="section-shell" aria-labelledby="gallery-title">
    <SectionAxis class="layout-axis" />

    <div class="section-inner">
      <div class="section-heading">
        <h2 id="gallery-title">{{ t.gallery.title }}</h2>
      </div>

      <ol class="gallery-list section-content">
        <GalleryItem
          v-for="show in exhibitions"
          :key="show.id"
          :show="show"
        />
      </ol>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../i18n/index.js'
import SectionAxis from './SectionAxis.vue'
import GalleryItem from './GalleryItem.vue'

const { t, exhibitions } = useI18n()
</script>

<style scoped>
.gallery-list {
  display: grid;
  gap: 0;
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  list-style: none;
}
</style>
