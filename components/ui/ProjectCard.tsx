import type { Project, ProjectTag } from "../../data/projects";
import ProjectPreview from "./ProjectPreview";

type ProjectCardProps = {
  project: Project;
};

const tagVariantStyles: Record<ProjectTag["variant"], string> = {
  cyan: "bg-cyan-100 text-cyan-700 dark:bg-cyan-300/20 dark:text-cyan-200",

  violet:
    "bg-violet-100 text-violet-700 dark:bg-violet-300/20 dark:text-violet-200",

  green:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-300/20 dark:text-emerald-200",

  gray: "bg-slate-100 text-slate-600 dark:bg-slate-400/20 dark:text-slate-300",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-[0_16px_45px_rgba(15,23,42,0.08)]
        backdrop-blur-md
        transition
        duration-300
        hover:-translate-y-2
        hover:border-cyan-300
        hover:shadow-[0_20px_55px_rgba(8,145,178,0.14)]

        dark:border-white/10
        dark:bg-slate-800/50
        dark:shadow-2xl
        dark:hover:border-cyan-300/30
      "
    >
      {/* Project Preview */}

      <ProjectPreview project={project} />

      {/* Project Content */}

      <div className="flex flex-1 flex-col p-6">
        {/* Tags */}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className={`rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${tagVariantStyles[tag.variant]}`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Title */}

        <h3 className="mt-5 text-2xl font-semibold text-slate-900 dark:text-[#dae2fd]">
          {project.title}
        </h3>

        {/* Description */}

        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-[#bbc9cd]">
          {project.description}
        </p>

        {/* CTA */}

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold tracking-wide text-cyan-600 transition hover:gap-3 hover:text-cyan-700 dark:text-cyan-300 dark:hover:text-cyan-200"
        >
          {project.cta}

          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
