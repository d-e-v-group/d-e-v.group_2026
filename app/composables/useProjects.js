import content from '~/assets/js/content.js'

const QUERY = `
  query Portfolios($after: String) {
    portfolios(first: 100, after: $after) {
      pageInfo { hasNextPage endCursor }
      nodes {
        title
        featuredImage { node { sourceUrl } }
        terms(first: 20) { nodes { name taxonomyName } }
        PortfolioFields { year url description }
      }
    }
  }
`

// Decode the handful of HTML entities WordPress emits in post titles.
const decodeEntities = (s) => String(s || '')
  .replace(/&amp;/g, '&')
  .replace(/&#0?38;/g, '&')
  .replace(/&#8217;/g, '’')
  .replace(/&#8216;/g, '‘')
  .replace(/&#8220;/g, '“')
  .replace(/&#8221;/g, '”')
  .replace(/&#8211;/g, '–')
  .replace(/&#8212;/g, '—')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&nbsp;/g, ' ')

// Map a WP `portfolio` node to the shape SectionWork expects (see content.js
// `allProjects`). `partner` has no ACF field in WP, so it is left for
// SectionWork to default to 'Development Group'.
const mapNode = (n) => ({
  title: decodeEntities(n.title),
  image: n.featuredImage?.node?.sourceUrl || '',
  category: (n.terms?.nodes || [])
    .filter(t => t.taxonomyName === 'category')
    .map(t => decodeEntities(t.name)),
  year: n.PortfolioFields?.year || '',
  url: n.PortfolioFields?.url || '',
  desc: decodeEntities(n.PortfolioFields?.description),
})

// Fetches the full project list from WPGraphQL at build/prerender time and
// bakes it into the SSR payload (fixed useAsyncData key → no client refetch).
// Falls back to the static content.js list if WP is unreachable, so dev-offline
// and a WP outage during `generate` degrade gracefully instead of breaking.
export const useProjects = () => useAsyncData('wp-projects', async () => {
  const endpoint = useRuntimeConfig().public.wpGraphqlEndpoint
  try {
    const nodes = []
    let after = null
    do {
      const res = await $fetch(endpoint, {
        method: 'POST',
        body: { query: QUERY, variables: { after } },
      })
      if (res.errors?.length) throw new Error(res.errors[0].message)
      const conn = res.data.portfolios
      nodes.push(...conn.nodes)
      after = conn.pageInfo.hasNextPage ? conn.pageInfo.endCursor : null
    } while (after)
    return nodes.map(mapNode)
  } catch (err) {
    console.warn('[useProjects] WP fetch failed, using static fallback:', err?.message || err)
    return content.allProjects
  }
})
