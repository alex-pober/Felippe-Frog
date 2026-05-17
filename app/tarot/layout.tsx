import { Navigation } from "@/components/Navigation";
import Image from "next/image";

export default function TarotLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url("/Template Mock Up - Copy.svg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Navigation />
      <div className="relative z-10 flex justify-center pt-4">
        <a
          href="https://www.instagram.com/feleapfrog"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm text-green-800 hover:bg-white/40 transition-colors"
        >
          <Image
            src="/instagram-icon.svg"
            alt="Instagram"
            width={26}
            height={26}
          />
          <span className="text-xl font-medium">Delve Deeper</span>
        </a>
      </div>
      {children}
    </div>
  );
}
