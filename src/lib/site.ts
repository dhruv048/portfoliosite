/** Site content & links — edit for production */
export const site = {
  /** Used for Open Graph, canonical URLs, and sitemap. Set `NEXT_PUBLIC_SITE_URL` in production. */
  siteUrl:
    (typeof process !== "undefined" &&
      process.env.NEXT_PUBLIC_SITE_URL?.trim()) ||
    "https://dhruvgoyal.com.np",
  name: "Dhruv Goyal",
  /** Primary title — targets "Dhruv Goyal" and "Dhruv Goyal in AI" */
  title: "Dhruv Goyal | AI, Tech & Business",
  tagline: "Dhruv Goyal in AI — Business Meets Technology",
  description:"Dhruv Goyal is an AI enthusiast and business-focused professional with experience in business operations, fintech, digital strategy, and technology development. Dhruv combines a strong background in software development with practical expertise in business management, client relations, and strategic execution. Dhruv has worked across startups and fintech companies, making him adaptable to both technical and business-driven environments.",
  jobTitle: "AI Strategist & Business Consultant",
  ogImage: "/brand-logo.png",
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "AI Agents",
    "Natural Language Processing",
    "AI Business Strategy",
    "Data Analysis",
    "Business Consulting",
  ],
  author: "Dhruv Goyal",
creator: "Dhruv Goyal",
  keywords: [
  "Dhruv Goyal",
  "AI Strategist",
  "Business Consultant",
  "Artificial Intelligence",
  "AI in Business",
  "Machine Learning",
  "Tech Consultant",
  "Digital Strategy",
],
  email: "dhruv@dhruvgoyal.com.np",
  social: {
    twitter: "https://twitter.com",
    linkedin: "https://www.linkedin.com/in/dhruvvv-goyal/",
    github: "https://github.com/dhruv048",
  },
} as const;
