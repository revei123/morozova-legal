import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
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
  return pageMeta({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "Person", name: site.name },
    areaServed: site.city,
  };

  return (
    <Container className="pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ href: "/", label: "Главная" }, { href: "/services", label: "Услуги" }, { label: service.title }]} />
      <div className="mt-6">
        <Badge>{service.title}</Badge>
      </div>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">{service.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{service.description}</p>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="panel p-5">
          <h2 className="text-2xl font-bold">Когда обращаются</h2>
          <ul className="mt-4 grid gap-2">
            {service.situations.map((item) => (
              <li key={item} className="rounded-xl bg-canvas px-3 py-3 text-sm">{item}</li>
            ))}
          </ul>
        </article>
        <article className="panel p-5">
          <h2 className="text-2xl font-bold">Что входит</h2>
          <ul className="mt-4 grid gap-2">
            {service.includes.map((item) => (
              <li key={item} className="rounded-xl bg-canvas px-3 py-3 text-sm">{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Как проходит работа</h2>
        <ol className="mt-4 grid gap-3 lg:grid-cols-4">
          {service.steps.map((step, index) => (
            <li key={step.title} className="panel p-4">
              <span className="text-sm font-bold text-cobalt">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-bold">{step.title}</h3>
              <p className="mt-1 text-sm leading-6 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold">FAQ</h2>
        <Accordion items={faq} />
      </section>

      <Link href={`/contact?topic=${service.topic}`} className="mt-8 inline-flex rounded-xl bg-cobalt px-5 py-3 font-semibold text-white hover:bg-cobalt-deep">
        Получить консультацию
      </Link>
    </Container>
  );
}
