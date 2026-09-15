"use client";

import { motion } from "framer-motion";
import { ScanLine, Sparkles, TrendingUp, FolderOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import ScreenshotImage from "./screens/ScreenshotImage";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/motion";

interface Showcase {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  screen: { src: string; alt: string; priority?: boolean };
}

const showcase: Showcase[] = [
  {
    icon: ScanLine,
    eyebrow: "Scan",
    title: "Point your camera, and Toodls does the rest",
    description:
      "Snap a couple of photos of anything you own. Toodls reads the brand, type, and condition automatically — no typing, no guesswork.",
    bullets: ["Works on furniture, décor, electronics, and more", "Add a close-up so nothing gets missed"],
    screen: {
      src: "/screenshots/scan-closeup.jpg",
      alt: "Toodls camera capturing a close-up of a leather chair",
      priority: true,
    },
  },
  {
    icon: Sparkles,
    eyebrow: "Analyze",
    title: "AI identifies and prices it in seconds",
    description:
      "The moment you scan, Toodls identifies the item, writes a ready-to-post listing, and starts pulling real market comps — all on its own.",
    bullets: ["Auto-generated title and description", "No expertise required"],
    screen: {
      src: "/screenshots/analyzing.jpg",
      alt: "Toodls analyzing photos to identify, price, and write a listing",
    },
  },
  {
    icon: TrendingUp,
    eyebrow: "Value",
    title: "See what it’s really worth",
    description:
      "Get a suggested price and a quick-sale price backed by real eBay listings — then decide to keep, sell, or donate in one tap.",
    bullets: ["Pricing based on live marketplace sales", "Keep · Sell · Donate, recommended for you"],
    screen: {
      src: "/screenshots/scan-result.jpg",
      alt: "Toodls scan result showing suggested price and similar eBay listings",
    },
  },
  {
    icon: FolderOpen,
    eyebrow: "Organize",
    title: "Keep everything organized and ready to sell",
    description:
      "Every item lives in a folder by room, sale, or project. Track total value at a glance and export every listing as a CSV, ready to post anywhere.",
    bullets: ["Folders for rooms, garage sales, and storage", "One-tap bulk export to CSV"],
    screen: {
      src: "/screenshots/my-listings.jpg",
      alt: "Toodls My Listings screen with folders and total value",
    },
  },
];

export default function FeatureShowcase() {
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
            One app to scan, value, organize, and sell — from a single lamp to
            an entire storage unit.
          </p>
        </motion.div>

        <div className="mt-20 flex flex-col gap-24 sm:gap-32">
          {showcase.map((item, i) => {
            const reversed = i % 2 === 1;
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={reversed ? slideInRight : slideInLeft}
                  className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left"
                >
                  <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 lg:mx-0">
                    <Icon className="h-6 w-6 text-accent" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">
                    {item.eyebrow}
                  </span>
                  <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-lg text-black/60">
                    {item.description}
                  </p>
                  <ul className="mx-auto mt-6 flex max-w-sm flex-col gap-3 text-left lg:mx-0">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                        <span className="text-black/70">{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={reversed ? slideInLeft : slideInRight}
                  className="mx-auto"
                >
                  <div className="animate-float">
                    <PhoneMockup className="shadow-2xl">
                      <ScreenshotImage
                        src={item.screen.src}
                        alt={item.screen.alt}
                        priority={item.screen.priority}
                      />
                    </PhoneMockup>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
