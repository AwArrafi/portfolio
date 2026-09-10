import { heroSkills } from "@/data/hero";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6f9ff] px-6 pb-20 pt-32 text-slate-900 transition-colors duration-300 dark:bg-[#07111f] dark:text-[#dae2fd] md:px-10 lg:px-16 lg:pt-40">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/25 blur-3xl dark:bg-cyan-400/10" />
      <div className="absolute right-10 top-40 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-400/10" />
      <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-violet-300/15 blur-3xl dark:bg-violet-400/10" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          {/* Availability Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 shadow-sm dark:border-cyan-300/20 dark:bg-cyan-300/10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-500 opacity-60 dark:bg-cyan-300" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-300" />
            </span>

            <span className="text-sm font-semibold tracking-wide text-cyan-700 dark:text-cyan-200">
              Available for new opportunities
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-950 dark:text-[#dae2fd] sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I’m{" "}
            <span className="text-cyan-600 dark:text-[#8aebff]">Awang</span> —
            Frontend-Focused Full-Stack Developer
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-[#bbc9cd] md:text-lg">
            I build clean, responsive, and user-centered web applications using
            modern frontend technologies, with a strong foundation in full-stack
            development.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-7 py-3 text-base font-bold text-white shadow-[0_16px_35px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-[#8aebff] dark:text-[#00363e] dark:shadow-[0_16px_35px_rgba(138,235,255,0.12)] dark:hover:bg-cyan-200"
            >
              View Projects
            </a>

            <a
              href="/resume/Awang-Arrafi-CV.pdf"
              download="Awang-Arrafi-CV.pdf"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-3 text-base font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700 dark:border-white/10 dark:bg-slate-800/50 dark:text-[#dae2fd] dark:hover:border-cyan-300/40 dark:hover:text-cyan-300"
            >
              Download Resume
            </a>
          </div>

          {/* Skills */}
          <ul
            className="mt-8 flex flex-wrap gap-3"
            aria-label="Core technologies"
          >
            {heroSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-cyan-200 hover:text-cyan-700 dark:border-white/10 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-cyan-300/30 dark:hover:text-cyan-200"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Code Preview */}
        <div className="relative">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-cyan-300/25 blur-3xl dark:bg-cyan-400/10" />
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-400/10" />

          <div className="relative rotate-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.12)] transition hover:rotate-0 dark:border-white/10 dark:bg-slate-800/50 dark:shadow-2xl lg:rotate-2">
            {/* Browser Header */}
            <div className="mb-5 flex items-center border-b border-slate-200 pb-4 dark:border-white/10">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-300" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-300" />
              </div>

              <div className="ml-5 rounded-md bg-slate-100 px-3 py-1 font-code text-xs text-slate-500 dark:bg-[#0b1326] dark:text-slate-400">
                portfolio-next.tsx
              </div>
            </div>

            {/* Code */}
            <div
              className="overflow-hidden rounded-xl border border-slate-200 bg-[#f8fbff] p-5 font-code text-sm leading-7 text-slate-600 dark:border-white/10 dark:bg-[#0b1326] dark:text-slate-400 md:p-6"
              aria-label="Decorative code preview"
            >
              <p>
                <span className="text-violet-600 dark:text-violet-300">
                  const
                </span>{" "}
                <span className="text-cyan-700 dark:text-cyan-300">Awang</span>{" "}
                <span className="text-slate-500 dark:text-slate-400">
                  = () =&gt; {"{"}
                </span>
              </p>

              <p className="pl-4">
                <span className="text-violet-600 dark:text-violet-300">
                  return
                </span>{" "}
                <span className="text-slate-500 dark:text-slate-400">(</span>
              </p>

              <p className="pl-8 text-emerald-600 dark:text-emerald-300">
                &lt;Layout&gt;
              </p>

              <p className="pl-12">
                <span className="text-emerald-600 dark:text-emerald-300">
                  &lt;Hero
                </span>
              </p>

              <p className="pl-16">
                <span className="text-cyan-700 dark:text-cyan-300">title</span>
                <span className="text-slate-500 dark:text-slate-400">=</span>
                <span className="text-violet-600 dark:text-violet-300">
                  &quot;Front-End&quot;
                </span>
              </p>

              <p className="pl-16">
                <span className="text-cyan-700 dark:text-cyan-300">skills</span>
                <span className="text-slate-500 dark:text-slate-400">=</span>
                <span className="text-violet-600 dark:text-violet-300">
                  {"{['React', 'Next.js']}"}
                </span>
              </p>

              <p className="pl-12 text-emerald-600 dark:text-emerald-300">
                /&gt;
              </p>

              <p className="pl-12">
                <span className="text-emerald-600 dark:text-emerald-300">
                  &lt;Projects
                </span>{" "}
                <span className="text-cyan-700 dark:text-cyan-300">focus</span>
                <span className="text-slate-500 dark:text-slate-400">=</span>
                <span className="text-violet-600 dark:text-violet-300">
                  &quot;UX&quot;
                </span>{" "}
                <span className="text-emerald-600 dark:text-emerald-300">
                  /&gt;
                </span>
              </p>

              <p className="pl-8 text-emerald-600 dark:text-emerald-300">
                &lt;/Layout&gt;
              </p>

              <p className="pl-4 text-slate-500 dark:text-slate-400">);</p>

              <p className="text-slate-500 dark:text-slate-400">{"};"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
