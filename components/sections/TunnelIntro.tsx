"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { flushSync } from "react-dom";

type Phase = "idle" | "flying" | "landing" | "done";

// FlavourScape is a mobile app, so its card renders as a phone (portrait screenshot)
const images = [
  { src: "/images/projects/cards/applytrack-card.jpg", phone: false },
  { src: "/images/projects/cards/dass-card.jpg", phone: false },
  { src: "/images/projects/flavourscape-mobile.png", phone: true },
  { src: "/images/projects/cards/portal-berita-card.jpg", phone: false },
];

const enterKeys = ["Enter", "Escape", "Backspace", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "PageDown", "PageUp", "Home", "End"];

const f = (n: number) => n.toFixed(2);

// Geometry lives in CSS variables; a media query picks desktop or mobile, so SSR and client match
const cards = Array.from({ length: 16 }, (_, i) => {
  const a = (i * 137.508 * Math.PI) / 180;
  const s = Math.sin(a);
  const r = 34 + (i % 4) * 6;
  const x = Math.cos(a) * r * 1.5;
  const y = s * r;
  const rM = 28 + (i % 4) * 5;
  const xM = Math.cos(a) * rM * 0.72;
  const yM = Math.sign(s || 1) * Math.max(Math.abs(s), 0.5) * rM * 1.9;

  return {
    img: images[i % 4],
    delay: i * 0.04,
    style: {
      "--tf": `translate3d(${f(x)}em,${f(y)}em,${-20 - i * 18}em)`,
      "--fly": `translate3d(${f(x * 1.5)}em,${f(y * 1.5)}em,52em)`,
      "--tf-m": `translate3d(${f(xM)}em,${f(yM)}em,${-16 - i * 16}em)`,
      "--fly-m": `translate3d(${f(xM * 1.5)}em,${f(yM * 1.5)}em,52em)`,
      opacity: Math.max(0.15, 1 - i / 17),
    } as CSSProperties,
  };
});

