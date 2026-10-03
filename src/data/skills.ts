import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core languages used for frontend architecture, server scripting, and algorithms",
    skills: [
      { name: "TypeScript", level: "Core", featured: true },
      { name: "JavaScript (ES6+)", level: "Core", featured: true },
      { name: "Python", level: "Proficient", featured: true },
      { name: "Java", level: "Proficient", featured: true },
      { name: "C++", level: "Proficient" },
      { name: "C", level: "Familiar" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend & UI Engineering",
    description: "Technologies used for scalable, responsive, and interactive user interfaces",
    skills: [
      { name: "React.js", level: "Core", featured: true },
      { name: "React Hooks & Custom Hooks", level: "Core", featured: true },
      { name: "State Management (useReducer, Context)", level: "Core", featured: true },
      { name: "RxJS & Reactive Forms", level: "Advanced" },
      { name: "Material-UI (MUI)", level: "Advanced", featured: true },
      { name: "Tailwind CSS", level: "Core", featured: true },
      { name: "HTML5 / Semantic Web", level: "Core" },
      { name: "CSS3 / SCSS", level: "Core" },
      { name: "Framer Motion", level: "Proficient" }
    ]
  },
  {
    id: "api_backend",
    title: "REST APIs & Networking",
    description: "Client-server communication, contract design, and API lifecycle",
    skills: [
      { name: "REST API Design", level: "Core", featured: true },
      { name: "Swagger / OpenAPI", level: "Core", featured: true },
      { name: "Axios & Fetch API", level: "Core", featured: true },
      { name: "Java Servlets & JDBC", level: "Proficient" },
      { name: "DAO Architecture Pattern", level: "Proficient" },
      { name: "Postman & Bruno", level: "Core", featured: true }
    ]
  },
  {
    id: "database",
    title: "Databases & Data Management",
    description: "Relational querying, indexing, and data models",
    skills: [
      { name: "SQL", level: "Advanced", featured: true },
      { name: "MySQL", level: "Advanced", featured: true },
      { name: "Data Normalization & Querying", level: "Advanced" }
    ]
  },
  {
    id: "tools_practices",
    title: "Engineering Tools & Best Practices",
    description: "Developer tooling, version control, AI assistance, and agile delivery",
    skills: [
      { name: "Git & GitHub", level: "Core", featured: true },
      { name: "GitHub Copilot", level: "Core", featured: true },
      { name: "Gemini Code Assist", level: "Core", featured: true },
      { name: "VS Code", level: "Core" },
      { name: "Antigravity", level: "Proficient" },
      { name: "JIRA & Agile/Scrum", level: "Core" },
      { name: "Component Architecture", level: "Core", featured: true },
      { name: "Unit Testing & CI/CD", level: "Proficient" }
    ]
  }
];
