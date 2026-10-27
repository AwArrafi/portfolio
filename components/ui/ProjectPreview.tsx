import Image from "next/image";
import type { Project } from "../../data/projects";

type ProjectPreviewProps = {
  project: Project;
};

export default function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <div className="border-b border-slate-200 dark:border-white/10">
      {/* Browser Bar */}

      <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-4 py-2.5 dark:border-white/10 dark:bg-[#0b1326]">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>

        <span className="font-code truncate rounded-md bg-white px-2.5 py-0.5 text-[11px] text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
          {new URL(project.href).hostname}
        </span>
      </div>

      {project.previewType === "mobile" ? (
        <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-linear-to-br from-[#eef6ff] via-white to-[#f6f9ff] dark:from-[#07111f] dark:via-[#0f1b2f] dark:to-[#080b14]">
          {/* Background Glow */}

          <div className="absolute left-10 top-8 h-24 w-24 rounded-full bg-cyan-300/25 blur-2xl dark:bg-cyan-300/15" />

          <div className="absolute bottom-6 right-12 h-28 w-28 rounded-full bg-violet-300/20 blur-2xl dark:bg-violet-300/15" />

          {/* Mobile Badge */}

          <div className="absolute left-6 top-6 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200">
            Mobile App
          </div>

          {/* Phone Frame */}

          <div className="relative h-[88%] aspect-9/19.5 overflow-hidden rounded-3xl border-[5px] border-slate-950 bg-slate-950 shadow-[0_20px_50px_rgba(15,23,42,0.25)] transition duration-500 group-hover:-rotate-2 group-hover:scale-105 dark:border-[#020617] dark:bg-[#020617] dark:shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
            {/* Speaker */}

            <div className="absolute left-1/2 top-1 z-10 h-1.5 w-10 -translate-x-1/2 rounded-full bg-black/70" />

            {/* Screenshot */}

            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
        </div>
      ) : (
        <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover object-top transition duration-500 group-hover:scale-105"
          />
        </div>
      )}
    </div>
  );
}
