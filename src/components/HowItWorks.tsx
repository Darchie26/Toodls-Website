"use client";

import { motion } from "framer-motion";
import { Scan, TrendingUp, Zap, HandCoins } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: Scan,
    title: "Scan it",
    description:
      "Point your camera at any item — in a shop, at a sale, or from your own closet. Toodls reads the brand and condition in seconds.",
  },
  {
    icon: TrendingUp,
    title: "See its worth",
    description:
      "Get the real market value, pulled from millions of live sales, so you instantly know what it’s actually worth.",
  },
  {
    icon: Zap,
    title: "Know the deal",
    description:
      "See whether it’s a hidden gem worth keeping, or list it to sell in one tap when it’s time to let it go.",
  },
  {
    icon: HandCoins,
    title: "Keep, sell, or donate",
    description:
      "Get an AI recommendation for every item — keep what matters, sell what’s valuable, and donate what you no longer need.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            Spot a great deal in a few taps.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-balance text-lg text-black/60">
            No expertise needed. Just point, scan, and instantly know what
            anything is worth.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.12)}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="rounded-3xl bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_12px_32px_-16px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.04]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" strokeWidth={2} />
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-black/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-black/60">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
