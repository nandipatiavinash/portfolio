import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/data/nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#121310] text-[#faf9f6] dark:bg-[#161615]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-mono text-xs tracking-widest text-[#faf9f6]/50">
              {siteConfig.name.toUpperCase()}
            </p>
            <h3 className="mt-5 max-w-md text-3xl leading-tight text-balance md:text-4xl text-[#faf9f6]">
              Let&rsquo;s build something your business grows into.
            </h3>
            <Link
              href="/contact"
              className="underline-hover mt-8 inline-block text-sm text-[#faf9f6]/70 hover:text-white"
            >
              Start a conversation →
            </Link>
          </div>

          <div>
            <p className="section-index text-[#faf9f6]/40">Navigate</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="underline-hover text-sm text-[#faf9f6]/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-index text-[#faf9f6]/40">Contact</p>
            <ul className="mt-5 space-y-4 text-sm text-[#faf9f6]/70">
              <li>
                <span className="font-mono text-[10px] tracking-widest text-[#faf9f6]/30 block mb-1">BOOK A CALL</span>
                <a className="underline-hover text-[#faf9f6] hover:text-white font-medium" href={siteConfig.bookCallWhatsapp} target="_blank" rel="noreferrer">
                  Schedule via WhatsApp →
                </a>
              </li>
              <li>
                <span className="font-mono text-[10px] tracking-widest text-[#faf9f6]/30 block mb-1">WHATSAPP CHAT</span>
                <a className="underline-hover hover:text-white" href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <span className="font-mono text-[10px] tracking-widest text-[#faf9f6]/30 block mb-1">PHONE</span>
                <a className="underline-hover hover:text-white" href={siteConfig.tel}>
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <span className="font-mono text-[10px] tracking-widest text-[#faf9f6]/30 block mb-1">EMAIL</span>
                <a className="underline-hover hover:text-white" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-[#faf9f6]/40 md:flex-row md:items-center md:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p className="font-mono">Hyderabad, India</p>
        </div>
      </div>
    </footer>
  );
}
