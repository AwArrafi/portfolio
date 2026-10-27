type SectionHeaderProps = {
  label: string;
  title: string;
  subtitle?: string;
  id?: string;
};

export default function SectionHeader({
  label,
  title,
  subtitle,
  id,
}: SectionHeaderProps) {
  return (
    <div>
      <span className="font-code inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-300">
        {label}
      </span>

      <h2
        id={id}
        className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-[#dae2fd] md:text-4xl"
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-base leading-7 text-slate-600 dark:text-[#bbc9cd]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
