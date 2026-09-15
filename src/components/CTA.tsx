"use client";

import { motion } from "framer-motion";
import { Apple } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function CTA() {
  return (
    <section id="download" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer(0.12)}
          className="relative overflow-hidden rounded-[2.5rem] bg-black px-8 py-20 text-center shadow-2xl sm:px-16"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="animate-blob absolute -left-20 top-0 h-72 w-72 rounded-full bg-accent/30 blur-[110px]" />
            <div className="animate-blob absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent-light/20 blur-[110px] [animation-delay:3s]" />
          </div>

          <motion.h2
            variants={fadeUp}
            className="relative text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            You Could Be Sitting On Thousands Of Dollars
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="relative mx-auto mt-5 max-w-lg text-lg text-white/60"
          >
            Start scanning your home today.
          </motion.p>

          <motion.div variants={fadeUp} className="relative mt-10">
            <a
              href="https://apps.apple.com/us/app/toodls-scan-discover-sell/id6783075990"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white px-9 py-4 text-base font-semibold text-black shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] transition-transform hover:scale-[1.04] active:scale-95"
            >
              <Apple className="h-6 w-6" fill="currentColor" />
              Download on the App Store
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
