import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { articles } from "@/data/articles";
import { faq } from "@/data/faq";
import { getService, services } from "@/data/services";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({ title: service.title, description: service.description, path: `/services/${service.slug}` });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = articles.filter((item) => item.serviceSlug === service.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "Person", name: site.name },
    areaServed: site.city,
  };

  return (
    <Container className="py-12 lg:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ href: "/", label: "Главная" }, { href: "/services", label: "Услуги" }, { label: service.title }]} />
      <h1 className="display mt-8 max-w-3xl text-5xl sm:text-6xl">{service.title}</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">{service.description}</p>

      <section className="mt-14 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl">В каких ситуациях обращаются</h2>
          <ul className="mt-4 grid gap-3">
            {service.situations.map((item) => (
              <li key={item} className="border-t border-line pt-3">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl">Чем я могу помочь</h2>
          <ul className="mt-4 grid gap-3">
            {service.help.map((item) => (
              <li key={item} className="border-t border-line pt-3">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl">Как проходит работа</h2>
        <ol className="mt-6 grid gap-8 md:grid-cols-4">
          {service.steps.map((step, index) => (
            <li key={step.title}>
              <p className="text-sm text-muted">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14 max-w-2xl">
        <h2 className="text-2xl">Какие документы могут понадобиться</h2>
        <ul className="mt-4 grid gap-3">
          {service.documents.map((item) => (
            <li key={item} className="border-t border-line pt-3">{item}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">Если чего-то нет, это не повод откладывать разговор.</p>
      </section>

      {related.length ? (
        <section className="mt-14">
          <h2 className="text-2xl">Почитать по теме</h2>
          <ul className="mt-4 grid gap-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/blog/${item.slug}`} className="underline">{item.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-14">
        <h2 className="text-2xl">Вопросы</h2>
        <div className="mt-4">
          <Accordion items={faq} />
        </div>
      </section>

      <Link href="/contact" className="mt-10 inline-flex bg-accent px-5 py-3 text-sheet hover:bg-ink">
        Записаться на консультацию
      </Link>
    </Container>
  );
}
