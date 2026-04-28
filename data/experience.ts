export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Mobile Engineer",
    company: "Maya",
    location: "Philippines",
    period: "Sept 2025 – Present",
    current: true,
    description:
      "Building and maintaining common modules, shared SDKs, reusable UI components, and internal tools for Maya's mobile platform.",
    achievements: [
      "Build and maintain shared SDKs and reusable UI components used across the platform",
      "Mentoring junior developers and raising the team's engineering standards",
      "Staying current on Flutter, Android, and iOS trends to evolve Maya's mobile development practices",
    ],
    technologies: ["Flutter", "Dart", "Android", "iOS", "CI/CD"],
  },
  {
    id: "exp-2",
    role: "Mobile Software Engineer",
    company: "PropHero",
    location: "Remote",
    period: "Jun 2023 – Aug 2025",
    current: false,
    description:
      "Led architectural improvements and feature development for a real estate mobile platform, driving significant gains in performance, maintainability, and test coverage.",
    achievements: [
      "Implemented Clean Architecture principles, reducing code complexity by 40%",
      "Engineered a reusable checklist feature that cut implementation time by 60%",
      "Achieved 85% unit test coverage, reducing production bugs by 40%",
      "Optimized app responsiveness, improving load times by 30%",
      "Integrated push notifications with 98% delivery success rate",
      "Integrated an AI agent via WebSocket and Hubspot via method channels (Android & iOS native)",
      "Adopted Shorebird for OTA patching directly to production builds",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Hubspot", "WebSocket", "Shorebird", "CI/CD"],
  },
  {
    id: "exp-3",
    role: "Flutter Engineer",
    company: "PDAX",
    location: "Philippines",
    period: "2022 – 2023",
    current: false,
    description:
      "Developed the CaaS Admin Console for PDAX, enabling Ops and Finance teams to manage user accounts, generate reports, and configure platform settings.",
    achievements: [
      "Built the CaaS Admin Console from the ground up for internal Ops and Finance teams",
      "Implemented balance correction features for user transactions",
      "Enabled/disabled trading and fiat/crypto transactions",
      "Managed CI/CD pipeline for deployment",
    ],
    technologies: ["Flutter", "Dart", "CI/CD", "REST APIs"],
  },
  {
    id: "exp-4",
    role: "Mobile Software Engineer",
    company: "Stratpoint Global Outsourcing Inc.",
    location: "Philippines",
    period: "2019 – 2022",
    current: false,
    description:
      "Worked across two major mobile products — GOMO PH (Flutter) and Globe at Home App (Android) — taking on team lead responsibilities and owning production deployments.",
    achievements: [
      "Pioneered the revamp of the GOMO PH app and developed an E-commerce feature",
      "Trained as team lead: guided and reviewed teammates' merge requests",
      "Developed 'Find the Duck' anniversary mini-game and 'Hohohome' Christmas feature for Globe at Home",
      "Redesigned the Globe at Home app using Dependency Injection and MVVM",
      "Maintained and updated unit tests on every code change",
    ],
    technologies: ["Flutter", "Kotlin", "Android", "MVVM", "Dependency Injection", "Unit Testing"],
  },
  {
    id: "exp-5",
    role: "Junior Android Developer",
    company: "Amentech Technologies Inc.",
    location: "Philippines",
    period: "2018 – 2019",
    current: false,
    description:
      "Designed mobile workflows and developed Android applications from scratch for client projects.",
    achievements: [
      "Designed mobile workflow for client projects",
      "Developed Android applications based on defined workflows",
      "Responsible for testing and debugging delivered applications",
    ],
    technologies: ["Android", "Kotlin", "Java"],
  },
];
