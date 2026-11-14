import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, Sparkles } from 'lucide-react';

/* ──────────────────────────────────────────
   Phone Mockup SVG — detailed smartphone
   showing the GoServ app interface
   ────────────────────────────────────────── */
function PhoneMockup() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      {/* Floating decorative elements */}
      <FloatingElements />

      <svg
        viewBox="0 0 320 620"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto animate-float drop-shadow-2xl"
      >
        {/* Phone outer frame */}
        <rect x="4" y="4" width="312" height="612" rx="40" fill="#102A56" />
        <rect x="8" y="8" width="304" height="604" rx="38" fill="#1a2744" />
        <rect x="14" y="14" width="292" height="592" rx="34" fill="white" />

        {/* Status bar */}
        <rect x="14" y="14" width="292" height="40" rx="34" fill="#2563EB" />
        <text x="35" y="40" fontSize="11" fill="white" fontWeight="500">9:41</text>
        {/* Signal + Battery icons */}
        <g transform="translate(250, 28)">
          <rect x="0" y="0" width="3" height="8" rx="1" fill="white" fillOpacity="0.5" transform="translate(0,4)" />
          <rect x="5" y="0" width="3" height="10" rx="1" fill="white" fillOpacity="0.7" transform="translate(0,2)" />
          <rect x="10" y="0" width="3" height="12" rx="1" fill="white" fillOpacity="0.9" />
          <rect x="18" y="2" width="16" height="8" rx="2" fill="white" fillOpacity="0.8" />
          <rect x="20" y="4" width="10" height="4" rx="1" fill="white" />
        </g>

        {/* Notch */}
        <rect x="120" y="14" width="80" height="24" rx="12" fill="#1a2744" />
        <circle cx="160" cy="26" r="5" fill="#2a3754" />

        {/* ─── App Header ─── */}
        <rect x="14" y="54" width="292" height="52" fill="#2563EB" />
        {/* Logo mark */}
        <rect x="24" y="63" width="32" height="32" rx="8" fill="white" fillOpacity="0.2" />
        <text x="32" y="84" fontSize="16" fill="white" fontWeight="700">G</text>
        <text x="64" y="86" fontSize="17" fill="white" fontWeight="700" fontFamily="system-ui, sans-serif">GoServ</text>
        {/* Bell icon */}
        <g transform="translate(262, 71)">
          <path d="M8 2a6 6 0 0 0-6 6v4l-2 2h16l-2-2V8a6 6 0 0 0-6-6z" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="8" cy="17" r="2" fill="white" fillOpacity="0.6" />
        </g>

        {/* ─── Role Toggle ─── */}
        <rect x="30" y="120" width="260" height="44" rx="22" fill="#EFF6FF" />
        {/* Active: Customer */}
        <rect x="34" y="124" width="126" height="36" rx="18" fill="#2563EB" />
        <text x="64" y="147" fontSize="13" fill="white" fontWeight="600">Customer</text>
        {/* Inactive: Technician */}
        <text x="186" y="147" fontSize="13" fill="#6B7280" fontWeight="500">Technician</text>

        {/* ─── Search Bar ─── */}
        <rect x="30" y="178" width="260" height="42" rx="12" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1" />
        {/* Search icon */}
        <circle cx="50" cy="199" r="7" fill="none" stroke="#9CA3AF" strokeWidth="1.5" />
        <line x1="55" y1="204" x2="59" y2="208" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
        <text x="66" y="203" fontSize="12" fill="#9CA3AF">Search services near you...</text>

        {/* ─── Service Category Icons ─── */}
        <text x="30" y="248" fontSize="13" fill="#102A56" fontWeight="600">Popular Services</text>

        {/* Electrician */}
        <rect x="30" y="258" width="72" height="72" rx="16" fill="#FEF3C7" />
        <text x="53" y="292" fontSize="24" textAnchor="middle">⚡</text>
        <text x="66" y="320" fontSize="9" fill="#92400E" fontWeight="500" textAnchor="middle">Electrician</text>

        {/* Plumber */}
        <rect x="114" y="258" width="72" height="72" rx="16" fill="#DBEAFE" />
        <text x="137" y="292" fontSize="24" textAnchor="middle">🔧</text>
        <text x="150" y="320" fontSize="9" fill="#1E40AF" fontWeight="500" textAnchor="middle">Plumber</text>

        {/* AC Repair */}
        <rect x="198" y="258" width="72" height="72" rx="16" fill="#D1FAE5" />
        <text x="221" y="292" fontSize="24" textAnchor="middle">❄️</text>
        <text x="234" y="320" fontSize="9" fill="#065F46" fontWeight="500" textAnchor="middle">AC Repair</text>

        {/* More services */}
        <rect x="282" y="258" width="14" height="72" rx="7" fill="#F3F4F6" />
        <text x="289" y="298" fontSize="10" fill="#9CA3AF" textAnchor="middle">›</text>

        {/* ─── Mini Map ─── */}
        <text x="30" y="358" fontSize="13" fill="#102A56" fontWeight="600">Nearby Pros</text>
        <rect x="30" y="368" width="260" height="100" rx="14" fill="#EFF6FF" />
        {/* Map grid lines */}
        <line x1="30" y1="408" x2="290" y2="408" stroke="#D1D5DB" strokeWidth="0.5" strokeDasharray="4,3" />
        <line x1="30" y1="438" x2="290" y2="438" stroke="#D1D5DB" strokeWidth="0.5" strokeDasharray="4,3" />
        <line x1="100" y1="368" x2="100" y2="468" stroke="#D1D5DB" strokeWidth="0.5" strokeDasharray="4,3" />
        <line x1="200" y1="368" x2="200" y2="468" stroke="#D1D5DB" strokeWidth="0.5" strokeDasharray="4,3" />
        {/* Roads */}
        <line x1="50" y1="390" x2="270" y2="420" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
        <line x1="140" y1="375" x2="160" y2="460" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
        {/* Location markers */}
        <g transform="translate(100, 388)">
          <path d="M8 0C3.6 0 0 3.4 0 7.5C0 13 8 20 8 20S16 13 16 7.5C16 3.4 12.4 0 8 0Z" fill="#2563EB" />
          <circle cx="8" cy="7" r="3" fill="white" />
        </g>
        <g transform="translate(190, 398)">
          <path d="M6 0C2.7 0 0 2.5 0 5.6C0 9.8 6 15 6 15S12 9.8 12 5.6C12 2.5 9.3 0 6 0Z" fill="#10B981" />
          <circle cx="6" cy="5.5" r="2.5" fill="white" />
        </g>
        <g transform="translate(60, 410)">
          <path d="M6 0C2.7 0 0 2.5 0 5.6C0 9.8 6 15 6 15S12 9.8 12 5.6C12 2.5 9.3 0 6 0Z" fill="#F59E0B" />
          <circle cx="6" cy="5.5" r="2.5" fill="white" />
        </g>
        {/* User location pulse */}
        <circle cx="160" cy="418" r="6" fill="#2563EB" fillOpacity="0.2">
          <animate attributeName="r" values="6;12;6" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="160" cy="418" r="4" fill="#2563EB" />
        <circle cx="160" cy="418" r="2" fill="white" />

        {/* ─── Technician Profile Card ─── */}
        <rect x="30" y="480" width="260" height="106" rx="14" fill="white" stroke="#E5E7EB" strokeWidth="1" />
        {/* Shadow illusion */}
        <rect x="32" y="484" width="256" height="98" rx="12" fill="white" />
        {/* Avatar */}
        <circle cx="62" cy="516" r="22" fill="#DBEAFE" />
        <text x="62" y="521" fontSize="18" textAnchor="middle">👨‍🔧</text>
        {/* Name & specialty */}
        <text x="94" y="506" fontSize="13" fill="#102A56" fontWeight="700">Raj Kumar</text>
        <text x="94" y="520" fontSize="10" fill="#6B7280">Electrician · 3.2 km</text>
        {/* Stars */}
        <g transform="translate(94, 526)">
          <text fontSize="10" fill="#F59E0B">★ ★ ★ ★ ★</text>
        </g>
        <text x="148" y="536" fontSize="10" fill="#6B7280">(128)</text>
        {/* Price */}
        <text x="94" y="552" fontSize="11" fill="#102A56" fontWeight="600">₹299<tspan fill="#6B7280" fontWeight="400" fontSize="10"> /visit</tspan></text>
        {/* Available badge */}
        <rect x="210" y="496" width="68" height="24" rx="12" fill="#D1FAE5" />
        <circle cx="224" cy="508" r="3" fill="#10B981" />
        <text x="232" y="512" fontSize="10" fill="#065F46" fontWeight="600">Available</text>
        {/* Book button */}
        <rect x="210" y="540" width="68" height="28" rx="8" fill="#2563EB" />
        <text x="228" y="559" fontSize="11" fill="white" fontWeight="600">Book</text>

        {/* Bottom nav bar */}
        <rect x="14" y="592" width="292" height="24" rx="0" fill="#F9FAFB" />
        <line x1="130" y1="602" x2="190" y2="602" stroke="#D1D5DB" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/* Floating elements around the phone */
