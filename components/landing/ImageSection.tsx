import Image from "next/image";

export default function ImageSection() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        border-b border-zinc-200
        h-[32vh]
        lg:h-[80vh]
        md:h-[45vh]
        sm:h-[25vh]
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

        {/* Foreground image — bottom stuck, horizontally centered */}
        <div
          className="
            absolute bottom-0 left-1/2
            -translate-x-1/2
            z-10
            flex justify-center
            pb-4 sm:pb-6 lg:pb-8
          "
        >
          <Image
            src="/hero.png"
            alt="Foreground"
            width={1800}
            height={1100}
            priority
            className="
              w-full
              max-w-[80%]
              lg:max-w-[85%]
              md:max-w-[90%]
              sm:max-w-[95%]
              rounded-2xl
              shadow-2xl
              scale-200
            "
          />
        </div>
      </div>
    </section>
  );
}
