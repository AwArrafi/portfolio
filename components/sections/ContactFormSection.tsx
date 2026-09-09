"use client";

import { FormEvent, useId, useState } from "react";
import { contactInfo, socialLinks } from "../../data/contact";

export default function ContactFormSection() {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name || "Website Visitor"}`,
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-slate-200 bg-[#eef6ff] px-6 py-16 text-slate-900 dark:border-white/10 dark:bg-[#0b1424] dark:text-[#dae2fd] md:px-10 lg:px-16"
    >
      {/* Background Glow */}
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-300/10" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-violet-300/15 blur-3xl dark:bg-violet-300/10" />

      <div className="relative mx-auto max-w-7xl rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-slate-800/50 dark:shadow-[0_24px_70px_rgba(0,0,0,0.30)] md:p-10 lg:p-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Information */}
          <div>
            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-300">
              {contactInfo.availability}
            </span>

            <h2 className="mt-6 max-w-xl text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-[#dae2fd] md:text-4xl">
              {contactInfo.title}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-[#bbc9cd] md:text-lg">
              {contactInfo.description}
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex w-fit items-center gap-4 rounded-xl border border-cyan-200 bg-cyan-50 p-4 transition hover:border-cyan-300 hover:bg-cyan-100/60 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:hover:border-cyan-300/40 dark:hover:bg-cyan-300/15"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl shadow-sm dark:bg-slate-800 dark:text-cyan-300">
                  ✉
                </span>

                <span className="font-medium text-slate-800 dark:text-[#dae2fd]">
                  {contactInfo.email}
                </span>
              </a>

              <div className="flex flex-wrap gap-3 pt-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-700 dark:border-white/10 dark:bg-slate-800/70 dark:text-slate-300 dark:shadow-none dark:hover:border-cyan-300/30 dark:hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor={nameId}
                  className="mb-2 block text-sm font-semibold tracking-wide text-slate-600 dark:text-[#bbc9cd]"
                >
                  Name
                </label>

                <input
                  id={nameId}
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white dark:border-white/10 dark:bg-[#0b1326] dark:text-[#dae2fd] dark:placeholder:text-slate-500 dark:focus:border-cyan-300/50 dark:focus:bg-[#0b1326]"
                />
              </div>

              <div>
                <label
                  htmlFor={emailId}
                  className="mb-2 block text-sm font-semibold tracking-wide text-slate-600 dark:text-[#bbc9cd]"
                >
                  Email
                </label>

                <input
                  id={emailId}
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white dark:border-white/10 dark:bg-[#0b1326] dark:text-[#dae2fd] dark:placeholder:text-slate-500 dark:focus:border-cyan-300/50 dark:focus:bg-[#0b1326]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor={messageId}
                className="mb-2 block text-sm font-semibold tracking-wide text-slate-600 dark:text-[#bbc9cd]"
              >
                Message
              </label>

              <textarea
                id={messageId}
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    message: event.target.value,
                  }))
                }
                rows={6}
                className="w-full resize-none rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white dark:border-white/10 dark:bg-[#0b1326] dark:text-[#dae2fd] dark:placeholder:text-slate-500 dark:focus:border-cyan-300/50 dark:focus:bg-[#0b1326]"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 font-bold text-white shadow-[0_16px_35px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-[#8aebff] dark:text-[#00363e] dark:shadow-[0_16px_35px_rgba(0,0,0,0.25)] dark:hover:bg-cyan-200 dark:focus-visible:ring-offset-[#0b1326]"
            >
              Send Message
              <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
