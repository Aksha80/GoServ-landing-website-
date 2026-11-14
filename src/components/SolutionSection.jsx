import {
  Radar,
  BadgeDollarSign,
  BellRing,
  ToggleRight,
  Navigation,
  ShieldCheck,
} from 'lucide-react';
import { SectionWrapper, SectionHeading } from './shared';
import { useScrollReveal } from '../hooks/useScrollReveal';

const features = [
  {
    icon: Radar,
    title: 'Nearby Technician Discovery',
    description:
      'Find available local professionals based on service category and location.',
    palette: 'royal',
  },
  {
    icon: BadgeDollarSign,
    title: 'Technician-Controlled Pricing',
    description:
      'Technicians can set their own service prices and customers can compare them.',
    palette: 'teal',
  },
  {
    icon: BellRing,
    title: 'Instant Request Broadcasting',
    description:
      'When a customer submits a service request, nearby eligible technicians receive notifications.',
    palette: 'royal',
  },
  {
    icon: ToggleRight,
    title: 'Flexible Job Acceptance',
    description:
      'Technicians can independently accept or reject customer requests according to their availability.',
    palette: 'teal',
  },
  {
    icon: Navigation,
    title: 'Appointment and Live Tracking',
    description:
      'Customers confirm their preferred technician, schedule appointments and track the technician during the journey.',
    palette: 'royal',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Technician Profiles',
    description:
      'Customers can view technician skills, experience, verification status and customer reviews.',
    palette: 'teal',
  },
];

const palettes = {
  royal: { iconBg: 'bg-royal/10', iconColor: 'text-royal' },
  teal: { iconBg: 'bg-teal/10', iconColor: 'text-teal' },
};

function FeatureCard({ icon: Icon, title, description, palette, index }) {
  const [ref, isVisible] = useScrollReveal(0.12);
  const { iconBg, iconColor } = palettes[palette];

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'visible animate-fade-in-up stagger-' + (index + 1) : ''} group relative bg-white rounded-2xl border border-gray-100 p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
    >
      {/* Icon */}
      <div className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
        <Icon className={`w-7 h-7 ${iconColor}`} strokeWidth={1.8} />
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-navy mb-3 leading-snug">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-[0.95rem]">
        {description}
      </p>

      {/* Bottom hover accent */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 ${palette === 'royal' ? 'bg-royal' : 'bg-teal'} transition-all duration-500 group-hover:w-2/3 rounded-full`} />
    </div>
  );
}

export default function SolutionSection() {
  return (
    <SectionWrapper id="solution" bg="white">
      <SectionHeading
        badge="Our Solution"
        title="Meet GoServ — A Smarter Way to Connect."
        subtitle="GoServ brings customers and independent local technicians together through one location-based digital marketplace."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, i) => (
          <FeatureCard key={feature.title} {...feature} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
