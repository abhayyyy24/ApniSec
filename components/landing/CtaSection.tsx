import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Gradient background */}
        <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(to_bottom,rgba(34,197,94,0.25)_0%,rgba(34,197,94,0.25)_35%,transparent_75%)]" />

      {/*Dot pattern*/}
    <div
        className="
        pointer-events-none absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.45)_1px,transparent_1px)]
        bg-[size:14px_14px]
        [mask-image:linear-gradient(to_bottom,black_0%,black_40%,transparent_100%)]
        [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_60%,transparent_100%)]"/>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
          Secure Your Digital Presence Today
        </h2>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-900/70">
          Get proactive security monitoring, threat intelligence, and expert
          assessments tailored to protect your organization before risks turn
          into breaches.
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <button className="group inline-flex items-center gap-3 rounded-full bg-green-400 px-7 py-3 text-sm font-medium text-black transition hover:bg-green-400">
            Get Started with ApniSec
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
