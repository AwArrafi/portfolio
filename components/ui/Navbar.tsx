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

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 flex justify-center px-[clamp(16px,3vw,40px)] pt-4">
      <nav
        aria-label="Main"
        className="flex w-full max-w-[1180px] items-center justify-between gap-3 min-[761px]:gap-6 rounded-full border border-(--line) bg-white/82 py-1.5 pl-[18px] pr-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-[14px] min-[761px]:py-2 min-[761px]:pl-6 min-[761px]:pr-2 dark:bg-[rgba(11,19,38,0.72)]"
      >
        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-extrabold tracking-tight text-(--ink)"
        >
          Awang<span className="text-(--accent)">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-0.5 min-[761px]:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "page" : undefined}
              className={`rounded-full px-4 py-[11px] text-[15px] font-semibold transition ${
                active === item.href
                  ? "bg-[rgba(138,235,255,0.12)] text-(--accent)"
                  : "text-(--muted) hover:text-(--accent)"
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
            className="flex h-10 items-center whitespace-nowrap max-[339px]:hidden rounded-full bg-(--accent) px-3.5 text-sm font-bold text-white transition hover:opacity-90 min-[761px]:h-11 min-[761px]:px-[22px] min-[761px]:text-[15px] dark:text-[#07111f]"
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
            className="flex h-11 w-11 items-center justify-center rounded-full border border-(--line) text-(--ink) min-[761px]:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-[18px] w-[18px]"
              aria-hidden="true"
            >
              {isOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
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
          className="absolute left-[clamp(16px,3vw,40px)] right-[clamp(16px,3vw,40px)] top-[76px] flex flex-col rounded-[20px] border border-(--line) bg-(--panel) p-2.5 text-[17px] font-semibold shadow-[0_20px_50px_rgba(0,0,0,0.4)] min-[761px]:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              aria-current={active === item.href ? "page" : undefined}
              className={`flex min-h-11 items-center rounded-xl px-3.5 py-[13px] ${
                active === item.href
                  ? "bg-[rgba(138,235,255,0.12)] text-(--accent)"
                  : "text-(--ink)"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
