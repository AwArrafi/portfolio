"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  allProjects,
  type ArchiveProject,
  type ProjectType,
} from "@/data/projects";

const filters: ("All" | ProjectType)[] = ["All", "Web", "Mobile", "Learning"];

const typeTone: Record<ProjectType, string> = {
  Web: "tone-cyan",
  Mobile: "tone-amber",
  Learning: "tone-violet",
};

const linkPill =
  "flex h-9 items-center gap-1.5 rounded-full border border-(--line) px-3 text-[13px] font-semibold transition hover:border-(--accent) hover:text-(--accent)";

const badge =
  "font-code absolute top-3.5 rounded-full bg-white/85 px-2.5 py-1 text-[11px] dark:bg-[rgba(7,17,31,0.78)]";

export default function AllProjectsGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");

  // Visitors who reach the archive skip the home intro when they go "Back to home"
  useEffect(() => {
    try {
      sessionStorage.setItem("introSeen", "1");
    } catch {}
    document.documentElement.setAttribute("data-intro-seen", "");
  }, []);

  const q = query.toLowerCase().trim();
  const matchesQuery = (p: ArchiveProject) =>
    !q ||
    `${p.name} ${p.stack} ${p.description}`.toLowerCase().includes(q);
  const countFor = (f: (typeof filters)[number]) =>
    allProjects.filter((p) => (f === "All" || p.type === f) && matchesQuery(p))
      .length;
  const shown = allProjects.filter(
    (p) => (filter === "All" || p.type === filter) && matchesQuery(p),
  );

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3.5">
        <div
          role="group"
          aria-label="Filter by type"
          className="flex flex-wrap gap-2"
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition ${
                filter === f
                  ? "border-(--accent) bg-(--accent) text-white dark:text-[#07111f]"
                  : "border-(--line) hover:border-(--accent)"
              }`}
            >
              {f}
              <span className="font-code text-xs opacity-70">{countFor(f)}</span>
            </button>
          ))}
        </div>

        <label className="relative block min-w-[220px] flex-[0_1_300px]">
          <span className="sr-only">Search projects</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
            className="absolute left-3.5 top-3 text-(--muted)"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search name or stack…"
            className="h-10 w-full rounded-full border border-(--line) bg-(--panel) pl-[38px] pr-3.5 text-sm text-(--ink) placeholder:text-(--muted) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-5 min-[421px]:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
        {shown.map((p) => (
          <article
            key={p.slug}
            className="project-card group flex flex-col overflow-hidden rounded-[20px] border border-(--line) bg-(--panel) transition duration-300 hover:-translate-y-1 hover:border-(--accent)"
          >
            <div
              className={`tone-${p.tone} relative aspect-[16/10] overflow-hidden bg-(--t-bg)`}
            >
              {p.image ? (
                <Image
                  src={p.image}
                  alt={`${p.name} preview`}
                  fill
                  sizes="(max-width: 420px) 100vw, 380px"
                  className="object-cover object-top transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.06]"
                />
              ) : (
                <>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(var(--t-line)_1px,transparent_1.5px)] bg-size-[18px_18px] text-(--ink) transition-transform duration-500 group-hover:scale-[1.06]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="76"
                      height="76"
                      fill={p.logo?.color}
                    >
                      <path d={p.logo?.path} />
                    </svg>
                  </div>
                  <span className="font-code absolute bottom-3.5 left-4 text-xs text-(--t-desc)">
                    ~/{p.slug}
                  </span>
                </>
              )}
              <span
                className={`${badge} ${typeTone[p.type]} left-3.5 border border-(--t-line) uppercase tracking-[0.06em] text-(--t-text)`}
              >
                {p.type}
              </span>
              <span className={`${badge} right-3.5 text-(--muted)`}>{p.year}</span>
            </div>

            <div className="flex flex-1 flex-col gap-2.5 px-[22px] pb-[22px] pt-5">
              <h2 className="m-0 text-xl font-bold tracking-[-0.01em] transition-colors group-hover:text-(--accent)">
                {p.name}
              </h2>
              <p className="m-0 line-clamp-2 text-sm leading-[1.55] text-(--muted)">
                {p.description}
              </p>
              <span className="font-code text-xs leading-[1.6] text-(--muted)">
                {p.stack}
              </span>
              <div className="mt-auto flex gap-2 pt-2">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${p.name} live site`}
                    className={linkPill}
                  >
                    Live <span aria-hidden="true">↗</span>
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${p.name} source code`}
                    className={`${linkPill} text-(--muted)`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
                    </svg>
                    Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {shown.length === 0 && (
        <p className="m-0 py-8 text-center text-[15px] text-(--muted)">
          No projects match &ldquo;{query}&rdquo;.
        </p>
      )}
    </>
  );
}
