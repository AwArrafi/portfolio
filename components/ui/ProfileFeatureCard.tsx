type ProfileFeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function ProfileFeatureCard({
  title,
  description,
  icon,
}: ProfileFeatureCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_16px_45px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_20px_55px_rgba(8,145,178,0.14)]">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-100 bg-cyan-50 text-sm font-bold text-cyan-700">
        {icon}
      </div>

      <h3 className="text-base font-bold text-slate-900">{title}</h3>

      <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
        {description}
      </p>
    </div>
  );
}
