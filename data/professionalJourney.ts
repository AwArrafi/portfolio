export type JourneyItem = {
  id: number;
  title: string;
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
    id: 1,
    title: "Intern in PT. Winnicode Garuda",
    period: "2025",
    description:
      "Deepening expertise in React, Laravel, and Node.JS. Focusing on component structure, responsive interfaces, performance optimization, and refined UI/UX implementation.",
    variant: "cyan",
  },
  {
    id: 2,
    title: "Intern at Diskominfo Kutai Kartanegara",
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
      "Tailwind",
      "SCSS",
      "JavaScript",
    ],
  },
  {
    id: 2,
    title: "Backend",
    icon: "{}",
    variant: "violet",
    skills: ["PHP", "Laravel", "MySQL", "REST API"],
  },
  {
    id: 3,
    title: "Tools",
    icon: "⚙",
    variant: "gray",
    skills: ["Figma", "Git", "Vercel", "Postman", "Visual Studio Code"],
  },
];
