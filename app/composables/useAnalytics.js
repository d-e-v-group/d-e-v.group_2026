/* Thin wrapper around gtag so components don't need to guard for its
   presence (blocked by an ad blocker, not yet loaded, SSR, etc). */
export function useAnalytics() {
  const trackEvent = (name, params = {}) => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
    window.gtag('event', name, params)
  }
  return { trackEvent }
}
