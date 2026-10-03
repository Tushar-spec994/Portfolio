import { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: "bosch",
    role: "Software Engineer",
    company: "BOSCH Global Software and Technologies",
    location: "Hyderabad, Telangana",
    period: "Jan. 2024 – Present",
    startDate: "Jan 2024",
    endDate: "Present",
    current: true,
    type: "Full-time",
    summary: "Architecting and maintaining enterprise React applications, custom hooks, real-time workflow synchronizations, and REST API integrations.",
    highlights: [
      "Implemented REST API integration in React using Axios/Fetch with custom hooks to consume backend endpoints and enable real-time data exchange between frontend components and server-side systems.",
      "Implemented automated email notification workflows using useEffect hooks with setInterval-based background tasks to schedule and trigger periodic alerts, ensuring timely and reliable communication.",
      "Developed a dynamic Help Page component using controlled components, useState/useReducer hooks, and dynamic list rendering to support add/edit/delete operations on hyperlinks with real-time UI updates.",
      "Developed a History component for audit-trail workflow approvals using RESTful API consumption, component-based architecture, and dynamic state management using React hooks to display user roles, IDs, and approval metadata.",
      "Developed a dynamic, in-place filtering engine that allows users to query complex datasets without page refreshes, significantly improving data discoverability.",
      "Developed a real-time cell-editing feature that synchronizes user-selected trigger dates with the backend via RESTful services, providing immediate UI feedback.",
      "Replaced Kafka-based synchronous request/response workflows with REST APIs, reducing operational complexity, improving error visibility, simplifying troubleshooting, and decreasing integration support effort by approximately 40%.",
      "Developed and documented 10+ REST APIs using Swagger/OpenAPI, accelerating consumer onboarding and reducing integration effort for downstream teams.",
      "Improved frontend performance by enabling client-specific field selection and reducing dependency on multiple REST API calls.",
      "Leveraged GitHub Copilot and Gemini Code Assist for debugging, unit testing, and code reviews accelerating implementation, defect resolution, and code quality improvements by 30%."
    ],
    metrics: [
      {
        label: "Support Effort Reduced",
        value: "~40%",
        subtext: "via REST API migration from Kafka"
      },
      {
        label: "REST APIs Authored",
        value: "10+",
        subtext: "Documented with Swagger/OpenAPI"
      },
      {
        label: "Speed & Quality Boost",
        value: "30%",
        subtext: "using Copilot & Gemini Code Assist"
      }
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "REST APIs",
      "Swagger / OpenAPI",
      "Axios",
      "React Hooks (useState, useReducer, useEffect)",
      "Dynamic Filtering",
      "Audit Trail / History UI",
      "Git",
      "JIRA",
      "GitHub Copilot",
      "Gemini Code Assist"
    ]
  },
  {
    id: "highradius",
    role: "Project Trainee",
    company: "HighRadius Corporation",
    location: "Bhubaneswar, Odisha",
    period: "Jan. 2022 – Apr. 2022",
    startDate: "Jan 2022",
    endDate: "Apr 2022",
    current: false,
    type: "Trainee",
    summary: "Built an end-to-end B2B FinTech invoice management web application with interactive financial dashboards, CRUD operations, and predictive analytics.",
    highlights: [
      "Architected and deployed an end-to-end B2B FinTech invoice management web application using React.js, Java Servlets, and MySQL, automating Accounts Receivable workflows across 1,000+ transaction records.",
      "Designed an interactive financial dashboard with React.JS for real-time analytics and visualization of key business metrics.",
      "Designed an enterprise DAO (Data Access Object) pattern utilizing the Java Collections Framework and JDBC, optimizing data-retrieval latency by 7% for large-scale invoice datasets.",
      "Engineered modular Java Servlets to handle concurrent HTTP requests, enabling real-time CRUD operations, multi-field search queries, and dynamic server-side pagination.",
      "Developed an interactive, responsive user interface utilizing React.js and Material-UI, incorporating analytics dashboards with dynamic bar graphs and pie charts to visualize financial distribution metrics.",
      "Integrated an AI-driven predictive service within the UI grid, allowing financial analysts to forecast order amounts on selected invoices and reducing manual credit assessment time by 10%."
    ],
    metrics: [
      {
        label: "Transactions Automated",
        value: "1,000+",
        subtext: "Accounts Receivable records"
      },
      {
        label: "Data Retrieval Latency",
        value: "-7%",
        subtext: "Optimized via DAO & JDBC"
      },
      {
        label: "Credit Assessment Time",
        value: "-10%",
        subtext: "Via AI order prediction integration"
      }
    ],
    technologies: [
      "React.js",
      "Material-UI",
      "Java Servlets",
      "JDBC",
      "DAO Pattern",
      "MySQL",
      "SQL",
      "RESTful Endpoints",
      "Pagination & Multi-field Search",
      "Data Visualization"
    ]
  }
];
