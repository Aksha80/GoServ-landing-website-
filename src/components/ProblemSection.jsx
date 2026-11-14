import { MapPin, DollarSign, Users, CalendarClock } from 'lucide-react';
import { SectionWrapper, SectionHeading } from './shared';
import { useScrollReveal } from '../hooks/useScrollReveal';

const problems = [
  {
    icon: MapPin,
    title: 'Finding Nearby Technicians',
    description:
      'When an unexpected household problem occurs, finding an available local technician can be difficult.',
    color: 'text-red-500',
    bg: 'bg-red-50',
    accent: 'bg-red-500',
  },
  {
    icon: DollarSign,
    title: 'Unclear Pricing',
    description:
      'Customers may struggle to compare service charges before selecting a technician.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    accent: 'bg-amber-500',
  },
  {
    icon: Users,
    title: 'Limited Opportunities for Local Technicians',
    description:
      'Many skilled independent technicians and small repair shops struggle to reach more customers.',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    accent: 'bg-orange-500',
  },
  {
    icon: CalendarClock,
    title: 'Booking and Coordination',
    description:
      'Finding a technician, confirming availability, scheduling an appointment and coordinating their arrival can be inconvenient.',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    accent: 'bg-rose-500',
  },
];

function ProblemCard({ icon: Icon, title, description, color, bg, accent, index }) {
  const [ref, isVisible] = useScrollReveal(0.12);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'visible animate-fade-in-up stagger-' + (index + 1) : ''} group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 overflow-hidden`}
    >
      {/* Accent number watermark */}
      <span className="absolute top-4 right-5 text-7xl font-black text-gray-100/80 select-none leading-none transition-colors duration-300 group-hover:text-gray-200/80">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Top accent line */}
      <div className={`absolute top-0 left-0 h-1 w-0 ${accent} transition-all duration-500 group-hover:w-full rounded-t-2xl`} />

      {/* Icon */}
      <div className={`relative w-14 h-14 ${bg} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
        <Icon className={`w-7 h-7 ${color}`} strokeWidth={1.8} />
      </div>

      {/* Content */}
      <h3 className="relative text-lg font-bold text-navy mb-3 leading-snug">
        {title}
      </h3>
      <p className="relative text-gray-600 leading-relaxed text-[0.95rem]">
        {description}
      </p>
    </div>
  );
}

export default function ProblemSection() {
  return (
    <SectionWrapper id="problem" bg="light">
      <SectionHeading
        badge="The Challenge"
        title="Everyday Home Service Problems Shouldn't Be This Difficult."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {problems.map((problem, i) => (
          <ProblemCard key={problem.title} {...problem} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