function FloatingElements() {
  return (
    <>
      {/* Floating location pin – top right */}
      <svg
        className="absolute -top-4 -right-6 w-10 h-10 animate-float opacity-60"
        style={{ animationDelay: '0.5s' }}
        viewBox="0 0 24 24" fill="none"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#2563EB" fillOpacity="0.15" stroke="#2563EB" strokeWidth="1.5" />
        <circle cx="12" cy="9" r="2.5" fill="#2563EB" />
      </svg>

      {/* Floating connection lines – top left */}
      <svg
        className="absolute -top-8 -left-4 w-16 h-16 opacity-40 animate-float"
        style={{ animationDelay: '1.2s' }}
        viewBox="0 0 48 48" fill="none"
      >
        <circle cx="8" cy="8" r="3" fill="#10B981" />
        <circle cx="40" cy="16" r="3" fill="#2563EB" />
        <circle cx="24" cy="40" r="3" fill="#F59E0B" />
        <line x1="8" y1="8" x2="40" y2="16" stroke="#2563EB" strokeWidth="1" strokeDasharray="3,3" />
        <line x1="40" y1="16" x2="24" y2="40" stroke="#10B981" strokeWidth="1" strokeDasharray="3,3" />
        <line x1="24" y1="40" x2="8" y2="8" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3,3" />
      </svg>

      {/* Small pin – bottom left */}
      <svg
        className="absolute bottom-12 -left-8 w-8 h-8 animate-float opacity-50"
        style={{ animationDelay: '1.8s' }}
        viewBox="0 0 24 24" fill="none"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="1.5" />
        <circle cx="12" cy="9" r="2" fill="#10B981" />
      </svg>

      {/* Sparkle – bottom right */}
      <svg
        className="absolute -bottom-2 -right-4 w-8 h-8 animate-float opacity-50"
        style={{ animationDelay: '2.4s' }}
        viewBox="0 0 24 24" fill="none"
      >
        <path d="M12 2L14 9L21 10L14 13L12 22L10 13L3 10L10 9L12 2Z" fill="#F59E0B" fillOpacity="0.3" stroke="#F59E0B" strokeWidth="1" />
      </svg>
    </>
  );
}

