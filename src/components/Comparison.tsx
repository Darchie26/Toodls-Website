"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/motion";

const traditional = [
  "Already know what to sell",
  "Manual pricing",
  "Manual organization",
  "Listing first",
];

const toodls = [
  "Scan anything",
  "Discover hidden value",
  "Organize your home",
  "Decide what to keep",
  "Sell faster",
];

export default function Comparison() {
  return (
    <section id="why-toodls" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            More Than a Selling App
          </h2>
          <p className="mt-4 text-lg text-black/60">
            Marketplace apps assume you&apos;ve already done the hard part.
            Toodls does it for you.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInLeft}
            className="rounded-3xl border border-black/[0.06] bg-mist p-8 sm:p-10"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-black/40">
              Traditional Marketplace Apps
            </h3>
            <ul className="mt-6 space-y-4">
              {traditional.map((t) => (
                <li key={t} className="flex items-center gap-3 text-black/60">
                  <XCircle className="h-5 w-5 shrink-0 text-black/30" strokeWidth={1.75} />
                  <span className="font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInRight}
            className="relative overflow-hidden rounded-3xl bg-black p-8 text-white shadow-2xl sm:p-10"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/30 blur-[90px]" />
            <h3 className="relative text-sm font-bold uppercase tracking-widest text-accent-light">
              Toodls
            </h3>
            <ul className="relative mt-6 space-y-4">
              {toodls.map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-light" strokeWidth={2} />
                  <span className="font-semibold">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
