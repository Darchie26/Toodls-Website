"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import ScreenshotImage from "./screens/ScreenshotImage";
import { fadeUp, slideInRight, staggerContainer } from "@/lib/motion";

const bullets = [
  "Organize by room",
  "Garage sales",
  "Moving sales",
  "Storage units",
  "Estate sales",
  "Home inventory",
];

export default function OrganizedSection() {
  return (
    <section className="relative overflow-hidden bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={staggerContainer(0.08)}
            className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left"
          >
            <motion.h2
              variants={fadeUp}
              className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl"
            >
              Keep Your Entire Home Organized
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-black/60"
            >
              Every scanned item lives in a folder, so nothing gets lost
              between the decision to sell and the sale itself.
            </motion.p>

            <motion.ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {bullets.map((b) => (
                <motion.li
                  key={b}
                  variants={fadeUp}
                  className="flex items-center justify-center gap-2.5 rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-black/[0.04] lg:justify-start"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Check className="h-3 w-3 text-accent" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-semibold">{b}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
            className="mx-auto"
          >
            <PhoneMockup className="shadow-2xl">
              <ScreenshotImage
                src="/screenshots/my-listings.jpg"
                alt="Toodls My Listings screen with folders for Living Room, Garage sale, and Unfiled items"
              />
            </PhoneMockup>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
