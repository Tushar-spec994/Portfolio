import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    id: "noogle-search-engine",
    title: "Noogle Search Engine",
    tagline:
      "Real-time modern search engine web application powered by React and REST APIs",
    description:
      "A fast, intuitive, and responsive search engine application engineered with React.js that interfaces with live REST APIs to deliver comprehensive search results, real-time news feeds, high-definition images, and embedded video results.",
    highlights: [
      "Engineered with React.js and REST API endpoints for seamless asynchronous data retrieval and dynamic DOM updates.",
      "Integrated real-time search queries with debounce handling to optimize network requests and user responsiveness.",
      "Built multi-category tabs enabling users to switch between Web search, News articles, Image gallery, and Video results.",
      "Implemented a sleek, high-contrast Dark Mode with pure CSS variables and smooth theme transitions.",
      "Fully responsive mobile-first interface optimized for rapid touch navigation and lightweight payload delivery.",
    ],
    technologies: [
      "React.js",
      "JavaScript (ES6+)",
      "REST APIs",
      "CSS3 / Variables",
      "Async/Await",
      "Dark Mode UI",
      "Responsive Layouts",
    ],
    features: [
      "Real-time search query execution",
      "Multi-tab filtering: All, News, Images, Videos",
      "Instant Dark/Light theme toggle",
      "Clean, modern card-based search results",
      "Debounced API requests",
    ],
    links: {
      github: "https://github.com/Tushar-spec994",
      live: "https://noogler.netlify.app/search",
    },
    metrics: "Real-time Multi-Category Search & Dark Mode",
  },
  {
    id: "fintech-invoice-manager",
    title: "FinTech B2B Invoice & Analytics Platform",
    tagline:
      "High-throughput Accounts Receivable application with predictive analytics and DAO pattern",
    description:
      "Enterprise invoice management solution built during project training at HighRadius Corporation. Managed over 1,000+ transaction records with real-time financial dashboards, multi-field search, and an integrated AI predictive service for credit assessments.",
    highlights: [
      "Architected backend DAO (Data Access Object) using Java Collections Framework and JDBC, reducing data retrieval latency by 7%.",
      "Engineered modular Java Servlets handling concurrent HTTP requests with dynamic server-side pagination and multi-field filtering.",
      "Built responsive Material-UI analytics dashboards with dynamic bar graphs and pie charts to visualize accounts receivable distributions.",
      "Integrated AI predictive models into the UI grid to forecast invoice payment amounts, cutting manual assessment time by 10%.",
    ],
    technologies: [
      "React.js",
      "Material-UI",
      "Java Servlets",
      "JDBC / DAO Pattern",
      "MySQL",
      "RESTful Endpoints",
      "AI Predictive Services",
    ],
    features: [
      "Full CRUD operations on 1,000+ invoice records",
      "Interactive analytics charts & business metrics",
      "Multi-field dynamic search & server-side pagination",
      "AI-driven order amount prediction",
    ],
    links: {},
    metrics: "-7% Retrieval Latency | -10% Assessment Time",
  },
];
