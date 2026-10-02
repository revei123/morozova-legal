import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { cases, getCase } from "@/data/cases";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) return {};
  return pageMeta({ title: item.title, description: item.problem, path: `/practice/${item.slug}` });
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();

  return (
    <Container className="pb-20">
      <Breadcrumbs items={[{ href: "/", label: "Главная" }, { href: "/practice", label: "Практика" }, { label: item.title }]} />
      <p className="mt-6 text-xs font-bold tracking-[0.16em] text-cobalt">{item.topic}</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">{item.title}</h1>
      <div className="mt-8 grid gap-4">
        <Block label="PROBLEM" text={item.problem} />
        <Block label="APPROACH" text={item.approach} />
        <Block label="RESULT" text={item.result} />
      </div>
      <Link href="/contact" className="mt-8 inline-flex rounded-xl bg-cobalt px-5 py-3 font-semibold text-white">Обсудить свою ситуацию</Link>
    </Container>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <article className="panel p-5">
      <p className="text-xs font-bold tracking-[0.16em] text-cobalt">{label}</p>
      <p className="mt-2 leading-7">{text}</p>
    </article>
  );
}
