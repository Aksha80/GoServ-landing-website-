import {
  LogIn, Search, MapPin, DollarSign, CalendarCheck, Navigation, Brain,
  UserPlus, ShieldCheck, Wrench, Tag, Clock, Bell, CheckCircle, BarChart3,
  Smartphone
} from 'lucide-react';
import { SectionWrapper, SectionHeading } from './shared';
import { useScrollReveal } from '../hooks/useScrollReveal';

const customerFeatures = [
  { icon: LogIn, label: 'Register / Login' },
  { icon: Search, label: 'Find Services' },
  { icon: MapPin, label: 'Nearby Technicians' },
  { icon: DollarSign, label: 'Compare Prices' },
  { icon: CalendarCheck, label: 'Book Appointments' },
  { icon: Navigation, label: 'Live Tracking' },
  { icon: Brain, label: 'HomePulse AI' },
];

const technicianFeatures = [
  { icon: UserPlus, label: 'Register' },
  { icon: ShieldCheck, label: 'Profile Verification' },
  { icon: Wrench, label: 'Select Skills' },
  { icon: Tag, label: 'Set Prices' },
  { icon: Clock, label: 'Manage Availability' },
  { icon: Bell, label: 'Receive Requests' },
  { icon: CheckCircle, label: 'Accept / Reject Jobs' },
  { icon: BarChart3, label: 'Earnings & Service History' },
];

