export const siteConfig = {
  name: "Katie Sidebotham",
  fullName: "Katherine (Katie) Sidebotham",
  title: "Product Engineer II @ Ridgeline",
  email: "katiesidebotham54@gmail.com",
  linkedin: "https://www.linkedin.com/in/katie-sidebotham/",
  github: "https://github.com/katiesidebotham54",
  location: "San Francisco Bay Area",
  resumeUrl: "/katie-sidebotham-resume.pdf",
};

export const heroRotatingTitles = [
  "product engineer @ ridgeline",
  "building with ai since day one",
  "innovation award winner",
  "climate-tech co-founder",
  "magna cum laude, rutgers cs",
];

export const heroStats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 3, suffix: "", label: "Internships" },
  { value: 35, suffix: "+", label: "Team Co-Founded" },
  { value: 3.73, suffix: "", label: "GPA" },
];

export const aboutBio = `i'm a full-stack product engineer who loves building things that actually matter. by day i'm shipping enterprise software at ridgeline — i also co-founded a climate-tech startup with 35+ people and pioneered ai workflows that compress 6-week projects into 2 days. i bring technical depth, product intuition, and a genuine love for collaboration.`;

export const experiences = [
  {
    id: "ridgeline-pe2",
    company: "Ridgeline Apps",
    logo: "R",
    logoUrl: "/logos/ridgeline.png",
    role: "Product Engineer II",
    type: "Full-time",
    location: "Incline Village, NV (Hybrid)",
    start: "July 2024",
    end: "Present",
    featured: true,
    award: "Innovation Award Winner",
    bullets: [
      "Pioneered an agentic AI coding workflow using Claude that compressed 6-week feature cycles to under 2 days",
      "Shipped full-stack features across the Ridgeline investment management platform used by enterprise clients",
      "Won the company Innovation Award for AI workflow contributions recognized company-wide",
      "Hosted engineering Show & Tell sessions and served on the Fun Squad to build team culture",
    ],
    tech: ["TypeScript", "React", "Java", "GraphQL", "AWS", "Claude AI"],
  },
  {
    id: "ridgeline-intern",
    company: "Ridgeline Apps",
    logo: "R",
    logoUrl: "/logos/ridgeline.png",
    role: "Software Engineering Intern",
    type: "Internship",
    location: "Incline Village, NV",
    start: "June 2023",
    end: "August 2023",
    featured: false,
    bullets: [
      "Developed and shipped production features on the core investment management platform",
      "Collaborated closely with senior engineers on full-stack TypeScript/React components",
      "Received return offer after internship, converted to full-time PE II",
    ],
    tech: ["TypeScript", "React", "Java", "GraphQL"],
  },
  {
    id: "paramount",
    company: "Paramount+ / Paramount Global",
    logo: "P",
    logoUrl: "/logos/paramount.png",
    role: "Software Engineering Intern",
    type: "Internship",
    location: "New York, NY (Hybrid)",
    start: "June 2022",
    end: "November 2022",
    featured: false,
    bullets: [
      "Built and maintained data pipelines supporting Paramount+ streaming platform analytics",
      "Worked on backend services handling millions of streaming events per day",
      "Collaborated across data engineering teams to deliver reporting dashboards",
    ],
    tech: ["Python", "SQL", "Spark", "AWS", "Kafka"],
  },
  {
    id: "rutgers-plp",
    company: "Rutgers Peer Learning Program",
    logo: "RU",
    logoUrl: "/logos/rutgers.png",
    role: "Learning Assistant (Computer Science)",
    type: "Part-time",
    location: "New Brunswick, NJ",
    start: "September 2021",
    end: "May 2024",
    featured: false,
    bullets: [
      "Tutored and mentored students in CS fundamentals, data structures, and algorithms",
      "Developed supplemental learning materials and hosted weekly group study sessions",
      "Reached 80+ students across 3 years, earning consistently high feedback scores",
    ],
    tech: ["Java", "Python", "Data Structures", "Algorithms"],
  },
];

export const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      "TypeScript", "JavaScript", "Python", "Java", "Kotlin", "SQL", "HTML/CSS",
      "GraphQL", "Bash",
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    skills: [
      "React", "Next.js", "React Native", "Node.js", "Spring Boot", "Express", "Expo",
      "Tailwind CSS", "Framer Motion",
    ],
  },
  {
    id: "cloud",
    label: "Cloud / Infra",
    skills: [
      "AWS", "Vercel", "Supabase", "PostgreSQL", "Redis",
      "Docker", "GitHub Actions", "Kafka",
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      "Git", "VS Code", "Figma", "Postman", "Jira", "Linear",
      "Claude AI", "Lovart", "Google Stitch", "ArcGIS", "Spark",
    ],
  },
];

export const allSkills = [
  "TypeScript", "JavaScript", "Python", "Java", "Kotlin", "SQL", "React", "Next.js",
  "React Native", "Node.js", "Spring Boot", "GraphQL", "AWS", "Vercel", "Supabase",
  "PostgreSQL", "Tailwind CSS", "Framer Motion", "Git", "Figma", "ArcGIS",
  "Claude AI", "Lovart", "Google Stitch", "Expo", "Express", "Docker", "GitHub Actions",
];

