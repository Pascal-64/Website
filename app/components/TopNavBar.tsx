"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/#experience", label: "Über mich", activeOn: "/" },
  { href: "/wiki", label: "Wiki", activeOn: "/wiki" },
  { href: "/projects", label: "Projekte", activeOn: "/projects" },
];

export function TopNavBar() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-surface/70 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl md:top-8 md:left-1/2 md:right-auto md:w-[calc(100%-40px)] md:max-w-screen-xl md:-translate-x-1/2">
      <div className="flex w-full items-center justify-between gap-3 px-4 py-3 md:gap-8 md:px-8 md:py-5">
        <Link
          href="/"
          className="min-w-0 truncate font-headline text-sm font-bold tracking-tighter text-on-surface sm:text-base md:text-xl"
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
          className="shrink-0 font-label tracking-tight font-medium uppercase text-[10px] sm:text-xs text-secondary bg-surface-container-lowest/40 backdrop-blur-xl hover:bg-surface-container-high transition-all duration-200 px-3 py-2 md:px-4 rounded-sm border border-primary/20 active:scale-95"
        >
          <span className="md:hidden">CONTACT</span>
          <span className="hidden md:inline">CONTACT_SYS_ADMIN</span>
        </Link>
      </div>
    </nav>
  );
}
