export default function WhySection() {
  const items = [
    {
      id: '01',
      title: 'Persistent Surveillance',
      description:
        '24×7 monitoring across dark web sources, breach databases, and threat intelligence feeds to detect risks early.',
    },
    {
      id: '02',
      title: 'Brand Reputation Security',
      description:
        'Identify impersonation attempts, leaked credentials, and brand abuse before they damage customer trust.',
    },
    {
      id: '03',
      title: 'Compliance-Ready Security',
      description:
        'Security practices aligned with regulatory and compliance requirements to reduce audit and legal risks.',
    },
    {
      id: '04',
      title: 'Loss Prevention First',
      description:
        'Prevent financial and data loss proactively instead of reacting after a breach has already occurred.',
    },
  ];

  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl font-semibold text-zinc-900">
            Why apni sec
          </h2>
          <p className="mt-4 text-zinc-600">
            Security built with prevention, visibility, and trust at its core.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 border border-zinc-200 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`
                group relative p-8
                border-zinc-200
                hover:bg-zinc-50
                transition-colors
                ${index % 4 !== 3 ? 'lg:border-r' : ''}
                ${index < 3 ? 'lg:border-b' : ''}
                ${index % 2 !== 1 ? 'md:border-r' : ''}
                ${index < 2 ? 'md:border-b' : ''}
                border-b
              `}
            >
              {/* Number Pill */}
              <span className="inline-flex items-center justify-center rounded-full border border-green-300 px-3 py-1 text-sm font-medium text-zinc-700">
                {item.id}
              </span>

              {/* Title */}
              <h3 className="mt-6 text-lg font-semibold text-zinc-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
