import { socialLinks } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#f6f9ff] px-6 py-8 dark:border-white/10 dark:bg-[#07111f] md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 dark:text-[#bbc9cd] sm:flex-row">
        <p>
          © {new Date().getFullYear()} Awang Arrafi. Built with Next.js.
        </p>

        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition hover:text-cyan-600 dark:hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#home"
            className="font-semibold text-slate-900 transition hover:text-cyan-600 dark:text-[#dae2fd] dark:hover:text-cyan-300"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
