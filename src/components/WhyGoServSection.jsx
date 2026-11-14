import { UserPlus, Users, Sliders, MapPin, BellRing, Calendar, Navigation, Smartphone, Cpu } from 'lucide-react';
import { SectionWrapper, SectionHeading } from './shared';
import { useScrollReveal } from '../hooks/useScrollReveal';

const benefits = [
  { Icon: UserPlus, title: 'Independent Technicians Welcome', desc: 'Local technicians and repair shops can join the marketplace.', color: 'royal' },
  { Icon: Users, title: 'More Choices for Customers', desc: 'Browse multiple available technicians for any service.', color: 'teal' },
  { Icon: Sliders, title: 'Technician-Controlled Pricing', desc: 'Technicians set their own rates and availability.', color: 'royal' },
  { Icon: MapPin, title: 'Location-Based Discovery', desc: 'Find professionals nearest to your location.', color: 'teal' },
  { Icon: BellRing, title: 'Request-Based Job Acceptance', desc: 'Technicians receive and choose customer requests.', color: 'royal' },
  { Icon: Calendar, title: 'Convenient Scheduling', desc: 'Easy appointment booking and management.', color: 'teal' },
  { Icon: Navigation, title: 'Live Journey Updates', desc: 'Track your technician during the journey.', color: 'royal' },
  { Icon: Smartphone, title: 'One App for Everyone', desc: 'Customers and technicians in a single application.', color: 'teal' },
  { Icon: Cpu, title: 'HomePulse AI', desc: 'Smart appliance management and maintenance tracking.', color: 'royal' },
];

function BenefitCard({ Icon, title, desc, color, index, isVisible }) {
  const isRoyal = color === 'royal';
  return (
    <div
      className={`flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div
        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
          isRoyal ? 'bg-royal/10' : 'bg-teal/10'
        }`}
      >
        <Icon className={`w-5 h-5 ${isRoyal ? 'text-royal' : 'text-teal'}`} strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold text-navy text-[0.95rem] leading-snug mb-1">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function WhyGoServSection() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <SectionWrapper id="why-goserv" bg="white">
      <SectionHeading badge="Platform Benefits" title="Why Choose GoServ?" />
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
      >
        {benefits.map((b, i) => (
          <BenefitCard key={i} {...b} index={i} isVisible={isVisible} />
        ))}
      </div>
    </SectionWrapper>
  );
}
