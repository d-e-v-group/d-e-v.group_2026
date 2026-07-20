/* Fires a one-time "section_view" analytics event the first time each
   [data-track-section] element crosses the vertical center of the
   viewport. A shrunk rootMargin (rather than a visible-fraction threshold)
   is used so the trigger point is consistent regardless of a section's
   height, including ones taller than the viewport. */
export const useSectionTracking = () => {
  const { trackEvent } = useAnalytics()

  onMounted(() => {
    const els = document.querySelectorAll('[data-track-section]')
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          trackEvent('section_view', { section: e.target.dataset.trackSection })
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0, rootMargin: '-45% 0px -45% 0px' })
    els.forEach(el => io.observe(el))
    onUnmounted(() => io.disconnect())
  })
}
