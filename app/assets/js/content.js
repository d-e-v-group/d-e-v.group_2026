export default {
  brand: {
    name: "Development Group",
    headline:
      "Technical direction and development for brands and creative teams",
    pitch:
      "Development Group is an experienced affiliation of creative technologists dedicated to navigating our partners smoothly through the digital seas. Shopify, headless, complex builds.",
    status: "Accepting Q3 2026 projects",
    year: "Est. 2013",
    location: "LA · STL · PDX · Worldwide",
    email: "hello@developmentgroup.co",
  },

  social: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
  ],

  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Team", href: "#team" },
  ],

  sections: {
    services: "What we do.",
    work: "What we've built.",
    testimonials: "What they say.",
    team: "Who we are.",
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
      n: "01",
      title: "Technical Direction & Leadership",
      meta: "Embedded Expertise",
      desc: "Decades of agency experience, available when you need it. We join strategy sessions, shape the technical brief, and keep the build honest from kickoff to launch—client-facing or behind the scenes.",
    },
    {
      n: "02",
      title: "Design-Driven Development",
      meta: "Design → Production",
      desc: "Our design background gives us an edge in how we build. We deliver high-fidelity digital experiences built to scale—with immersive interactions and implementation that impresses your design team.",
    },
    {
      n: "03",
      title: "Ecommerce",
      meta: "Storefront → Fulfillment",
      desc: "We go far beyond template builds. Custom product experiences, dynamic upsells, customer success integrations, inventory and shipping flows—we help you get the most out of your stack so you can focus on your customers.",
    },
    {
      n: "04",
      title: "Scalable Architecture & Technical Planning",
      meta: "Built to Last",
      desc: "We plan the boring parts carefully so the fun parts don't fall over. Data models, deployment strategy, caching, third-party integrations, and fail points—engineered for long-term growth and smooth operations.",
    },
    {
      n: "05",
      title: "Data-Driven Marketing & CRO",
      meta: "Test → Convert",
      desc: "From A/B testing to personalized campaigns, we build experiences backed by real data. Custom email and SMS flows, targeted landing pages, and UI/UX improvements that drive conversions.",
    },
    {
      n: "06",
      title: "High-Code / Low-Code / No-Code Systems",
      meta: "Right Tool, Right Job",
      desc: "Not every problem needs a custom build. We match the right tools to your actual needs—Webflow or Framer for marketing sites, Shopify for ecommerce, and Airtable or Softr for rapid workflow testing and launch.",
    },
    {
      n: "07",
      title: "AI, Blockchain & Emerging Tech",
      meta: "Days, Not Weeks",
      desc: "From on-chain operations across Ethereum and Layer 2 ecosystems to AI-powered internal workflows, we help clients move faster and build smarter. We build in days what used to take weeks and help teams integrate these tools into their own products.",
    },
    {
      n: "08",
      title: "Legacy Systems & Replatforming",
      meta: "Migrate Without Downtime",
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

  allProjects: [
    {
      title: "Coachella",
      url: "",
      desc: "Information website for the premier music and arts festival.",
      year: "2013–2016",
      category: ["Web Site"],
      partner: "Heavenspot",
      image:
        "https://devgru-bucket.s3.us-west-1.amazonaws.com/devgru-api/2018/10/12222931/screencapture-web-archive-org-web-20160404190113-https-www-coachella-com-2018-06-14-16_37_08-1024x719.jpg",
    },
    {
      title: "Animal Collective",
      url: "https://www.myanimalhome.net",
      desc: "Online home base for the best experimental rock band.",
      year: "2015–2022",
      category: ["Web Experience", "Web Site"],
      partner: "",
      image:
        "https://devgru-bucket.s3.us-west-1.amazonaws.com/devgru-api/2019/03/12203258/animal-collective-1024x686.jpg",
    },
    {
      title: "Bobby Flay",
      url: "https://bobbyflay.com/",
      desc: "Online home for the lovable celebrity chef.",
      year: "2021",
      category: ["Headless Website"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2023-01-18-at-8.01.59-PM-1024x652.jpg",
    },
    {
      title: "Long John Silvers",
      url: "",
      desc: "Online home for America's favorite fast seafood.",
      year: "2020",
      category: ["Web Site"],
      partner: "Manufactur",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-11.09.22-PM-1024x683.jpg",
    },
    {
      title: "Sasha Grey",
      url: "https://sashagrey.com/",
      desc: "Headless homebase and Shopify theme for the prolific streamer and content creator.",
      year: "2023",
      category: ["Headless Website", "Shopify Website"],
      partner: "Development Group",
      image:
        "https://wp.devgru.net/wp-content/uploads/2024/02/Screenshot-2024-02-13-at-9.38.25AM-1024x579.jpg",
    },
    {
      title: "Blue Apron",
      url: "",
      desc: "Frontend coding for popular meal box delivery startup.",
      year: "2013",
      category: ["Web Site"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-6.54.29-PM-1024x612.jpg",
    },
    {
      title: "Oakscale",
      url: "https://www.oakscale.com/",
      desc: "Webflow project for the world's first vertically integrated franchise development company.",
      year: "2024",
      category: ["Web Site", "Webflow"],
      partner: "Development Group",
      image:
        "https://wp.devgru.net/wp-content/uploads/2025/01/oakscale-1024x559.jpg",
    },
    {
      title: "Studio Levin Wagner",
      url: "https://www.studiolevinwagner.com/",
      desc: "Portfolio for a luxury brand focused creative studio.",
      year: "2024",
      category: ["Headless Website", "Web Site"],
      partner: "Development Group",
      image:
        "https://wp.devgru.net/wp-content/uploads/2025/01/Screenshot-2025-01-24-at-3.47.20PM-1024x578.png",
    },
    {
      title: "Animal Collective MPP 15 / ST 20",
      url: "https://ac-mpp15-st20.netlify.app/",
      desc: "MPP turned 15 and Sung Tongs turned 20 — so we made a mini site.",
      year: "2024",
      category: ["Headless Website", "Web Experience", "Web Site"],
      partner: "Development Group",
      image:
        "https://wp.devgru.net/wp-content/uploads/2025/01/ac-mpp-st-1024x559.jpg",
    },
    {
      title: "Red Nose Day Banners",
      url: "",
      desc: "Banner ads to support the long-standing charity.",
      year: "2024",
      category: ["Banner Ads"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2025/01/Screenshot-2025-01-24-at-4.12.22PM.png",
    },
    {
      title: "Girlgaze Webzine",
      url: "",
      desc: "Webzine and website for photography focused creative network.",
      year: "2018",
      category: ["Web Experience", "Web Site"],
      partner: "",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2023-01-18-at-8.14.58-PM-1024x564.jpg",
    },
    {
      title: "wwfh",
      url: "https://wwfh.community",
      desc: "Community platform set out to unite and empower women.",
      year: "2023",
      category: ["Headless Website"],
      partner: "Development Group",
      image:
        "https://wp.devgru.net/wp-content/uploads/2024/02/Screenshot-2024-02-13-at-9.38.38AM-1024x577.jpg",
    },
    {
      title: "dm13.net",
      url: "https://dm13.net/",
      desc: "Site for this DTLA embroidery and screenprinting dynasty.",
      year: "2023",
      category: ["Headless Website"],
      partner: "Development Group",
      image:
        "https://wp.devgru.net/wp-content/uploads/2024/02/Screenshot-2024-02-13-at-9.38.55AM-1024x573.jpg",
    },
    {
      title: "Lemon Perfect",
      url: "",
      desc: "Storefront for refreshing lemon beverage company.",
      year: "2020",
      category: ["Shopify Website"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-10.51.29-PM-1024x697.jpg",
    },
    {
      title: "Squiggle DAO",
      url: "https://www.squiggledao.com/",
      desc: "Interactive gallery and education site for a bluechip NFT DAO.",
      year: "2022",
      category: ["Headless Website", "Web3"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2023-01-18-at-7.59.30-PM-1024x649.jpg",
    },
    {
      title: "Bruce Weber",
      url: "https://bruceweber.com/",
      desc: "Portfolio site for a top fashion photographer and filmmaker.",
      year: "2018",
      category: ["Headless Website"],
      partner: "Frank Collective",
      image:
        "https://devgru-bucket.s3.us-west-1.amazonaws.com/devgru-api/2018/10/12214139/Screen-Shot-2019-03-12-at-2.41.22-PM-1024x720.png",
    },
    {
      title: "Code Climate",
      url: "https://codeclimate.com/",
      desc: "Brochure site for a software management SaaS startup.",
      year: "2021",
      category: ["Headless Website"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2023-01-18-at-8.03.45-PM-1024x639.jpg",
    },
    {
      title: "Autobio",
      url: "https://autobiotags.com/",
      desc: "Webapp for a user-generated automotive storytelling startup.",
      year: "2021",
      category: ["Web App"],
      partner: "Manufactur",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/autobio-1024x585.jpg",
    },
    {
      title: "Susan David",
      url: "https://www.susandavid.com/",
      desc: "Media website for a renowned management thinker and speaker.",
      year: "2022",
      category: ["Headless Website"],
      partner: "Made Shop",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2022-10-27-at-4.18.02-PM-1024x586.jpg",
    },
    {
      title: "Goldteeth & Co.",
      url: "https://goldteethandco.com/",
      desc: "High-end portfolio for a photography agency.",
      year: "2021",
      category: ["Headless Website"],
      partner: "Hugo & Marie",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2023-01-18-at-7.58.38-PM-1024x638.jpg",
    },
    {
      title: "Live Tinted",
      url: "",
      desc: "Ecommerce website for an international beauty brand.",
      year: "2020",
      category: ["Shopify Website"],
      partner: "Manufactur",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2023-01-18-at-8.33.40-PM-1024x581.jpg",
    },
    {
      title: "Sia – Move Your Body Studio",
      url: "",
      desc: 'Photobooth app promoting Sia\'s "Move Your Body."',
      year: "2017",
      category: ["Web App", "Web Experience"],
      partner: "Manufactur",
      image:
        "https://devgru-bucket.s3.us-west-1.amazonaws.com/devgru-api/2019/03/12203420/sia-moveyourbody-1024x637.jpg",
    },
    {
      title: "Type A Deodorant",
      url: "",
      desc: "Ecommerce site for a subscription based deodorant company.",
      year: "2020",
      category: ["Shopify Website"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-10.53.31-PM-1024x670.jpg",
    },
    {
      title: "RafterOne",
      url: "https://www.rafter.one/",
      desc: "Marketing website for a consulting firm.",
      year: "2022",
      category: ["Web Site"],
      partner: "Tank",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2022-10-27-at-4.28.37-PM-1024x583.jpg",
    },
    {
      title: "Store No. 8",
      url: "",
      desc: "Web hub for Walmart's innovation incubator.",
      year: "2020",
      category: ["Headless Website"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-10.54.30-PM-1024x559.jpg",
    },
    {
      title: "ReactNetwork",
      url: "https://www.reactnetwork.io/",
      desc: "Website for a renewable energy startup.",
      year: "2022",
      category: ["Headless Website"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2023-01-18-at-8.01.27-PM-1024x697.jpg",
    },
    {
      title: "Subliminal Projects",
      url: "https://subliminalprojects.com/",
      desc: "Site for Shepard Fairey's LA project space and gallery.",
      year: "2021",
      category: ["Headless Website"],
      partner: "Creative Drinking Agency",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/subliminal-1024x586.jpg",
    },
    {
      title: "Animal Collective – Time Skiffs",
      url: "https://www.myanimalhome.net/",
      desc: "Web experience promoting AC's eleventh studio album.",
      year: "2022",
      category: ["Web Experience"],
      partner: "",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/timeskiffs-1024x584.jpg",
    },
    {
      title: "Panda Bear – Buoys",
      url: "https://panda-buoys.netlify.app/",
      desc: "Trippy 3D dolphin vibing to Panda Bear's 2018 LP.",
      year: "2018",
      category: ["Web Experience", "Web Site"],
      partner: "Development Group",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-10.05.00-PM-1024x705.jpg",
    },
    {
      title: "The Square Community",
      url: "https://square-community.eagletracks.net/",
      desc: "Interactive ambient sound visual collaboration.",
      year: "2022",
      category: ["Web Experience"],
      partner: "",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2022-10-27-at-4.12.18-PM-1024x584.jpg",
    },
    {
      title: "Sailthru",
      url: "",
      desc: "Website for a marketing automation and content company.",
      year: "2021",
      category: ["Web Site"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-9.10.31-PM-1024x610.jpg",
    },
    {
      title: "Vans Channel 66 TV",
      url: "https://www.vans.com/en-us/channel66",
      desc: "Online home for Vans' audio-visual livestream programming.",
      year: "2021",
      category: ["Web Experience"],
      partner: "Creative Drinking Agency",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/ch66-1024x586.jpg",
    },
    {
      title: "Live Ayurveda",
      url: "",
      desc: "Shopify site for a wellness brand.",
      year: "2022",
      category: ["Shopify Website"],
      partner: "Made Shop",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-19-at-12.28.29-PM-1024x761.jpg",
    },
    {
      title: "Recurrent Ventures",
      url: "https://recurrent.io/",
      desc: "Portfolio site for a digital media venture firm.",
      year: "2022",
      category: ["Web Site"],
      partner: "Tank",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2022-10-27-at-4.28.20-PM-1024x584.jpg",
    },
    {
      title: "Valorant",
      url: "",
      desc: "Banner ads for Riot Games' Valorant.",
      year: "2019",
      category: ["Banner Ads"],
      partner: "AV Squad",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2023-01-18-at-8.48.01-PM-1024x623.jpg",
    },
    {
      title: "Panda Bear & Sonic Boom – Reset",
      url: "https://pandabearofficial.com/",
      desc: "Splash page promoting the collaborative album Reset.",
      year: "2022",
      category: ["Web Site"],
      partner: "",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2022-10-27-at-4.16.41-PM-1024x583.jpg",
    },
    {
      title: "Scale Venture Partners",
      url: "",
      desc: "Even venture capitalists need a website.",
      year: "2019",
      category: ["Web Site"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-9.06.53-PM-1024x690.jpg",
    },
    {
      title: "SICMR",
      url: "https://www.sicmr.com/",
      desc: "Splash page for SICMR, LLC.",
      year: "2022",
      category: ["Web Site"],
      partner: "",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2022-10-27-at-4.14.54-PM-1024x585.jpg",
    },
    {
      title: "The DAM",
      url: "",
      desc: "Discover art!",
      year: "2018",
      category: ["Web Site"],
      partner: "Manufactur",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-11.13.20-PM-1024x757.jpg",
    },
    {
      title: "Zone Out – Desert Daze",
      url: "https://zoneout.desertdaze.org/",
      desc: "Interactive visual music player promoting Desert Daze.",
      year: "2019",
      category: ["Web Experience"],
      partner: "",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/zone-1024x580.jpg",
    },
    {
      title: "Avey Tare – Cows on Hourglass Pond",
      url: "https://avey-cows.netlify.app/",
      desc: "Toss some cows around and jam out to Avey Tare's 2019 LP.",
      year: "2019",
      category: ["Web Experience"],
      partner: "Development Group",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-9.36.13-PM-1024x687.jpg",
    },
    {
      title: "Pretty Fabulous by Jerrod",
      url: "",
      desc: "Recipe ecommerce site for a confectionary influencer.",
      year: "2022",
      category: ["Shopify Website"],
      partner: "Manufactur",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2023-01-18-at-8.16.35-PM-1024x603.jpg",
    },
    {
      title: "Casma",
      url: "",
      desc: "Site for a molecular biology and drug discovery organization.",
      year: "2022",
      category: ["Web Site"],
      partner: "Tank",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-9.16.45-PM-1024x680.jpg",
    },
    {
      title: "Forest Lawn",
      url: "",
      desc: "Website for LA's most famous cemetery network.",
      year: "2018",
      category: ["Web Site"],
      partner: "M&C Saatchi LA",
      image:
        "https://devgru-bucket.s3.us-west-1.amazonaws.com/devgru-api/2019/03/12215357/Screen-Shot-2019-03-12-at-2.53.39-PM-1024x675.png",
    },
    {
      title: "Vans Custom Culture",
      url: "https://customculture.vans.com/",
      desc: "Website for Vans' annual high-school creativity contest.",
      year: "2022",
      category: ["Web Site"],
      partner: "Creative Drinking Agency",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/vanscc-1024x582.jpg",
    },
    {
      title: "Marilyn Monroe",
      url: "",
      desc: "Historic site for an American icon.",
      year: "2015",
      category: ["Web Site"],
      partner: "Frank Collective",
      image:
        "https://devgru-bucket.s3.us-west-1.amazonaws.com/devgru-api/2019/03/12214935/Screen-Shot-2019-03-12-at-2.47.56-PM-1024x726.png",
    },
    {
      title: "Whitehouse Post",
      url: "https://www.whitehousepost.com/",
      desc: "Web portfolio for an international post-production agency.",
      year: "2014–2022",
      category: ["Web Site"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2023-01-18-at-7.57.58-PM-1024x645.jpg",
    },
    {
      title: "Hudson Institute",
      url: "",
      desc: "Web home for a national life-coaching network.",
      year: "2018",
      category: ["Web Site"],
      partner: "",
      image:
        "https://devgru-bucket.s3.us-west-1.amazonaws.com/devgru-api/2019/03/12220757/Screen-Shot-2019-03-12-at-2.58.51-PM-1024x722.png",
    },
    {
      title: "Transverse Temporal Gyrus",
      url: "",
      desc: "Site for the Danny Perez × Animal Collective installation at the Guggenheim.",
      year: "2012",
      category: ["Web Experience"],
      partner: "Development Group",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-10.00.41-PM-1024x705.jpg",
    },
    {
      title: "Relay/GSE",
      url: "",
      desc: "Continuing education for educators.",
      year: "2015",
      category: ["Web Site"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-7.21.15-PM-1024x683.jpg",
    },
    {
      title: "Xant",
      url: "",
      desc: "Marketing site for a sales engagement platform.",
      year: "2019",
      category: ["Web Site"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-9.08.43-PM.jpg",
    },
    {
      title: "Animal Collective – Tangerine Reef",
      url: "",
      desc: "Audio-visual web experience for the 2018 album.",
      year: "2018",
      category: ["Web Experience", "Web Site"],
      partner: "Development Group",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-9.53.43-PM-1024x603.jpg",
    },
    {
      title: "Arrive Market",
      url: "",
      desc: "Shopify solution for a multi-vendor CBD marketplace.",
      year: "2020",
      category: ["Shopify Website"],
      partner: "Manufactur",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-11.25.32-PM-1024x593.jpg",
    },
    {
      title: "Dart Collective",
      url: "",
      desc: "Website for LA's hippest wedding entertainment company.",
      year: "2017",
      category: ["Headless Website"],
      partner: "Creative Drinking Agency",
      image:
        "https://devgru-bucket.s3.us-west-1.amazonaws.com/devgru-api/2019/03/12203552/dart-1024x684.jpg",
    },
    {
      title: "Muhammad Ali",
      url: "",
      desc: "Website for the greatest of all time.",
      year: "2015",
      category: ["Web Site"],
      partner: "Frank Collective",
      image:
        "https://devgru-bucket.s3.us-west-1.amazonaws.com/devgru-api/2019/03/12214734/Screen-Shot-2019-03-12-at-2.47.06-PM-1024x636.png",
    },
    {
      title: "Avey Tare – Eucalyptus Puzzle",
      url: "https://aveytare-eucalyptus-puzzle.netlify.app/",
      desc: "Interactive jigsaw puzzle celebrating the Eucalyptus LP.",
      year: "2017",
      category: ["Web Experience"],
      partner: "Development Group",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-7.50.35-PM-1024x725.jpg",
    },
    {
      title: "Bauscher Hepp",
      url: "https://www.bauscherhepp.com/",
      desc: "Catalog site for an international tabletop and dinnerware distributor.",
      year: "2021",
      category: ["Shopify Website"],
      partner: "Manufactur",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/bhi-1024x585.jpg",
    },
    {
      title: "Authentic Brands Group",
      url: "",
      desc: "Website for a collection of iconic American brands.",
      year: "2017",
      category: ["Web Site"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-7.54.56-PM-1024x644.jpg",
    },
    {
      title: "Desert Daze",
      url: "",
      desc: "Web home for SoCal's most psychedelic music festival.",
      year: "2016–2021",
      category: ["Web Site"],
      partner: "",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2023-01-18-at-8.17.42-PM-1024x563.jpg",
    },
    {
      title: "Album Coffee",
      url: "https://albumcoffee.com/",
      desc: "Web experience and ecommerce for a London arts and coffee company.",
      year: "2022",
      category: ["Shopify Website", "Web Experience"],
      partner: "",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/albumcoffee-1024x584.jpg",
    },
    {
      title: "Avey Tare's Slasher Flicks – Enter the Slasher House",
      url: "",
      desc: "A haunted website for the experimental power trio.",
      year: "2014",
      category: ["Web Experience", "Web Site"],
      partner: "Development Group",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-9.48.49-PM-1024x611.jpg",
    },
    {
      title: "Avant Gerard",
      url: "",
      desc: "Portfolio site for a multimedia agency.",
      year: "2014",
      category: ["Web Site"],
      partner: "Avant Gerard",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/AG_website_2013_landing_1600-1024x672.jpg",
    },
    {
      title: "The Energy Project",
      url: "",
      desc: "Website for the workplace energy consultancy.",
      year: "2017",
      category: ["Web Site"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-7.46.08-PM-1024x599.jpg",
    },
    {
      title: "RedSky Capital",
      url: "",
      desc: "Website for urban real estate developers.",
      year: "2017",
      category: ["Web Site"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-7.43.08-PM-1024x562.jpg",
    },
    {
      title: "Avey Tare – Down There",
      url: "",
      desc: "Our first site for the Animal Collective fam.",
      year: "2010",
      category: ["Web Experience", "Web Site"],
      partner: "Development Group",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-9.43.09-PM-1024x599.jpg",
    },
    {
      title: "Xsspace",
      url: "https://www.xsspace.com/",
      desc: "Website for a New York based landscape designer.",
      year: "2022",
      category: ["Web Site"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2023-01-18-at-8.02.49-PM-1024x646.jpg",
    },
    {
      title: "NFTE",
      url: "",
      desc: "Website for a national education and career-training non-profit.",
      year: "2018",
      category: ["Web Site"],
      partner: "Frank Collective",
      image:
        "https://devgru-bucket.s3.us-west-1.amazonaws.com/devgru-api/2019/03/12215549/nfte-1024x672.jpg",
    },
    {
      title: "BOLDR",
      url: "",
      desc: "Ecom site for a performance energy supplement startup.",
      year: "2019",
      category: ["Shopify Website"],
      partner: "Manufactur",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-11.22.15-PM-1024x755.jpg",
    },
    {
      title: "Condé Nast Traveler Passport",
      url: "",
      desc: "Site showcasing promotions from the global media giant.",
      year: "2014",
      category: ["Web Site"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-7.05.07-PM-1024x694.jpg",
    },
    {
      title: "Consulate NYC",
      url: "https://consulatenyc.com/",
      desc: "Portfolio site for a film & video agency.",
      year: "2015–2022",
      category: ["Web Site"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2023-01-18-at-7.58.14-PM-1024x649.jpg",
    },
    {
      title: "Creative Drinking",
      url: "",
      desc: "OG website for the agency / creative meetup OGs.",
      year: "2017",
      category: ["Web Site"],
      partner: "Creative Drinking Agency",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-10.12.54-PM-1024x617.jpg",
    },
    {
      title: "CultureIQ",
      url: "",
      desc: "Website for the organizational culture platform.",
      year: "2016",
      category: ["Web Site"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-7.37.50-PM-1024x600.jpg",
    },
    {
      title: "David Energy",
      url: "https://www.davidenergy.com/",
      desc: "Website for a modern energy provider.",
      year: "2022",
      category: ["Headless Website"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2023-01-18-at-7.59.09-PM-1024x650.jpg",
    },
    {
      title: "Dumbo Arts Festival",
      url: "",
      desc: "Website for the hippest art festival under the Manhattan Bridge.",
      year: "2014–2016",
      category: ["Web Site"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-7.14.01-PM-1024x727.jpg",
    },
    {
      title: "Durolabs",
      url: "https://www.durolabs.co/",
      desc: "Website for a hardware focused startup.",
      year: "2021",
      category: ["Headless Website"],
      partner: "Manufactur",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/durolabs-1024x584.jpg",
    },
    {
      title: "Eagle Tracks",
      url: "https://eagletracks.net/",
      desc: "Classic homepage for an LA music studio and record label.",
      year: "2022",
      category: ["Web Experience"],
      partner: "",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2022-10-27-at-4.08.45-PM-1024x587.jpg",
    },
    {
      title: "Enroot",
      url: "https://drinkenroot.com/",
      desc: "Headless ecommerce for Brad Pitt's beverage enterprise.",
      year: "2019–2022",
      category: ["Headless Website", "Shopify Website"],
      partner: "Manufactur",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/enroot-1024x585.jpg",
    },
    {
      title: "Golden Projects",
      url: "",
      desc: "Coded the motion division spun up by Goldteeth & Co.",
      year: "2021",
      category: ["Headless Website"],
      partner: "Hugo & Marie",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-11.03.24-PM-1024x672.jpg",
    },
    {
      title: "Hot Chip – A Bath Full of Ecstasy",
      url: "",
      desc: "Promo website for Hot Chip's seventh studio album.",
      year: "2019",
      category: ["Web Experience"],
      partner: "Development Group",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2023-01-18-at-8.46.50-PM.jpg",
    },
    {
      title: "Hotel Two Sheds",
      url: "",
      desc: "Interactive video website for goodvibe rockers Two Sheds.",
      year: "2015",
      category: ["Web Experience"],
      partner: "Development Group",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-7.25.35-PM-1024x648.jpg",
    },
    {
      title: "Joust",
      url: "",
      desc: "Frontend for browser-based VFX viewing software.",
      year: "2014",
      category: ["Web App"],
      partner: "Avant Gerard",
      image: "https://wp.devgru.net/wp-content/uploads/2023/01/0-1024x576.jpg",
    },
    {
      title: "Katherine Sheehan Photography",
      url: "https://www.katherinelevinsheehan.com/",
      desc: "Portfolio site for an LA based lifestyle photographer.",
      year: "2022",
      category: ["Headless Website"],
      partner: "",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2022-10-27-at-4.06.07-PM-1024x586.jpg",
    },
    {
      title: "Mars Argo",
      url: "https://www.marsargo.com/",
      desc: "Simple site promoting long-awaited new music from Mars Argo.",
      year: "2022",
      category: ["Web Site"],
      partner: "",
      image:
        "https://wp.devgru.net/wp-content/uploads/2022/10/Screen-Shot-2022-10-27-at-4.14.04-PM-1024x587.jpg",
    },
    {
      title: "Moloch DAO",
      url: "https://molochdao.com/",
      desc: "Site for the original grant-giving DAO.",
      year: "2021",
      category: ["Web Site", "Web3"],
      partner: "Raid Guild",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-9.13.22-PM-1024x700.jpg",
    },
    {
      title: "Monogram",
      url: "",
      desc: "Headless solution for a robot-assisted orthopedic startup.",
      year: "2019",
      category: ["Headless Website"],
      partner: "Manufactur",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-11.19.32-PM-1024x652.jpg",
    },
    {
      title: "Morrissey",
      url: "",
      desc: "A site for the famous international playboy (never launched).",
      year: "2017",
      category: ["Web Site"],
      partner: "Manufactur",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-9.05.09-PM-1024x565.jpg",
    },
    {
      title: "O'Connell's",
      url: "https://oclm.com/",
      desc: "SoCal's premiere commercial landscaping outfit gets a website.",
      year: "2020",
      category: ["Headless Website"],
      partner: "Manufactur",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-11.20.00-PM-1024x702.jpg",
    },
    {
      title: "OurMinutes – Tourneau",
      url: "",
      desc: "Media platform for a prestigious watch dealer.",
      year: "2014",
      category: ["Web Site"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-6.58.12-PM-1024x739.jpg",
    },
    {
      title: "Qriously",
      url: "",
      desc: "Online home for a market research and polling company.",
      year: "2016",
      category: ["Web Site"],
      partner: "Frank Collective",
      image:
        "https://wp.devgru.net/wp-content/uploads/2023/01/Screen-Shot-2023-01-18-at-7.30.06-PM-1024x605.jpg",
    },
  ],

  team: [
    {
      name: "Brendan Sheehan",
      role: "Founder / Developer",
      initials: "BS",
      photo: "/images/brendan.gif",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Mike Watt",
      role: "Operations / Developer",
      initials: "MW",
      photo: "/images/watt.gif",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Mike Chopko",
      role: "Growth / Developer",
      initials: "MC",
      photo: "/images/chopko.gif",
      linkedin: "#",
      github: "#",
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
    "Frontend Frameworks: React.js, Vue.js, Nuxt.js, Next.js, Tailwind, SCSS",
    "Intereractice Experiences: WebGL, Canvas, Three.js, WebAudio API, Pixi.js",
    "Fullstack: Headless, Serverless, GraphQL, Node.js, PHP, MYSQL",
    "Ecommerce: Shopify, WooComerce",
    "Content Managment: Sanity, Contentful, Strapi, Wordpress",
    "Architecture: AWS, Digital Ocean, Pantheon, WPEngine",
    "CRM: Hubspot, Klaviyo, SalesForce",
    "No-code / Low-code: Webflow, Framer, Hubspot, Airtable",
  ],
};
