import { journeyItems, skillGroups } from "../../data/professionalJourney";
import JourneyItem from "../ui/JourneyItem";
import TechStackCard from "../ui/TechStackCard";
import SectionHeader from "../ui/SectionHeader";

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

      <div className="reveal relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.7fr_1fr]">
        {/* Professional Journey */}
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-slate-800/50 dark:shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:p-8">
          <SectionHeader
            id="professional-journey-heading"
            label="Career Path"
            title="Professional Journey"
          />

          <ol className="relative mt-8 space-y-8">
            <div
              className="absolute left-2.75 top-2 h-[calc(100%-1rem)] w-0.5 bg-slate-200 dark:bg-white/10"
              aria-hidden="true"
            />

            {journeyItems.map((item, index) => (
              <JourneyItem key={item.id} item={item} isCurrent={index === 0} />
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
