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
      className="relative overflow-hidden border-t border-slate-200 bg-[#eef6ff] px-6 py-16 text-slate-900 md:px-10 lg:px-16"
    >
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-violet-300/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.10)] md:p-10 lg:p-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
              {contactInfo.availability}
            </span>

            <h2 className="mt-6 max-w-xl text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
              {contactInfo.title}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              {contactInfo.description}
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex w-fit items-center gap-4 rounded-xl border border-cyan-200 bg-cyan-50 p-4 transition hover:border-cyan-300 hover:bg-cyan-100/60"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                  ✉
                </span>

                <span className="font-medium text-slate-800">
                  {contactInfo.email}
                </span>
              </a>

              <div className="flex flex-wrap gap-3 pt-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-cyan-300 hover:text-cyan-700"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor={nameId}
                  className="mb-2 block text-sm font-semibold tracking-wide text-slate-600"
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
                  className="w-full rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor={emailId}
                  className="mb-2 block text-sm font-semibold tracking-wide text-slate-600"
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
                  className="w-full rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor={messageId}
                className="mb-2 block text-sm font-semibold tracking-wide text-slate-600"
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
                className="w-full resize-none rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 font-bold text-white shadow-[0_16px_35px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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
