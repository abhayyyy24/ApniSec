'use client';

import { useState } from 'react';
import {
  Eye,
  ShieldCheck,
  Cloud,
  Shield,
  Briefcase,
  ChevronDown,
} from 'lucide-react';

type Service = {
  title: string;
  description: string;
  points: string[];
  icon: React.ElementType;
};

const SERVICES: Service[] = [
  {
    title: 'Dark Eye Watcher',
    description:
      'Monitor the dark web and global threat intelligence sources to detect compromised data, leaked credentials, and brand impersonation risks in real time.',
    points: [
      'Dark Web Monitoring',
      '24x7 Breach Tracking',
      'Threat Intelligence Platform',
      'Data Loss Prevention (DLP)',
      'Brand Protection Services',
    ],
    icon: Eye,
  },
  {
    title: 'Red Team Assessment',
    description:
      'Advanced adversary simulation exercises that mimic real-world attacks to evaluate your organization’s detection, response, and resilience.',
    points: [
      'Social Engineering Simulations',
      'System & Process Vulnerability Assessment',
      'Firewall & Network Audits',
      'Cloud Attack Emulation',
    ],
    icon: ShieldCheck,
  },
  {
    title: 'Cloud Watcher',
    description:
      'Continuous visibility and protection across cloud assets, workloads, and microservices to strengthen your cloud security posture.',
    points: [
      'Asset Monitoring',
      'Cloud Security Posture Management',
      'Microservices Security',
      'Cloud Attack Emulation',
    ],
    icon: Cloud,
  },
  {
    title: 'End-to-End VAPT',
    description:
      'Comprehensive vulnerability assessment and penetration testing across applications, APIs, networks, and infrastructure.',
    points: [
      'Web, API & Mobile Security',
      'Secure Code Review',
      'Vulnerability & Penetration Testing',
      'Network Security',
    ],
    icon: Shield,
  },
  {
    title: 'Virtual CISO',
    description:
      'Strategic security leadership and governance to help organizations mature their security posture and meet compliance requirements.',
    points: [
      'Continuous Vulnerability Monitoring',
      'DevSecOps & Shift-Left Culture',
      'Zero Trust Security Model',
      'Threat Modelling',
      'Compliance & Risk Management',
      'Third Party Risk Assessment',
    ],
    icon: Briefcase,
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="services" className="bg-zinc-900 px-4 py-28">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-100">
            Our Cybersecurity Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
            Enterprise-grade cybersecurity solutions designed to protect
            digital assets, reduce risk, and strengthen organizational resilience.
          </p>
        </div>

        {/* Services List */}
        <ul className="border-b border-zinc-600">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeIndex === index;

            return (
              <li
                key={service.title}
                onMouseEnter={() => setActiveIndex(index)}
                className="border-t  border-zinc-800"
              >
                {/* Header */}
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(isActive ? null : index)
                  }
                  className="flex w-full items-center justify-between py-6 text-left"
                >
                  {/* Left: Icon + Title */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-lg border transition-all duration-300
                        ${
                          isActive
                            ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                            : 'border-zinc-700 text-zinc-400 '
                        }`}
                    >
                      <Icon size={20} />
                    </div>

                    <h3 className="text-xl font-medium text-zinc-100">
                      {service.title}
                    </h3>
                  </div>

                  {/* Mobile Chevron */}
                  <ChevronDown
                    className={`md:hidden text-zinc-400 transition-transform duration-300 ${
                      isActive ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Expandable Content */}
                <div
                  className={`
                    grid overflow-hidden transition-all duration-300 ease-out
                    ${
                      isActive
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }
                  `}
                >
                  <div className="overflow-hidden pb-10">
                    {/* Description */}
                    <p className="mx-auto max-w-4xl text-center text-base text-zinc-300">
                      {service.description}
                    </p>

                    {/* Pills */}
                    <div className="mt-8 flex justify-center">
                      <div className="grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
                        {service.points.map((point) => (
                          <span
                            key={point}
                            className="flex items-center justify-center rounded-full
                              border border-emerald-500/30
                              bg-zinc-800
                              px-4 py-2
                              text-xs font-medium
                              text-emerald-400"
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
