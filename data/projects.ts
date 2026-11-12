// Logo paths from Simple Icons (https://simpleicons.org), CC0 1.0.

export type Tone = "cyan" | "violet" | "amber" | "green" | "rose" | "navy";

/** Home page "Selected work" bento cards. */
export type FeaturedProject = {
  name: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
  imageAlt: string;
  tone: Tone;
  /** Grid span out of 12 on desktop. */
  span: 5 | 7;
  /** How the screenshot peeks out of the card. */
  shot: "full" | "bleed" | "phone" | "center";
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "ApplyTrack",
    description:
      "A job application tracker for managing applications, interviews and job search progress, with pipeline analytics, Google sign-in and an English/Indonesian interface.",
    tags: ["Next.js", "Django", "PostgreSQL"],
    href: "https://applytrack.my.id",
    image: "/images/projects/applytrack.png",
    imageAlt: "ApplyTrack dashboard preview",
    tone: "cyan",
    span: 7,
    shot: "full",
  },
  {
    name: "DASSCare",
    description:
      "A mental health screening system featuring DASS-21 scoring, result visualization and a rule-based recommendation system.",
    tags: ["Laravel", "Tailwind", "Node.js"],
    href: "https://dasscare-production.up.railway.app/",
    image: "/images/projects/dass.png",
    imageAlt: "DASSCare landing page preview",
    tone: "violet",
    span: 5,
    shot: "bleed",
  },
  {
    name: "FlavourScape",
    description: "Your daily cooking partner — just scan, cook, eat and repeat.",
    tags: ["Kotlin", "Mobile"],
    href: "https://github.com/AwArrafi/capstone_project",
    image: "/images/projects/flavourscape-mobile.png",
    imageAlt: "FlavourScape mobile app preview",
    tone: "amber",
    span: 5,
    shot: "phone",
  },
  {
    name: "Portal Berita",
    description:
      "A modern website concept tailored for news, focusing on responsive landing pages, clean UI and a conversion-focused structure.",
    tags: ["Laravel", "Tailwind", "Node.js"],
    href: "https://github.com/AwArrafi/Portal-Berita",
    image: "/images/projects/portal-berita.png",
    imageAlt: "Portal Berita website preview",
    tone: "green",
    span: 7,
    shot: "center",
  },
];

const NEXTJS = { color: "currentColor", path: "M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" };
const LARAVEL = { color: "#FF2D20", path: "M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z" };
const KOTLIN = { color: "#7F52FF", path: "M24 24H0V0h24L12 12Z" };
const ANDROID = { color: "#3DDC84", path: "M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z" };
const REACT = { color: "#61DAFB", path: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" };
const HTML5 = { color: "#E34F26", path: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" };

export type ProjectType = "Web" | "Mobile" | "Learning";

/** /projects archive. Projects without a screenshot get a logo cover. */
export type ArchiveProject = {
  year: string;
  name: string;
  slug: string;
  type: ProjectType;
  stack: string;
  description: string;
  live?: string;
  repo?: string;
  image?: string;
  logo?: { color: string; path: string };
  tone: Tone;
};

export const allProjects: ArchiveProject[] = [
  { year: "2026", name: "Portfolio website", slug: "portfolio", type: "Web", stack: "Next.js · TypeScript · Tailwind · Resend", description: "This site — personal portfolio with a working contact form.", live: "https://www.awangarrafi.my.id", repo: "https://github.com/AwArrafi/portfolio", logo: NEXTJS, tone: "navy" },
  { year: "2026", name: "ApplyTrack", slug: "applytrack", type: "Web", stack: "Next.js · Django · PostgreSQL", description: "Job application tracker with pipeline analytics, Google sign-in and an English/Indonesian interface.", live: "https://applytrack.my.id", repo: "https://github.com/AwArrafi/applytrack", image: "/images/projects/cards/applytrack-card.jpg", tone: "cyan" },
  { year: "2025", name: "DASSCare", slug: "dasscare", type: "Web", stack: "Laravel · Tailwind · Node.js", description: "Mental health screening system with DASS-21 scoring, result visualization and rule-based recommendations.", live: "https://dasscare-production.up.railway.app/", image: "/images/projects/cards/dass-card.jpg", tone: "violet" },
  { year: "2025", name: "E-Commerce Laravel", slug: "e-commerce-laravel", type: "Web", stack: "Laravel · PHP", description: "E-commerce web application built with Laravel.", repo: "https://github.com/AwArrafi/e-commerce-laravel", logo: LARAVEL, tone: "rose" },
  { year: "2025", name: "Portal Berita", slug: "Portal-Berita", type: "Web", stack: "Laravel · Tailwind · Node.js", description: "News website concept with responsive landing pages and a clean reading structure.", repo: "https://github.com/AwArrafi/Portal-Berita", image: "/images/projects/cards/portal-berita-card.jpg", tone: "green" },
  { year: "2024", name: "FlavourScape", slug: "capstone_project", type: "Mobile", stack: "Kotlin · Android", description: "Daily cooking partner — scan, cook, eat and repeat. Capstone project.", repo: "https://github.com/AwArrafi/capstone_project", image: "/images/projects/cards/flavourscape-mobile-card.jpg", tone: "amber" },
  { year: "2024", name: "Submission", slug: "Submission", type: "Learning", stack: "Kotlin · Android", description: "Android app built with Kotlin as a course submission.", repo: "https://github.com/AwArrafi/Submission", logo: KOTLIN, tone: "violet" },
  { year: "2024", name: "Submission 1 Intermediate", slug: "Submission1Intermediate", type: "Learning", stack: "Kotlin · Android", description: "Intermediate-level Android submission built with Kotlin.", repo: "https://github.com/AwArrafi/Submission1Intermediate", logo: ANDROID, tone: "green" },
  { year: "2024", name: "Birthday Netflix", slug: "birthday-netflix", type: "Web", stack: "React", description: "Netflix-inspired birthday page built with React.", repo: "https://github.com/AwArrafi/birthday-netflix", logo: REACT, tone: "cyan" },
  { year: "2024", name: "Pemweb", slug: "Pemweb", type: "Learning", stack: "HTML · CSS", description: "Static website for a web programming course.", repo: "https://github.com/AwArrafi/Pemweb", logo: HTML5, tone: "amber" },
];
