export default function StatsSection() {
  return (
    <section  className="bg-zinc-900 py-24">
      <div className="mx-auto max-w-6xl px-5">
        {/*TOP CARD*/}
        <div className="relative mb-10  overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-500 to-green-400 px-10 py-16 text-center">
          <h2 className="text-6xl font-semibold tracking-tight text-white md:text-7xl">
            849M+
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Lines of Code Reviewed
          </p>

          {/*dot pattern */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:12px_12px]" />
        </div>

        {/*BOTTOM CARDS*/}
        <div className="grid gap-6 md:grid-cols-3">
          <StatCard
            value="3Bn+"
            label="Records Scraped"
          />
          <StatCard
            value="15K+"
            label="Assets Monitored"
            highlight
          />
          <StatCard
            value="200TB"
            label="Data Analysed"
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
  highlight = false,
}: {
  value: string;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-neutral-800 px-8 py-10 text-center transition
        ${highlight ? 'text-emerald-400' : 'text-white'}
      `}
    >
      <div className="text-4xl font-semibold">{value}</div>
      <p className="mt-3 text-sm text-white/60">{label}</p>
    </div>
  );
}
