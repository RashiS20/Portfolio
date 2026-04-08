export type TimelineItem = {
  company: string
  role: string
  when: string
  where?: string
  bullets: string[]
  tags: string[]
}

export type Project = {
  name: string
  when: string
  tagline: string
  bullets: string[]
  tags: string[]
  links?: { label: string; href: string }[]
}

export type SkillGroup = {
  name: string
  note?: string
  items: string[]
}

export const profile = {
  name: 'Rashi Singh',
  title: 'Software Engineer',
  location: 'India',
  phone: '+91-7355986861',
  email: 'raashi.singh1422@gmail.com',
  githubHandle: '@RashiS20',
  githubUrl: 'https://github.com/RashiS20',
  linkedinHandle: '/in/rashi-s20',
  linkedinUrl: 'https://www.linkedin.com/in/rashi-s20/',
  resumeUrl: '/rashi-singh-resume.pdf',
  resumePreviewUrl: '/rashi-singh-resume.png',

  summary:
    'Full‑stack engineer focused on React UI, CI‑CD for AI tooling, and reliable backend systems. I enjoy designing distributed systems for LLM inference and using GenAI to boost operational efficiency.',

  highlights: [
    {
      kpi: '30%',
      label: 'reduction in deployment time',
      detail:
        'Faster releases by configuring and deploying a centralized configuration bucket on AWS.',
    },
    {
      kpi: '25%',
      label: 'learning curve reduction',
      detail:
        'Shipped a highly responsive React front‑end with REST API integration.',
    },
    {
      kpi: '20%',
      label: 'productivity increase',
      detail:
        'Optimized text manipulation pipelines using advanced caching and UI responsiveness techniques.',
    },
    {
      kpi: '30%',
      label: 'faster operations',
      detail:
        'Enhanced fault tolerance and reliability in a microservices environment.',
    },
  ],

  tags: [
    'React',
    'TypeScript',
    'Java',
    'Python',
    'CI/CD',
    'AWS',
    'Kubernetes',
    'LLMs',
    'Distributed Systems',
  ],

  experience: [
    {
      company: 'Flipkart',
      role: 'Application Engineer‑I',
      when: 'Jul 2024 — Present',
      where: 'Bengaluru, Karnataka',
      tags: ['Microservices', 'AWS', 'CI/CD', 'TypeScript', 'React'],
      bullets: [
        'Successfully integrated Hystrix for fault tolerance in a microservices‑based architecture, enhancing system reliability in distributed systems.',
        'Improved release cycles with a ~30% reduction in deployment time by configuring and deploying a centralized configuration bucket on AWS.',
        'Designed and implemented CI/CD pipelines on Linux environments using modern DevOps practices, enabling continuous integration and seamless delivery workflows.',
        "Engineered and deployed a TypeScript‑based React screen for Flipkart’s SED debug console, enabling real‑time drag‑and‑drop product management and streamlining multi‑component deployment troubleshooting.",
      ],
    },
  ] satisfies TimelineItem[],

  projects: [
    {
      name: 'Face Recognition + X‑Powered Education Platform',
      when: 'Jan — Apr 2024',
      tagline:
        'Decentralized AI‑driven education platform built for real‑time scalability and system resilience.',
      tags: ['React', 'REST APIs', 'Face Recognition', 'LLMs', 'UI/UX'],
      bullets: [
        'Built a machine‑learning‑powered networked learning system using RESTful APIs, enabling live personalized sessions and real‑time content recommendations for scalable, tailored user experiences.',
        'Designed a session recording module and information retrieval‑based query filtering system with integrated LLMs for automated query resolution, enhancing platform communication and scalability.',
        'Developed a React‑based scalable UI for seamless interactions, optimized for cloud‑native deployments and low‑latency environments (Core Web Vitals).',
      ],
    },
    {
      name: 'Lexi‑Synergia',
      when: 'Oct — Dec 2023',
      tagline:
        'React‑based dynamic text transformation tool with a scalable, cloud deployment support.',
      tags: ['React', 'REST APIs', 'Caching', 'Performance', 'Netlify'],
      bullets: [
        'Built a highly responsive React front‑end with REST API integration, achieving a 25% learning curve reduction and 30% faster text operations over conventional platforms.',
        'Optimized text manipulation pipelines for 20% productivity increase by implementing advanced caching and UI responsiveness techniques for scalable systems.',
      ],
      links: [
        {
          label: 'Live demo',
          href: 'https://exquisite-axolotl-ee286c.netlify.app/',
        },
      ],
    },
  ] satisfies Project[],

  skillGroups: [
    {
      name: 'Languages',
      items: ['C/C++', 'Python', 'Java', 'TypeScript (React)', 'HTML + CSS'],
    },
    {
      name: 'Web + Dev Tools',
      note: 'Shipping, integration, and automation',
      items: ['REST APIs', 'Git', 'GitHub', 'CI/CD pipelines', 'Linux'],
    },
    {
      name: 'Cloud + Data',
      items: ['AWS', 'Kubernetes', 'MongoDB', 'MySQL', 'Docker'],
    },
    {
      name: 'AI + ML',
      items: ['LLMs', 'Prompt Engineering', 'GenAI toolchains'],
    },
    {
      name: 'Coursework',
      items: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'DBMS',
        'Computer Networks (TCP/IP)',
        'Machine Learning',
        'Probability & Linear Algebra',
      ],
    },
    {
      name: 'Soft Skills',
      items: [
        'Communication',
        'Analytical thinking',
        'Teamwork',
        'Problem solving',
        'Self‑learning',
      ],
    },
  ] satisfies SkillGroup[],

  achievements: [
    {
      title: 'Top 100 of 67,000+ submissions — Virtusa Engineering Equity Hackathon',
      when: 'Feb — Mar 2022',
      detail:
        'Global 2‑week hackathon. Built a web application for the given problem statement.',
    },
    {
      title: '1544 highest rating on CodeChef (5‑star)',
      when: '2023 — 2024',
      detail:
        'Solved 700+ questions across online judges (LeetCode, HackerRank, Codeforces, CodeChef). Achieved semi‑finalist status in the CodeChef Techgig competition after rigorous selection.',
    },
  ],

  education: [
    {
      school: 'Pranveer Singh Institute of Technology, Kanpur',
      when: '2020 — 2024',
      detail: 'B.Tech in Computer Science and Engineering',
      score: 'CGPA: 8.3',
    },
    {
      school: 'Rani Laxmi Bai Memorial Senior Secondary School, Lucknow',
      when: '2019',
      detail: 'Senior Secondary (CBSE)',
      score: 'Percentage: 86',
    },
  ],
} as const

