import { ref, reactive, onMounted, onBeforeUnmount, nextTick } from 'vue'

/**
 * 单轨道横向滚动 + 自定义滚动条
 * 用于 GalleryItem、About 证书区等
 */
export function useHorizontalScroll() {
  const track = ref(null)
  const dragging = ref(false)
  const overflowing = ref(false)
  const thumbWidth = ref('0%')
  const thumbLeft = ref('0%')

  let startX = 0
  let startScroll = 0
  let thumbDragging = false
  let thumbStartX = 0
  let thumbStartScroll = 0

  function updateScrollbar() {
    const el = track.value
    if (!el) return

    const { scrollWidth, clientWidth, scrollLeft } = el
    overflowing.value = scrollWidth - clientWidth > 1
    if (!overflowing.value) return

    thumbWidth.value = `${(clientWidth / scrollWidth) * 100}%`
    thumbLeft.value = `${(scrollLeft / scrollWidth) * 100}%`
  }

  function onPointerDown(event) {
    const el = track.value
    if (!el) return

    dragging.value = true
    startX = event.clientX
    startScroll = el.scrollLeft
    el.setPointerCapture?.(event.pointerId)
  }

  function onPointerMove(event) {
    if (!dragging.value || !track.value) return
    track.value.scrollLeft = startScroll - (event.clientX - startX)
  }

  function onPointerUp() {
    dragging.value = false
  }

  function onThumbDown(event) {
    const el = track.value
    if (!el) return

    thumbDragging = true
    thumbStartX = event.clientX
    thumbStartScroll = el.scrollLeft
    event.target.setPointerCapture?.(event.pointerId)
    event.stopPropagation()
  }

  function onThumbMove(event) {
    if (!thumbDragging || !track.value) return
    const el = track.value
    const ratio = el.scrollWidth / el.clientWidth
    el.scrollLeft = thumbStartScroll + (event.clientX - thumbStartX) * ratio
  }

  function onThumbUp() {
    thumbDragging = false
  }

  onMounted(async () => {
    await nextTick()
    updateScrollbar()
    window.addEventListener('resize', updateScrollbar)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateScrollbar)
  })

  return {
    track,
    dragging,
    overflowing,
    thumbWidth,
    thumbLeft,
    updateScrollbar,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onThumbDown,
    onThumbMove,
    onThumbUp,
  }
}

/**
 * 多轨道横向滚动 + 自定义滚动条
 * 用于 ProjectsSection 等多分组场景
 * @param {string[]} keys 轨道 key 列表，如 ['hci', 'ai', 'arch']
 */
export function useHorizontalScrollGroup(keys) {
  const trackRefs = Object.fromEntries(keys.map((key) => [key, ref(null)]))
  const dragging = reactive({ track: null })
  const overflowing = reactive(Object.fromEntries(keys.map((key) => [key, false])))
  const thumbWidth = reactive(Object.fromEntries(keys.map((key) => [key, '0%'])))
  const thumbLeft = reactive(Object.fromEntries(keys.map((key) => [key, '0%'])))

  let dragEl = null
  let startX = 0
  let startScroll = 0
  const thumbDrag = reactive({ key: null })
  let thumbStartX = 0
  let thumbStartScroll = 0

  function getTrack(key) {
    return trackRefs[key]?.value ?? null
  }

  function updateScrollbar(key) {
    const el = getTrack(key)
    if (!el) return

    const { scrollWidth, clientWidth, scrollLeft } = el
    overflowing[key] = scrollWidth - clientWidth > 1
    if (!overflowing[key]) return

    thumbWidth[key] = `${(clientWidth / scrollWidth) * 100}%`
    thumbLeft[key] = `${(scrollLeft / scrollWidth) * 100}%`
  }

  function updateAllScrollbars() {
    keys.forEach(updateScrollbar)
  }

  function onPointerDown(event, key) {
    const el = getTrack(key)
    if (!el) return

    dragEl = el
    dragging.track = key
    startX = event.clientX
    startScroll = el.scrollLeft
    el.setPointerCapture?.(event.pointerId)
  }

  function onPointerMove(event, key) {
    if (!dragEl || dragging.track !== key) return
    dragEl.scrollLeft = startScroll - (event.clientX - startX)
  }

  function onPointerUp() {
    dragEl = null
    dragging.track = null
  }

  function onThumbDown(event, key) {
    const el = getTrack(key)
    if (!el) return

    thumbDrag.key = key
    thumbStartX = event.clientX
    thumbStartScroll = el.scrollLeft
    event.target.setPointerCapture?.(event.pointerId)
    event.stopPropagation()
  }

  function onThumbMove(event, key) {
    if (thumbDrag.key !== key) return
    const el = getTrack(key)
    if (!el) return

    const ratio = el.scrollWidth / el.clientWidth
    el.scrollLeft = thumbStartScroll + (event.clientX - thumbStartX) * ratio
  }

  function onThumbUp() {
    thumbDrag.key = null
  }

  onMounted(async () => {
    await nextTick()
    updateAllScrollbars()
    window.addEventListener('resize', updateAllScrollbars)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateAllScrollbars)
  })

  return {
    trackRefs,
    dragging,
    overflowing,
    thumbWidth,
    thumbLeft,
    updateScrollbar,
    updateAllScrollbars,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onThumbDown,
    onThumbMove,
    onThumbUp,
  }
}
