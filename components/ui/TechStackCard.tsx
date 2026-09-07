import type { SkillGroup } from "../../data/professionalJourney";

type TechStackCardProps = {
  group: SkillGroup;
};

const titleStyles: Record<SkillGroup["variant"], string> = {
  cyan: "text-cyan-700",
  violet: "text-violet-700",
  gray: "text-slate-800",
};

const iconStyles: Record<SkillGroup["variant"], string> = {
  cyan: "border-cyan-100 bg-cyan-50 text-cyan-700",
  violet: "border-violet-100 bg-violet-50 text-violet-700",
  gray: "border-slate-200 bg-slate-100 text-slate-700",
};

const cardStyles: Record<SkillGroup["variant"], string> = {
  cyan: "hover:border-cyan-300 hover:shadow-[0_20px_55px_rgba(8,145,178,0.14)]",
  violet:
    "border-l-4 border-l-violet-300 hover:border-violet-300 hover:shadow-[0_20px_55px_rgba(124,58,237,0.14)]",
  gray: "hover:border-slate-300 hover:shadow-[0_20px_55px_rgba(15,23,42,0.10)]",
};

export default function TechStackCard({ group }: TechStackCardProps) {
  return (
    <article
      aria-label={group.title}
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 ${cardStyles[group.variant]}`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-bold ${iconStyles[group.variant]}`}
        >
          {group.icon}
        </div>

        <h3 className={`text-base font-bold ${titleStyles[group.variant]}`}>
          {group.title}
        </h3>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
