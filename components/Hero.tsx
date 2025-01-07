import Image from "next/image";

export function Hero() {
  return (
    <div className="relative min-h-[700px]  overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 h-full py-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-green-800 mb-4 md:mb-8 bg-white/30 backdrop-blur-sm p-4 rounded-xl inline-block">
            Welcome to the Lilypad!
          </h1>
          
          <div className="space-y-4 md:space-y-6 text-lg md:text-xl text-green-900">
            <p className="bg-white/30 backdrop-blur-sm p-4 rounded-xl inline-block">
              Hi there, friend! I&apos;m Felippe Frogg, your mischievous guide to a world of whimsy and festival magic.
            </p>
            
            <p className="bg-white/30 backdrop-blur-sm p-4 rounded-xl inline-block">
              A humble frog here to share laughs, dances, and surprises with you. Welcome to my playful world let&apos;s hop into some unforgettable moments
            </p>
          </div>
        </div>
        
        <div className="relative md:absolute right-0 top-0 md:top-1/2 md:-translate-y-1/2 z-[-1] md:h-full w-full md:w-auto">
          <Image
            src="/Lilypad-and-Pond.png"
            alt="Lilypad and Pond"
            width={700}
            height={700}
            priority
            className="rounded-2xl object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  );
}