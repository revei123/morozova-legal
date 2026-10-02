import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { articles, getArticle } from "@/data/articles";
import { getService } from "@/data/services";
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
  return {
    ...pageMeta({ title: article.title, description: article.excerpt, path: `/blog/${article.slug}` }),
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const service = getService(article.serviceSlug);
  const related = article.related.map((item) => getArticle(item)).filter((item) => item !== undefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.dateISO,
    image: new URL(article.image, site.url).toString(),
    author: { "@type": "Person", name: site.name },
    description: article.excerpt,
  };

  return (
    <article>
      <Container className="max-w-3xl py-12">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Breadcrumbs items={[{ href: "/", label: "Главная" }, { href: "/blog", label: "Статьи" }, { label: article.title }]} />
        <p className="mt-8 text-sm text-muted">{article.category} · {article.date} · {article.minutes} мин</p>
        <h1 className="display mt-3 text-4xl sm:text-5xl">{article.title}</h1>
      </Container>
      <Container className="max-w-4xl">
        <Image src={article.image} alt={article.imageAlt} width={1600} height={1000} priority className="aspect-[16/9] w-full object-cover" />
      </Container>
      <Container className="max-w-3xl py-10">
        <div className="grid gap-5 text-lg">
          {article.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {service ? (
          <p className="mt-10 border-t border-line pt-6">
            Если ситуация похожа на вашу, посмотрите услугу «<Link href={`/services/${service.slug}`} className="underline">{service.title}</Link>».
          </p>
        ) : null}
        <Link href="/contact" className="mt-8 inline-flex bg-accent px-5 py-3 text-sheet">Записаться на консультацию</Link>
        {related.length ? (
          <section className="mt-14">
            <h2 className="text-2xl">Ещё по теме</h2>
            <ul className="mt-4 grid gap-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/blog/${item.slug}`} className="underline">{item.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </Container>
    </article>
  );
}
