import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { articles } from "@/data/articles";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Статьи",
  description: "Короткие материалы о договорах, подготовке к консультации, спорах и суде.",
  path: "/blog",
});

const categories = ["Все", ...Array.from(new Set(articles.map((item) => item.category)))];

type Props = { searchParams: Promise<{ tema?: string }> };

export default async function BlogPage({ searchParams }: Props) {
  const { tema } = await searchParams;
  const current = categories.includes(tema ?? "") ? tema! : "Все";
  const list = current === "Все" ? articles : articles.filter((item) => item.category === current);

  return (
    <Container className="py-14 lg:py-20">
      <h1 className="display max-w-3xl text-5xl sm:text-6xl">Статьи</h1>
      <p className="mt-5 max-w-xl text-lg text-muted">Короткие тексты, чтобы понять ситуацию до консультации. Это не разбор вашего документа.</p>
      <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {categories.map((item) => (
          <Link key={item} href={item === "Все" ? "/blog" : `/blog?tema=${encodeURIComponent(item)}`} className={item === current ? "underline" : "text-muted hover:text-ink"} aria-current={item === current ? "page" : undefined}>
            {item}
          </Link>
        ))}
      </div>
      <div className="mt-12 grid gap-12">
        {list.map((item) => (
          <article key={item.slug} className="grid gap-6 border-t border-line pt-8 md:grid-cols-[220px_1fr] md:items-center">
            <Link href={`/blog/${item.slug}`}>
              <Image src={item.image} alt="" width={880} height={640} className="aspect-[4/3] w-full object-cover" />
            </Link>
            <div>
              <p className="text-sm text-muted">{item.category} · {item.date}</p>
              <h2 className="mt-2 text-3xl leading-snug">
                <Link href={`/blog/${item.slug}`} className="hover:text-accent">{item.title}</Link>
              </h2>
              <p className="mt-3 max-w-xl text-muted">{item.excerpt}</p>
              <Link href={`/blog/${item.slug}`} className="mt-4 inline-block text-sm underline">Читать</Link>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
