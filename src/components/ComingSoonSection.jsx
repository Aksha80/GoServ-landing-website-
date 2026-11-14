import { MapPin, Wrench, Home, Star, Shield } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function GoServLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-12 h-12 animate-pulse-glow rounded-full" fill="none">
      <circle cx="24" cy="24" r="22" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <path d="M24 8C16 8 10 14 10 22c0 5 3 10 8 13l6 5 6-5c5-3 8-8 8-13 0-8-6-14-14-14z" fill="rgba(255,255,255,0.1)" />
      <text x="15" y="31" fill="white" fontSize="20" fontWeight="bold" fontFamily="Inter, sans-serif">G</text>
    </svg>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-56 sm:w-64">
      {/* Floating icons */}
      <FloatingIcon Icon={MapPin} className="-top-4 -left-8 animate-float" style={{ animationDelay: '0s' }} />
      <FloatingIcon Icon={Wrench} className="-top-2 -right-10 animate-float" style={{ animationDelay: '0.6s' }} />
      <FloatingIcon Icon={Home} className="top-1/3 -left-12 animate-float" style={{ animationDelay: '1.2s' }} />
      <FloatingIcon Icon={Star} className="top-1/2 -right-12 animate-float" style={{ animationDelay: '0.3s' }} />
      <FloatingIcon Icon={Shield} className="bottom-8 -left-10 animate-float" style={{ animationDelay: '0.9s' }} />

      {/* Phone frame */}
      <div className="relative bg-gradient-to-b from-white/10 to-white/5 border-2 border-white/20 rounded-[2.5rem] p-3 backdrop-blur-sm shadow-[0_0_60px_rgba(37,99,235,0.2)]">
        {/* Notch */}
        <div className="mx-auto w-24 h-5 bg-black/40 rounded-b-xl mb-4" />

        {/* Screen */}
        <div className="bg-gradient-to-b from-navy/80 to-royal/40 rounded-2xl px-6 py-12 flex flex-col items-center justify-center gap-6 min-h-[280px]">
          {/* Logo on screen */}
          <svg viewBox="0 0 40 40" className="w-14 h-14" fill="none">
            <circle cx="20" cy="20" r="18" fill="rgba(37,99,235,0.3)" />
            <path d="M20 6C13 6 8 11 8 18c0 4 2.5 8 7 11l5 4 5-4c4.5-3 7-7 7-11 0-7-5-12-12-12z" fill="rgba(255,255,255,0.15)" />
            <text x="12" y="26" fill="white" fontSize="16" fontWeight="bold" fontFamily="Inter, sans-serif">G</text>
          </svg>
          <span className="text-white/90 font-bold text-lg tracking-wide">GoServ</span>
          {/* Loading dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white/60 animate-pulse" style={{ animationDelay: '0s' }} />
            <span className="w-2 h-2 rounded-full bg-white/60 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <span className="w-2 h-2 rounded-full bg-white/60 animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>

        {/* Home bar */}
        <div className="mx-auto w-20 h-1 bg-white/20 rounded-full mt-4" />
      </div>
    </div>
  );
}

function FloatingIcon({ Icon, className = '', style }) {
  return (
    <div
      className={`absolute z-10 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center ${className}`}
      style={style}
    >
      <Icon className="w-4 h-4 text-blue-200" strokeWidth={2} />
    </div>
  );
}

export default function ComingSoonSection() {
  const [ref, isVisible] = useScrollReveal(0.1);

  const scrollToFooter = (e) => {
    e.preventDefault();
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="coming-soon" className="bg-gradient-to-br from-navy via-[#152f5c] to-royal text-white py-24 md:py-32 overflow-hidden">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        {/* Logo mark */}
        <div className="flex justify-center mb-6">
          <GoServLogo />
        </div>

        {/* Tagline */}
        <p className="text-blue-200 italic text-lg mb-4">Where Services Meet Solutions.</p>

        {/* Main heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Something Better Is Coming.
        </h2>

        {/* Subheading */}
        <p className="text-xl text-blue-200 mb-3">GoServ is on its way!</p>

        {/* Description */}
        <p className="text-blue-100 max-w-2xl mx-auto mb-14 leading-relaxed">
          Get ready for a smarter way to discover local technicians, book home services and manage your household appliances.
        </p>

        {/* Phone mockup */}
        <div className="mb-14">
          <PhoneMockup />
        </div>

        {/* COMING SOON badge */}
        <div className="mb-8">
          <span className="inline-block uppercase tracking-widest border-2 border-white/30 px-8 py-3 rounded-full text-white font-bold animate-pulse-glow text-sm">
            Coming Soon
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={scrollToFooter}
          className="inline-block bg-white text-navy rounded-full px-8 py-3 font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Stay Tuned
        </button>
      </div>
    </section>
  );
}
