"use client";

import { useTheme } from "../ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-600 dark:border-white/10 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-cyan-300/40 dark:hover:text-cyan-300"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
