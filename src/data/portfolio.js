export const profile = {
  name: "Shivam Upadhyay",
  role: "Full-Stack Developer",
  location: "IIIT Manipur",
  tagline: "MERN Stack Developer with AI Integration",
  intro:
    "I design and build full-stack SaaS applications on the MERN stack and integrate AI into real product workflows — from the React interface down to the APIs, databases and LLMs running behind it.",
  summary:
    "I'm a B.Tech student in Electronics & Communication Engineering (VLSI) at IIIT Manipur, specializing in MERN stack development, SaaS architecture and Data Structures & Algorithms. I've built and deployed multiple production-ready applications on my own, covering everything from authentication and payments to Generative AI integration and prompt engineering. I care about getting a product from idea to a working, deployed URL — not just a working prototype.",
  quickFacts: [
    { label: "Apps shipped", value: "3+" },
    { label: "DSA solved", value: "220+" },
    { label: "CPI", value: "8.2/10" },
  ],
  email: "shiv230104031@iiitmanipur.ac.in",
  phone: "+91-9555181178",
  github: "https://github.com/ShivamBytes18",
  linkedin: "https://www.linkedin.com/in/shivam-upadhyay-0811182aa",
  leetcode: "https://leetcode.com/u/_Shivam18/",
};

export const experience = [
  {
    role: "Full Stack Development Intern",
    org: "Decode Labs",
    period: "May 2026 — Jun 2026",
    points: [
      "Worked across the MERN stack building and shipping RESTful APIs and authentication flows.",
      "Set up CI/CD deployment pipelines through Render and Vercel for continuous delivery.",
      "Followed industry-standard engineering practices for code review and release.",
    ],
  },
  {
    role: "Ethical Hacking Intern",
    org: "C-DAC Noida",
    period: "Apr 2025 — Jun 2025",
    points: [
      "Got hands-on exposure to network security fundamentals and vulnerability assessment.",
      "Practiced with industry ethical-hacking tooling inside a professional R&D environment.",
    ],
  },
];

export const projectsIntro =
  "I've built and deployed multiple production-ready applications on my own. Below are the three I'm most proud of.";

export const projects = [
  {
    name: "AceBot",
    tag: "AI-Powered Interview Preparation SaaS",
    endpoint: "POST /interviews",
    description:
      "A production-ready AI-powered SaaS platform that turns an uploaded PDF resume into a personalized mock interview. It uses LLM API integration and prompt engineering to generate role-specific technical and HR questions, then evaluates candidate responses in real time through an interactive AI interviewer.",
    highlights: [
      "Voice-based interviews with an interactive AI interviewer",
      "AI-driven answer evaluation, feedback & question-wise scoring",
      "Performance analytics with graphical, downloadable PDF reports",
      "Firebase Google Authentication + JWT authorization",
      "Razorpay payment integration with a credit-based monetization system",
      "Interview history tracking across sessions",
    ],
    stackTags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "LLM API (OpenAI)",
      "Prompt Engineering",
      "Firebase Auth",
      "JWT",
      "Razorpay",
    ],
    github: "https://github.com/ShivamBytes18/AceBot",
    live: "https://acebot-client.onrender.com/",
  },
  {
    name: "VidSphere",
    tag: "Video Streaming Platform",
    endpoint: "GET /videos/:id",
    description:
      "A full-stack MERN video streaming platform deployed on Render, covering video uploads, streaming, likes, subscriptions and watch history. Built on scalable RESTful APIs, with MongoDB's aggregation pipeline handling feed and stats queries efficiently.",
    highlights: [
      "Video uploads, streaming, likes, subscriptions & watch history",
      "MongoDB Aggregation Pipeline ($lookup, $group, $match) for efficient data retrieval",
      "Cloudinary integration for media storage",
      "JWT-authenticated, scalable RESTful APIs",
    ],
    stackTags: ["React", "Node.js", "Express.js", "MongoDB", "Cloudinary", "JWT", "REST APIs"],
    github: "https://github.com/ShivamBytes18/VidSphere",
    live: "https://vidsphere-front.onrender.com",
  },
  {
    name: "POSTNET",
    tag: "MERN Stack Social Media Platform",
    endpoint: "POST /posts",
    description:
      "A full-stack social media platform built and deployed on the MERN stack, featuring JWT authentication, full CRUD operations, image uploads, likes and comments — with real deployment challenges around CORS, environment variables and file uploads solved across two hosts.",
    highlights: [
      "JWT authentication with full CRUD on posts",
      "Image uploads and media management via Cloudinary",
      "Secure REST APIs built with the MERN stack",
      "Deployed across Vercel (client) and Render (API), resolving CORS & env-config issues",
    ],
    stackTags: ["React", "Node.js", "Express.js", "MongoDB", "Cloudinary", "REST APIs"],
    github: "https://github.com/ShivamBytes18/POSTNET",
    live: "https://postnet-bay.vercel.app",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "C", "C++", "JavaScript", "Python"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT / Firebase Auth",
      "LLM API Integration",
      "Prompt Engineering",
    ],
  },
  {
    title: "Data",
    items: ["MongoDB (Aggregation)", "SQL", "Firebase Firestore"],
  },
  {
    title: "Foundations",
    items: ["DSA", "OOPs", "System Design", "SaaS Architecture", "Computer Networks", "OS", "COA"],
  },
  {
    title: "Tooling",
    items: ["Git & GitHub", "Postman", "VS Code", "Render", "Vercel", "Appwrite", "Razorpay", "Cloudinary"],
  },
];

export const education = {
  degree: "B.Tech, Electronics & Communication Engineering (VLSI)",
  school: "IIIT Manipur",
  period: "2023 — 2027",
  cpi: "8.2 / 10",
};

export const achievements = [
  {
    title: "NPTEL — Machine Learning, IIT Madras",
    detail: "Elite certificate · 76% · Top 1% of 8,354 candidates",
  },
  {
    title: "NPTEL — Computer Organization & Architecture",
    detail: "Course certification",
  },
  {
    title: "LeetCode",
    detail: "220+ data structures & algorithms problems solved",
  },
  {
    title: "Shipping habit",
    detail: "Multiple production-deployed MERN applications, built solo",
  },
];
