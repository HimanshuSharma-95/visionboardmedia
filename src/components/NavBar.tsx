"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [rounded, setRounded] = useState(false); // controls border-radius separately
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggle = () => {
    if (!open) {
      // Opening: snap corners immediately, then slide down
      setRounded(true);
      setOpen(true);
    } else {
      // Closing: slide up first, then snap back to pill after animation finishes
      setOpen(false);
      setTimeout(() => setRounded(false), 500); // match duration-500
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex w-full justify-center pt-5">
      <nav
        className={`
          relative
          w-[92%]
          max-w-6xl
          border
          border-white/20
          px-6
          py-4
          backdrop-blur-xl
          transition-[background-color,box-shadow]
          duration-500
          ease-in-out
          ${rounded ? "rounded-3xl" : "md:rounded-5xl rounded-full"}
          ${
            // scrolled
            //   ? "bg-white/50 shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
            //   : "bg-white/30 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
            scrolled
              ? "bg-white/50 shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
              : "bg-white/50 shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
          }
        `}
      >
        {/* Top Row */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-black/90 transition-opacity duration-200 hover:opacity-70"
          >
            Vision Board Media
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-medium text-black/70 transition-colors duration-200 hover:text-black"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="tel:+919653111532"
            className="hidden md:block rounded-full bg-purple-600 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-black/80"
          >
            Call Now
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={handleToggle}
            className="relative flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200 hover:bg-black/5 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`absolute transition-all duration-300 ${
                open
                  ? "rotate-90 opacity-100 scale-100"
                  : "rotate-0 opacity-0 scale-75"
              }`}
            >
              <X size={22} />
            </span>
            <span
              className={`absolute transition-all duration-300 ${
                open
                  ? "-rotate-90 opacity-0 scale-75"
                  : "rotate-0 opacity-100 scale-100"
              }`}
            >
              <Menu size={22} />
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            grid
            md:hidden
            transition-[grid-template-rows,opacity,margin]
            duration-500
            ease-in-out
            ${open ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0 mt-0"}
          `}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-1 border-t border-black/10 pt-4 pb-1">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={handleToggle}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-black/70 transition-colors duration-150 hover:bg-black/5 hover:text-black"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="tel:+919653111532"
                onClick={handleToggle}
                className="mt-3 rounded-full bg-purple-600 py-3 text-center text-sm font-medium text-white transition-all duration-200 hover:bg-black/80"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
