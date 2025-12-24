import Image from "next/image";

export default function ImageSection() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        border-b border-zinc-200
        h-[32vh]
        lg:h-[80vh]
        md:h-[30vh]
        sm:h-[12vh]
        mb-10
      "
    >
      <div className="relative w-full h-full">
        
        {/* Background image */}
        <Image
          src="/bg.png"
          alt="Background"
          fill
          priority
          className="
            object-cover
            object-center
            scale-120
            opacity-100
            [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_60%)]
            [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_60%)]
          "
        />

        {/* Foreground SVG */}
        <div
          className="
            absolute bottom-0 left-1/2
            -translate-x-1/2
            z-10
            flex justify-center
            pb-0 sm:pb-0 lg:pb-8
          "
        >
          <Image
  src="/dashboard.svg"
  alt="Hero illustration"
  width={1800}
  height={1100}
  priority
  className="
  w-full
  max-w-[120%]
  scale-[1.5]
  sm:max-w-[130%]
  md:max-w-[130%]
  lg:max-w-[130%]
  xl:max-w-[120%]
  2xl:max-w-[160%]
  drop-shadow-2xl
  lg:scale-[1.5]
  xl:scale-[1.5]
  2xl:scale-[1.5]
  transition-transform
"
/>

        </div>

      </div>
    </section>
  );
}
