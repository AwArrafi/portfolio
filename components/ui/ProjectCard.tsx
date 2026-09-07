import type { Project, ProjectTag } from "../../data/projects";
import ProjectPreview from "./ProjectPreview";

type ProjectCardProps = {
  project: Project;
};

const tagVariantStyles: Record<ProjectTag["variant"], string> = {
  cyan: "border border-cyan-100 bg-cyan-50 text-cyan-700",
  violet: "border border-violet-100 bg-violet-50 text-violet-700",
  green: "border border-emerald-100 bg-emerald-50 text-emerald-700",
  gray: "border border-slate-200 bg-slate-100 text-slate-600",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_24px_70px_rgba(8,145,178,0.16)]">
      <ProjectPreview project={project} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className={`rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${tagVariantStyles[tag.variant]}`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        <h3 className="mt-5 text-2xl font-semibold text-slate-900">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {project.description}
        </p>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-bold tracking-wide text-cyan-600 transition hover:gap-3 hover:text-cyan-700"
        >
          {project.cta}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
