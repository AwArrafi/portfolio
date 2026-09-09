import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

export default function FeaturedProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#f6f9ff] px-6 py-16 text-slate-900 dark:bg-[#0b1424] dark:text-[#dae2fd] md:px-10 lg:px-16"
    >
      {/* Background Glow */}

      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl dark:bg-cyan-300/10" />

      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-violet-300/15 blur-3xl dark:bg-violet-300/10" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}

        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-[#dae2fd] md:text-4xl">
              Featured Projects
            </h2>

            <p className="mt-3 text-base leading-7 text-slate-600 dark:text-[#bbc9cd]">
              A selection of my best work across different domains.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex w-fit items-center gap-2 text-base font-bold text-cyan-600 transition hover:gap-3 hover:text-cyan-700 dark:text-cyan-300 dark:hover:text-cyan-200"
          >
            All Projects
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Project Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
