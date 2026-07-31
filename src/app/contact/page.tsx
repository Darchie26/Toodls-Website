import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Lightbulb, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Support",
  description:
    "Get in touch with the Toodls team. Send us a message and we'll get back to you.",
};

const SUPPORT_EMAIL = "contact@toodls.app";

export default function ContactPage() {
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

          <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Contact Support
          </h1>
          <p className="mt-4 max-w-xl text-lg text-black/60">
            Have a question, found a bug, or just want to say hi? Send us a
            message and we&apos;ll get back to you as soon as we can.
          </p>

          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent"
          >
            <Mail className="h-4 w-4" strokeWidth={2} />
            {SUPPORT_EMAIL}
          </a>

          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-accent/[0.06] p-5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10">
              <Lightbulb className="h-4 w-4 text-accent" strokeWidth={2} />
            </div>
            <p className="text-sm text-black/65">
              <span className="font-semibold text-black">
                Got an idea?
              </span>{" "}
              We&apos;d love to hear about any features or updates
              you&apos;d like to see in Toodls — just send it our way below.
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-black/[0.06] bg-white p-8 shadow-sm sm:p-10">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
