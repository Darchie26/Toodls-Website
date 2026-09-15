import Link from "next/link";
import Image from "next/image";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Features", href: "/#features" },
      { label: "Why Toodls", href: "/#why-toodls" },
      {
        label: "Download",
        href: "https://apps.apple.com/us/app/toodls-scan-discover-sell/id6783075990",
        external: true,
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" aria-label="Toodls home" className="inline-flex">
              <Image
                src="/logo.png"
                alt="Toodls"
                width={1024}
                height={1024}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-[240px] text-sm text-black/50">
              Scan anything you own, see what it&apos;s worth, and decide:
              keep, sell, or donate.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-black/50 transition-colors hover:text-black"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-black/40">
            &copy; {new Date().getFullYear()} Toodls. All rights reserved.
          </p>
          <p className="text-xs text-black/40">
            Made for anyone with a little too much stuff — and no rush to decide.
          </p>
        </div>
      </div>
    </footer>
  );
}
