import Image from "next/image";
import { profileFeatures } from "@/data/profileFeatures";
import ProfileFeatureCard from "../ui/ProfileFeatureCard";

export default function ProfileShowcaseSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-slate-200 bg-[#eef6ff] px-6 py-16 text-slate-900 md:px-10 lg:px-16"
    >
      {/* =========================
          BACKGROUND GLOW
      ========================== */}

      <div className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-violet-300/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* =========================
            PROFILE VISUAL
        ========================== */}

        <div className="relative flex min-h-[620px] items-end justify-center">
          {/* Large background circle */}

          <div className="absolute bottom-6 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full border border-cyan-200/70 bg-white/30" />

          {/* Inner circle */}

          <div className="absolute bottom-16 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full border border-white/80" />

          {/* Cyan glow */}

          <div className="absolute bottom-10 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/25 blur-3xl" />

          {/* Violet glow */}

          <div className="absolute bottom-24 right-4 h-52 w-52 rounded-full bg-violet-300/20 blur-3xl" />

          {/* =========================
              DECORATIVE DOTS
          ========================== */}

          <div className="absolute left-6 top-16 grid grid-cols-4 gap-2 opacity-60">
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                key={index}
                className="h-2 w-2 rounded-full bg-cyan-400/60"
              />
            ))}
          </div>

          {/* =========================
              FLOATING CHAT CARD
          ========================== */}

          <div className="absolute left-0 top-24 z-20 rotate-[-5deg] rounded-2xl border border-white bg-white/90 px-5 py-4 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:rotate-0">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-lg">
                💬
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-400">
                  My approach
                </p>

                <p className="mt-1 text-sm font-bold leading-5 text-slate-900">
                  AI is my Bestfriend
                </p>
              </div>
            </div>
          </div>

          {/* =========================
              FLOATING STATUS
          ========================== */}

          <div className="absolute right-0 top-36 z-20 rotate-[4deg] rounded-full border border-emerald-100 bg-white/90 px-4 py-2 shadow-[0_15px_40px_rgba(15,23,42,0.10)] backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>

              <span className="text-xs font-bold text-slate-700">
                Available to collaborate
              </span>
            </div>
          </div>

          {/* =========================
              PROFILE IMAGE
          ========================== */}

          <Image
            src="/images/awang.png"
            alt="Portrait of Awang"
            width={1045}
            height={1567}
            priority
            className="relative z-10 h-[720px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(15,23,42,0.15)] transition duration-500 hover:-translate-y-2"
          />

          {/* =========================
              DECORATIVE STAR
          ========================== */}

          <div className="absolute bottom-20 right-12 z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-100 bg-white shadow-[0_15px_40px_rgba(15,23,42,0.10)]">
            <span className="text-xl text-cyan-500">✦</span>
          </div>
        </div>

        {/* =========================
            ABOUT CONTENT
        ========================== */}

        <article>
          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
            About Me
          </span>

          <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
            The Journey from Logic to Interface
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            My background is rooted in full-stack architecture with Laravel,
            where I learned to appreciate the robustness of back-end logic and
            database design. However, I discovered my true passion at the point
            where users meet the product.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
            I&apos;ve specialized my focus on the frontend, mastering React and
            Next.js to create seamless, high-performance user experiences. My
            full-stack foundation gives me a unique advantage: I don&apos;t just
            build UI; I build interfaces that understand the data they serve.
          </p>

          {/* Feature Cards */}

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {profileFeatures.map((feature) => (
              <ProfileFeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
