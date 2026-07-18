import { computed } from 'vue'
import { locale, useLocale } from './locale.js'
import { messages } from './messages.js'
import { aboutByLocale } from '../data/about.js'
import { timelineByLocale } from '../data/timeline.js'
import { projectsByLocale } from '../data/projects.js'
import { publicationsByLocale } from '../data/publications.js'
import { exhibitionsByLocale } from '../data/gallery.js'

export function useI18n() {
  const localeApi = useLocale()

  const t = computed(() => messages[locale.value] || messages.en)
  const about = computed(() => aboutByLocale[locale.value] || aboutByLocale.en)
  const timelineItems = computed(() => timelineByLocale[locale.value] || timelineByLocale.en)
  const projects = computed(() => projectsByLocale[locale.value] || projectsByLocale.en)
  const publications = computed(() => publicationsByLocale.en)
  const exhibitions = computed(() => exhibitionsByLocale[locale.value] || exhibitionsByLocale.en)

  const hciProjects = computed(() =>
    projects.value.filter((p) => p.direction === 'HCI DESIGN'),
  )
  const aiProjects = computed(() =>
    projects.value.filter((p) => p.direction === 'AI Systems'),
  )
  const architectureProjects = computed(() =>
    projects.value.filter((p) => p.direction === 'Architecture'),
  )

  return {
    ...localeApi,
    t,
    about,
    timelineItems,
    projects,
    publications,
    exhibitions,
    hciProjects,
    aiProjects,
    architectureProjects,
  }
}
