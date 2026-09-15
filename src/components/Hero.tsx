"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Apple, PlayCircle } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [0, -4]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pb-24 pt-16 sm:pt-24 lg:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="animate-blob absolute -left-24 top-40 h-72 w-72 rounded-full bg-accent-light/20 blur-[100px]" />
        <div className="animate-blob absolute -right-24 top-10 h-80 w-80 rounded-full bg-accent/10 blur-[100px] [animation-delay:4s]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-2xl lg:text-left"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-xs font-semibold text-black/60 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Scan and know what to do with it
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl"
          >
            <span className="block">Know What You Own.</span>
            <span className="block bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              Know What To Do With It.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-lg text-balance text-lg text-black/60 lg:mx-0"
          >
            Scan anything you own to discover its value and decide what to do
            next. Keep what matters, sell what’s valuable, and donate what you no
            longer need.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center"
          >
            <a
              href="https://apps.apple.com/us/app/toodls-scan-discover-sell/id6783075990"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)] transition-transform hover:scale-[1.03] active:scale-95"
            >
              <Apple className="h-5 w-5" fill="currentColor" />
              Download on the App Store
            </a>
            <button className="flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-black/70 transition-colors hover:text-black">
              <PlayCircle className="h-5 w-5" strokeWidth={1.75} />
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex items-center justify-center gap-6 text-xs text-black/40 lg:justify-start"
          >
            <span>Free to download</span>
            <span className="h-1 w-1 rounded-full bg-black/20" />
            <span>Works instantly</span>
            <span className="h-1 w-1 rounded-full bg-black/20" />
            <span>No account needed to scan</span>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: phoneY, rotate: phoneRotate }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mx-auto lg:-mt-24"
        >
          <div className="animate-float">
            <Image
              src="/screenshots/hero-chair.png"
              alt="Toodls scanning a leather armchair and showing its details"
              width={1242}
              height={2688}
              priority
              className="mx-auto w-[260px] drop-shadow-2xl sm:w-[300px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
