export type BlogCover = {
  /** Path under `public/`, e.g. `/blog/ai-roadmap-2025.jpg` */
  src: string;
  /**
   * Describes what the image shows and how it relates to the article.
   * Write for people first; avoid repeating the title verbatim or keyword stuffing.
   */
  alt: string;
};

type BlogContent =
| string
| {
type: "image";
src: string;
alt: string;
caption?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  /** ISO 8601 date for sitemap and structured data */
  isoDate: string;
  /** Shown in the home preview (keep to about 3–4). */
  featuredOnHome: boolean;
  coverImage: BlogCover;
  /** Article body — one string per paragraph. */
content: BlogContent[];
};

export const blogPosts: BlogPost[] = [

{
  slug: "marketing-consultant-module-dhruv-goyal",
  title: "How a Module Transformed My Professional Branding | Dhruv Goyal",
  excerpt: "Dhruv Goyal shares 5 key insights from the Marketing Consultant Module at University of Wolverhampton. Learn how personal branding, SEO strategies, and buyer personas shape modern marketing careers.",
  publishedAt: "May 2026",
  isoDate: "2026-05-14T00:00:00.000Z",
  featuredOnHome: true,
  coverImage: {
    src: "/blog/marketing-consultant-module-dhruv-goyal.png",
    alt: "5 Highlights from the Marketing Consultant Module - A student's perspective on marketing education at University of Wolverhampton, Herald College Kathmandu"
  },
  content: [
    "When introduced to the Marketing Consultant Module from the University of Wolverhampton at Herald College Kathmandu, I expected to learn standard marketing frameworks. What I encountered was far more challenging and, ultimately, transformative.",
    
    "Under the mentorship of Santosh Dhungana, this module forced me to think beyond textbook marketing concepts. I had to think like a consultant, someone who bridges data, strategy, and human psychology to solve real problems. Here's what shaped my perspective.",
    
    {
      type: "image",
      src: "/blog/marketing-consultant-module-page-1.png",
      alt: "Hands-on industry tools experience in marketing learnt by Dhruv Goyal in AI",
      caption: "Page 2: Practical SEO and keyword research instruction"
    },
    
    "Most marketing courses teach SEO as a concept: 'Use keywords,' 'Optimize meta tags,' 'Get backlinks.' But concepts don't stick. Practice does.",
    
    "Early in the module, I was assigned real keyword research projects using industry-standard tools. I had to crawl websites, analyze search intent, and understand how search engines actually interpret content through crawler-based strategies. breakthrough came when I realized that SEO isn't about 'tricks.' It's about alignment, making sure your content genuinely answers the questions your audience is asking, in the language they're searching with.",
    
    {
      type: "image",
      src: "/blog/marketing-consultant-module-page-2.png",
      alt: "Dhruv Goyal’s Understanding of social capital and personal branding",
      caption: "Page 3: The importance of social capital and personal identity in career growth"
    },
    
    
    "SEO, keyword research, and crawler-based search engine strategies aren't abstractions, they're tools you wield with precision. Understanding search intent is as important as finding the keyword itself. Real-world application beats theoretical knowledge every time.",
    
        
    "Social capital isn't built overnight. It's accumulated through genuine connections, consistent visibility, and demonstrable expertise. I spent weeks mapping out my professional identity: Who are my ideal mentors? Which communities align with my career goals? How do I position myself as someone who can add value?",
    
    "Personal branding became less about vanity and more about clarity. It's about being so clear about your value proposition that the right opportunities find you.",
    
    {
      type: "image",
      src: "/blog/marketing-consultant-module-page-3.png",
      alt: "Buyer persona blueprint development - Framework for understanding customer behavior and creating detailed audience personas in marketing strategy",
      caption: "Page 4: Deep dive into customer behavior and persona creation"
    },
    
    "Social capital compounds when you're intentional about the connections you build. Your personal identity shapes which doors open (and which close). Career growth is accelerated through network effects, not isolated effort.",
    
    "One of the most pivotal exercises in the module was creating detailed buyer personas. Not just demographic profiles, but fully realized characters with motivations, pain points, and decision-making processes.",
        
    
        {
      type: "image",
      src: "/blog/marketing-consultant-module-page-4.png",
      alt: "Advanced keyword research techniques learnt by Dhruv Goyal",
      caption: "Page 5: LSI and search intent strategies for organic traffic"
    },


    "Understanding your audience requires empathy, not assumptions. Buyer personas are predictive tools that guide all your marketing decisions. When you understand your customer's worldview, positioning becomes natural.",
    
    "This is where the technical depth of the module really showed. Latent Semantic Indexing (LSI) and search intent analysis took my keyword strategy from surface-level to sophisticated.",
    
    "I learned that Google doesn't just match keywords, it understands concepts. If you're ranking for 'digital marketing,' Google knows that 'content strategy,' 'SEO,' and 'social media' are semantically related. So using LSI keywords naturally strengthens your content without feeling forced.",
    {
      type: "image",
      src: "/blog/marketing-consultant-module-page-5.png",
      alt: "Career-ready personal branding for Dhruv Goyal",
      caption: "Page 6: Optimized digital profile as a foundation for professional brand"
    },


    "The module culminated in a capstone project: building a polished, optimized digital profile from scratch. This wasn't about taking a nice LinkedIn photo. It was about engineering every element, headline, summary, visual design, content strategy, to position myself for the career I wanted.",
    
    "I rewrote my LinkedIn headline to emphasize the intersection of my skills and market demand. I optimized my summary for searchability and positioning. I curated my visual assets to reflect the professional identity I'd built throughout the module.",
    
    "The result wasn't just 'career-ready.' It was strategically positioned. When recruiters or potential clients searched for someone with my skill set, my profile would appear, not by accident, but by design.",
    
    "If I had to distill the entire module into one principle, it's this: Marketing today isn't about selling products. It's about understanding people, building trust, and positioning yourself (or your product) in a way that resonates with where they are.",
    "If you're considering a marketing education, look for programs that don't just teach concepts. Find ones that make you apply those concepts to real challenges. Because that's when learning becomes transformation.",
    
    "Dhruv Goyal is a marketing consultant and digital strategist currently exploring the intersection of AI, personal branding, and professional development. He graduated from the University of Wolverhampton's Marketing Consultant Module and is passionate about helping others build strategic, authentic professional brands. Connect with Dhruv Goyal on LinkedIn at linkedin.com/in/dhruvvv-goyal"
  ]
},




  {
    slug: "why-ai-chatbots-hallucinate-dhruv-goyal-fix",
    title: "Why AI Chatbots Give Confident Wrong Answers: Dhruv Goyal's Fix That Works",
    excerpt: "Dhruv Goyal reveals why free AI chatbots hallucinate and give confidently wrong answers. Discover the one-line prompt that forces AI to ask clarifying questions instead.",
    publishedAt: "May 2026",
    isoDate: "2026-05-06T00:00:00.000Z",
    featuredOnHome: false,
    coverImage: {
      src: "/blog/ai-hallucinations-fix.png",
      alt: "Split-screen showing AI making confident errors on the left, and AI asking clarifying questions on the right, with the ACDWQ framework highlighted"
    },
    content: [
      "Free AI chatbots have a dirty secret: they're trained to sound confident, even when they're making things up. Dhruv Goyal discovered this frustrating pattern and found a simple fix that actually works.",
      
      "Why This Happens: The Economics of Free AI - Free AI chatbots are optimized for: Speed over depth (quick responses save computing credits), Completeness over uncertainty (give an answer even if unsure), Confidence over hesitation (trained to sound helpful, not unsure). Result: They fill gaps with assumptions instead of asking for clarification.",
      
      "Real Examples of This Problem - Scenario 1 - Marketing Strategy: You ask 'Give me a marketing strategy' and AI gives generic strategy based on ZERO knowledge of your industry. You think 'This doesn't apply to me.' AI was confidently wrong. Scenario 2 - Code Implementation: You ask 'How do I optimize my Next.js site?' AI suggests optimizations that might not work for your specific setup. You waste 2 hours implementing wrong advice. AI sounded helpful but was hallucinating.",
      
      "Scenario 3 - Business Advice: You ask 'Should I hire a consultant?' AI gives generic advice without understanding your situation. You make bad decision based on incomplete information. AI was confidently wrong.",
      
      "Dhruv Goyal's Discovery: The One-Line Fix - Add this single line to any prompt: 'Deeply think about it and ask me questions if you need more info.' That's it. This one sentence nudges the AI to: Pause before answering (instead of rushing), Recognize missing context (instead of assuming), Ask clarifying questions (instead of guessing), Reduce hallucinations (by filling gaps itself, not with false info).",
      
      "How This Changes Everything: Before - Prompt: 'Give me a marketing strategy for my business' AI Response: Generic 5-step marketing strategy. After - Prompt: 'Give me a marketing strategy for my business. Deeply think about it and ask me questions if you need more info.' AI Response: Asks about your industry, budget, target customer, what you've tried, and biggest challenge.",
      
      "Why This Works: The Psychology Behind It - Free AI models are trained on billions of conversations where people asked lazy questions and AI gave quick generic answers. This teaches AI: Speed = good. Confidence = good. Making things up = acceptable if done confidently. The fix reverses this by explicitly telling AI to pause, think, and ask questions.",
      
      "Dhruv Goyal's Framework: When To Use This Fix - Use 'deeply think' when the output requires context about YOUR specific situation, bad advice could cost you money or time, the problem is complex (not simple facts), or you want custom solution, not generic advice. Don't use it when you just need a fact, speed matters more than accuracy, or you know the AI has all needed context.",
      
      "Real-World Example From Dhruv Goyal - My situation: I needed a content strategy for my AI consulting brand. Without the fix: 'Create content about AI trends, business use cases, and future predictions.' With the fix: AI asked me my target audience, what I'm already known for, how much time I have, what my monetization goals are, what competitors are doing. Then it gave me a completely different strategy tailored to my actual situation.",
      
      "This isn't just about better prompts. It's about understanding that AI will give you what you ask for. If you ask vague questions, you get vague answers. If you ask specific questions with explicit constraints, you get better answers. This is what Dhruv Goyal calls 'prompt literacy' - the new professional skill."
    ]
  },

  {
    slug: "best-ai-tools-for-each-task-dhruv-goyal",
    title: "Stop Using One AI for Everything: Dhruv Goyal's AI Tool Selection Framework",
    excerpt: "Dhruv Goyal explains why using one AI tool for everything limits your productivity. Learn which AI tool is best for each task (ChatGPT vs Claude vs Gemini vs Perplexity).",
    publishedAt: "May 2026",
    isoDate: "2026-05-04T00:00:00.000Z",
    featuredOnHome: true,
    coverImage: {
      src: "/blog/ai-tool-selection-framework.png",
      alt: "Comparison chart showing when to use ChatGPT (reasoning), Claude (analysis/code), Gemini (research/realtime), Perplexity (citations), Midjourney (visuals)"
    },
    content: [
      "Most people don't use 5% of AI's potential. The biggest reason? They use ONE tool for EVERYTHING. Dhruv Goyal breaks down why this is wrong and how to pick the right AI for each task.",
      
      "The Problem: Treating AI Tools as Interchangeable - Here's what most professionals do: 'ChatGPT can do anything, so I'll just use that' or 'Claude is for coding, so I'll use that for everything code-related.' This is like using a hammer for every job. Sure, a hammer can technically drive screws, cut wood, and weld metal. But it's not optimal for any of those tasks.",
      
      "Why They Have Different Strengths - Each AI model is trained differently. ChatGPT is trained on broad conversations, optimized for reasoning. Claude is trained with emphasis on accuracy, long-form content, code quality. Gemini is integrated with Google, real-time data, research capabilities. Perplexity is built for fact-checking, citations, source verification. Midjourney/DALL-E are trained on images, not text.",
      
      "Dhruv Goyal's AI Tool Framework (As of March 2026) - ChatGPT: When You Need Reasoning & Structured Thinking. Best for: Brainstorming strategic ideas, breaking down complex problems, explaining difficult concepts, outlining frameworks. Why: ChatGPT excels at step-by-step reasoning.",
      
      "Claude: When You Need Deep Analysis & Clean Code. Best for: Long document analysis (200k token window), code generation and refactoring, writing long-form content, complex multi-step tasks. Why: Claude is trained to be more precise, less prone to hallucinations, and produces cleaner code.",
      
      "Gemini: When You Need Real-Time Information & Research. Best for: Current events and breaking news, Google ecosystem integration, research with up-to-date sources, multi-modal tasks. Why: Gemini has real-time Google search built in and knows current information.",
      
      "Perplexity: When You Need Citations & Fact-Checking. Best for: Fact-checking claims, research with sources you can verify, when you need 'proof' of where info came from, academic or professional research. Why: Perplexity shows you sources for every claim.",
      
      "Midjourney / DALL-E: When You Need Visuals. Best for: Creating images from descriptions, designing graphics, visualizing concepts, marketing content. Why: These are built specifically for image generation.",
      
      "The Decision Framework: How to Choose (Dhruv Goyal's Method) - Ask yourself these questions in order: Do I need an image? → Use Midjourney/DALL-E. Do I need current information? → Use Gemini or Perplexity. Do I need citations/sources? → Use Perplexity. Do I need to analyze long documents? → Use Claude. Do I need step-by-step reasoning? → Use ChatGPT. Do I need clean code? → Use Claude. Otherwise: Default to ChatGPT.",
      
      "Real Example: Dhruv Goyal's Daily Workflow - 9 AM - Content Strategy Brainstorm → ChatGPT (needs reasoning). 10 AM - Research competitor pricing → Gemini (needs current info). 12 PM - Analyze customer feedback (1000+ reviews) → Claude (long document, deep analysis). 2 PM - Verify claim about AI adoption rates → Perplexity (needs sources). 4 PM - Generate hero image for blog post → Midjourney (needs visuals). 5 PM - Debug React code → Claude (code quality).",
      
      "Result: Each task gets the optimal tool. Output quality 3-5x better than using ChatGPT for everything.",
      
      "The Economics: Why This Matters - Using one tool for everything: Slower outputs (wrong tool for the job), Lower quality (not optimized for task), More revisions needed (fixing wrong approach), Time wasted (fighting the tool). Using the right tool for each task: Faster outputs (optimized for the job), Higher quality first time, Fewer revisions needed, Time saved overall.",
      
      "Stop asking 'Which AI is the best?' Start asking 'Which AI is best for THIS task?' This one mindset shift will multiply your AI productivity."
    ]
  }
  // {
  //   slug: "ai-roadmap-2025",
  //   title: "Building an AI Roadmap That Survives Contact With Reality",
  //   excerpt:
  //     "How to align stakeholders, sequence pilots, and measure outcomes before you commit to vendor contracts.",
  //   publishedAt: "Mar 2026",
  //   featuredOnHome: true,
  //   coverImage: {
  //     src: "/blog/ai-roadmap-2025.svg",
  //     alt: "Abstract illustration of a branching path merging into a timeline of milestones, suggesting phased AI pilots and roadmap checkpoints.",
  //   },
  //   content: [
  //     "Most AI roadmaps fail for predictable reasons: they start with tools, skip the business case, or assume adoption will follow automatically once something ships.",
  //     "A roadmap that holds up starts with a narrow set of decisions: which problems are worth solving now, what evidence would change your mind, and what you are explicitly not doing this quarter.",
  //     "Sequence pilots so each one teaches you something about data quality, workflow fit, and governance — not just model accuracy. Tie funding to outcomes leadership already cares about, and revisit the roadmap on a fixed cadence instead of only when a vendor sends a renewal notice.",
  //   ],
  // },
  // {
  //   slug: "bi-storytelling",
  //   title: "From Spreadsheets to Stories: Dashboards People Actually Use",
  //   excerpt:
  //     "A practical framing for BI work — narrative, cadence, and the one metric leadership should never miss.",
  //   publishedAt: "Feb 2026",
  //   featuredOnHome: true,
  //   coverImage: {
  //     src: "/blog/bi-storytelling.svg",
  //     alt: "Stylized chart panels and sparklines arranged left to right like a short narrative, representing dashboards built around a clear story instead of raw tables.",
  //   },
  //   content: [
  //     "Dashboards die in silence when they answer questions nobody is asking, or when they answer too many questions at once.",
  //     "Use a simple narrative spine: context, tension, decision, action. Context sets the baseline; tension highlights variance worth attention; decision names the tradeoff; action assigns ownership and a date.",
  //     "Pick one metric leadership should never miss — the metric that, if it moved unexpectedly, would force a conversation. Build the rest of the view as supporting evidence, not competing headlines.",
  //   ],
  // },
  // {
  //   slug: "consulting-handoffs",
  //   title: "Consulting Handoffs Without the Fire Drill",
  //   excerpt:
  //     "Checklists and rituals that keep momentum when strategy meets engineering and operations.",
  //   publishedAt: "Jan 2026",
  //   featuredOnHome: true,
  //   coverImage: {
  //     src: "/blog/consulting-handoffs.svg",
  //     alt: "Two teams exchanging labeled folders and a short checklist between strategy blocks and engineering blocks, symbolizing a structured consulting handoff.",
  //   },
  //   content: [
  //     "The handoff is where great analysis becomes shelf-ware. The fix is rarely more documentation — it is clearer ownership and a shared definition of done.",
  //     "Before you leave a client team, align on three artifacts: a decision log (what was chosen and why), a backlog slice (what happens next, with owners), and a risk register (what could invalidate the plan).",
  //     "Run a thirty-minute ritual with engineering and ops present. Read decisions out loud, confirm dates, and surface one dependency that worried everyone but never made it into a slide.",
  //   ],
  // },
  // {
  //   slug: "llm-governance",
  //   title: "LLM Governance for Small Teams",
  //   excerpt:
  //     "Lightweight policies, logging, and review loops that do not require a dedicated compliance department.",
  //   publishedAt: "Dec 2025",
  //   featuredOnHome: true,
  //   coverImage: {
  //     src: "/blog/llm-governance.svg",
  //     alt: "A compact flow diagram with a chat bubble, a log icon, and a shield, suggesting logging, review, and guardrails for large language model use.",
  //   },
  //   content: [
  //     "Governance does not have to mean bureaucracy. For small teams, it means knowing what data can enter a model, what outputs can reach customers, and who can approve exceptions.",
  //     "Start with logging: prompts, retrieval sources, and user feedback on bad answers. Without logs, you cannot improve — or explain — what the system did.",
  //     "Add a lightweight review loop: a weekly scan of flagged interactions, a single owner for policy updates, and a default deny stance on net-new data classes until someone documents the risk tradeoff in one page.",
  //   ],
  // },
  // {
  //   slug: "pricing-ai-products",
  //   title: "Pricing AI-Assisted Products",
  //   excerpt:
  //     "Unit economics, packaging experiments, and how to talk about value when the marginal cost curve shifts.",
  //   publishedAt: "Nov 2025",
  //   featuredOnHome: false,
  //   coverImage: {
  //     src: "/blog/pricing-ai-products.svg",
  //     alt: "Layered price tags and a gentle cost curve over usage tiers, evoking packaging experiments and variable AI inference costs.",
  //   },
  //   content: [
  //     "When marginal costs stop behaving like classic SaaS, pricing has to tell a clearer value story — not a fancier feature matrix.",
  //     "Model costs as scenarios: baseline usage, growth usage, and spike usage. Price packaging should make the happy path profitable without punishing customers for success.",
  //     "Run small packaging experiments on cohorts you can support. Measure retention and expansion, not just willingness-to-pay in a survey.",
  //   ],
  // },
  // {
  //   slug: "workshop-facilitation",
  //   title: "Running Strategy Workshops That Produce Decisions",
  //   excerpt:
  //     "Agendas, pre-reads, and breakout patterns that end with owners and dates — not another slide deck.",
  //   publishedAt: "Oct 2025",
  //   featuredOnHome: false,
  //   coverImage: {
  //     src: "/blog/workshop-facilitation.svg",
  //     alt: "A round table with sticky notes converging into a single decision card with a calendar date, representing workshop outcomes with clear owners.",
  //   },
  //   content: [
  //     "Workshops fail when the room optimizes for agreement instead of decisions. Facilitation is the craft of making tradeoffs visible.",
  //     "Send pre-reads that fit in fifteen minutes, with explicit prompts: what would you cut if you had to choose? Cold starts in the room burn time you do not have.",
  //     "Use breakouts to force writing: each group returns with one recommendation, one risk, and one owner. Debate the differences, then lock a decision and a date before anyone opens a deck template.",
  //   ],
  // },
];

export function blogPath(slug: string): string {
  return `/blogs/${slug}`;
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featuredOnHome);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
