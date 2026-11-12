import Image from "next/image";
import Link from "next/link";
import { featuredProjects, type FeaturedProject } from "../../data/projects";

// Where the screenshot sits in the card's lower half; it slides up on hover
const shotStyles: Record<FeaturedProject["shot"], string> = {
  full: "left-8 right-8 -bottom-10 top-0 rounded-t-[14px] border",
  bleed: "left-8 -right-[60px] -bottom-10 top-0 rounded-tl-[14px] border",
  center:
    "left-[11%] right-[11%] -bottom-10 top-0 mx-auto max-w-[460px] rounded-t-[14px] border",
  phone:
    "left-0 right-0 top-0 mx-auto h-[470px] w-[230px] rounded-[34px] border-[7px] border-[#0a0f1a]!",
};

export default function FeaturedProjectsSection() {
  return (
    <section
      id="projects"
      className="px-[clamp(16px,4vw,64px)] py-[clamp(72px,9vw,128px)] text-(--ink)"
    >
      <div className="reveal mx-auto flex max-w-7xl flex-col gap-[clamp(36px,4vw,56px)]">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <div className="flex max-w-160 flex-col gap-4">
            <span className="font-code text-[13px] uppercase tracking-widest text-(--accent)">
              Selected work
            </span>
            <h2 className="m-0 text-[clamp(38px,4.6vw,64px)] font-extrabold leading-[1.05] tracking-[-0.04em]">
              Things I&apos;ve built,{" "}
              <span className="text-(--muted)">from schema to screen.</span>
            </h2>
            <p className="m-0 text-[clamp(16px,1.4vw,18px)] leading-[1.6] text-(--muted)">
              A few projects across web and mobile — each one shipped end to
              end, from the database to the interface.
            </p>
          </div>

          <Link
            href="/projects"
            className="flex h-12 items-center gap-2.5 rounded-full border border-(--line) px-5.5 text-[15px] font-bold transition hover:border-(--accent) hover:text-(--accent)"
          >
            View all projects <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 min-[901px]:grid-cols-12">
          {featuredProjects.map((project, i) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card group tone-${project.tone} relative flex min-h-120 flex-col overflow-hidden rounded-3xl border border-(--t-line) bg-(--t-bg) transition duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent) min-[901px]:min-h-140 ${
                project.span === 7
                  ? "min-[901px]:col-span-7"
                  : "min-[901px]:col-span-5"
              }`}
            >
              <div className="flex flex-col gap-3.5 px-8 pt-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-code flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.08em]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-(--t-chip) px-2.5 py-1.25 text-(--t-text)"
                      >
                        {tag}
                      </span>
                    ))}
                  </span>
                  <span className="font-code text-[13px] text-(--muted)">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="m-0 flex items-center gap-2.5 text-[clamp(26px,2.4vw,34px)] font-extrabold tracking-[-0.03em]">
                  {project.name}
                  <span
                    aria-hidden="true"
                    className="text-[0.7em] text-(--t-text) transition-transform duration-300 group-hover:-translate-y-0.75 group-hover:translate-x-0.75"
                  >
                    ↗
                  </span>
                </h3>
                <p className="m-0 max-w-130 text-[15px] leading-[1.6] text-(--t-desc)">
                  {project.description}
                </p>
              </div>

              <div className="relative mt-7 min-h-65 flex-1">
                <div
                  className={`absolute overflow-hidden border-(--line) shadow-[0_-10px_40px_rgba(0,0,0,0.25)] transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:-translate-y-3.5 ${shotStyles[project.shot]}`}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    quality={90}
                    sizes={
                      project.shot === "phone"
                        ? "230px"
                        : "(max-width: 900px) 100vw, 720px"
                    }
                    className={`object-cover ${
                      project.shot === "full" || project.shot === "bleed"
                        ? "object-top-left"
                        : "object-top"
                    }`}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
