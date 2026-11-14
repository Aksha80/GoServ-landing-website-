import {
  Home, Search, Star, Wrench, TrendingUp, Wallet,
  Users, Laptop, ArrowRight, ArrowLeft,
} from 'lucide-react';
import { SectionWrapper, SectionHeading } from './shared';
import { useScrollReveal } from '../hooks/useScrollReveal';

function GlassCard({ children, glow = 'blue', label }) {
  const glowColor = glow === 'blue'
    ? 'shadow-[0_0_30px_rgba(37,99,235,0.15)]'
    : 'shadow-[0_0_30px_rgba(16,185,129,0.15)]';

  return (
    <div className={`relative flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 ${glowColor} hover:bg-white/10 transition-all duration-300`}>
      <span className="text-sm font-semibold tracking-wide text-blue-200 uppercase">{label}</span>
      <div className="flex items-center gap-3">
        {children}
      </div>
    </div>
  );
}

function IconCircle({ Icon, color = 'royal' }) {
  const isRoyal = color === 'royal';
  return (
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isRoyal ? 'bg-royal/20' : 'bg-teal/20'}`}>
      <Icon className={`w-5 h-5 ${isRoyal ? 'text-blue-300' : 'text-emerald-300'}`} strokeWidth={2} />
    </div>
  );
}

function CenterLogo() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-royal/20 blur-xl animate-pulse" />
      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-royal to-royal-dark flex items-center justify-center animate-pulse-glow">
        <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
          <path d="M20 4C12 4 6 10 6 18c0 5 3 10 8 13l6 5 6-5c5-3 8-8 8-13 0-8-6-14-14-14z" fill="rgba(255,255,255,0.15)" />
          <text x="12" y="27" fill="white" fontSize="18" fontWeight="bold" fontFamily="Inter, sans-serif">G</text>
        </svg>
      </div>
    </div>
  );
}

function VisionStat({ Icon, label }) {
  return (
    <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex-1 min-w-[160px]">
      <div className="w-10 h-10 rounded-full bg-royal/20 flex items-center justify-center">
        <Icon className="w-5 h-5 text-blue-300" strokeWidth={2} />
      </div>
      <span className="text-white font-semibold text-sm text-center">{label}</span>
    </div>
  );
}

export default function VisionSection() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <SectionWrapper id="vision" bg="navy">
      <SectionHeading
        badge="Our Vision"
        title="Empowering Local Professionals. Simplifying Everyday Services."
        subtitle="Our vision is to build a connected service ecosystem where customers can easily discover local professionals and independent technicians can grow their businesses through digital opportunities."
        light
      />

      <div ref={ref} className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        {/* Connected visual */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mb-16">
          {/* Customers */}
          <GlassCard glow="blue" label="Customers">
            <IconCircle Icon={Home} color="royal" />
            <IconCircle Icon={Search} color="royal" />
            <IconCircle Icon={Star} color="royal" />
          </GlassCard>

          {/* Arrows + Center Logo */}
          <div className="flex flex-col lg:flex-row items-center gap-3">
            <div className="hidden lg:flex items-center text-blue-300/50">
              <ArrowRight className="w-8 h-8" />
            </div>
            <div className="lg:hidden flex items-center text-blue-300/50 rotate-90">
              <ArrowRight className="w-8 h-8" />
            </div>
            <CenterLogo />
            <div className="hidden lg:flex items-center text-blue-300/50">
              <ArrowRight className="w-8 h-8" />
            </div>
            <div className="lg:hidden flex items-center text-blue-300/50 rotate-90">
              <ArrowRight className="w-8 h-8" />
            </div>
          </div>

          {/* Technicians */}
          <GlassCard glow="teal" label="Technicians">
            <IconCircle Icon={Wrench} color="teal" />
            <IconCircle Icon={TrendingUp} color="teal" />
            <IconCircle Icon={Wallet} color="teal" />
          </GlassCard>
        </div>

        {/* Vision statements */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-3xl mx-auto">
          <VisionStat Icon={Users} label="Connected Communities" />
          <VisionStat Icon={Laptop} label="Digital Opportunities" />
          <VisionStat Icon={Home} label="Smarter Home Services" />
        </div>
      </div>
    </SectionWrapper>
  );
}
