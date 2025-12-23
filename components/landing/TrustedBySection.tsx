export default function TrustedBySection() {
  
  const desktopLogos = [
    "google",
    "netflix",
    "flipkart",
    "cloudflare",
    "facebook",
    "atlanssian",
    "yahoo",
    "amazon",
    "bugcrowd",
    "figma",
    "licious",
    "gitlab",
    "dell",
    "mastercard",
    "dominos",
  ];

  
  const mobileRows = [
    ["google", "netflix", "flipkart", "cloudflare", "facebook"],
    ["atlanssian", "yahoo", "amazon", "bugcrowd"],
    ["figma", "licious", "gitlab"],
    ["mastercard"],
  ];

  return (
    <section className="relative w-full py-20 mb-10">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Heading */}
        <p className="text-base font-medium text-zinc-500">
          Trusted by security-first teams
        </p>

        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-600">
          Organizations protected by ApniSec
        </h2>

        {/* Divider */}
        <div className="mx-auto mt-6 h-px w-24 bg-zinc-200" />

        {/*  MOBILE  */}
        <div className="mt-12 space-y-6 md:hidden">
          {mobileRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex justify-center gap-4"
            >
              {row.map((logo) => (
                <img
                  key={logo}
                  src={`/${logo}.svg`}
                  alt={logo}
                  className="h-7 w-auto opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
          ))}
        </div>

        {/* DESKTOP  */}
        <div className="mt-14 hidden md:grid grid-cols-5 gap-x-8 gap-y-10 place-items-center">
          {desktopLogos.map((logo) => (
            <img
              key={logo}
              src={`/${logo}.svg`}
              alt={logo}
              className="h-9 w-auto opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
