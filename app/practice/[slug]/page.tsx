import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { cases, getCase } from "@/data/cases";
import { getService } from "@/data/services";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) return {};
  return pageMeta({ title: item.title, description: item.situation, path: `/practice/${item.slug}` });
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();
  const service = getService(item.serviceSlug);

  return (
    <Container className="max-w-3xl py-12 lg:py-16">
      <Breadcrumbs items={[{ href: "/", label: "Главная" }, { href: "/practice", label: "Практика" }, { label: item.title }]} />
      <h1 className="display mt-8 text-4xl sm:text-5xl">{item.title}</h1>
      <p className="mt-4 text-sm text-muted">Демонстрационный пример. Не реальное дело.</p>
      <div className="mt-10 grid gap-8">
        <Field label="Ситуация" text={item.situation} />
        <Field label="Задача" text={item.task} />
        <Field label="Работа" text={item.work} />
        <Field label="Результат" text={item.result} />
      </div>
      {service ? (
        <p className="mt-8">
          Близкая услуга: <Link href={`/services/${service.slug}`} className="underline">{service.title}</Link>
        </p>
      ) : null}
      <Link href="/contact" className="mt-8 inline-flex bg-accent px-5 py-3 text-sheet">Записаться на консультацию</Link>
    </Container>
  );
}

function Field({ label, text }: { label: string; text: string }) {
  return (
    <div className="border-t border-line pt-4">
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-2 text-lg">{text}</p>
    </div>
  );
}
