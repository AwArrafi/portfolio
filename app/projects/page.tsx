import type { Metadata } from "next";
import Link from "next/link";
import AllProjectsGallery from "@/components/sections/AllProjectsGallery";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { allProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "All projects — Awang Arrafi",
  description:
    "Everything Awang has built: production apps, side projects and learning work.",
  alternates: { canonical: "/projects" },
};

const pill =
  "flex h-11 items-center gap-2 whitespace-nowrap rounded-full border border-(--line) px-[18px] text-sm font-semibold text-(--muted) transition hover:border-(--accent) hover:text-(--accent)";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen text-(--ink)">
      <header className="px-[clamp(16px,4vw,64px)] pt-4">
        <nav
          aria-label="Archive"
          className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 rounded-full border border-(--line) bg-white/82 py-2 pl-[22px] pr-2 backdrop-blur-[14px] dark:bg-[rgba(11,19,38,0.72)]"
        >
          <Link href="/" className="text-lg font-extrabold tracking-[-0.02em]">
            Awang<span className="text-(--accent)">.</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/#projects" className={pill}>
              <span aria-hidden="true">←</span> Back{" "}
              <span className="max-[359px]:sr-only">to home</span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto flex max-w-[1180px] flex-col gap-10 px-[clamp(16px,4vw,64px)] pb-24 pt-[clamp(56px,7vw,96px)]">
        <div className="flex max-w-[720px] flex-col gap-4">
          <span className="font-code text-[13px] uppercase tracking-[0.1em] text-(--accent)">
            Archive
          </span>
          <h1 className="m-0 flex flex-wrap items-baseline gap-x-4 gap-y-1.5 text-[clamp(40px,5.4vw,72px)] font-extrabold leading-[1.02] tracking-[-0.04em]">
            All projects
            <span className="font-code text-[0.32em] font-medium tracking-normal text-(--muted)">
              ({allProjects.length})
            </span>
          </h1>
          <p className="m-0 text-[clamp(16px,1.4vw,18px)] leading-[1.6] text-(--muted)">
            Everything I&apos;ve built — production apps, side projects and the
            learning work that got me here.
          </p>
        </div>

        <AllProjectsGallery />

        <div className="flex flex-wrap items-center justify-between gap-4 rounded-[20px] border border-(--line) bg-(--panel) px-8 py-7">
          <div className="flex flex-col gap-1.5">
            <span className="text-xl font-bold tracking-[-0.02em]">
              Want the full picture?
            </span>
            <span className="text-[15px] text-(--muted)">
              Every commit lives on GitHub — or let&apos;s talk about what
              you&apos;re building.
            </span>
          </div>
          <div className="flex flex-wrap gap-2.5 text-[15px] font-bold">
            <a
              href="https://github.com/AwArrafi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[46px] items-center gap-2 rounded-full border border-(--line) px-5 transition hover:border-(--accent) hover:text-(--accent)"
            >
              GitHub profile <span aria-hidden="true">↗</span>
            </a>
            <Link
              href="/#contact"
              className="flex h-[46px] items-center rounded-full bg-(--accent) px-5 text-white dark:text-[#07111f]"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
