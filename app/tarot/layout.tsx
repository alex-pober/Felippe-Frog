import { Navigation } from "@/components/Navigation";

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
      {children}
    </div>
  );
}
