"use client";

import { useState } from "react";
import { heroSkills } from "@/data/hero";
import Image from "next/image";

export default function HeroSection() {
  const [isProfessional, setIsProfessional] = useState(true);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f6f9ff] px-6 pb-20 pt-32 text-slate-900 transition-colors duration-300 dark:bg-[#07111f] dark:text-[#dae2fd] md:px-10 lg:px-16 lg:pt-40"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/25 blur-3xl dark:bg-cyan-400/10" />

      <div className="absolute right-10 top-40 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-400/10" />

      <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-violet-300/15 blur-3xl dark:bg-violet-400/10" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          {/* Profile */}
          <div className="mb-8 flex items-center gap-5">
            {/* Profile Image */}
            {/* Profile Image */}
            <button
              type="button"
              onClick={() => setIsProfessional((prev) => !prev)}
              className="group relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-slate-900 bg-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-slate-900/20 dark:border-slate-700 dark:bg-white dark:hover:border-slate-600"
              aria-label={
                isProfessional
                  ? "Switch to anime profile picture"
                  : "Switch to professional profile picture"
              }
            >
              {/* Anime Profile */}
              <Image
                src="/Images/profile-manga.jpg"
                alt="Anime profile picture"
                fill
                className={`object-cover transition-all duration-700 ease-in-out ${
                  isProfessional
                    ? "scale-105 opacity-0"
                    : "scale-100 opacity-100"
                }`}
                sizes="160px"
              />

              {/* Professional Profile */}
              <Image
                src="/Images/profile-professional.png"
                alt="Professional profile picture"
                fill
                priority
                className={`object-cover transition-all duration-700 ease-in-out ${
                  isProfessional
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0"
                }`}
                sizes="160px"
              />

              {/* Hover Overlay */}
              <span
                className="pointer-events-none absolute inset-0 rounded-full bg-white/0 transition-colors duration-300 group-hover:bg-white/10"
                aria-hidden="true"
              />
            </button>

            {/* Profile Info */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-[#dae2fd]">
                Awang Arrafi
              </h2>

              <p className="mt-1 text-sm font-medium text-slate-500 dark:text-[#bbc9cd]">
                Full-Stack Developer
              </p>

              {/* Social Links */}
              <div className="mt-3 flex items-center gap-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/awangarrafi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-500 transition hover:-translate-y-0.5 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M20.5 3h-17A1.5 1.5 0 0 0 2 4.5v15A1.5 1.5 0 0 0 3.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 20.5 3ZM8 18H5V9.5h3V18ZM6.5 8.3A1.8 1.8 0 1 1 6.5 4.7a1.8 1.8 0 0 1 0 3.6ZM19 18h-3v-4.1c0-1-.02-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2V18h-3V9.5h2.9v1.2h.04c.4-.8 1.4-1.5 2.8-1.5 3 0 3.6 2 3.6 4.5V18Z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/AwArrafi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-slate-500 transition hover:-translate-y-0.5 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.9 3.1 1.4.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.3 10.3 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.3-5.1 5.6.4.3.7 1 .7 2v2.9c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=awangarrafi@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  className="text-slate-500 transition hover:-translate-y-0.5 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-950 dark:text-[#dae2fd] sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I’m{" "}
            <span className="text-cyan-600 dark:text-[#8aebff]">Awang.</span> I
            build things for the web.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-[#bbc9cd] md:text-lg">
            I’m a full-stack developer who enjoys turning ideas into clean,
            practical, and user-friendly web applications.
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
              href="/resume/CV-Arrafi.pdf"
              download="CV-Arrafi.pdf"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-3 text-base font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700 dark:border-white/10 dark:bg-slate-800/50 dark:text-[#dae2fd] dark:hover:border-cyan-300/40 dark:hover:text-cyan-300"
            >
              Download Resume
            </a>

            <a
              href="https://bit.ly/Awang-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 font-bold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-600 dark:border-white/10 dark:bg-slate-800/50 dark:text-[#dae2fd] dark:hover:border-cyan-300/30 dark:hover:text-cyan-300"
            >
              View Other Portfolio
              <span aria-hidden="true">↗</span>
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
                  &quot;Full-Stack&quot;
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
                  &quot;Web Apps&quot;
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
