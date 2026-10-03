import { EducationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    id: "kiit",
    institution: "Kalinga Institute of Industrial Technology (KIIT)",
    degree: "Bachelor of Technology in Computer Science",
    period: "2019 – 2023",
    location: "Bhubaneswar, Odisha",
    grade: {
      label: "CGPA",
      value: "9.02 / 10.0"
    },
    highlights: [
      "Graduated with High Academic Distinction (9.02 CGPA).",
      "Focused on Data Structures, Algorithms, Software Engineering, and Database Management Systems.",
      "Hands-on project work in Web Technologies, Distributed Systems, and Object-Oriented System Design."
    ],
    courses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/C++)",
      "Database Management Systems (SQL)",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering & Agile Methodologies",
      "Web Technologies"
    ]
  }
];
