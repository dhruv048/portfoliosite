export type BlogCover = {
  /** Path under `public/`, e.g. `/blog/ai-roadmap-2025.jpg` */
  src: string;
  /**
   * Describes what the image shows and how it relates to the article.
   * Write for people first; avoid repeating the title verbatim or keyword stuffing.
   */
  alt: string;
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
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-agents-vs-chatgpt-dhruv-in-ai",
    title: "AI Agents vs ChatGPT: Why Dhruv in AI Framework Matters",
    excerpt: "Dhruv Goyal breaks down the critical difference between ChatGPT chatbots and AI agents. Learn why AI agents are replacing traditional chatbots for business automation.",
    publishedAt: "May 2026",
    isoDate: "2026-05-14T00:00:00.000Z",
    featuredOnHome: true,
    coverImage: {
      src: "/blog/ai-agents-vs-chatgpt.png",
      alt: "Comparison diagram showing ChatGPT linear response flow versus AI agent autonomous multi-step execution with feedback loops"
    },
    content: [
      "Most professionals still think ChatGPT and AI agents are the same thing. They're not. And once you understand the mechanical difference through Dhruv Goyal's breakdown, you'll see why AI agents are the future of work automation.",
      
      "A chatbot follows a predetermined script: You ask → it retrieves → it responds. Every interaction follows the same linear loop. No adaptation, no learning, no autonomy.",
      
      "An AI agent operates on a completely different paradigm: Receives a goal → writes its own plan → selects appropriate tools → executes step-by-step → adapts when obstacles appear → delivers the result. This is what Dhruv Goyal calls 'agentic AI' - the future of business automation.",
      
      "Here's a real example from Dhruv in AI framework comparing these two approaches to the same task:",
      
      "Traditional ChatGPT Approach: Task: 'Analyze Q3 sales from your dashboard and create a report' Result: ChatGPT tells you HOW to do it. You perform 5-6 steps manually yourself. Your workload: You did 90% of the work.",
      
      "AI Agent Approach (Dhruv in AI Framework): Task: Same - 'Analyze Q3 sales and create a report' Result: The agent connects to your CRM, pulls the data, fetches benchmarks, runs analysis, generates the report, emails it to you. Your workload: You did 10% (gave the command).",
      
      "This is the core distinction Dhruv Goyal emphasizes: One is a thinking tool. One does the thinking.",
      
      "If you're still using ChatGPT for complex business tasks, you're falling behind. Professionals who understand agentic AI are already automating 60% of their repetitive tasks, scaling their work output 5-10x, and becoming force multipliers in their organizations. This is what Dhruv in AI teaches - not just understanding the difference, but strategically deploying AI agents for maximum business impact.",
      
      "The professionals who mastered ChatGPT early won't necessarily win. The ones who master agentic AI will. That's what Dhruv Goyal teaches through his content."
    ]
  },

  {
    slug: "acdwq-prompting-framework-dhruv-goyal",
    title: "The ACDWQ Framework: How Dhruv Goyal Gets AI to Sound Like You",
    excerpt: "Learn Dhruv Goyal's ACDWQ framework - the 5-step prompting method that stops AI from sounding like a bot. Get high-level outputs by treating AI like you would a consultant.",
    publishedAt: "May 2026",
    isoDate: "2026-05-12T00:00:00.000Z",
    featuredOnHome: true,
    coverImage: {
      src: "/blog/acdwq-framework.png",
      alt: "Visual breakdown of ACDWQ framework: Acting (assign role), Context (background info), Deep Thinking (step-by-step), Warning (constraints), Questioning (clarification)"
    },
    content: [
      "You ask for a creative strategy. You get back corporate fluff. This is the most common mistake professionals make - treating AI like a search engine instead of like an intern that needs direction. Dhruv Goyal's ACDWQ framework fixes this completely.",
      
      "Here's what most people do: One-sentence prompts like 'Write me a social media strategy' resulting in generic, recycled advice. Expected result: Generic advice. Actual result: Disappointment.",
      
      "Here's why: AI models are trained to be helpful to EVERYONE. Without context, they give you the lowest-common-denominator response. Dhruv Goyal's insight: Treat AI like a high-level intern, not a tool. If you want high-level output, you need to teach it your context, constraints, and expectations.",
      
      "The ACDWQ Framework by Dhruv Goyal breaks down as: A - Acting (Assign a Role). Don't just ask for something. Tell AI WHO to be. Wrong: 'Write me a marketing strategy' Right: 'You are a growth strategist at a Series B SaaS company. Write me a marketing strategy for our product that targets developers.'",
      
      "C - Context (Provide Background). The more background you give, the less AI guesses. Wrong: 'I need a campaign idea' Right: 'I have a B2B SaaS product for project management. My target market is design teams at agencies. My budget is $5k/month. My main competitor is Asana.' Why it works: Eliminates hallucinations caused by missing info. AI makes assumptions about your situation - you decide those assumptions. Context = fewer revisions needed.",
      
      "D - Deep Thinking (Force Step-by-Step Reasoning). Explicitly ask AI to think through problems logically. Wrong: 'Analyze my sales data and give me insights' Right: 'Analyze my sales data and think step-by-step about which products have the highest margins, which customer segments show the longest lifetime value, and which combinations drive the most repeat purchases.'",
      
      "W - Warning (Define Constraints). Tell AI what NOT to do. No filter. Say it. Wrong: no warnings given, AI includes generic advice. Right: 'I DON'T want generic advice about social media posting frequency. I DON'T want comparisons to competitors unless I ask. I DON'T want advice that requires a marketing budget over $5k.'",
      
      "Q - Questioning (Invite Clarification). Explicitly tell AI to ask YOU questions if it's confused. Right: 'Before you give me your final strategy, ask me any questions you have about my business, my goals, or my constraints. I'd rather you ask than guess.'",
      
      "The weak prompt: 'Give me a marketing strategy for my business'. The ACDWQ prompt by Dhruv Goyal method: 'You are a fractional CMO with 10 years of experience in B2B SaaS marketing. I run a project management tool for design teams. Current revenue: $500k ARR. Marketing budget: $3k/month. Main audience: Design agency owners, ages 28-45.'",
      
      "Prompting is no longer optional. It's a superpower. Stop asking 'how do I use AI?' Start asking 'how do I prompt AI to get exactly what I need?' That's what Dhruv Goyal teaches - and it's the new literacy."
    ]
  },

  

  {
    slug: "6-ai-businesses-making-millions-dhruv-goyal",
    title: "6 AI Businesses Making Millions: Dhruv Goyal's Market Analysis",
    excerpt: "Dhruv Goyal breaks down 6 AI businesses generating $150k-$330M ARR. Learn the playbook these founders used to turn simple AI applications into million-dollar companies.",
    publishedAt: "May 2026",
    isoDate: "2026-05-10T00:00:00.000Z",
    featuredOnHome: false,
    coverImage: {
      src: "/blog/6-ai-businesses.png",
      alt: "Infographic showcase of 6 AI businesses: dating assistant ($150k/month), photo enhancer ($2M ARR), resume generator ($300k/month), PDF chat ($2M ARR), professional headshots ($300k/month), voice app ($330M ARR)"
    },
    content: [
      "Real Companies. Real Revenue. Real Lessons from Dhruv Goyal. Before we dive in, here's what Dhruv Goyal noticed across all of them: 1. Problem-first thinking - They didn't start with 'What's possible with AI?' They started with 'What problem drives people crazy?' 2. Simple execution - No 50-person teams. Most started with a single developer. 3. Pricing psychology - They positioned at 1/10 the traditional cost, making them irresistible. 4. Founder-led distribution - The founder is the brand.",
      
      "Business #1: AI Dating Assistant - Revenue: ~$150k/month. Founder's insight: People hate writing dating app profiles. They hate bad first messages even more. The play: Generates personalized icebreakers, optimizes dating profiles, tailors conversation starters to match profiles. Why it works: Dating is a problem everyone has. AI solved it in 30 seconds. Dhruv Goyal's take: 'This founder understood that dating apps' real bottleneck isn't the matching algorithm - it's the awkward messaging phase.'",
      
      "Business #2: AI Photo Enhancer - Revenue: ~$2M ARR. Founder's insight: Professional photos cost $500. People with smartphone photos look unprofessional. The play: Automatic color correction, noise reduction, image upscaling. Why it works: Every professional needs better photos. AI made it $5 instead of $500. Dhruv Goyal's note: 'This is textbook unbundling. They took 30% of what professional photographers do and automated it.'",
      
      "Business #3: AI Resume Generator - Revenue: ~$300k/month. Founder's insight: Job seekers have bad resumes. ATS systems reject 95% of applications. The play: Tailors resumes for specific job descriptions, optimizes keywords for ATS, generates variations for different industries. Why it works: Job searching sucks. AI made it suck less. Dhruv Goyal's observation: 'The founder realized the bottleneck wasn't the resume quality - it was resume-job matching.'",
      
      "Business #4: PDF Chat - Revenue: $2M ARR. Founder's insight: Lawyers, accountants, consultants drown in PDF documents. The play: Upload any PDF, ask questions about its contents, get instant answers with citations. Why it works: People spend 20+ hours/week reading documents. AI read them instantly. Dhruv Goyal's take: 'This is pure verticalization. If you optimized this for legal documents or insurance contracts specifically, you could charge 10x more.'",
      
      "Business #5: AI Professional Headshots - Revenue: $300k+/month. Founder's insight: Professional headshots are expensive, outdated, and people need them for LinkedIn. The play: Upload casual selfies, get 10 different professional headshot variations, delivered in 24 hours. Why it works: Headshots are expensive ($300-500 per session), time-consuming, and needed constantly. Dhruv Goyal's insight: 'The founder understood that people don't want headshots - they want to LOOK professional. AI solved the shallow need brilliantly.'",
      
      "Business #6: AI Voice App (ElevenLabs Model) - Revenue: $330M+ ARR (collective industry). Founder's insight: Voice acting is expensive, time-consuming, and needed for every video, podcast, and app. The play: Type text, get natural-sounding voice, thousands of voice options, supports multiple languages. Why it works: Every creator needs voiceovers. Every business needs audio. AI made it instant and affordable. Dhruv Goyal's take: 'This is the closest to a winner-takes-most category. But there's still room for vertical specialization.'",
      
      "Dhruv Goyal's Framework: How to Build the Next Winner - Step 1: Find the Frustration. Look for tasks that take 2-20 hours per week, cost $100-$10,000 to outsource, are repetitive and boring. Step 2: Build the Simple Solution - Don't solve the whole problem. Solve the part that AI is BEST at. Make it 10x cheaper. Step 3: Distribute Through Founder Personal Brand - Write about the problem, share results on social media, build community. Step 4: Expand Vertically - Start general, expand vertical, charge 5-10x more for vertical solution.",
      
      "The biggest opportunity Dhruv Goyal sees: Vertical SaaS AI tools. Most people ask 'Is AI going to replace my job?' The real question is 'What am I doing right now that AI can do better?' The answer to that question is a business opportunity waiting to be built."
    ]
  },

  {
    slug: "personal-branding-ai-professional-dhruv-goyal",
    title: "Personal Branding for AI Professionals: Dhruv Goyal's Marketing Module Insights",
    excerpt: "Dhruv Goyal shares his top 5 personal branding lessons from his University of Wolverhampton marketing module. Learn how to position yourself as an AI authority.",
    publishedAt: "May 2026",
    isoDate: "2026-05-08T00:00:00.000Z",
    featuredOnHome: false,
    coverImage: {
      src: "/blog/personal-branding-marketing.png",
      alt: "Timeline showing journey from student to AI expert, highlighting SEO, social capital, customer personas, keywords, and long-term branding strategy"
    },
    content: [
      "Marketing a SaaS product is one thing. Marketing yourself as a professional is another entirely. Dhruv Goyal just completed the Marketing Consultant Module at University of Wolverhampton (Herald College Kathmandu) and is sharing the top insights that fundamentally changed how he approaches personal branding in the AI space.",
      
      "The Shift: Here's the biggest insight from Dhruv Goyal's module: Traditional marketing teaches you to sell products. Consultant-level marketing teaches you to sell yourself. When you're a marketing consultant, YOU are the product. Your credibility, your expertise, your personal brand - these determine whether clients hire you or your competitors.",
      
      "Insight #1: Practical SEO & Industry Tools (Beyond the Basics) - What most people do: Write a 'Services' page and hope clients find them. What Dhruv Goyal learned: SEO is about owning specific keywords in your niche. The framework: Identify the keywords your ideal clients are searching, create content that ranks for those keywords, own the first page of Google in your industry. If someone searches 'AI consultant in Nepal' or 'AI business strategy' and your name appears - you've won.",
      
      "Insight #2: The Power of Social Capital - In consulting, 80% of opportunities come from people you've worked with referring you, industry connections seeing your work, and your personal brand carrying you forward. The shift: Not 'How many followers do I have?' But 'How many powerful people know my work?' How Dhruv Goyal applies this: Every piece of content is an opportunity to add value to his network. Every insight shared publicly is building his credibility.",
      
      "Insight #3: Understanding Customer Behavior & Personas - You can't market to 'everyone interested in AI.' You need specific personas. Persona 1: Startup founders (want to know: How do I use AI to scale faster?). Persona 2: Corporate professionals (want to know: Is my job safe? How do I stay relevant?). Persona 3: Other consultants (want to know: How do I sell AI services to clients?). Each persona has different pain points, different language, different platforms they use.",
      
      "Insight #4: Intent-Based Keyword Research (The Real Secret) - Traditional keyword research: 'How many people search this term?' Intent-based keyword research by Dhruv Goyal: 'What does someone searching this term actually WANT?' Focus on high-intent keywords. One client from a high-intent search is worth 1000 visitors from low-intent searches.",
      
      "Insight #5: Career-Ready Branding (Building for the Long Term) - Year 1: Build content. Be consistent. Add value. Year 2: Become known for something specific. Year 3: Monetize through consulting, courses, speaking. Year 5: Be an authority in your industry. Your personal brand is the moat that protects your career. AI might replace ChatGPT, but it won't replace 'Dhruv Goyal' because you've built reputation, relationships, and unique insights.",
      
      "How These 5 Elements Work Together: SEO brings people to your content. Social Capital turns readers into believers. Customer Personas make your content resonate. Intent-based Keywords attract the right people. Long-term Branding turns followers into clients. Together, they create a system that builds a successful personal brand.",
      
      "Dhruv Goyal's Takeaway: 'Marketing today isn't about selling products. It's about understanding people, building trust, and positioning yourself effectively in a digital-first world.' This module helped bridge the gap between learning marketing and actually thinking like a marketer. If you want to build a personal brand in AI or any field, these principles apply regardless of your industry."
    ]
  },

  {
    slug: "why-ai-chatbots-hallucinate-dhruv-goyal-fix",
    title: "Why AI Chatbots Give Confident Wrong Answers: Dhruv Goyal's Fix That Works",
    excerpt: "Dhruv Goyal reveals why free AI chatbots hallucinate and give confidently wrong answers. Discover the one-line prompt that forces AI to ask clarifying questions instead.",
    publishedAt: "May 2026",
    isoDate: "2026-05-06T00:00:00.000Z",
    featuredOnHome: true,
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
