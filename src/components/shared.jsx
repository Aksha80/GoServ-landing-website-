export function SectionWrapper({ id, children, className = '', bg = 'white' }) {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-light-blue',
    navy: 'bg-navy text-white',
    gradient: 'bg-gradient-to-br from-navy via-navy-light to-royal text-white',
  };

  return (
    <section id={id} className={`py-20 md:py-28 ${bgClasses[bg] || ''} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ badge, title, subtitle, light = false }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
          light
            ? 'bg-white/10 text-blue-200'
            : 'bg-royal/10 text-royal'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-5 ${
        light ? 'text-white' : 'text-navy'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl leading-relaxed ${
          light ? 'text-blue-100' : 'text-gray-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

