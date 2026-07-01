"use client";

import { motion } from "framer-motion";
import {
  ScanLine,
  TrendingUp,
  Tag,
  Zap,
  SplitSquareHorizontal,
  Home,
  FolderOpen,
  Warehouse,
  Truck,
  Download,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: ScanLine,
    title: "AI Item Scanner",
    description: "Point, shoot, and let Toodls identify what you own.",
  },
  {
    icon: TrendingUp,
    title: "Resale Value Estimates",
    description: "See real-world market value for anything you scan.",
  },
  {
    icon: Tag,
    title: "Suggested Pricing",
    description: "Get a price that attracts buyers and maximizes value.",
  },
  {
    icon: Zap,
    title: "Quick Sale Pricing",
    description: "A lower price built to move items fast when you need to.",
  },
  {
    icon: SplitSquareHorizontal,
    title: "Keep, Sell or Donate",
    description: "AI-backed recommendations for every single item.",
  },
  {
    icon: Home,
    title: "Home Inventory",
    description: "A living record of everything you own, room by room.",
  },
  {
    icon: FolderOpen,
    title: "Folders",
    description: "Group items by sale, room, or project so nothing's lost.",
  },
  {
    icon: Warehouse,
    title: "Storage Unit Tracking",
    description: "Know exactly what's boxed away and what it's worth.",
  },
  {
    icon: Truck,
    title: "Moving Sale Planner",
    description: "Plan and price an entire moving sale in one place.",
  },
  {
    icon: Download,
    title: "Bulk Export",
    description: "Export every listing as a CSV, ready to post anywhere.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            Everything You Need
          </h2>
          <p className="mt-4 text-lg text-black/60">
            One app to scan, value, organize, and sell — from a single lamp
            to an entire storage unit.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.06)}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-7 shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/0 blur-2xl transition-colors duration-500 group-hover:bg-accent/10" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-mist transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="relative mt-5 text-lg font-bold">{f.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-black/55">
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