/* ──────────────────────────────────────────
   Background gradient blobs
   ────────────────────────────────────────── */
function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Top-right blob */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-light-blue via-blue-50 to-transparent opacity-80 blur-3xl" />
      {/* Bottom-left blob */}
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-light-blue via-blue-50 to-transparent opacity-60 blur-3xl" />
      {/* Center accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-r from-royal/3 to-teal/3 blur-3xl" />
    </div>
  );
}

/* ──────────────────────────────────────────
   Hero Section
   ────────────────────────────────────────── */
export default function HeroSection() {
  const [textRef, textVisible] = useScrollReveal(0.1);
  const [phoneRef, phoneVisible] = useScrollReveal(0.1);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20 lg:pt-0"
    >
      <BackgroundBlobs />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* ── Left: Copy ── */}
          <div
            ref={textRef}
            className={`flex-1 text-center lg:text-left max-w-xl lg:max-w-none reveal ${
              textVisible ? 'visible animate-slide-left' : ''
            }`}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-royal/10 text-royal text-sm font-semibold mb-6">
              <Sparkles size={14} />
              Now in Development
            </span>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[3.75rem] font-extrabold text-navy leading-[1.1] tracking-tight mb-4">
              Where Services{' '}
              <span className="relative">
                Meet
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-royal/15 rounded-full" />
              </span>{' '}
              Solutions.
            </h1>

            {/* Supporting line */}
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-royal mb-5">
              One App. Two Sides. One Connection.
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Finding reliable local technicians shouldn&apos;t be difficult. GoServ connects customers
              with nearby independent service professionals, making everyday home services easier,
              smarter and more convenient.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollTo('#how-it-works')}
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-white bg-royal rounded-full shadow-lg shadow-royal/25 hover:bg-royal-dark hover:shadow-xl hover:shadow-royal/30 active:scale-[0.97] transition-all duration-200"
              >
                Explore How It Works
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={() => scrollTo('#homepulse')}
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-royal border-2 border-royal/30 rounded-full hover:border-royal hover:bg-royal/5 active:scale-[0.97] transition-all duration-200"
              >
                <Sparkles size={15} className="text-royal" />
                Discover HomePulse AI
              </button>
            </div>

            {/* Social proof hint */}
            <div className="mt-10 flex items-center gap-3 justify-center lg:justify-start text-sm text-gray-500">
              <div className="flex -space-x-2">
                {['bg-royal', 'bg-teal', 'bg-amber-400', 'bg-rose-400'].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${bg} border-2 border-white flex items-center justify-center text-[10px] font-bold text-white`}
                  >
                    {['G', 'S', 'R', 'P'][i]}
                  </div>
                ))}
              </div>
              <span>Join the waitlist — launching soon</span>
            </div>
          </div>

          {/* ── Right: Phone Mockup ── */}
          <div
            ref={phoneRef}
            className={`flex-1 w-full max-w-md lg:max-w-lg reveal ${
              phoneVisible ? 'visible animate-slide-right' : ''
            }`}
          >
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
