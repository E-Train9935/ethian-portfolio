const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const siteConfig = {
  name: "Ethian Chiu",
  title: "Ethian Chiu — Product Engineering, AI, Analytics & Systems",
  description:
    "Ethian Chiu builds software systems at the intersection of product engineering, AI, analytics, and operations.",
  statement: "I build systems that turn messy operations into usable software.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? vercelUrl ?? "http://localhost:3000",
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "ethianchiu@gmail.com",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/in/ethianchiu/",
    github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/E-Train9935",
  },
} as const;
