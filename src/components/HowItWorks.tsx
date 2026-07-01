"use client";

import { motion } from "framer-motion";
import { Camera, CircleDollarSign, PackageCheck, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import ScanScreen from "./screens/ScanScreen";
import ScanResultScreen from "./screens/ScanResultScreen";
import ExportScreen from "./screens/ExportScreen";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/motion";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
  screen: React.ReactNode;
}

const steps: Step[] = [
  {
    icon: Camera,
    title: "Scan Unused Items",
    description: "Point your camera at any item in your home.",
    screen: <ScanScreen />,
  },
  {
    icon: CircleDollarSign,
    title: "Know What It's Worth",
    description:
      "Instantly discover resale value, suggested pricing, and demand.",
    screen: <ScanResultScreen />,
  },
  {
    icon: PackageCheck,
    title: "Keep · Sell · Donate",
    description: "AI helps you decide the best next step.",
    screen: <ScanResultScreen />,
  },
  {
    icon: Rocket,
    title: "Sell Faster",
    description: "Generate listings and export them in seconds.",
    screen: <ExportScreen />,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            How Toodls Works
          </h2>
          <p className="mt-4 text-lg text-black/60">
            From forgotten closet to cash in four simple steps.
          </p>
        </motion.div>

        <div className="mt-24 flex flex-col gap-28 sm:gap-36">
          {steps.map((step, i) => {
            const reversed = i % 2 === 1;
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={reversed ? slideInRight : slideInLeft}
                  className="mx-auto max-w-md text-center lg:mx-0 lg:text-left"
                >
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 lg:mx-0">
                    <Icon className="h-6 w-6 text-accent" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-3 text-3xl font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-lg text-black/60">
                    {step.description}
                  </p>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={reversed ? slideInLeft : slideInRight}
                  className="mx-auto"
                >
                  <PhoneMockup className="shadow-2xl">{step.screen}</PhoneMockup>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
