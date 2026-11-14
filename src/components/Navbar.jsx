import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'The Problem', href: '#problem' },
  { label: 'Our Solution', href: '#solution' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'HomePulse AI', href: '#homepulse' },
  { label: 'Coming Soon', href: '#coming-soon' },
];

function GoServLogo() {
  return (
    <a href="#home" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }}>
      {/* SVG logo mark — stylized "G" with location-pin silhouette */}
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        {/* Rounded-square background */}
        <rect width="36" height="36" rx="10" className="fill-royal" />
        {/* Location pin outline baked into the G */}
        <path
          d="M18 6C13.03 6 9 9.92 9 14.76C9 21.26 18 30 18 30C18 30 27 21.26 27 14.76C27 9.92 22.97 6 18 6Z"
          fill="white"
          fillOpacity="0.2"
        />
        {/* Stylised "G" letter */}
        <path
          d="M22.5 18.5H18.5V16.5H24C24 16.5 24.5 14 24.5 13C24.5 9.5 21.5 8 18.5 8C15 8 12 10.5 12 14.5C12 18.5 15 21 18.5 21C20.5 21 22 20.2 23 19L22.5 18.5Z"
          fill="white"
        />
        {/* Wrench accent inside the G opening */}
        <path
          d="M19 17.5L21.5 15L23 16.5L20.5 19"
          stroke="white"
          strokeOpacity="0.6"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Pin dot */}
        <circle cx="18" cy="14" r="2" fill="#2563EB" />
      </svg>
      <span className="text-xl font-bold text-navy tracking-tight select-none">
        Go<span className="text-royal">Serv</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Active section tracking via IntersectionObserver ── */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observers = [];

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(handleIntersect, {
        rootMargin: '-20% 0px -75% 0px',
        threshold: 0,
      });
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Smooth-scroll handler ── */
  const scrollTo = useCallback(
    (href) => {
      setMobileOpen(false);
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },
    [],
  );

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-shadow duration-300 bg-white/95 backdrop-blur-md ${
        scrolled ? 'shadow-lg shadow-navy/5' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 lg:h-[72px]">
        {/* Logo */}
        <GoServLogo />

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => scrollTo(href)}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  activeSection === href
                    ? 'text-royal'
                    : 'text-gray-600 hover:text-navy hover:bg-gray-50'
                }`}
              >
                {label}
                {/* Active underline indicator */}
                <span
                  className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-royal transition-transform duration-300 origin-left ${
                    activeSection === href ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo('#solution')}
            className="hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-royal rounded-full shadow-md shadow-royal/25 hover:bg-royal-dark hover:shadow-lg hover:shadow-royal/30 active:scale-[0.97] transition-all duration-200"
          >
            Explore GoServ
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-navy hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`absolute transition-all duration-300 ${mobileOpen ? 'rotate-90 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'}`}>
              <Menu size={22} strokeWidth={2.2} />
            </span>
            <span className={`absolute transition-all duration-300 ${mobileOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'}`}>
              <X size={22} strokeWidth={2.2} />
            </span>
          </button>
        </div>
      </nav>

      {/* ── Mobile slide-down panel ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(.4,0,.2,1)] ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-[15px] font-medium transition-colors duration-200 ${
                    activeSection === href
                      ? 'bg-royal/10 text-royal'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-navy'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => scrollTo('#solution')}
            className="mt-4 w-full py-3 text-[15px] font-semibold text-white bg-royal rounded-full shadow-md shadow-royal/25 hover:bg-royal-dark active:scale-[0.98] transition-all duration-200"
          >
            Explore GoServ
          </button>
        </div>
      </div>
    </header>
  );
}
