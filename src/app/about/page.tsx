import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ScanLine, Home, Tag, Heart, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Toodls",
  description:
    "Toodls is a home inventory and decluttering app. Scan any item, see what it's worth, and decide to keep, sell, or donate — without the pressure.",
};

const APP_STORE_URL =
  "https://apps.apple.com/us/app/toodls-scan-discover-sell/id6783075990";

const branches = [
  {
    icon: Tag,
    title: "Sell",
    description:
      "Toodls generates a ready-to-post listing with real eBay pricing, then posts or exports it — so the valuable stuff turns into cash without the busywork.",
  },
  {
    icon: Heart,
    title: "Donate",
    description:
      "It logs the organization, the date, and the fair market value, so when tax season comes your year-end records are already done.",
  },
  {
    icon: Home,
    title: "Keep",
    description:
      "It files the item into a room with a location and quietly schedules a check-in — 3 months, 6 months, or a year — then asks later whether you still use it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-black/50 transition-colors hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            Back to home
          </Link>

          <h1 className="mt-8 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
            About Toodls
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-black/70">
            Toodls is a home inventory and decluttering app that helps you
            understand everything you own — and feel good about what you do with
            it.
          </p>

          {/* What it is */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight">
              What it is
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-black/65">
              Most of us have a home full of things we&apos;ve stopped
              thinking about — closets, garages, and storage units packed with
              stuff we&apos;re not sure is worth anything. Toodls turns that
              uncertainty into a clear picture. Point your camera at any item
              and, in seconds, our AI identifies what it is and estimates what
              it&apos;s worth on today&apos;s market. From there, you decide:{" "}
              <span className="font-semibold text-black">
                Keep, Sell, or Donate.
              </span>
            </p>
          </div>

          {/* How the scan works */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight">
              How it works
            </h2>
            <div className="mt-6 flex items-start gap-4 rounded-3xl border border-black/[0.06] bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10">
                <ScanLine className="h-5 w-5 text-accent" strokeWidth={2} />
              </div>
              <p className="text-lg leading-relaxed text-black/65">
                It starts with a single scan. From the moment you open the app,
                the camera is one tap away — snap a photo and Toodls does the
                rest: identifying the item, pricing it against real marketplace
                sales, and writing the listing for you. No forms, no research,
                no expertise required.
              </p>
            </div>
          </div>

          {/* The three branches */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight">
              Every choice does something for you
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-black/65">
              Toodls doesn&apos;t just help you decide — each path actually
              produces something useful.
            </p>
            <div className="mt-8 space-y-4">
              {branches.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="flex items-start gap-4 rounded-3xl border border-black/[0.06] bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{b.title}</h3>
                      <p className="mt-1.5 leading-relaxed text-black/65">
                        {b.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* How it helps / tone */}
          <div className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight">
              How it helps
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-black/65">
              Decluttering is rarely just about the stuff — it&apos;s
              emotional, and it&apos;s easy to feel overwhelmed or guilty.
              Toodls is built to take that pressure off. It gives you the
              facts, keeps a living record of what you own room by room, and
              lets you move at your own pace.
            </p>
            <div className="mt-6 flex items-start gap-4 rounded-3xl bg-accent/[0.06] p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10">
                <Clock className="h-5 w-5 text-accent" strokeWidth={2} />
              </div>
              <p className="text-lg leading-relaxed text-black/70">
                <span className="font-semibold text-black">
                  You don&apos;t have to decide today.
                </span>{" "}
                Keep something now, and Toodls will check back in a few months
                to ask if it still earns its place. Progress without the
                pressure.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-3xl border border-black/[0.06] bg-white p-8 text-center shadow-sm sm:p-10">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Start with a single scan
            </h2>
            <p className="mx-auto mt-3 max-w-md text-black/60">
              See what your things are worth and decide what&apos;s next — no
              account needed to start.
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-95"
            >
              Get the app
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
