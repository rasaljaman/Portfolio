export default function Footer() {
  return (
    <footer className="relative py-8 px-6 text-center border-t-2 border-paper-line bg-paper-dark">
      {/* Torn paper edge effect at top */}
      <div className="absolute top-0 left-0 right-0 h-3 overflow-hidden">
        <svg viewBox="0 0 1200 12" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 12 L15 0 L30 12 L45 2 L60 12 L75 0 L90 12 L105 3 L120 12 L135 0 L150 12 L165 1 L180 12 L195 0 L210 12 L225 2 L240 12 L255 0 L270 12 L285 3 L300 12 L315 0 L330 12 L345 1 L360 12 L375 0 L390 12 L405 2 L420 12 L435 0 L450 12 L465 3 L480 12 L495 0 L510 12 L525 1 L540 12 L555 0 L570 12 L585 2 L600 12 L615 0 L630 12 L645 3 L660 12 L675 0 L690 12 L705 1 L720 12 L735 0 L750 12 L765 2 L780 12 L795 0 L810 12 L825 3 L840 12 L855 0 L870 12 L885 1 L900 12 L915 0 L930 12 L945 2 L960 12 L975 0 L990 12 L1005 3 L1020 12 L1035 0 L1050 12 L1065 1 L1080 12 L1095 0 L1110 12 L1125 2 L1140 12 L1155 0 L1170 12 L1185 3 L1200 12"
            fill="#F5EDDA"
            stroke="none"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto pt-2">
        <p className="font-hand text-xl text-ink mb-2">
          <span className="font-semibold">Rasal Jaman</span> — built with ☕ & vibe coding
        </p>
        <p className="font-hand text-base text-ink-pencil">
          © {new Date().getFullYear()} — All pages of this notebook are handcrafted ✨
        </p>

        {/* Decorative doodle - small pencil */}
        <div className="flex justify-center mt-4 opacity-40">
          <svg width="100" height="20" viewBox="0 0 100 20">
            <line x1="0" y1="10" x2="70" y2="10" stroke="#8B8B8B" strokeWidth="1.5" strokeDasharray="4 3" />
            <path d="M70 5 L95 10 L70 15 Z" fill="#8B8B8B" opacity="0.5" />
          </svg>
        </div>
      </div>
    </footer>
  );
}
