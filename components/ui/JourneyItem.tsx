import type { JourneyItem as JourneyItemType } from "../../data/professionalJourney";

type JourneyItemProps = {
  item: JourneyItemType;
};

const dotStyles: Record<JourneyItemType["variant"], string> = {
  cyan: "bg-cyan-400 ring-cyan-100",
  violet: "bg-violet-400 ring-violet-100",
  gray: "bg-slate-400 ring-slate-100",
};

const periodStyles: Record<JourneyItemType["variant"], string> = {
  cyan: "border-cyan-100 bg-cyan-50 text-cyan-700",
  violet: "border-violet-100 bg-violet-50 text-violet-700",
  gray: "border-slate-200 bg-slate-100 text-slate-600",
};

export default function JourneyItem({ item }: JourneyItemProps) {
  return (
    <li className="relative pl-10">
      <span
        className={`absolute left-0 top-1 z-10 h-6 w-6 rounded-full border-4 border-white ring-4 ${dotStyles[item.variant]}`}
        aria-hidden="true"
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-base font-bold text-slate-900">{item.title}</h3>

        <span
          className={`w-fit rounded-full border px-3 py-1 text-xs font-bold tracking-wide ${periodStyles[item.variant]}`}
        >
          {item.period}
        </span>
      </div>

      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
        {item.description}
      </p>
    </li>
  );
}
