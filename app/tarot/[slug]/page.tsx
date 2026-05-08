import { notFound } from "next/navigation";
import { cards } from "./cards";

export async function generateStaticParams() {
  return cards.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = cards.find((x) => x.slug === params.slug);
  return {
    title: c?.title ?? "Tarot",
    robots: { index: false, follow: false },
  };
}

export default function TarotCardPage({ params }: { params: { slug: string } }) {
  const c = cards.find((x) => x.slug === params.slug);
  if (!c) notFound();

  return (
    <main className="relative z-10 min-h-screen flex items-center justify-center p-4 py-12">
      <article className="w-full max-w-2xl bg-white/30 backdrop-blur-sm p-6 md:p-8 rounded-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 text-center">
          {c.title}
        </h1>

        <img
          src={c.image}
          alt={c.imageAlt ?? c.title}
          className="w-full rounded-lg mb-6"
          loading="lazy"
        />

        <div className="space-y-4 text-lg text-green-900">
          {c.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
