"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const testimonials = [
  {
    quote:
      "I found a lamp in my garage that sold for $85 in a day. I had no idea it was worth anything.",
    name: "Amanda R.",
    role: "Toodls user",
    initials: "AR",
  },
  {
    quote:
      "We used it for our entire moving sale. Scanned every box and knew exactly what to price things at.",
    name: "James K.",
    role: "Toodls user",
    initials: "JK",
  },
  {
    quote:
      "Finally an app that tells me what to keep instead of just where to sell it. Total game changer.",
    name: "Priya S.",
    role: "Toodls user",
    initials: "PS",
  },
];

export default function SocialProof() {
  return (
    <section className="relative bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            Loved by Declutterers Everywhere
          </h2>
          <p className="mt-4 text-lg text-black/60">
            Thousands of hidden dollars discovered, one scan at a time.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.08)}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/[0.04]"
            >
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-black/70">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-black/45">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
