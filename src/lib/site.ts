/** Site content & links — edit for production */
export const site = {
  /** Used for Open Graph and Twitter card URLs. Set in production (e.g. `NEXT_PUBLIC_SITE_URL`). */
  siteUrl:
    (typeof process !== "undefined" &&
      process.env.NEXT_PUBLIC_SITE_URL?.trim()) ||
    "http://localhost:3000",
  name: "Dhruv",
  title: "Dhruv — AI Strategist & Business Expert",
  description:
    "AI strategist and business consultant transforming complex technology into real-world results.",
  email: "dhruv@example.com",
  social: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
} as const;
