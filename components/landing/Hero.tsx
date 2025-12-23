import { ArrowRight, UserPlus } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-36">
      <div className="w-full max-w-[70%] mx-auto text-center flex flex-col items-center gap-4">
        
        <h1
          className="
            text-4xl sm:text-5xl
            font-bold tracking-tight text-zinc-900
            max-w-full sm:max-w-[85%] lg:max-w-[60%]
          "
        >
          Proactive Cybersecurity for a Threat-Driven World.
        </h1>

        <p className="mt-2 max-w-2xl text-base sm:text-lg text-zinc-600">
         ApniSec helps organizations identify, assess, and eliminate security risks through cloud security audits, red team operations, and vulnerability assessments.
        </p>

        <div className="mt-6 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button className="w-full sm:w-48 inline-flex items-center justify-center gap-2 rounded-full bg-green-400 px-6 py-3 text-zinc-800 font-medium hover:bg-green-500 transition">
            <UserPlus size={18} />
            Sign Up
          </button>

          <button className="w-full sm:w-48 inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-zinc-800 font-medium hover:bg-zinc-200 transition">
            Know More
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
