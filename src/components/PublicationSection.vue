<template>
  <section id="publication" class="section-shell" aria-labelledby="publication-title">
    <SectionAxis class="layout-axis" />

    <div class="section-inner">
      <div class="section-heading">
        <h2 id="publication-title">{{ t.publications.title }}</h2>
      </div>

      <ol class="publication-list section-content">
        <PublicationItem
          v-for="paper in publications"
          :key="paper.title"
          :paper="paper"
        />
      </ol>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../i18n/index.js'
import SectionAxis from './SectionAxis.vue'
import PublicationItem from './PublicationItem.vue'

const { t, publications } = useI18n()
</script>

<style scoped>
.publication-list {
  display: grid;
  gap: 0;
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  list-style: none;
}
</style>
