"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/#experience", label: "Über mich", activeOn: "/" },
  { href: "/wiki", label: "Wiki", activeOn: "/wiki" },
  { href: "/#projects", label: "Projekte" },
];

export function TopNavBar() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-screen-xl z-50 bg-surface/60 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-5 px-8">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-on-surface font-headline"
        >
          PASCALPETERS.DEV
        </Link>
        <div className="hidden md:flex gap-10 px-8 py-3">
          {NAV_LINKS.map((link) => {
            const active = link.activeOn === pathname;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "font-label tracking-tight font-medium uppercase text-xs text-secondary border-b-2 border-secondary pb-1"
                    : "font-label tracking-tight font-medium uppercase text-xs text-on-surface-variant hover:text-on-surface transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <Link
          href="/#contact"
          className="font-label tracking-tight font-medium uppercase text-xs text-secondary bg-surface-container-lowest/40 backdrop-blur-xl hover:bg-surface-container-high transition-all duration-200 px-4 py-2 rounded-sm border border-primary/20 active:scale-95"
        >
          CONTACT_SYS_ADMIN
        </Link>
      </div>
    </nav>
  );
}
