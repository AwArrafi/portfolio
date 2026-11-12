"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { skillKeys } from "@/data/skillsKeyboard";

type Props = { variant?: "brand" | "mono" };

// Dark-top keys read badly as text, so their name uses the accent instead
const darkTops = ["#1C2333", "#0C4B33"];

export default function SkillKeyboard({ variant = "brand" }: Props) {
  const [active, setActive] = useState(6);
  const [userPicked, setUserPicked] = useState(false);
  const hovered = useRef(false);
  const mono = variant === "mono";

  // Auto-demo until the visitor picks a key themselves; it never takes over again after that
  useEffect(() => {
    if (userPicked) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      if (hovered.current) return;
      setActive((current) => {
        const next = Math.floor(Math.random() * (skillKeys.length - 1));
        return next >= current ? next + 1 : next;
      });
    }, 2600);

    return () => window.clearInterval(id);
  }, [userPicked]);

  const press = (i: number) => {
    setUserPicked(true);
    setActive(i);
  };

  const key = skillKeys[active];
  const nameStyle = (
    mono || darkTops.includes(key.top)
      ? { "--kb-light": "var(--accent)", "--kb-dark": "var(--accent)" }
      : { "--kb-light": key.side, "--kb-dark": key.top }
  ) as CSSProperties;

  return (
    <div
      onPointerEnter={() => (hovered.current = true)}
      onPointerLeave={() => (hovered.current = false)}
      onFocus={() => (hovered.current = true)}
      onBlur={() => (hovered.current = false)}
      className="flex min-w-0 max-w-[600px] flex-[1_1_440px] flex-col gap-1"
    >
      {/* Announce only picks the visitor made, not the 2.6s auto-rotation */}
      <div
        aria-live={userPicked ? "polite" : "off"}
        className="relative z-[2] flex min-h-[132px] flex-col gap-2"
      >
        <span className="font-code text-xs uppercase tracking-[0.1em] text-(--muted)">
          Stack · {String(active + 1).padStart(2, "0")} / {skillKeys.length}
        </span>
        <span
          style={nameStyle}
          className="font-code text-[clamp(32px,3.6vw,48px)] font-bold leading-none tracking-[-0.04em] text-(--kb-light) dark:text-(--kb-dark)"
        >
          {key.name}
        </span>
        <span className="text-base leading-normal text-(--muted)">
          {key.desc}
        </span>
        {key.used && (
          <span className="font-code text-xs text-(--accent)">
            Used in → {key.used}
          </span>
        )}
      </div>

      <div className="-mt-10 flex h-[clamp(300px,34vw,440px)] items-center justify-center text-[clamp(8px,0.95vw,13.5px)] [perspective:2200px]">
        <div
          role="group"
          aria-label="Tech stack keyboard"
          className="relative h-[24.9em] w-[30.6em] rounded-[1.2em] bg-[#DDE4F2] shadow-[inset_0_0_0_1px_rgba(138,235,255,0.14),0_2em_4em_rgba(0,0,0,0.45)] [transform-style:preserve-3d] [transform:rotateX(52deg)_rotateZ(-38deg)] dark:bg-[#0F1A2E]"
        >
          {skillKeys.map((skill, i) => {
            const on = i === active;
            const faces = (
              mono
                ? {}
                : {
                    "--top": skill.top,
                    "--side": skill.side,
                    "--side2": skill.side2,
                    "--logo": skill.logo,
                  }
            ) as CSSProperties;
            const top = mono ? "bg-[#E4EAF7] dark:bg-[#14223D]" : "bg-(--top)";
            const side = mono ? "bg-[#C5CFE4] dark:bg-[#0C1830]" : "bg-(--side)";
            const side2 = mono
              ? "bg-[#AEB9D2] dark:bg-[#08111F]"
              : "bg-(--side2)";
            const logo = mono
              ? on
                ? "fill-(--accent)"
                : "fill-(--muted)"
              : "fill-(--logo)";

            return (
              <button
                key={skill.name}
                type="button"
                onClick={() => press(i)}
                aria-label={skill.name}
                aria-pressed={on}
                style={{
                  ...faces,
                  left: `${1.4 + (i % 5) * 5.7}em`,
                  top: `${1.4 + Math.floor(i / 5) * 5.7}em`,
                  transform: on ? "translateZ(-0.9em)" : "translateZ(0)",
                }}
                className="absolute m-0 h-[5em] w-[5em] cursor-pointer border-0 bg-transparent p-0 transition-transform duration-150 [transform-style:preserve-3d] focus-visible:outline-2 focus-visible:outline-(--accent)"
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-[0.2em] top-[-1.5em] h-[1.5em] w-[4.6em] origin-bottom [transform:rotateX(-90deg)] ${side2}`}
                />
                <span
                  aria-hidden="true"
                  className={`absolute left-[-1.5em] top-[0.2em] h-[4.6em] w-[1.5em] origin-right [transform:rotateY(90deg)] ${side2}`}
                />
                <span
                  aria-hidden="true"
                  className={`absolute left-[0.2em] top-full h-[1.5em] w-[4.6em] origin-top [transform:rotateX(90deg)] ${side}`}
                />
                <span
                  aria-hidden="true"
                  className={`absolute left-full top-[0.2em] h-[4.6em] w-[1.5em] origin-left [transform:rotateY(-90deg)] ${side2}`}
                />
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 flex items-center justify-center rounded-[0.7em] [transform:translateZ(1.5em)] ${top}`}
                  style={{
                    boxShadow: `inset 0 0.25em 0.4em rgba(255,255,255,0.18), inset 0 -0.3em 0.4em rgba(0,0,0,0.18), ${
                      on
                        ? "0 0 0 0.15em var(--accent), 0 0 1.4em var(--accent)"
                        : "0 0 0 0 transparent"
                    }`,
                  }}
                >
                  <svg viewBox="0 0 24 24" className={`h-[52%] w-[52%] ${logo}`}>
                    <path d={skill.path} />
                  </svg>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <span
        aria-hidden="true"
        className="font-code self-center text-xs uppercase tracking-[0.08em] text-(--muted)"
      >
        Press a key
      </span>
    </div>
  );
}
