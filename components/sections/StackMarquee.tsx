const items = [
  "Laravel",
  "Next.js",
  "React",
  "Django",
  "TypeScript",
  "PostgreSQL",
  "Tailwind CSS",
  "REST API",
  "Available for work",
];

export default function StackMarquee() {
  const row = (
    <span className="pr-7">
      {items.map((item) => (
        <span key={item}>
          {item} <span className="text-(--accent)">{"//"}</span>{" "}
        </span>
      ))}
    </span>
  );

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-(--line) bg-(--panel) py-5"
    >
      <div className="stack-marquee font-code flex w-max whitespace-nowrap text-[15px] font-medium uppercase tracking-[0.14em] text-(--muted)">
        {row}
        {row}
      </div>
    </div>
  );
}
