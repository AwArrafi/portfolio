"use client";

import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#07111f]/80">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-extrabold tracking-tight text-slate-900 transition hover:text-cyan-600 dark:text-[#dae2fd] dark:hover:text-cyan-300"
        >
          Awang<span className="text-cyan-500">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-cyan-600 dark:text-[#bbc9cd] dark:hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 md:inline-flex dark:bg-[#8aebff] dark:text-[#00363e] dark:hover:bg-cyan-200"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>
    </header>
  );
}