export default function TunnelIntro() {
  const [phase, setPhase] = useState<Phase>("idle");
  const phaseRef = useRef<Phase>("idle");

  useEffect(() => {
    const html = document.documentElement;
    // Seen this session: CSS already hides the overlay, so only the ref needs updating
    if (html.hasAttribute("data-intro-seen")) phaseRef.current = "done";

    let timer: number | undefined;
    let topSince = 0; // when the page last reached scrollY 0
    let touchY = 0;
    let wheelSum = 0; // accumulated so a stray trackpad/mouse twitch doesn't count as a scroll
    let wheelIdle: number | undefined;
    let touching = false;
    // After a replay, wheel/touch stay ignored until the gesture that caused it has really ended
    // (momentum can run for seconds), so it can't fly straight back to the hero
    let gestureArmed = true;

    // A wheel stream "ends" after 250ms without events; re-arm then, unless a finger is still down
    const scheduleWheelIdle = () => {
      window.clearTimeout(wheelIdle);
      wheelIdle = window.setTimeout(() => {
        wheelSum = 0;
        if (!touching) gestureArmed = true;
      }, 250);
    };

    const go = (next: Phase) => {
      phaseRef.current = next;
      setPhase(next);
    };

    // Hero lands under the still-flying cards; the overlay goes once the stage has faded (0.6s + 0.5s)
    const finish = () => {
      window.scrollTo(0, 0);
      try {
        sessionStorage.setItem("introSeen", "1");
      } catch {}
      html.classList.add("intro-landed");
      go("landing");
      document.getElementById("intro-heading")?.focus({ preventScroll: true });
      timer = window.setTimeout(() => {
        topSince = performance.now();
        go("done");
      }, 1200);
    };

    const enter = (skip = false) => {
      if (phaseRef.current !== "idle") return;
      if (skip) {
        finish();
        window.clearTimeout(timer);
        topSince = performance.now();
        return go("done");
      }
      // Always fly, even with reduced motion on: the fly-through is the point of the intro
      go("flying");
      timer = window.setTimeout(finish, 1300);
    };

    // Reverse of the fly-through: mount at the fly-out state, then ease back to idle
    const replay = () => {
      if (phaseRef.current !== "done") return;
      window.clearTimeout(timer);
      gestureArmed = false;
      scheduleWheelIdle(); // a button replay (no wheel stream) re-arms after 250ms
      window.scrollTo(0, 0);
      flushSync(() => go("flying"));
      html.removeAttribute("data-intro-seen");
      html.classList.remove("intro-landed");
      try {
        sessionStorage.removeItem("introSeen");
      } catch {}
      // Commit the fly-out styles before switching, so the browser transitions back to idle
      void document.querySelector(".tunnel-intro")?.getBoundingClientRect();
      go("idle");
    };

    // Upward gesture at the very top; the 500ms guard ignores scroll momentum arriving at the top
    const atTopLongEnough = () =>
      window.scrollY <= 0 && performance.now() - topSince > 500;

    const onScroll = () => {
      if (window.scrollY > 0) topSince = Infinity;
      else if (topSince === Infinity) topSince = performance.now();
    };

    const onWheel = (event: WheelEvent) => {
      scheduleWheelIdle();
      // deltaMode 1 = lines (some mice); normalise to pixels
      wheelSum += event.deltaY * (event.deltaMode === 1 ? 16 : 1);

      if (phaseRef.current === "landing") return;
      if (phaseRef.current === "done") {
        if (wheelSum < -40 && atTopLongEnough()) replay();
        return;
      }
      event.preventDefault();
      if (gestureArmed && Math.abs(wheelSum) >= 20) enter();
    };

    const onTouchStart = (event: TouchEvent) => {
      touching = true;
      touchY = event.touches[0].clientY;
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (event.touches.length) return;
      touching = false;
      scheduleWheelIdle();
    };

    const onTouchMove = (event: TouchEvent) => {
      if (phaseRef.current === "landing") return;
      if (phaseRef.current === "done") {
        if (event.touches[0].clientY - touchY > 60 && atTopLongEnough()) {
          event.preventDefault(); // pull-down at the top replays instead of pull-to-refresh
          replay();
        }
        return;
      }
      event.preventDefault();
      if (gestureArmed) enter();
    };

    const onKey = (event: KeyboardEvent) => {
      // Real keys only: skips Tab, modifiers, media/volume keys, F-keys, CapsLock…
      const counts =
        event.key.length === 1 || enterKeys.includes(event.key);
      if (!counts || event.altKey || event.ctrlKey || event.metaKey) return;
      // Enter/Space on "Skip intro" is handled by its click
      if ((event.target as HTMLElement).closest?.("[data-skip-intro]")) return;
      enter();
    };

    const onClick = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest?.(".tunnel-intro")) return;
      enter(!!(event.target as HTMLElement).closest("[data-skip-intro]"));
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchEnd, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    window.addEventListener("replay-intro", replay);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(wheelIdle);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
      window.removeEventListener("replay-intro", replay);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="tunnel-intro"
      data-phase={phase}
      role="dialog"
      aria-modal="true"
      aria-label="Intro. Scroll, click or press any key to enter."
      style={{ cursor: phase === "idle" ? "pointer" : "default" }}
    >
      {/* Tunnel of project cards */}
      <div className="tunnel-stage" aria-hidden="true">
        <div className="tunnel">
          {cards.map((card, i) => (
            <div
              key={i}
              className={card.img.phone ? "tunnel-card tunnel-phone" : "tunnel-card"}
              style={{
                ...card.style,
                transition:
                  phase === "flying" || phase === "landing"
                    ? `transform 1.15s cubic-bezier(.55,0,.85,.35) ${f(card.delay)}s, opacity .35s ease ${f(card.delay + 0.8)}s`
                    : "transform .9s ease-out, opacity .6s ease",
              }}
            >
              {card.img.phone && <span className="tunnel-phone-notch" />}
              <Image
                src={card.img.src}
                alt=""
                width={card.img.phone ? 404 : 720}
                height={card.img.phone ? 820 : 450}
                sizes={card.img.phone ? "130px" : "(max-width: 640px) 180px, 252px"}
                priority={i < 4}
                className="h-full w-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Name */}
      <div className="tunnel-name pointer-events-none absolute inset-0 z-[2] flex flex-col items-center justify-center gap-[26px] px-4 text-center">
        <p
          role="heading"
          aria-level={1}
          aria-label="Awang Arrafi"
          className="font-code m-0 flex flex-col items-center whitespace-nowrap text-[clamp(60px,10.5vw,160px)] font-bold leading-[0.82] tracking-[-0.06em] text-(--accent) max-[640px]:text-[68px]"
        >
          <span
            className="tunnel-blur-in"
            aria-hidden="true"
            style={{ animationDelay: "100ms" }}
          >
            AWANG
          </span>
          <span
            className="tunnel-blur-in text-(--ink)"
            aria-hidden="true"
            style={{ animationDelay: "250ms" }}
          >
            ARRAFI
          </span>
        </p>

        <p
          className="tunnel-blur-in m-0 max-w-[460px] text-[clamp(16px,1.5vw,20px)] leading-normal text-(--muted)"
          style={{ animationDelay: "450ms" }}
        >
          Full-stack developer building clean, practical web apps.
        </p>
      </div>

      {/* Hint */}
      <div
        className="tunnel-hint font-code pointer-events-none absolute bottom-9 left-0 right-0 z-[2] flex flex-col items-center gap-2 text-xs uppercase tracking-[0.12em] text-(--muted)"
        aria-hidden="true"
      >
        <span className="max-[640px]:hidden">Scroll · click · or press any key</span>
        <span className="min-[641px]:hidden">Swipe or tap to enter</span>
        <svg
          className="tunnel-bob"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>

      <button
        type="button"
        data-skip-intro
        className="tunnel-hint font-code absolute right-[clamp(16px,4vw,64px)] top-6 z-[3] flex h-10 items-center rounded-full border border-(--line) px-4 text-[13px] text-(--muted) transition hover:border-(--accent) hover:text-(--accent) focus-visible:outline-2 focus-visible:outline-(--accent)"
      >
        Skip intro
      </button>
    </div>
  );
}
