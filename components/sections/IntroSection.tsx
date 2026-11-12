"use client";

import { useState } from "react";
import Image from "next/image";
import SkillKeyboard from "../ui/SkillKeyboard";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/awangarrafi/",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
      </>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/AwArrafi",
    icon: (
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    ),
  },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=awangarrafi@gmail.com",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
];

const button =
  "inline-flex h-[46px] items-center gap-2.5 rounded-[10px] px-[26px] transition hover:-translate-y-0.5 sm:h-[52px]";

export default function IntroSection() {
  const [isProfessional, setIsProfessional] = useState(true);

  return (
    <section
      id="home"
      className="relative px-[clamp(16px,4vw,64px)] py-[clamp(80px,9vw,140px)] text-(--ink)"
    >
      {/* TunnelIntro listens for this event */}
      <button
        type="button"
        onClick={() => window.dispatchEvent(new Event("replay-intro"))}
        className="font-code absolute right-[clamp(16px,4vw,64px)] top-6 flex h-10 items-center gap-2 rounded-full border border-(--line) px-4 text-[13px] text-(--muted) transition hover:border-(--accent) hover:text-(--accent)"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
          <path d="M3 3v5h5" />
        </svg>
        Replay intro
      </button>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-18 gap-y-14">
        <div className="intro-land flex min-w-0 max-w-150 flex-[1_1_500px] flex-col gap-8">
          <div className="flex flex-wrap items-center gap-6">
            {/* Click swaps professional ↔ anime photo */}
            <button
              type="button"
              onClick={() => setIsProfessional((prev) => !prev)}
              aria-label={
                isProfessional
                  ? "Switch to anime profile picture"
                  : "Switch to professional profile picture"
              }
              className="relative h-23 w-23 shrink-0 overflow-hidden rounded-full border-[6px] border-[#f6f9ff] shadow-[0_0_0_4px_#3695A6] transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent) sm:h-37.5 sm:w-37.5 dark:border-[#07111f]"
            >
              <Image
                src="/images/profile-manga.jpg"
                alt=""
                fill
                sizes="150px"
                className={`object-cover transition-all duration-700 ${
                  isProfessional ? "scale-105 opacity-0" : "opacity-100"
                }`}
              />
              <Image
                src="/images/profile-professional.png"
                alt="Awang Arrafi"
                fill
                preload
                sizes="150px"
                className={`object-cover transition-all duration-700 ${
                  isProfessional ? "opacity-100" : "scale-105 opacity-0"
                }`}
              />
            </button>

            <div className="flex flex-col gap-2.5">
              <span className="text-[30px] font-bold tracking-[-0.02em]">
                Awang Arrafi
              </span>
              <span className="text-lg text-(--muted)">
                Full-Stack Developer
              </span>
              <span className="-ml-2.5 flex gap-1">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center text-(--muted) transition hover:text-(--accent)"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </span>
            </div>
          </div>

          <h1
            id="intro-heading"
            tabIndex={-1}
            className="m-0 text-[clamp(40px,4.4vw,66px)] font-extrabold leading-[1.1] tracking-[-0.04em] outline-none"
          >
            Hi, I&apos;m <span className="text-(--accent)">Awang.</span> I build
            things for the web.
          </h1>

          <p className="m-0 max-w-160 text-[clamp(18px,1.6vw,22px)] leading-[1.6] text-(--muted)">
            I&apos;m a full-stack developer who enjoys turning ideas into clean,
            practical and user-friendly web applications.
          </p>

          <div className="flex flex-wrap gap-3.5 text-base font-bold">
            <a
              href="#projects"
              className={`${button} bg-(--accent) text-white dark:text-[#07111f]`}
            >
              View projects
            </a>
            <a
              href="/resume/CV-Arrafi.pdf"
              download="CV-Arrafi.pdf"
              className={`${button} border border-(--line) hover:border-(--accent)`}
            >
              Download resume
            </a>
            <a
              href="https://bit.ly/Awang-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className={`${button} border border-(--line) hover:border-(--accent)`}
            >
              Other portfolio <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <SkillKeyboard />
      </div>
    </section>
  );
}
