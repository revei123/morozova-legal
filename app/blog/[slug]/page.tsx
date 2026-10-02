import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { articles, getArticle } from "@/data/articles";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMeta({ title: article.title, description: article.excerpt, path: `/blog/${article.slug}` });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.dateISO,
    author: { "@type": "Person", name: site.name },
    description: article.excerpt,
  };

  return (
    <Container className="max-w-3xl pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ href: "/", label: "Главная" }, { href: "/blog", label: "Блог" }, { label: article.title }]} />
      <p className="mt-6 text-xs font-bold tracking-[0.16em] text-cobalt">{article.category} · {article.minutes} мин</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">{article.title}</h1>
      <p className="mt-2 text-sm text-muted">{article.date}</p>
      <div className="mt-8 grid gap-4">
        {article.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-8">{paragraph}</p>
        ))}
      </div>
    </Container>
  );
}
