export default {
  brand: {
    name: "Development Group",
    headline:
      "Technical direction and development for brands and creative teams",
    pitch:
      "Development Group is an experienced affiliation of creative technologists dedicated to navigating our partners smoothly through the digital seas. Shopify, headless, complex builds.",
    status: "Accepting Q3 2026 projects",
    year: "Est. 2014",
    location: "Los Angeles · St. Louis · Portland, OR · Worldwide",
    email: "hello@developmentgroup.co",
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Team", href: "#team" },
  ],

  sections: {
    services: "What we do.",
    work: "What we've built.",
    team: "Who we are.",
  },

  services: [
    {
      n: "01",
      title: "Technical Direction & Leadership",
      meta: "Strategy → Execution",
      desc: "We sit in on your kickoffs, shape the technical brief, and keep the build honest. Your studio leads the relationship; we lead the code.",
    },
    {
      n: "02",
      title: "Design-Driven Development",
      meta: "Figma → Production",
      desc: "Pixel-level Figma → production handoff with taste. Animations, custom cursors, real typography systems — whatever the design wants, built to last.",
    },
    {
      n: "03",
      title: "Scalable Architecture & Technical Planning",
      meta: "Systems Design",
      desc: "We plan the boring parts carefully so the fun parts don't fall over. Data models, deployment, caching, monitoring — the stuff that matters at 2am.",
    },
    {
      n: "04",
      title: "Analytics & Conversion Optimization",
      meta: "Measurement",
      desc: "Tracking that actually maps to business goals, not vanity dashboards. We wire in what matters and ship it with documentation your team can read.",
    },
    {
      n: "05",
      title: "Ecommerce Systems & Operations",
      meta: "Shopify • Headless",
      desc: "Years in Shopify, Next.js, headless builds. Custom storefronts, subscription logic, operations integrations — we've shipped the weird stuff.",
    },
    {
      n: "06",
      title: "High-Code / Low-Code / No-Code Systems",
      meta: "Full Spectrum",
      desc: "Not every problem needs a custom build. We choose the right tool — Webflow, Framer, custom, hybrid — based on what you actually need.",
    },
    {
      n: "07",
      title: "Legacy to Emerging Tech",
      meta: "Web1 → Web3",
      desc: "We've built on every generation of the web. Legacy migrations, headless re-platforms, Web3 identity — we've shipped it and learned the scars.",
    },
  ],

  projects: [
    {
      id: "autobio",
      client: "AutoBio",
      title: "Physical-to-Digital Identity Platform",
      video: "/videos/screencap_AUTOBIO.mp4",
      image: "https://wp.devgru.net/wp-content/uploads/2022/10/autobio.jpg",
      year: "2024",
      role: "Architecture • Build",
      body: "A full-stack platform bridging physical objects and digital identity through QR and NFC-enabled products. Users activate and manage dynamic profile pages tied to physical decals, creating a persistent, scannable identity layer. Initially launched within automotive communities, the platform is now expanding into institutional and exhibition environments.",
      stack: [
        "React / Next.js decoupled frontend",
        "Headless CMS with membership and moderated UGC system",
        "Custom ecommerce architecture",
        "QR / NFC activation and identity resolution layer",
      ],
      accent: "oklch(0.72 0.14 160)",
    },
    {
      id: "susan-david",
      client: "Susan David",
      title: "Digital Platform & Certification Ecosystem",
      video: "/videos/screencap_SUSAN-DAVID.mp4",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2022-10-27-at-4.18.02-PM.jpg",
      year: "2023",
      role: "Platform • CRM",
      body: "A unified platform combining content, commerce, and event infrastructure to support a global audience and professional certification programs. The experience enables seamless discovery across a large media library while facilitating registration for both virtual and in-person events. Development Group engineered custom cloud-based logic to intelligently deconstruct group purchases into individual attendee records, ensuring accurate downstream synchronization with HubSpot CRM.",
      stack: [
        "Decoupled architecture (React / Next.js)",
        "Headless CMS powering multi-format content delivery",
        "Custom Shopify storefront integration",
        "Scalable registration system",
        "HubSpot CRM synchronization",
      ],
      accent: "oklch(0.72 0.14 240)",
    },
    {
      id: "animal-collective",
      client: "Animal Collective",
      title: "Experimental Web Experiences",
      video: "/videos/screencap_ANIMAL-COLLECTIVE.mp4",
      image:
        "https://devgru-bucket.s3.us-west-1.amazonaws.com/devgru-api/2019/03/12203258/animal-collective.jpg",
      year: "2022–Ongoing",
      role: "Creative Tech",
      body: "A long-term creative and technical partnership producing immersive web environments that extend the band's sonic identity into the digital space. Each project explores nonlinear interaction, audio-reactive systems, and unconventional navigation paradigms.",
      stack: [
        "WebGL / Canvas-driven rendering systems",
        "Audio-reactive animation frameworks",
        "Custom interaction models and gamification",
        "Integrated multimedia pipelines and APIs",
      ],
      accent: "oklch(0.72 0.14 20)",
    },
    {
      id: "bobby-flay",
      client: "Bobby Flay",
      title: "Content Platform",
      video: "/videos/screencap_BOBBY-FLAY.mp4",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2023-01-18-at-8.01.59-PM.jpg",
      year: "2023",
      role: "CMS • Frontend",
      body: "A centralized digital ecosystem unifying recipes, editorial content, restaurants, and media appearances into a single, highly navigable experience. Designed for clarity, performance, and scale — while maintaining a sense of personality (including a custom fork cursor).",
      stack: ["Vue / Nuxt.js frontend", "Headless CMS architecture"],
      accent: "oklch(0.72 0.14 50)",
    },
    {
      id: "coachella",
      client: "Coachella",
      title: "High-Scale Festival Platform",
      image:
        "https://devgru-bucket.s3.us-west-1.amazonaws.com/devgru-api/2018/10/12222931/screencapture-web-archive-org-web-20160404190113-https-www-coachella-com-2018-06-14-16_37_08.jpg",
      video: "/videos/screencap_COACHELLA.mp4",
      year: "2021–Ongoing",
      role: "Infrastructure • Performance",
      body: "The primary digital platform for one of the world's most recognized music festivals, engineered to perform under extreme traffic conditions while delivering a seamless user experience. In parallel with the native app ecosystem, Development Group implemented cross-platform itinerary functionality, allowing users to create, persist, and share personalized schedules.",
      stack: [
        "Custom WordPress CMS and theme",
        "AWS-based infrastructure optimized for scale and resilience",
        "Performance-driven frontend architecture",
        "Cross-platform account and itinerary synchronization",
      ],
      accent: "oklch(0.72 0.14 300)",
    },
  ],

  team: [
    { name: "Brendan Sheehan", role: "Founder / Developer", initials: "BS" },
    { name: "Mike Watt", role: "Operations / Developer", initials: "MW" },
    { name: "Mike Chopko", role: "Growth / Developer", initials: "MC" },
  ],

  capabilities: [
    "HubSpot",
    "Shopify",
    "React.js",
    "Next.js",
    "AWS",
    "WordPress",
    "Vue.js",
    "Nuxt.js",
  ],
};
