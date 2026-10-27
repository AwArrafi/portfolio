"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);

  // Scroll-spy: highlight the section crossing the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-slate-200/80 bg-white/70 pl-6 pr-3 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1424]/70 dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-extrabold tracking-tight text-slate-900 transition hover:text-cyan-600 dark:text-[#dae2fd] dark:hover:text-cyan-300"
        >
          Awang<span className="text-cyan-500">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active === item.href
                  ? "bg-cyan-50 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-300"
                  : "text-slate-600 hover:text-cyan-600 dark:text-[#bbc9cd] dark:hover:text-cyan-300"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 md:inline-flex dark:bg-[#8aebff] dark:text-[#00363e] dark:hover:bg-cyan-200"
          >
            Let&apos;s Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-cyan-300 md:hidden dark:border-white/10 dark:bg-slate-800 dark:text-slate-200"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              {isOpen ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 max-w-6xl rounded-3xl border border-slate-200/80 bg-white/95 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-[#0b1424]/95"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              aria-current={active === item.href ? "page" : undefined}
              className={`block rounded-2xl px-4 py-3 text-base font-semibold transition ${
                active === item.href
                  ? "bg-cyan-50 text-cyan-700 dark:bg-cyan-300/10 dark:text-cyan-300"
                  : "text-slate-700 hover:bg-slate-50 dark:text-[#dae2fd] dark:hover:bg-white/5"
              }`}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 block rounded-2xl bg-slate-950 px-4 py-3 text-center text-base font-bold text-white dark:bg-[#8aebff] dark:text-[#00363e]"
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </header>
  );
}
