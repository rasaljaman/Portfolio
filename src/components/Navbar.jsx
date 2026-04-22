import { useState, useEffect } from 'react';
import { PencilDoodle } from './SVGDoodles';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Security', href: '#cyber' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track active section
    const sections = NAV_ITEMS.map(item => item.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-paper/95 backdrop-blur-sm shadow-paper border-b-2 border-paper-line py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group" aria-label="Home">
            <span className="relative">
              <PencilDoodle className="!relative !pointer-events-auto w-8 h-8 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </span>
            <span className="font-hand text-2xl md:text-3xl font-bold text-ink tracking-wide">
              Rasal Jaman
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-tab ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-ink after:!scale-x-100'
                    : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 bg-paper/98 backdrop-blur-sm ${
            mobileOpen ? 'max-h-80 opacity-100 border-b-2 border-paper-line' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col py-4 px-6 gap-1">
            {NAV_ITEMS.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-hand text-xl py-2 px-4 text-ink-light hover:text-ink hover:bg-highlight-yellow/40 rounded-lg transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
