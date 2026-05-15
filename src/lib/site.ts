/** Site content & links — edit for production */
export const site = {
  /** Used for Open Graph, canonical URLs, and sitemap. Set `NEXT_PUBLIC_SITE_URL` in production. */
  siteUrl:
    (typeof process !== "undefined" &&
      process.env.NEXT_PUBLIC_SITE_URL?.trim()) ||
    "https://dhruvgoyal.com.np",
  name: "Dhruv Goyal",
  /** Primary title — targets "Dhruv Goyal" and "Dhruv Goyal in AI" */
  title: "Dhruv Goyal | Dhruv Goyal in AI — AI Strategist & Business Expert",
  tagline: "Dhruv Goyal in AI — Business Meets Technology",
  description:
    "Dhruv Goyal is an AI strategist, software developer, and business consultant. Explore Dhruv Goyal in AI: strategy, machine learning, agents, and real-world AI implementation for teams and founders.",
  jobTitle: "AI Strategist & Business Consultant",
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "AI Agents",
    "Natural Language Processing",
    "AI Business Strategy",
    "Data Analysis",
    "Business Consulting",
  ],
  email: "dhruv@dhruvgoyal.com.np",
  social: {
    twitter: "https://twitter.com",
    linkedin: "https://www.linkedin.com/in/dhruvvv-goyal/",
    github: "https://github.com/dhruv048",
  },
} as const;
