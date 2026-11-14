import {
  PlusCircle, FileText, History, Bell, CalendarCheck, Wrench,
  Home, AlertTriangle, ChevronRight
} from 'lucide-react';
import { SectionWrapper, SectionHeading } from './shared';
import { useScrollReveal } from '../hooks/useScrollReveal';

const featureCards = [
  {
    icon: PlusCircle,
    title: 'Add Appliances',
    desc: 'AC, refrigerator, washing machine, water purifier and other household appliances.',
  },
  {
    icon: FileText,
    title: 'Appliance Details',
    desc: 'Brand, model, purchase date and warranty information.',
  },
  {
    icon: History,
    title: 'Digital Service History',
    desc: 'Previous repair dates, replaced parts, technician details and service bills.',
  },
  {
    icon: Bell,
    title: 'Warranty Expiry Alerts',
    desc: 'Reminders before appliance warranties expire.',
  },
  {
    icon: CalendarCheck,
    title: 'Maintenance Reminders',
    desc: 'Notifications when an appliance needs scheduled maintenance.',
  },
  {
    icon: Wrench,
    title: 'Book a Technician',
    desc: 'Create a service request directly from your appliance profile.',
  },
];

function FeatureCard({ icon: Icon, title, desc, index, isVisible }) {
  const delayMs = (index + 1) * 120;
  return (
    <div
      className={`group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
        <Icon className="w-6 h-6 text-teal" />
      </div>
      <h3 className="text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

const appliances = [
  {
    emoji: '❄️',
    name: 'Split AC',
    brand: 'Samsung',
    warranty: 'Valid until Mar 2027',
    statusColor: 'bg-teal',
    statusText: 'Active',
  },
  {
    emoji: '🧊',
    name: 'Refrigerator',
    brand: 'LG',
    warranty: 'Expired',
    statusColor: 'bg-red-500',
    statusText: 'Expired',
  },
  {
    emoji: '👕',
    name: 'Washing Machine',
    brand: 'Bosch',
    warranty: 'Last serviced Jun 2026',
    statusColor: 'bg-yellow-500',
    statusText: 'Due',
  },
];

function DashboardMockup({ isVisible }) {
  return (
    <div
      className={`mt-16 transition-all duration-1000 delay-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Section sub-heading */}
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-teal/10 text-teal mb-3">
          Dashboard Preview
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-navy">
          Everything at a Glance
        </h3>
      </div>

      {/* Dashboard container */}
      <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 shadow-2xl overflow-hidden bg-white">
        {/* Header bar */}
        <div className="bg-gradient-to-r from-navy to-navy-light px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
              <Home className="w-4.5 h-4.5 text-white" />
            </div>
            <div>
              <span className="text-white font-bold text-sm tracking-tight">HomePulse AI</span>
              <span className="block text-blue-200 text-[10px]">Smart Home Manager</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Bell className="w-4.5 h-4.5 text-blue-200" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
            </div>
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold text-white">
              P
            </div>
          </div>
        </div>

        {/* Dashboard body */}
        <div className="p-4 md:p-6 space-y-5">
          {/* Summary stat chips */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {[
              { label: 'Appliances', value: '3', color: 'bg-royal/10 text-royal' },
              { label: 'Active Warranties', value: '1', color: 'bg-teal/10 text-teal' },
              { label: 'Alerts', value: '2', color: 'bg-red-50 text-red-600' },
            ].map((s, i) => (
              <div key={i} className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${s.color}`}>
                <span>{s.label}:</span>
                <span className="font-bold">{s.value}</span>
              </div>
            ))}
          </div>

          {/* Appliance cards */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">My Appliances</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {appliances.map((a, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow bg-white group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{a.emoji}</span>
                    <div className="flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full ${a.statusColor}`} />
                      <span className={`text-[10px] font-semibold ${
                        a.statusColor === 'bg-teal' ? 'text-teal' :
                        a.statusColor === 'bg-red-500' ? 'text-red-500' : 'text-yellow-600'
                      }`}>
                        {a.statusText}
                      </span>
                    </div>
                  </div>
                  <h5 className="text-sm font-bold text-navy">{a.name}</h5>
                  <p className="text-xs text-gray-400 mt-0.5">{a.brand}</p>
                  <p className={`text-[11px] mt-2 font-medium ${
                    a.statusColor === 'bg-red-500' ? 'text-red-500' : 'text-gray-500'
                  }`}>
                    {a.warranty}
                  </p>
                  <div className="flex items-center gap-1 mt-2.5 text-royal opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-semibold">View Details</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Notifications</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-red-50/60 border border-red-100">
                <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-red-700">Warranty Expiry Alert</p>
                  <p className="text-[11px] text-red-600/80 mt-0.5">
                    Refrigerator warranty expired 2 months ago
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-yellow-50/60 border border-yellow-100">
                <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Wrench className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-yellow-700">Maintenance Due</p>
                  <p className="text-[11px] text-yellow-600/80 mt-0.5">
                    AC filter cleaning recommended —{' '}
                    <span className="font-semibold text-royal cursor-pointer hover:underline">Book a technician</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Service History */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Recent Service History</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-400">Service</th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-400">Date</th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-400">Details</th>
                    <th className="text-right py-2 font-semibold text-gray-400">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-50">
                    <td className="py-2.5 pr-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-royal/10 flex items-center justify-center">
                          <Wrench className="w-3 h-3 text-royal" />
                        </div>
                        <span className="font-semibold text-navy">AC Repair</span>
                      </div>
                    </td>
                    <td className="py-2.5 pr-4 text-gray-500 whitespace-nowrap">15 Aug 2026</td>
                    <td className="py-2.5 pr-4 text-gray-500">Replaced compressor</td>
                    <td className="py-2.5 text-right font-bold text-navy">₹2,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Dashboard footer */}
        <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[10px] text-gray-400">Powered by GoServ</span>
          <span className="text-[10px] text-royal font-semibold cursor-pointer hover:underline flex items-center gap-0.5">
            Open Full Dashboard <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function HomePulseSection() {
  const [cardsRef, cardsVisible] = useScrollReveal(0.1);
  const [dashRef, dashVisible] = useScrollReveal(0.1);

  return (
    <SectionWrapper id="homepulse" bg="light">
      <SectionHeading
        badge="Smart Home Management"
        title="Your Appliances. Their History. Smarter Maintenance."
        subtitle="HomePulse AI helps households maintain digital records of their appliances, monitor warranties and stay informed about upcoming maintenance needs."
      />

      {/* Part A: Feature cards */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {featureCards.map((card, i) => (
          <FeatureCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            desc={card.desc}
            index={i}
            isVisible={cardsVisible}
          />
        ))}
      </div>

      {/* Part B: Dashboard Mockup */}
      <div ref={dashRef}>
        <DashboardMockup isVisible={dashVisible} />
      </div>
    </SectionWrapper>
  );
}
