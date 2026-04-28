export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  featured: boolean;
  size: "large" | "medium" | "small";
  gradient: string;
}

export const projects: Project[] = [
  {
    id: "maya",
    title: "Maya",
    description: "Senior Mobile Engineer building shared SDKs and reusable UI components",
    longDescription:
      "Building and maintaining common modules, shared SDKs, reusable UI components, and internal tools at one of the Philippines' leading digital finance super apps. Mentoring junior developers and helping evolve Maya's mobile development standards across Flutter, Android, and iOS.",
    tags: ["Flutter", "Android", "iOS", "SDK", "Clean Architecture"],
    image: "/images/maya_app.png",
    appStoreUrl: "https://apps.apple.com/ph/app/maya-savings-loans-cards/id991673877",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.paymaya",
    featured: true,
    size: "large",
    gradient: "from-green-600/20 to-emerald-600/20",
  },
  {
    id: "prophero",
    title: "PropHero",
    description: "Led Clean Architecture rewrite — 40% less code complexity, 85% unit test coverage",
    longDescription:
      "Led architectural improvements by implementing Clean Architecture principles, resulting in a 40% reduction in code complexity. Engineered a reusable checklist feature reducing implementation time by 60%. Optimized load times by 30%, achieved 98% push notification delivery, and integrated HubSpot, AI agent via WebSocket, and Shorebird for OTA deployments.",
    tags: ["Flutter", "Clean Architecture", "Firebase", "HubSpot", "Shorebird", "WebSocket"],
    image: "/images/prophero_portfolio.png",
    appStoreUrl: "https://apps.apple.com/au/app/prophero-portfolio/id1659329688",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.prophero.portfolio",
    featured: true,
    size: "medium",
    gradient: "from-violet-600/20 to-indigo-600/20",
  },
  {
    id: "shopsuki",
    title: "ShopSuki",
    description: "Revamped Flutter e-commerce app with GraphQL, Shopify & BoostCommerce",
    longDescription:
      "Revamped and rebuilt the ShopSuki mobile app from scratch as a part-time freelance project. Implemented code standards, integrated GraphQL and Shopify via REST API, and connected BoostCommerce for advanced commerce capabilities.",
    tags: ["Flutter", "GraphQL", "Shopify", "REST API", "BoostCommerce"],
    image: "/images/shopsuki_splash.jpeg",
    appStoreUrl: "https://apps.apple.com/ph/app/shop-suki/id1597268870",
    playStoreUrl: "https://play.google.com/store/apps/details?id=ph.shopsukiand",
    featured: true,
    size: "medium",
    gradient: "from-rose-600/20 to-pink-600/20",
  },
  {
    id: "arena-sports",
    title: "Arena Sports",
    description: "UK-based sports app — Flutter, Clean Architecture & Stripe payments",
    longDescription:
      "Led development of a UK-based sports booking app, implementing clean architecture for a maintainable codebase. Collaborated with designers, backend, and PM to deliver a polished UI/UX. Integrated Stripe payment gateway and deployed to the App Store and Google Play.",
    tags: ["Flutter", "Clean Architecture", "Stripe", "UI/UX"],
    image: "/images/arena_sports.jpeg",
    featured: false,
    size: "small",
    gradient: "from-amber-600/20 to-orange-600/20",
  },
  {
    id: "pdax",
    title: "PDAX Admin Console",
    description: "CaaS admin console for crypto ops, reports & transaction management",
    longDescription:
      "Developed the CaaS Admin Console for PDAX, enabling Ops and Finance teams to manage user accounts, generate reports, and configure settings. Implemented balance correction features, enabled/disabled trading and fiat/crypto transactions, and managed CI/CD for deployment.",
    tags: ["Flutter", "CI/CD", "Crypto", "Admin"],
    image: "/images/pdax_partner_console.png",
    featured: false,
    size: "small",
    gradient: "from-cyan-600/20 to-teal-600/20",
  },
  {
    id: "gomo",
    title: "GOMO PH",
    description: "Pioneered Flutter revamp of GOMO — telco e-commerce super app",
    longDescription:
      "Pioneered the full Flutter revamp of the GOMO PH app at Stratpoint. Developed and integrated an e-commerce feature, served as team lead, reviewed merge requests, managed production deployments, attended feature refinements, maintained unit tests, and designed reusable modular classes.",
    tags: ["Flutter", "E-commerce", "Android", "Unit Testing"],
    image: "/images/gomo_home.jpeg",
    appStoreUrl: "https://apps.apple.com/us/app/gomo-ph/id6443997082",
    playStoreUrl: "https://play.google.com/store/apps/details?id=ph.com.globe.gomo",
    featured: false,
    size: "small",
    gradient: "from-blue-600/20 to-sky-600/20",
  },
];
