export interface Skill {
  name: string;
  category: "mobile" | "backend" | "tools" | "cloud";
  proficiency: number; // 1-100
}

export const skills: Skill[] = [
  // Mobile
  { name: "Flutter", category: "mobile", proficiency: 95 },
  { name: "Dart", category: "mobile", proficiency: 93 },
  { name: "Kotlin", category: "mobile", proficiency: 82 },
  { name: "Android Dev", category: "mobile", proficiency: 80 },
  { name: "Clean Architecture", category: "mobile", proficiency: 92 },
  { name: "Unit Testing", category: "mobile", proficiency: 88 },

  // Backend / APIs
  { name: "GraphQL", category: "backend", proficiency: 82 },
  { name: "REST APIs", category: "backend", proficiency: 90 },
  { name: "Firebase", category: "backend", proficiency: 85 },
  { name: "Auth0", category: "backend", proficiency: 78 },
  { name: "Shopify API", category: "backend", proficiency: 75 },
  { name: "Payment Gateways", category: "backend", proficiency: 80 },

  // Tools
  { name: "Git", category: "tools", proficiency: 92 },
  { name: "Figma", category: "tools", proficiency: 72 },
  { name: "Code Review", category: "tools", proficiency: 90 },
  { name: "System Design", category: "tools", proficiency: 85 },
  { name: "Claude", category: "tools", proficiency: 88 },
  { name: "Cursor", category: "tools", proficiency: 85 },

  // Cloud / DevOps
  { name: "CI/CD", category: "cloud", proficiency: 82 },
  { name: "Shorebird", category: "cloud", proficiency: 75 },
  { name: "App Store Deploy", category: "cloud", proficiency: 88 },
  { name: "Hubspot", category: "cloud", proficiency: 70 },
];

export const skillCategories = ["mobile", "backend", "tools", "cloud"] as const;
