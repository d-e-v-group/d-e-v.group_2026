export default {
  brand: {
    name: "Development Group",
    headline:
      "Technical direction and development for brands and creative teams",
    pitch:
      "Development Group is an experienced affiliation of creative technologists dedicated to navigating our partners smoothly through the digital seas.",
    status: "Accepting Q3 2026 projects",
    year: "Est. 2013",
    location: "LA · STL · PDX · Worldwide",
    email: "hello@d-e-v.group",
  },

  social: [
    { label: "GitHub", href: "https://github.com/orgs/d-e-v-group" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/d-e-v-group/",
    },
    // { label: "Instagram", href: "#" },
  ],

  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Team", href: "#team" },
  ],

  sections: {
    services: "What we do.",
    work: "What we've built.",
    testimonials: "What they say.",
    team: "Who we are.",
  },

  sectionQuotes: {
    services: "It is not down on any map; true places never are.",
    work: "The path to my fixed purpose is laid with iron rails.",
    testimonials: "A whale-ship was my Yale College and my Harvard.",
    team: "Call me Ishmael.",
  },

  testimonials: [
    {
      quote:
        "Since 2013 Development Group has been our primary tech partner. Their situational flexibility and willingness to jump in the trenches with us has been beyond valuable, and their attention to design has allowed us to deliver high quality output for our clients over the years.",
      name: "Jiffy Iuen",
      client: "Frank Collective",
      title: "Founder",
    },
    {
      quote:
        "They always pushed for and executed new ideas in the digital world, and we have been lucky to work with them developing projects for clients including Nike and Vans. AI robots got nothing on the human coding touch. 10/10 would recommend.",
      name: "Kimmy & Nathan",
      client: "Creative Drinking Agency",
      title: "Founders",
    },
    {
      quote:
        "I've approached them with ideas like puzzles that play my music when solved, roulette wheels that reveal animations and sounds when spun, and animated cows that break through ice. They never batted an eye. Their work has made making websites super fun for me.",
      name: "Avey Tare",
      client: "Animal Collective",
      title: "Founder",
    },
    {
      quote:
        "As a tech-first agency, it's imperative that our partners deliver the goods. We've tapped them for everything from code-intensive web apps and custom Shopify builds to fun interactive experiences. Not only do they nail it every time, but they're a blast to work with.",
      name: "Matthew Bowers",
      client: "Manufactur",
      title: "Co-Founder & CCO",
    },
    {
      quote:
        "Development Group is the secret sauce for our web projects. They talk like humans, they're super intuitive and easy to work with, and our designs are executed into fully functional browser experiences with an awesome attention to detail.",
      name: "Adam Blake",
      client: "The Made Shop",
      title: "Co-Founder & Design Partner",
    },
    {
      quote:
        "They took on custom Shopify development challenges with aplomb, unfazed by our rapid solution conception and code deployment requests. Beyond their technical capabilities, they were a thought partner in conceiving of the right solutions to our ecommerce needs.",
      name: "Neilesh Mutyala",
      client: "Live Tinted",
      title: "Co-Founder & COO",
    },
  ],

  services: [
    {
      title: "Technical Direction & Leadership",
      meta: "Steady at the Helm",
      icon: "thumbs-up",
      desc: "Decades of agency experience, available when you need it. We join strategy sessions, shape the technical brief, and keep the build honest from kickoff to launch. Client-facing or behind the scenes.",
    },
    {
      title: "Design-Driven Development",
      meta: "True to Course",
      icon: "pencil",
      desc: "Our design background gives us an edge in how we build. We deliver high-fidelity digital experiences built to scale with immersive interactions and implementation that impresses your design team.",
    },
    {
      title: "Ecommerce",
      meta: "Built for Trade",
      icon: "mailbox",
      desc: "We go far beyond template builds. Custom product experiences, dynamic upsells, customer success integrations, inventory and shipping flows. We help you get the most out of your stack so you can focus on your customers.",
    },
    {
      title: "Scalable Architecture & Technical Planning",
      meta: "Sound and Seaworthy",
      icon: "folder",
      desc: "We plan the boring parts carefully so the fun parts don't fall over. Data models, deployment strategy, caching, third-party integrations, and fail points. Engineered for long-term growth and smooth operations.",
    },
    {
      title: "Data-Driven Marketing & CRO",
      meta: "Navigate by the Numbers",
      icon: "documents",
      desc: "From A/B testing to personalized campaigns, we build experiences backed by real data. Custom email and SMS flows, targeted landing pages, and UI/UX improvements that drive conversions.",
    },
    /* {
      title: "High-Code / Low-Code / No-Code Systems",
      meta: "Trim for Conditions",
      icon: "mouse",
      desc: "Not every problem needs a custom build. We match the right tools to your actual needs: Webflow or Framer for marketing sites, Shopify for ecommerce, and Airtable or Softr for rapid workflow testing and launch.",
    },
    {
      title: "AI, Blockchain & Emerging Tech",
      meta: "Chart New Waters",
      icon: "bomb",
      desc: "From on-chain operations across Ethereum and Layer 2 ecosystems to AI-powered internal workflows, we help clients move faster and build smarter. We build in days what used to take weeks and help teams integrate these tools into their own products.",
    },
    */
    {
      title: "Legacy Systems & Replatforming",
      meta: "Refit for the Future",
      icon: "floppydisk",
      desc: "We've worked through decades of shifting technology and seen trends come and go. We breathe new life into aging platforms and can replatform to newer systems without downtime, SEO loss, or user disruption.",
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
    {
      name: "Brendan Sheehan",
      role: "Founder / Developer",
      initials: "BS",
      photo: "/images/brendan.jpg",
      linkedin: "https://www.linkedin.com/in/brendan-sheehan-12b3786/",
      github: "https://github.com/feemcgill",
    },
    {
      name: "Mike Watt",
      role: "Operations / Developer",
      initials: "MW",
      photo: "/images/watt.jpg",
      linkedin: "https://www.linkedin.com/in/mike-watt-b626b02b0/",
      github: "https://github.com/mikebikeboy",
    },
    {
      name: "Mike Chopko",
      role: "Growth / Developer",
      initials: "MC",
      photo: "/images/chopko.jpg",
      linkedin: "https://www.linkedin.com/in/mchopko/",
      github: "https://github.com/mchopko",
    },
  ],

  capabilitiesOld: [
    "HubSpot",
    "Shopify",
    "React.js",
    "Next.js",
    "AWS",
    "WordPress",
    "Vue.js",
    "Nuxt.js",
    "Headless",
    "CRM",
    "CMS",
    "CRO",
    "API",
    "WebGL",
    "Three.js",
    "Canvas",
    "CSS",
    "SCSS",
    "Node.js",
    "PHP",
    "Sanity CMS",
    "Contentful",
    "Strapi",
    "WooCommerce",
    "Webflow",
    "Figma Make",
    "Claude Code",
    "Liquid",
    "GraphQL",
    "NoCode",
    "Web 3",
    "MYSQL",
    "Serverless",
    "Klaviyo",
  ],
  capabilities: [
    "Frontend Frameworks: React, Vue, Nuxt, Next.js, Tailwind CSS, SCSS",
    "Interactive Experiences: WebGL, Canvas, Three.js, Web Audio API, PixiJS",
    "Full-Stack Development: Headless CMS, Serverless, GraphQL, Node.js, PHP, MySQL",
    "Ecommerce: Shopify, WooCommerce",
    "Content Management: WordPress, Sanity, Contentful, Strapi",
    "Architecture & Infrastructure: AWS, DigitalOcean, Pantheon, WP Engine",
    "CRM & Marketing: HubSpot, Klaviyo, Salesforce",
    "No-Code / Low-Code: Webflow, Framer, HubSpot, Airtable",
  ],
};
