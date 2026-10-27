export type JourneyItem = {
  id: number;
  title: string;
  role?: string;
  period: string;
  description: string;
  variant: "cyan" | "violet" | "gray";
};

export type SkillGroup = {
  id: number;
  title: string;
  icon: string;
  variant: "cyan" | "violet" | "gray";
  skills: string[];
};

export const journeyItems: JourneyItem[] = [
  {
    id: 4,
    title: "PT. Wira Sandi",
    role: "Software Developer",
    period: "2026 – Present",
    description:
      "Developing a multi-company HRMS for a security outsourcing company, covering recruitment, QR + GPS attendance, overtime, leave, and payroll (BPJS, PPh 21, THR). Integrated psychological assessment results into the recruitment pipeline and documented end-to-end workflows with UAT checklists for 8 user roles.",
    variant: "cyan",
  },
  {
    id: 1,
    title: "Intern in PT. Winnicode Garuda",
    role: "Full-Stack Developer",
    period: "2025",
    description:
      "Deepening expertise in React, Laravel, and Node.JS. Focusing on component structure, responsive interfaces, performance optimization, and refined UI/UX implementation.",
    variant: "violet",
  },
  {
    id: 2,
    title: "Intern at Diskominfo Kutai Kartanegara",
    role: "Programmer",
    period: "2024",
    description:
      "Developed robust web applications using Laravel. Managed relational databases, and reconstruct features",
    variant: "violet",
  },
  {
    id: 3,
    title: "Software Engineering Foundations",
    period: "2022-2023",
    description:
      "Mastering the fundamentals of HTML, CSS, JavaScript, responsive design principles, and basic database operations as the foundation for building real-world web applications.",
    variant: "gray",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: 1,
    title: "Frontend",
    icon: "</>",
    variant: "cyan",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "SCSS",
    ],
  },
  {
    id: 2,
    title: "Backend",
    icon: "{}",
    variant: "violet",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "PHP",
      "Laravel",
      "PostgreSQL",
      "MySQL",
      "REST API",
    ],
  },
  {
    id: 3,
    title: "Tools",
    icon: "⚙",
    variant: "gray",
    skills: [
      "Git",
      "GitHub Actions",
      "Vercel",
      "Render",
      "Cloudflare",
      "Figma",
      "Postman",
      "Visual Studio Code",
    ],
  },
];
