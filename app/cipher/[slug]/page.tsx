import { notFound } from "next/navigation";
import { pages } from "./pages";

export async function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = pages.find((x) => x.slug === params.slug);
  return {
    title: p?.title ?? "Cipher",
    robots: { index: false, follow: false },
  };
}

export default function CipherPage({ params }: { params: { slug: string } }) {
  const p = pages.find((x) => x.slug === params.slug);
  if (!p) notFound();

  return (
    <main className="relative z-10 flex items-start justify-center p-4 pt-4 pb-12">
      <article className="w-full max-w-2xl bg-white/30 backdrop-blur-sm p-6 md:p-8 rounded-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 text-center">
          {p.title}
        </h1>

        <img
          src={p.image}
          alt={p.imageAlt ?? p.title}
          className="w-full rounded-lg"
          loading="lazy"
        />
      </article>
    </main>
  );
}
