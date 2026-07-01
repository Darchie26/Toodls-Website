import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LegalLayoutProps {
  title: string;
  effectiveDate: string;
  children: ReactNode;
}

export default function LegalLayout({
  title,
  effectiveDate,
  children,
}: LegalLayoutProps) {
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
            {title}
          </h1>
          <p className="mt-3 text-sm text-black/40">
            Effective {effectiveDate}
          </p>

          <div className="legal-prose mt-12">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
