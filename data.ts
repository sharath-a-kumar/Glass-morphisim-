import { Experience, Project, Skill, ContactInfo, Education, Certification } from './types';

export const contactInfo: ContactInfo = {
  email: "SharathKumar3113@gmail.com",
  phone: "+91 7411516558",
  linkedin: "https://www.linkedin.com/in/sharath-kumar-a-461726227",
  github: "https://github.com/sharath-a-kumar",
  portfolio: "https://sharath3113.vercel.app/",
  location: "Bengaluru, India"
};

export const summary = "Results-driven Full-Stack Developer with 2+ years of experience building high-performance web applications and scalable backend systems. Specialized in the MERN stack and AWS cloud infrastructure. Expertise in architecting microservices that reduced system latency by 30% and implementing automated CI/CD pipelines that accelerated deployment cycles by 50%.";

export const experiences: Experience[] = [
  {
    id: "exp1",
    role: "Full Stack Developer",
    company: "Bizzhub Workspaces",
    location: "Bengaluru, India",
    period: "Nov 2024 – Present",
    description: [
      "Architected a responsive coworking management platform using React.js, improving UI engagement by 20% and reducing page load times by 25%.",
      "Developed secure RESTful APIs with Node.js and Express.js, reducing backend latency by 15% for 500+ daily active users.",
      "Redesigned MySQL database schema and optimized complex queries, achieving 40% faster data retrieval.",
      "Implemented GitLab CI/CD pipelines, reducing code integration time by 30%."
    ]
  },
  {
    id: "exp2",
    role: "Software Engineer",
    company: "Skylux Inc",
    location: "Bengaluru, India",
    period: "Nov 2023 – Oct 2024",
    description: [
      "Spearheaded Genesys Cloud integration, redesigning IVR call flows to improve efficiency by 30% for 5,000+ monthly calls.",
      "Delivered 3 production-ready SaaS applications using React.js, Node.js, and PostgreSQL.",
      "Architected RESTful APIs with 99.9% uptime and automated testing suites.",
      "Introduced CI/CD pipelines with Jenkins, accelerating development velocity by 40%."
    ]
  },
  {
    id: "exp3",
    role: "Software Engineering Intern",
    company: "LTIMindtree",
    location: "Bengaluru, India",
    period: "Feb 2023 – May 2023",
    description: [
      "Contributed to enterprise web applications using Java, HTML, CSS, and SQL.",
      "Collaborated with senior developers to resolve critical bugs and enhance UI functionality."
    ]
  }
];

export const projects: Project[] = [
  {
    id: "proj1",
    title: "Healthcare Voicemail App",
    type: "Client Project",
    description: "A Visual Voicemail solution integrated with Genesys Cloud, processing over 10,000 voicemails monthly.",
    technologies: ["Genesys Cloud", "React.js", "Node.js", "MongoDB", "Speech APIs"],
    stats: ["95% Transcription Accuracy", "10k+ Monthly Voicemails", "HIPAA Compliant"]
  },
  {
    id: "proj2",
    title: "Pet Adoption Platform",
    type: "Personal Project",
    description: "Full-stack platform facilitating over 500 successful adoptions within six months.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "RESTful APIs"],
    stats: ["500+ Adoptions", "40% Faster Load Time"]
  },
  {
    id: "proj3",
    title: "Food Delivery System",
    type: "Personal Project",
    description: "Responsive delivery platform handling 1,000+ daily orders with real-time tracking.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "Stripe API", "WebSockets"],
    stats: ["1000+ Daily Orders", "Real-time Tracking", "Secure Payments"]
  }
];

export const skills: Skill[] = [
  {
    category: "Languages & Frameworks",
    items: ["JavaScript (ES6+)", "TypeScript", "React.js", "Node.js", "Express.js", "Redux", "Java"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2, S3, RDS, Lambda)", "Docker", "Kubernetes", "Jenkins", "CI/CD"]
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Schema Design"]
  },
  {
    category: "Specialized",
    items: ["Genesys Cloud", "IVR Architect", "Agile/Scrum", "TDD"]
  }
];

export const education: Education[] = [
  {
    id: "edu1",
    degree: "Bachelor of Engineering in Electronics and Communication",
    institution: "Global Academy of Technology",
    location: "Bengaluru, India",
    period: "2019 – 2023",
    score: "CGPA: 8.5/10.0"
  }
];

export const certifications: Certification[] = [
  { id: "cert1", name: "Full Stack Web Development", issuer: "Udemy" },
  { id: "cert2", name: "AWS Fundamentals", issuer: "Self-Directed" },
  { id: "cert3", name: "Introduction to Programming Using Python", issuer: "" },
  { id: "cert4", name: "Developer Virtual Experience Program", issuer: "Accenture" }
];

// Context for AI
export const RESUME_CONTEXT = `
You are an AI assistant representing Sharath Kumar A, a Senior Full Stack Developer.
Here is Sharath's resume data to answer questions:

Summary: ${summary}

Experience:
${experiences.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description.join(' ')}`).join('\n')}

Projects:
${projects.map(p => `- ${p.title} (${p.type}): ${p.description} using ${p.technologies.join(', ')}. Stats: ${p.stats?.join(', ')}`).join('\n')}

Skills:
${skills.map(s => `${s.category}: ${s.items.join(', ')}`).join('\n')}

Education:
${education.map(e => `- ${e.degree} at ${e.institution}, ${e.period}. ${e.score}`).join('\n')}

Certifications:
${certifications.map(c => `- ${c.name} (${c.issuer})`).join('\n')}

Contact: ${JSON.stringify(contactInfo)}

Answer in a professional, concise, and helpful manner. If you don't know something, ask the user to contact Sharath directly via email.
`;