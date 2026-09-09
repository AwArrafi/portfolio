import { journeyItems, skillGroups } from "../../data/professionalJourney";
import JourneyItem from "../ui/JourneyItem";
import TechStackCard from "../ui/TechStackCard";

export default function ProfessionalJourneySection() {
  return (
    <section
      id="journey"
      aria-labelledby="professional-journey-heading"
      className="relative overflow-hidden border-t border-slate-200 bg-[#f6f9ff] px-6 py-16 text-slate-900 dark:border-white/10 dark:bg-[#0b1424] dark:text-[#dae2fd] md:px-10 lg:px-16"
    >
      {/* Background Glow */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-300/10" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-violet-300/15 blur-3xl dark:bg-violet-300/10" />

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.7fr_1fr]">
        {/* Professional Journey */}
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-800/50 dark:shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:p-8">
          <div>
            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-300">
              Career Path
            </span>

            <h2
              id="professional-journey-heading"
              className="mt-5 text-2xl font-semibold text-slate-900 dark:text-[#dae2fd]"
            >
              Professional Journey
            </h2>
          </div>

          <ol className="relative mt-8 space-y-8">
            <div
              className="absolute left-2.75 top-2 h-[calc(100%-1rem)] w-0.5 bg-slate-200 dark:bg-white/10"
              aria-hidden="true"
            />

            {journeyItems.map((item) => (
              <JourneyItem key={item.id} item={item} />
            ))}
          </ol>
        </article>

        {/* Tech Stack */}
        <div className="grid gap-6">
          {skillGroups.map((group) => (
            <TechStackCard key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
