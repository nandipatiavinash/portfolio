"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/nav";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/primitives";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        scrolled
          ? "bg-paper/80 backdrop-blur-md border-b border-ink/10 py-3"
          : "bg-transparent py-6"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {siteConfig.studioName.toUpperCase()}
          <span className="text-bronze">.</span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="underline-hover text-sm text-ink/80 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex md:items-center md:gap-5">
          <ThemeToggle />
          <a
            href={siteConfig.bookCallWhatsapp}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "md" })}
          >
            Book a Call
          </a>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="text-sm font-mono text-ink"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-paper px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg text-ink"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.bookCallWhatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className={buttonVariants({ className: "w-full" })}
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
