import microsoft from "../images/resume/microsoft.svg";
import skillsoft from "../images/resume/skillsoft.svg";
import docker from "../images/resume/docker.svg";
import genpact from "../images/resume/genpact.svg";
import mozilla from "../images/resume/mozilla.svg";
import github from "../images/resume/github.svg";

export const EDUCATION = [
  {
    title: "Bachelor of Technology",
    date: "2015 — 2019",
    description:
      "Passed with Ist Division (70%) from Uttar Pradesh Technical University, Lucknow.",
  },
  {
    title: "Higher Secondary",
    date: "2013 — 2015 | CBSE",
    description:
      "Passed with Ist Div. (90%) from Jawahar Navodaya Vidyalay, Gopalganj, Bihar.",
  },
  {
    title: "High school",
    date: "2011 — 2013 | CBSE",
    description: "Passed with Ist Div. (90%) from S S Academy, Saran, Bihar.",
  },
];

export const EXPERIENCE = [
  {
    title: "Genpact",
    date: "06/2023 — Present",
    description:
      "Developed React.js interfaces, optimized performance, integrated frontend/backend, set up data warehouse, led a team and utilized Agile methodologies.",
  },
  {
    title: "Sarkari Doot (Self-Owned)",
    date: "03/2023 — 05/2023",
    description:
      "Developed and managed websites and Android apps, including MunshiPremchand.com, using React.js, JavaScript, HTML5, and CSS3.",
  },
  {
    title: "Tata Consultancy Services",
    date: "01/2020 — 03/2023",
    description:
      "Built dynamic web applications with React.js, JavaScript, TypeScript, HTML5, and CSS3. Migrated legacy codebases, improved performance, and collaborated on UX/UI design.",
  },
  {
    title: "MileStone OS",
    date: "08/2019 — 11/2019",
    description:
      "Gained practical knowledge of JavaScript fundamentals and advanced features through hands-on exercises and coding sessions.",
  },
];

export const PRIMARY_SKILLS = [
  { name: "React.js", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "TypeScript", percentage: 80 },
  { name: "HTML5 & CSS3", percentage: 80 },
];

export const SKILLS = [
  {
    title: "Frontend Technologies",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "JSX",
    ],
  },
  {
    title: "State Management",
    skills: ["React Hooks", "Context API"],
  },
  {
    title: "Build Tools",
    skills: ["Webpack", "Babel", "NPM", "ESLint", "Prettier"],
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub", "GitLab"],
  },
  {
    title: "Back-End Basics",
    skills: ["Node.js", "SQL", "PL-SQL", "Postgres", "pgAdmin"],
  },
  {
    title: "Deployment & DevOps",
    skills: [
      "CI/CD Pipelines",
      "Docker",
      "Google Cloud Platform (GCP)",
      "GitHub Actions",
    ],
  },
  {
    title: "Other Tools",
    skills: [
      "Visual Studio Code",
      "Jira",
      "Miro",
      "Postman",
      "Confluence",
      "Jenkins",
      "Split",
      "Splunk",
    ],
  },
  {
    title: "Methods",
    skills: [
      "Agile Methodology",
      "Scrum",
      "Code Review Practices",
      "Test Driven Development",
    ],
  },
];

export const AWARDS = [
  {
    title: "Certificate of Achievement",
    date: "04/2024",
    description:
      "At Genpact - Awarded for demonstrating exceptional skill and dedication in frontend development.",
  },
  {
    title: "Best Team Award",
    date: "04/2024",
    description:
      "At Genpact - Awarded to our team for being the top-performing group, recognized for delivering outstanding results and surpassing performance metrics.",
  },
  {
    title: "Bronze & Silver Cheer Awards",
    date: "06/2023 — Present",
    description:
      "Awarded 5 times so far - Awarded for outstanding performance as a frontend and full stack developer",
  },
  {
    title: "Service and Commitment Award",
    date: "01/2023",
    description:
      "At Tata Consultancy Services - Honored for outstanding dedication and contributions to the team and organization.",
  },
  {
    title: "Learning Achievement Award",
    date: "06/2022",
    description:
      "At Tata Consultancy Services - Awarded for demonstrating exceptional learning and mastery in frontend development, particularly in React.js, JavaScript, HTML, and CSS.",
  },
  {
    title: "On The Spot Award",
    date: "08/2020",
    description:
      "At Tata Consultancy Services - Awarded for successful Contribution to the migration of legacy codebases to modern React.js applications, improving maintainability and performance.",
  },
];

export const CERTIFICATIONS = [
  {
    title: "React.js",
    authority: "Skillsoft",
    description:
      "Certified in React.js, demonstrating proficiency in building dynamic web applications using React's advanced features and best practices.",
    logo: skillsoft,
  },
  {
    title: "JavaScript",
    authority: "Mozilla",
    description:
      "Recognized for expertise in JavaScript, including advanced techniques and modern best practices for efficient and scalable web development.",
    logo: mozilla,
  },
  {
    title: "TypeScript",
    authority: "Microsoft",
    description:
      "Skilled in TypeScript, enhancing JavaScript with strong typing and advanced features to improve code quality, maintainability, and scalability in web applications.",
    logo: microsoft,
  },
  {
    title: "Git & GitHub",
    authority: "GitHub",
    description:
      "Certified in Git version control and GitHub Actions, with expertise in Git-based workflows, version control strategies, and project management using GitHub Projects and collaboration tools.",
    logo: github,
  },
  {
    title: "Docker Fundamentals",
    authority: "Docker",
    description:
      "Acquired foundational knowledge in Docker, including containerization, orchestration, and deployment, enhancing development and operational efficiency.",
    logo: docker,
  },
  {
    title: "Agile Methodology",
    authority: "Genome",
    description:
      "Certified in Agile methodologies, showcasing skills in iterative development, team collaboration, and adaptive planning to deliver project success.",
    logo: genpact,
  },
];
