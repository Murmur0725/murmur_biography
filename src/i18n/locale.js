import { computed, ref, watch } from 'vue'

const STORAGE_KEY = 'portfolio-locale'

function readStoredLocale() {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'zh' || stored === 'en' ? stored : 'en'
}

/** 全局语言状态（模块单例，全站共享） */
export const locale = ref(readStoredLocale())

watch(
  locale,
  (value) => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(STORAGE_KEY, value)
    document.documentElement.lang = value === 'zh' ? 'zh-CN' : 'en'
  },
  { immediate: true },
)

export function setLocale(next) {
  if (next === 'zh' || next === 'en') {
    locale.value = next
  }
}

export function toggleLocale() {
  locale.value = locale.value === 'en' ? 'zh' : 'en'
}

export function useLocale() {
  const isZh = computed(() => locale.value === 'zh')
  const isEn = computed(() => locale.value === 'en')

  return {
    locale,
    isZh,
    isEn,
    setLocale,
    toggleLocale,
  }
}