export const projects = [
  {
    id: "faro",
    name: "Faro",
    tagline: "AI-powered travel planning with a real voice",
    description:
      "Your AI travel companion. Chat with an intelligent agent powered by Claude to plan trips, discover flights via Amadeus, and hear destination highlights in a natural voice via ElevenLabs.",
    date: "2026",
    featured: true,
    color: "from-amber-400 to-orange-600",
    icon: "Compass",
    tech: ["React Native", "TypeScript", "Supabase", "Node.js", "Claude AI", "Amadeus API", "ElevenLabs"],
    github: "https://github.com/katiesidebotham54/faro",
    live: null,
    image: null,
  },
  {
    id: "pokeprice",
    name: "PokePrice",
    tagline: "Real-time Pokémon card pricing from your camera",
    description:
      "Snap a photo of any Pokémon card and instantly get aggregated market prices from eBay, TCGplayer, and PriceCharting. Uses computer vision to identify the card, no manual lookup needed.",
    date: "2026",
    featured: false,
    color: "from-red-500 to-white",
    icon: "Zap",
    tech: ["React Native", "Expo", "Node.js", "TypeScript", "eBay API", "TCGplayer API", "Google Vision"],
    github: "https://github.com/katiesidebotham54/pokeprice",
    live: null,
    image: null,
  },
  {
    id: "climit",
    name: "CliMit",
    tagline: "Climate-tech startup. GIS + ML for environmental impact.",
    description:
      "Co-founded a 35+ person climate-tech student startup focused on using geospatial data and machine learning to map and mitigate environmental impact. Built while at Rutgers.",
    date: "2022-2024",
    featured: false,
    color: "from-emerald-500 to-green-700",
    icon: "Globe",
    tech: ["ArcGIS", "Python", "JavaScript", "Machine Learning", "GIS"],
    github: null,
    live: "https://newbrunswick.rutgers.edu/idea-climit#:~:text=CliMit%2C%20a%20former%20Rutgers%2Dbased,about%20effectively%20mitigating%20that%20risk.",
    image: null,
  },
];

export const education = {
  school: "Rutgers University",
  degree: "B.S. Computer Science",
  minor: "Minor in Cognitive Science",
  gpa: 3.73,
  start: "September 2020",
  end: "May 2024",
  honors: [
    { label: "Magna Cum Laude", icon: "Award" },
    { label: "Cap & Skull Honor Society", icon: "Star" },
    { label: "Research Conference Speaker", icon: "Mic2" },
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Systems Programming",
    "Computer Architecture",
    "Machine Learning",
    "Software Engineering",
    "Internet Technology",
    "Database Management",
    "Linear Algebra",
  ],
};

export const leadership = [
  {
    id: "ridgeline-culture",
    org: "Ridgeline Apps",
    role: "Show & Tell Host + Fun Squad",
    description:
      "Launched and host a recurring engineering Show & Tell series to foster knowledge sharing and psychological safety. Member of the Fun Squad organizing company culture events.",
    impact: [
      { value: 130, suffix: "+", label: "attendees per session" },
      { value: 25, suffix: "", label: "sessions hosted" },
    ],
    icon: "Mic2",
    color: "accent-primary",
  },
  {
    id: "rsv",
    org: "Road to Silicon Valley",
    role: "President",
    description:
      "Led a student-run organization connecting New Jersey students to tech opportunities in Silicon Valley. Organized panels, career treks, and networking events.",
    impact: [
      { value: 100, suffix: "+", label: "applicants recruited" },
      { value: 20, suffix: "+", label: "career opportunities" },
    ],
    icon: "Mountain",
    color: "accent-secondary",
  },
  {
    id: "sea",
    org: "Students for Environmental Awareness",
    role: "President",
    description:
      "Grew and led the environmental advocacy club at Rutgers. Organized community initiatives, sustainability events, and partnered with CliMit for climate-tech programming.",
    impact: [
      { value: 80, suffix: "+", label: "students reached" },
      { value: 45, suffix: "%", label: "membership growth" },
    ],
    icon: "Leaf",
    color: "accent-tertiary",
  },
];

export const interests = [
  { label: "Piano", icon: "Piano", type: "piano", image: null, accent: "#f97316" },
  { label: "Hiking", icon: "Mountain", type: "hike", image: "/interests/hiking.jpg", accent: "#10b981" },
  { label: "Pickleball", icon: "CircleDot", type: "pickleball", image: null, accent: "#8b5cf6" },
  { label: "Photography", icon: "Camera", type: "camera", image: "/interests/photography.jpg", accent: "#f59e0b" },
  { label: "Weightlifting", icon: "Dumbbell", type: "weights", image: null, accent: "#ef4444" },
  { label: "No-Churn Ice Cream", icon: "IceCreamCone", type: "icecream", image: "/interests/icecream.jpg", accent: "#ec4899" },
  { label: "Foodie", icon: "Utensils", type: "foodie", image: "/interests/foodie.jpg", accent: "#f97316" },
  { label: "Sudoku", icon: "Grid3x3", type: "sudoku", image: null, accent: "#84cc16" },
  { label: "Jigsaw Puzzles", icon: "Puzzle", type: "puzzle", image: null, accent: "#06b6d4" },
];
