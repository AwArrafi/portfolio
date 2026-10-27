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

// The theme-init script in app/layout.tsx sets the class before hydration
const getClientSnapshot = (): Theme => {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

const subscribe = (callback: () => void) => {
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  // Follow the device theme until the visitor picks one with the toggle
  const handleDeviceChange = (event: MediaQueryListEvent) => {
    if (localStorage.getItem("theme")) return;

    document.documentElement.classList.toggle("dark", event.matches);
    callback();
  };

  window.addEventListener("theme-change", callback);
  media.addEventListener("change", handleDeviceChange);

  return () => {
    window.removeEventListener("theme-change", callback);
    media.removeEventListener("change", handleDeviceChange);
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

    // Set the next theme immediately.
    localStorage.setItem("theme", nextTheme);

    document.documentElement.classList.toggle("dark", nextTheme === "dark");

    // Trigger the background reveal animation.
    document.documentElement.classList.remove("theme-reveal");

    // Force a reflow so the animation can restart every click.
    void document.documentElement.offsetWidth;

    document.documentElement.classList.add("theme-reveal");

    window.dispatchEvent(new Event("theme-change"));

    // Remove animation class after animation finishes.
    window.setTimeout(() => {
      document.documentElement.classList.remove("theme-reveal");
    }, 700);
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
