import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionWrapper, SectionHeading } from './shared';
import {
  LogIn, Wrench, MessageSquare, MapPin, Search, Send, CheckCircle, Navigation,
  UserPlus, ShieldCheck, Settings, DollarSign, Clock, Wifi, ClipboardCheck, CheckCircle2,
  Smartphone, Info,
} from 'lucide-react';

const customerSteps = [
  { icon: LogIn, title: 'Open GoServ', desc: 'Register or log in to your account.' },
  { icon: Wrench, title: 'Select a Service', desc: 'Electrician, plumber, AC repair and more.' },
  { icon: MessageSquare, title: 'Describe the Problem', desc: 'Enter text or upload a photo of the issue.' },
  { icon: MapPin, title: 'Share Location', desc: 'Detect your location with permission.' },
  { icon: Search, title: 'Discover Nearby Technicians', desc: 'View available technicians with distance, prices, profiles and ratings.' },
  { icon: Send, title: 'Send Service Request', desc: 'Select a preferred appointment time and request a technician.' },
  { icon: CheckCircle, title: 'Confirm Booking', desc: 'Technician accepts, and you confirm the selected booking.' },
  { icon: Navigation, title: 'Live Tracking and Service', desc: 'Track the technician, receive arrival notifications and complete the service.' },
];

const technicianSteps = [
  { icon: UserPlus, title: 'Register', desc: 'Create a technician profile.' },
  { icon: ShieldCheck, title: 'Submit Verification Details', desc: 'Identity, skills and experience.' },
  { icon: Settings, title: 'Select Services', desc: 'Electrician, plumbing, AC repair and more.' },
  { icon: DollarSign, title: 'Set Pricing', desc: 'Define inspection and service charges.' },
  { icon: Clock, title: 'Set Availability', desc: 'Working hours and service radius.' },
  { icon: Wifi, title: 'Go Online', desc: 'Start receiving nearby customer requests.' },
  { icon: ClipboardCheck, title: 'Pick a Job', desc: 'Review the request and accept or reject it.' },
  { icon: CheckCircle2, title: 'Complete Service', desc: 'Visit the customer, finish the work and submit service details.' },
];

function StepCard({ step, index, isVisible, side }) {
  const Icon = step.icon;
  const num = index + 1;
  const delay = index * 0.1;

  return (
    <div
      className={`
        relative flex items-start gap-5 transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Step number circle */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-royal to-teal flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-royal/20">
          {num}
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-royal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-royal/15 transition-colors duration-300">
            <Icon className="w-5 h-5 text-royal" />
          </div>
          <div>
            <h4 className="font-bold text-navy text-lg mb-1">{step.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ZigzagStepCard({ step, index, isVisible }) {
  const Icon = step.icon;
  const num = index + 1;
  const isLeft = index % 2 === 0;
  const delay = index * 0.12;

  const card = (
    <div
      className={`
        flex-1 bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group
        ${isVisible
          ? `opacity-100 ${isLeft ? 'animate-slide-left' : 'animate-slide-right'}`
          : 'opacity-0'
        }
      `}
      style={{ animationDelay: `${delay}s`, animationFillMode: 'both' }}
    >
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-lg bg-royal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-royal/15 transition-colors duration-300">
          <Icon className="w-5 h-5 text-royal" />
        </div>
        <div>
          <h4 className="font-bold text-navy text-lg mb-1">{step.title}</h4>
          <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
        </div>
      </div>
    </div>
  );

  const circle = (
    <div className="relative z-10 flex-shrink-0">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-royal to-teal flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-royal/25">
        {num}
      </div>
    </div>
  );

  return (
    <div className="flex items-center gap-6">
      {isLeft ? (
        <>
          {card}
          {circle}
          <div className="flex-1" />
        </>
      ) : (
        <>
          <div className="flex-1" />
          {circle}
          {card}
        </>
      )}
    </div>
  );
}

function MobileTimeline({ steps, isVisible }) {
  return (
    <div className="lg:hidden relative">
      {/* Gradient connecting line */}
      <div
        className="absolute left-[23px] top-6 bottom-6 w-0.5"
        style={{
          background: 'linear-gradient(to bottom, #2563EB, #10B981)',
        }}
      />
      <div className="flex flex-col gap-8">
        {steps.map((step, i) => (
          <StepCard key={i} step={step} index={i} isVisible={isVisible} />
        ))}
      </div>
    </div>
  );
}

function DesktopTimeline({ steps, isVisible }) {
  return (
    <div className="hidden lg:block relative">
      {/* Center gradient line */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-0.5"
        style={{
          background: 'linear-gradient(to bottom, #2563EB, #10B981)',
        }}
      />
      <div className="flex flex-col gap-10">
        {steps.map((step, i) => (
          <ZigzagStepCard key={i} step={step} index={i} isVisible={isVisible} />
        ))}
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [sectionRef, isSectionVisible] = useScrollReveal(0.1);

  const tabs = [
    { label: '👤 Customer Journey', steps: customerSteps },
    { label: '🔧 Technician Journey', steps: technicianSteps },
  ];

  const currentSteps = tabs[activeTab].steps;

  return (
    <SectionWrapper id="how-it-works" bg="light">
      <div
        ref={sectionRef}
        className={`transition-all duration-700 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <SectionHeading
          badge="Step by Step"
          title="How GoServ Works"
          subtitle="One application with two role-based experiences — see the journey from both sides."
        />

        {/* Tab buttons */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex gap-3 p-1.5 bg-white rounded-full shadow-sm border border-gray-100">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`
                  px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer
                  ${activeTab === i
                    ? 'bg-royal text-white shadow-md shadow-royal/25'
                    : 'bg-white text-gray-600 hover:text-royal hover:bg-royal/5 border border-transparent hover:border-royal/20'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline content with tab transition */}
        <div className="relative">
          <div
            key={activeTab}
            className={`transition-all duration-500 ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <MobileTimeline steps={currentSteps} isVisible={isSectionVisible} />
            <DesktopTimeline steps={currentSteps} isVisible={isSectionVisible} />
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-royal/5 border-l-4 border-royal p-5 rounded-lg flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <Smartphone className="w-5 h-5 text-royal" />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-semibold text-navy">GoServ is ONE application with TWO role-based experiences</span>{' '}
              — customers and technicians use the same app.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
