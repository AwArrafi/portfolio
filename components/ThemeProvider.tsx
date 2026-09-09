"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getServerSnapshot = (): Theme => {
  return "light";
};

const getClientSnapshot = (): Theme => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return "light";
};

const subscribe = (callback: () => void) => {
  window.addEventListener("theme-change", callback);

  return () => {
    window.removeEventListener("theme-change", callback);
  };
};

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";

    localStorage.setItem("theme", nextTheme);

    document.documentElement.classList.toggle("dark", nextTheme === "dark");

    window.dispatchEvent(new Event("theme-change"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
