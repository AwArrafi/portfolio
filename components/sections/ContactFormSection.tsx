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

  const [isSending, setIsSending] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    setStatus({
      type: "",
      message: "",
    });

    // Required validation
    if (!name || !email || !message) {
      setStatus({
        type: "error",
        message: "Please fill in all fields.",
      });

      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });

      return;
    }

    // Name length validation
    if (name.length > 100) {
      setStatus({
        type: "error",
        message: "Name must be 100 characters or less.",
      });

      return;
    }

    // Email length validation
    if (email.length > 254) {
      setStatus({
        type: "error",
        message: "Email must be 254 characters or less.",
      });

      return;
    }

    // Message length validation
    if (message.length > 2000) {
      setStatus({
        type: "error",
        message: "Message must be 2000 characters or less.",
      });

      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("API ERROR:", result);

        setStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        });

        return;
      }

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("FETCH ERROR:", error);

      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
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
              {/* Email */}
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

              {/* Social Links */}
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
            {/* Name & Email */}
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Name */}
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
                  required
                  maxLength={100}
                  disabled={isSending}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-[#0b1326] dark:text-[#dae2fd] dark:placeholder:text-slate-500 dark:focus:border-cyan-300/50 dark:focus:bg-[#0b1326]"
                />
              </div>

              {/* Email */}
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
                  required
                  maxLength={254}
                  disabled={isSending}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-[#0b1326] dark:text-[#dae2fd] dark:placeholder:text-slate-500 dark:focus:border-cyan-300/50 dark:focus:bg-[#0b1326]"
                />
              </div>
            </div>

            {/* Message */}
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
                required
                maxLength={2000}
                disabled={isSending}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    message: event.target.value,
                  }))
                }
                rows={6}
                className="w-full resize-none rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-[#0b1326] dark:text-[#dae2fd] dark:placeholder:text-slate-500 dark:focus:border-cyan-300/50 dark:focus:bg-[#0b1326]"
              />
            </div>

            {/* Status Message */}
            {status.message && (
              <div
                role="status"
                aria-live="polite"
                className={`rounded-xl border px-4 py-3 text-sm font-semibold ${
                  status.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-300/20 dark:bg-emerald-300/10 dark:text-emerald-300"
                    : "border-red-200 bg-red-50 text-red-700 dark:border-red-300/20 dark:bg-red-300/10 dark:text-red-300"
                }`}
              >
                {status.type === "success" ? "✓" : "✕"} {status.message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 font-bold text-white shadow-[0_16px_35px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-70 dark:bg-[#8aebff] dark:text-[#00363e] dark:shadow-[0_16px_35px_rgba(0,0,0,0.25)] dark:hover:bg-cyan-200 dark:focus-visible:ring-offset-[#0b1326] dark:disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send Message"}

              {!isSending && <span aria-hidden="true">→</span>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
