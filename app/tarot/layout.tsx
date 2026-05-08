import Link from "next/link";
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
      <nav className="relative z-50 pt-6 px-6 pb-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/Logo.svg"
                alt="Logo"
                width={48}
                height={48}
                priority
              />
            </Link>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
