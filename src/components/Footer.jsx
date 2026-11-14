import { Twitter, Linkedin, Instagram } from 'lucide-react';

function GoServLogo() {
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
        <circle cx="20" cy="20" r="18" fill="rgba(37,99,235,0.2)" />
        <path d="M20 6C13 6 8 11 8 18c0 4 2.5 8 7 11l5 4 5-4c4.5-3 7-7 7-11 0-7-5-12-12-12z" fill="rgba(37,99,235,0.3)" />
        <text x="12" y="26" fill="white" fontSize="16" fontWeight="bold" fontFamily="Inter, sans-serif">G</text>
      </svg>
      <span className="text-xl font-bold text-white">GoServ</span>
    </div>
  );
}

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'The Problem', href: '#problem' },
  { label: 'Our Solution', href: '#solution' },
  { label: 'How It Works', href: '#how-it-works' },
];

const forCustomers = [
  'Find Services',
  'Compare Technicians',
  'Book Appointments',
  'Live Tracking',
];

const forTechnicians = [
  'Register as Technician',
  'Set Your Prices',
  'Manage Availability',
  'Service History',
];

const homePulseAI = [
  'Add Appliances',
  'Service History',
  'Warranty Alerts',
  'Maintenance Reminders',
];

function FooterColumn({ title, children }) {
  return (
    <div>
      <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {children}
      </ul>
    </div>
  );
}

function FooterLink({ href, children }) {
  const handleClick = (e) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <li>
      <a
        href={href || '#'}
        onClick={handleClick}
        className="text-blue-200/70 hover:text-white text-sm transition-colors duration-200"
      >
        {children}
      </a>
    </li>
  );
}

function FooterText({ children }) {
  return (
    <li className="text-blue-200/70 text-sm">{children}</li>
  );
}

export default function Footer() {
  return (
    <footer id="footer" className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Logo + tagline + description */}
        <div className="mb-12">
          <GoServLogo />
          <p className="text-blue-200 italic mt-3 text-sm">Where Services Meet Solutions.</p>
          <p className="text-blue-200/60 mt-2 max-w-md text-sm leading-relaxed">
            A location-based digital marketplace connecting customers with independent local service professionals.
          </p>
        </div>

        {/* Middle: 4 column grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <FooterColumn title="Quick Links">
            {quickLinks.map((link) => (
              <FooterLink key={link.label} href={link.href}>{link.label}</FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="For Customers">
            {forCustomers.map((item) => (
              <FooterText key={item}>{item}</FooterText>
            ))}
          </FooterColumn>

          <FooterColumn title="For Technicians">
            {forTechnicians.map((item) => (
              <FooterText key={item}>{item}</FooterText>
            ))}
          </FooterColumn>

          <FooterColumn title="HomePulse AI">
            {homePulseAI.map((item) => (
              <FooterText key={item}>{item}</FooterText>
            ))}
          </FooterColumn>
        </div>

        {/* Bottom separator + copyright + socials */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/50 text-sm">
            &copy; 2026 GoServ. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <SocialIcon Icon={Twitter} label="Twitter" />
            <SocialIcon Icon={Linkedin} label="LinkedIn" />
            <SocialIcon Icon={Instagram} label="Instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ Icon, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 transition-colors duration-200"
    >
      <Icon className="w-4 h-4 text-blue-200/70" strokeWidth={2} />
    </a>
  );
}
