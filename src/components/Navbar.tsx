"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#features", label: "Features" },
  { href: "/#why-toodls", label: "Why Toodls" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-4 z-50 px-4"
    >
      <nav className="mx-auto flex w-full items-center justify-between rounded-full border border-black/[0.06] bg-white/70 px-5 py-2 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur-xl md:w-3/4 md:px-6">
        <Link href="/" aria-label="Toodls home" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Toodls"
            width={1024}
            height={1024}
            priority
            className="h-14 w-auto md:h-16"
          />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-black/60 transition-colors hover:text-black"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="https://apps.apple.com/us/app/toodls-scan-discover-sell/id6783075990"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-95"
          >
            Get the app
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="mx-auto mt-2 overflow-hidden rounded-3xl border border-black/[0.06] bg-white/90 px-6 pb-6 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-black/70"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://apps.apple.com/us/app/toodls-scan-discover-sell/id6783075990"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-black px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get the app
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
