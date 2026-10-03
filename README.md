# Tushar Kumar Das — Software Engineer Portfolio

A developer-focused personal portfolio website engineered with **React 18**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

---

## 🚀 Key Features

- **Developer-Centric Design:** Terminal & IDE preview cards, clean typography (`Inter` + `JetBrains Mono`), blueprint grid backgrounds, and subtle status indicators.
- **Impact & Metrics Highlighted:** Real production impact badges from **BOSCH** (replacing Kafka with REST APIs to reduce support by ~40%, authoring 10+ OpenAPI specs, cell-editing sync, dynamic query engine) and **HighRadius** (7% latency improvement via DAO pattern, 10% credit assessment reduction).
- **Dual-Action Resume UX:**
  - **In-App Interactive Preview Modal:** Direct PDF embed with toolbar (Print, Open in Tab, Download).
  - **Direct Download:** 1-click download with custom filename and toast confirmation.
- **Decoupled Data Architecture:** All experience, projects, skills, education, and coding profiles are structured in type-safe TypeScript files in `src/data/`.
- **Dark / Light Theme System:** System-aware theme toggle with persistent `localStorage` support and zero flash of incorrect theme.
- **1-Click Contact Utilities:** Quick copy for email and phone numbers with toast alerts, direct mailto generation, and verified coding profile links.
- **Fully Responsive & Accessible:** Semantic HTML5, ARIA labels, focus states, and reduced-motion awareness.

---

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript 5
- **Build Tool:** Vite 4
- **Styling:** Tailwind CSS 3 with custom color tokens
- **Animations:** Framer Motion 10
- **Iconography:** Lucide React

---

## 📁 Directory Structure

```
Portfolio/
├── public/
│   └── Tushar_Kumar_Das_Resume.pdf    # Statically served resume PDF
├── src/
│   ├── components/
│   │   ├── common/                    # Button, Badge, Card, CodeBlock, ResumeModal, Toast
│   │   ├── layout/                    # Navbar, MobileNav, Footer, Container
│   │   └── sections/
│   │       ├── Hero/                  # Hero section with interactive IDE Terminal
│   │       ├── About/                 # Engineering philosophy & core principles
│   │       ├── Skills/                # Filterable skills matrix by domain
│   │       ├── Experience/            # BOSCH & HighRadius interactive timelines & impact badges
│   │       ├── Projects/              # Noogle Search Engine & FinTech Platform
│   │       ├── CodingProfiles/        # LeetCode, HackerRank, CodeChef
│   │       ├── Education/             # KIIT B.Tech CS (9.02 CGPA)
│   │       └── Contact/               # 1-click copy, contact inquiry form & socials
│   ├── context/
│   │   └── ThemeContext.tsx           # Dark / Light theme provider
│   ├── hooks/
│   │   ├── useScrollSpy.ts            # Active navbar indicator
│   │   ├── useClipboard.ts            # 1-click copy with toast
│   │   └── useMediaQuery.ts           # Responsive listener
│   ├── data/                          # Data source files (Update here!)
│   │   ├── profile.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── education.ts
│   │   └── codingProfiles.ts
│   ├── types/
│   │   └── index.ts                   # Strict TypeScript domain interfaces
│   ├── utils/
│   │   └── cn.ts                      # Class merger utility
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 💻 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
```

The optimized production bundle will be generated in the `dist/` directory, ready to deploy to Vercel, Netlify, or GitHub Pages.

---
