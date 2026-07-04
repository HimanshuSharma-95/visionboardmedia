"use client";

import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa6";
import {
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import Link from "next/link";

const socials = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/visionboard_media?igsh=bW16ZDU2NG5jejM1",
    label: "Instagram",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/919653111532",
    label: "WhatsApp",
  },
  // { icon: FaFacebookF, href: "#", label: "Facebook" },
];

const pages = [
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#07030f] text-white overflow-hidden">
      {/* Glowing top border */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.4) 20%, rgba(192,132,252,0.9) 50%, rgba(139,92,246,0.4) 80%, transparent 100%)",
        }}
      />
      <div
        className="absolute top-0 inset-x-0 h-24 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 100%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(168,85,247,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,.5) 1px,transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-62.5 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(109,40,217,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 pt-14 pb-8">
        {/* ── Main grid: 3 cols on desktop, stacked on mobile ── */}
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between sm:gap-8 pb-10 border-b border-white/6">
          {/* Brand */}
          <div className="shrink-0">
            <span className="text-xl font-black uppercase tracking-widest text-white">
              Vision Board Media
            </span>
            <p className="mt-3 text-sm text-white/60 max-w-55 leading-relaxed">
              Building ambitious brands into market leaders.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-4">
              Explore
            </p>
            {/* Vertical on all sizes */}
            <ul className="flex flex-col gap-3">
              {pages.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white transition-colors duration-150 hover:text-purple-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-4">
              Contact
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hello@visionboardmedia.com"
                  className="flex items-center gap-2 group"
                >
                  <MdOutlineEmail className="h-4 w-4 text-white transition-colors group-hover:text-purple-300 shrink-0" />
                  <span className="text-sm text-white transition-colors group-hover:text-purple-300">
                    info@visionboardmedia.in
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+11234567890"
                  className="flex items-center gap-2 group"
                >
                  <MdOutlinePhone className="h-4 w-4 text-white transition-colors group-hover:text-purple-300 shrink-0" />
                  <span className="text-sm text-white transition-colors group-hover:text-purple-300">
                    +91 96531 11532
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <a
                  href="tel:+11234567890"
                  className="flex items-center gap-2 group"
                >
                  <MdOutlineLocationOn className="mt-0.5 h-4 w-4 text-white shrink-0 group-hover:text-purple-300" />
                  <span className="text-sm text-white leading-snug group-hover:text-purple-300">
                    Jalandhar, Punjab
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-4">
              Follow Us
            </p>
            {/* Vertical on mobile, stays vertical everywhere */}
            <ul className="flex flex-col gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex items-center gap-3 group"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-all duration-200 group-hover:border-purple-400/60 group-hover:bg-purple-500/15">
                      <Icon className="h-3.5 w-3.5 text-white transition-colors duration-200 group-hover:text-purple-300" />
                    </span>
                    <span className="text-sm text-white transition-colors group-hover:text-purple-300">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-7">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Vision Board Media. All rights
            reserved.
          </p>
          <p className="text-xs text-white/30">
            Building Ambitious Brands Into Market Leaders.
          </p>
        </div>
      </div>
    </footer>
  );
}
