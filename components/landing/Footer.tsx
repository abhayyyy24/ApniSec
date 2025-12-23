import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden  px-4 pb-24 pt-24">
      
      {/* Main container */}
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="rounded-3xl border border-zinc-200 bg-white px-6 py-12 shadow-sm md:px-12">
          
          {/* Top grid */}
          <div className="grid gap-10 md:grid-cols-4">
            
            {/* Brand */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
                Apni<span className="text-emerald-600">Sec</span>
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                ApniSec helps organizations proactively secure their digital
                infrastructure through modern cybersecurity solutions,
                threat intelligence, and security assessments.
              </p>

              {/* Social icons */}
              <div className="mt-6 flex items-center gap-4 text-zinc-500">
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4 transition hover:text-zinc-900" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4 transition hover:text-zinc-900" />
                </Link>
                <Link href="#" aria-label="GitHub">
                  <Github className="h-4 w-4 transition hover:text-zinc-900" />
                </Link>
                <Link href="mailto:support@apnisec.com" aria-label="Email">
                  <Mail className="h-4 w-4 transition hover:text-zinc-900" />
                </Link>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-sm font-medium text-zinc-900">Product</h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-600">
                <li><Link href="#" className="hover:text-zinc-900">Features</Link></li>
                <li><Link href="#" className="hover:text-zinc-900">Pricing</Link></li>
                <li><Link href="#" className="hover:text-zinc-900">Integrations</Link></li>
                <li><Link href="#" className="hover:text-zinc-900">Changelog</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-medium text-zinc-900">Resources</h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-600">
                <li><Link href="#" className="hover:text-zinc-900">Documentation</Link></li>
                <li><Link href="#" className="hover:text-zinc-900">Tutorials</Link></li>
                <li><Link href="#" className="hover:text-zinc-900">Blog</Link></li>
                <li><Link href="#" className="hover:text-zinc-900">Support</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-medium text-zinc-900">Company</h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-600">
                <li><Link href="#" className="hover:text-zinc-900">About</Link></li>
                <li><Link href="#" className="hover:text-zinc-900">Careers</Link></li>
                <li><Link href="#" className="hover:text-zinc-900">Contact</Link></li>
                <li><Link href="#" className="hover:text-zinc-900">Partners</Link></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-zinc-200" />

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
            <p>© {new Date().getFullYear()} ApniSec. All rights reserved.</p>

            <div className="flex gap-6">
              <Link href="#" className="hover:text-zinc-900">Privacy Policy</Link>
              <Link href="#" className="hover:text-zinc-900">Terms of Service</Link>
              <Link href="#" className="hover:text-zinc-900">Cookie Settings</Link>
            </div>
          </div>
        </div>
      </div>

      {/*watermark*/}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <h1
          className="
            select-none whitespace-nowrap
            text-[25vw] sm:text-[25vw]
            font-semibold
            leading-none
            tracking-tight
            text-zinc-900/5
            -translate-y-1/4
            bottom-[-6vw] sm:bottom-[-4vw] lg:bottom-[+10vw]
          "
        >
          Apni
          <span className="text-emerald-500/10">Sec</span>
        </h1>
      </div>
    </footer>
  );
}
