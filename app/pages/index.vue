<script setup>
import content from '~/assets/js/content.js'

const tweaks = useTweaks()
const editMode = ref(false)

/* ---------- SEO / AEO ----------
   Single-page site, so all metadata lives here. Copy is derived from
   content.js so it stays in sync with the visible page. */
const url = useRuntimeConfig().public.siteUrl
const title = `${content.brand.name} — Technical Direction & Development`
const description = content.brand.pitch
const ogImage = `${url}/og-image.jpg?v=42069`

useSeoMeta({
  title,
  description,
  ogType: 'website',
  ogSiteName: content.brand.name,
  ogTitle: title,
  ogDescription: description,
  ogUrl: url,
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: content.brand.headline,
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage,
})

// Flatten the "Category: a, b, c" capability lines into individual topics so
// answer engines can map the org to concrete technologies.
const knowsAbout = content.capabilities.flatMap((line) => {
  const after = line.includes(':') ? line.slice(line.indexOf(':') + 1) : line
  return after.split(',').map((s) => s.trim()).filter(Boolean)
})

// schema.org graph: a ProfessionalService org node (with founder, team, the
// full service catalog and known technologies) plus a WebSite node. This is
// the primary signal for AI answer engines and rich results.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${url}/#organization`,
      name: content.brand.name,
      alternateName: ['DEV Group', 'devgru'],
      url,
      logo: ogImage,
      image: ogImage,
      email: content.brand.email,
      description: content.brand.pitch,
      slogan: content.brand.headline,
      foundingDate: '2013',
      areaServed: { '@type': 'Place', name: 'Worldwide' },
      knowsAbout,
      sameAs: content.social.map((s) => s.href),
      founder: {
        '@type': 'Person',
        name: content.team[0].name,
        jobTitle: 'Founder',
        sameAs: [content.team[0].linkedin, content.team[0].github].filter(Boolean),
      },
      employee: content.team.map((m) => ({
        '@type': 'Person',
        name: m.name,
        jobTitle: m.role,
        sameAs: [m.linkedin, m.github].filter(Boolean),
      })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: content.services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.title, description: s.desc },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${url}/#website`,
      url,
      name: content.brand.name,
      description,
      inLanguage: 'en',
      publisher: { '@id': `${url}/#organization` },
    },
  ],
}

useHead({
  htmlAttrs: {
    'data-theme': computed(() => tweaks.value.theme),
    'data-accent': computed(() => tweaks.value.accent),
  },
  link: [{ rel: 'canonical', href: url }],
  meta: [{ name: 'theme-color', content: '#000000' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLd),
    },
  ],
})

onMounted(() => {
  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  tweaks.value.theme = mq.matches ? 'dark' : 'light'
  const onSchemeChange = (e) => { tweaks.value.theme = e.matches ? 'dark' : 'light' }
  mq.addEventListener('change', onSchemeChange)

  const handler = (e) => {
    if (!e.data?.type) return
    if (e.data.type === '__activate_edit_mode') editMode.value = true
    else if (e.data.type === '__deactivate_edit_mode') editMode.value = false
  }
  window.addEventListener('message', handler)
  window.parent.postMessage({ type: '__edit_mode_available' }, '*')
  onUnmounted(() => {
    window.removeEventListener('message', handler)
    mq.removeEventListener('change', onSchemeChange)
  })
})

useReveal()
</script>

<template>
  <AppTopbar />
  <Hero />
  <SectionServices />
  <SectionWork />
  <SectionTestimonials />
  <SectionTeam />
  <AppFooter />
  <Tweaks :edit-mode="editMode" />
</template>