function FeaturePill({ icon: Icon, label, side, index, isVisible }) {
  const isLeft = side === 'left';
  const delayMs = (index + 1) * 100;

  return (
    <div
      className={`flex items-center gap-3 transition-all duration-700 ${
        isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } ${
        isVisible
          ? `opacity-100 translate-x-0`
          : `opacity-0 ${isLeft ? 'lg:-translate-x-8' : 'lg:translate-x-8'}`
      }`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {/* Connecting line — visible only on lg */}
      <div
        className={`hidden lg:block w-8 h-px ${
          isLeft ? 'bg-gradient-to-l from-royal/40 to-transparent' : 'bg-gradient-to-r from-teal/40 to-transparent'
        }`}
      />

      {/* Pill */}
      <div
        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default whitespace-nowrap ${
          isLeft
            ? 'bg-white border-royal/20 hover:border-royal/40'
            : 'bg-white border-teal/20 hover:border-teal/40'
        }`}
      >
        <span
          className={`flex items-center justify-center w-7 h-7 rounded-full shrink-0 ${
            isLeft ? 'bg-royal/10 text-royal' : 'bg-teal/10 text-teal'
          }`}
        >
          <Icon className="w-3.5 h-3.5" />
        </span>
        <span className={`text-sm font-medium ${isLeft ? 'text-navy' : 'text-navy'}`}>
          {label}
        </span>
      </div>
    </div>
  );
}

function PhoneMockup({ activeTab, setActiveTab, isVisible }) {
  return (
    <div
      className={`relative mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
    >
      {/* Glow ring */}
      <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-royal/20 via-transparent to-teal/20 blur-xl animate-pulse-glow opacity-40" />

      {/* Phone frame */}
      <div className="relative w-[260px] sm:w-[280px] h-[520px] sm:h-[560px] rounded-[2.5rem] bg-gradient-to-b from-gray-800 to-gray-900 p-[3px] shadow-2xl animate-float">
        <div className="w-full h-full rounded-[2.4rem] bg-white overflow-hidden flex flex-col">
          {/* Notch */}
          <div className="flex justify-center pt-2 pb-1">
            <div className="w-28 h-6 bg-gray-900 rounded-full flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-700" />
              <div className="w-12 h-3 rounded-full bg-gray-700" />
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-5 py-1 text-[10px] text-gray-400 font-medium">
            <span>9:41</span>
            <div className="flex gap-1 items-center">
              <div className="w-4 h-2 border border-gray-400 rounded-sm relative">
                <div className="absolute inset-0.5 bg-gray-400 rounded-xs" />
              </div>
            </div>
          </div>

          {/* App content */}
          <div className="flex-1 flex flex-col px-4 pb-4">
            {/* GoServ logo */}
            <div className="flex items-center justify-center gap-2 py-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-royal to-royal-dark flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-bold text-navy tracking-tight">GoServ</span>
            </div>

            {/* Toggle */}
            <div className="flex bg-gray-100 rounded-full p-1 mb-4">
              <button
                onClick={() => setActiveTab('customer')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                  activeTab === 'customer'
                    ? 'bg-royal text-white shadow-md'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Customer
              </button>
              <button
                onClick={() => setActiveTab('technician')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                  activeTab === 'technician'
                    ? 'bg-teal text-white shadow-md'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Technician
              </button>
            </div>

            {/* Screen content */}
            <div className="flex-1 flex flex-col gap-2.5 overflow-hidden">
              {activeTab === 'customer' ? (
                <>
                  {/* Search bar */}
                  <div className="flex items-center gap-2 bg-light-blue rounded-xl px-3 py-2.5">
                    <Search className="w-3.5 h-3.5 text-royal/50" />
                    <span className="text-[11px] text-gray-400">Search services...</span>
                  </div>
                  {/* Service grid */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { emoji: '🔧', name: 'Plumber' },
                      { emoji: '⚡', name: 'Electrician' },
                      { emoji: '❄️', name: 'AC Repair' },
                      { emoji: '🧹', name: 'Cleaning' },
                      { emoji: '🎨', name: 'Painter' },
                      { emoji: '🪚', name: 'Carpenter' },
                    ].map((s, i) => (
                      <div key={i} className="flex flex-col items-center gap-1 p-2 rounded-xl bg-gray-50">
                        <span className="text-lg">{s.emoji}</span>
                        <span className="text-[9px] font-medium text-gray-600">{s.name}</span>
                      </div>
                    ))}
                  </div>
                  {/* Nearby tech card */}
                  <div className="bg-gradient-to-r from-royal/5 to-light-blue rounded-xl p-2.5">
                    <div className="text-[10px] font-semibold text-navy mb-1.5">Nearby Technicians</div>
                    <div className="flex gap-2">
                      {['R', 'A', 'S'].map((l, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <div className="w-6 h-6 rounded-full bg-royal/10 flex items-center justify-center text-[10px] font-bold text-royal">{l}</div>
                          <div>
                            <div className="text-[9px] font-medium text-gray-700">{['Ravi', 'Anita', 'Suresh'][i]}</div>
                            <div className="text-[8px] text-gray-400">⭐ {['4.8', '4.9', '4.7'][i]}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* HomePulse mini card */}
                  <div className="flex items-center gap-2 bg-gradient-to-r from-teal/10 to-teal/5 rounded-xl px-3 py-2">
                    <Brain className="w-4 h-4 text-teal" />
                    <div>
                      <div className="text-[10px] font-semibold text-navy">HomePulse AI</div>
                      <div className="text-[8px] text-gray-500">Manage your appliances</div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Technician dashboard */}
                  <div className="flex items-center gap-2 bg-teal/5 rounded-xl px-3 py-2">
                    <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center text-sm font-bold text-teal">R</div>
                    <div>
                      <div className="text-[11px] font-semibold text-navy">Ravi Kumar</div>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                        <span className="text-[9px] text-teal font-medium">Verified</span>
                      </div>
                    </div>
                  </div>
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { val: '127', lab: 'Jobs Done' },
                      { val: '4.8', lab: 'Rating' },
                      { val: '₹42k', lab: 'Earnings' },
                    ].map((s, i) => (
                      <div key={i} className="text-center bg-gray-50 rounded-lg py-2">
                        <div className="text-sm font-bold text-navy">{s.val}</div>
                        <div className="text-[8px] text-gray-500">{s.lab}</div>
                      </div>
                    ))}
                  </div>
                  {/* New request */}
                  <div className="bg-gradient-to-r from-teal/10 to-teal/5 rounded-xl p-2.5 border border-teal/20">
                    <div className="text-[10px] font-semibold text-navy mb-1">New Request</div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-[9px] text-gray-600">AC Repair — 2.5 km away</div>
                        <div className="text-[9px] font-medium text-teal">₹800 - ₹1,200</div>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-[10px]">✕</div>
                        <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center text-[10px]">✓</div>
                      </div>
                    </div>
                  </div>
                  {/* Availability */}
                  <div className="bg-gray-50 rounded-xl p-2.5">
                    <div className="text-[10px] font-semibold text-navy mb-1.5">Your Availability</div>
                    <div className="flex gap-1">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d, i) => (
                        <div
                          key={i}
                          className={`flex-1 text-center py-1 rounded-md text-[8px] font-medium ${
                            i < 5 ? 'bg-teal/10 text-teal' : 'bg-gray-200 text-gray-400'
                          }`}
                        >
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Skills */}
                  <div className="flex flex-wrap gap-1">
                    {['Plumbing', 'AC Repair', 'Electrical'].map((s, i) => (
                      <span key={i} className="px-2 py-0.5 bg-teal/10 text-teal text-[8px] font-medium rounded-full">{s}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex justify-around items-center py-2 border-t border-gray-100">
            {['🏠', '🔍', '📋', '👤'].map((e, i) => (
              <span key={i} className="text-sm opacity-50">{e}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OneAppSection() {
  const [ref, isVisible] = useScrollReveal(0.1);
  const [activeTab, setActiveTab] = React.useState('customer');

  return (
    <SectionWrapper id="one-app" bg="white">
      <SectionHeading
        badge="One Platform"
        title="One App. Two Sides. One Connection."
      />

      <div ref={ref} className="relative">
        {/* Desktop: 3-column layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:gap-4 xl:gap-6">
          {/* LEFT — Customer features */}
          <div className="flex flex-col items-center lg:items-end justify-center gap-3 w-full lg:w-auto lg:flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-royal" />
              <span className="text-sm font-bold text-royal uppercase tracking-wider">Customer</span>
            </div>
            {customerFeatures.map((f, i) => (
              <FeaturePill
                key={f.label}
                icon={f.icon}
                label={f.label}
                side="left"
                index={i}
                isVisible={isVisible}
              />
            ))}
          </div>

          {/* CENTER — Phone */}
          <div className="flex items-center justify-center shrink-0 py-4 lg:py-0">
            <PhoneMockup activeTab={activeTab} setActiveTab={setActiveTab} isVisible={isVisible} />
          </div>

          {/* RIGHT — Technician features */}
          <div className="flex flex-col items-center lg:items-start justify-center gap-3 w-full lg:w-auto lg:flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-teal" />
              <span className="text-sm font-bold text-teal uppercase tracking-wider">Technician</span>
            </div>
            {technicianFeatures.map((f, i) => (
              <FeaturePill
                key={f.label}
                icon={f.icon}
                label={f.label}
                side="right"
                index={i}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Callout */}
        <div
          className={`mt-16 text-center max-w-2xl mx-auto transition-all duration-700 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-royal/5 via-light-blue to-teal/5 border border-gray-100 shadow-sm">
            <Smartphone className="w-5 h-5 text-royal shrink-0" />
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Both customers and technicians access the same GoServ application with
              personalized, <span className="font-semibold text-navy">role-based experiences</span>.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

// Need React for useState
import React from 'react';
