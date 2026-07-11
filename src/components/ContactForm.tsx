"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

const SUPPORT_EMAIL = "contact@toodls.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const subject = `Support request from ${name}`;
    const body = `${message}\n\n—\n${name}\n${email}`;
    const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-black/[0.06] bg-mist p-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle2 className="h-6 w-6 text-accent" strokeWidth={2} />
        </div>
        <h3 className="mt-4 text-xl font-bold">Your email app should be open</h3>
        <p className="mt-2 text-sm text-black/55">
          We&apos;ve prefilled a message to{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-accent">
            {SUPPORT_EMAIL}
          </a>
          . Just hit send. Didn&apos;t open?{" "}
          <button
            type="button"
            onClick={() => setSent(false)}
            className="font-semibold text-accent underline underline-offset-2"
          >
            Try again
          </button>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-semibold">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-semibold">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@example.com"
          className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what's going on, or a feature you'd love to see..."
          className="mt-2 w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
        />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.01] active:scale-95"
      >
        <Send className="h-4 w-4" strokeWidth={2} />
        Send Message
      </button>
    </form>
  );
}
