export type Theme = 'dark' | 'light';

export interface Profile {
  name: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  summary: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export interface MetricItem {
  label: string;
  value: string;
  subtext?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  type: 'Full-time' | 'Internship' | 'Trainee';
  summary: string;
  highlights: string[];
  metrics?: MetricItem[];
  technologies: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level?: 'Core' | 'Advanced' | 'Proficient' | 'Familiar';
    featured?: boolean;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  features: string[];
  links: {
    live?: string;
    github?: string;
  };
  metrics?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade: {
    label: string;
    value: string;
  };
  highlights: string[];
  courses: string[];
}

export interface CodingProfileItem {
  id: string;
  platform: 'LeetCode' | 'HackerRank' | 'CodeChef';
  username: string;
  url: string;
  description: string;
  focus: string[];
  color: string;
}

export interface NavItem {
  label: string;
  href: string;
}
