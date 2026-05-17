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
    <main className="relative z-10 flex items-start justify-center p-4 pt-4 pb-12">
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

        <div className="space-y-4 text-lg text-green-900 text-center font-bold">
          {c.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {c.readMore?.length > 0 && (
          <details className="group mt-6 rounded-lg bg-white/50 backdrop-blur-sm border border-white/40 shadow-sm">
            <summary className="cursor-pointer list-none px-4 py-3 text-green-800 font-semibold flex items-center justify-between select-none">
              <span>Read More</span>
              <span className="transition-transform duration-200 group-open:rotate-180" aria-hidden="true">▾</span>
            </summary>
            <div className="px-4 pb-4 space-y-3 text-green-900 text-left">
              {c.readMore.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </details>
        )}
      </article>
    </main>
  );
}
