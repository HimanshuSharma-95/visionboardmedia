import { MessageCircle } from "lucide-react";

/*
  Floating "Contact Us" button — fixed to the bottom-right on every page.

  Perf notes (kept consistent with the rest of the site):
  - No backdrop-blur, no large filter:blur glows — just a plain solid
    background + box-shadow, so it costs nothing extra on scroll.
  - The pulse ring animates only `transform` (scale) and `opacity`,
    both GPU-cheap, no layout/paint thrashing.
  - Pure server component (no "use client", no hooks) — it's just a link,
    so it doesn't add any client-side JS bundle weight.
*/

const WHATSAPP_NUMBER = "919653111532"; // +91 96531 11532
const DEFAULT_MESSAGE = "Hi Vision Board Media! I'd like to get in touch.";

export default function FloatingContactButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE,
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="group fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center gap-2 rounded-full bg-purple-600 pl-4 pr-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(147,51,234,0.4)] transition-transform duration-300 hover:scale-105 hover:bg-purple-700 active:scale-95"
    >
      {/* Pulse ring — transform/opacity only, cheap to animate. Keyframes live in globals.css */}
      <span className="absolute inset-0 rounded-full bg-purple-600 animate-ping-slow opacity-40" />

      <MessageCircle className="relative h-5 w-5 shrink-0" />
      <span className="relative whitespace-nowrap">Contact Us</span>
    </a>
  );
}
