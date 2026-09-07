export type ProjectTag = {
  label: string;
  variant: "cyan" | "violet" | "green" | "gray";
};

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  cta: string;
  href: string;
  previewType: "web" | "mobile";
  tags: ProjectTag[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "DASSCare",
    description:
      "A comprehensive mental health screening system featuring DASS-21 scoring, result visualization, and a rule-based recommendation system.",
    image: "/images/projects/dass.png",
    imageAlt: "DASSCare project preview",
    cta: "Link to Website",
    previewType: "web",
    href: "https://dasscare-production.up.railway.app/",
    tags: [
      {
        label: "LARAVEL",
        variant: "cyan",
      },
      {
        label: "TAILWIND",
        variant: "violet",
      },
      {
        label: "NODE.JS",
        variant: "green",
      },
    ],
  },
  {
    id: 2,
    title: "FlavourScape",
    description: "Your Daily Cooking Partner, just scan, cook, eat, and repeat",
    image: "/images/projects/flavourscape-mobile.png",
    imageAlt: "Personal portfolio project preview",
    cta: "Github Repo",
    previewType: "mobile",
    href: "https://github.com/AwArrafi/capstone_project",
    tags: [
      {
        label: "Mobile",
        variant: "cyan",
      },
      {
        label: "Kotlin",
        variant: "gray",
      },
    ],
  },
  {
    id: 3,
    title: "PORTAL BERITA",
    description:
      "A modern website service concept tailored for news, focusing on responsive landing pages, clean UI, and conversion-focused structure.",
    image: "/images/projects/portal-berita.png",
    imageAlt: "Avora project preview",
    cta: "Github Repo",
    previewType: "web",
    href: "https://github.com/AwArrafi/Portal-Berita",
    tags: [
      {
        label: "LARAVEL",
        variant: "green",
      },
      {
        label: "TAILWIND",
        variant: "cyan",
      },
      {
        label: "NODE.JS",
        variant: "violet",
      },
    ],
  },
];
